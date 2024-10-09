import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';
import mdx from '@astrojs/mdx';


import expressiveCode from 'astro-expressive-code';


// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), mdx()],

    markdown: {
      syntaxHighlight: 'prism',
      remarkPlugins: [remarkModifiedTime],
    },
  });