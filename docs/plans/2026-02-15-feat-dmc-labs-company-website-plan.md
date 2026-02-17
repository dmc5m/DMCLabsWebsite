---
title: "feat: DMC Labs Company Website"
type: feat
date: 2026-02-15
brainstorm: docs/brainstorms/2026-02-15-dmc-labs-website-brainstorm.md
---

# feat: DMC Labs Company Website 

## Overview

Build a professional company website for **DMC Labs, LLC** (Florida LLC) at **dmclabs.one**. The site is a trust signal and legal presence — not a marketing site. It serves versioned Terms of Service and Privacy Policy that apps (Kiddo Cash, etc.) reference when logging user consent.

**Design:** "Luxury hotel lobby" — deep warm charcoal, warm taupe/mocha surfaces, cream text, elegant serif headings, unhurried animations. Everything says "this is under control."

## Tech Stack

- **Framework:** Next.js 16 (App Router) with `output: "export"` for static HTML
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme`)
- **Typography:** Playfair Display (serif headings) + Inter (sans-serif body) via `next/font/google`
- **Hosting:** GitHub Pages (free) with GitHub Actions CI/CD
- **Domain:** dmclabs.one (existing, currently on `tesla-public-key` repo)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing — company name, brief tagline, calm presence |
| `/terms` | Terms of Service — versioned, "Last updated" date displayed |
| `/privacy` | Privacy Policy — versioned, "Last updated" date displayed |
| `/contact` | Contact info — email (contact@dmclabs.one), simple mailto link |
| `/404` | Custom 404 — matches design, links back to home |

## Implementation Phases

### Phase 1: Project Scaffolding

Set up the Next.js project with static export configuration.

**Tasks:**

- [ ] Initialize Next.js 16 project with TypeScript (`app/` directory)
- [ ] Configure `next.config.ts` with `output: "export"` and `images: { unoptimized: true }`
- [ ] Set up Tailwind CSS v4 with `@tailwindcss/postcss`
- [ ] Create `lib/utils.ts` with `cn()` helper (matches LianaSavings pattern)
- [ ] Configure `tsconfig.json` with strict mode and `@/*` path alias
- [ ] Add `public/.nojekyll` (prevents GitHub Pages from ignoring `_next/`)
- [ ] Add `public/CNAME` with `www.dmclabs.one`

**Key files:**

```
next.config.ts
tsconfig.json
postcss.config.mjs
app/globals.css
app/layout.tsx
lib/utils.ts
public/.nojekyll
public/CNAME
```

**`next.config.ts`:**
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

### Phase 2: Design System & Layout

Establish the "luxury hotel lobby" color palette, typography, and shared layout.

**Tasks:**

- [ ] Set up fonts in `app/layout.tsx` — Playfair Display (serif) + Inter (sans-serif) via `next/font/google` with CSS variables
- [ ] Define color palette in `app/globals.css` using Tailwind v4 `@theme` directive
- [ ] Build shared layout: header nav + footer in `app/layout.tsx`
- [ ] Implement mobile navigation (simple slide-out or overlay — 4 links don't need a hamburger, but graceful collapse)
- [ ] Add `prefers-reduced-motion` handling for all animations
- [ ] Verify WCAG AA contrast ratios (cream on charcoal must hit 4.5:1 minimum)

**Color palette (Tailwind v4 `@theme` in `globals.css`):**

```css
@import "tailwindcss";

@theme {
  /* Typography */
  --font-sans: var(--font-inter);
  --font-serif: var(--font-playfair);

  /* Colors — luxury hotel lobby */
  --color-charcoal: oklch(0.25 0.01 60);      /* Deep warm charcoal — primary bg */
  --color-walnut: oklch(0.30 0.02 55);         /* Slightly lighter — secondary bg */
  --color-taupe: oklch(0.45 0.03 60);          /* Warm taupe — cards, surfaces */
  --color-cream: oklch(0.92 0.02 85);          /* Cream — primary text */
  --color-cream-muted: oklch(0.70 0.02 70);    /* Muted cream — secondary text */
  --color-gold: oklch(0.65 0.10 85);           /* Subtle gold — sparse accents */
}
```

> Note: Exact oklch values will be tuned during implementation to ensure contrast compliance and visual warmth. These are starting points.

**`app/layout.tsx` font setup:**

```tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="bg-charcoal text-cream font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

**Layout components:**

- `components/header.tsx` — DMC Labs wordmark (text, no logo needed), nav links (Terms, Privacy, Contact). Refined, minimal. Serif for the company name, sans-serif for nav links with generous letter-spacing.
- `components/footer.tsx` — &copy; 2026 DMC Labs, LLC &middot; Florida &middot; links to Terms, Privacy, Contact. Small, quiet, confident.

