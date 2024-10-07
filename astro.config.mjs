import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  githubRepoUrl: 'https://github.com/FranciscoTrigo/yamifrankcAstro/blob/main/',
    markdown: {
      remarkPlugins: [remarkModifiedTime],
    },
  });

  