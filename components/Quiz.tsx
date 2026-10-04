'use client'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Movie } from '../data/movies'
const hash = (s: string) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)
export default function Quiz({ movie, onFinish }: { movie: Movie; onFinish: (score: number) => void }) {
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = movie.questions[i]
  const opts = useMemo(() => [...q.options].sort((a, b) => hash(q.id + a) - hash(q.id + b)), [q])
  const wrong = pick !== null && pick !== q.correctAnswer
  const right = pick !== null && !wrong
  const answer = (o: string) => {
    if (pick) return
    setPick(o)
    const s = score + (o === q.correctAnswer ? 1 : 0)
    setScore(s)
    setTimeout(() => { if (i < movie.questions.length - 1) { setI(i + 1); setPick(null) } else onFinish(s) }, o === q.correctAnswer ? 800 : 1600)
  }
  return <motion.section className="trial-screen screen-pad" animate={wrong ? { x: [0, -18, 18, -12, 12, 0] } : { x: 0 }} transition={{ duration: 0.45 }}>
    {wrong && <motion.div className="flash" initial={{ opacity: 0.55 }} animate={{ opacity: 0 }} transition={{ duration: 0.8 }} />}
    {right && <div className="burst" aria-hidden>{Array.from({ length: 14 }, (_, k) => <motion.span key={k} initial={{ x: 0, y: 0, opacity: 1 }} animate={{ x: Math.cos(k * 0.45) * 220, y: Math.sin(k * 0.45) * 160 - 40, opacity: 0 }} transition={{ duration: 0.8 }} />)}</div>}
    <div className="trial-header"><span>TRIAL {String(i + 1).padStart(2, '0')} / 05</span><span>{movie.title.toUpperCase()}</span></div>
    <AnimatePresence mode="wait">
      <motion.div key={q.id} className="trial-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}>
        <p className="eyebrow">THE ARTIFACT DEMANDS AN ANSWER</p>
        <h2>{q.question}</h2>
        <div className="answer-grid">{opts.map((o, k) => <button key={o} disabled={!!pick} onClick={() => answer(o)}
          className={`answer-panel ${pick ? (o === q.correctAnswer ? 'right' : o === pick ? 'wrong' : 'dim') : ''}`}><span>0{k + 1}</span>{o}{pick && o === q.correctAnswer ? ' ✓' : ''}</button>)}</div>
      </motion.div>
    </AnimatePresence>
  </motion.section>
}
