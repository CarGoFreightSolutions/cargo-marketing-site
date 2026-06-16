import type { CSSProperties } from 'react';

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  style?: CSSProperties;
}

/**
 * BrowserFrame — wraps a desktop screenshot in macOS-style window chrome.
 * Use for admin/ops dashboard screenshots.
 */
export default function BrowserFrame({ src, alt, url = 'CarGo Operations Platform', style }: BrowserFrameProps) {
  return (
    <div style={{
      borderRadius: 12,
      background: '#1A1A1E',
      border: '1px solid rgba(255,255,255,0.09)',
      boxShadow: '0 32px 72px rgba(0,0,0,0.55), 0 2px 12px rgba(0,0,0,0.3)',
      overflow: 'hidden',
      ...style,
    }}>
      {/* macOS window chrome */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '10px 14px',
        background: '#252528',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57', flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E', flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840', flexShrink: 0 }} />
        <div style={{
          flex: 1,
          marginLeft: 10,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 5,
          height: 22,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 10,
          gap: 5,
        }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>🔒</span>
          <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.01em', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            {url}
          </span>
        </div>
      </div>
      <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} loading="lazy" />
    </div>
  );
}
