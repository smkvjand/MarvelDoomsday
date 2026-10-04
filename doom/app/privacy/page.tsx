import type { Metadata } from 'next'
import LegalPage from '../../components/LegalPage'
import { SITE } from '../../lib/site'
export const metadata: Metadata = { title: 'Privacy Policy', description: 'How MARVEL // WORTHY handles your data.' }
export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This policy explains how MARVEL // WORTHY (“the Site”) handles information. The Site is operated from India by {SITE.dev.name}, who is the data controller / data fiduciary for the limited information described here. The Site has no accounts, logins, forms for personal data, or ads.</p>
      <h2>Information that stays on your device</h2>
      <p>Your quiz progress, “seen” marks, chosen viewing order, and the name you type for your Loki ticket are saved in your browser’s local storage. They are not sent to us and we cannot see them. Clearing your browser data, or using “Reset”, deletes them.</p>
      <h2>Information we process</h2>
      <ul>
        <li><b>Anonymous usage counters:</b> running totals of daily visits, trials passed or failed, films marked as seen, and tickets forged. They contain no identifiers and are shown publicly on the <a href="/stats">Statistics</a> page.</li>
        <li><b>Aggregate analytics:</b> Vercel Web Analytics measures page views without cookies and without cross-site profiling.</li>
        <li><b>Technical logs:</b> our hosting provider (Vercel) may process technical data such as IP address, browser type and request details to deliver the Site and protect it against abuse.</li>
      </ul>
      <h2>Why we process it (legal bases)</h2>
      <p>Where laws such as the GDPR/UK GDPR apply, we rely on our legitimate interests in running, securing and understanding the use of a free website, and on your consent for non-essential storage if required. We do not make automated decisions that affect you and do not profile you.</p>
      <h2>Third parties and international transfers</h2>
      <ul>
        <li><b>Vercel</b> (hosting and analytics) and <b>Upstash</b> (database for anonymous counters) process data on our behalf, possibly in the United States or other countries.</li>
        <li><b>Google Fonts</b> serves typefaces; your IP address is sent to Google when they load.</li>
        <li><b>Wikipedia / Wikimedia</b> supplies poster images, loaded directly from their servers.</li>
        <li><b>“Where to watch” links</b> open third-party search pages with their own privacy practices.</li>
      </ul>
      <p>Where data is transferred internationally, it relies on the safeguards those providers offer (for example standard contractual clauses or equivalent frameworks).</p>
      <h2>Retention</h2>
      <p>Daily visit counters are kept for about 45 days; running totals are kept as long as the Site operates. Hosting logs follow the provider’s retention policy. Data in your browser stays until you delete it.</p>
      <h2>Your rights</h2>
      <p>Depending on where you live, you may have the right to access, correct, delete, restrict or object to processing of personal data, to withdraw consent, to data portability, and to complain to your data protection authority. This includes rights under the GDPR/UK GDPR, the California CCPA/CPRA, and India’s Digital Personal Data Protection Act, 2023. We <b>do not sell or share personal information</b> for advertising. Because we hold no personal data about you beyond standard server logs, most requests can be answered quickly. We honour browser “Do Not Track” and Global Privacy Control signals by default, since we do not track you across sites.</p>
      <h2>Children</h2>
      <p>The Site is a general-audience movie quiz and is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information, contact us and we will delete it.</p>
      <h2>Security</h2>
      <p>We use HTTPS and standard security headers and keep data collection minimal. No online service can guarantee absolute security.</p>
      <h2>Changes</h2>
      <p>We may update this policy; the date above shows the latest revision.</p>
      <h2>Contact and grievances</h2>
      <p>Send privacy requests or complaints through the <a href="/contact">Contact</a> page. We aim to acknowledge within 7 days and respond within 30 days.</p>
    </LegalPage>
  )
}
