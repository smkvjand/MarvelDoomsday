export type TrackEvent = 'pass' | 'fail' | 'ticket' | 'seen'
export function track(e: TrackEvent) {
  try { fetch('/api/track', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ e }), keepalive: true }).catch(() => {}) } catch {}
}
