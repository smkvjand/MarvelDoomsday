const E = Array.from({ length: 20 }, (_, i) => ({ l: (i * 53) % 100, s: 2 + (i % 4), d: 6 + (i % 5) * 2, dl: (i % 9) * 0.9 }))
export default function Embers() {
  return (
    <div className="embers" aria-hidden="true">
      {E.map((e, i) => <span key={i} style={{ left: `${e.l}%`, width: e.s, height: e.s, animationDuration: `${e.d}s`, animationDelay: `${e.dl}s` }} />)}
      <div className="storm" />
    </div>
  )
}
