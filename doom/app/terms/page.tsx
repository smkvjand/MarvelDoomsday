import type { Metadata } from 'next'
import LegalPage from '../../components/LegalPage'
import { SITE } from '../../lib/site'
export const metadata: Metadata = { title: 'Terms of Use', description: 'Terms for using MARVEL // WORTHY.' }
export default function Page() {
  return (
    <LegalPage title="Terms of Use">
      <p>These Terms of Use (“Terms”) form an agreement between you and {SITE.dev.name} (“we”, “us”) about your use of MARVEL // WORTHY (“the Site”). By accessing or using the Site you agree to these Terms. If you do not agree, do not use the Site.</p>
      <h2>1. Eligibility</h2>
      <p>You must be at least 13 years old (or the minimum age of digital consent in your country, if higher) to use the Site. If you are under 18, use it with a parent or guardian’s permission.</p>
      <h2>2. A free fan project</h2>
      <p>The Site is a free, non-commercial, unofficial fan experience. We do not sell anything, run advertising, or charge for access. Quiz results, “worthy” marks and the Loki ticket are novelty items only: they have no monetary value, grant no access to any film, show, event or service, and cannot be redeemed for anything.</p>
      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>attack, overload, probe or attempt unauthorised access to the Site, its hosting, or its API;</li>
        <li>scrape the Site at a scale that harms its operation, or use bots to inflate statistics;</li>
        <li>use the Site for unlawful, harassing or deceptive purposes;</li>
        <li>present the ticket, or the Site, as official, licensed or endorsed by Marvel, Disney or anyone else;</li>
        <li>enter names or content that are unlawful, hateful, or infringe the rights of others.</li>
      </ul>
      <h2>4. Intellectual property</h2>
      <p>The original source code, layout, design and written copy of the Site belong to {SITE.dev.name}. All Marvel and related names, characters, logos, titles and artwork belong to their respective owners (see the <a href="/disclaimer">Disclaimer &amp; Copyright</a>). Nothing in these Terms transfers any rights in third-party material to you or to us. You may view and use the Site for personal, non-commercial purposes.</p>
      <h2>5. Third-party services and links</h2>
      <p>The Site relies on third-party services (such as hosting, fonts and image sources) and links to external websites. We do not control them and are not responsible for their content, availability or practices.</p>
      <h2>6. Disclaimer of warranties</h2>
      <p>THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE”. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, SECURE OR ERROR-FREE, OR THAT QUIZ CONTENT IS COMPLETE OR CORRECT.</p>
      <h2>7. Limitation of liability</h2>
      <p>TO THE FULLEST EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR FOR LOST PROGRESS, DATA OR PROFITS, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SITE. BECAUSE THE SITE IS FREE, OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM RELATING TO THE SITE WILL NOT EXCEED ONE THOUSAND INDIAN RUPEES (INR 1,000). Nothing in these Terms excludes liability that cannot be excluded by law, nor limits any mandatory consumer rights you have in your country of residence.</p>
      <h2>8. Indemnity</h2>
      <p>To the extent permitted by law, you agree to indemnify and hold us harmless from claims, losses and expenses (including reasonable legal fees) arising from your breach of these Terms or your misuse of the Site.</p>
      <h2>9. Notices and takedowns</h2>
      <p>Rights holders and others who wish to report content can follow the procedure on the <a href="/contact">Contact &amp; Takedowns</a> and <a href="/disclaimer">Disclaimer</a> pages.</p>
      <h2>10. Changes and termination</h2>
      <p>We may modify, suspend or discontinue the Site, or update these Terms, at any time. The “last updated” date above shows the latest version. Continued use after an update means you accept it. We may block access to anyone who breaches these Terms.</p>
      <h2>11. International use</h2>
      <p>The Site is operated from India and is available worldwide. You are responsible for complying with the laws of the place you access it from. We make no claim that the Site is appropriate or lawful in every jurisdiction.</p>
      <h2>12. Governing law and disputes</h2>
      <p>These Terms are governed by the laws of India, without regard to conflict-of-law rules. Before starting any formal proceeding, you agree to first contact us and try to resolve the dispute informally for at least 30 days. If it is not resolved, the courts at Bengaluru, Karnataka, India have exclusive jurisdiction, except where mandatory law gives you the right to bring a claim in your home courts.</p>
      <h2>13. General</h2>
      <p>If any part of these Terms is found unenforceable, the rest remains in effect. Failure to enforce a right is not a waiver of it. These Terms (with the Privacy Policy, Cookies &amp; Storage and Disclaimer pages) are the entire agreement between you and us about the Site. You may not assign them; we may.</p>
      <h2>14. Contact</h2>
      <p>See the <a href="/contact">Contact</a> page.</p>
    </LegalPage>
  )
}
