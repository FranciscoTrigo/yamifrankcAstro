import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';
import mdx from '@astrojs/mdx';


import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'


// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode({
    plugins: [pluginLineNumbers()],
  }), mdx()],

    markdown: {
      syntaxHighlight: 'prism',
      remarkPlugins: [remarkModifiedTime],
    },
  });