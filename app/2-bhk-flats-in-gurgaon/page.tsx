import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/2-bhk-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "2 BHK Flats in Gurgaon | Affordable Apartments for Couples 2026",
  description:
    "Find 2 BHK flats in Gurgaon starting from 50 Lakh. Perfect for young professionals & couples. Affordable apartments on Dwarka Expressway with modern amenities.",
  keywords:
    "2 bhk flat for rent in gurgaon, 2bhk flat in gurgaon, 2 bhk in gurgaon, 2bhk flat in dwarka, 2 bhk for sale in gurgaon, buy 2 bhk in gurgaon, 2bhk in dwarka, 2 bhk flats in dwarka price, 2 bhk flats in gurugram, 2 bhk apartment in gurgaon, 2 bhk flats in gurgaon ready to move, 2 bhk affordable flats in gurgaon, 2 bhk in gurgaon ready to move, 2 bhk society flats in dwarka for sale, 2 bhk flats in dwarka expressway for sale, 2 bhk flat for sale in dwarka expressway, 2 bhk for sale in dwarka expressway, 2 bhk flats in dwarka expressway",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "2 BHK Flats in Gurgaon | Smart Start for Couples",
    description:
      "Affordable 2 BHK apartments in Gurgaon. Perfect for young professionals and couples looking for their first home with modern amenities.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "2 BHK Flats in Gurgaon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Perfect Start for Young Professionals",
  heroTitle: "2 BHK Flats in Gurgaon",
  heroSubtitle:
    "Begin your homeownership journey with smart, affordable 2 bedroom apartments. Ideal for couples and young professionals seeking modern living without stretching the budget.",

  quickFacts: [
    { label: "Starting Price", value: "50 Lakh" },
    { label: "Size Range", value: "900-1400 sq.ft" },
    { label: "EMI Starting", value: "35K/month" },
    { label: "Available Units", value: "4,000+" },
  ],

  layoutTitle: "Why 2 BHK Flats in Gurgaon are the Smart Choice",
  layoutContent: [
    "A 2 BHK apartment in Gurgaon is the perfect entry point into real estate ownership. With prices starting from 50 Lakh, these homes offer excellent value with EMIs comparable to or lower than monthly rent in the same area.",
    "2 BHK flats on Dwarka Expressway provide the same world-class amenities as larger configurations - swimming pools, clubhouses, gyms, and landscaped gardens - at a fraction of the cost. The compact size means lower maintenance charges too.",
    "For young professionals and couples, a 2 BHK offers sufficient space for comfortable living while building equity. Many buyers later upgrade to 3 BHK, retaining their original apartment as a rental investment.",
  ],
  layoutHighlights: [
    "Affordable entry point starting from 50 Lakh",
    "EMIs lower than equivalent rent in the area",
    "Full access to premium project amenities",
    "Lower maintenance and utility costs",
    "Excellent rental potential for investment",
    "Easy to maintain and manage",
  ],

  localAreaTitle: "Value-for-Money Locations",
  localAreaDescription:
    "2 BHK apartments are available across Gurgaon's emerging corridors offering excellent connectivity and appreciation potential at affordable price points.",
  nearbyPlaces: [
    { name: "Dwarka Expressway Sectors", distance: "50L-1Cr range", type: "highway" },
    { name: "New Gurgaon (82-95)", distance: "45L-80L range", type: "highway" },
    { name: "Sohna Road Corridor", distance: "50L-90L range", type: "highway" },
    { name: "Affordable Housing Zones", distance: "25L-50L range", type: "metro" },
    { name: "Metro Connected Areas", distance: "60L-1.2Cr range", type: "metro" },
    { name: "SPR Road Projects", distance: "55L-95L range", type: "highway" },
  ],

  faqs: [
    {
      question: "What is the price of 2 BHK flats in Gurgaon?",
      answer:
        "2 BHK flats in Gurgaon range from 50 Lakh to 1.5 Crore depending on location and amenities. Affordable housing schemes start from 25-30 Lakh, while premium 2 BHK on Dwarka Expressway ranges from 50-90 Lakh.",
    },
    {
      question: "What is the EMI for 2 BHK flat in Gurgaon?",
      answer:
        "For a 50 Lakh 2 BHK flat with 80% loan at 8.5% interest for 20 years, EMI would be approximately 35,000 per month. For a 75 Lakh flat, EMI would be around 52,000 per month.",
    },
    {
      question: "Which is the best area for 2 BHK in Gurgaon?",
      answer:
        "Best areas for 2 BHK flats include Dwarka Expressway (value + appreciation), New Gurgaon sectors (affordable), and Sohna Road (emerging). Each offers different advantages based on budget and preferences.",
    },
    {
      question: "Are there affordable 2 BHK flats in Gurgaon under 50 Lakh?",
      answer:
        "Yes, affordable housing projects under government schemes offer 2 BHK flats starting from 25-30 Lakh. These are available in sectors like 95, 99, and along the southern periphery of Gurgaon.",
    },
    {
      question: "Is 2 BHK a good investment in Gurgaon?",
      answer:
        "Yes, 2 BHK flats are excellent investments due to lower entry cost, strong rental demand from working professionals, and good appreciation. They offer the best rental yield percentage among residential configurations.",
    },
  ],

  relatedLinks: [
    {
      title: "3 BHK Flats in Gurgaon",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Upgrade to more space for growing families",
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
      title: "4 BHK Flats",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Luxury living options",
    },
    {
      title: "Commercial Property",
      href: "/commercial-property-in-gurgaon",
      description: "Investment opportunities",
    },
  ],
};

const pageFaqs = pageContent.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function TwoBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "2 BHK Flats in Gurgaon", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="2 BHK Flats in Gurgaon"
        description="Find 2 BHK flats in Gurgaon starting from 50 Lakh. Perfect for young professionals and couples looking for affordable apartments."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="2 BHK Flats in Gurgaon"
      />
    </>
  );
}
