import { movies, type Movie } from '../data/movies'
export type Order = 'release' | 'chronological' | 'phase' | 'doomsday' | 'doomsday'
export const ORDER_LABEL: Record<Order, string> = { release: 'RELEASE ORDER', chronological: 'CHRONOLOGICAL', phase: 'BY PHASE', doomsday: '☠ DOOMSDAY' }
export function sortMovies(o: Order): Movie[] {
  if (o === 'doomsday') return movies.filter((m) => m.doomsday).sort((x, y) => x.doomOrder - y.doomOrder)
  const a = movies.filter((m) => !m.fox)
  if (o === 'chronological') return a.sort((x, y) => x.chronologicalOrder - y.chronologicalOrder)
  if (o === 'phase') return a.sort((x, y) => x.phase.localeCompare(y.phase) || x.releaseOrder - y.releaseOrder)
  return a.sort((x, y) => x.releaseOrder - y.releaseOrder)
}
export function nextUnverified(list: Movie[], done: string[], currentId: string): Movie | null {
  const at = list.findIndex((m) => m.id === currentId)
  const ring = [...list.slice(at + 1), ...list.slice(0, at + 1)]
  return ring.find((m) => !done.includes(m.id)) ?? null
}
