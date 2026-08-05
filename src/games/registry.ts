import type { GameMeta } from './types'
import { requestsJourney } from './requests-journey'
import { testMaker } from './test-maker'
import { accessGranted } from './access-granted'
import { bigO } from './big-o'
import { owasp } from './owasp-top-10'
import { spotTheFlaw } from './spot-the-flaw'

// The catalog. Order = display order on the hub. Add a game by adding its
// folder + config and one line here.
export const games: GameMeta[] = [
  requestsJourney,
  testMaker,
  accessGranted,
  bigO,
  owasp,
  spotTheFlaw,
]

export function gameById(id: string): GameMeta | undefined {
  return games.find((g) => g.id === id)
}
