# INFRA.md — BHG Strategic Presentation

## Services

| Service | Purpose | Status |
|---------|---------|--------|
| Vercel | Static hosting & deployment | Planned |
| GitHub | Source control | Active |

## Deployment Matrix

| Environment | URL | Branch | Notes |
|-------------|-----|--------|-------|
| Production | TBD | `main` | Vercel auto-deploy |

## Environment Variables

| Variable | Value | Source | Required |
|----------|-------|--------|----------|
| `APP_MODE` | `demo` | `.env.local` | Yes |

## Build Configuration

- Framework: Next.js 15 (App Router)
- Output: Static export (`output: 'export'`)
- Package manager: pnpm
- Node: managed via nvm
