import type { Metadata } from 'next'
import LegalPage from '../../components/LegalPage'
import { SITE } from '../../lib/site'
export const metadata: Metadata = { title: 'Disclaimer & Copyright', description: 'Trademark, copyright and fan-project notice.' }
export default function Page() {
  return (
    <LegalPage title="Disclaimer &amp; Copyright">
      <h2>Not affiliated</h2>
      <p>MARVEL // WORTHY is an independent, unofficial fan project. It is <b>not affiliated with, authorised, sponsored or endorsed by</b> Marvel Entertainment, Marvel Studios, The Walt Disney Company, or any of their affiliates.</p>
      <h2>Trademarks &amp; copyrights</h2>
      <p>Marvel, Marvel Studios, Loki, the names of all characters and films, related logos and artwork are trademarks and/or copyrighted works of their respective owners. They appear here only for identification, commentary and fan discussion. All rights remain with their owners.</p>
      <h2>Posters &amp; images</h2>
      <p>Film posters are loaded at runtime from Wikipedia/Wikimedia, where they are hosted under their own licensing and fair-use rationales. We do not host or claim ownership of them.</p>
      <h2>No streaming</h2>
      <p>The Site does not host, stream or distribute any film or episode. “Where to watch” links lead to third-party search pages; availability varies by region and subscription.</p>
      <h2>The Loki ticket</h2>
      <p>The ticket is a fan-made digital keepsake generated in your browser. It is not an official ticket, voucher or licensed product, and has no cash value.</p>
      <h2>Accuracy</h2>
      <p>Quiz questions and film information are written in good faith but may contain mistakes. Spoilers for the Marvel Cinematic Universe may appear in questions and answers.</p>
      <h2>Takedown requests</h2>
      <p>If you are a rights holder and believe any content here should be removed, contact the developer via <a href={SITE.dev.portfolio} target="_blank" rel="noopener noreferrer">the portfolio</a> or <a href={SITE.dev.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> with details of the material and your claim. We will review and act promptly.</p>
      <h2>Original work</h2>
      <p>© {new Date().getFullYear()} {SITE.dev.name}. The original source code, interface design and written copy of this Site are protected; all rights reserved.</p>
    </LegalPage>
  )
}
