import Link from 'next/link'
import { Globe } from 'lucide-react'
import { SITE } from '../lib/site'
import VisitCounter from './VisitCounter'
const LI = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
const YT = 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
const Brand = ({ d }: { d: string }) => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
export default function Footer() {
  const d = SITE.dev
  return (
    <footer className="site-footer">
      <div className="foot-grid">
        <div>
          <b className="foot-logo">MARVEL <i>// WORTHY</i></b>
          <p>A fan-made trial of memory. Watch the saga, pass the trials, and earn your ticket to Loki.</p>
        </div>
        <nav aria-label="Legal">
          <h4>LEGAL</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/disclaimer">Disclaimer &amp; Copyright</Link>
          <Link href="/cookies">Cookies &amp; Storage</Link>
          <Link href="/contact">Contact &amp; Takedowns</Link>
        </nav>
        <div>
          <h4>THE DEVELOPER</h4>
          <p className="foot-dev">Forged by <strong>{d.name}</strong></p>
          <div className="foot-social">
            <a href={d.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Brand d={LI} /> LinkedIn</a>
            <a href={d.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Brand d={YT} /> YouTube</a>
            <a href={d.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio"><Globe size={16} /> Portfolio</a>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} {d.name}. Original code &amp; design, all rights reserved.</span>
        <span>Unofficial fan project. Not affiliated with, endorsed by, or sponsored by Marvel or Disney.</span>
        <span className="foot-right"><Link href="/stats" className="stats-btn">STATS</Link><VisitCounter /></span>
      </div>
    </footer>
  )
}
