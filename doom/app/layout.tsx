import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import Footer from '../components/Footer'
import Embers from '../components/Embers'
import CookieNotice from '../components/CookieNotice'
import { SITE } from '../lib/site'

const desc = 'Prove you watched every Marvel film. Pass the trials, prove you are worthy, and earn your ticket to Loki.'
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'MARVEL // WORTHY: Are You Worthy?', template: '%s | MARVEL // WORTHY' },
  description: desc,
  authors: [{ name: SITE.dev.name, url: SITE.dev.portfolio }],
  creator: SITE.dev.name,
  keywords: ['Marvel', 'MCU', 'quiz', 'Loki', 'Doctor Doom', 'watch order', 'fan project'],
  openGraph: { title: 'MARVEL // WORTHY', description: desc, type: 'website', siteName: SITE.name, images: [{ url: '/doom-hall.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'MARVEL // WORTHY', description: desc, images: ['/doom-hall.png'] },
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/icon-dark-32x32.png', sizes: '32x32' }], apple: '/apple-icon.png' },
}
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#020604' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Hind:wght@400;500;600;700&display=swap" />
      </head>
      <body className="antialiased">
        <Embers />
        {children}
        <Footer />
        <CookieNotice />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
