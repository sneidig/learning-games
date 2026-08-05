// Packet renders the ACTIVE game's mascot, pulled from context. The shared
// engine (WorldMap hero, LevelPlayer result panels, the ordering walk) calls
// <Packet mood size /> exactly as before — it just no longer hardcodes a shape.

import { useMascot, type Mood } from '../mascots/context'

export function Packet({ mood = 'neutral', size = 64 }: { mood?: Mood; size?: number }) {
  const Mascot = useMascot()
  return <Mascot mood={mood} size={size} />
}
