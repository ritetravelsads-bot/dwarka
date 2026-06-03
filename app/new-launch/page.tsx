import { Metadata } from "next";
import FilteredProjectsClient from "@/components/projects/FilteredProjectsClient";
import { BreadcrumbSchema, WebPageSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

const faqs = [
  {
    question: "What are the new launch projects on Dwarka Expressway?",
    answer: "New launch projects on Dwarka Expressway include premium developments from top builders like M3M, Godrej, Signature Global, BPTP, and Elan with modern amenities and competitive pricing.",
  },
  {
    question: "What is the starting price for new launch projects?",
    answer: "New launch projects on Dwarka Expressway start from Rs. 1 Crore and go up to Rs. 15 Crore+ depending on the configuration and developer.",
  },
  {
    question: "When will new launch projects be ready for possession?",
    answer: "Most new launch projects on Dwarka Expressway offer possession between 2027-2030 depending on the construction stage.",
  },
  {
    question: "Are new launch projects RERA registered?",
    answer: "Yes, all new launch projects listed here are RERA registered and verified for buyer protection.",
  },
];

export const metadata: Metadata = {
  title: "Hot New Launch Projects on Dwarka Expressway– Limited Units",
  description:
    "Which New launch in Gurgaon actually Worth your Money 2026? Our experts vet every Project by Builder track record & Location .Get the Honest Expert Guidance.",
  keywords:
    "new launch projects dwarka expressway, upcoming projects gurgaon, new residential projects, pre-launch properties, under construction flats dwarka expressway",
  alternates: {
    canonical: `${BASE_URL}/new-launch`,
  },
  openGraph: {
    title: "New Launch Projects on Dwarka Expressway | Latest Launches 2026",
    description:
      "Discover the latest new launch projects on Dwarka Expressway. Premium developments with early bird pricing.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: `${BASE_URL}/new-launch`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "New Launch Projects Dwarka Expressway",
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

export default function NewLaunchPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: "New Launch", url: `${BASE_URL}/new-launch` },
        ]}
      />
      <WebPageSchema
        title="Hot New Launch Projects on Dwarka Expressway– Limited Units"
        description="Which New launch in Gurgaon actually Worth your Money 2026? Our experts vet every Project by Builder track record & Location .Get the Honest Expert Guidance."
        url={`${BASE_URL}/new-launch`}
      />
      <FAQSchema faqs={faqs} />
      
      <FilteredProjectsClient
        filterType="status"
        filterValue="new-launch"
        title="New Launch Projects"
        subtitle="Discover the latest property launches on Dwarka Expressway with early bird pricing"
        breadcrumbLabel="New Launch"
      />
    </>
  );
}
