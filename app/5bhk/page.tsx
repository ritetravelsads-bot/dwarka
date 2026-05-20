import { Metadata } from "next";
import FilteredProjectsClient from "@/components/projects/FilteredProjectsClient";
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

const faqs = [
  {
    question: "What is the price range for 5 BHK flats on Dwarka Expressway?",
    answer: "5 BHK flats and penthouses on Dwarka Expressway range from Rs. 7 Crore to Rs. 20 Crore+ depending on the project and amenities.",
  },
  {
    question: "Which are the best 5 BHK projects on Dwarka Expressway?",
    answer: "Top 5 BHK projects include M3M Elie Saab, Central Park Delphine, Adani Realty Iconic Towers, and DLF The Ultima.",
  },
  {
    question: "What is the carpet area of 5 BHK flats?",
    answer: "5 BHK flats and penthouses on Dwarka Expressway range from 4000 sq.ft to 8000+ sq.ft including terrace area.",
  },
  {
    question: "Do 5 BHK penthouses have private terraces?",
    answer: "Yes, most 5 BHK penthouses come with private terraces, rooftop gardens, private pools, and dedicated elevators.",
  },
];

export const metadata: Metadata = {
  title: "5 BHK Flats & Penthouses on Dwarka Expressway | Ultra Luxury",
  description:
    "Find ultra luxury 5 BHK flats and penthouses on Dwarka Expressway Gurgaon. Exclusive residences with private terraces and premium amenities.",
  keywords:
    "5 bhk flats dwarka expressway, penthouses gurgaon, five bedroom apartments, luxury penthouses dwarka expressway",
  alternates: {
    canonical: `${BASE_URL}/5bhk`,
  },
  openGraph: {
    title: "5 BHK Flats & Penthouses on Dwarka Expressway | Ultra Luxury",
    description:
      "Explore ultra luxury 5 BHK penthouses on Dwarka Expressway from premium developers.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: `${BASE_URL}/5bhk`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "5 BHK Penthouses Dwarka Expressway",
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

export default function FiveBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: "Residential", url: `${BASE_URL}/residential` },
          { name: "5 BHK", url: `${BASE_URL}/5bhk` },
        ]}
      />
      <WebPageSchema
        title="5 BHK Flats & Penthouses on Dwarka Expressway"
        description="Find ultra luxury 5 BHK penthouses on Dwarka Expressway Gurgaon."
        url={`${BASE_URL}/5bhk`}
      />
      <FAQSchema faqs={faqs} />
      
      <FilteredProjectsClient
        filterType="bhk"
        filterValue="5bhk"
        title="5 BHK & Penthouses"
        subtitle="Ultra luxury 5 bedroom residences and penthouses"
        breadcrumbLabel="5 BHK"
      />
    </>
  );
}
