import type { Metadata } from 'next'
import LegalPage from '../../components/LegalPage'
import { SITE } from '../../lib/site'
export const metadata: Metadata = { title: 'Contact & Takedowns', description: 'Contact the developer, send privacy requests or copyright notices.' }
export default function Page() {
  return (
    <LegalPage title="Contact &amp; Takedowns">
      <h2>Contact</h2>
      <p>Reach {SITE.dev.name} through any of the channels below. Please use the subject line that matches your request: <b>Privacy request</b>, <b>Copyright / trademark notice</b>, or <b>General</b>.</p>
      <ul>
        {SITE.dev.email && <li>Email: <a href={`mailto:${SITE.dev.email}`}>{SITE.dev.email}</a></li>}
        <li>LinkedIn: <a href={SITE.dev.linkedin} target="_blank" rel="noopener noreferrer">{SITE.dev.linkedin}</a></li>
        <li>Portfolio: <a href={SITE.dev.portfolio} target="_blank" rel="noopener noreferrer">{SITE.dev.portfolio}</a></li>
        <li>YouTube: <a href={SITE.dev.youtube} target="_blank" rel="noopener noreferrer">{SITE.dev.youtube}</a></li>
      </ul>
      <h2>Privacy requests &amp; grievances</h2>
      <p>Send access, deletion, correction or objection requests, and any grievance under applicable law, to the contact above. We aim to acknowledge within 7 days and resolve within 30 days.</p>
      <h2>Copyright &amp; trademark notices</h2>
      <p>Rights holders: see the notice procedure on the <a href="/disclaimer">Disclaimer &amp; Copyright</a> page.</p>
    </LegalPage>
  )
}
