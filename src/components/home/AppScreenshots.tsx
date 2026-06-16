import SectionHead from '../ui/SectionHead';
import BrowserFrame from '../ui/BrowserFrame';
import PhoneFrame from '../ui/PhoneFrame';

interface PhoneCardProps {
  src: string;
  alt: string;
  label: string;
  caption: string;
  color: string;
}

function PhoneCard({ src, alt, label, caption, color }: PhoneCardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <PhoneFrame src={src} alt={alt} width={168} />
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.07em',
          textTransform: 'uppercase', color,
        }}>
          {label}
        </div>
        <div style={{
          marginTop: 5, fontSize: 13,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.45, maxWidth: 164,
        }}>
          {caption}
        </div>
      </div>
    </div>
  );
}

interface ScreenCaptionProps {
  label: string;
  color: string;
  children: string;
}

function ScreenCaption({ label, color, children }: ScreenCaptionProps) {
  return (
    <div style={{
      marginTop: 14,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 10,
      padding: '12px 16px',
    }}>
      <span style={{
        fontSize: 11, fontWeight: 700, color,
        letterSpacing: '0.07em', textTransform: 'uppercase',
        whiteSpace: 'nowrap', marginTop: 1, flexShrink: 0,
      }}>
        {label}
      </span>
      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', lineHeight: 1.55 }}>
        {children}
      </span>
    </div>
  );
}

export default function AppScreenshots() {
  return (
    <section id="app-preview" className="section" style={{ background: 'var(--navy-2, #0F1C40)', overflow: 'hidden' }}>
      <div className="wrap">
        <SectionHead
          onDark
          align="center"
          eyebrow="The platform · live screenshots"
          title="Real product. Real screens."
          lead="Every screen below is from the actual CarGo platform — the operations dashboard, the shipper app, and the carrier app. No mockups or concept art."
        />

        {/* ── Operations Dashboard ─────────────────────────────────────────── */}
        <BrowserFrame
          src="/screenshots/admin-01-dashboard.png"
          alt="CarGo Operations Dashboard — shipment list, KPI cards, status filters"
          url="CarGo Operations Platform · Shipments Dashboard"
        />
        <ScreenCaption label="Operations Dashboard" color="#6FA8FF">
          The ops team view. Incoming requests, active loads, KPI cards (needs action, in transit,
          weekly revenue, margin), status filters, and the full shipment list — all in one screen.
          Freight and courier shipment types are tracked separately.
        </ScreenCaption>

        {/* ── Shipment Detail ──────────────────────────────────────────────── */}
        <div style={{ marginTop: 24 }}>
          <BrowserFrame
            src="/screenshots/admin-02-shipment-detail.png"
            alt="CarGo Shipment Detail — 8-step status workflow, quote and margin, carrier assignment"
            url="CarGo Operations Platform · Shipment CGO-2026-0006"
          />
          <ScreenCaption label="Shipment Detail" color="#3DDC97">
            Each shipment shows the full 8-step status workflow (Requested → Reviewing → Quote Ready →
            Quote Accepted → Carrier Assigned → Pickup Scheduled → In Transit → Delivered), the
            shipper quote, carrier pay, CarGo margin, carrier assignment with DOT/MC and rating, and
            pickup and delivery addresses.
          </ScreenCaption>
        </div>

        {/* ── Mobile app phones ───────────────────────────────────────────── */}
        <div style={{ marginTop: 64 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 36,
            justifyContent: 'center',
          }}>
            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span className="mono on-dark">Shipper &amp; Carrier mobile apps</span>
            <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, alignItems: 'end' }}
            className="phone-grid"
          >
            <PhoneCard
              src="/screenshots/shipper-02-new-shipment.png"
              alt="CarGo Shipper app — new shipment address entry"
              label="Shipper App"
              color="var(--blue)"
              caption="Submit a freight request: enter origin, destination, and choose from saved locations."
            />
            <PhoneCard
              src="/screenshots/shipper-03-matching.png"
              alt="CarGo — Matching your carrier"
              label="Carrier Matching"
              color="#6FA8FF"
              caption="Platform verifies pickup location, matches nearby carriers, and confirms equipment availability."
            />
            <PhoneCard
              src="/screenshots/shipper-04-live-tracking.png"
              alt="CarGo Shipper — live shipment tracking with carrier details"
              label="Live Tracking"
              color="var(--orange)"
              caption="Driver en route: live ETA, tracking number, carrier name, equipment, and BOL access."
            />
            <PhoneCard
              src="/screenshots/carrier-01-home.png"
              alt="CarGo Carrier app — active load home screen"
              label="Carrier App"
              color="#3DDC97"
              caption="Carrier home shows active load: route, delivery ETA, rate per mile, distance, and cargo specs."
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .phone-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .phone-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
