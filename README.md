# karutoil — Portfolio

A multi-page Astro portfolio site. Dark, technical, editorial-meets-terminal aesthetic.

- **Framework:** Astro 5 (static output)
- **Styling:** Plain CSS with design tokens
- **Runtime:** Bun (Node-compatible via `npm`)

## Pages

- **Home** — hero, stats, about, featured projects, journal snippet
- **Projects** — full project list (PI Web, pi-lsp, pi-enhanced-tools, pi-powershell-native, Catalyst)
- **Experience** — infrastructure operations, game ops, consulting
- **Contact** — Discord, email, GitHub

## Local development

```bash
cd site
bun install
bun run dev
```

Open `http://localhost:4321/LandingPage/`.

## Build

```bash
cd site
bun run build
```

Output is written to `site/dist/`.

## Deploy to GitHub Pages

A workflow already lives at `.github/workflows/deploy.yml`.

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment** and select **GitHub Actions**.
3. On the next push to `main`, the site builds and deploys.

The site is configured for a project page at `https://karutoil.github.io/LandingPage/`. If you add a custom domain later, remove `base: '/LandingPage'` from `site/astro.config.mjs`.
