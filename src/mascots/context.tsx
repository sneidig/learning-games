// The active game's mascot, provided via context so the SHARED engine
// (LevelPlayer, WorldMap, the ordering walk) can render it without knowing which
// game it is. Each game supplies its own mascot component; Packet reads it here.

import { createContext, useContext, type ReactElement } from 'react'

export type Mood = 'neutral' | 'happy' | 'bounced'
export type MascotComponent = (props: { mood?: Mood; size?: number }) => ReactElement

function DefaultMascot({ mood = 'neutral', size = 64 }: { mood?: Mood; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={`mascot (${mood})`}
      className={`packet packet--${mood}`}
    >
      <circle cx="32" cy="32" r="22" className="packet__body" strokeWidth="2" />
      <circle cx="26" cy="30" r="2.6" className="packet__face" />
      <circle cx="38" cy="30" r="2.6" className="packet__face" />
      <path d="M26 40h12" className="packet__face" fill="none" strokeWidth="2.4" />
    </svg>
  )
}

const MascotContext = createContext<MascotComponent>(DefaultMascot)
export const MascotProvider = MascotContext.Provider
export function useMascot(): MascotComponent {
  return useContext(MascotContext)
}
