// Runs one game: applies its theme (accent via CSS vars) and mascot (via
// context), then does the map ↔ level navigation with per-game progress. This is
// the old per-game App, now parameterized by a GameMeta.

import { useMemo, useState, type CSSProperties } from 'react'
import { WorldMap } from './map/WorldMap'
import { LevelPlayer } from './engine/LevelPlayer'
import { MascotProvider } from './mascots/context'
import type { GameMeta } from './games/types'
import { allLevelsOf } from './games/types'
import { load, markComplete, recordAttempt, reset, type Progress } from './state/progress'

export function GameView({ game, onExit }: { game: GameMeta; onExit: () => void }) {
  const [progress, setProgress] = useState<Progress>(() => load(game.id))
  const [activeId, setActiveId] = useState<string | null>(null)

  const levels = useMemo(() => allLevelsOf(game), [game])
  const active = activeId ? levels.find((l) => l.id === activeId) : undefined

  const nextId = useMemo(() => {
    if (!active) return null
    const i = levels.findIndex((l) => l.id === active.id)
    return i >= 0 && i + 1 < levels.length ? levels[i + 1].id : null
  }, [active, levels])

  // theme: the game's accent drives every --blue reference in the shared styles
  const themeStyle = {
    ['--blue' as string]: game.accent,
    ['--blue-deep' as string]: game.accentDeep,
  } as CSSProperties

  return (
    <MascotProvider value={game.mascot}>
      <div style={themeStyle}>
        {!active ? (
          <WorldMap
            game={game}
            zones={game.zones}
            progress={progress}
            onPick={setActiveId}
            onExit={onExit}
            onReset={() => setProgress(reset(game.id))}
          />
        ) : (
          <LevelPlayer
            key={active.id}
            level={active}
            alreadyComplete={progress.completed.includes(active.id)}
            onAttempt={(id) => setProgress((p) => recordAttempt(game.id, p, id))}
            onComplete={(id) => setProgress((p) => markComplete(game.id, p, id))}
            onBack={() => setActiveId(null)}
            onNext={nextId ? () => setActiveId(nextId) : null}
          />
        )}
      </div>
    </MascotProvider>
  )
}
