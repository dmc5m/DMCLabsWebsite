# DMC Labs Website Brainstorm

**Date:** 2026-02-15
**Status:** Complete
**Author:** David Carpenter + Claude

## What We're Building

A professional company website for **DMC Labs, LLC** (Florida LLC) hosted on GitHub Pages at **dmclabs.one**. The site serves as a trust signal and legal presence — not a marketing site or app portal.

### Core Purpose

- Establish DMC Labs as a legitimate company for business authentication (bank accounts, Teller API, potential Apple Developer account)
- Serve versioned Terms of Service and Privacy Policy that apps (Kiddo Cash, etc.) reference when logging user consent
- Look professional and competent — "Dave knows what he's doing" energy — without feeling corporate or fake

### Pages

1. **Home / Landing** — Company name, tagline, minimal. Trust-forward design.
2. **Terms of Service** (`/terms`) — Versioned legal page. Apps reference specific versions.
3. **Privacy Policy** (`/privacy`) — Versioned legal page. Critical for financial data handling.
4. **Contact** (`/contact`) — Contact email (contact@dmclabs.one, to be set up via Purelymail or similar).

### What It Is NOT

- Not a marketing site — no app links, no CTAs, no traffic driving
- Not a portfolio — no app showcase (for now)
- Not revenue-generating — zero cost hosting via GitHub Pages

## Why This Approach

### Tech Stack: Next.js + Static Export + GitHub Pages

- **Next.js** — David already knows it from LianaSavings/Kiddo Cash. Familiar patterns, Tailwind CSS, component-based.
- **Static export** — `next export` to generate static HTML. Zero server costs on GitHub Pages.
- **Tailwind CSS** — Consistent with existing projects.
- **GitHub Pages** — Free hosting. The existing `tesla-public-key` repo already has `www.dmclabs.one` CNAME configured. We'll replace that repo's contents or point the domain to a new repo.

### Terms Versioning Strategy

- Legal pages are static HTML generated from markdown (or JSX).
- Each version is a git commit — full history is preserved.
- Apps store `terms_version` (date string like `2026-02-15`) alongside `terms_accepted_at` in their databases.
- URL pattern: `/terms` always serves latest. Apps can reference a specific version date in their consent records.

### Design Direction: "Luxury Hotel Lobby"

**Reference:** Squarespace website-design page (Ceramix template showcase) — dark, earthy, warm, controlled.

**Mood:** Solid calmness. Like a high-end hotel lobby — dark leather, quiet confidence, everything under control. A friend visiting this site before trusting Kiddo Cash with their finances should feel "this is legit, Dave knows what he's doing."

**Color palette:**
- **Primary background:** Deep warm charcoal (not cold black — think dark walnut, espresso)
- **Secondary surfaces:** Warm taupe/mocha for cards and content panels
- **Text:** Cream/warm white — not bright white, slightly warm
- **Accents:** None needed. Richness comes from tone and texture, not color pops.

**Typography:**
- **Headings:** Elegant serif font (think Four Seasons room key, not Times New Roman)
- **Body/nav:** Clean sans-serif, generous letter-spacing
- **Hierarchy through weight and size, not color**

**Motion & texture:**
- Slow, confident animations — fade-ins that feel unhurried
- Subtle texture (noise, grain, or linen-like overlays for depth)
- No gimmicks — every effect earns its place

**What it is NOT:**
- Not techy/startup (no neon, no gradients, no glassmorphism)
- Not dark-mode-developer (no syntax-highlight vibes)
- Not a template — should feel bespoke and intentional

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Domain | dmclabs.one (keep existing) | Already owned, zero additional cost |
| Hosting | GitHub Pages | Free, already configured for the domain |
| Framework | Next.js static export | Familiar from LianaSavings, supports Tailwind |
| Terms location | Served from this site | Versioned via git, stable URLs, no third-party dependency |
| Design vibe | "Luxury hotel lobby" — dark, earthy, warm, calm | Deep charcoal + warm taupe/mocha, cream text, serif headings, no bright colors |
| Content scope | Minimal — name, legal pages, contact | Not a marketing site, just a professional presence |
| Contact email | contact@dmclabs.one | To be set up via Purelymail or similar service |

## Cross-Project Impact: LianaSavings (Kiddo Cash)

LianaSavings currently has **zero** terms/privacy handling. Future work needed there:

- Add `terms_accepted_at` (timestamptz) and `terms_version` (text) columns to `parents` table
- Gate `/parent/*` access behind terms acceptance in middleware
- Show acceptance modal on first login (or when terms version changes)
- Link to `dmclabs.one/terms` and `dmclabs.one/privacy` from the acceptance UI
- Log consent in Supabase with the version string

This will be tracked separately in the LianaSavings project.

## Open Questions

_None — all questions resolved during brainstorming._

## Migration Notes

- The `tesla-public-key` repo currently serves `www.dmclabs.one` via GitHub Pages with a CNAME file
- That repo's contents will be replaced or the domain will be pointed to a new repo
- David confirmed the old repo contents can be dropped entirely
