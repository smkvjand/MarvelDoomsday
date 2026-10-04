import { NextResponse } from 'next/server'
import { P, dayKey, isBot, pipe } from '../../../lib/stats'
export const dynamic = 'force-dynamic'
export async function GET() {
  const r = await pipe([['GET', `${P}visits`]])
  return NextResponse.json({ count: r ? Number(r[0] ?? 0) : null })
}
export async function POST(req: Request) {
  if (isBot(req.headers.get('user-agent'))) return GET()
  const k = dayKey()
  const r = await pipe([['INCR', `${P}visits`], ['INCR', k], ['EXPIRE', k, 60 * 60 * 24 * 45]])
  return NextResponse.json({ count: r ? Number(r[0] ?? 0) : null })
}
