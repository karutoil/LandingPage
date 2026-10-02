# karutoil — Portfolio

A multi-page Astro portfolio site. Warm-dark, editorial × product-UI aesthetic: rounded
elevated cards, a single amber accent, generous rhythm, and one shared design-token layer.

- **Framework:** Astro 5 (static output)
- **Styling:** Plain CSS — `site/src/styles/tokens.css` (tokens) + `global.css` (components)
- **Runtime:** Bun (Node-compatible via `npm`)
- **Fonts:** Self-hosted system stack (no render-blocking web-font requests)

## Pages

- **Home** (`/`) — portrait hero, stats, selected projects, grouped tech stack, open source
- **Projects** (`/projects/`) — filterable index: 3 flagship cards + compact grid
- **Experience** (`/experience/`) — capability timeline, toolbox, field note
- **Contact** (`/contact/`) — full-row channel cards plus an availability panel

## Design system

Edit `site/src/styles/tokens.css` to change colour, type scale, spacing, radius, or depth.
Both themes live there: `:root` is the dark theme and `[data-theme='light']` overrides it.
Shared component classes are in `global.css`; page-specific styles are scoped inside their
own `.astro` files.

## Local development

```bash
cd site
bun install
bun run dev
```

Open `http://localhost:4321/`.

## Build

```bash
cd site
bun run build
```

Output is written to `site/dist/`. Preview the built output with `bun run preview`.

## Verification

`docs/redesign/verification-report.md` records the redesign's verification pass: the
accessibility/contrast, responsive, and link checks that were run, the defects found and
fixed, and the items that could **not** be verified (external link status, real print and
forced-colors output, screen-reader behaviour).

## Deploy to GitHub Pages

A workflow already lives at `.github/workflows/deploy.yml`.

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment** and select **GitHub Actions**.
3. On the next push to `main`, the site builds and deploys.

The site is configured for a custom domain at `https://karutoil.site`. The `CNAME` file is in
`site/public/CNAME` and GitHub Pages uses it automatically on deploy. If you ever use the
default project page URL, set `base: '/LandingPage'` in `site/astro.config.mjs`.
