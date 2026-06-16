import SectionHead from '../ui/SectionHead';
import BrowserFrame from '../ui/BrowserFrame';
import { ShieldIcon, ChartIcon, PinIcon, BellIcon } from '../icons';
import type { ReactNode } from 'react';

interface Duty { icon: ReactNode; title: string; body: string; }

const OPS_DUTIES: Duty[] = [
  {
    icon: <ShieldIcon stroke="currentColor" />,
    title: 'Verifies carriers',
    body: 'Reviews authority, MC/DOT, insurance, and equipment fit before assignment — no automatic awards to unvetted capacity.',
  },
  {
    icon: <ChartIcon stroke="currentColor" />,
    title: 'Manages quotes & margin',
    body: 'Sets shipper quote and carrier pay with live margin visibility — protects unit economics on every load.',
  },
  {
    icon: <PinIcon stroke="currentColor" />,
    title: 'Tracks shipment status',
    body: 'Monitors the 8-step shipment workflow, intervenes on exceptions, and keeps shipper and carrier in sync.',
  },
  {
    icon: <BellIcon stroke="currentColor" />,
    title: 'Maintains operational oversight',
    body: 'Insurance expirations, carrier history, operational notes, and shipment notes — one operations record per load.',
  },
];

export default function Operations() {
  return (
    <section id="operations" className="section section-dark" style={{ background: 'var(--navy-2, #0F1C40)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 56, alignItems: 'center' }}>
          <div>
            <SectionHead
              onDark
              eyebrow="Automation-assisted operations"
              title="Automated matching. Operational control."
              lead="CarGo is being built around an automation-assisted operating model that uses shipment, lane, pricing, equipment, carrier capacity, authority, insurance, and performance data to support smarter freight matching."
            />
            <p className="lead on-dark" style={{ marginTop: -40, marginBottom: 16 }}>
              The platform is designed to recommend best-fit carrier capacity, support quote and margin decisions, surface backhaul opportunities, track shipment status, and maintain operational visibility from request to delivery.
            </p>
            <p className="lead on-dark" style={{ marginBottom: 28 }}>
              Operational oversight remains in place for compliance, exceptions, carrier verification, claims support, and service quality — allowing CarGo to scale as a data-driven freight marketplace without losing control of critical freight decisions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
              {OPS_DUTIES.map(d => (
                <div key={d.title} style={{ display: 'flex', gap: 14 }}>
                  <span style={{
                    width: 32, height: 32, flexShrink: 0,
                    background: 'rgba(255,106,26,0.14)',
                    border: '1px solid rgba(255,106,26,0.3)',
                    borderRadius: 8, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--orange)',
                  }}>{d.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: 'white', fontSize: 14 }}>{d.title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4, lineHeight: 1.5 }}>{d.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real admin dashboard screenshot */}
          <div>
            <BrowserFrame
              src="/screenshots/admin-02-shipment-detail.png"
              alt="CarGo Operations Platform — shipment detail showing status workflow, quote and margin, and carrier assignment"
              url="CarGo Operations Platform · Shipment CGO-2026-0006"
            />
            <div style={{
              marginTop: 12, fontSize: 12,
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.5,
              fontFamily: 'var(--mono)',
            }}>
              Actual CarGo Operations Platform screenshot — status workflow, quote &amp; margin panel, and carrier assignment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
