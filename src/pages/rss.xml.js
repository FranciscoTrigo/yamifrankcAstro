import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('posts');
  const rssItems = blog
  .filter(post => post.data.rss !== false)  // Only include posts with rss: true or undefined
  .map(post => ({
    title: post.data.title,
    pubDate: post.data.datePublished,
    link: `/posts/${post.slug}/`,
  }));

  return rss({
    title: 'YamiFrankc',
    description: 'A site',
    items: rssItems,
  });




//   return rss({
//     title: 'YamiFrankc',
//     description: 'A site',
//     site: context.site,
//     items: blog.map((post) => ({
//       title: post.data.title,
//       pubDate: post.data.pubDate,
//       description: post.data.description,
//       // Compute RSS link from post `slug`
//       // This example assumes all posts are rendered as `/blog/[slug]` routes
//       link: `/posts/${post.slug}/`,
//     })),
//   });
}