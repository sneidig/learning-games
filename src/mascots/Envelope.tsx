import type { Mood } from './context'

// The Request's Journey mascot — an envelope / data packet with a face.
export function Envelope({ mood = 'neutral', size = 64 }: { mood?: Mood; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={`request packet (${mood})`}
      className={`packet packet--${mood}`}
    >
      <rect x="6" y="14" width="52" height="36" rx="6" className="packet__body" />
      <path d="M6 18l26 18 26-18" className="packet__flap" fill="none" strokeWidth="3" />
      <circle cx="24" cy="40" r="3" className="packet__face" />
      <circle cx="40" cy="40" r="3" className="packet__face" />
      {mood === 'happy' && (
        <path d="M24 46q8 6 16 0" className="packet__face" fill="none" strokeWidth="2.5" />
      )}
      {mood === 'neutral' && (
        <path d="M25 47h14" className="packet__face" fill="none" strokeWidth="2.5" />
      )}
      {mood === 'bounced' && (
        <path d="M24 48q8 -6 16 0" className="packet__face" fill="none" strokeWidth="2.5" />
      )}
    </svg>
  )
}
