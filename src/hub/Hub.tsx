// The landing page: one card per game, in that game's accent color, linking to
// #/<game-id>. Registry games are driven by the catalog; a few standalone apps
// (different interaction models, their own repos) are linked out separately.

import type { CSSProperties } from 'react'
import type { GameMeta } from '../games/types'

interface ExternalApp {
  title: string
  emoji: string
  accent: string
  blurb: string
  url: string
}

// Standalone apps that aren't puzzle-engine games (own repo, own deploy).
const external: ExternalApp[] = [
  {
    title: 'Test First',
    emoji: '✍️',
    accent: '#22c55e',
    blurb:
      'Learn test-driven development by actually writing xUnit tests, with a coach that checks the shape of each one.',
    url: 'https://sneidig.github.io/test-first/',
  },
]

export function Hub({ games }: { games: GameMeta[] }) {
  return (
    <div className="hub">
      <header className="hub__head">
        <h1>Learning Games</h1>
        <p className="hub__tagline">
          Small browser games and hands-on drills for the C# / .NET concepts worth knowing cold.
          Pick a topic and start.
        </p>
      </header>

      <div className="hub__grid">
        {games.map((g) => (
          <a
            key={g.id}
            className="hubcard"
            href={`#/${g.id}`}
            style={{ ['--accent' as string]: g.accent } as CSSProperties}
          >
            <span className="hubcard__emoji">{g.emoji}</span>
            <h2 className="hubcard__title">
              {g.title}
              {g.year && <span className="hubcard__year"> · {g.year}</span>}
            </h2>
            <p className="hubcard__desc">{g.blurb}</p>
            <span className="hubcard__play">Play →</span>
          </a>
        ))}

        {external.map((e) => (
          <a
            key={e.url}
            className="hubcard"
            href={e.url}
            style={{ ['--accent' as string]: e.accent } as CSSProperties}
          >
            <span className="hubcard__emoji">{e.emoji}</span>
            <h2 className="hubcard__title">{e.title}</h2>
            <p className="hubcard__desc">{e.blurb}</p>
            <span className="hubcard__play">Open ↗</span>
          </a>
        ))}
      </div>

      <footer className="hub__foot">One shared engine, plus a few standalone drills.</footer>
    </div>
  )
}
