/**
 * CargoMap — real OpenStreetMap visualization for CarGo.
 *
 * Uses Leaflet directly (no react-leaflet) so it's stable across React versions
 * and small to maintain. Renders real OSM tiles by default; if VITE_MAPBOX_TOKEN
 * is provided the map switches to Mapbox raster tiles. (Google Maps requires
 * their JS SDK and is intentionally out of scope here — see README.)
 *
 * Designed to be shared across the shipper app, carrier app, admin dashboard,
 * and marketing site. Each app keeps its own copy (no monorepo) but the prop
 * API and rendering behaviour are identical.
 */

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface CargoMapPoint {
  lat: number;
  lng: number;
  label?: string;       // e.g. "Dallas, TX"
  sublabel?: string;    // e.g. "Pickup · 8am window"
}

export interface CargoMapProps {
  pickup: CargoMapPoint;
  delivery: CargoMapPoint;
  /** Optional precomputed route geometry. If omitted, draws a dashed line
   *  between pickup and delivery to make the demo nature obvious. */
  polyline?: [number, number][];
  /** Free-text shipment status shown as a small overlay chip (optional). */
  status?: string;
  /** Container height. Default 280. */
  height?: number | string;
  /** Container border-radius. Default 12. */
  radius?: number;
  /** Set true to disable pan/zoom (good for marketing previews). */
  staticView?: boolean;
  /** Subtle "Demo shipment route" caption shown bottom-left so we never imply
   *  these are live coordinates from a real tracking feed. Default true. */
  showDemoLabel?: boolean;
}

// Pretty marker pins using DivIcon — avoids Leaflet's default-icon path bug
// under Vite bundling and matches CarGo brand colors.
function makePinIcon(color: string, glyph: string) {
  return L.divIcon({
    className: '',
    iconSize: [30, 38],
    iconAnchor: [15, 36],
    popupAnchor: [0, -32],
    html: `
      <div style="
        width:30px;height:38px;position:relative;
        display:flex;justify-content:center;align-items:flex-start;
        filter:drop-shadow(0 2px 4px rgba(0,0,0,0.25));
      ">
        <svg viewBox="0 0 30 38" width="30" height="38" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 1 C7 1 1 7 1 15 c0 10 14 22 14 22 s14-12 14-22 c0-8-6-14-14-14 z"
                fill="${color}" stroke="white" stroke-width="2"/>
        </svg>
        <span style="
          position:absolute;top:6px;left:0;right:0;text-align:center;
          color:white;font-size:14px;font-weight:700;line-height:1;
          font-family:Inter,system-ui,sans-serif;pointer-events:none;
        ">${glyph}</span>
      </div>`,
  });
}

const PICKUP_ICON = makePinIcon('#2563EB', 'P');   // CarGo blue
const DELIVERY_ICON = makePinIcon('#FF6A1A', 'D'); // CarGo orange

