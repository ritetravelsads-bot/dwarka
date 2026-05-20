import { Metadata } from "next";
import FilteredProjectsClient from "@/components/projects/FilteredProjectsClient";
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

const faqs = [
  {
    question: "What commercial projects are available on Dwarka Expressway?",
    answer: "Dwarka Expressway offers retail shops, office spaces, SCO plots, food courts, and multiplexes from developers like M3M, AIPL, Elan, and Emaar.",
  },
  {
    question: "What is the starting price for commercial properties?",
    answer: "Commercial properties on Dwarka Expressway start from Rs. 50 Lakhs for small retail units and go up to Rs. 10 Crore+ for premium office spaces.",
  },
  {
    question: "Are commercial projects on Dwarka Expressway a good investment?",
    answer: "Yes, commercial projects on Dwarka Expressway offer excellent rental yields of 6-8% due to high footfall and growing commercial activity in the area.",
  },
  {
    question: "Which sectors have commercial projects on Dwarka Expressway?",
    answer: "Major commercial developments are located in Sectors 102, 103, 106, 108, 109, 111, and 113 with excellent connectivity.",
  },
];

export const metadata: Metadata = {
  title: "Commercial Projects on Dwarka Expressway | Shops, Offices & SCO",
  description:
    "Explore commercial projects on Dwarka Expressway including retail shops, office spaces, SCO plots & food courts. High rental yields & excellent connectivity.",
  keywords:
    "commercial projects dwarka expressway, shops in gurgaon, office space dwarka expressway, SCO plots, retail shops, commercial property gurgaon",
  alternates: {
    canonical: `${BASE_URL}/commercial`,
  },
  openGraph: {
    title: "Commercial Projects on Dwarka Expressway | Shops, Offices & SCO",
    description:
      "Explore commercial retail shops, office spaces and SCO plots on Dwarka Expressway.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: `${BASE_URL}/commercial`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Commercial Projects Dwarka Expressway",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CommercialPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: "Commercial", url: `${BASE_URL}/commercial` },
        ]}
      />
      <WebPageSchema
        title="Commercial Projects on Dwarka Expressway"
        description="Explore commercial retail shops, office spaces and SCO plots on Dwarka Expressway."
        url={`${BASE_URL}/commercial`}
      />
      <FAQSchema faqs={faqs} />
      
      <FilteredProjectsClient
        filterType="type"
        filterValue="commercial"
        title="Commercial Projects"
        subtitle="Retail shops, office spaces & SCO plots with high rental yields"
        breadcrumbLabel="Commercial"
      />
    </>
  );
}
