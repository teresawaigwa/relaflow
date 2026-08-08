import { defineCollection, z } from 'astro:content';

// Articles carry a short teaser (used on listing pages) and a body (the article itself).
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

// Guides, Templates and Frameworks are lightweight — a title is all the brand
// has supplied so far. Add `description`/`href` per entry later as copy exists;
// nothing in the templates below needs to change.
const resourceItem = z.object({
  title: z.string(),
  description: z.string().optional(),
  href: z.string().optional(),
  draft: z.boolean().default(false),
});

const guides = defineCollection({ type: 'content', schema: resourceItem });
const templates = defineCollection({ type: 'content', schema: resourceItem });
const frameworks = defineCollection({ type: 'content', schema: resourceItem });

// Empty until there's a real event or conversation to list — the Insights page
// hides this section entirely while the collection is empty.
const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    href: z.string().optional(),
  }),
});

export const collections = { articles, guides, templates, frameworks, events };
