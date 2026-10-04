import type { Metadata } from 'next'
import LegalPage from '../../components/LegalPage'
import { P, dayKey, pipe } from '../../lib/stats'
export const metadata: Metadata = { title: 'Site Statistics', description: 'Anonymous usage statistics for MARVEL // WORTHY.' }
export const dynamic = 'force-dynamic'
const n = (v: unknown) => Number(v ?? 0) || 0
export default async function Page() {
  const days = Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setUTCDate(d.getUTCDate() - (6 - i)); return d })
  const r = await pipe([['GET', `${P}visits`], ['GET', `${P}passed`], ['GET', `${P}failed`], ['GET', `${P}tickets`], ['GET', `${P}seen`], ...days.map((d) => ['GET', dayKey(d)])])
  const fmt = (d: Date) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', timeZone: 'UTC' }).toUpperCase()
  if (!r) return (
    <LegalPage title="Site Statistics" eyebrow="LIVE // ANONYMOUS">
      <p>Statistics are not available right now. The site owner needs to connect the Upstash Redis integration in Vercel.</p>
    </LegalPage>
  )
  const [visits, passed, failed, tickets, seen] = r.slice(0, 5).map(n)
  const daily = r.slice(5).map(n)
  const max = Math.max(1, ...daily)
  const rate = passed + failed ? Math.round((passed / (passed + failed)) * 100) : 0
  const cards: [string, string][] = [['TOTAL VISITS', visits.toLocaleString('en-IN')], ['TODAY', daily[6].toLocaleString('en-IN')], ['TRIALS PASSED', passed.toLocaleString('en-IN')], ['TRIALS FAILED', failed.toLocaleString('en-IN')], ['PASS RATE', `${rate}%`], ['FILMS MARKED SEEN', seen.toLocaleString('en-IN')], ['LOKI TICKETS FORGED', tickets.toLocaleString('en-IN')]]
  return (
    <LegalPage title="Site Statistics" eyebrow="LIVE // ANONYMOUS COUNTERS">
      <div className="stats-grid">{cards.map(([k, v]) => <div key={k} className="stat-card"><small>{k}</small><b>{v}</b></div>)}</div>
      <h2>Visits, last 7 days</h2>
      <div className="stat-bars" role="img" aria-label="Visits per day for the last seven days">
        {daily.map((v, i) => <div key={i} className="stat-bar"><span>{v}</span><i style={{ height: `${Math.max(4, (v / max) * 100)}%` }} /><em>{fmt(days[i])}</em></div>)}
      </div>
      <p className="stat-note">Counters are anonymous totals. No personal data is stored. Dates are in UTC.</p>
    </LegalPage>
  )
}
