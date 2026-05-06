import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dwarkaexpresswayncr.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all search engine bots
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        // Allow AI bots for better visibility in AI search
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
      {
        // Default rule for all other bots
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/thank-you'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