### Phase 3: Pages

Build the four content pages + custom 404.

**Tasks:**

- [ ] **Landing page** (`app/page.tsx`) — "DMC Labs" in large serif type. A single short tagline underneath (e.g., "Software, thoughtfully crafted."). Generous whitespace. Maybe a subtle warm divider line. That's it. The confidence is in the emptiness.
- [ ] **Terms of Service** (`app/terms/page.tsx`) — "Last updated: February 15, 2026" at top. Clean, readable legal text. Warm taupe card on charcoal background (like the Ceramix panel). Print-friendly styles.
- [ ] **Privacy Policy** (`app/privacy/page.tsx`) — Same structure as Terms. Covers data handling for Kiddo Cash (financial data, Google OAuth, Supabase storage).
- [ ] **Contact** (`app/contact/page.tsx`) — Simple page with contact@dmclabs.one as a mailto link. No form needed — a static mailto link is more trustworthy for this use case and avoids third-party form dependencies.
- [ ] **404 page** (`app/not-found.tsx`) — Matches design. Brief message, link home.

**Legal page content:**

Terms and Privacy content will need David's input for specifics, but initial drafts should cover:

*Terms of Service:*
- Service description (software applications provided by DMC Labs, LLC)
- User responsibilities
- Limitation of liability
- Termination
- Governing law (Florida)

*Privacy Policy:*
- What data is collected (name, email via Google OAuth, financial transaction data)
- How data is stored (Supabase, encrypted at rest)
- Third-party services (Google, Supabase, Teller in future)
- Data retention
- User rights (access, deletion)
- Contact for privacy inquiries
- Children's privacy (COPPA considerations — Kiddo Cash involves minors' data)

> These are drafts. David should review with a lawyer before going live, especially given financial data and minors' data.

### Phase 4: Animation & Polish

Add the "unhurried" motion that makes it feel alive without being distracting.

**Tasks:**

- [ ] Fade-in on page load for main content (300-400ms, ease-out)
- [ ] Subtle fade-in on scroll for legal page sections (using Intersection Observer or CSS `@starting-style`)
- [ ] Hover states on nav links — gentle opacity shift or underline reveal
- [ ] `prefers-reduced-motion: reduce` — disable all motion, show content immediately
- [ ] Smooth page transitions if feasible with static export (CSS-only approach)
- [ ] Subtle background texture/noise overlay on charcoal (CSS, not an image — `background-image: url("data:...")` with a tiny noise pattern)

### Phase 5: SEO, Meta & Accessibility

**Tasks:**

- [ ] Page-level metadata via Next.js `metadata` export on each page:
  - Landing: "DMC Labs, LLC — Software, thoughtfully crafted."
  - Terms: "Terms of Service | DMC Labs, LLC"
  - Privacy: "Privacy Policy | DMC Labs, LLC"
  - Contact: "Contact | DMC Labs, LLC"
- [ ] Open Graph and Twitter Card meta tags (basic — title, description, no image needed initially)
- [ ] `robots.txt` in `public/` — allow all pages
- [ ] `sitemap.xml` — generated at build time or static file in `public/`
- [ ] Semantic HTML: proper heading hierarchy (`h1` per page, `h2`/`h3` for sections)
- [ ] Skip-to-content link for keyboard users
- [ ] Focus styles that match the design (warm gold outline instead of default blue)
- [ ] ARIA landmarks on header, main, footer
- [ ] Favicon — simple text-based favicon or placeholder until brand assets exist

### Phase 6: GitHub Actions & Deployment

**Tasks:**

- [ ] Create `.github/workflows/deploy.yml` — build on push to `main`, deploy to GitHub Pages
- [ ] Configure GitHub repo Settings → Pages → Source: "GitHub Actions"
- [ ] Test build locally with `npm run build` before first deploy
- [ ] Verify `out/` directory contains `.nojekyll`, `CNAME`, and all pages

