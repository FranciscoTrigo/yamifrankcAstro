import { defineConfig } from 'astro/config';
import { getLastModified } from './src/utils/lastModified.js';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    markdownOptions: {
      async extendFrontmatter(frontmatter, { file }) {
        const lastModified = await getLastModified(file);
        frontmatter.lastModified = lastModified;
      }
    }
  });