import type { GameMeta } from '../types'
import type { Zone } from '../../engine/types'
import { Shield } from '../../mascots/Shield'
import risks from './content/risks.json'
import classify from './content/classify.json'
import spotbug from './content/spotbug.json'
import predict from './content/predict.json'
import fixes from './content/fixes.json'

export const owasp: GameMeta = {
  id: 'owasp-top-10',
  title: 'OWASP Top 10',
  year: '2025',
  tagline: (
    <>
      The ten most critical web-app security risks — for .NET developers. Learn each risk, classify
      it in real ASP.NET Core code, spot the vulnerable line, watch the exploit land, and match it
      to the fix.
    </>
  ),
  blurb:
    'Practice the OWASP Top 10 for .NET — classify vulnerabilities, spot them in real ASP.NET Core code, and match each risk to its fix.',
  emoji: '🛡️',
  accent: '#f97316',
  accentDeep: '#c2410c',
  mascot: Shield,
  zones: [risks, classify, spotbug, predict, fixes] as unknown as Zone[],
}
