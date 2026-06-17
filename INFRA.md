# INFRA.md — BHG Strategic Presentation

## Services

| Service | Purpose | Status |
|---------|---------|--------|
| GitHub | Source control | Active |
| Static host (TBD) | Static hosting & deployment | Planned |

## Deployment Matrix

| Environment | URL | Branch | Notes |
|-------------|-----|--------|-------|
| Production | TBD | `main` | Auto-deploy from GitHub |

## Environment Variables

| Variable | Value | Source | Required |
|----------|-------|--------|----------|
| `APP_MODE` | `demo` | `.env.local` | Yes |

## Build Configuration

- Stack: Vanilla HTML/CSS/JS (no framework)
- Package manager: None required (no build step)
- Deploy: Upload `index.html`, `*.js`, `*.css` to any static host
