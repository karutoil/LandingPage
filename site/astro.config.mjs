import { defineConfig } from 'astro/config';

// GitHub Pages project site: served under /LandingPage/
// For a custom domain, remove `base`.
export default defineConfig({
  site: 'https://karutoil.github.io',
  base: '/LandingPage',
  output: 'static',
  outDir: './dist',
  build: {
    format: 'directory'
  }
});
