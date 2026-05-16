import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dwarkaexpresswayncr.com';

/**
 * Robots.txt configuration for search engines and AI bots
 * 
 * Explicitly allows:
 * - PerplexityBot (Perplexity AI)
 * - GPTBot (OpenAI ChatGPT)
 * - OAI-SearchBot (OpenAI Search)
 * - Googlebot (Google Search)
 * - Bingbot (Bing Search)
 * - Google-Extended (Google AI features)
 * - Claude-Web (Anthropic Claude)
 * - CCBot (Common Crawl)
 */
export default function robots(): MetadataRoute.Robots {
  // Paths to disallow for all bots - admin, API, and thank-you pages.
  // /blogs/ is intentionally excluded here — it is served by an external
  // WordPress install and must remain crawlable by all bots.
  const disallowedPaths = ['/admin/', '/api/', '/thank-you'];

  return {
    rules: [
      // === SEARCH ENGINE BOTS ===
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'msnbot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: disallowedPaths,
      },
      
      // === AI BOTS (Explicitly Allowed) ===
      {
        // Perplexity AI Bot
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // OpenAI GPT Bot (ChatGPT)
        userAgent: 'GPTBot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // OpenAI Search Bot
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // ChatGPT-User for browsing
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // Anthropic Claude Web
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // Anthropic AI general
        userAgent: 'Anthropic-AI',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // Google AI/Extended features (Bard, AI Overviews)
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // Common Crawl Bot (used by many AI training datasets)
        userAgent: 'CCBot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // Meta AI Bot
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        // Cohere AI
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: disallowedPaths,
      },
      
      // === DEFAULT RULE ===
      {
        // Default rule for all other bots
        userAgent: '*',
        allow: '/',
        disallow: disallowedPaths,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
