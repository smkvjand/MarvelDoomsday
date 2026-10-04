import Link from 'next/link'
export default function NotFound() {
  return (
    <main className="marvel-shell legal-shell">
      <div className="doom-floor" /><div className="grain" />
      <section className="nf">
        <p className="eyebrow">ERROR // 404</p>
        <h1>NOT <span>WORTHY.</span></h1>
        <p>This chamber does not exist in the archive.</p>
        <Link href="/" className="primary-cta">RETURN TO THE ARCHIVE</Link>
      </section>
    </main>
  )
}
