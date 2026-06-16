import { Link } from 'react-router-dom';
import PhoneFrame from '../ui/PhoneFrame';

/** Real screenshot pair replacing the synthetic CapacityConsole */
function HeroScreenshots() {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      {/* Ambient glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '5%', left: 0, right: 0, bottom: '5%',
        background: 'radial-gradient(ellipse at 45% 35%, rgba(37,99,235,0.28), transparent 65%)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />

      <div className="hero-phones" style={{ position: 'relative', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
        {/* Primary phone — CarGo Carrier (blue branded, clearly recognisable) */}
        <PhoneFrame
          className="hero-phone-primary"
          src="/screenshots/carrier-01-home.png"
          alt="CarGo Carrier app — active load en route Dallas → Houston"
          width={230}
        />

        {/* Secondary phone — Shipper live tracking (offset down for depth) */}
        <PhoneFrame
          className="hero-phone-secondary"
          src="/screenshots/shipper-04-live-tracking.png"
          alt="CarGo Shipper app — live tracking, carrier assigned, ETA 4 min"
          width={188}
          style={{ marginTop: 72 }}
        />
      </div>

      {/* Floating info pill */}
      <div style={{
        position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
        background: 'white', color: 'var(--ink)',
        borderRadius: 10, padding: '10px 16px',
        boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
        display: 'flex', gap: 10, alignItems: 'center',
        whiteSpace: 'nowrap',
      }} className="hero-floating">
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3DDC97', flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)' }}>
            Driver en route · FLK-2026-83197
          </div>
          <div style={{ fontSize: 11, color: 'var(--steel-400)', marginTop: 1 }}>
            David Martinez · Freightliner Cascadia · 53' dry van · 4 min ETA
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="section bg-grid" style={{ background: 'var(--navy)', color: 'white', overflow: 'hidden', paddingTop: 88, paddingBottom: 120 }}>
      {/* Decorative streaks */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="streak" style={{ top: '18%', left: 0, width: '24%' }}></div>
        <div className="streak" style={{ top: '70%', left: 0, width: '14%', opacity: 0.4 }}></div>
        <div className="streak" style={{ top: '40%', right: 0, width: '18%', transform: 'scaleX(-1)', opacity: 0.5 }}></div>
        <div style={{
          position: 'absolute', right: -160, top: -160, width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.32), transparent 60%)', filter: 'blur(20px)',
        }} />
        <div style={{
          position: 'absolute', left: -180, bottom: -200, width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,106,26,0.18), transparent 60%)', filter: 'blur(20px)',
        }} />
      </div>

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="hero-grid">
          {/* Left: copy */}
          <div>
            <span className="chip on-dark" style={{ borderColor: 'rgba(255,106,26,0.4)', color: '#FFB587' }}>
              <span className="dot" style={{ background: 'var(--orange)' }}></span>
              Preparing to launch · Texas-based · Veteran-owned
            </span>
            <h1 style={{ marginTop: 22 }}>
              Reduce empty miles.{' '}
              <span style={{ color: '#6FA8FF' }}>Move freight smarter.</span>
            </h1>
            <p className="lead on-dark" style={{ marginTop: 22, maxWidth: 580 }}>
              CarGo Freight Solutions is building a technology-enabled freight brokerage platform
              designed to connect shippers with available carrier capacity, reduce deadhead miles,
              and improve truck utilization across LTL, partial truckload, and full truckload dry van freight.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <a href="#shipper-contact" className="btn btn-primary">
                Find Capacity <span className="arr">→</span>
              </a>
              <a href="#carrier-contact" className="btn btn-secondary">
                Post Available Truck
              </a>
              <a href="#invest" className="btn btn-ghost">Investor Inquiries</a>
            </div>

            <div className="hero-subline">
              <span>Already registered?</span>
              <Link to="/shipper/login">Shipper Login</Link>
              <span className="sep">|</span>
              <Link to="/carrier/login">Carrier Login</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 48 }}>
              <div className="kpi">
                <span className="v">~35%</span>
                <span className="l">Industry deadhead miles*</span>
              </div>
              <div className="kpi">
                <span className="v">LTL · PTL · FTL</span>
                <span className="l">Dry van focus</span>
              </div>
              <div className="kpi">
                <span className="v">3-app</span>
                <span className="l">Matching platform</span>
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 10 }}>
              *Industry estimates of empty-mile rates vary widely by segment and lane. CarGo is designed to help carriers reduce, not eliminate, deadhead.
            </div>
          </div>

          {/* Right: real app screenshots */}
          <HeroScreenshots />
        </div>

        {/* Trust strip */}
        <div style={{ marginTop: 88, display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28 }}>
          <span className="mono on-dark">Building to the standards of</span>
          <span style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '-0.01em' }}>
            <span>FMCSA broker authority process</span><span style={{ opacity: 0.4 }}>·</span>
            <span>BMC-84 / 85</span><span style={{ opacity: 0.4 }}>·</span>
            <span>BOC-3</span><span style={{ opacity: 0.4 }}>·</span>
            <span>MC / DOT verification</span><span style={{ opacity: 0.4 }}>·</span>
            <span>Veteran-owned (TX)</span>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
        @media (max-width: 1000px) {
          .hero-phones { gap: 12px !important; }
          .hero-phone-primary { width: 190px !important; }
          .hero-phone-secondary { width: 154px !important; margin-top: 52px !important; }
        }
        @media (max-width: 480px) {
          .hero-phone-secondary { display: none !important; }
          .hero-phone-primary { width: 220px !important; }
          .hero-floating { display: none !important; }
        }
      `}</style>
    </section>
  );
}
