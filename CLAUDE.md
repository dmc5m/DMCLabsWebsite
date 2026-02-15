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

## Pending: Migrate Terms & Privacy to Shared Legal Repo

The Terms of Service and Privacy Policy content has been extracted to a shared public repo: **https://github.com/DMC-Labs-LLC/legal** (`terms.md` and `privacy.md` with YAML frontmatter including `version` field).

Kiddo Cash (LianaSavings) already fetches and renders from this repo. This website needs to be updated to do the same:

1. **Refactor `app/terms/page.tsx`** — Instead of hardcoded JSX, fetch and render `terms.md` from the legal repo. Keep the site's existing "luxury hotel lobby" styling.
2. **Refactor `app/privacy/page.tsx`** — Same approach with `privacy.md`.
3. **Install a markdown renderer** (e.g., `react-markdown`) to render the markdown content with this site's styling.
4. **Note:** Since this is a static export (`output: "export"`), the markdown must be fetched at build time, not request time. Use `fetch()` in the server component — Next.js will run it during `next build`.
5. **Source URL:** `https://raw.githubusercontent.com/DMC-Labs-LLC/legal/main/terms.md` (and `privacy.md`)
