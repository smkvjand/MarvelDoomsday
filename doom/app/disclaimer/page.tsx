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
      <p>Marvel, Marvel Studios, Loki, and the names of characters, films and series, along with related logos and artwork, are trademarks and/or copyrighted works of their respective owners and are used here only to identify the works being discussed, for non-commercial commentary and fan enjoyment. All rights remain with their owners. No ownership or licence is claimed or implied.</p>
      <h2>Posters &amp; images</h2>
      <p>Film and series posters are loaded at runtime from Wikipedia/Wikimedia, where they are hosted under their own licensing and fair-use rationales. We do not host, copy or claim ownership of them.</p>
      <h2>No streaming</h2>
      <p>The Site does not host, stream or distribute any film or episode. “Where to watch” links lead to third-party search pages; availability varies by region and subscription.</p>
      <h2>The Loki ticket</h2>
      <p>The ticket is a fan-made digital keepsake generated in your browser. It is not an official ticket, voucher or licensed product, and has no cash value.</p>
      <h2>Accuracy and spoilers</h2>
      <p>Quiz questions and film information are written in good faith but may contain mistakes. Questions and answers may contain spoilers for the Marvel Cinematic Universe. No information on the Site is professional advice of any kind.</p>
      <h2>Copyright &amp; trademark notice procedure</h2>
      <p>If you are a rights holder (or authorised to act for one) and believe material on the Site infringes your rights, send a written notice via the <a href="/contact">Contact</a> page containing:</p>
      <ul>
        <li>identification of the work you claim is infringed;</li>
        <li>the exact location (URL) of the material on the Site;</li>
        <li>your name, address, email address and telephone number;</li>
        <li>a statement that you have a good-faith belief the use is not authorised by the rights holder, its agent or the law;</li>
        <li>a statement that the information in the notice is accurate and, under penalty of perjury, that you are authorised to act for the rights holder;</li>
        <li>your physical or electronic signature.</li>
      </ul>
      <p>We will review valid notices promptly and may remove or disable access to the material. If you believe material was removed by mistake, you may send a counter-notice with the same level of detail and a statement of good-faith belief that the removal was an error. We may terminate access for repeat infringers.</p>
      <h2>Original work</h2>
      <p>© {new Date().getFullYear()} {SITE.dev.name}. The original source code, interface design and written copy of this Site are protected; all rights reserved.</p>
    </LegalPage>
  )
}
