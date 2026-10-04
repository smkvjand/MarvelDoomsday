import Link from 'next/link'
import { SITE } from '../lib/site'
export default function LegalPage({ title, eyebrow, children }: { title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <main className="marvel-shell legal-shell">
      <div className="doom-floor" /><div className="grain" />
      <article className="legal">
        <Link href="/" className="back-button">← RETURN TO THE ARCHIVE</Link>
        <p className="eyebrow">{eyebrow ?? `LEGAL // LAST UPDATED ${SITE.legalUpdated.toUpperCase()}`}</p>
        <h1>{title}</h1>
        {children}
      </article>
    </main>
  )
}
