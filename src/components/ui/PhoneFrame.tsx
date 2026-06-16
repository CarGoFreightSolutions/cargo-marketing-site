import type { CSSProperties } from 'react';

interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * PhoneFrame — wraps a screenshot in a minimal phone bezel.
 * No notch overlay so the full screenshot shows through cleanly.
 */
export default function PhoneFrame({ src, alt, width = 220, style, className }: PhoneFrameProps) {
  const radius = Math.round(width * 0.14);
  const border  = Math.max(2, Math.round(width * 0.013));
  return (
    <div className={className} style={{
      width,
      flexShrink: 0,
      borderRadius: radius,
      border: `${border}px solid rgba(255,255,255,0.16)`,
      boxShadow: '0 24px 56px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)',
      overflow: 'hidden',
      background: '#fff',
      ...style,
    }}>
      <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} loading="lazy" />
    </div>
  );
}
