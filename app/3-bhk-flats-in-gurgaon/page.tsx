import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/3-bhk-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "3 BHK flats in Dwarka Expressway : High-ROI Elite Blocks",
  description:
    "Discover Spacious 3BHK apartments in Gurgaon Top Sectors. — Trusted builders, Flexible payment plans & Ready-to-move options. Book a free site visit today.",
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
  heroTagline: "Luxury 3BHK Flats in Gurgaon – Elevate Your Lifestyle",
  heroTitle: "Luxury 3BHK Flats in Gurgaon – Elevate Your Lifestyle",
  heroSubtitle:
    "Enjoy gated communities, smart security systems, and high-quality finishes. Step into a home that blends seamless connectivity, world-class amenities, and modern design. Every corner reflects comfort, style, and aspiration.",
  heroImage: "/assets/img/3bhk-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "0 km", label: "From Dwarka Expressway" },
    { icon: "plane", value: "15 mins", label: "To IGI Airport" },
    { icon: "shield", value: "RERA", label: "Approved Projects" },
  ],

  quickFacts: [
    { label: "Ideal Family Size", value: "4–5 Members" },
    { label: "Investment Appreciation", value: "12–15% YoY" },
    { label: "Rental Yield", value: "3–4%" },
    { label: "Tax Benefits", value: "Up to ₹5L" },
  ],

  projectsSectionTitle: "Premium 3BHK Projects at a Glance – Gurgaon",
  projectsSectionSubtitle:
    "Compare the top ready-to-move, under-construction, and new-launch 3BHK projects in Gurgaon. Find the perfect home for your budget, lifestyle, and investment goals.",

  projectCards: [
    {
      name: "Emaar DigiHomes",
      location: "Sector 62 (Near Dwarka Expressway)",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "3 BHK + Utility",
      sizeRange: "2,538 – 2,588 Sq.Ft.",
      startingPrice: "₹5.5 Cr*",
      connectivity: "0 km from NH-8 Highway",
      href: "/projects",
    },
    {
      name: "Sobha City",
      location: "Sector 108, Dwarka Expressway",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "dark",
      configuration: "3 BHK Premium",
      sizeRange: "1,711 – 2,072 Sq.Ft.",
      startingPrice: "₹3.2 Cr*",
      connectivity: "10 mins to IGI Airport",
      href: "/projects",
    },
    {
      name: "M3M Capital",
      location: "Sector 113, Dwarka Expressway",
      status: "New Launch",
      statusColor: "red",
      headerColor: "amber",
      configuration: "3.5 BHK",
      sizeRange: "1,665 – 2,055 Sq.Ft.",
      startingPrice: "₹2.8 Cr*",
      connectivity: "Zero km from Delhi Border",
      href: "/projects",
    },
  ],

  layoutTitle: "The Anatomy of a Dwarka Expressway 3BHK Investment",
  layoutContent: [
    "A property on Dwarka Expressway offers the perfect blend of space, affordability, and strategic location. Whether you are considering a commercial property in Gurgaon or a premium 3BHK apartment, this corridor ensures optimal investment potential and lifestyle convenience.",
    "Unlike older sectors, properties here offer expansive layouts and floor plans ideal for offices, retail shops, or family homes. Cross-ventilated spaces with natural sunlight ensure perfect comfort, while gated communities with 24/7 security provide safety for families and commercial tenants alike.",
    "Leading developers like Godrej, M3M, Sobha, and Experion provide thoughtfully designed apartments, commercial units, and mixed-use properties with modern architectural standards. Premium connectivity to schools, hospitals, metro stations, and retail hubs within 10–15 minutes completes the picture.",
  ],
  layoutHighlights: [
    "Flexible floor plans with dedicated balconies, utility areas, or workspace zones",
    "Master-planned gated communities with landscaped gardens, clubhouse, and amenities",
    "Premium locations offering high rental and long-term appreciation potential",
    "Nearby essential services – premium schools, hospitals, and commercial hubs within easy reach",
  ],
  layoutImage: "/assets/img/3bhk-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Elite Education",
      description:
        "Access top international schools like American Embassy School, Pathways, and GD Goenka within 15–20 minutes. Euro International School is just 10 minutes away.",
    },
    {
      icon: "hospital",
      title: "Premium Healthcare",
      description:
        "World-class hospitals including Medanta, Max, and Fortis with VIP services and comprehensive healthcare. Fortis Hospital is just 5 minutes away.",
    },
    {
      icon: "connectivity",
      title: "Executive Connectivity",
      description:
        "Private car access to IGI Airport in 15 minutes. Metro stations within 5 minutes. Select properties include helicopter pad access for seamless executive travel.",
    },
  ],

  localAreaTitle: "Family-Friendly Neighborhoods – Dwarka Expressway",
  localAreaDescription:
    "Properties here offer safe, convenient living with schools, hospitals, malls, and metro connectivity nearby. These neighborhoods balance lifestyle and business perfectly.",
  nearbyPlaces: [
    { name: "Euro International School", distance: "10 minutes", type: "school" },
    { name: "GD Goenka School", distance: "5 minutes", type: "school" },
    { name: "Medanta Hospital", distance: "10 minutes", type: "hospital" },
    { name: "Fortis Hospital", distance: "5 minutes", type: "hospital" },
    { name: "Ambience Mall", distance: "20 minutes", type: "mall" },
    { name: "Metro Stations", distance: "5 minutes", type: "metro" },
  ],

  faqs: [
    {
      question: "What is the average price of a 3BHK on Dwarka Expressway?",
      answer:
        "The average price of 3BHK flats ranges from ₹1.8 Cr to ₹2.8 Cr depending on the sector, developer, and construction stage. Premium sectors like 106 and 113 command higher prices due to proximity to Delhi and modern amenities. Investors can also explore commercial property in Gurgaon for strong rental yields and long-term appreciation.",
    },
    {
      question: "Which are the best sectors for families to live in?",
      answer:
        "Sectors 102, 106, 108, 113, and 114 are popular for residential buyers. Sector 108 offers established communities ideal for families; Sector 106 provides luxury housing and premium amenities; Sector 113 has close connectivity to Delhi; and Sector 102 offers competitive pricing and infrastructure.",
    },
    {
      question: "Are these properties good for investment or end-use?",
      answer:
        "Both. Ready-to-move and under-construction flats provide excellent end-user comfort and long-term investment opportunities. Commercial investors can consider nearby commercial projects in Gurgaon or commercial shops for additional income streams.",
    },
    {
      question: "What is the average size of 3BHK flats in Gurgaon?",
      answer:
        "Sizes range from 1,665 to 2,588 sq. ft., offering ample space for families, guests, or home offices. Developers like Sobha, Godrej, and M3M ensure thoughtful layouts and dual-aspect designs. Nearby commercial property for sale in Gurgaon can complement residential investments for mixed-use planning.",
    },
    {
      question: "What amenities come with 3BHK flats in Gurgaon?",
      answer:
        "Amenities include swimming pools, gyms, landscaped gardens, clubhouses, and 24/7 security. The corridor offers schools, hospitals, malls, and metro stations within 5–20 minutes, making it ideal for families and investors seeking commercial space for sale in Gurgaon with lifestyle convenience.",
    },
  ],

  relatedLinks: [
    {
      title: "4 BHK Flats in Gurgaon",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Looking for more space? Explore luxury 4BHK options with premium amenities.",
    },
    {
      title: "2 BHK Flats in Gurgaon",
      href: "/2-bhk-flats-in-gurgaon",
      description: "Compact and affordable options for couples and small families.",
    },
    {
      title: "Ready-to-Move Flats",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession apartments for quick relocation or investment.",
    },
    {
      title: "Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Browse all projects on Dwarka Expressway, including new launches and premium communities.",
    },
    {
      title: "Upcoming Projects",
      href: "/upcoming-projects-in-gurugram",
      description: "Discover new launches with pre-launch pricing and early-bird benefits.",
    },
    {
      title: "Commercial Property",
      href: "/commercial-property-in-gurgaon",
      description: "Find verified commercial property in Gurgaon, commercial projects, shops, and space for sale.",
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
        title="3 BHK flats in Dwarka Expressway : High-ROI Elite Blocks	"
        description="Discover Spacious 3BHK apartments in Gurgaon Top Sectors. — Trusted builders, Flexible payment plans & Ready-to-move options. Book a free site visit today."
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
