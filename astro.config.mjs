import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
  // react(),
  icon({
    iconDir: './src/assets/icons'
  }), sitemap(), mdx(), playformCompress()],
  output: 'static',
  site: 'http://guttergladiators.com.au'
});