import type { ReactNode } from 'react'
import type { Zone, Level } from '../engine/types'
import type { MascotComponent } from '../mascots/context'

// A game is now just metadata: a theme, a mascot, and its content zones. The
// shared engine renders any GameMeta. Adding a game = adding one of these.
export interface GameMeta {
  id: string
  title: string
  /** optional edition badge shown after the title, e.g. "2025" */
  year?: string
  tagline: ReactNode
  /** one-liner for the hub card */
  blurb: string
  /** hub card icon */
  emoji: string
  accent: string
  accentDeep: string
  mascot: MascotComponent
  zones: Zone[]
}

// Flatten a game's zones to a level list, attaching each zone's glossary to its
// levels (so a level is self-describing) — same rule every pack used before.
export function allLevelsOf(game: GameMeta): Level[] {
  return game.zones.flatMap((z) => z.levels.map((l) => ({ ...l, glossary: l.glossary ?? z.glossary })))
}
