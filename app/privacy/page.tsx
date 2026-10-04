import type { Metadata } from 'next'
import LegalPage from '../../components/LegalPage'
import { SITE } from '../../lib/site'
export const metadata: Metadata = { title: 'Privacy Policy', description: 'How MARVEL // WORTHY handles your data.' }
export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>MARVEL // WORTHY (“the Site”) is operated by {SITE.dev.name} (“we”, “us”). We built it to need as little data as possible. There are no accounts, no logins, and no ads.</p>
      <h2>What stays on your device</h2>
      <p>Your quiz progress, chosen viewing order, and the name you type for your Loki ticket are saved in your browser’s local storage. They never leave your device and we cannot see them. Clearing your browser data, or using “Reset Journey”, deletes them.</p>
      <h2>What we collect</h2>
      <ul>
        <li><b>Anonymous visit counter:</b> when you open the Site, a single total number is incremented once per browser session. We do not store your IP address, identity, or any per-visitor record in this counter.</li>
        <li><b>Aggregate analytics:</b> we use Vercel Web Analytics, a privacy-focused service that measures page views without cookies and without building cross-site profiles.</li>
        <li><b>Server logs:</b> our hosting provider (Vercel) may process technical data such as IP address and user agent to deliver the Site and protect it from abuse.</li>
      </ul>
      <h2>Third-party services</h2>
      <ul>
        <li><b>Google Fonts</b> serves the typefaces (your IP address is sent to Google when they load).</li>
        <li><b>Wikipedia / Wikimedia</b> supplies film poster images, loaded directly from their servers.</li>
        <li><b>Vercel</b> hosts the Site; a managed Redis database (e.g. Upstash) may store the anonymous visit total.</li>
        <li><b>Watch links</b> open third-party search pages. Their privacy practices apply once you leave the Site.</li>
      </ul>
      <p>We do not sell personal data, and we do not use it for advertising or profiling.</p>
      <h2>Children</h2>
      <p>The Site is a general-audience movie quiz and is not directed at children under 13. We knowingly collect no personal information from anyone.</p>
      <h2>Your rights</h2>
      <p>Because we hold no personal data about you, there is usually nothing to access or erase beyond what is in your own browser. If you are in the EU/UK (GDPR) or India (DPDP Act, 2023) and believe we hold data about you, contact us using the details below and we will respond promptly.</p>
      <h2>Changes</h2>
      <p>We may update this policy; the date above shows the latest revision.</p>
      <h2>Contact</h2>
      <p>Reach the developer through <a href={SITE.dev.portfolio} target="_blank" rel="noopener noreferrer">the portfolio</a> or <a href={SITE.dev.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </LegalPage>
  )
}
