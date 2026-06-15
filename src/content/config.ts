import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.date(),
    lastmod: z.date().optional(),
    tags: z.array(z.string()).optional(),
    keywords: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { blog };
