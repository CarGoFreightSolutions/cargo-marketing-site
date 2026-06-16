interface LogoProps {
  onDark?: boolean;
}

export default function Logo({ onDark }: LogoProps) {
  const boxStroke = onDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)';
  const cabFill = onDark ? '#FFFFFF' : '#0A1430';
  const windowFill = onDark ? '#0A1430' : '#6FA8FF';
  const chassisFill = onDark ? '#FFFFFF' : '#0A1430';
  const wheelHubFill = onDark ? '#FFFFFF' : '#0A1430';
  const wheelCenterFill = onDark ? '#0A1430' : '#FFFFFF';

  return (
    <div className={`logo${onDark ? ' on-dark' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CarGo">
        <rect x="2" y="21" width="12" height="3" rx="1.5" fill="#FF6A1A" />
        <rect x="0" y="29" width="9" height="3" rx="1.5" fill="#FF6A1A" opacity="0.7" />
        <rect x="3" y="37" width="14" height="3" rx="1.5" fill="#FF6A1A" opacity="0.85" />

        <rect x="19" y="22" width="11" height="10" rx="1" fill="#FF6A1A" />
        <rect x="30" y="18" width="12" height="14" rx="1" fill="#2563EB" />
        <path d="M19 27h11M36 18v14M30 25h12" stroke={boxStroke} strokeWidth="1.2" />

        <path d="M44 22h6l8 9v9H44V22z" fill={cabFill} />
        <rect x="47" y="25" width="7" height="6" rx="1" fill={windowFill} />

        <rect x="14" y="36" width="44" height="4" rx="1" fill={chassisFill} />

        <circle cx="26" cy="44" r="4.6" fill={wheelHubFill} />
        <circle cx="26" cy="44" r="1.8" fill={wheelCenterFill} />
        <circle cx="50" cy="44" r="4.6" fill={wheelHubFill} />
        <circle cx="50" cy="44" r="1.8" fill={wheelCenterFill} />
      </svg>
      <span className="word" style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em' }}>
        <span style={{ color: onDark ? 'white' : 'var(--ink)' }}>Car</span>
        <span style={{ color: onDark ? '#6FA8FF' : 'var(--blue)' }}>Go</span>
      </span>
    </div>
  );
}
