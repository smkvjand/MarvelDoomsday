'use client'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import type { Movie } from '../data/movies'
import Poster from './Poster'
export default function MovieCard({ movie, done, seen, rank, index, onOpen, onToggleSeen }: { movie: Movie; done: boolean; seen: boolean; rank: number; index: number; onOpen: () => void; onToggleSeen: () => void }) {
  const state = done ? 'verified' : seen ? 'seen, not verified' : 'unseen'
  return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.025, 0.7) }} whileHover={{ y: -8 }}
    className={`artifact-poster ${done ? 'done' : seen ? 'seen' : ''} ${movie.doomsday ? 'doom' : ''}`}>
    <span className="rank-chip" aria-hidden>#{rank}</span>
    {movie.doomsday && <span className="doom-tag" aria-label="Doomsday essential">☠ DOOMSDAY</span>}
    {done && <span className="badge" aria-hidden>✓</span>}
    <button type="button" className="card-open" onClick={onOpen} aria-label={`${movie.title}, number ${rank}, ${state}`}>
      <Poster title={movie.title} article={movie.poster} />
      <div className="card-foot"><b>{movie.title}</b><span className={done ? 'v-yes' : seen ? 'v-seen' : 'v-no'}>{done ? '✓ WORTHY' : seen ? '◉ SEEN · NOT VERIFIED' : 'UNSEEN'}</span></div>
    </button>
    <button type="button" className={`seen-toggle ${seen ? 'on' : ''}`} disabled={done} aria-pressed={seen} onClick={onToggleSeen}>
      {done ? <>✓ VERIFIED</> : seen ? <><EyeOff size={13} /> UNMARK SEEN</> : <><Eye size={13} /> MARK AS SEEN</>}
    </button>
  </motion.div>
}
