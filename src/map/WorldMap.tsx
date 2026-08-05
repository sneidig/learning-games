// The world map for a game: hero (from the game's metadata) + the zone/level
// track. Zones and hero come in as props now, so this one component serves every
// game — the shared engine, not a per-game copy.

import type { Progress } from '../state/progress'
import type { GameMeta } from '../games/types'
import type { Zone } from '../engine/types'
import { Packet } from './Packet'

interface WorldMapProps {
  game: GameMeta
  zones: Zone[]
  progress: Progress
  onPick: (levelId: string) => void
  onReset: () => void
  onExit: () => void
}

export function WorldMap({ game, zones, progress, onPick, onReset, onExit }: WorldMapProps) {
  const done = (id: string) => progress.completed.includes(id)
  const totalCleared = progress.completed.length

  function handleReset() {
    if (totalCleared === 0) return
    if (window.confirm('Reset all progress for this game? This clears every cleared level.')) {
      onReset()
    }
  }

  return (
    <div className="map">
      <button className="link map__back" onClick={onExit}>← All games</button>

      <header className="map__hero">
        <Packet mood="neutral" size={72} />
        <div>
          <h1>
            {game.title}
            {game.year && <span className="hero__year"> · {game.year}</span>}
          </h1>
          <p className="map__tagline">{game.tagline}</p>
          <p className="map__progress">
            {totalCleared} level{totalCleared === 1 ? '' : 's'} cleared
          </p>
        </div>
      </header>

      <div className="map__track">
        {zones.map((zone) => (
          <section className="zone" key={zone.id}>
            <div className="zone__head">
              <h2>{zone.title}</h2>
              <p className="zone__blurb">{zone.blurb}</p>
              {zone.docs && zone.docs.length > 0 && (
                <p className="zone__docs">
                  {zone.docs.map((d) => (
                    <a
                      key={d.url}
                      className="zone__doclink"
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {d.label} ↗
                    </a>
                  ))}
                </p>
              )}
            </div>
            <ol className="zone__levels">
              {zone.levels.map((level, i) => {
                const prev = zone.levels[i - 1]
                const unlocked = i === 0 || (prev && done(prev.id))
                const cleared = done(level.id)
                return (
                  <li key={level.id}>
                    <button
                      className={`node${cleared ? ' node--done' : ''}${
                        unlocked ? '' : ' node--locked'
                      }`}
                      disabled={!unlocked}
                      onClick={() => onPick(level.id)}
                    >
                      <span className="node__status" aria-hidden>
                        {cleared ? '✓' : unlocked ? '●' : '🔒'}
                      </span>
                      <span className="node__title">{level.title}</span>
                      <span className="node__primitive">{level.primitive}</span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </div>

      <footer className="map__foot">
        <span className="tag">Client-only · progress saved in this browser</span>
        {totalCleared > 0 && (
          <button className="link link--reset" onClick={handleReset}>
            Reset progress
          </button>
        )}
      </footer>
    </div>
  )
}
