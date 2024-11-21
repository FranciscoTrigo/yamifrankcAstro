import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// import org from 'astro-org';


import expressiveCode, { ExpressiveCodeTheme } from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import fs from 'node:fs';


import { h } from 'hastscript'

import shiki, { type RehypeShikiOptions } from '@shikijs/rehype'

import org from './src/utils/astro-org'

import rehypeExpressiveCode from 'rehype-expressive-code';

import { replaceOrgLinks } from './src/utils/plugins'
import rehypeShiftHeading, {
  type Options as RehypeShiftOptions,
} from 'rehype-shift-heading'




const jsoncString = fs.readFileSync(new URL(`src/styles/srcery-code.jsonc`, import.meta.url), 'utf-8')
const srceryCode = ExpressiveCodeTheme.fromJSONString(jsoncString)




// https://astro.build/config
export default defineConfig({
    site: 'https://yamifrankc.com',
  integrations: [
    org({
      uniorgPlugins: [replaceOrgLinks],
      rehypePlugins: [
        [rehypeShiftHeading, { shift: 1 } as RehypeShiftOptions],
        [
          rehypeExpressiveCode,
          {
            theme: srceryCode,
            // You can add additional settings for Expressive Code here
            plugins: [pluginLineNumbers()],
          },
        ],
      ],
      uniorgRehypeOptions: {
        handlers: {
          'example-block': (org) => {
            return h('pre.example', [{ type: 'text', value: org.value }]
              
            )
          },
          'src-block': function (org) {
            const snippet = h(
              'pre.src-block',
              {},
              h(
                'code',
                {
                  className: org.language
                    ? `language-${org.language}`
                    : undefined,
                },
                org.value
              )
            )

            const captions: any[] = Array.isArray(org.affiliated.CAPTION)
              ? org.affiliated.CAPTION.flat()
              : []

            if (captions.length <= 0) {
              return snippet
            } else {
              const figcaption = h('figcaption', captions[0]!.value)
              return h('figure', [snippet, figcaption])
            }
          },
        },
}
}),
    sitemap(),
    expressiveCode({
    themes: [srceryCode],
    plugins: [pluginLineNumbers()],
  }), 
  mdx(), 
  sitemap()],

markdown: {
  syntaxHighlight: 'prism',
  remarkPlugins: [remarkModifiedTime],
},



})