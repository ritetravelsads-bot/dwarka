import { Metadata } from "next";
import FilteredProjectsClient from "@/components/projects/FilteredProjectsClient";
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

const faqs = [
  {
    question: "What ready to move projects are available on Dwarka Expressway?",
    answer: "Ready to move projects on Dwarka Expressway include Godrej Meridien, Tata Raisina, Sobha City, DLF The Ultima, Emaar Palm Hills, and more with immediate possession.",
  },
  {
    question: "What is the benefit of buying ready to move property?",
    answer: "Ready to move properties offer immediate possession, no GST charges, what-you-see-is-what-you-get apartments, and no construction delays.",
  },
  {
    question: "What is the price range for ready to move flats?",
    answer: "Ready to move flats on Dwarka Expressway range from Rs. 1.3 Crore for 2 BHK to Rs. 10 Crore+ for premium 4 BHK and penthouses.",
  },
  {
    question: "Are ready to move projects OC/CC approved?",
    answer: "Yes, all ready to move projects listed here have received Occupancy Certificate (OC) and Completion Certificate (CC) from authorities.",
  },
];

export const metadata: Metadata = {
  title: "Ready to Move Projects on Dwarka Expressway | Immediate Possession",
  description:
    "Find ready to move flats on Dwarka Expressway with immediate possession. No GST, OC/CC received properties from Godrej, Tata, DLF, Sobha & more.",
  keywords:
    "ready to move flats dwarka expressway, immediate possession flats gurgaon, ready to move apartments, OC received flats, no GST properties gurgaon",
  alternates: {
    canonical: `${BASE_URL}/ready-to-move`,
  },
  openGraph: {
    title: "Ready to Move Projects on Dwarka Expressway | Immediate Possession",
    description:
      "Find ready to move flats on Dwarka Expressway with immediate possession and no GST.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: `${BASE_URL}/ready-to-move`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Ready to Move Projects Dwarka Expressway",
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

export default function ReadyToMovePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: "Ready to Move", url: `${BASE_URL}/ready-to-move` },
        ]}
      />
      <WebPageSchema
        title="Ready to Move Projects on Dwarka Expressway"
        description="Find ready to move flats on Dwarka Expressway with immediate possession."
        url={`${BASE_URL}/ready-to-move`}
      />
      <FAQSchema faqs={faqs} />
      
      <FilteredProjectsClient
        filterType="status"
        filterValue="ready-to-move"
        title="Ready to Move Projects"
        subtitle="Immediate possession flats with OC/CC - No GST applicable"
        breadcrumbLabel="Ready to Move"
      />
    </>
  );
}
