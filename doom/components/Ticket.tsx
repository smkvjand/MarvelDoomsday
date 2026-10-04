'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Pencil, Printer } from 'lucide-react'

const KEY = 'marvel-worthy-ticket-v1'
type Saved = { name: string; issued: string }
function hash(s: string) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) } return h >>> 0 }
function serialOf(s: Saved) { return 'LK-' + hash(s.name.toUpperCase() + s.issued).toString(36).toUpperCase().padStart(7, '0').slice(-7) }
function barsOf(seed: string) { let h = hash(seed); const o: number[] = []; for (let i = 0; i < 44; i++) { h = Math.imul(h ^ (h >>> 15), 2246822519) >>> 0; o.push(1 + (h % 3)) } return o }
const fmt = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()

async function downloadPng(s: Saved, total: number) {
  try { await document.fonts.ready } catch {}
  const W = 1400, H = 560, S = 1040, CX = (S + W) / 2, serial = serialOf(s)
  const c = document.createElement('canvas'); c.width = W; c.height = H
  const x = c.getContext('2d')!
  const g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#0d2616'); g.addColorStop(0.7, '#030a06'); g.addColorStop(1, '#020604')
  x.fillStyle = g; x.fillRect(0, 0, W, H)
  const r = x.createRadialGradient(300, H / 2, 10, 300, H / 2, 560); r.addColorStop(0, 'rgba(141,255,74,.2)'); r.addColorStop(1, 'rgba(141,255,74,0)')
  x.fillStyle = r; x.fillRect(0, 0, S, H)
  x.strokeStyle = '#d8b25a'; x.lineWidth = 3; x.strokeRect(14, 14, W - 28, H - 28)
  x.strokeStyle = 'rgba(216,178,90,.4)'; x.lineWidth = 1; x.strokeRect(26, 26, W - 52, H - 52)
  x.setLineDash([10, 10]); x.strokeStyle = 'rgba(216,178,90,.65)'; x.lineWidth = 2; x.beginPath(); x.moveTo(S, 50); x.lineTo(S, H - 50); x.stroke(); x.setLineDash([])
  const t = (str: string, px: number, py: number, size: number, color: string | CanvasGradient, sp = 0, align: CanvasTextAlign = 'left', w = 700) => {
    x.font = `${w} ${size}px Cinzel, Georgia, serif`; x.fillStyle = color; x.textAlign = align
    try { (x as any).letterSpacing = `${sp}px` } catch {}
    x.fillText(str, px, py)
  }
  const name = s.name.toUpperCase()
  t('MARVEL // WORTHY', 70, 88, 22, '#8dff4a', 6)
  t('ADMIT ONE', S - 60, 88, 22, '#d8b25a', 6, 'right')
  t('THE ARCHIVE HAS JUDGED YOU', 70, 150, 18, '#9db894', 5, 'left', 500)
  t(name, 70, 240, name.length > 14 ? 60 : 80, '#e7f1dc', 2)
  t('IS WORTHY TO WITNESS', 70, 300, 28, '#8dff4a', 10)
  const lg = x.createLinearGradient(70, 330, 70, 470); lg.addColorStop(0, '#f3dd9c'); lg.addColorStop(1, '#a8802f')
  t('LOKI', 66, 465, 150, lg, 14, 'left', 900)
  const meta: [string, string][] = [['ISSUED', fmt(s.issued)], ['VERIFIED', `${total} / ${total}`], ['SEAT', 'GLORIOUS PURPOSE']]
  meta.forEach(([k, v], i) => { const px = 620 + i * 140 + (i === 2 ? 20 : 0); t(k, px, 410, 14, '#7e9a78', 4, 'left', 500); t(v, px, 442, i === 2 ? 17 : 22, '#e7f1dc', 2) })
  t('FAN-MADE NOVELTY TICKET · NOT A REAL TICKET · NO CASH VALUE · NOT AFFILIATED WITH MARVEL OR DISNEY', 70, H - 46, 12, '#5f7a5a', 2, 'left', 500)
  t('ADMIT ONE', CX, 110, 26, '#d8b25a', 8, 'center')
  t('LOKI', CX, 190, 56, '#e7f1dc', 8, 'center', 900)
  const bars = barsOf(serial); let bx = CX - 126; x.fillStyle = '#e7f1dc'
  for (const b of bars) { const w = b * 2; if (bx + w > CX + 126) break; x.fillRect(bx, 230, w, 170); bx += w + 3 }
  t(serial, CX, 440, 20, '#8dff4a', 4, 'center')
  t(fmt(s.issued), CX, 478, 16, '#9db894', 3, 'center', 500)
  x.globalCompositeOperation = 'destination-out'
  ;[0, H].forEach((py) => { x.beginPath(); x.arc(S, py, 28, 0, Math.PI * 2); x.fill() })
  c.toBlob((b) => { if (!b) return; const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = `loki-ticket-${serial}.png`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000) }, 'image/png')
}

