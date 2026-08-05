import type { Mood } from './context'

// OWASP Top 10 mascot — a security shield with a face.
export function Shield({ mood = 'neutral', size = 64 }: { mood?: Mood; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={`shield (${mood})`}
      className={`packet packet--${mood}`}
    >
      <path
        d="M32 7 L53 15 V31 C53 45 43 53 32 57 C21 53 11 45 11 31 V15 Z"
        className="packet__body"
        strokeWidth="2"
      />
      <path
        d="M32 13 L47 19 V31 C47 41 40 47 32 51 C24 47 17 41 17 31 V19 Z"
        className="packet__flap"
        fill="none"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle cx="26" cy="30" r="2.6" className="packet__face" />
      <circle cx="38" cy="30" r="2.6" className="packet__face" />
      {mood === 'happy' && (
        <path d="M26 38q6 5 12 0" className="packet__face" fill="none" strokeWidth="2.4" />
      )}
      {mood === 'neutral' && (
        <path d="M27 39h10" className="packet__face" fill="none" strokeWidth="2.4" />
      )}
      {mood === 'bounced' && (
        <path d="M26 40q6 -5 12 0" className="packet__face" fill="none" strokeWidth="2.4" />
      )}
    </svg>
  )
}
