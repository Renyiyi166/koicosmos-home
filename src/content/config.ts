import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    order: z.number().default(10)
  })
});

export const collections = { blog, projects };
