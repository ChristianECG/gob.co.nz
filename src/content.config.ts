import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const erratas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/erratas' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['posicion-revisada', 'promesa-incumplida', 'prediccion-fallida', 'consenso-disuelto']),
    declaration: z.string(),
    origin: z.string(),
    origin_year: z.number(),
    correction: z.string(),
    cause: z.string(),
    status_since: z.number(),
    tags: z.array(z.string()).default([]),
    sources: z.array(z.string()).optional(),
  }),
});

export const collections = { erratas };
