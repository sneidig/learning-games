import type { GameMeta } from '../types'
import type { Zone } from '../../engine/types'
import { Flask } from '../../mascots/Flask'
import anatomy from './content/anatomy.json'
import assertions from './content/assertions.json'
import whatToTest from './content/what-to-test.json'
import willItPass from './content/will-it-pass.json'

export const testMaker: GameMeta = {
  id: 'test-maker',
  title: 'The Test Maker',
  tagline: (
    <>
      Stop thinking about the method — start thinking about the <em>test</em>. Train the instinct
      for what to assert, which cases to cover, and when a test goes green or red.
    </>
  ),
  blurb:
    'Train the instinct for unit testing — which cases to cover, which assertion to reach for, and whether a test goes green, red, or throws.',
  emoji: '🧪',
  accent: '#8b5cf6',
  accentDeep: '#5b21b6',
  mascot: Flask,
  zones: [anatomy, assertions, whatToTest, willItPass] as unknown as Zone[],
}
