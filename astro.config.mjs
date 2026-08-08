import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update this to your live domain before deploying (used for the sitemap + canonical URLs).
export default defineConfig({
  site: 'https://relaflow.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
