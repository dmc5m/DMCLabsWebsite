# DMC Labs Website

## Project Overview
Company website for DMC Labs, LLC (Florida LLC) at dmclabs.one. Static site hosted on GitHub Pages.

## Tech Stack
- **Framework:** Next.js 16 (App Router) with `output: "export"`
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- **Typography:** Playfair Display (serif headings) + Inter (sans-serif body) via `next/font/google`
- **Hosting:** GitHub Pages with GitHub Actions CI/CD
- **Node:** v22 (see .nvmrc)

## Commands
- `npm run dev` — local dev server
- `npm run build` — static export to `out/`

## Conventions
- TypeScript strict mode
- `@/*` import alias
- Server components by default, `'use client'` only when needed
- `cn()` helper in `lib/utils.ts` for conditional classes
- Colors defined as oklch values in `@theme` in globals.css

## Design Direction
"Luxury hotel lobby" — deep warm charcoal, warm taupe/mocha, cream text, elegant serif headings, subtle animations. Trust-first, calm, professional.

## Domain
dmclabs.one — DNS managed via Squarespace, pointed to GitHub Pages.
