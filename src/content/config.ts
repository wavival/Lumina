import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    ctas: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),

    summary: z.object({
      cover: z.string(),
      note: z.string().optional(),
    }),

    briefTitle: z.string(),
    briefText: z.string(),
    stack: z.array(z.string()).default([]),
    valueBullets: z.array(z.string()).default([]),
    gallery: z.array(z.string()).default([]),

    href: z.string().url().optional(),

    links: z.object({
      site: z.string().url().optional(),
      github: z.string().url().optional(),
      behance: z.string().url().optional(),
    }).partial().optional(),

    published: z.boolean().default(true),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };