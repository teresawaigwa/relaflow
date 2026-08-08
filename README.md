# Relaflow

Astro + Tailwind CSS site for RELAFLOW, built from the supplied brand and content brief.

## Setup

This project could not be `npm install`ed or built in the environment that generated it
(no network access there), so it has not been verified end-to-end. Run it locally:

```
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

If `npm run build` throws any errors, they're almost always a missing/misnamed import or a
typo — paste the error and it can be fixed quickly.

## Things left for you to wire up

Nothing here was invented, but a few things need a real backend/service before they're live:

- **Newsletter form** (`src/components/Newsletter.astro`) — currently just a plain HTML form
  with no destination. Point its `action` at your email provider (Mailchimp, ConvertKit,
  Buttondown, etc.) or wire it to an API route.
- **Contact form** (`src/pages/contact.astro`) — same story. Point it at Formspree, Netlify
  Forms, or your own endpoint.
- **Social links** (`src/data/nav.ts`) — placeholder URLs (linkedin.com, instagram.com, x.com,
  youtube.com). Replace with your actual profile URLs.
- **Legal pages** (`src/pages/legal/`) — placeholders only. No privacy policy or terms text was
  supplied, so none was written.
- **`astro.config.mjs`** — the `site` value is set to `https://relaflow.com`. Update it if the
  live domain differs, since it's used for the sitemap and canonical URLs.
- **Fonts** — Space Grotesk (display) and Inter (body) are loaded from Google Fonts via a
  `<link>` tag in `src/layouts/Layout.astro`. Self-host if you'd rather not depend on Google's CDN.

## Adding more content later

Guides, Templates, Frameworks, Articles and Events are all Astro content collections
(`src/content/`). To add an entry, drop a new Markdown file into the matching folder — the
listing pages pull from these automatically, no page code changes needed.

## Structure

```
src/
  components/   Header, Footer, Newsletter, PageHero, ServiceCard, ResourceList, FlowLine
  content/      articles/ guides/ templates/ frameworks/ events/  (Markdown content collections)
  data/         nav.ts (site navigation), services.ts (the four "What We Do" pillars)
  layouts/      Layout.astro (shared page shell)
  pages/        one file/folder per route, mirroring the site's nav
  styles/       global.css (Tailwind directives + base styles)
public/         favicon.svg, robots.txt
```
