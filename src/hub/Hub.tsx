// The landing page: one card per game, in that game's accent color, linking to
// #/<game-id>. Replaces the old standalone static hub — same look, now driven by
// the game registry so a new game appears automatically.

import type { CSSProperties } from 'react'
import type { GameMeta } from '../games/types'

export function Hub({ games }: { games: GameMeta[] }) {
  return (
    <div className="hub">
      <header className="hub__head">
        <h1>Learning Games</h1>
        <p className="hub__tagline">
          Small browser games that drill the C# / .NET concepts worth knowing cold — each one built
          on the same puzzle engine. Pick a topic and play.
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
      </div>

      <footer className="hub__foot">One shared engine, many games.</footer>
    </div>
  )
}
