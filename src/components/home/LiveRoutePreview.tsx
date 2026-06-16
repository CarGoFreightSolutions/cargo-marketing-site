import SectionHead from '../ui/SectionHead';
import CargoMap, { DEMO_CITIES } from '../CargoMap';

/**
 * LiveRoutePreview — embeds the real Leaflet/OSM map component the actual
 * product uses, showing three representative demo lanes. Visitors see actual
 * map tiles and real city coordinates, not a screenshot or a stylized graphic.
 *
 * To change the demo lanes, edit LANES below. To add a city, add an entry to
 * DEMO_CITIES in src/components/CargoMap.tsx.
 */

interface Lane {
  pickupKey: keyof typeof DEMO_CITIES | string;
  deliveryKey: keyof typeof DEMO_CITIES | string;
  badge: string;
  note: string;
  color: string;
}

const LANES: Lane[] = [
  {
    pickupKey: 'dallas, tx',
    deliveryKey: 'austin, tx',
    badge: 'Texas Triangle · Lane',
    note: 'Sample shipment: Dallas → Austin · ~195 mi · Partial TL Dry Van.',
    color: 'var(--orange)',
  },
  {
    pickupKey: 'fort worth, tx',
    deliveryKey: 'houston, tx',
    badge: 'Texas Triangle · Lane',
    note: 'Sample shipment: Fort Worth → Houston · ~265 mi · Full TL Dry Van.',
    color: 'var(--blue)',
  },
  {
    pickupKey: 'los angeles, ca',
    deliveryKey: 'phoenix, az',
    badge: 'Cross-state · Demo',
    note: 'Sample shipment: Los Angeles → Phoenix · ~370 mi · Refrigerated.',
    color: '#3DDC97',
  },
];

export default function LiveRoutePreview() {
  return (
    <section className="section" style={{ background: 'var(--steel-50)' }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Real map · live preview"
          title="Real map tiles. Real routes. Same component the product uses."
          lead="These previews use OpenStreetMap and the exact CargoMap component that ships inside the shipper app, the carrier app, and the operations dashboard. Drag, zoom, hover the pins. The lanes shown are sample demo shipments — not a live tracking feed."
        />

        <div
          className="route-preview-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        >
          {LANES.map((lane) => {
            const p = DEMO_CITIES[lane.pickupKey as keyof typeof DEMO_CITIES];
            const d = DEMO_CITIES[lane.deliveryKey as keyof typeof DEMO_CITIES];
            if (!p || !d) return null;
            const pretty = (k: string) => k.replace(/(^|, )([a-z])/g, (_, p1, c) => p1 + c.toUpperCase()).replace(/, ([a-z]{2})$/, (_, s) => ', ' + s.toUpperCase());
            const pickupLabel = pretty(lane.pickupKey);
            const deliveryLabel = pretty(lane.deliveryKey);
            return (
              <div
                key={`${lane.pickupKey}-${lane.deliveryKey}`}
                style={{
                  background: 'white',
                  border: '1px solid var(--steel-100)',
                  borderRadius: 14,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CargoMap
                  pickup={{ lat: p.lat, lng: p.lng, label: pickupLabel }}
                  delivery={{ lat: d.lat, lng: d.lng, label: deliveryLabel }}
                  height={240}
                  radius={0}
                />
                <div style={{ padding: '14px 16px 16px' }}>
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: lane.color,
                    }}
                  >
                    {lane.badge}
                  </span>
                  <div style={{ marginTop: 6, fontWeight: 600, fontSize: 15, color: 'var(--ink)' }}>
                    {pickupLabel} → {deliveryLabel}
                  </div>
                  <p style={{ marginTop: 8, fontSize: 12.5, color: 'var(--steel-500)', lineHeight: 1.55 }}>
                    {lane.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{
          marginTop: 22, fontSize: 12, color: 'var(--steel-500)',
          lineHeight: 1.5, textAlign: 'center', maxWidth: 720, margin: '22px auto 0',
        }}>
          Maps powered by Leaflet + OpenStreetMap. The CarGo product can swap to Mapbox or Google Maps
          via a single environment variable when those keys are provisioned.
        </p>
      </div>

      <style>{`
        @media (max-width: 1000px) { .route-preview-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .route-preview-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
