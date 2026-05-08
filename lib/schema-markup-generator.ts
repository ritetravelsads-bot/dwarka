/**
 * Schema Markup Generator for Blog Posts
 * Generates structured data (JSON-LD) for SEO
 */

interface BlogPostData {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  banner_image?: string;
  cover_image?: string;
  author?: string;
  publication_date?: string;
  createdAt?: string;
  updatedAt?: string;
  category?: string;
  categories?: string[];
  tags?: string[];
  readTime?: string;
  read_time?: string;
  meta_description?: string;
  faqs?: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

interface BlogSchemaOptions {
  siteUrl?: string;
  siteName?: string;
  organizationName?: string;
  logoUrl?: string;
}

const defaultOptions: BlogSchemaOptions = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://dwarkaexpressway.in',
  siteName: 'Dwarka Expressway',
  organizationName: 'Dwarka Expressway',
  logoUrl: '/assets/img/logo.png'
};

/**
 * Generates Article schema for blog posts
 */
export function generateBlogSchema(post: BlogPostData, options: BlogSchemaOptions = {}) {
  const opts = { ...defaultOptions, ...options };
  const imageUrl = post.banner_image || post.cover_image || `${opts.siteUrl}/assets/img/og-image.jpg`;
  const publishDate = post.publication_date || post.createdAt || new Date().toISOString();
  const modifiedDate = post.updatedAt || publishDate;
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.meta_description || post.title,
    "image": imageUrl.startsWith('http') ? imageUrl : `${opts.siteUrl}${imageUrl}`,
    "author": {
      "@type": "Person",
      "name": post.author || "Dwarka Expressway Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": opts.organizationName,
      "logo": {
        "@type": "ImageObject",
        "url": `${opts.siteUrl}${opts.logoUrl}`
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${opts.siteUrl}/blogs/${post.slug}`
    },
    ...(post.categories && post.categories.length > 0 && {
      "articleSection": post.categories[0]
    }),
    ...(post.tags && post.tags.length > 0 && {
      "keywords": post.tags.join(", ")
    })
  };

  return articleSchema;
}

/**
 * Generates BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  options: BlogSchemaOptions = {}
) {
  const opts = { ...defaultOptions, ...options };
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${opts.siteUrl}${item.url}`
    }))
  };
}

/**
 * Generates FAQPage schema
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
  options: BlogSchemaOptions = {}
) {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generates Organization schema
 */
export function generateOrganizationSchema(options: BlogSchemaOptions = {}) {
  const opts = { ...defaultOptions, ...options };
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": opts.organizationName,
    "url": opts.siteUrl,
    "logo": `${opts.siteUrl}${opts.logoUrl}`,
    "sameAs": [
      "https://www.facebook.com/dwarkaexpressway",
      "https://twitter.com/dwarkaexpressway",
      "https://www.instagram.com/dwarkaexpressway"
    ]
  };
}

/**
 * Generates WebSite schema with search action
 */
export function generateWebsiteSchema(options: BlogSchemaOptions = {}) {
  const opts = { ...defaultOptions, ...options };
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": opts.siteName,
    "url": opts.siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${opts.siteUrl}/blogs?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Generates RealEstateAgent schema for property pages
 */
export function generateRealEstateAgentSchema(options: BlogSchemaOptions = {}) {
  const opts = { ...defaultOptions, ...options };
  
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": opts.organizationName,
    "url": opts.siteUrl,
    "logo": `${opts.siteUrl}${opts.logoUrl}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dwarka Expressway",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "telephone": "+91-9999999999",
    "priceRange": "$$$$"
  };
}

/**
 * Generates combined schema for a blog post page
 */
export function generateCombinedBlogSchema(post: BlogPostData, options: BlogSchemaOptions = {}) {
  const opts = { ...defaultOptions, ...options };
  
  const schemas: object[] = [
    generateBlogSchema(post, opts),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blogs", url: "/blogs" },
      { name: post.title, url: `/blogs/${post.slug}` }
    ], opts)
  ];
  
  // Add FAQ schema if post has FAQs
  if (post.faqs && post.faqs.length > 0) {
    const faqSchema = generateFAQSchema(post.faqs, opts);
    if (faqSchema) {
      schemas.push(faqSchema);
    }
  }
  
  return schemas;
}
