import { Link } from 'react-router-dom';
import Logo from './Logo';

interface FootColProps {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

function FootCol({ title, links }: FootColProps) {
  return (
    <div>
      <div className="mono on-dark" style={{ marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {links.map(l => (
          l.href.startsWith('/') ? (
            <Link key={l.label} to={l.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{l.label}</Link>
          ) : (
            <a key={l.label} href={l.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{l.label}</a>
          )
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32 }}>
          <div style={{ maxWidth: 380 }}>
            <Logo onDark />
            <div style={{ marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              CarGo Freight Solutions, LLC — preparing to launch an automation-assisted freight matching platform
              designed to reduce deadhead miles and connect shippers with available carrier capacity. Move Anything. Smarter.
            </div>
            <div style={{ marginTop: 16, fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
              8713 Airport Fwy, North Richland Hills, TX 76180<br />
              Registered agent: TRUE Space · Veteran-owned
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 56 }} className="footer-cols">
            <FootCol title="Company" links={[
              { label: 'About', href: '#' },
              { label: 'How It Works', href: '#how' },
              { label: 'Investors', href: '#invest' },
              { label: 'Contact', href: '#contact' },
            ]} />
            <FootCol title="Platform" links={[
              { label: 'Find Capacity', href: '#shipper-contact' },
              { label: 'Post Available Truck', href: '#carrier-contact' },
              { label: 'Shipper Login', href: '/shipper/login' },
              { label: 'Carrier Login', href: '/carrier/login' },
            ]} />
            <FootCol title="Legal" links={[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Use', href: '#' },
              { label: 'Compliance Roadmap', href: '#roadmap' },
            ]} />
          </div>
        </div>
        <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.08)', margin: '36px 0 20px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
          <span>© 2026 CarGo Freight Solutions, LLC. All rights reserved.</span>
          <span>Pre-launch · Brokerage authority in process · Texas, USA</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </footer>
  );
}
