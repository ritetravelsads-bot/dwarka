import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/commercial-property-in-gurgaon`;

export const metadata: Metadata = {
  title: "Buy Commercial Property Gurgaon 2025 – Trusted Builders",
  description:
    "Find verified Commercial spaces for sale in Gurgaon — Offices & showrooms by India's most Trusted developers. Limited Inventory. Schedule your site visit now.",
  keywords:
    "commercial projects in gurgaon, commercial property for sale in gurgaon, commercial shops in gurgaon, buy commercial property in gurgaon, commercial space for sale in gurgaon, commercial office space in gurgaon",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Commercial Property in Gurgaon | Prime Business Locations",
    description:
      "Invest in commercial property in Gurgaon. Office spaces, retail shops & showrooms in prime business districts with high ROI potential.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Commercial Property in Gurgaon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Smart Business Investment",
  heroTitle: "High-ROI Commercial Property in Gurgaon",
  heroSubtitle:
    "Invest in Gurgaon's thriving commercial real estate market. Premium office spaces, high-street retail, and commercial showrooms in India's corporate capital.",
  heroImage: "/assets/img/commercial-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "300+", label: "Fortune 500 HQs" },
    { icon: "plane", value: "6-9%", label: "Annual Yield" },
    { icon: "shield", value: "RERA", label: "Registered" },
  ],

  quickFacts: [
    { label: "Rental Yield", value: "6-9% p.a." },
    { label: "Occupancy Rate", value: "92%+" },
    { label: "Appreciation", value: "10-12% YoY" },
    { label: "Pre-Lease", value: "Available" },
  ],

  projectsSectionTitle: "Premium Commercial Projects at a Glance",
  projectsSectionSubtitle: "Compare top commercial properties across Gurgaon's prime business districts for maximum ROI.",

  projectCards: [
    {
      name: "M3M Corner Walk",
      location: "Sector 74, Gurgaon",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "Retail Shops",
      sizeRange: "250 - 2,000 Sq.Ft.",
      startingPrice: "Rs. 45 Lakh*",
      connectivity: "High Street Retail",
      href: "/projects",
    },
    {
      name: "AIPL Business Club",
      location: "Sector 62, Gurgaon",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "dark",
      configuration: "Office Space",
      sizeRange: "500 - 5,000 Sq.Ft.",
      startingPrice: "Rs. 65 Lakh*",
      connectivity: "Near Golf Course",
      href: "/projects",
    },
    {
      name: "Elan Epic",
      location: "Sector 70, Gurgaon",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "amber",
      configuration: "F&B + Retail",
      sizeRange: "300 - 3,000 Sq.Ft.",
      startingPrice: "Rs. 55 Lakh*",
      connectivity: "SPR Road",
      href: "/projects",
    },
  ],

  layoutTitle: "Why Invest in Commercial Property in Gurgaon?",
  layoutContent: [
    "Gurgaon is the corporate hub of North India, home to 300+ Fortune 500 companies and thousands of startups. The city's commercial real estate market offers exceptional investment opportunities with rental yields of 6-9% annually.",
    "Commercial properties in Gurgaon range from Grade A office spaces in Cyber City to high-street retail on Golf Course Road and emerging commercial hubs on Dwarka Expressway. Each location offers unique advantages for businesses and investors.",
    "With the upcoming metro extensions, improved road connectivity, and growing demand for quality commercial spaces, Gurgaon's commercial real estate market is poised for continued growth in 2026 and beyond.",
  ],
  layoutHighlights: [
    "Grade A office spaces with modern amenities",
    "High-street retail with maximum footfall",
    "6-9% rental yield on commercial properties",
    "Flexible payment plans and pre-lease options",
  ],
  layoutImage: "/assets/img/commercial-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Business Ecosystem",
      description: "Surrounded by Fortune 500 companies, MNCs, and thriving startups. Built-in customer base for your business.",
    },
    {
      icon: "hospital",
      title: "Employee Amenities",
      description: "Nearby healthcare facilities, food courts, and recreational options ensure employee satisfaction.",
    },
    {
      icon: "connectivity",
      title: "Transport Hub",
      description: "Metro connectivity, expressway access, and proximity to airport make commuting easy for clients and staff.",
    },
  ],

  localAreaTitle: "Prime Commercial Locations",
  localAreaDescription:
    "Gurgaon offers diverse commercial zones catering to different business needs - from IT/ITES corridors to retail high streets and mixed-use developments.",
  nearbyPlaces: [
    { name: "Cyber City", distance: "Business District", type: "highway" },
    { name: "Golf Course Road", distance: "Premium Corridor", type: "mall" },
    { name: "Dwarka Expressway", distance: "Emerging Hub", type: "highway" },
    { name: "Sohna Road", distance: "IT Corridor", type: "highway" },
    { name: "MG Road", distance: "Metro Connected", type: "metro" },
    { name: "Sector 29 Market", distance: "Retail Hub", type: "mall" },
  ],

  faqs: [
    {
      question: "What is the starting price for commercial property in Gurgaon?",
      answer:
        "Commercial property in Gurgaon starts from around 35 Lakh for small retail shops. Office spaces typically range from 50 Lakh to 5+ Crore depending on location, size, and amenities. Premium Grade A offices in Cyber City command higher prices.",
    },
    {
      question: "Which is the best location to buy commercial property in Gurgaon?",
      answer:
        "The best locations include Cyber City for corporate offices, Golf Course Road for premium retail, and Dwarka Expressway for emerging commercial opportunities. Each offers different advantages based on your investment goals.",
    },
    {
      question: "What is the rental yield on commercial property in Gurgaon?",
      answer:
        "Commercial properties in Gurgaon offer rental yields of 6-9% annually, significantly higher than residential properties. Pre-leased properties with established tenants offer assured returns and easier financing.",
    },
    {
      question: "Is commercial property in Gurgaon a good investment?",
      answer:
        "Yes, commercial property in Gurgaon is an excellent investment due to high rental yields, capital appreciation, and strong demand from MNCs and startups. The corporate ecosystem ensures consistent occupancy rates.",
    },
    {
      question: "What types of commercial property are available in Gurgaon?",
      answer:
        "Gurgaon offers various commercial property types including office spaces, retail shops, showrooms, food courts, co-working spaces, and mixed-use developments. Options range from small units to entire floors.",
    },
  ],

  relatedLinks: [
    {
      title: "Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Premium homes on Dwarka Expressway",
    },
    {
      title: "Upcoming Projects",
      href: "/upcoming-projects-in-gurugram",
      description: "New launches & pre-launch opportunities",
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
      title: "Ready to Move",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession properties",
    },
    {
      title: "2 BHK Flats",
      href: "/2-bhk-flats-in-gurgaon",
      description: "Compact living options",
    },
  ],
};

const pageFaqs = pageContent.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function CommercialPropertyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Commercial Property in Gurgaon", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="Buy Commercial Property Gurgaon 2025 – Trusted Builders"
        description="Find verified Commercial spaces for sale in Gurgaon — Offices & showrooms by India's most Trusted developers. Limited Inventory. Schedule your site visit now."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="Commercial Property in Gurgaon"
      />
    </>
  );
}
