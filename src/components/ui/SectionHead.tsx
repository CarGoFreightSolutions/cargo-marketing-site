interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  onDark?: boolean;
  align?: 'left' | 'center';
}

export default function SectionHead({ eyebrow, title, lead, onDark, align = 'left' }: SectionHeadProps) {
  return (
    <div style={{
      maxWidth: 760,
      marginBottom: 56,
      textAlign: align,
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0,
    }}>
      {eyebrow && (
        <span className={`eyebrow${onDark ? ' on-dark' : ''}`}>
          <span className="dot"></span>{eyebrow}
        </span>
      )}
      <h2 style={{ marginTop: 16, color: onDark ? 'white' : undefined }}>{title}</h2>
      {lead && (
        <p className={`lead${onDark ? ' on-dark' : ''}`} style={{ marginTop: 16 }}>{lead}</p>
      )}
    </div>
  );
}
