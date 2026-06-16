import { useState } from 'react';
import SectionHead from '../ui/SectionHead';
import type { ReactNode, FormEvent } from 'react';

interface ContactRowProps { label: string; value: ReactNode; }
function ContactRow({ label, value }: ContactRowProps) {
  return (
    <div>
      <div className="mono" style={{ marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14, color: 'var(--ink)', fontWeight: 500, lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}

interface FormProps {
  id: string;
  title: string;
  fields: { id: string; label: string; type: string; placeholder: string; required?: boolean }[];
  textarea?: { id: string; label: string; placeholder: string };
  submitLabel: string;
}

function ContactForm({ id, title, fields, textarea, submitLabel }: FormProps) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: 'white', border: '1px solid var(--steel-100)', borderRadius: 14, padding: 28 }}>
      <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', marginBottom: 20 }}>{title}</div>
      {sent ? (
        <div style={{ padding: '20px 0', textAlign: 'center', color: 'var(--steel-500)', fontSize: 14, lineHeight: 1.6 }}>
          <div style={{ fontSize: 22, marginBottom: 10 }}>✓</div>
          <strong style={{ color: 'var(--ink)' }}>We'll be in touch.</strong><br />
          Platform launching Q3 2026. We'll follow up at the email you provided.
        </div>
      ) : (
        <form id={id} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {fields.map(f => (
            <div className="auth-field" key={f.id}>
              <label htmlFor={`${id}-${f.id}`}>{f.label}</label>
              <input id={`${id}-${f.id}`} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required} />
            </div>
          ))}
          {textarea && (
            <div className="auth-field">
              <label htmlFor={`${id}-${textarea.id}`}>{textarea.label}</label>
              <textarea
                id={`${id}-${textarea.id}`}
                name={textarea.id}
                placeholder={textarea.placeholder}
                rows={4}
                style={{ fontFamily: 'inherit', fontSize: 15, padding: '12px 14px', border: '1px solid var(--steel-200)', borderRadius: 10, background: 'white', color: 'var(--ink)', resize: 'vertical' }}
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary" style={{ marginTop: 4, justifyContent: 'center' }}>
            {submitLabel} <span className="arr">→</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default function Contact() {
  const [tab, setTab] = useState<'shipper' | 'carrier' | 'investor'>('shipper');

  const tabs: { id: typeof tab; label: string }[] = [
    { id: 'shipper', label: 'Shippers' },
    { id: 'carrier', label: 'Carriers' },
    { id: 'investor', label: 'Investors' },
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--steel-50)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 56, alignItems: 'start' }}>
          {/* Left: info */}
          <div>
            <SectionHead
              eyebrow="Contact"
              title="Get in touch."
              lead="Whether you're a shipper, carrier, investor, or strategic partner — we'd like to hear from you."
            />
            <div style={{
              background: 'white', border: '1px solid var(--steel-100)', borderRadius: 14, padding: 28,
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <ContactRow label="General" value={<a href="mailto:hello@cargofreightsolutions.com" style={{ color: 'var(--blue)' }}>hello@cargofreightsolutions.com</a>} />
              <ContactRow label="Investors" value={<a href="mailto:investors@cargofreightsolutions.com" style={{ color: 'var(--blue)' }}>investors@cargofreightsolutions.com</a>} />
              <ContactRow label="Carriers" value={<a href="mailto:carriers@cargofreightsolutions.com" style={{ color: 'var(--blue)' }}>carriers@cargofreightsolutions.com</a>} />
              <ContactRow label="Shippers" value={<a href="mailto:shippers@cargofreightsolutions.com" style={{ color: 'var(--blue)' }}>shippers@cargofreightsolutions.com</a>} />
              <hr className="hr" />
              <ContactRow label="Mailing address" value={<>
                CarGo Freight Solutions, LLC<br />
                c/o TrueSpace Virtual Office<br />
                8713 Airport Fwy<br />
                North Richland Hills, TX 76180
              </>} />
              <ContactRow label="Registered agent" value="TRUE Space Registered Agent (Texas)" />
            </div>
          </div>

          {/* Right: tabbed forms */}
          <div>
            <div style={{ display: 'flex', gap: 6, margin: '20px 0' }}>
              {tabs.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  style={{
                    padding: '8px 16px', borderRadius: 999, border: '1px solid',
                    fontSize: 13, fontWeight: 500, cursor: 'pointer',
                    background: tab === t.id ? 'var(--ink)' : 'white',
                    color: tab === t.id ? 'white' : 'var(--steel-500)',
                    borderColor: tab === t.id ? 'var(--ink)' : 'var(--steel-200)',
                    transition: 'all .15s ease',
                  }}
                >{t.label}</button>
              ))}
            </div>

            {tab === 'shipper' && (
              <ContactForm
                id="shipper-contact"
                title="Shipper inquiry"
                fields={[
                  { id: 'company', label: 'Company name', type: 'text', placeholder: 'Acme Distributing Co.', required: true },
                  { id: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Smith', required: true },
                  { id: 'email', label: 'Work email', type: 'email', placeholder: 'jane@acme.com', required: true },
                  { id: 'lanes', label: 'Lanes (origin → destination)', type: 'text', placeholder: 'Dallas, TX → Chicago, IL' },
                ]}
                textarea={{ id: 'freight', label: 'Freight description', placeholder: 'Describe your freight type, frequency, and volume...' }}
                submitLabel="Submit shipper inquiry"
              />
            )}

            {tab === 'carrier' && (
              <ContactForm
                id="carrier-contact"
                title="Carrier inquiry"
                fields={[
                  { id: 'company', label: 'Carrier / company name', type: 'text', placeholder: 'C&L Express LLC', required: true },
                  { id: 'mc', label: 'MC # (if available)', type: 'text', placeholder: 'MC-XXXXXX' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'dispatch@carrier.com', required: true },
                  { id: 'equipment', label: 'Equipment type', type: 'text', placeholder: '53\' dry van, 48\' flatbed...' },
                  { id: 'lanes', label: 'Primary lanes', type: 'text', placeholder: 'TX, LA, OK corridors' },
                ]}
                textarea={{ id: 'notes', label: 'Additional notes', placeholder: 'Tell us about your fleet size, home market, and typical availability...' }}
                submitLabel="Submit carrier inquiry"
              />
            )}

            {tab === 'investor' && (
              <ContactForm
                id="investor-contact"
                title="Investor / partner inquiry"
                fields={[
                  { id: 'name', label: 'Your name', type: 'text', placeholder: 'Alex Doe', required: true },
                  { id: 'org', label: 'Organization', type: 'text', placeholder: 'Venture Partners, Inc.' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'alex@fund.com', required: true },
                ]}
                textarea={{ id: 'message', label: 'Message', placeholder: 'Tell us about your interest — investment, strategic partnership, or other...' }}
                submitLabel="Send investor inquiry"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
