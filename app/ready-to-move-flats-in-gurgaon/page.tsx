import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/ready-to-move-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "Ready to Move Flats in Gurgaon | Immediate Possession 2026",
  description:
    "Find ready to move flats in Gurgaon with immediate possession. Move-in ready apartments on Dwarka Expressway, Golf Course Road & prime locations. Zero GST benefits.",
  keywords:
    "ready to move flats in gurgaon, ready to move apartments, ready to move flats, ready to move flats in dwarka expressway, ready to move flats in gurgaon under 1 crore, dwarka expressway flats, dwarka expressway property, affordable housing gurgaon",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Ready to Move Flats in Gurgaon | Move In Today",
    description:
      "Immediate possession flats in Gurgaon. No waiting, no GST, move in today with ready apartments on Dwarka Expressway and premium locations.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Ready to Move Flats in Gurgaon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Move In Today",
  heroTitle: "Ready to Move Flats in Gurgaon",
  heroSubtitle:
    "Skip the waiting period and move into your new home immediately. Fully finished apartments with zero GST, actual site inspection, and instant possession.",

  quickFacts: [
    { label: "Starting Price", value: "50 Lakh+" },
    { label: "Possession", value: "Immediate" },
    { label: "GST", value: "Zero" },
    { label: "Ready Units", value: "5,000+" },
  ],

  layoutTitle: "Why Choose Ready to Move Flats in Gurgaon?",
  layoutContent: [
    "Ready to move flats in Gurgaon offer immediate possession - what you see is what you get. Unlike under-construction properties, you can physically inspect the apartment, check the actual view, natural light, and quality of construction before buying.",
    "One of the biggest advantages is zero GST on ready-to-move properties with OC (Occupancy Certificate). This saves you 5% of the property value compared to under-construction projects. Additionally, you start earning rental income or saving rent immediately.",
    "With the Dwarka Expressway now fully operational, several premium projects have received possession. These ready-to-move flats offer world-class amenities, established communities, and proven infrastructure.",
  ],
  layoutHighlights: [
    "Zero GST on ready inventory with OC",
    "What you see is what you get - actual site visit",
    "Start earning rent or save rent immediately",
    "Established community and operational amenities",
    "No construction delays or project risks",
    "Easier home loan approval with ready property",
  ],

  localAreaTitle: "Ready Possession Locations",
  localAreaDescription:
    "Ready to move flats are available across Gurgaon's premium locations, with the highest concentration on Dwarka Expressway where multiple projects have received OC.",
  nearbyPlaces: [
    { name: "Sector 113 Projects", distance: "Ready Possession", type: "highway" },
    { name: "Sector 112 Projects", distance: "Ready Possession", type: "highway" },
    { name: "Sector 106 Projects", distance: "Ready Possession", type: "highway" },
    { name: "Golf Course Extension", distance: "Ready Units", type: "highway" },
    { name: "Sohna Road Projects", distance: "Ready Units", type: "highway" },
    { name: "New Gurgaon Sectors", distance: "Ready Units", type: "metro" },
  ],

  faqs: [
    {
      question: "What is the price range for ready to move flats in Gurgaon?",
      answer:
        "Ready to move flats in Gurgaon range from 50 Lakh for 2 BHK in affordable sectors to 6+ Crore for luxury 4 BHK apartments. Dwarka Expressway offers ready units starting from 80 Lakh to 4 Crore across various configurations.",
    },
    {
      question: "Is GST applicable on ready to move flats?",
      answer:
        "No, GST is not applicable on ready to move flats that have received Occupancy Certificate (OC). This is a significant saving of 5% compared to under-construction properties where GST applies.",
    },
    {
      question: "Which areas have ready to move flats in Gurgaon?",
      answer:
        "Ready to move flats are available in Dwarka Expressway (Sectors 106, 112, 113), Golf Course Extension Road, Sohna Road, and established sectors like 54, 55, 56, 57. Each area offers different price points and amenities.",
    },
    {
      question: "What documents should I check for ready to move flats?",
      answer:
        "Essential documents include Occupancy Certificate (OC), Completion Certificate, RERA registration, approved building plan, title clearance, and no-dues certificate from the builder. We help verify all documentation.",
    },
    {
      question: "Are ready to move flats on Dwarka Expressway available under 1 Crore?",
      answer:
        "Yes, there are ready to move flats on Dwarka Expressway under 1 Crore, primarily 2 BHK configurations in affordable housing projects and some compact 3 BHK units in value segment projects.",
    },
  ],

  relatedLinks: [
    {
      title: "Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "All projects on Dwarka Expressway",
    },
    {
      title: "3 BHK Flats",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Spacious apartments for families",
    },
    {
      title: "4 BHK Flats",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Luxury penthouses & apartments",
    },
    {
      title: "2 BHK Flats",
      href: "/2-bhk-flats-in-gurgaon",
      description: "Compact options for couples",
    },
    {
      title: "Upcoming Projects",
      href: "/upcoming-projects-in-gurugram",
      description: "New launches with pre-launch prices",
    },
    {
      title: "Commercial Property",
      href: "/commercial-property-in-gurgaon",
      description: "Office spaces & retail shops",
    },
  ],
};

const pageFaqs = pageContent.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function ReadyToMovePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Ready to Move Flats in Gurgaon", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="Ready to Move Flats in Gurgaon"
        description="Find ready to move flats in Gurgaon with immediate possession. Move-in ready apartments on Dwarka Expressway and prime locations."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="Ready to Move Flats in Gurgaon"
      />
    </>
  );
}
