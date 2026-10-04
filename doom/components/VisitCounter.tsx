'use client'
import { useEffect, useState } from 'react'
// Discreet anonymous counter. Counts once per browser session; hides itself if the backend isn't configured.
export default function VisitCounter() {
  const [n, setN] = useState<number | null>(null)
  useEffect(() => {
    let seen = false
    try { seen = sessionStorage.getItem('mw-visit') === '1'; sessionStorage.setItem('mw-visit', '1') } catch {}
    fetch('/api/visits', { method: seen ? 'GET' : 'POST', cache: 'no-store' })
      .then((r) => r.json()).then((j) => typeof j.count === 'number' && setN(j.count)).catch(() => {})
  }, [])
  if (n === null) return null
  return <span className="visit-counter" title="Total visits" aria-label={`${n} total visits`}>◉ {n.toLocaleString('en-IN')}</span>
}
