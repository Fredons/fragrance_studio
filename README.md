# Fragrance Studios

Marketing website for **Fragrance Studios** — a recording, production, mixing and mastering house in Abuja, Nigeria.

Built with Next.js 16 (App Router, Turbopack), Tailwind CSS v4, and Motion.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Hero, philosophy, room teasers, producer, voices teaser, contact CTA |
| `/studio` | Twelve-plate visual tour + capability ledger |
| `/voices` | Full Google review wall with live search |
| `/contact` | Validated booking form (WhatsApp + email) |

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Configuration

A few values live in code rather than env vars:

- `studioPhone` in `app/components/ContactPage.tsx` — set this to the WhatsApp number (e.g. `2348012345678`) once confirmed.
- `studioEmail` in `app/components/ContactPage.tsx` and the links in `app/components/Footer.tsx`.

Site URL (used by metadata, sitemap, robots and JSON-LD) is resolved by
`app/lib/site.ts` in this order:

1. `NEXT_PUBLIC_SITE_URL` — explicit override. Set this in Vercel env vars
   when the custom domain goes live (e.g.
   `https://www.fragrancestudios.com.ng`).
2. `VERCEL_PROJECT_PRODUCTION_URL` — auto-injected by Vercel; resolves to
   the production alias (e.g. `fragrance-studio.vercel.app`).
3. `VERCEL_URL` — per-deployment fallback.
4. `http://localhost:3000` — local dev fallback.

## Stack

- **Framework:** Next.js 16 + React 19 + Turbopack
- **Styling:** Tailwind CSS v4
- **Type system:** TypeScript (strict)
- **Motion:** [`motion`](https://motion.dev) (formerly Framer Motion)
- **Fonts:** Fraunces (display), Instrument Serif (italic accents), JetBrains Mono (UI metadata)
