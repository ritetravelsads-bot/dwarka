import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/ready-to-move-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "Ready to Move Flats in Gurgaon | Immediate Possession Homes",
  description:
    "Explore verified ready to move flats in Gurgaon across Dwarka Expressway, New Gurgaon, and premium residential sectors. Immediate possession, established infrastructure, and excellent connectivity to Delhi.",
  keywords:
    "ready to move flats in gurgaon, ready to move apartments, ready to move flats, ready to move flats in dwarka expressway, ready to move flats in gurgaon under 1 crore, dwarka expressway flats, dwarka expressway property, affordable housing gurgaon",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Ready to Move Flats in Gurgaon | Immediate Possession Homes",
    description:
      "Explore verified ready to move flats in Gurgaon across Dwarka Expressway, New Gurgaon, and premium residential sectors. Immediate possession, established infrastructure, and excellent connectivity to Delhi.",
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
  heroTagline: "Immediate Possession Available",
  heroTitle: "Ready to Move Flats in Gurgaon",
  heroSubtitle:
    "Looking for ready to move flats in Gurgaon? Explore verified ready to move apartments in Gurgaon across Dwarka Expressway, New Gurgaon, and premium residential sectors.",
  heroImage: "/assets/img/ready-to-move-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "Ready Possession", label: "Immediate Move-In" },
    { icon: "route", value: "Dwarka Expressway", label: "Prime Connectivity" },
    { icon: "shield", value: "Under ₹1 Cr", label: "Affordable Options" },
    { icon: "route", value: "600–2500 Sq.Ft.", label: "Multiple Configurations" },
  ],

  quickFacts: [
    { label: "Ready Possession", value: "Immediate Move-In" },
    { label: "Dwarka Expressway", value: "Prime Connectivity" },
    { label: "Under ₹1 Cr", value: "Affordable Options" },
    { label: "Multiple Configs", value: "600–2500 Sq.Ft." },
  ],

  projectsSectionTitle: "Ready to Move Flats at a Glance – Gurgaon",
  projectsSectionSubtitle:
    "Compare the top ready to move flats in Gurgaon, ready to move flats on Dwarka Expressway.",

  projectCards: [
    {
      name: "Godrej Summit",
      location: "Dwarka Expressway",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "2 & 3 BHK",
      sizeRange: "1,269 – 2,692 Sq.Ft.",
      startingPrice: "₹1.80 Cr*",
      connectivity: "Dwarka Expressway",
      href: "/projects",
    },
    {
      name: "Experion Heartsong",
      location: "Sector 108 Gurgaon",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "dark",
      configuration: "2, 3 & 4 BHK",
      sizeRange: "1,283 – 2,003 Sq.Ft.",
      startingPrice: "₹1.60 Cr*",
      connectivity: "Sector 108 Gurgaon",
      href: "/projects",
    },
    {
      name: "ATS Triumph",
      location: "Near Delhi Border",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "amber",
      configuration: "3 & 4 BHK",
      sizeRange: "2,290 – 3,150 Sq.Ft.",
      startingPrice: "₹2.75 Cr*",
      connectivity: "Near Delhi Border",
      href: "/projects",
    },
    {
      name: "Affordable Housing Gurgaon",
      location: "New Gurgaon",
      status: "Under ₹1 Crore",
      statusColor: "blue",
      headerColor: "primary",
      configuration: "1 & 2 BHK",
      sizeRange: "350 – 1,200 Sq.Ft.",
      startingPrice: "₹25 Lakhs*",
      connectivity: "New Gurgaon",
      href: "/projects",
    },
  ],

  layoutTitle: "The Anatomy of Ready to Move Flats in Gurgaon",
  layoutContent: [
    "A ready to move flat in Gurgaon offers the ideal combination of comfort, convenience, and immediate possession. Whether you are looking for ready to move apartments, affordable housing Gurgaon, or premium homes on Dwarka Expressway, these properties suit both end users and investors.",
    "Unlike under-construction projects, ready to move flats allow buyers to inspect the actual property, evaluate amenities, and move in without waiting for completion or possession delays.",
    "Top developers across Dwarka Expressway, New Gurgaon, and prime sectors offer ready to move flats with modern layouts, gated communities, and lifestyle amenities.",
  ],
  layoutHighlights: [
    "Ready Possession with Immediate Move-In",
    "Prime Dwarka Expressway Connectivity",
    "Master-Planned Gated Communities",
    "Price Starting from Affordable Budgets",
  ],
  layoutImage: "/assets/img/ready-to-move-building.jpg",

  localFeatures: [
    {
      icon: "connectivity",
      title: "Commercial Hubs",
      description: "Major commercial and business districts located just 5–15 minutes away.",
    },
    {
      icon: "plane",
      title: "IGI Airport",
      description: "Quick access to IGI Airport within 15–20 minutes via Dwarka Expressway.",
    },
    {
      icon: "hospital",
      title: "Premium Hospitals",
      description: "Top healthcare facilities and premium hospitals within 5–10 minutes.",
    },
  ],

  localAreaTitle: "Ready to Move Flats in Gurgaon",
  localAreaDescription:
    "Ready to move flats on Dwarka Expressway are surrounded by major infrastructure, business districts, schools, hospitals, and metro connectivity, making them ideal for families and investors.",
  nearbyPlaces: [
    { name: "Commercial Hubs", distance: "5–15 Min", type: "highway" },
    { name: "IGI Airport", distance: "15–20 Min", type: "highway" },
    { name: "Premium Hospitals", distance: "5–10 Min", type: "hospital" },
    { name: "Shopping Malls", distance: "10–20 Min", type: "mall" },
    { name: "Affordable Housing", distance: "₹25L+ Onwards", type: "highway" },
    { name: "Metro Connectivity", distance: "5–15 Min", type: "metro" },
  ],

  faqs: [
    {
      question: "What are the best ready to move flats in Gurgaon?",
      answer:
        "The best ready to move flats in Gurgaon are located across Dwarka Expressway, New Gurgaon, and premium sectors including 102, 104, 106, 107, 108, and 113. Buyers can choose from affordable apartments, family homes, and luxury residences.",
    },
    {
      question: "What is the price starting for ready to move flats in Gurgaon?",
      answer:
        "Affordable Housing Gurgaon starts from ₹25 Lakhs*, 2 BHK Apartments from ₹55 Lakhs*, 3 BHK Flats from ₹1 Crore*, and Luxury Apartments from ₹2 Crore*.",
    },
    {
      question: "What is the size range of ready to move apartments in Gurgaon?",
      answer:
        "1 BHK ranges from 350–700 Sq.Ft., 2 BHK from 600–1,500 Sq.Ft., 3 BHK from 1,200–3,000 Sq.Ft., and Luxury Homes from 2,000–4,500 Sq.Ft.",
    },
    {
      question: "Are there ready to move flats in Gurgaon under 1 crore?",
      answer:
        "Yes. Several ready to move apartments in Gurgaon under ₹1 crore are available in affordable housing projects, builder floors, and selected residential communities across New Gurgaon and Dwarka Expressway.",
    },
    {
      question: "Why buy ready to move flats on Dwarka Expressway?",
      answer:
        "Key benefits include Immediate Possession, Delhi Connectivity, proximity to IGI Airport, Growing Infrastructure, Strong Rental Demand, and High Appreciation Potential.",
    },
    {
      question: "Is Dwarka Expressway property a good investment?",
      answer:
        "Yes. Dwarka Expressway property is considered one of Gurgaon's fastest-growing real estate corridors due to metro expansion, commercial developments, airport connectivity, and increasing residential demand.",
    },
    {
      question: "What amenities are available in ready to move flats in Gurgaon?",
      answer:
        "Ready to move flats in Gurgaon offer Clubhouse, Swimming Pool, Gymnasium, Landscaped Greens, Kids Play Area, 24x7 Security, and Dedicated Parking.",
    },
    {
      question: "Which sectors are popular for ready to move flats on Dwarka Expressway?",
      answer:
        "Sector 102 is ideal for Value Buyers, Sector 104 for Ready Possession, Sector 106 for Luxury Living, Sector 108 for Family Homes, and Sector 113 for Delhi Connectivity.",
    },
    {
      question: "What is the difference between ready to move and under-construction flats?",
      answer:
        "Ready to Move flats offer Immediate Possession, No Construction Risk, early Rental Income, and allow Actual Property Inspection. Under-construction flats involve Future Possession, Construction Risk, Future Income, and Sample-Based Purchase.",
    },
    {
      question: "Who should buy ready to move apartments in Gurgaon?",
      answer:
        "Ready to move apartments are ideal for end users, investors, NRIs, working professionals, and families looking for immediate possession, established communities, and hassle-free ownership.",
    },
  ],

  relatedLinks: [
    {
      title: "Ready to Move Apartments",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession homes across Gurgaon locations",
    },
    {
      title: "Affordable Housing Gurgaon",
      href: "/projects",
      description: "Budget homes with excellent connectivity options",
    },
    {
      title: "Ready to Move Flats",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Move-in-ready apartments with premium amenities",
    },
    {
      title: "Dwarka Expressway Flats",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Modern residential communities near Delhi border",
    },
    {
      title: "Flats Under ₹1 Crore",
      href: "/projects",
      description: "Value-driven housing for smart property buyers",
    },
    {
      title: "Gurgaon Property",
      href: "/upcoming-projects-in-gurugram",
      description: "Explore residential investment opportunities in Gurgaon",
    },
  ],

  ctaTitle: "Explore Ready to Move Flats in Gurgaon",
  ctaDescription:
    "Explore the best residential projects on Dwarka Expressway, Gurgaon's premier growth corridor connecting Delhi, IGI Airport, and Cyber City. Compare verified properties, new residential projects in Gurgaon, and investment opportunities across the most sought-after sectors of Dwarka Expressway.",
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
        title="Ready to Move Flats in Gurgaon | Immediate Possession Homes"
        description="Explore verified ready to move flats in Gurgaon across Dwarka Expressway, New Gurgaon, and premium residential sectors. Immediate possession, established infrastructure, and excellent connectivity to Delhi."
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
