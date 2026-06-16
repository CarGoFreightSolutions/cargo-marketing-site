import type { ReactNode } from 'react';

interface RoundLineProps { label: string; value: ReactNode; }
function RoundLine({ label, value }: RoundLineProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 12, gap: 12 }}>
      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: 'white', textAlign: 'right' }}>{value}</span>
    </div>
  );
}

export default function InvestorCTA() {
  return (
    <section id="invest" className="section section-dark" style={{ background: 'linear-gradient(180deg, #0A1430 0%, #14254B 100%)', overflow: 'hidden' }}>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="streak" style={{ top: 32, right: 0, width: 200 }}></div>
        <div className="streak" style={{ bottom: 56, right: '20%', width: 120, opacity: 0.4 }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center' }} className="invest-grid">
          <div>
            <span className="eyebrow on-dark"><span className="dot"></span>Investors &amp; strategic partners</span>
            <h2 style={{ marginTop: 18, color: 'white' }}>
              Help build the matching layer for one of trucking's most persistent inefficiencies.
            </h2>
            <p className="lead on-dark" style={{ marginTop: 18, maxWidth: 620 }}>
              CarGo is preparing to launch a freight brokerage platform focused on one of trucking's most
              persistent inefficiencies: empty miles. We are building the legal, operational, and technology
              foundation for an automation-assisted freight marketplace that helps shippers find capacity and carriers
              improve utilization.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                Discuss Investment or Strategic Partnership <span className="arr">→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">Request investor brief</a>
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16, padding: 28,
          }}>
            <span className="mono on-dark">At a glance</span>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <RoundLine label="Stage" value="Pre-launch · seed-stage" />
              <RoundLine label="Entity" value="CarGo Freight Solutions, LLC" />
              <RoundLine label="State" value="Texas (formation in progress)" />
              <RoundLine label="Designation" value="Veteran-owned" />
              <RoundLine label="Focus" value="Empty-mile reduction · LTL · PTL · FTL dry van" />
              <RoundLine label="Authority" value={<span style={{ color: '#FFB587' }}>● Broker authority in process</span>} />
            </div>
            <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 0' }} />
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
              Detailed financials, cap table, and the technical roadmap are available under NDA.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .invest-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