export default function Ticket({ total }: { total: number }) {
  const [saved, setSaved] = useState<Saved | null>(null)
  const [draft, setDraft] = useState('')
  const [ready, setReady] = useState(false)
  useEffect(() => { try { const r = localStorage.getItem(KEY); if (r) { const p = JSON.parse(r); if (p?.name && p?.issued) setSaved(p) } } catch {} setReady(true) }, [])
  const forge = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const name = draft.replace(/[^\p{L}\p{N} .'-]/gu, '').trim().slice(0, 22)
    if (name.length < 2) return
    const s = { name, issued: new Date().toISOString() }
    try { localStorage.setItem(KEY, JSON.stringify(s)) } catch {}
    setSaved(s)
  }
  const edit = () => { if (saved) setDraft(saved.name); try { localStorage.removeItem(KEY) } catch {} setSaved(null) }
  if (!ready) return null
  if (!saved) return (
    <section className="ticket-section" aria-label="Claim your Loki ticket">
      <p className="eyebrow">YOUR REWARD AWAITS</p>
      <form className="ticket-form" onSubmit={forge}>
        <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="ENTER YOUR NAME" maxLength={22} aria-label="Name for your ticket" autoComplete="name" />
        <button className="primary-cta" type="submit" disabled={draft.trim().length < 2}>FORGE MY LOKI TICKET</button>
      </form>
    </section>
  )
  const serial = serialOf(saved), bars = barsOf(serial)
  return (
    <section className="ticket-section" aria-label="Your Loki ticket">
      <motion.div className="ticket-wrap" initial={{ opacity: 0, y: 60, rotate: -3, scale: 0.9 }} animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }} transition={{ type: 'spring', damping: 14, stiffness: 70, delay: 0.2 }}>
        <div className="ticket" id="loki-ticket">
          <div className="tk-main">
            <div className="tk-top"><span>MARVEL // WORTHY</span><span>ADMIT ONE</span></div>
            <p className="tk-kicker">THE ARCHIVE HAS JUDGED YOU</p>
            <h3 className="tk-name">{saved.name}</h3>
            <p className="tk-worthy">IS WORTHY TO WITNESS</p>
            <h4 className="tk-loki">LOKI</h4>
            <div className="tk-meta"><span>ISSUED<b>{fmt(saved.issued)}</b></span><span>VERIFIED<b>{total} / {total}</b></span><span>SEAT<b>GLORIOUS PURPOSE</b></span></div>
            <p className="tk-fine">FAN-MADE NOVELTY TICKET · NOT A REAL TICKET · NO CASH VALUE · NOT AFFILIATED WITH MARVEL OR DISNEY</p>
          </div>
          <div className="tk-stub">
            <span className="tk-admit">ADMIT ONE</span><span className="tk-stub-loki">LOKI</span>
            <svg className="tk-bars" viewBox="0 0 126 60" preserveAspectRatio="none" aria-hidden="true">
              {(() => { let bx = 0; return bars.map((b, i) => { const w = b; const el = bx + w <= 126 ? <rect key={i} x={bx} y="0" width={w} height="60" fill="currentColor" /> : null; bx += w + 1.5; return el }) })()}
            </svg>
            <span className="tk-serial">{serial}</span>
          </div>
        </div>
      </motion.div>
      <div className="btn-row ticket-actions">
        <button className="primary-cta" onClick={() => downloadPng(saved, total)}><Download size={16} /> DOWNLOAD TICKET</button>
        <button className="ghost-cta" onClick={() => window.print()}><Printer size={14} /> PRINT</button>
        <button className="ghost-cta" onClick={edit}><Pencil size={14} /> CHANGE NAME</button>
      </div>
    </section>
  )
}
