import { NextResponse } from 'next/server'
import { P, isBot, pipe } from '../../../lib/stats'
export const dynamic = 'force-dynamic'
const MAP: Record<string, string> = { pass: 'passed', fail: 'failed', ticket: 'tickets', seen: 'seen' }
export async function POST(req: Request) {
  if (isBot(req.headers.get('user-agent'))) return NextResponse.json({ ok: false })
  let e = ''
  try { e = String((await req.json()).e) } catch {}
  if (!MAP[e]) return NextResponse.json({ ok: false }, { status: 400 })
  await pipe([['INCR', `${P}${MAP[e]}`]])
  return NextResponse.json({ ok: true })
}
