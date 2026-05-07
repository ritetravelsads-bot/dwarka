const BASE_URL = "https://www.dwarkaexpresswayncr.com"

interface BlogPost {
  title: string
  slug: string
  content?: string
  excerpt?: string
  banner_image?: string
  cover_image?: string
  og_image?: string
  publication_date?: string
  createdAt?: string
  updatedAt?: string
  category?: string
  tags?: string[]
  readTime?: string | number
  read_time?: string | number
  faqs?: Array<{ question: string; answer: string }>
}

export function generateBlogSchema(post: BlogPost, authorName: string) {
  const publishDate = post.publication_date || post.createdAt || new Date().toISOString()
  const modifiedDate = post.updatedAt || publishDate
  const imageUrl = post.banner_image || post.cover_image || post.og_image || `${BASE_URL}/assets/img/Og-Image.png`
  const readTime = post.readTime || post.read_time || 5
  
  const schemas: object[] = []
  
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blogs/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dwarka Expressway NCR",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/assets/img/logo.png`
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "wordCount": post.content ? post.content.replace(/<[^>]*>/g, "").split(/\s+/).length : 0,
    "timeRequired": `PT${readTime}M`,
    "inLanguage": "en-IN",
    ...(post.category && { "articleSection": post.category }),
    ...(post.tags && post.tags.length > 0 && { "keywords": post.tags.join(", ") })
  }
  schemas.push(articleSchema)
  
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": `${BASE_URL}/blogs`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${BASE_URL}/blogs/${post.slug}`
      }
    ]
  }
  schemas.push(breadcrumbSchema)
  
  // FAQ Schema (if FAQs exist)
  if (post.faqs && Array.isArray(post.faqs) && post.faqs.length > 0) {
    const validFaqs = post.faqs.filter(faq => faq.question?.trim() && faq.answer?.trim())
    if (validFaqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": validFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
      schemas.push(faqSchema)
    }
  }
  
  return schemas
}

export function generateBlogListSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Real Estate Blogs - Property Tips & Market Insights",
    "description": "Expert real estate insights and property investment tips from Dwarka Expressway NCR professionals.",
    "url": `${BASE_URL}/blogs`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": posts.length,
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": post.title,
          "url": `${BASE_URL}/blogs/${post.slug}`,
          "image": post.banner_image || post.cover_image || `${BASE_URL}/assets/img/Og-Image.png`
        }
      }))
    }
  }
}
