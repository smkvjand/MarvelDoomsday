'use client'
import { useCallback, useEffect, useState } from 'react'
import type { Order } from '../utils/ordering'
export interface Progress { completedMovies: string[]; seenMovies: string[]; selectedOrder: Order }
const KEY = 'marvel-worthy-progress-v1'
const EMPTY: Progress = { completedMovies: [], seenMovies: [], selectedOrder: 'release' }
const arr = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [])
export function useProgress() {
  const [progress, setProgress] = useState<Progress>(EMPTY)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    try { const r = localStorage.getItem(KEY); if (r) { const p = JSON.parse(r); setProgress({ ...EMPTY, ...p, completedMovies: arr(p.completedMovies), seenMovies: arr(p.seenMovies) }) } } catch {}
    setReady(true)
  }, [])
  useEffect(() => { if (ready) try { localStorage.setItem(KEY, JSON.stringify(progress)) } catch {} }, [progress, ready])
  const complete = useCallback((id: string) => setProgress((p) => p.completedMovies.includes(id) ? p : { ...p, completedMovies: [...p.completedMovies, id] }), [])
  const toggleSeen = useCallback((id: string) => setProgress((p) => ({ ...p, seenMovies: p.seenMovies.includes(id) ? p.seenMovies.filter((x) => x !== id) : [...p.seenMovies, id] })), [])
  const setOrder = useCallback((selectedOrder: Order) => setProgress((p) => ({ ...p, selectedOrder })), [])
  const reset = useCallback(() => setProgress((p) => ({ ...p, completedMovies: [], seenMovies: [] })), [])
  return { progress, complete, toggleSeen, setOrder, reset }
}
