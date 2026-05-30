// Schema Markup Components for SEO
// These components generate JSON-LD structured data for better search engine visibility

const BASE_URL = 'https://www.dwarkaexpresswayncr.com';

// Organization Schema - Used site-wide
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dwarka Expressway NCR",
    "alternateName": "Dwarka Expressway Real Estate",
    "url": BASE_URL,
    "logo": `${BASE_URL}/assets/img/logo.png`,
    "image": `${BASE_URL}/assets/img/Og-Image.png`,
    "description": "Trusted real estate advisory for premium residential and commercial properties on Dwarka Expressway, Gurugram.",
    "telephone": "+91-9873702365",
    "email": "info@dwarkaexpresswayncr.com",
    "priceRange": "₹50 Lakh - ₹6 Cr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit no. 555 JMD Megapolis Badshahpur Sohna Road, Sector 48",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4179",
      "longitude": "77.0432"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/dwarkaexpresswayncr/",
      "https://www.facebook.com/people/Dwarka-Expressway-Ncr/61586373907850/"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "28.4179",
        "longitude": "77.0432"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebPage Schema
interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function WebPageSchema({ title, description, url, datePublished, dateModified }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Dwarka Expressway NCR",
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dwarka Expressway NCR",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/assets/img/logo.png`
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Real Estate Listing / Product Schema for Projects
interface ProjectSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
  price: string;
  priceValue?: number;
  location: string;
  developer: string;
  configurations?: string[];
  status?: string;
  possession?: string;
  rera?: string;
  landArea?: string;
  amenities?: string[];
  slug?: string;
  latitude?: string;
  longitude?: string;
  floorSize?: number;
  sector?: string;
  postalCode?: string;
}

export function ProjectSchema({
  name,
  description,
  url,
  image,
  price,
  priceValue,
  location,
  developer,
  configurations,
  status,
  possession,
  rera,
  landArea,
  amenities,
  slug,
  latitude = "28.4851",
  longitude = "77.0116",
  floorSize = 2800,
  sector = "105",
  postalCode = "122051"
}: ProjectSchemaProps) {
  // Product Schema - Enhanced with more fields
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": developer
    },
    "mainEntityOfPage": `${url}#listing`,
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "INR",
      "price": priceValue || 0,
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      "availability": "https://schema.org/InStock"
    },
    "additionalProperty": [
      ...(configurations ? [{
        "@type": "PropertyValue",
        "name": "Configurations",
        "value": configurations.join(", ")
      }] : []),
      ...(status ? [{
        "@type": "PropertyValue",
        "name": "Status",
        "value": status
      }] : []),
      ...(possession ? [{
        "@type": "PropertyValue",
        "name": "Possession",
        "value": possession
      }] : []),
      ...(rera ? [{
        "@type": "PropertyValue",
        "name": "RERA Number",
        "value": rera
      }] : []),
      ...(landArea ? [{
        "@type": "PropertyValue",
        "name": "Land Area",
        "value": landArea
      }] : []),
      ...(amenities ? [{
        "@type": "PropertyValue",
        "name": "Amenities",
        "value": amenities.join(", ")
      }] : [])
    ]
  };

  // RealEstateListing Schema - Enhanced with House details
  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${url}#listing`,
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "datePosted": new Date().toISOString(),
    "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
    "offers": {
      "@type": "Offer",
      "price": priceValue || 0,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "about": {
      "@type": "House",
      "name": `${name}, ${sector ? `Sector ${sector}, ` : ""}${location}, Haryana`,
      "numberOfRooms": configurations?.length || 4,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": floorSize,
        "unitCode": "FTK"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${sector ? `Sector ${sector}, ` : ""}Near Dwarka Expressway`,
        "addressLocality": location,
        "addressRegion": "Haryana",
        "postalCode": postalCode,
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      }
    }
  };

  // Residence Schema with amenity features
  const residenceSchema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    "name": name,
    "description": description,
    "image": image,
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location,
      "addressRegion": "Haryana",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    ...(amenities ? {
      "amenityFeature": amenities.map(amenity => ({
        "@type": "LocationFeatureSpecification",
        "name": amenity,
        "value": true
      }))
    } : {})
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residenceSchema) }}
      />
    </>
  );
}

// Local Business Schema for Contact Page
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dwarka Expressway NCR",
    "image": `${BASE_URL}/assets/img/logo.png`,
    "url": BASE_URL,
    "telephone": "+91-9873702365",
    "email": "info@dwarkaexpresswayncr.com",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit no. 555 JMD Megapolis Badshahpur Sohna Road, Sector 48",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4179",
      "longitude": "77.0432"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Search Action Schema
export function WebsiteSearchSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dwarka Expressway NCR",
    "url": BASE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/projects?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema for About Page
export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Real Estate Advisory",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Dwarka Expressway NCR",
      "url": BASE_URL
    },
    "areaServed": {
      "@type": "City",
      "name": "Gurugram"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Consultation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Site Visit Assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investment Advisory"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ItemList Schema for Projects Listing Page
interface ProjectListItem {
  name: string;
  url: string;
  image: string;
  price: string;
}

export function ItemListSchema({ projects }: { projects: ProjectListItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects on Dwarka Expressway",
    "description": "List of premium residential and commercial projects on Dwarka Expressway",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "RealEstateListing",
        "name": project.name,
        "url": project.url,
        "image": project.image
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
