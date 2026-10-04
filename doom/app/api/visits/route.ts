import { NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
const URL_ = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN
const KEY = 'marvel-worthy:visits'
async function redis(cmd: string): Promise<number | null> {
  if (!URL_ || !TOKEN) return null
  try {
    const r = await fetch(`${URL_}/${cmd}/${KEY}`, { headers: { Authorization: `Bearer ${TOKEN}` }, cache: 'no-store' })
    const j = await r.json()
    const v = Number(j.result)
    return Number.isFinite(v) ? v : 0
  } catch { return null }
}
export async function GET() { return NextResponse.json({ count: await redis('get') }) }
export async function POST(req: Request) {
  const bot = /bot|crawl|spider|preview|headless/i.test(req.headers.get('user-agent') ?? '')
  return NextResponse.json({ count: await redis(bot ? 'get' : 'incr') })
}
