import { defineConfig } from 'astro/config';

// Served at the root of karutoil.site via GitHub Pages custom domain.
// If you ever drop the custom domain and use the default project page URL
// (https://karutoil.github.io/LandingPage/), set base back to '/LandingPage'.
export default defineConfig({
  site: 'https://karutoil.site',
  base: '/',
  output: 'static',
  outDir: './dist',
  build: {
    format: 'directory'
  }
});
