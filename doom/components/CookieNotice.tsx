'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function CookieNotice() {
  const [show, setShow] = useState(false)
  useEffect(() => { try { if (!localStorage.getItem('mw-notice-v1')) setShow(true) } catch {} }, [])
  if (!show) return null
  return (
    <div className="cookie-notice" role="region" aria-label="Storage notice">
      <p>This site stores your progress <b>only on your device</b> and uses no advertising or tracking cookies. <Link href="/cookies">Details</Link></p>
      <button className="ghost-cta" onClick={() => { try { localStorage.setItem('mw-notice-v1', '1') } catch {} setShow(false) }}>UNDERSTOOD</button>
    </div>
  )
}
