import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';
import mdx from '@astrojs/mdx';
import org from 'astro-org';
import orgConfig from './src/utils/org-config.js';


import expressiveCode, { ExpressiveCodeTheme } from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import fs from 'node:fs';

const jsoncString = fs.readFileSync(new URL(`src/styles/srcery-code.jsonc`, import.meta.url), 'utf-8')
const srceryCode = ExpressiveCodeTheme.fromJSONString(jsoncString)




// https://astro.build/config
export default defineConfig({
    site: 'https://yamifrankc.com',

  integrations: [
    org(orgConfig),
    expressiveCode({
    themes: [srceryCode],
    plugins: [pluginLineNumbers()],
  }), mdx()],

    markdown: {
      syntaxHighlight: 'prism',
      remarkPlugins: [remarkModifiedTime],
    },
  });