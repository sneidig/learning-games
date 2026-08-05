import type { Mood } from './context'

// Spot the Flaw mascot — a magnifying glass with a face (the reviewer).
export function Magnifier({ mood = 'neutral', size = 64 }: { mood?: Mood; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={`magnifier (${mood})`}
      className={`packet packet--${mood}`}
    >
      {/* handle */}
      <path d="M39 39 L54 54" className="packet__flap" strokeWidth="5" strokeLinecap="round" />
      {/* lens */}
      <circle cx="26" cy="26" r="17" className="packet__body" strokeWidth="2.5" />
      {/* eyes */}
      <circle cx="21" cy="24" r="2.4" className="packet__face" />
      <circle cx="31" cy="24" r="2.4" className="packet__face" />
      {/* mouth changes with mood */}
      {mood === 'happy' && (
        <path d="M21 30q5 4 10 0" className="packet__face" fill="none" strokeWidth="2.2" />
      )}
      {mood === 'neutral' && (
        <path d="M21 31h10" className="packet__face" fill="none" strokeWidth="2.2" />
      )}
      {mood === 'bounced' && (
        <path d="M21 32q5 -4 10 0" className="packet__face" fill="none" strokeWidth="2.2" />
      )}
    </svg>
  )
}
