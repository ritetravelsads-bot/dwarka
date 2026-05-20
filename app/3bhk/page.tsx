import { Metadata } from "next";
import FilteredProjectsClient from "@/components/projects/FilteredProjectsClient";
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

const faqs = [
  {
    question: "What is the price range for 3 BHK flats on Dwarka Expressway?",
    answer: "3 BHK flats on Dwarka Expressway range from Rs. 1.5 Crore to Rs. 5 Crore depending on the location, developer, and amenities.",
  },
  {
    question: "Which are the best 3 BHK projects on Dwarka Expressway?",
    answer: "Top 3 BHK projects include Godrej Vrikshya, M3M Crown, Signature Global De Luxe DXP, Hero Homes The Palatial, and Smartworld One DXP.",
  },
  {
    question: "What is the carpet area of 3 BHK flats?",
    answer: "3 BHK flats on Dwarka Expressway typically range from 1400 sq.ft to 2200 sq.ft carpet area depending on the project.",
  },
  {
    question: "Are there ready to move 3 BHK flats available?",
    answer: "Yes, several projects like Sobha City, Shapoorji Pallonji Joyville, and Emaar Palm Hills offer ready to move 3 BHK flats.",
  },
];

export const metadata: Metadata = {
  title: "3 BHK Flats on Dwarka Expressway | Premium Apartments",
  description:
    "Find 3 BHK flats and apartments on Dwarka Expressway Gurgaon. Premium residences from top developers with modern amenities. RERA approved projects.",
  keywords:
    "3 bhk flats dwarka expressway, 3 bhk apartments gurgaon, three bedroom flats, 3 bhk homes dwarka expressway",
  alternates: {
    canonical: `${BASE_URL}/3bhk`,
  },
  openGraph: {
    title: "3 BHK Flats on Dwarka Expressway | Premium Apartments",
    description:
      "Explore premium 3 BHK apartments on Dwarka Expressway from top developers.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: `${BASE_URL}/3bhk`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "3 BHK Flats Dwarka Expressway",
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

export default function ThreeBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: "Residential", url: `${BASE_URL}/residential` },
          { name: "3 BHK", url: `${BASE_URL}/3bhk` },
        ]}
      />
      <WebPageSchema
        title="3 BHK Flats on Dwarka Expressway"
        description="Find premium 3 BHK apartments on Dwarka Expressway Gurgaon."
        url={`${BASE_URL}/3bhk`}
      />
      <FAQSchema faqs={faqs} />
      
      <FilteredProjectsClient
        filterType="bhk"
        filterValue="3bhk"
        title="3 BHK Apartments"
        subtitle="Spacious 3 bedroom flats on Dwarka Expressway"
        breadcrumbLabel="3 BHK"
      />
    </>
  );
}
