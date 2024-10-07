import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://yamifrankc.com',
  githubRepoUrl: 'https://github.com/FranciscoTrigo/yamifrankcAstro/blob/main/src/pages/', // Adjust the path as needed
    integrations: [],
    markdown: {
      remarkPlugins: [remarkModifiedTime],
    },
  });

  