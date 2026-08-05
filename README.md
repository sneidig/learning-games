# Learning Games

A small **platform** of browser games that drill C# / .NET concepts, all running on one shared,
data-driven puzzle engine. The hub is the landing page; each game is a hash route.

**Live:** https://sneidig.github.io/learning-games/

| Game | Route | Topic |
|---|---|---|
| The Request's Journey | `#/requests-journey` | the ASP.NET Core request lifecycle |
| The Test Maker | `#/test-maker` | unit-testing thinking (xUnit) |
| Access Granted | `#/access-granted` | C# access modifiers |
| Big O | `#/big-o` | Big O notation |
| OWASP Top 10 (2025) | `#/owasp-top-10` | web-app security for .NET |

## Architecture

One app, three axes cleanly separated — which is what keeps it in sync and easy to grow:

- **`src/engine/`** — the shared engine: the level types, deterministic grading, the five puzzle
  renderers (`ordering`, `matching`, `classify`, `predict`, `spotBug`), `LevelPlayer`, and the
  `WorldMap`. One copy, used by every game.
- **`src/games/<id>/`** — each game is just **content** (`content/*.json`) plus a small
  `index.tsx` config: title, tagline, accent color, mascot, and its zones. Registered in
  `src/games/registry.ts`.
- **`src/mascots/`** — one mascot component per game, selected via context so the engine renders
  the active game's mascot without knowing which it is.

Theme (accent) is applied by setting CSS variables per game; progress is `localStorage`,
**namespaced per game** (`src/state/progress.ts`) — the single seam a future backend swaps for an
`/api/progress` endpoint.

**Add a game:** a new `src/games/<id>/` folder (content + config + mascot) and one line in
`registry.ts`. No engine changes.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Deploy

GitHub Actions builds `dist/` and publishes to Pages on push to `main`
(`.github/workflows/deploy.yml`). Set **Settings → Pages → Source: GitHub Actions**.
`base: './'` + hash routing keep it working under the `/learning-games/` sub-path, including
deep links and refresh.
