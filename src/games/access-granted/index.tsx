import type { GameMeta } from '../types'
import type { Zone } from '../../engine/types'
import { Padlock } from '../../mascots/Padlock'
import meanings from './content/meanings.json'
import defaults from './content/defaults.json'
import access from './content/access.json'
import ladder from './content/ladder.json'
import leaks from './content/leaks.json'

export const accessGranted: GameMeta = {
  id: 'access-granted',
  title: 'Access Granted',
  tagline: (
    <>
      <code>public</code>, <code>private</code>, <code>protected internal</code>… Stop guessing who
      can see what. Learn each C# access modifier, then answer the only question that matters:{' '}
      <em>can this code actually reach that member?</em>
    </>
  ),
  blurb:
    'Master C# access modifiers — public, private, protected, internal, and the tricky combined ones — by answering who can actually reach each member.',
  emoji: '🔒',
  accent: '#06b6d4',
  accentDeep: '#0e7490',
  mascot: Padlock,
  zones: [meanings, defaults, access, ladder, leaks] as unknown as Zone[],
}
