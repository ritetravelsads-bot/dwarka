import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/3-bhk-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "3 BHK Flats in Gurgaon | Luxury Apartments from Top Developers",
  description:
    "Buy 3 BHK flats in Gurgaon from top developers. Spacious 3 bedroom apartments on Dwarka Expressway, Golf Course Road. Ready to move & new launches available.",
  keywords:
    "3 bhk flats in gurgaon, 3bhk in gurgaon, 3 bhk flats in gurgaon ready to move, 3 bhk builder floor in gurgaon, buy 3 bhk in gurgaon, 3 bhk apartment in gurgaon, 3 bhk flat for sale in gurgaon, 3 bhk luxury apartments in gurgaon, 3 bhk flats in gurgaon price, 3 bhk flats in dwarka expressway, ready to move 3 bhk flats in dwarka expressway",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "3 BHK Flats in Gurgaon | Family-Perfect Apartments",
    description:
      "Spacious 3 BHK apartments in Gurgaon for growing families. Premium locations, modern amenities, and excellent connectivity.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "3 BHK Flats in Gurgaon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Perfect for Growing Families",
  heroTitle: "3 BHK Flats in Gurgaon",
  heroSubtitle:
    "Find your ideal family home with spacious 3 bedroom apartments featuring modern designs, premium amenities, and excellent connectivity to schools, hospitals, and workplaces.",

  quickFacts: [
    { label: "Price Range", value: "1.2-3.5 Cr" },
    { label: "Size Range", value: "1500-2500 sq.ft" },
    { label: "Top Developers", value: "15+" },
    { label: "Available Units", value: "3,000+" },
  ],

  layoutTitle: "Why 3 BHK Flats in Gurgaon are Perfect for Families",
  layoutContent: [
    "A 3 BHK apartment in Gurgaon offers the ideal balance of space and affordability for growing families. With typical sizes ranging from 1500 to 2500 sq.ft, these homes provide dedicated spaces for parents, children, and guests or a home office.",
    "3 BHK flats on Dwarka Expressway are particularly popular due to their spacious layouts, green surroundings, and proximity to premium schools like Euro International and GD Goenka. The 15-20 minute connectivity to IGI Airport makes it perfect for frequent travelers.",
    "Top developers like Godrej, M3M, Sobha, and Experion offer 3 BHK apartments with thoughtful floor plans, premium specifications, and world-class amenities including swimming pools, gymnasiums, and landscaped gardens.",
  ],
  layoutHighlights: [
    "Spacious layouts with 1500-2500 sq.ft carpet area",
    "Dedicated servant room in most configurations",
    "Modular kitchen with utility balcony",
    "Premium schools within 10-minute radius",
    "Multi-specialty hospitals nearby",
    "Safe, gated communities with 24/7 security",
  ],

  localAreaTitle: "Family-Friendly Neighborhoods",
  localAreaDescription:
    "3 BHK apartments in Gurgaon are located in family-friendly neighborhoods with excellent schools, healthcare facilities, and recreational options within easy reach.",
  nearbyPlaces: [
    { name: "Euro International School", distance: "5-10 min", type: "school" },
    { name: "GD Goenka School", distance: "8-12 min", type: "school" },
    { name: "Medanta Hospital", distance: "10-15 min", type: "hospital" },
    { name: "Fortis Hospital", distance: "12-18 min", type: "hospital" },
    { name: "Ambience Mall", distance: "15-20 min", type: "mall" },
    { name: "Metro Connectivity", distance: "10-15 min", type: "metro" },
  ],

  faqs: [
    {
      question: "What is the price of 3 BHK flats in Gurgaon?",
      answer:
        "3 BHK flats in Gurgaon range from 1.2 Crore to 3.5 Crore depending on location, developer, and amenities. On Dwarka Expressway, prices start from 1.2-1.5 Crore for standard 3 BHK, going up to 3+ Crore for luxury apartments.",
    },
    {
      question: "Which is the best location for 3 BHK in Gurgaon?",
      answer:
        "Dwarka Expressway is the best location for 3 BHK flats due to its excellent connectivity, green environment, and presence of top developers. Golf Course Extension and Sohna Road are other popular options for premium 3 BHK apartments.",
    },
    {
      question: "What is the average size of 3 BHK flats in Gurgaon?",
      answer:
        "3 BHK flats in Gurgaon typically range from 1500 to 2500 sq.ft super built-up area. Carpet area usually ranges from 1100-1800 sq.ft. Luxury 3 BHK apartments can go up to 3000+ sq.ft.",
    },
    {
      question: "Are there ready to move 3 BHK flats in Gurgaon?",
      answer:
        "Yes, many ready to move 3 BHK flats are available in Gurgaon, especially on Dwarka Expressway where several projects have received OC. These offer immediate possession with zero GST benefits.",
    },
    {
      question: "What amenities come with 3 BHK flats in Gurgaon?",
      answer:
        "3 BHK flats in premium projects offer clubhouse, swimming pool, gymnasium, kids play area, landscaped gardens, jogging track, multipurpose hall, 24/7 security, power backup, and dedicated parking.",
    },
  ],

  relatedLinks: [
    {
      title: "4 BHK Flats in Gurgaon",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Looking for more space? Explore luxury 4 BHK options",
    },
    {
      title: "2 BHK Flats in Gurgaon",
      href: "/2-bhk-flats-in-gurgaon",
      description: "Compact options for couples and small families",
    },
    {
      title: "Ready to Move Flats",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession apartments",
    },
    {
      title: "Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "All projects on Dwarka Expressway",
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

export default function ThreeBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "3 BHK Flats in Gurgaon", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="3 BHK Flats in Gurgaon"
        description="Buy 3 BHK flats in Gurgaon from top developers. Spacious 3 bedroom apartments on Dwarka Expressway and Golf Course Road."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="3 BHK Flats in Gurgaon"
      />
    </>
  );
}
