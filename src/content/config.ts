import { defineCollection, z } from 'astro:content';

// other pages
const otherPagesCollection = defineCollection({
	type: 'content',
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			draft: z.boolean().optional()
		})
});

// eslint-disable-next-line import/prefer-default-export
export const collections = {
	otherPages: otherPagesCollection
};
