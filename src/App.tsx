// App shell for the whole platform. Hash routing (#/<game-id>) so the hub and
// every game share one page and one Pages deploy, and deep links / refresh work
// under any sub-path. Root (#/) is the hub; #/big-o is a game.

import { useEffect, useState } from 'react'
import { games, gameById } from './games/registry'
import { Hub } from './hub/Hub'
import { GameView } from './GameView'

function readGameId(): string | null {
  const h = window.location.hash.replace(/^#\/?/, '').trim()
  return h.length ? h : null
}

export default function App() {
  const [gameId, setGameId] = useState<string | null>(readGameId())

  useEffect(() => {
    const onHash = () => {
      setGameId(readGameId())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const game = gameId ? gameById(gameId) : undefined
  if (!game) return <Hub games={games} />

  // key on the game id so switching games mounts a fresh shell (its own progress)
  return (
    <GameView
      key={game.id}
      game={game}
      onExit={() => {
        window.location.hash = ''
      }}
    />
  )
}
