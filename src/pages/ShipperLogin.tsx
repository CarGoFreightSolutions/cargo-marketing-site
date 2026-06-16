import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/layout/Logo';

export default function ShipperLogin() {
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMsg('Authenticating…');
    setTimeout(() => setMsg('Sign-in not yet available — public launch Q3 2026.'), 600);
  };

  return (
    <div className="auth-shell">
      {/* Left: pitch panel */}
      <aside className="auth-side">
        <div className="bg"></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo onDark />
          </Link>
        </div>

        <div className="auth-pitch" style={{ position: 'relative', zIndex: 1 }}>
          <span className="chip on-dark" style={{ borderColor: 'rgba(37,99,235,0.4)', color: '#6FA8FF' }}>
            <span className="dot" style={{ background: '#6FA8FF' }}></span> Shipper Portal
          </span>
          <h2 style={{ marginTop: 18 }}>Ship anything, smarter.</h2>
          <p>Quote, book, and track LTL, partial, and full truckload dry van shipments — from one connected platform.</p>
          <ul className="auth-feats">
            <li>Instant quotes for LTL, partial &amp; FTL</li>
            <li>Live shipment tracking and ETAs</li>
            <li>Verified carriers, vetted on every load</li>
            <li>Quote history and spend reporting</li>
          </ul>
        </div>

        <div style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          app.cargofreightsolutions.com / shipper / login
        </div>
      </aside>

      {/* Right: form */}
      <main className="auth-form-wrap">
        <form className="auth-form" onSubmit={handleSubmit}>
          <Link to="/" className="auth-back">← Back to cargofreightsolutions.com</Link>
          <h1>Shipper sign in</h1>
          <p className="sub">Access your CarGo shipper account to request quotes and track shipments.</p>

          <div className="auth-field">
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" autoComplete="username" placeholder="you@company.com" required />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="••••••••" required />
          </div>

          <div className="auth-row">
            <label><input type="checkbox" style={{ marginRight: 6 }} /> Remember this device</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary auth-submit">
            Sign in to Shipper Portal <span className="arr">→</span>
          </button>

          {msg && (
            <div style={{ marginTop: 14, fontSize: 13, color: 'var(--steel-500)', minHeight: 18, textAlign: 'center' }}>{msg}</div>
          )}

          <div className="auth-foot">
            New to CarGo? <a href="#contact">Request shipper access</a>
          </div>

          <div className="auth-switch">
            <span>Are you a carrier?</span>
            <Link to="/carrier/login">Carrier Login →</Link>
          </div>

          <div style={{ marginTop: 32, fontSize: 11, color: 'var(--steel-400)', lineHeight: 1.5 }}>
            Protected sign-in. By continuing, you agree to CarGo's Terms and Privacy Policy.
            Shipper access only — carrier portals are separate.
          </div>
        </form>
      </main>
    </div>
  );
}
