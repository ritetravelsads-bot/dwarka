import { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

// Homepage FAQs for schema markup
const homeFaqs = [
  {
    question: "What is Dwarka Expressway?",
    answer:
      "Dwarka Expressway is a 27.6 km, 16-lane operational highway linking Delhi's IGI Airport area to Gurgaon.",
  },
  {
    question: "Is it worth investing in Dwarka Expressway?",
    answer:
      "Yes, worth investing due to 8-12% annual appreciation and rising rentals in 2026.",
  },
  {
    question: "Is Dwarka Expressway a Good Investment?",
    answer:
      "Yes, strong returns from infrastructure completion and commercial growth.",
  },
  {
    question: "What is the construction status of Dwarka Expressway?",
    answer:
      "Fully operational since June 2025, with metro extension planned.",
  },
  {
    question: "Is Dwarka Expressway good to Live in?",
    answer:
      "Dwarka Expressway projects offer signal-free connectivity to IGI Airport (15-20 mins), Cyber City, and Delhi via an 8-lane elevated corridor and the upcoming Metro extension.",
  },
  {
    question: "Which Projects are Best on Dwarka Expressway?",
    answer:
      "Sobha City, M3M Capital, Godrej Summit, Experion Windchants.",
  },
  {
    question: "What are the best sectors to live on Dwarka Expressway?",
    answer:
      "Sectors 113, 112, 111, 106, 99 for luxury and connectivity.",
  },
  {
    question: "How many projects in Dwarka Expressway?",
    answer:
      "Dozens across sectors, with ~25,000 units ready by 2027.",
  },
  {
    question: "Benefits of Dwarka Expressway project?",
    answer:
      "Sobha City (sports lifestyle), M3M Mansion (ultra-luxury), Godrej Meridien (amenities), and Smart World One DXP for its strategic location at the Delhi-Gurgaon border.",
  },
  {
    question: "Dwarka Expressway is located from Where to Where?",
    answer:
      "Shiv Murti (Mahipalpur, Delhi) to Kherki Daula Toll Plaza (Gurgaon).",
  },
];

// Server-side metadata - This is what Google will use, not page content
export const metadata: Metadata = {
  title: "Projects in Dwarka Expressway NCR - Residential | Commercial",
  description:
    "2026 Rapid Infrastructure makes Dwarka Expressway Real estate Top Investment Destinations in NCR. Get Latest Price Trends, EMI Calculator.",
  keywords:
    "dwarka expressway, gurgaon real estate, premium apartments, luxury homes, commercial projects, new launch projects, gurugram property, dwarka expressway projects",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Projects in Dwarka Expressway - Residential & Commercial Properties",
    description:
      "Explore premium residential & commercial properties on Dwarka Expressway. RERA verified projects from top developers.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Dwarka Expressway NCR Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarka Expressway NCR - Premium Properties",
    description: "Explore premium residential & commercial properties on Dwarka Expressway.",
    images: [`${BASE_URL}/assets/img/Og-Image.png`],
    creator: "@dwarkaexpresswayncr",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  // JSON-LD Schema for Real Estate Agent
  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Dwarka Expressway NCR",
    image: `${BASE_URL}/assets/img/Og-Image.png`,
    url: BASE_URL,
    telephone: "+91 9873702365",
    priceRange: "50 lakh - 6 CR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit no. 555 JMD Megapolis Badshahpur Sohna Road, Sector 48",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122018",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4179",
      longitude: "77.0432",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.instagram.com/dwarkaexpresswayncr/",
      "https://www.facebook.com/people/Dwarka-Expressway-Ncr/61586373907850/",
    ],
  };

  return (
    <>
      {/* JSON-LD Schema Markup - Visible to search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateAgentSchema),
        }}
      />
      
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
        ]}
      />
      
      {/* WebPage Schema */}
      <WebPageSchema
        title="Projects in Dwarka Expressway NCR - Residential | Commercial"
        description="2026 Rapid Infrastructure makes Dwarka Expressway Real estate Top Investment Destinations in NCR. Get Latest Price Trends, EMI Calculator."
        url={BASE_URL}
      />
      
      {/* FAQ Schema - Helps Google understand and display FAQs in search results */}
      <FAQSchema faqs={homeFaqs} />
      
      {/* Client-side interactive components */}
      <HomePageClient />
    </>
  );
}
