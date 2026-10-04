export const SITE = {
  name: 'MARVEL // WORTHY',
  tagline: 'Prove you watched it. Earn your ticket to Loki.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'),
  dev: {
    name: 'Srimuralikrishna SVJ Group',
    handle: 'SMKVJ',
    linkedin: 'https://www.linkedin.com/in/smkvjand/',
    youtube: 'https://www.youtube.com/@smkvjand',
    portfolio: 'https://smkvjand.github.io/portfolio/',
  },
  legalUpdated: '4 October 2026',
}
