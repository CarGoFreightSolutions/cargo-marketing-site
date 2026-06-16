import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const NAV_ITEMS = [
  { href: '#app-preview', label: 'See the App' },
  { href: '#problem', label: 'The Problem' },
  { href: '#how', label: 'How It Works' },
  { href: '#shippers', label: 'Shippers' },
  { href: '#carriers', label: 'Carriers' },
  { href: '#platform', label: 'Platform' },
  { href: '#invest', label: 'Investors' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map(n => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </div>
        <div className="nav-cta">
          <Link to="/shipper/login" className="nav-login">Shipper Login</Link>
          <span className="nav-divider" aria-hidden>|</span>
          <Link to="/carrier/login" className="nav-login">Carrier Login</Link>
          <a href="#shipper-contact" className="btn btn-primary" style={{ padding: '8px 14px', fontSize: 13 }}>
            Find Capacity <span className="arr">→</span>
          </a>
          <button
            className="nav-burger"
            aria-label="Open menu"
            onClick={() => setOpen(o => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_ITEMS.map(n => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <div className="mobile-menu-divider"></div>
        <Link to="/shipper/login" onClick={() => setOpen(false)}>Shipper Login</Link>
        <Link to="/carrier/login" onClick={() => setOpen(false)}>Carrier Login</Link>
        <a href="#shipper-contact" className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center' }} onClick={() => setOpen(false)}>Find Capacity</a>
      </div>
    </nav>
  );
}
