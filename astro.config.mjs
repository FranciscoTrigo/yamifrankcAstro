import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    markdown: {
      remarkPlugins: [remarkModifiedTime],
    },
  });