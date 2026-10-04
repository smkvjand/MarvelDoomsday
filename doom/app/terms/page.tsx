import type { Metadata } from 'next'
import LegalPage from '../../components/LegalPage'
import { SITE } from '../../lib/site'
export const metadata: Metadata = { title: 'Terms of Use', description: 'Terms for using MARVEL // WORTHY.' }
export default function Page() {
  return (
    <LegalPage title="Terms of Use">
      <p>By using MARVEL // WORTHY (“the Site”) you agree to these terms. If you do not agree, please do not use the Site.</p>
      <h2>1. A fan project for fun</h2>
      <p>The Site is a free, non-commercial, unofficial fan experience. Quiz results and the “Loki ticket” are novelty items only: they have no monetary value, grant no access to any film, show, venue or service, and cannot be redeemed for anything.</p>
      <h2>2. Acceptable use</h2>
      <ul>
        <li>Do not attempt to disrupt, overload, scrape at scale, or break into the Site or its API.</li>
        <li>Do not use the Site for unlawful purposes or to harass others.</li>
        <li>Do not misrepresent the ticket as an official Marvel or Disney product.</li>
      </ul>
      <h2>3. Intellectual property</h2>
      <p>The original code, layout and design of the Site belong to {SITE.dev.name}. All Marvel names, characters, logos, titles and film artwork belong to their respective owners (see the <a href="/disclaimer">Disclaimer</a>). Nothing here transfers any rights in them.</p>
      <h2>4. No warranty</h2>
      <p>The Site is provided “as is” and “as available”, without warranties of any kind. Quiz content and film details are provided in good faith and may contain errors. We do not guarantee uninterrupted or error-free operation.</p>
      <h2>5. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, we are not liable for any indirect, incidental or consequential damages arising from your use of the Site, including lost progress stored in your browser.</p>
      <h2>6. External links</h2>
      <p>The Site links to third-party websites. We do not control and are not responsible for their content or practices.</p>
      <h2>7. Changes and termination</h2>
      <p>We may change the Site or these terms at any time. Continued use after changes means you accept them.</p>
      <h2>8. Governing law</h2>
      <p>These terms are governed by the laws of India, and the courts of Karnataka have jurisdiction, without affecting any mandatory consumer rights you hold in your own country.</p>
      <h2>Contact</h2>
      <p><a href={SITE.dev.portfolio} target="_blank" rel="noopener noreferrer">Developer portfolio</a> · <a href={SITE.dev.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </LegalPage>
  )
}
