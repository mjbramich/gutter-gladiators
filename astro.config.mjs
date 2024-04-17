import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		// react(),
		icon({
			iconDir: './src/assets/icons'
		}),
		sitemap(),
		mdx()
	],
	site: 'http://localhost:4321'
});
