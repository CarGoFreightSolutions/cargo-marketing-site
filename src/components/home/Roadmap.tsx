import SectionHead from '../ui/SectionHead';

interface Phase {
  tag: string;
  title: string;
  status: 'in-progress' | 'next' | 'planned';
  items: string[];
}

const PHASES: Phase[] = [
  {
    tag: 'Phase 01', title: 'Formation & verification', status: 'in-progress',
    items: ['Texas LLC formation', 'EIN and business banking', 'Veteran-owned exemption', 'Registered agent in place'],
  },
  {
    tag: 'Phase 02', title: 'Brokerage authority process', status: 'in-progress',
    items: ['FMCSA broker authority application', 'BMC-84 / BMC-85 bond or trust', 'BOC-3 process agent filing', 'Broker insurance'],
  },
  {
    tag: 'Phase 03', title: 'Carrier onboarding & contracts', status: 'next',
    items: ['Shipper & carrier contracts', 'Verified carrier onboarding flow', 'Carrier package & vetting runbook', 'Insurance & authority monitoring'],
  },
  {
    tag: 'Phase 04', title: 'Controlled beta launch', status: 'planned',
    items: ['Closed beta with selected shippers', 'Initial verified carrier pool', 'Live margin & tracking in production', 'Texas-anchored lanes first'],
  },
  {
    tag: 'Phase 05', title: 'Automation & matching intelligence', status: 'planned',
    items: ['Available truck board live', 'Backhaul matching workflow', 'Deadhead-miles-avoided metric', 'Scale beyond launch lanes'],
  },
];

const STATUS_MAP = {
  'in-progress': { c: 'var(--orange)', l: 'In progress' },
  'next':        { c: 'var(--blue)',   l: 'Next' },
  'planned':     { c: 'var(--steel-400)', l: 'Planned' },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="section" style={{ background: 'var(--steel-50)' }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Compliance & launch roadmap"
          title="A staged path from formation to a matching marketplace."
          lead="CarGo is preparing to launch — building the legal, operational, and technology foundation today so the platform is operationally ready the day brokerage authority is in place."
        />

        <div className="roadmap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {PHASES.map((p) => {
            const s = STATUS_MAP[p.status];
            return (
              <div key={p.tag} style={{
                background: 'white', border: '1px solid var(--steel-100)',
                borderRadius: 14, padding: 22, position: 'relative',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ color: s.c, fontWeight: 700 }}>{p.tag}</span>
                  <span style={{
                    fontSize: 9, fontWeight: 600,
                    color: s.c, padding: '3px 7px', borderRadius: 999,
                    border: `1px solid ${s.c}`, opacity: 0.9,
                  }}>{s.l}</span>
                </div>
                <div style={{
                  height: 3, background: s.c, borderRadius: 3, marginTop: 12, marginBottom: 14,
                  opacity: p.status === 'planned' ? 0.3 : 1,
                }}></div>
                <div style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.25 }}>{p.title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ fontSize: 12.5, color: 'var(--steel-500)', display: 'flex', gap: 7, lineHeight: 1.45 }}>
                      <span style={{ color: s.c, marginTop: 6, width: 5, height: 5, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: 28, padding: '14px 18px', borderRadius: 10,
          background: 'white', border: '1px dashed var(--steel-200)',
          fontSize: 12, color: 'var(--steel-500)', lineHeight: 1.5,
        }}>
          <strong style={{ color: 'var(--ink)' }}>Pre-launch disclosure:</strong> CarGo Freight Solutions, LLC is preparing to launch.
          The company is not currently a licensed freight broker, does not currently own trucks, and is not currently operating as a motor carrier.
          Brokerage authority is in process. Forward-looking statements reflect current plans and are subject to regulatory clearance.
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .roadmap-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 780px)  { .roadmap-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px)  { .roadmap-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
