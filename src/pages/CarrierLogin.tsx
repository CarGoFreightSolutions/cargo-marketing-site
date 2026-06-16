import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/layout/Logo';

export default function CarrierLogin() {
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMsg('Authenticating…');
    setTimeout(() => setMsg('Sign-in not yet available — public launch Q3 2026.'), 600);
  };

  return (
    <div className="auth-shell">
      {/* Left: pitch panel — orange accent */}
      <aside className="auth-side">
        <div className="bg"></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo onDark />
          </Link>
        </div>

        <div className="auth-pitch" style={{ position: 'relative', zIndex: 1 }}>
          <span className="chip on-dark" style={{ borderColor: 'rgba(255,106,26,0.4)', color: '#FFB587' }}>
            <span className="dot" style={{ background: 'var(--orange)' }}></span> Carrier Portal
          </span>
          <h2 style={{ marginTop: 18 }}>Post trucks. Fill backhauls. Earn more.</h2>
          <p>Share available capacity, declare your preferred lanes, and get matched to freight that fits trucks already on the move.</p>
          <ul className="auth-feats">
            <li>Post available trucks and capacity windows</li>
            <li>Declare preferred lanes &amp; backhaul needs</li>
            <li>Verified loads matched to your authority</li>
            <li>In-app rate cons, BOLs, and PODs</li>
          </ul>
        </div>

        <div style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          app.shipwithcargo.com / carrier / login
        </div>
      </aside>

      {/* Right: form */}
      <main className="auth-form-wrap">
        <form className="auth-form" onSubmit={handleSubmit}>
          <Link to="/" className="auth-back">← Back to shipwithcargo.com</Link>
          <h1>Carrier sign in</h1>
          <p className="sub">Access your CarGo carrier account to post trucks and manage loads.</p>

          <div className="auth-field">
            <label htmlFor="mc">MC # or DOT #</label>
            <input id="mc" name="mc" type="text" autoComplete="off" placeholder="MC-XXXXXX" required />
          </div>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="username" placeholder="dispatch@carrier.com" required />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="••••••••" required />
          </div>

          <div className="auth-row">
            <label><input type="checkbox" style={{ marginRight: 6 }} /> Remember this device</label>
            <a href="#" style={{ color: 'var(--orange)' }}>Forgot password?</a>
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit"
            style={{ background: 'var(--orange)', boxShadow: '0 6px 16px rgba(255,106,26,0.32)' }}
          >
            Sign in to Carrier Portal <span className="arr">→</span>
          </button>

          {msg && (
            <div style={{ marginTop: 14, fontSize: 13, color: 'var(--steel-500)', minHeight: 18, textAlign: 'center' }}>{msg}</div>
          )}

          <div className="auth-foot">
            New to CarGo? <a href="#contact">Apply for carrier access</a>
          </div>

          <div className="auth-switch">
            <span>Are you a shipper?</span>
            <Link to="/shipper/login">Shipper Login →</Link>
          </div>

          <div style={{ marginTop: 32, fontSize: 11, color: 'var(--steel-400)', lineHeight: 1.5 }}>
            Protected sign-in. By continuing, you agree to CarGo's Terms and Privacy Policy.
            Carrier access only — shipper portals are separate.
          </div>
        </form>
      </main>
    </div>
  );
}
