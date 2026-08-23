import { defineCollection, z } from 'astro:content';

const expertiseAreas = [
  'client-relationships',
  'partnerships-sponsorships',
  'events-communities',
  'relationship-operations',
  'research-data',
] as const;

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(expertiseAreas),
    draft: z.boolean().default(false),
  }),
});

const resourceItem = z.object({
  title: z.string(),
  description: z.string().optional(),
  href: z.string().optional(),
  draft: z.boolean().default(false),
});

const guides = defineCollection({
  type: 'content',
  schema: resourceItem,
});

const templates = defineCollection({
  type: 'content',
  schema: resourceItem,
});

const frameworks = defineCollection({
  type: 'content',
  schema: resourceItem,
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string().optional(),
    href: z.string().optional(),
  }),
});

export const collections = {
  insights,
  guides,
  templates,
  frameworks,
  events,
};