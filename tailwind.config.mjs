/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // RELAFLOW brand palette — do not add or change hex values here.
        navy: '#0B1B2E',      // Background / dominant brand colour
        white: '#FFFFFF',     // RELA / contrast text
        teal: '#02EEF5',      // FLOW / wave / links / buttons / accents
        'teal-deep': '#02C8CE', // Secondary accent
        grey: '#A4A9AE',      // Tagline / secondary text
      },
      fontFamily: {
        display: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
};