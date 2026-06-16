# DECISIONS.md — BHG Strategic Presentation

## Architectural Decision Records

### ADR-001: Zero Local Paths Policy

**Status:** Adopted (2026-06-16)

**Context:** The project initially consumed `@futuremove-consulting/*` packages via local `file:` paths pointing to `../../futuremove/archive/03-legacy-design-system/packages/*`. This caused Vercel build failures because the archive directory was not available in the deployment environment.

**Decision:** All `@futuremove/*` dependencies must be consumed from the npm registry (`^0.2.0`). No local `file:` paths or symlinks to the FMDS monorepo are permitted.

**Impact:**
- Portability: Deploys to any environment without FS assumptions.
- Versioning: Package versions must be published before consumption.
- Build: Requires `pnpm patch` workflow for any local fixes needed in dependencies.

**Enforcement:** CI build will fail on presence of `file:` protocol in `package.json` dependencies.

---

### ADR-002: Static Export Deployment

**Status:** Adopted

**Context:** The presentation is a static, client-only webapp with no server-side rendering requirements. It does not consume any Next.js server features (API routes, `getServerSideProps`, `getStaticProps` revalidation).

**Decision:** Use `next.config.js` with `output: 'export'` (static SPA) for maximum performance and portability.

**Impact:**
- Deployable to Vercel, Netlify, S3, or any static host.
- No server runtime costs.
- All content is data-driven from `presentation.ts`.

---

### ADR-003: Data-Driven Architecture

**Status:** Adopted

**Context:** The presentation has 7 tabs with distinct content models. Content must be easy to update without touching UI code.

**Decision:** Centralize all presentation content in `data/presentation.ts` using a single typed interface (`PresentationData`). Each tab component receives its data slice via props.

**Impact:**
- Single source of truth for content.
- Type-safe: editors get type-checked errors for missing fields.
- Zero content in component files.

---

### ADR-004: Minimalist Dark Mode Branding

**Status:** Adopted

**Context:** BHG is a large industrial conglomerate. The presentation tone must be authoritative, sober, and high-contrast — not playful or startup-like.

**Decision:** Dark mode with DM Serif Display headings, high contrast (white on near-black), monochromatic palette, data-dense cards, no emojis, no metaphors.

**Impact:**
- Design system: All styling is inline Tailwind with the `@futuremove/config/tailwind` preset.
- Consistency: Single theme, no light mode toggle needed.
