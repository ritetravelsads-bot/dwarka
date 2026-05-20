import { Metadata } from "next";
import FilteredProjectsClient from "@/components/projects/FilteredProjectsClient";
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

const faqs = [
  {
    question: "What residential projects are available on Dwarka Expressway?",
    answer: "Dwarka Expressway offers a wide range of residential projects including 2 BHK, 3 BHK, 4 BHK apartments, penthouses, and villas from premium developers like M3M, Godrej, DLF, and Sobha.",
  },
  {
    question: "What is the price range for residential properties?",
    answer: "Residential properties on Dwarka Expressway range from Rs. 1 Crore for 2 BHK apartments to Rs. 15 Crore+ for luxury penthouses and villas.",
  },
  {
    question: "Which are the best residential projects on Dwarka Expressway?",
    answer: "Top residential projects include M3M Crown, Godrej Vrikshya, Whiteland Westin Residences, Elan The Presidential, and Sobha Altus.",
  },
  {
    question: "Are there gated community residential projects?",
    answer: "Yes, most residential projects on Dwarka Expressway are gated communities with 24/7 security, clubhouse, swimming pool, and landscaped gardens.",
  },
];

export const metadata: Metadata = {
  title: "Residential Projects on Dwarka Expressway | Apartments & Villas",
  description:
    "Explore premium residential projects on Dwarka Expressway. Find 2 BHK, 3 BHK, 4 BHK apartments, penthouses & villas from top developers. RERA verified properties.",
  keywords:
    "residential projects dwarka expressway, apartments dwarka expressway, flats in gurgaon, luxury apartments, 2 bhk 3 bhk 4 bhk dwarka expressway",
  alternates: {
    canonical: `${BASE_URL}/residential`,
  },
  openGraph: {
    title: "Residential Projects on Dwarka Expressway | Apartments & Villas",
    description:
      "Explore premium residential apartments and villas on Dwarka Expressway from top developers.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: `${BASE_URL}/residential`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Residential Projects Dwarka Expressway",
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

export default function ResidentialPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: "Residential", url: `${BASE_URL}/residential` },
        ]}
      />
      <WebPageSchema
        title="Residential Projects on Dwarka Expressway"
        description="Explore premium residential apartments and villas on Dwarka Expressway."
        url={`${BASE_URL}/residential`}
      />
      <FAQSchema faqs={faqs} />
      
      <FilteredProjectsClient
        filterType="type"
        filterValue="residential"
        title="Residential Projects"
        subtitle="Premium apartments, villas & penthouses on Dwarka Expressway"
        breadcrumbLabel="Residential"
      />
    </>
  );
}
