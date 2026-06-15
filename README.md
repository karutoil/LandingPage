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

### Custom domain

The `CNAME` file points to `karutoil.site`, and `vite.config.ts` uses base path `/`. If you do not use a custom domain, update `vite.config.ts` to your repository name:

```ts
base: '/YOUR-REPO-NAME/'
```

## Site notes

- No cookies
- No trackers
- No analytics
