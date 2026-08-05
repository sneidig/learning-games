import type { Mood } from './context'

// Big O mascot — a chart panel with a growth curve. happy = curve rockets up.
export function GrowthChart({ mood = 'neutral', size = 64 }: { mood?: Mood; size?: number }) {
  const curve =
    mood === 'happy'
      ? 'M16 46 C 28 46, 34 40, 48 16'
      : mood === 'bounced'
        ? 'M16 24 C 28 24, 34 30, 48 48'
        : 'M16 42 C 28 40, 36 30, 48 22'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={`growth chart (${mood})`}
      className={`packet packet--${mood}`}
    >
      <rect x="8" y="8" width="48" height="48" rx="8" className="packet__body" strokeWidth="2" />
      <path d="M18 14 V50 H50" className="packet__body" fill="none" strokeWidth="1.5" opacity="0.4" />
      <path d={curve} className="packet__flap" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="40" r="2.4" className="packet__face" />
      <circle cx="33" cy="40" r="2.4" className="packet__face" />
      {mood === 'happy' && (
        <path d="M23 45q5 4 11 0" className="packet__face" fill="none" strokeWidth="2.2" />
      )}
      {mood === 'neutral' && (
        <path d="M24 46h9" className="packet__face" fill="none" strokeWidth="2.2" />
      )}
      {mood === 'bounced' && (
        <path d="M23 47q5 -4 11 0" className="packet__face" fill="none" strokeWidth="2.2" />
      )}
    </svg>
  )
}