// ── Tile provider selection ─────────────────────────────────────────────────
// Default: OpenStreetMap (no API key required, ToS-compliant attribution).
// If VITE_MAPBOX_TOKEN is set, use Mapbox tiles. VITE_GOOGLE_MAPS_API_KEY is
// reserved for a future Google Maps JS SDK swap (not handled here — see README).
function getTileLayer(): L.TileLayer {
  const mapboxToken = (import.meta as ImportMeta & { env?: Record<string, string> })
    .env?.VITE_MAPBOX_TOKEN;
  if (mapboxToken) {
    return L.tileLayer(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`,
      {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© Mapbox © OpenStreetMap',
        maxZoom: 19,
      },
    );
  }
  return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  });
}

export default function CargoMap({
  pickup,
  delivery,
  polyline,
  status,
  height = 280,
  radius = 12,
  staticView = false,
  showDemoLabel = true,
}: CargoMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  // Mount + unmount
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      zoomControl: !staticView,
      dragging: !staticView,
      scrollWheelZoom: !staticView,
      doubleClickZoom: !staticView,
      touchZoom: !staticView,
      boxZoom: !staticView,
      keyboard: !staticView,
      attributionControl: true,
    });
    getTileLayer().addTo(map);
    layerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;
    return () => { map.remove(); mapRef.current = null; layerRef.current = null; };
  }, [staticView]);

  // Render pickup/delivery/polyline whenever props change
  useEffect(() => {
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    const pickupLL = L.latLng(pickup.lat, pickup.lng);
    const deliveryLL = L.latLng(delivery.lat, delivery.lng);

    L.marker(pickupLL, { icon: PICKUP_ICON, title: pickup.label ?? 'Pickup' })
      .addTo(layer)
      .bindTooltip(
        `<strong>Pickup</strong>${pickup.label ? ` · ${pickup.label}` : ''}` +
        (pickup.sublabel ? `<br/><span style="opacity:.7">${pickup.sublabel}</span>` : ''),
        { direction: 'top', offset: [0, -28] },
      );

    L.marker(deliveryLL, { icon: DELIVERY_ICON, title: delivery.label ?? 'Delivery' })
      .addTo(layer)
      .bindTooltip(
        `<strong>Delivery</strong>${delivery.label ? ` · ${delivery.label}` : ''}` +
        (delivery.sublabel ? `<br/><span style="opacity:.7">${delivery.sublabel}</span>` : ''),
        { direction: 'top', offset: [0, -28] },
      );

    // Route line — use provided polyline (e.g. from a routing API) if present,
    // otherwise a dashed straight line so it's visually obvious this is a
    // simplified demo geometry, not a real driving route.
    const line: [number, number][] = polyline?.length
      ? polyline
      : [[pickup.lat, pickup.lng], [delivery.lat, delivery.lng]];
    L.polyline(line, {
      color: '#FF6A1A',
      weight: 4,
      opacity: 0.9,
      dashArray: polyline ? undefined : '8 8',
      lineJoin: 'round',
      lineCap: 'round',
    }).addTo(layer);

    // Fit to route with a comfortable padding
    map.fitBounds(L.latLngBounds([pickupLL, deliveryLL]).pad(0.35));
  }, [pickup.lat, pickup.lng, pickup.label, pickup.sublabel,
      delivery.lat, delivery.lng, delivery.label, delivery.sublabel,
      polyline]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        borderRadius: radius,
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.08)',
        background: '#E8EEF5',
      }}
    >
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {status && (
        <div style={{
          position: 'absolute', top: 10, right: 10, zIndex: 500,
          background: 'rgba(255,255,255,0.94)',
          padding: '6px 10px', borderRadius: 999,
          fontSize: 12, fontWeight: 700, color: '#1F2937',
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          {status}
        </div>
      )}

      {showDemoLabel && (
        <div style={{
          position: 'absolute', bottom: 8, left: 8, zIndex: 500,
          background: 'rgba(17,24,39,0.72)', color: 'white',
          padding: '4px 9px', borderRadius: 6,
          fontSize: 10.5, fontWeight: 600, letterSpacing: '0.02em',
          fontFamily: 'Inter, system-ui, sans-serif',
          pointerEvents: 'none',
        }}>
          Demo shipment route
        </div>
      )}
    </div>
  );
}

// ─── City coordinates lookup (demo data) ─────────────────────────────────────
// Lets callers pass city names instead of explicit lat/lng. Lat/Lng are real;
// the routes drawn between them are simplified straight-line demos unless a
// real `polyline` is supplied.
//
// To add a new demo city: append { name: 'City, ST', lat: <num>, lng: <num> }.
// To swap to real driving polylines: pass `polyline` from a routing API
// (Mapbox Directions, Google Directions, OSRM, etc.) to <CargoMap />.

export const DEMO_CITIES: Record<string, { lat: number; lng: number }> = {
  // Texas Triangle (CarGo's MVP launch lanes)
  'dallas, tx':       { lat: 32.7767, lng: -96.7970 },
  'fort worth, tx':   { lat: 32.7555, lng: -97.3308 },
  'austin, tx':       { lat: 30.2672, lng: -97.7431 },
  'houston, tx':      { lat: 29.7604, lng: -95.3698 },
  'san antonio, tx':  { lat: 29.4241, lng: -98.4936 },
  'waco, tx':         { lat: 31.5493, lng: -97.1467 },
  'temple, tx':       { lat: 31.0982, lng: -97.3428 },
  'georgetown, tx':   { lat: 30.6329, lng: -97.6779 },
  'san marcos, tx':   { lat: 29.8833, lng: -97.9414 },
  'new braunfels, tx':{ lat: 29.7030, lng: -98.1245 },
  'corsicana, tx':    { lat: 32.0951, lng: -96.4689 },
  'huntsville, tx':   { lat: 30.7235, lng: -95.5507 },
  'katy, tx':         { lat: 29.7858, lng: -95.8245 },
  // Cross-state demo lanes (per user spec)
  'los angeles, ca':  { lat: 34.0522, lng: -118.2437 },
  'phoenix, az':      { lat: 33.4484, lng: -112.0740 },
  'tucson, az':       { lat: 32.2226, lng: -110.9747 },
  'palm springs, ca': { lat: 33.8303, lng: -116.5453 },
  // Other lanes that appear in mock data
  'memphis, tn':      { lat: 35.1495, lng: -90.0490 },
  'atlanta, ga':      { lat: 33.7490, lng: -84.3880 },
  'new orleans, la':  { lat: 29.9511, lng: -90.0715 },
  'oklahoma city, ok':{ lat: 35.4676, lng: -97.5164 },
  'pasadena, tx':     { lat: 29.6911, lng: -95.2091 },
  'pearland, tx':     { lat: 29.5636, lng: -95.2861 },
};

/** Look up coords by `"City, ST"` (case-insensitive). Returns undefined if not found. */
export function cityToCoords(name: string): { lat: number; lng: number } | undefined {
  return DEMO_CITIES[name.trim().toLowerCase()];
}
