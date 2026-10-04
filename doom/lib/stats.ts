const URL_ = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN
export const P = 'marvel-worthy:'
export const dayKey = (d = new Date()) => `${P}d:${d.toISOString().slice(0, 10)}`
export const isBot = (ua: string | null) => /bot|crawl|spider|preview|headless/i.test(ua ?? '')
export async function pipe(cmds: (string | number)[][]): Promise<(string | number | null)[] | null> {
  if (!URL_ || !TOKEN) return null
  try {
    const r = await fetch(`${URL_}/pipeline`, { method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify(cmds), cache: 'no-store' })
    const j = await r.json()
    return Array.isArray(j) ? j.map((x: { result?: string | number | null }) => x.result ?? null) : null
  } catch { return null }
}
