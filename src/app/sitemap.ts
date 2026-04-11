import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hirelai.com';
  
  const staticRoutes = [
    '',
    '/features',
    '/pricing',
    '/about',
    '/blog',
    '/contact',
    '/login',
    '/signup',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogSlugs = getPostSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
