import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/upcoming-projects-in-gurugram`;

export const metadata: Metadata = {
  title: "New Upcoming Projects in Gurgaon 2026: RERA-Certified",
  description:
    "Find your perfect Flat on Dwarka Expressway —  Pre-launch prices, Flexible payment plans & Top-rated builders. Get the Curated list & a free Callback today.",
  keywords:
    "upcoming projects in gurugram, new launch in gurgaon, new upcoming projects in gurgaon, upcoming projects on dwarka expressway, pre launch residential projects in gurgaon, properties on dwarka expressway, new commercial projects in gurgaon, affordable housing dwarka expressway, Best Projects on Dwarka Expressway, flat in dwarka expressway",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Upcoming Projects in Gurugram | New Launches 2026",
    description:
      "Early bird offers on upcoming projects in Gurugram. Pre-launch prices, payment flexibility & maximum appreciation potential.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Upcoming Projects in Gurugram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Step into a New Launch in Gurgaon",
  heroTitle: "Upcoming Projects in Gurugram",
  heroSubtitle:
    "Affordable housing on Dwarka Expressway. Discover the best upcoming projects in Gurugram offering modern design, strategic locations, and attractive pricing.",
  heroImage: "/assets/img/upcoming-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "0–15 mins", label: "To Delhi Border" },
    { icon: "plane", value: "12 mins", label: "To IGI Airport" },
    { icon: "shield", value: "RERA", label: "Certified Projects" },
  ],

  quickFacts: [
    { label: "Family Size", value: "4–5 Members" },
    { label: "Investment Growth", value: "12–15%" },
    { label: "Rental Yield", value: "3–4%" },
    { label: "Tax Benefits", value: "Up to ₹5L" },
  ],

  projectsSectionTitle: "Upcoming Projects in Gurugram – Best Flats & Commercial Spaces on Dwarka Expressway",
  projectsSectionSubtitle:
    "Perfect start for young professionals, couples, and investors seeking new upcoming projects in Gurugram. Enjoy affordable housing on Dwarka Expressway with modern layouts, prime connectivity, and lifestyle-rich amenities.",

  projectCards: [
    {
      name: "Skyline Heights",
      location: "Sector 64, Dwarka Expressway",
      status: "Ready to Move",
      statusColor: "red",
      headerColor: "primary",
      configuration: "3 BHK + Study",
      sizeRange: "2,200 – 2,500 Sq.Ft.",
      startingPrice: "₹4.9 Cr*",
      connectivity: "5 mins to NH-8 Highway",
      href: "/projects",
    },
    {
      name: "Urban Oasis",
      location: "Sector 110, Dwarka Expressway",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "dark",
      configuration: "3 BHK Premium",
      sizeRange: "1,750 – 2,050 Sq.Ft.",
      startingPrice: "₹3.5 Cr*",
      connectivity: "12 mins to IGI Airport",
      href: "/projects",
    },
    {
      name: "Vista Residences",
      location: "Sector 115, Dwarka Expressway",
      status: "New Launch",
      statusColor: "red",
      headerColor: "amber",
      configuration: "3.5 BHK",
      sizeRange: "1,680 – 2,100 Sq.Ft.",
      startingPrice: "₹3.0 Cr*",
      connectivity: "Metro & Delhi Border Advantage",
      href: "/projects",
    },
  ],

  layoutTitle: "The Anatomy of Upcoming Projects in Gurugram",
  layoutContent: [
    "Perfect start for young professionals, couples, and investors seeking new upcoming projects in Gurugram or affordable housing on Dwarka Expressway. These flats and commercial spaces offer modern layouts, premium amenities, and strategic locations for both living and investment.",
    "Expansive, flexible floor plans are designed for both flats and commercial spaces, with cross-ventilated layouts that bring in natural light and create bright, airy interiors. Every project is part of a master-planned gated community with 24/7 security.",
    "Looking for more opportunities? Explore commercial projects in Gurgaon on Dwarka Expressway. Prime connectivity to Metro, IGI Airport, and Delhi Border makes these projects ideal for investors and NRIs seeking high appreciation and rental yield.",
  ],
  layoutHighlights: [
    "Expansive layouts: flexible floor plans for flats or commercial spaces",
    "Natural light: cross-ventilated design for bright, airy interiors",
    "Secure communities: master-planned gated projects with 24/7 security",
    "Nearby essentials: premium schools, hospitals, and retail within 10–15 mins",
  ],
  layoutImage: "/assets/img/upcoming-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Smart Education",
      description:
        "Access premium international schools such as Pathways, GD Goenka, and Heritage within 10–20 minutes. Euro International School is 5–10 mins away.",
    },
    {
      icon: "hospital",
      title: "Advanced Healthcare",
      description:
        "World-class hospitals including Medanta (10–15 mins), Fortis (12–18 mins), Max, and Artemis with VIP services and comprehensive care.",
    },
    {
      icon: "connectivity",
      title: "Seamless Connectivity",
      description:
        "Metro stations, IGI Airport, and retail hubs within 10–15 minutes. Ambience Mall is 15–20 mins away. Select projects include helicopter pad access.",
    },
  ],

  localAreaTitle: "Family-Friendly Neighborhoods – Upcoming Projects in Gurugram",
  localAreaDescription:
    "The neighborhoods combine convenience, safety, and lifestyle benefits while staying close to essential amenities — ideal for families, professionals, and investors.",
  nearbyPlaces: [
    { name: "Euro International School", distance: "5–10 mins", type: "school" },
    { name: "GD Goenka School", distance: "8–12 mins", type: "school" },
    { name: "Medanta Hospital", distance: "10–15 mins", type: "hospital" },
    { name: "Fortis Hospital", distance: "12–18 mins", type: "hospital" },
    { name: "Ambience Mall", distance: "15–20 mins", type: "highway" },
    { name: "Metro Connectivity", distance: "10–15 mins", type: "metro" },
  ],

  faqs: [
    {
      question: "What is the average price of flats in upcoming projects in Gurugram?",
      answer:
        "Prices typically range from ₹2.8 Cr to ₹5.5 Cr depending on the sector, project type, and developer. New launch in Gurgaon and affordable housing on Dwarka Expressway offer competitive options for both end-users and investors.",
    },
    {
      question: "Which are the best sectors for families or investors?",
      answer:
        "Sectors 62, 108, and 113 on Dwarka Expressway are highly preferred. Sector 62 offers ready-to-move with prime connectivity, Sector 108 has under-construction premium amenities, and Sector 113 features new launches with strategic investment potential.",
    },
    {
      question: "Are these properties better for investment or end-use?",
      answer:
        "Both. Flats in upcoming projects on Dwarka Expressway provide modern living for families and high rental or capital appreciation for investors. New commercial projects in Gurgaon nearby enhance the investment value.",
    },
    {
      question: "What is the average size of flats in Gurugram upcoming projects?",
      answer:
        "Sizes typically range from 1,650 to 2,588 sq. ft., ideal for families, home offices, or small commercial uses in mixed-use developments.",
    },
    {
      question: "What amenities come with these projects?",
      answer:
        "Amenities include gated communities, landscaped gardens, clubhouses, gyms, swimming pools, and 24/7 security. Nearby essentials include schools, hospitals, metro connectivity, and retail hubs, making them ideal for both residential and commercial investment.",
    },
  ],

  relatedLinks: [
    {
      title: "4 BHK Flats in Gurugram",
      href: "/4-bhk-flats-in-gurgaon",
      description: "More space and premium amenities for growing families",
    },
    {
      title: "2 BHK Flats in Gurugram",
      href: "/2-bhk-flats-in-gurgaon",
      description: "Compact and affordable options for couples or small families",
    },
    {
      title: "Ready-to-Move Flats",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession units in strategic locations",
    },
    {
      title: "Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Browse all pre-launch residential projects on Dwarka Expressway",
    },
    {
      title: "Upcoming Projects",
      href: "/upcoming-projects-in-gurugram",
      description: "Discover new launch in Gurgaon with pre-launch pricing",
    },
    {
      title: "Commercial Property",
      href: "/commercial-property-in-gurgaon",
      description: "Explore flats on Dwarka Expressway and affordable housing options",
    },
  ],
};

const pageFaqs = pageContent.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function UpcomingProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Upcoming Projects in Gurugram", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="New Upcoming Projects in Gurgaon 2026: RERA-Certified"
        description="Find your perfect Flat on Dwarka Expressway —  Pre-launch prices, Flexible payment plans & Top-rated builders. Get the Curated list & a free Callback today."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="Upcoming Projects in Gurugram"
      />
    </>
  );
}
