import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://capitalcompetences.com';
  const locales = ['en', 'fr'];
  const routes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/blog/1',
    '/blog/2',
    '/blog/3',
    '/blog/4',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route === '/services' ? 0.9 : 0.8,
      });
    });
  });

  return sitemap;
}
