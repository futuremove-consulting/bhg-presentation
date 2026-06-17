# DECISIONS.md — BHG Strategic Presentation

## Architectural Decision Records

### ADR-001: Vanilla Static Site (Post-Migration)

**Status:** Adopted (2026-06-16)

**Context:** The project was initially built with Next.js 15 (App Router) with plans to deploy to Vercel. However, as a purely static, client-only presentation with zero server-side requirements (no API routes, no SSR, no data fetching at request time), Next.js introduced unnecessary build complexity, dependency weight, and deployment overhead.

**Decision:** Migrate from Next.js 15 to vanilla HTML/CSS/JS. All content is data-driven from `data.js`, rendering logic is centralized in `components.js`, styles in `styles.css`, and SPA routing in `app.js`.

**Impact:**
- Zero framework lock-in — deployable to any static host (S3, Netlify, Cloudflare Pages, etc.)
- No build step required — edit files and reload
- Faster iteration — no framework configuration to manage
- Smaller footprint — no framework runtime in the bundle

---

### ADR-002: Font Delivery via Google Fonts

**Status:** Adopted (2026-06-17)

**Context:** The presentation requires a sober, authoritative tone suitable for an industrial conglomerate (BHG). A serif heading font paired with a clean sans-serif body font achieves the desired tone.

**Decision:** Use DM Serif Display (headings, via Google Fonts) for h1-h6 and Inter (body, via Google Fonts) for all other text. Both fonts are loaded via a single `@import` in `styles.css`.

**Impact:**
- Typographic hierarchy: serif headings signal gravitas; sans-serif body ensures readability
- Single CSS import — no JS font loading overhead
- Both fonts render reliably across modern browsers

---

### ADR-003: Data-Driven Architecture

**Status:** Adopted

**Context:** The presentation has 5 tabs with distinct content models. Content must be easy to update without touching UI code, and non-technical stakeholders must be able to suggest copy changes without understanding the rendering pipeline.

**Decision:** Centralize all presentation content in `data.js` using a single `data` object. Each tab renderer receives its data slice by referencing `data[tabId]`.

**Impact:**
- Single source of truth for all copy
- Zero content in component files — pure logic separation
- Content changes require editing only one file

---

### ADR-004: Minimalist Dark Mode Branding

**Status:** Adopted

**Context:** BHG is a large industrial conglomerate. The presentation tone must be authoritative, sober, and high-contrast — not playful or startup-like.

**Decision:** Dark mode with DM Serif Display headings, high contrast (white on near-black), monochromatic palette, data-dense cards, no emojis, no metaphors. Color accents are limited to the FutureMove purple brand marker in navigation.

**Impact:**
- Design system defined entirely in CSS custom properties (`:root`)
- Single theme — no light mode toggle needed
- All styling is hand-written CSS (no framework)

---

### ADR-005: Priority-Based SWOT System

**Status:** Adopted (2026-06-17)

**Context:** The SWOT analysis is the most consulted section of the presentation. Strategic priorities (CRÍTICA, IMPORTANTE, MÉDIA) help decision-makers focus on what matters most.

**Decision:** Each SWOT item is an object with `text`, `priority` (critica/importante/media), and optional `leverage` text. The `renderSWOT` function renders priority badges and leverage lines; it remains backward-compatible with plain string items.

**Impact:**
- Clear visual hierarchy via color-coded priority badges
- Leverage context connects each item to an actionable strategy
- Backward-compatible — existing string-only SWOTs render unchanged
