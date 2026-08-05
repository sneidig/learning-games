import type { Mood } from './context'

// Access Granted mascot — a padlock with a face. happy = shackle popped open.
export function Padlock({ mood = 'neutral', size = 64 }: { mood?: Mood; size?: number }) {
  const open = mood === 'happy'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={`padlock (${mood})`}
      className={`packet packet--${mood}`}
    >
      {open ? (
        <path d="M24 30 V22 a12 12 0 0 1 24 0" className="packet__flap" fill="none" strokeWidth="4" strokeLinecap="round" />
      ) : (
        <path d="M22 30 V22 a10 10 0 0 1 20 0 V30" className="packet__flap" fill="none" strokeWidth="4" strokeLinecap="round" />
      )}
      <rect x="14" y="30" width="36" height="28" rx="6" className="packet__body" strokeWidth="2" />
      <circle cx="26" cy="42" r="2.8" className="packet__face" />
      <circle cx="38" cy="42" r="2.8" className="packet__face" />
      {mood === 'happy' && (
        <path d="M26 48q6 5 12 0" className="packet__face" fill="none" strokeWidth="2.5" />
      )}
      {mood === 'neutral' && (
        <path d="M27 49h10" className="packet__face" fill="none" strokeWidth="2.5" />
      )}
      {mood === 'bounced' && (
        <path d="M26 50q6 -5 12 0" className="packet__face" fill="none" strokeWidth="2.5" />
      )}
    </svg>
  )
}
