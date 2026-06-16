import SectionHead from '../ui/SectionHead';
import PhoneFrame from '../ui/PhoneFrame';
import { TruckIcon } from '../icons';

interface StepProps {
  n: string;
  title: string;
  body: string;
  colorBar: string;
}

function Step({ n, title, body, colorBar }: StepProps) {
  return (
    <div style={{
      background: 'white', border: '1px solid var(--steel-100)', borderRadius: 14,
      padding: 28, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: colorBar }}></div>
      <span className="mono" style={{ color: colorBar, fontWeight: 700 }}>{n}</span>
      <h3 style={{ marginTop: 14, fontSize: 18 }}>{title}</h3>
      <p style={{ marginTop: 10, color: 'var(--steel-500)', fontSize: 13.5, lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}

interface FlowNodeProps {
  title: string;
  sub: string;
  iconColor: string;
  lines: string[];
}

function FlowNode({ title, sub, iconColor, lines }: FlowNodeProps) {
  return (
    <div style={{
      background: 'white', borderRadius: 12, padding: 20,
      border: '1px solid var(--steel-100)', boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 36, height: 36, borderRadius: 9, background: iconColor, color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <TruckIcon stroke="white" />
        </span>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{title}</div>
          <div className="mono" style={{ fontSize: 10 }}>{sub}</div>
        </div>
      </div>
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {lines.map(l => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--steel-500)' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--steel-300)', flexShrink: 0 }}></span>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowCenter() {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 2, background: 'repeating-linear-gradient(90deg, var(--steel-300) 0 6px, transparent 6px 12px)', transform: 'translateY(-50%)' }} className="flow-line"></div>
      <div style={{
        position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        background: 'var(--navy)', color: 'white', borderRadius: 12, padding: '18px 22px',
        boxShadow: '0 12px 30px rgba(11,18,38,0.15)',
      }}>
        <span className="mono on-dark">CarGo Dispatch</span>
        <div style={{ fontWeight: 700, fontSize: 16 }}>Matching Layer</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="chip on-dark" style={{ fontSize: 10, padding: '3px 8px' }}>Match</span>
          <span className="chip on-dark" style={{ fontSize: 10, padding: '3px 8px' }}>Verify</span>
          <span className="chip on-dark" style={{ fontSize: 10, padding: '3px 8px' }}>Dispatch</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .flow-line { display: none; } }
      `}</style>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="wrap">
        <SectionHead
          eyebrow="How CarGo matches capacity"
          title="Connecting shipper demand with trucks already on the move."
          lead="CarGo is being built as an automation-assisted freight matching platform. The platform is designed to match shipper requests with verified carrier capacity that is already positioned, returning, or passing through the right lane — using capacity data, lane direction, equipment fit, timing, pricing context, and carrier verification signals to support smarter matches."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="how-grid">
          <Step n="01" title="Carriers post available capacity"
            body="Available trucks, preferred lanes, backhaul needs, dates, equipment, and capacity windows posted from the Carrier app."
            colorBar="var(--orange)" />
          <Step n="02" title="Shippers submit freight requests"
            body="LTL, partial, or full truckload dry van — pickup window, equipment, weight, and lane submitted from the Shipper app."
            colorBar="var(--blue)" />
          <Step n="03" title="Platform scores & matches"
            body="The matching layer scores shipper demand against positioned carrier capacity — favoring trucks already moving through the right lane, reducing unnecessary deadhead, and surfacing best-fit options for assignment."
            colorBar="#3DDC97" />
          <Step n="04" title="Carrier executes & confirms"
            body="Verified carrier accepts in-app, updates status from pickup to delivery, uploads BOLs and PODs, and unlocks any matched backhaul."
            colorBar="#6FA8FF" />
        </div>

        {/* Screenshot strip — one phone per step */}
        <div style={{
          marginTop: 40,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          alignItems: 'end',
        }} className="how-screenshot-strip">
          {[
            {
              src: '/screenshots/carrier-05-availability.png',
              alt: 'CarGo Carrier — set availability',
              step: '01',
              color: 'var(--orange)',
            },
            {
              src: '/screenshots/shipper-02-new-shipment.png',
              alt: 'CarGo Shipper — new shipment',
              step: '02',
              color: 'var(--blue)',
            },
            {
              src: '/screenshots/shipper-03-matching.png',
              alt: 'CarGo — matching your carrier',
              step: '03',
              color: '#3DDC97',
            },
            {
              src: '/screenshots/carrier-01-home.png',
              alt: 'CarGo Carrier — active load en route',
              step: '04',
              color: '#6FA8FF',
            },
          ].map(({ src, alt, step, color }) => (
            <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <PhoneFrame src={src} alt={alt} />
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: 11, fontWeight: 700,
                color, letterSpacing: '0.06em',
              }}>
                Step {step}
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div style={{
          marginTop: 56,
          background: 'var(--steel-50)',
          border: '1px solid var(--steel-100)',
          borderRadius: 16, padding: '36px 28px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28, alignItems: 'center' }} className="flow-grid">
            <FlowNode title="Carrier App" sub="Post capacity · Backhaul" iconColor="var(--orange)" lines={[
              'Available truck',
              'Preferred lanes',
              'Backhaul needs',
            ]} />
            <FlowCenter />
            <FlowNode title="Shipper App" sub="Request · Track" iconColor="var(--blue)" lines={[
              'Freight request',
              'Quote received',
              'Live ETA',
            ]} />
          </div>
        </div>

        <style>{`
          @media (max-width: 1000px) { .how-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .how-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 900px) { .flow-grid { grid-template-columns: 1fr !important; gap: 20px !important; } }
          @media (max-width: 900px) { .how-screenshot-strip { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 460px) { .how-screenshot-strip { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}
