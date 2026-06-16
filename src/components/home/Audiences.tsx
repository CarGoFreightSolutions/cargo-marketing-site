import { Link } from 'react-router-dom';

interface AudienceCardProps {
  id: string;
  tag: string;
  color: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  login: { label: string; to: string };
  bullets: string[];
  stat: { k: string; v: string };
}

function AudienceCard({ id, tag, color, eyebrow, title, body, cta, login, bullets }: AudienceCardProps) {
  return (
    <div id={id} style={{
      background: 'white', border: '1px solid var(--steel-100)', borderRadius: 16,
      padding: 36, display: 'flex', flexDirection: 'column',
      boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: color }}></div>
      <span className="eyebrow" style={{ color }}>
        <span className="dot" style={{ background: color }}></span>{tag}
      </span>
      <div style={{
        marginTop: 14, padding: '12px 14px',
        background: color + '12', borderRadius: 8,
        borderLeft: `3px solid ${color}`,
        fontSize: 14, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4,
      }}>
        "{eyebrow}"
      </div>
      <h3 style={{ marginTop: 18, fontSize: 24, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{title}</h3>
      <p style={{ marginTop: 12, color: 'var(--steel-500)', fontSize: 14.5, lineHeight: 1.55 }}>{body}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {bullets.map(b => (
          <li key={b} style={{ fontSize: 13, color: 'var(--steel-500)', display: 'flex', gap: 8 }}>
            <span style={{ color, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }}></span>
            {b}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 'auto', paddingTop: 28, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <a href={cta.href} className="btn btn-primary" style={{ background: color, boxShadow: `0 6px 16px ${color}40` }}>
          {cta.label} <span className="arr">→</span>
        </a>
        <Link to={login.to} style={{ fontSize: 13, fontWeight: 500, color: 'var(--steel-500)', borderBottom: '1px solid var(--steel-300)', paddingBottom: 1 }}>
          {login.label} →
        </Link>
      </div>
    </div>
  );
}

export default function Audiences() {
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, alignItems: 'stretch' }} className="audiences-grid">
          <AudienceCard
            id="carriers"
            tag="For carriers"
            color="var(--orange)"
            eyebrow="Post available trucks and turn empty miles into revenue opportunities."
            title="Reduce deadhead. Fill backhauls. Earn on miles you'd otherwise drive empty."
            body="The CarGo Carrier app is being built so carriers can post available trucks, share preferred lanes, declare backhaul needs, and surface capacity windows — designed to match into freight that fits trucks already moving."
            cta={{ label: 'Post Available Truck', href: '#carriers' }}
            login={{ label: 'Carrier Login', to: '/carrier/login' }}
            bullets={[
              'Post available trucks, dates, and equipment',
              'Declare preferred lanes & backhaul needs',
              'Verified loads matched to your authority',
              'In-app rate cons, BOLs, and PODs',
            ]}
            stat={{ k: 'Designed for', v: 'Backhaul recovery' }}
          />
          <AudienceCard
            id="shippers"
            tag="For shippers"
            color="var(--blue)"
            eyebrow="Find flexible freight capacity without chasing multiple carriers or brokers."
            title="Request freight, find capacity, work through quote and shipment in one place."
            body="The CarGo Shipper app is being built for shippers to request LTL, partial, or full truckload dry van freight, find available capacity, and work through a simplified quote and shipment process — supported by CarGo's automated matching layer and operational oversight."
            cta={{ label: 'Find Capacity', href: '#capacity' }}
            login={{ label: 'Shipper Login', to: '/shipper/login' }}
            bullets={[
              'LTL · partial · FTL dry van requests',
              'Dispatcher-assisted quoting',
              'Live shipment status & history',
              'One source of truth per shipment',
            ]}
            stat={{ k: 'Designed for', v: 'Capacity discovery' }}
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) { .audiences-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
