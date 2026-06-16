import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const TruckIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <rect x="1" y="5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8h4l2.5 3v3H12V8z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="5.5" cy="15.5" r="1.7" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="14.5" cy="15.5" r="1.7" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 2.5 3.5 5v5c0 4 2.7 6.6 6.5 7.5 3.8-.9 6.5-3.5 6.5-7.5V5L10 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="m7.5 10 1.8 1.8L13 8.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M11 2 4 11h5l-1 7 7-9h-5l1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const RouteIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <circle cx="4.5" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="15.5" cy="15.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4.5 6.5v3a3 3 0 0 0 3 3h5a3 3 0 0 1 3 3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const DocIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M4 2h7l5 5v11H4V2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M11 2v5h5M7 11h6M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ChartIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M3 17V3M3 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 13l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BellIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M5 14V9a5 5 0 1 1 10 0v5l1.5 1.5h-13L5 14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 17.5a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 18s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M4 10h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
