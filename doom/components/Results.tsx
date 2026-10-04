'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Movie } from '../data/movies'
import Poster from './Poster'
import Ticket from './Ticket'
const bits = Array.from({ length: 22 }, (_, i) => ({ l: (i * 47) % 100, d: (i % 7) * 0.15, s: 3 + (i % 4) }))
export function FailureScreen({ score, onRetry, onBack }: { score: number; onRetry: () => void; onBack: () => void }) {
  return <motion.section className="result-screen result-failure" animate={{ x: [0, -26, 26, -18, 18, -8, 8, 0] }} transition={{ duration: 0.7 }}>
    <motion.div className="flash" initial={{ opacity: 0.9 }} animate={{ opacity: 0 }} transition={{ duration: 1.2 }} />
    <div className="result-radial" />
    {bits.map((b, i) => <motion.i key={i} className="bit red" style={{ left: `${b.l}%`, width: b.s, height: b.s }} initial={{ top: '-5%', opacity: 1 }} animate={{ top: '105%', opacity: 0 }} transition={{ duration: 2.2, delay: b.d }} />)}
    <motion.div className="result-body" initial={{ y: -240, rotate: -9, opacity: 0, filter: 'blur(16px)' }} animate={{ y: 0, rotate: 0, opacity: 1, filter: 'blur(0px)' }} transition={{ type: 'spring', damping: 11, stiffness: 70, delay: 0.25 }}>
      <p className="eyebrow">TRIAL FAILED</p>
      <h2>YOU ARE NOT<br /><span>WORTHY.</span></h2>
      <p className="score">SCORE: {score} / 5</p>
      <div className="btn-row"><button className="primary-cta" onClick={onRetry}>TRY AGAIN <ArrowRight /></button><button className="ghost-cta" onClick={onBack}>RETURN TO JOURNEY</button></div>
    </motion.div>
  </motion.section>
}
export function SuccessScreen({ hasNext, onContinue, onNext }: { hasNext: boolean; onContinue: () => void; onNext: () => void }) {
  return <motion.section className="result-screen result-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <motion.div className="result-radial" initial={{ scale: 0.2, opacity: 0 }} animate={{ scale: 1.6, opacity: 1 }} transition={{ duration: 1.6 }} />
    {bits.map((b, i) => <motion.i key={i} className="bit gold" style={{ left: `${b.l}%`, width: b.s, height: b.s }} initial={{ bottom: '-5%', opacity: 1 }} animate={{ bottom: '105%', opacity: 0 }} transition={{ duration: 2.6, delay: b.d }} />)}
    <motion.div className="result-body" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
      <p className="eyebrow">TRIAL PASSED // 5 / 5 VERIFIED</p>
      <h2>YOU ARE<br /><span>WORTHY.</span></h2>
      <p className="score">MOVIE VERIFIED</p>
      <div className="btn-row"><button className="primary-cta" onClick={onContinue}>CONTINUE THE JOURNEY <ArrowRight /></button><button className="ghost-cta" onClick={onNext}>{hasNext ? 'NEXT UNVERIFIED MOVIE' : 'CLAIM YOUR TITLE'} →</button></div>
    </motion.div>
  </motion.section>
}
export function FinalCompletion({ list, total, onReplay, onArchive }: { list: Movie[]; total: number; onReplay: () => void; onArchive: () => void }) {
  return <motion.section className="master-screen screen-pad" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <p className="eyebrow">THE ARCHIVE IS COMPLETE</p>
    <motion.h2 initial={{ scale: 0.8, opacity: 0, letterSpacing: '.3em' }} animate={{ scale: 1, opacity: 1, letterSpacing: '0.02em' }} transition={{ duration: 1.6 }}>MARVEL<br /><span>MASTER</span></motion.h2>
    <p className="master-sub">YOU HAVE COMPLETED<br />THE ENTIRE JOURNEY.</p>
    <p className="score">{total} / {total} VERIFIED · 100% COMPLETE</p>
    <Ticket total={total} />
    <div className="constellation-grid">{list.map((m, i) => <motion.div key={m.id} className="mini" initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.05 }}><Poster title={m.title} article={m.poster} /></motion.div>)}</div>
    <div className="btn-row"><button className="primary-cta" onClick={onReplay}>REPLAY JOURNEY <ArrowRight /></button><button className="ghost-cta" onClick={onArchive}>VIEW COMPLETE ARCHIVE</button></div>
  </motion.section>
}
