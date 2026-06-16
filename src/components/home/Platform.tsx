import { useState } from 'react';
import SectionHead from '../ui/SectionHead';
import PhoneFrame from '../ui/PhoneFrame';
import BrowserFrame from '../ui/BrowserFrame';
import { DocIcon, PinIcon, ChartIcon, BellIcon, TruckIcon, RouteIcon, ShieldIcon } from '../icons';
import type { ReactNode } from 'react';

interface Feature { icon: ReactNode; title: string; body: string; }

const FEATURES: Record<string, Feature[]> = {
  shipper: [
    { icon: <DocIcon />, title: 'Shipment request intake', body: 'LTL · partial · FTL dry van — submit lane, equipment, weight, and pickup window.' },
    { icon: <PinIcon />, title: 'Available carrier capacity', body: 'See matched capacity already moving through your lane.' },
    { icon: <ChartIcon />, title: 'Quote management', body: 'Quotes flow back into the app — searchable, comparable, history kept.' },
    { icon: <BellIcon />, title: 'Shipment status tracking', body: 'Live status milestones from the carrier app — no phone tag.' },
  ],
  carrier: [
    { icon: <TruckIcon />, title: 'Post available trucks', body: 'Share dates, locations, equipment type, and capacity windows in-app.' },
    { icon: <RouteIcon />, title: 'Backhaul & lane preferences', body: 'Declare empty lanes and preferred backhaul markets — surface return-leg matches.' },
    { icon: <ShieldIcon />, title: 'Carrier verification', body: 'DOT/MC, authority, and insurance verified before assignment.' },
    { icon: <DocIcon />, title: 'In-app documents', body: 'Rate cons, BOLs, and PODs uploaded in-app — no email back-and-forth.' },
  ],
  dispatcher: [
    { icon: <RouteIcon />, title: 'Capacity-to-demand matching', body: 'Match shipper requests with positioned carrier capacity — favor low-deadhead fits.' },
    { icon: <ChartIcon />, title: 'Live margin visibility', body: 'Shipper quote, carrier pay, and margin computed on every load.' },
    { icon: <BellIcon />, title: 'Insurance expiration alerts', body: 'Automatic warnings before coverage lapses on assigned carriers.' },
    { icon: <DocIcon />, title: 'Notes & shipment history', body: 'Per-load operational notes plus an 8-step shipment timeline.' },
  ],
};

const TABS = [
  { id: 'shipper', label: 'Shipper App', sub: 'Request, capacity, track', color: 'var(--blue)' },
  { id: 'carrier', label: 'Carrier App', sub: 'Post, backhaul, deliver', color: 'var(--orange)' },
  { id: 'dispatcher', label: 'Matching Engine', sub: 'Score, recommend, assign', color: '#3DDC97' },
];

// Real app screenshot per tab
const TAB_SCREENSHOTS: Record<string, { src: string; alt: string; type: 'phone' | 'browser'; caption: string }> = {
  shipper: {
    src: '/screenshots/shipper-04-live-tracking.png',
    alt: 'CarGo Shipper app — live tracking with carrier details and ETA',
    type: 'phone',
    caption: 'Shipper view: carrier assigned, live ETA, tracking number, BOL access, and cargo insurance details.',
  },
  carrier: {
    src: '/screenshots/carrier-03-load-detail.png',
    alt: 'CarGo Carrier app — load detail with match score 89%, rate, deadhead, and accept button',
    type: 'phone',
    caption: 'Carrier load detail: rate, deadhead miles, match score, cargo specs, and one-tap Accept.',
  },
  dispatcher: {
    src: '/screenshots/admin-01-dashboard.png',
    alt: 'CarGo Operations Dashboard — KPI cards, shipment list, status filters',
    type: 'browser',
    caption: 'Operations Dashboard: incoming requests, active loads, weekly revenue, margin, and the full shipment list.',
  },
};

interface FutureChipProps { title: string; body: string; }
function FutureChip({ title, body }: FutureChipProps) {
  return (
    <div style={{ padding: 16, borderRadius: 10, background: 'rgba(37,99,235,0.06)', border: '1px dashed rgba(111,168,255,0.3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#6FA8FF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Future</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{title}</span>
      </div>
      <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)', marginTop: 8, lineHeight: 1.5 }}>{body}</div>
    </div>
  );
}

export default function Platform() {
  const [active, setActive] = useState<'shipper' | 'carrier' | 'dispatcher'>('shipper');
  const activeTab = TABS.find(t => t.id === active)!;

  return (
    <section id="platform" className="section section-dark bg-grid">
      <div className="wrap" style={{ position: 'relative' }}>
        <SectionHead
          onDark
          eyebrow="The platform · MVP"
          title="Three connected apps. One matching layer."
          lead="Every MVP feature is being built around the same core question: which positioned truck is the best fit for this shipper's load — and how do we move it cleanly from request to delivery?"
        />

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
          {TABS.map(t => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id as typeof active)}
                style={{
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  border: '1px solid ' + (isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'),
                  color: 'white',
                  padding: '14px 20px', borderRadius: 12, cursor: 'pointer',
                  textAlign: 'left', minWidth: 220,
                  display: 'flex', alignItems: 'center', gap: 12,
                  transition: 'all .2s ease',
                }}
              >
                <span style={{
                  width: 8, height: 8, borderRadius: 999,
                  background: isActive ? t.color : 'rgba(255,255,255,0.25)',
                  boxShadow: isActive ? `0 0 0 4px ${t.color}33` : 'none',
                }}></span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{t.sub}</div>
                </div>
              </button>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="platform-feat-grid">
          {FEATURES[active].map(f => (
            <div key={f.title} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: 20,
              minHeight: 170,
            }}>
              <span style={{ color: activeTab.color, display: 'inline-flex' }}>{f.icon}</span>
              <div style={{ fontWeight: 600, fontSize: 14, marginTop: 14, color: 'white' }}>{f.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 8, lineHeight: 1.5 }}>{f.body}</div>
            </div>
          ))}
        </div>

        {/* Real screenshot for active tab */}
        {(() => {
          const shot = TAB_SCREENSHOTS[active];
          if (!shot) return null;
          return (
            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: shot.type === 'phone' ? '1fr 2fr' : '1fr', gap: 28, alignItems: 'start' }} className="platform-screenshot-row">
              {shot.type === 'phone' ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div className="mono on-dark">Live screenshot</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55, marginTop: 4 }}>
                      {shot.caption}
                    </p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <PhoneFrame src={shot.src} alt={shot.alt} width={240} />
                  </div>
                </>
              ) : (
                <div>
                  <div className="mono on-dark" style={{ marginBottom: 12 }}>Live screenshot</div>
                  <BrowserFrame src={shot.src} alt={shot.alt} url="CarGo Operations Platform · Shipments Dashboard" />
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.55, marginTop: 10 }}>
                    {shot.caption}
                  </p>
                </div>
              )}
            </div>
          );
        })()}

        <div style={{ marginTop: 32 }}>
          <div className="mono on-dark" style={{ marginBottom: 12 }}>On the roadmap (post-MVP)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="platform-future-grid">
            <FutureChip title="Available truck board" body="Carrier-posted capacity surfaced as a structured board for matching." />
            <FutureChip title="Backhaul matching workflow" body="Automatic return-leg suggestions when a load drops in a market." />
            <FutureChip title="Deadhead miles avoided metric" body="Per-shipment and per-carrier reporting on empty-mile reduction." />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .platform-feat-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .platform-feat-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 700px) { .platform-future-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 700px) { .platform-screenshot-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
