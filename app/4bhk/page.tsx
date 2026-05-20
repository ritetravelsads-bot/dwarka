import { Metadata } from "next";
import FilteredProjectsClient from "@/components/projects/FilteredProjectsClient";
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

const faqs = [
  {
    question: "What is the price range for 4 BHK flats on Dwarka Expressway?",
    answer: "4 BHK flats on Dwarka Expressway range from Rs. 3 Crore to Rs. 10 Crore depending on the location, developer, and amenities.",
  },
  {
    question: "Which are the best 4 BHK projects on Dwarka Expressway?",
    answer: "Top 4 BHK projects include Elan The Presidential, Whiteland Westin Residences, M3M Capital, Sobha Altus, and Godrej Meridien.",
  },
  {
    question: "What is the carpet area of 4 BHK flats?",
    answer: "4 BHK flats on Dwarka Expressway typically range from 2200 sq.ft to 4000 sq.ft carpet area depending on the project.",
  },
  {
    question: "Do 4 BHK apartments come with servant quarters?",
    answer: "Yes, most 4 BHK apartments on Dwarka Expressway come with servant quarters, utility balconies, and dedicated parking.",
  },
];

export const metadata: Metadata = {
  title: "4 BHK Flats on Dwarka Expressway | Luxury Apartments",
  description:
    "Find luxury 4 BHK flats and apartments on Dwarka Expressway Gurgaon. Spacious residences from premium developers with world-class amenities.",
  keywords:
    "4 bhk flats dwarka expressway, 4 bhk apartments gurgaon, four bedroom flats, luxury 4 bhk dwarka expressway",
  alternates: {
    canonical: `${BASE_URL}/4bhk`,
  },
  openGraph: {
    title: "4 BHK Flats on Dwarka Expressway | Luxury Apartments",
    description:
      "Explore luxury 4 BHK apartments on Dwarka Expressway from premium developers.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: `${BASE_URL}/4bhk`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "4 BHK Flats Dwarka Expressway",
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

export default function FourBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: "Residential", url: `${BASE_URL}/residential` },
          { name: "4 BHK", url: `${BASE_URL}/4bhk` },
        ]}
      />
      <WebPageSchema
        title="4 BHK Flats on Dwarka Expressway"
        description="Find luxury 4 BHK apartments on Dwarka Expressway Gurgaon."
        url={`${BASE_URL}/4bhk`}
      />
      <FAQSchema faqs={faqs} />
      
      <FilteredProjectsClient
        filterType="bhk"
        filterValue="4bhk"
        title="4 BHK Apartments"
        subtitle="Luxury 4 bedroom residences on Dwarka Expressway"
        breadcrumbLabel="4 BHK"
      />
    </>
  );
}
