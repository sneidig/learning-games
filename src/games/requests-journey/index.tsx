import type { GameMeta } from '../types'
import type { Zone } from '../../engine/types'
import { Envelope } from '../../mascots/Envelope'
import middleware from './content/middleware.json'
import routing from './content/routing.json'
import binding from './content/binding.json'
import filters from './content/filters.json'
import di from './content/di.json'
import statusCodes from './content/status-codes.json'
import service from './content/service.json'
import repository from './content/repository.json'

export const requestsJourney: GameMeta = {
  id: 'requests-journey',
  title: "The Request's Journey",
  tagline: (
    <>
      You are an HTTP request. Travel the ASP.NET Core pipeline, solve the puzzle at each station,
      and learn <em>why</em> each one happens — and in what order.
    </>
  ),
  blurb:
    'Play as an HTTP request traveling the ASP.NET Core pipeline — middleware, routing, model binding, filters, DI lifetimes, status codes, and EF Core.',
  emoji: '📨',
  accent: '#3b82f6',
  accentDeep: '#1e3a8a',
  mascot: Envelope,
  zones: [middleware, routing, binding, filters, di, statusCodes, service, repository] as unknown as Zone[],
}
