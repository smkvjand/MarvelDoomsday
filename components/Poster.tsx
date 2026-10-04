'use client'
import { useEffect, useState } from 'react'
const cache = new Map<string, string | null>()
async function resolve(article: string): Promise<string | null> {
  if (cache.has(article)) return cache.get(article) ?? null
  const k = 'poster:' + article
  try { const s = localStorage.getItem(k); if (s) { cache.set(article, s); return s } } catch {}
  try {
    const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${article}`)
    const j = await r.json()
    const src: string | null = j?.thumbnail?.source?.replace(/\/\d+px-/, '/500px-') ?? j?.originalimage?.source ?? null
    cache.set(article, src)
    if (src) try { localStorage.setItem(k, src) } catch {}
    return src
  } catch { return null }
}
export default function Poster({ title, article }: { title: string; article: string }) {
  const [src, setSrc] = useState<string | null>(null)
  const [bad, setBad] = useState(false)
  useEffect(() => { let on = true; setSrc(null); setBad(false); resolve(article).then((s) => { if (on) s ? setSrc(s) : setBad(true) }); return () => { on = false } }, [article])
  return <div className="poster-art">
    {src && !bad ? <img className="poster-img" src={src} alt={`${title} official poster`} referrerPolicy="no-referrer" onError={() => setBad(true)} /> : <><span className="poster-glyph">M</span><span className="poster-title">{title}</span></>}
  </div>
}
