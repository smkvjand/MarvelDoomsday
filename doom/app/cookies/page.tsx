import type { Metadata } from 'next'
import LegalPage from '../../components/LegalPage'
export const metadata: Metadata = { title: 'Cookies & Storage', description: 'What MARVEL // WORTHY stores in your browser.' }
export default function Page() {
  return (
    <LegalPage title="Cookies &amp; Storage">
      <p>The Site sets <b>no advertising, tracking or third-party cookies</b>. It uses your browser’s storage only for features you can see.</p>
      <h2>Local storage (stays on your device)</h2>
      <ul>
        <li><code>marvel-worthy-progress-v1</code>: which films you have verified and your chosen viewing order.</li>
        <li><code>marvel-worthy-ticket-v1</code>: the name and issue date on your Loki ticket.</li>
        <li><code>mw-ticket-counted</code>: remembers that your ticket was already counted in the anonymous statistics.</li>
        <li><code>mw-notice-v1</code>: remembers that you dismissed the storage notice.</li>
      </ul>
      <h2>Session storage</h2>
      <ul><li><code>mw-visit</code>: stops the anonymous visit counter from counting you twice in one session. Cleared when you close the tab.</li></ul>
      <h2>Analytics</h2>
      <p>Vercel Web Analytics measures aggregate page views without cookies.</p>
      <h2>Managing it</h2>
      <p>These items are essential to the Site working as described. You can delete them any time through your browser’s site-data settings or with “Reset Journey” inside the archive.</p>
    </LegalPage>
  )
}
