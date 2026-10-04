'use client'
import { useMemo, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ExternalLink, Eye, EyeOff, LockKeyhole } from 'lucide-react'
import { movies, type Movie } from '../data/movies'
import { useProgress } from '../hooks/useProgress'
import { ORDER_LABEL, nextUnverified, sortMovies, type Order } from '../utils/ordering'
import MovieCard from '../components/MovieCard'
import Poster from '../components/Poster'
import Quiz from '../components/Quiz'
import { FailureScreen, FinalCompletion, SuccessScreen } from '../components/Results'

type Screen = 'landing' | 'paths' | 'archive' | 'detail' | 'trial' | 'success' | 'failure' | 'final'
type Filter = 'all' | 'unseen' | 'seen' | 'verified'
const FILTERS: [Filter, string][] = [['all', 'ALL'], ['unseen', 'NOT SEEN'], ['seen', 'SEEN'], ['verified', 'WORTHY']]
const ORDERS: Order[] = ['release', 'chronological', 'phase']
const BLURB: Record<Order, string> = { release: 'The way audiences lived it.', chronological: 'The way the timeline unfolds.', phase: 'Phase by phase, saga by saga.' }

export default function Page() {
  const { progress, complete, toggleSeen, setOrder, reset } = useProgress()
  const [screen, setScreen] = useState<Screen>('landing')
  const [sel, setSel] = useState<Movie>(movies[0])
  const [score, setScore] = useState(0)
  const [confirm, setConfirm] = useState(false)
  const done = progress.completedMovies
  const seen = progress.seenMovies
  const [filter, setFilter] = useState<Filter>('all')
  const total = movies.length
  const pct = Math.round((done.length / total) * 100)
  const list = useMemo(() => sortMovies(progress.selectedOrder), [progress.selectedOrder])
  const isDone = (m: Movie) => done.includes(m.id)
  const isSeen = (m: Movie) => seen.includes(m.id) || done.includes(m.id)
  const seenCount = movies.filter(isSeen).length
  const shown = list.filter((m) => filter === 'all' ? true : filter === 'unseen' ? !isSeen(m) : filter === 'seen' ? isSeen(m) && !isDone(m) : isDone(m))
  const groups = progress.selectedOrder === 'phase' ? Array.from(new Set(shown.map((m) => m.phase))).map((label) => ({ label, items: shown.filter((m) => m.phase === label) })) : [{ label: '', items: shown }]
  const years = (xs: Movie[]) => { const y = xs.map((m) => m.year); const a = Math.min(...y), b = Math.max(...y); return a === b ? `${a}` : `${a}–${b}` }
  const open = (m: Movie) => { setSel(m); setScreen('detail') }
  const finish = (s: number) => { setScore(s); if (s === 5) { complete(sel.id); setScreen('success') } else setScreen('failure') }
  const next = () => { const n = nextUnverified(list, done, sel.id); if (n) open(n); else setScreen('final') }
  const ready = sel.questions.length === 5

  return <MotionConfig reducedMotion="user"><main className="marvel-shell">
    <div className="doom-floor" />
    <div className="progress-top" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Journey progress"><motion.div className="progress-fill" initial={false} animate={{ width: `${pct}%` }} transition={{ duration: 1 }} /></div>
    <div className="grain" />
    <div className="topbar">
      <button className="brand-mark" onClick={() => setScreen('landing')} aria-label="Home"><img src="/marvel-studios.png" alt="Marvel Studios" /><i>// WORTHY</i></button>
      <nav className="top-nav" aria-label="Main">
        <button className={screen === 'landing' ? 'on' : ''} onClick={() => setScreen('landing')}>HOME</button>
        <button className={screen === 'paths' ? 'on' : ''} onClick={() => setScreen('paths')}>PATHS</button>
        <button className={screen === 'archive' || screen === 'detail' ? 'on' : ''} onClick={() => setScreen('archive')}>ARCHIVE</button>
      </nav>
      <span className="top-status">{done.length} / {total} WORTHY · {seenCount} SEEN <b>{pct}%</b></span>
    </div>
    <AnimatePresence mode="wait">
      {screen === 'landing' && <motion.section key="landing" className="landing screen-pad" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.04 }}>
        <div className="landing-copy"><h1><img className="hero-logo" src="/marvel-studios.png" alt="Marvel Studios" /><em>// WORTHY</em></h1><h2>ARE YOU<br /><span>WORTHY?</span></h2>
          <button className="primary-cta" onClick={() => setScreen('paths')}>ENTER THE JOURNEY <ArrowRight /></button></div>
        <div className="side-note">ARCHIVE // 001<br />A TRIAL OF MEMORY</div>
      </motion.section>}

      {screen === 'paths' && <motion.section key="paths" className="screen-pad paths-screen" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
        <p className="eyebrow">THE FIRST DECISION</p><h2 className="section-title">CHOOSE YOUR <span>PATH.</span></h2>
        <div className="path-grid">{ORDERS.map((o, i) => <motion.button key={o} className={`path-panel ${progress.selectedOrder === o ? 'active' : ''}`} whileHover={{ y: -8 }} onClick={() => { setOrder(o); setScreen('archive') }}>
          <span className="path-number">0{i + 1}</span><span className="path-name">{ORDER_LABEL[o]}</span><small>{BLURB[o]}</small><ArrowRight className="path-arrow" /></motion.button>)}</div>
      </motion.section>}

      {screen === 'archive' && <motion.section key="archive" className="screen-pad archive-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="archive-heading"><div><p className="eyebrow">ARCHIVE // {ORDER_LABEL[progress.selectedOrder]}</p><h2 className="section-title">THE <span>ARTIFACTS.</span></h2></div>
          <div className="verified-count"><strong>{done.length}</strong> / {total}<small>WORTHY · {seenCount} SEEN · {total} TOTAL</small></div></div>
        <div className="control-row">
          <div className="seg" role="group" aria-label="Viewing order">{ORDERS.map((o) => <button key={o} aria-pressed={progress.selectedOrder === o} className={progress.selectedOrder === o ? 'on' : ''} onClick={() => setOrder(o)}>{ORDER_LABEL[o]}</button>)}</div>
          <div className="seg seg-filter" role="group" aria-label="Filter films">{FILTERS.map(([f, label]) => <button key={f} aria-pressed={filter === f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{label}</button>)}</div>
          <button className="reset-link" onClick={() => setConfirm(true)}>RESET</button>
          {done.length === total && <button className="primary-cta claim-cta" onClick={() => setScreen('final')}>CLAIM YOUR LOKI TICKET <ArrowRight /></button>}
        </div>
        <p className="order-hint">{BLURB[progress.selectedOrder]} · showing {shown.length} of {total}. Marking a film as seen is just for tracking; only the trial makes you worthy.</p>
        {shown.length === 0 && <p className="empty-state">NOTHING IN THIS CHAMBER.</p>}
        {groups.map((g) => <div key={g.label || 'all'} className="phase-block">
          {g.label && <h3 className="phase-head">{g.label}<small>{years(g.items)} · {g.items.length} FILMS</small></h3>}
          <div className="poster-grid">{g.items.map((m, i) => <MovieCard key={`${progress.selectedOrder}-${m.id}`} movie={m} done={isDone(m)} seen={isSeen(m)} rank={list.indexOf(m) + 1} index={i} onOpen={() => open(m)} onToggleSeen={() => toggleSeen(m.id)} />)}</div>
        </div>)}
      </motion.section>}

      {screen === 'detail' && <motion.section key={`detail-${sel.id}`} className="screen-pad detail-screen" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }}>
        <button className="back-button" onClick={() => setScreen('archive')}><ChevronLeft /> ARCHIVE</button>
        <div className="detail-layout"><div className="detail-poster"><Poster title={sel.title} article={sel.poster} /></div>
          <div className="detail-copy"><p className="eyebrow">{sel.phase} // #{list.indexOf(sel) + 1} OF {total} IN {ORDER_LABEL[progress.selectedOrder]}</p>
            <h2>{sel.title}</h2>
            <p className={isDone(sel) ? 'v-yes status' : isSeen(sel) ? 'v-seen status' : 'v-no status'}>{isDone(sel) ? '✓ VERIFIED — WORTHY' : isSeen(sel) ? '◉ SEEN — NOT YET WORTHY' : 'UNSEEN · NOT WORTHY'}</p>{!isDone(sel) && <p className="seen-note">“Seen” is just your own tracking. Pass the trial to become worthy.</p>}
            <div className="detail-meta"><span>YEAR<strong>{sel.year}</strong></span><span>RUNTIME<strong>{sel.runtime} MIN</strong></span><span>DIRECTOR<strong>{sel.director}</strong></span>
              <span>MAIN CHARACTER<strong>{sel.mainCharacter}</strong></span><span>MAIN VILLAIN<strong>{sel.mainVillain}</strong></span><span>SETTING<strong>{sel.setting}</strong></span></div>
            <p className="detail-desc">{sel.description}</p>
            <div className="btn-row">{!isDone(sel) && <button className={`ghost-cta seen-btn ${seen.includes(sel.id) ? 'on' : ''}`} aria-pressed={seen.includes(sel.id)} onClick={() => toggleSeen(sel.id)}>{seen.includes(sel.id) ? <><EyeOff size={14} /> UNMARK SEEN</> : <><Eye size={14} /> MARK AS SEEN</>}</button>}<a className="ghost-cta" href={sel.watchSearchUrl} target="_blank" rel="noopener noreferrer">CHECK WHERE TO WATCH <ExternalLink size={14} /></a>
              {ready ? <button className="primary-cta" onClick={() => setScreen('trial')}>{isDone(sel) ? 'RE-VERIFY ARTIFACT' : 'PROVE YOU WATCHED IT'} <ArrowRight /></button>
                : <button className="primary-cta" disabled><LockKeyhole size={14} /> TRIAL SEALED — BEING FORGED</button>}</div></div></div>
      </motion.section>}

      {screen === 'trial' && <Quiz key={sel.id} movie={sel} onFinish={finish} />}
      {screen === 'failure' && <FailureScreen score={score} onRetry={() => setScreen('trial')} onBack={() => setScreen('archive')} />}
      {screen === 'success' && <SuccessScreen hasNext={nextUnverified(list, done, sel.id) !== null} onContinue={() => setScreen(done.length === total ? 'final' : 'archive')} onNext={next} />}
      {screen === 'final' && <FinalCompletion list={list} total={total} onReplay={() => setScreen('paths')} onArchive={() => setScreen('archive')} />}
    </AnimatePresence>

    {confirm && <div className="modal" role="dialog" aria-modal="true" aria-label="Reset journey"><div className="modal-box"><h3>RESET YOUR JOURNEY?</h3><p>This will remove all worthy and seen marks from this device.</p><b>CANNOT BE UNDONE.</b>
      <div className="btn-row"><button className="primary-cta" onClick={() => { reset(); setConfirm(false) }}>RESET</button><button className="ghost-cta" onClick={() => setConfirm(false)}>CANCEL</button></div></div></div>}
      </main></MotionConfig>
}
