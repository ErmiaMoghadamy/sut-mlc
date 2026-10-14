import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	kind: z.enum(['short', 'article']),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

const blogFa = defineCollection({
	loader: glob({ base: './src/content/blog-fa', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

export const collections = { blog, blogFa };
