import { Metadata } from "next";
import { Suspense } from "react";
import ProjectsPageClient from "@/components/projects/ProjectsPageClient";
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

// FAQs for projects listing page
const projectsFaqs = [
  {
    question: "What types of projects are available on Dwarka Expressway?",
    answer: "Dwarka Expressway offers residential apartments, commercial spaces, SCO plots, and independent plots from top developers like M3M, Godrej, DLF, Sobha, and more.",
  },
  {
    question: "What is the price range for properties on Dwarka Expressway?",
    answer: "Properties on Dwarka Expressway range from Rs.50 Lakh to Rs.6 Crore+ depending on the configuration, location, and developer.",
  },
  {
    question: "Which are the top developers on Dwarka Expressway?",
    answer: "Top developers include M3M, Godrej Properties, DLF, Sobha, Elan, BPTP, Hero Homes, and Signature Global.",
  },
  {
    question: "Are there ready-to-move projects on Dwarka Expressway?",
    answer: "Yes, several projects offer ready-to-move units while others are under construction with possession expected by 2026-2028.",
  },
  {
    question: "What configurations are available in Dwarka Expressway projects?",
    answer: "Projects offer 2 BHK, 3 BHK, 4 BHK, 5 BHK apartments, and penthouses with sizes ranging from 1000 to 5000+ sq.ft.",
  },
];

// Server-side metadata - This is what Google will index
export const metadata: Metadata = {
  title: "All Projects on Dwarka Expressway | Residential & Commercial | 50+ Properties",
  description:
    "Browse 50+ verified residential and commercial projects on Dwarka Expressway. Compare prices, floor plans, amenities, and book site visits. RERA registered properties from top developers.",
  keywords:
    "dwarka expressway projects, gurgaon real estate, residential projects dwarka expressway, commercial projects gurgaon, new launch projects, ready to move flats, luxury apartments dwarka expressway, property near dwarka expressway",
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: "All Projects on Dwarka Expressway | 50+ Properties Available",
    description:
      "Explore 50+ premium residential and commercial projects on Dwarka Expressway. Compare prices, views, and book site visits today.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: `${BASE_URL}/projects`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Dwarka Expressway Projects - Residential & Commercial Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects on Dwarka Expressway | Gurgaon Real Estate",
    description: "Browse 50+ verified projects on Dwarka Expressway. Compare prices and amenities.",
    images: [`${BASE_URL}/assets/img/Og-Image.png`],
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

// Loading fallback for better UX
function ProjectsLoadingFallback() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <>
      {/* Schema Markup for SEO */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
        ]}
      />
      <WebPageSchema
        title="All Projects on Dwarka Expressway | Residential & Commercial Properties"
        description="Explore 50+ premium residential and commercial projects on Dwarka Expressway, Gurgaon. Compare prices, view floor plans, and book site visits."
        url={`${BASE_URL}/projects`}
      />
      <FAQSchema faqs={projectsFaqs} />
      
      {/* Semantic HTML for search engines */}
      <main className="w-full">
        <Suspense fallback={<ProjectsLoadingFallback />}>
          {/* Client-side interactive component */}
          <ProjectsPageClient />
        </Suspense>
      </main>
    </>
  );
}
