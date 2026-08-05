// Player progress, persisted to localStorage — now namespaced PER GAME so every
// game keeps its own progress under one origin. This is the ONLY state kept
// client-side; the backend phase swaps this module's storage for an
// /api/progress endpoint (keyed by user + game) without the rest of the app noticing.

const keyFor = (gameId: string) => `lg.${gameId}.progress.v1`

export interface Progress {
  /** level ids the player has cleared */
  completed: string[]
  /** attempts per level id (for a future score/streak/spaced-repetition system) */
  attempts: Record<string, number>
}

const empty: Progress = { completed: [], attempts: {} }

export function load(gameId: string): Progress {
  try {
    const raw = localStorage.getItem(keyFor(gameId))
    if (!raw) return { ...empty }
    const parsed = JSON.parse(raw) as Progress
    return { completed: parsed.completed ?? [], attempts: parsed.attempts ?? {} }
  } catch {
    return { ...empty }
  }
}

function save(gameId: string, p: Progress) {
  try {
    localStorage.setItem(keyFor(gameId), JSON.stringify(p))
  } catch {
    /* storage unavailable (private mode); progress just won't persist */
  }
}

export function markComplete(gameId: string, p: Progress, levelId: string): Progress {
  if (p.completed.includes(levelId)) return p
  const next = { ...p, completed: [...p.completed, levelId] }
  save(gameId, next)
  return next
}

export function recordAttempt(gameId: string, p: Progress, levelId: string): Progress {
  const next = {
    ...p,
    attempts: { ...p.attempts, [levelId]: (p.attempts[levelId] ?? 0) + 1 },
  }
  save(gameId, next)
  return next
}

export function reset(gameId: string): Progress {
  save(gameId, empty)
  return { ...empty }
}
