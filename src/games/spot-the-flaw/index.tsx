import type { GameMeta } from '../types'
import type { Zone } from '../../engine/types'
import { Magnifier } from '../../mascots/Magnifier'
import sourcesSinks from './content/sources-sinks.json'
import taint from './content/taint.json'
import findFlaw from './content/find-flaw.json'
import missing from './content/missing.json'
import heuristics from './content/heuristics.json'

export const spotTheFlaw: GameMeta = {
  id: 'spot-the-flaw',
  title: 'Spot the Flaw',
  tagline: (
    <>
      Read code the way a security reviewer does: follow the untrusted input, find where it reaches
      something dangerous, and catch the <em>missing</em> check — then name the flaw.
    </>
  ),
  blurb:
    'Learn to review code for security: trace untrusted input to dangerous sinks, find the vulnerable line, and spot the control that isn’t there.',
  emoji: '🔎',
  accent: '#14b8a6',
  accentDeep: '#0f766e',
  mascot: Magnifier,
  zones: [sourcesSinks, taint, findFlaw, missing, heuristics] as unknown as Zone[],
}
