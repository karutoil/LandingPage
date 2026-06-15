# karutoil — portfolio

Personal portfolio and resume built with React, Vite, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will build and deploy the site on every push to `main`.

### Base path

The Vite base path is set to `/LandingPage/` when `GH_PAGES=true`. If your repository name is different, update the `base` value in `vite.config.ts`.

```ts
base: '/YOUR-REPO-NAME/'
```

## Site notes

- No cookies
- No trackers
- No analytics
