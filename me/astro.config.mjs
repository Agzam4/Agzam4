// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://agzam4.github.io',
  base: '/Agzam4',
  // For GitHub Pages, we need trailing slash for proper routing
  trailingSlash: 'always',
  build: {
    // Output as static site for GitHub Pages
    format: 'directory',
  },
});
