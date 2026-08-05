import type { GameMeta } from '../types'
import type { Zone } from '../../engine/types'
import { GrowthChart } from '../../mascots/GrowthChart'
import ladder from './content/ladder.json'
import shapes from './content/shapes.json'
import loops from './content/loops.json'
import problems from './content/problems.json'
import space from './content/space.json'

export const bigO: GameMeta = {
  id: 'big-o',
  title: 'Big O',
  tagline: (
    <>
      <code>O(1)</code>, <code>O(n)</code>, <code>O(n²)</code>… Learn to glance at a loop and name
      how its cost <em>grows</em> — the skill you actually use in interviews, drilled on real
      LeetCode solutions.
    </>
  ),
  blurb:
    'Learn to glance at a loop — or a real LeetCode solution — and name how its cost grows. Time and space complexity, drilled.',
  emoji: '📈',
  accent: '#ec4899',
  accentDeep: '#be185d',
  mascot: GrowthChart,
  zones: [ladder, shapes, loops, problems, space] as unknown as Zone[],
}
