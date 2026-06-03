import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/4-bhk-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "4 BHK Flats in Dwarka: Verified Top-Rated Gated Societies",
  description:
    "Buy 4 BHK luxury Apartments in Gurgaon. Our Experts rank the Best Projects by Connectivity, Builder reputation & Value. Get the free list & a callback today.",
  keywords:
    "4bhk, 4 bhk luxury apartments in gurgaon, 4 bhk flats in gurgaon, 4 bhk flats in dwarka, 4bhk in gurgaon, 4 bhk apartment in gurgaon, 4 bhk builder floor in gurgaon, 4 bhk home, 4 bhk layout",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "4 BHK Flats in Gurgaon | Ultra-Luxury Living",
    description:
      "Premium 4 BHK penthouses and apartments in Gurgaon. Expansive layouts, private terraces, and world-class amenities for discerning buyers.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "4 BHK Flats in Gurgaon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Ultra-Luxury Living",
  heroTitle: "Experience Ultra-Luxury 4BHK Flats in Gurgaon",
  heroSubtitle:
    "Experience the pinnacle of luxury living with expansive 4 bedroom residences featuring private terraces, premium specifications, and exclusive amenities designed for the discerning few.",
  heroImage: "/assets/img/4bhk-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "Premium", label: "Locations Only" },
    { icon: "plane", value: "15 Mins", label: "To IGI Airport" },
    { icon: "shield", value: "Exclusive", label: "Limited Units" },
  ],

  quickFacts: [
    { label: "Prestige Address", value: "Top 1%" },
    { label: "Space Freedom", value: "3000+ sqft" },
    { label: "Appreciation", value: "15-18% YoY" },
    { label: "Rental Premium", value: "1.5-3L/mo" },
  ],

  projectsSectionTitle: "Exclusive 4BHK Residences at a Glance",
  projectsSectionSubtitle: "Discover limited-inventory luxury 4BHK apartments and penthouses from the most prestigious developers.",

  projectCards: [
    {
      name: "M3M Mansion",
      location: "Sector 113, Dwarka Exp",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "4.5 BHK Penthouse",
      sizeRange: "4,500 - 5,500 Sq.Ft.",
      startingPrice: "Rs. 6.5 Cr*",
      connectivity: "Zero KM to Delhi",
      href: "/projects",
    },
    {
      name: "DLF Camellias",
      location: "Golf Course Road",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "dark",
      configuration: "4 BHK Ultra Luxury",
      sizeRange: "5,000 - 7,000 Sq.Ft.",
      startingPrice: "Rs. 12 Cr*",
      connectivity: "Premium Location",
      href: "/projects",
    },
    {
      name: "Sobha City Penthouse",
      location: "Sector 108, Dwarka Exp",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "amber",
      configuration: "4 BHK + Terrace",
      sizeRange: "3,500 - 4,200 Sq.Ft.",
      startingPrice: "Rs. 4.5 Cr*",
      connectivity: "Sports Lifestyle",
      href: "/projects",
    },
  ],

  layoutTitle: "Why 4 BHK Flats in Gurgaon Define Luxury Living",
  layoutContent: [
    "A 4 BHK apartment in Gurgaon represents the ultimate in urban luxury. These expansive residences, typically ranging from 2500 to 5000 sq.ft, offer separate spaces for each family member plus dedicated areas for entertainment, home office, and staff quarters.",
    "4 BHK flats on Dwarka Expressway and Golf Course Road come with premium specifications including Italian marble flooring, modular kitchens with imported appliances, VRV air conditioning, and smart home automation. Many feature private terraces and panoramic views.",
    "Top developers offer limited 4 BHK inventory, making these apartments highly exclusive. Projects like M3M Mansion, Sobha City Penthouses, and Godrej Platinum feature ultra-luxury amenities including private pools, concierge services, and club memberships.",
  ],
  layoutHighlights: [
    "Expansive 2500-5000 sq.ft living spaces",
    "Private terraces and balconies with views",
    "Smart home automation systems",
    "Dedicated servant quarters with attached bath",
  ],
  layoutImage: "/assets/img/4bhk-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Elite Education",
      description: "Access to international schools like American Embassy School, Pathways, and GD Goenka within 15-20 minutes.",
    },
    {
      icon: "hospital",
      title: "Premium Healthcare",
      description: "World-class hospitals including Medanta, Max, and Fortis with VIP services and concierge healthcare.",
    },
    {
      icon: "connectivity",
      title: "Executive Connectivity",
      description: "Private car access to IGI Airport in 15 mins. Helicopter pad access in select properties.",
    },
  ],

  localAreaTitle: "Premium Addresses",
  localAreaDescription:
    "4 BHK apartments are located in Gurgaon's most prestigious addresses, offering proximity to exclusive clubs, international schools, and fine dining establishments.",
  nearbyPlaces: [
    { name: "DLF Golf & Country Club", distance: "10-15 min", type: "mall" },
    { name: "American Embassy School", distance: "20 min", type: "school" },
    { name: "Medanta - The Medicity", distance: "12-18 min", type: "hospital" },
    { name: "IGI Airport - Terminal 3", distance: "15-20 min", type: "airport" },
    { name: "Cyber Hub", distance: "15-20 min", type: "mall" },
    { name: "HUDA City Centre Metro", distance: "12-18 min", type: "metro" },
  ],

  faqs: [
    {
      question: "What is the price of 4 BHK flats in Gurgaon?",
      answer:
        "4 BHK flats in Gurgaon range from 2.5 Crore to 6+ Crore. On Dwarka Expressway, luxury 4 BHK apartments start from 2.5-3 Crore, while ultra-luxury penthouses on Golf Course Road can exceed 10 Crore.",
    },
    {
      question: "What is the size of 4 BHK apartments in Gurgaon?",
      answer:
        "4 BHK apartments in Gurgaon typically range from 2500 to 5000 sq.ft super built-up area. Carpet area usually ranges from 1800-3500 sq.ft. Penthouse configurations can exceed 6000 sq.ft.",
    },
    {
      question: "Which are the best 4 BHK projects in Gurgaon?",
      answer:
        "Top 4 BHK projects include M3M Mansion (ultra-luxury), Sobha City Penthouses (sports lifestyle), Godrej Platinum (premium amenities), and DLF Camellias (iconic address). Each offers exclusive features and limited inventory.",
    },
    {
      question: "Do 4 BHK flats include servant quarters?",
      answer:
        "Yes, most 4 BHK flats in Gurgaon include dedicated servant quarters with attached bathroom and separate entry. Premium units may have multiple staff rooms.",
    },
    {
      question: "What amenities are exclusive to 4 BHK residents?",
      answer:
        "Exclusive amenities include private pool access, dedicated concierge, premium club membership, private elevator lobby, multiple parking with EV charging, and sometimes private terrace gardens.",
    },
  ],

  relatedLinks: [
    {
      title: "3 BHK Flats in Gurgaon",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Spacious family apartments at lower price points",
    },
    {
      title: "Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "All projects on Dwarka Expressway",
    },
    {
      title: "Ready to Move Flats",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession luxury homes",
    },
    {
      title: "2 BHK Flats",
      href: "/2-bhk-flats-in-gurgaon",
      description: "Compact luxury options",
    },
    {
      title: "Upcoming Projects",
      href: "/upcoming-projects-in-gurugram",
      description: "New luxury launches",
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

export default function FourBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "4 BHK Flats in Gurgaon", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="4 BHK Flats in Dwarka: Verified Top-Rated Gated Societies"
        description="Buy 4 BHK luxury Apartments in Gurgaon. Our Experts rank the Best Projects by Connectivity, Builder reputation & Value. Get the free list & a callback today"
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="4 BHK Flats in Gurgaon"
      />
    </>
  );
}