**`.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "lts/*"
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Phase 7: Domain Migration

Migrate `dmclabs.one` from `tesla-public-key` repo to this repo.

**Tasks:**

- [ ] Ensure new site builds and deploys successfully to GitHub Pages (verify at `<username>.github.io/DMCLabsWebsite` or similar)
- [ ] In new repo: confirm `public/CNAME` contains `www.dmclabs.one`
- [ ] In GitHub Settings for new repo: add custom domain `www.dmclabs.one`
- [ ] In old `tesla-public-key` repo: remove CNAME file and disable GitHub Pages
- [ ] Verify HTTPS certificate auto-provisions (GitHub handles this, but may take up to 24 hours)
- [ ] Test all pages at `dmclabs.one` after migration
- [ ] DNS note: since the domain already points to GitHub Pages, no DNS changes needed — just swapping which repo serves it

**Rollback plan:** If migration fails, re-enable GitHub Pages on `tesla-public-key` with the CNAME file restored. No DNS changes needed for rollback.

## Project Structure

```
DMCLabsWebsite/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── app/
│   ├── layout.tsx              # Root layout — fonts, header, footer
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Tailwind v4 theme, color palette
│   ├── not-found.tsx           # Custom 404
│   ├── terms/
│   │   └── page.tsx            # Terms of Service
│   ├── privacy/
│   │   └── page.tsx            # Privacy Policy
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── header.tsx              # Site header with nav
│   └── footer.tsx              # Site footer
├── lib/
│   └── utils.ts                # cn() helper
├── public/
│   ├── .nojekyll
│   ├── CNAME
│   ├── robots.txt
│   └── sitemap.xml
├── docs/
│   ├── brainstorms/
│   └── plans/
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── CLAUDE.md
```

## Terms Versioning Strategy

- Legal pages display "Last updated: [date]" at the top
- Each update is a git commit — full history preserved
- Apps (Kiddo Cash) store `terms_version` (date string like `"2026-02-15"`) alongside `terms_accepted_at` in their database
- `/terms` and `/privacy` always serve the latest version
- No need for versioned URLs — the app logs which version the user saw at acceptance time, and git history provides the audit trail
- If a regulator or auditor needs a historical version, it's retrievable from git

## Acceptance Criteria

### Functional
- [ ] Landing page loads at dmclabs.one with company name and tagline
- [ ] Terms of Service accessible at dmclabs.one/terms with "Last updated" date
- [ ] Privacy Policy accessible at dmclabs.one/privacy with "Last updated" date
- [ ] Contact page accessible at dmclabs.one/contact with mailto link
- [ ] Custom 404 page displays for invalid routes
- [ ] All navigation links work between pages
- [ ] Site builds and deploys automatically on push to main

### Design
- [ ] Deep warm charcoal background, cream text, taupe card surfaces
- [ ] Serif headings (Playfair Display), sans-serif body (Inter)
- [ ] Subtle fade-in animations on load
- [ ] Mobile-responsive layout (works on iPhone in-app browser — primary use case)
- [ ] Print styles on legal pages (black text on white, no nav)

### Accessibility
- [ ] WCAG AA color contrast (4.5:1 minimum for body text)
- [ ] Keyboard navigable with visible focus states
- [ ] `prefers-reduced-motion` respected
- [ ] Semantic HTML with proper heading hierarchy
- [ ] Screen reader compatible (ARIA landmarks, skip link)

### Performance
- [ ] Static HTML — no server-side rendering or API calls
- [ ] Fonts self-hosted via next/font (no runtime Google Fonts requests)
- [ ] Sub-1s load time on decent connection (it's 4 static pages)

## Dependencies & Risks

| Risk | Mitigation |
|------|------------|
| Domain migration causes downtime | Rollback plan: re-enable old repo's GitHub Pages |
| HTTPS cert delay after migration | Keep old repo live until cert provisions (~24h) |
| Cream-on-charcoal fails contrast check | Tune colors during implementation; charcoal can go darker |
| Legal content accuracy | Draft versions for structure; David reviews with lawyer before launch |
| COPPA compliance (minors' data) | Privacy policy must address this; consult lawyer |

## Out of Scope (for now)

- Analytics (defer to post-launch)
- Contact form with backend (mailto is sufficient)
- App showcase / portfolio section
- Logo / brand assets (text wordmark is fine)
- PR preview deploys
- Error tracking (Sentry, etc.)
- Terms update notification API for apps
- Historical version browsing UI

## References

- **Brainstorm:** `docs/brainstorms/2026-02-15-dmc-labs-website-brainstorm.md`
- **LianaSavings patterns:** `/Users/davidcarpenter/Projects/LianaSavings/` (Next.js 16, Tailwind v4, App Router)
- **Cross-project note:** `/Users/davidcarpenter/Projects/LianaSavings/CLAUDE.md` (terms integration TODO)
- **Old GitHub Pages repo:** `tesla-public-key` (has CNAME for www.dmclabs.one)
- **Next.js static export docs:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **GitHub Pages + Next.js reference:** https://github.com/gregrickaby/nextjs-github-pages
