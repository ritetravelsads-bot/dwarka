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
  heroTitle: "Elevate Your Lifestyle with Luxury 3BHK Flats in Gurgaon",
  heroSubtitle:
    "Experience seamless connectivity and world-class amenities. Step into a home designed for modern living, where every detail reflects your aspiration.",

  trustIndicators: [
    { icon: "route", value: "0 km", label: "From Expressway" },
    { icon: "plane", value: "15 Mins", label: "To IGI Airport" },
    { icon: "shield", value: "RERA", label: "Approved Projects" },
  ],

  quickFacts: [
    { label: "Price Range", value: "1.2-3.5 Cr" },
    { label: "Size Range", value: "1500-2500 sq.ft" },
    { label: "Top Developers", value: "15+" },
    { label: "Available Units", value: "3,000+" },
  ],

  projectsSectionTitle: "Premium 3BHK Projects at a Glance",
  projectsSectionSubtitle: "Compare the top ready-to-move and under-construction 3BHK projects. Find the perfect fit for your budget and lifestyle requirements.",
  
  projectCards: [
    {
      name: "Emaar DigiHomes",
      location: "Sector 62 (Near Dwarka Exp)",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "3 BHK + Utility",
      sizeRange: "2,538 - 2,588 Sq.Ft.",
      startingPrice: "Rs. 5.5 Cr*",
      connectivity: "0 Km from NH-8 Highway",
      href: "/projects",
    },
    {
      name: "Sobha City",
      location: "Sector 108, Dwarka Exp",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "dark",
      configuration: "3 BHK Premium",
      sizeRange: "1,711 - 2,072 Sq.Ft.",
      startingPrice: "Rs. 3.2 Cr*",
      connectivity: "10 Mins to IGI Airport",
      href: "/projects",
    },
    {
      name: "M3M Capital",
      location: "Sector 113, Dwarka Exp",
      status: "New Launch",
      statusColor: "red",
      headerColor: "amber",
      configuration: "3.5 BHK Golf Estate",
      sizeRange: "1,665 - 2,055 Sq.Ft.",
      startingPrice: "Rs. 2.8 Cr*",
      connectivity: "Zero KM from Delhi",
      href: "/projects",
    },
  ],

  layoutTitle: "The Anatomy of a Dwarka Expressway 3BHK",
  layoutContent: [
    "A 3 BHK apartment in Gurgaon offers the ideal balance of space and affordability for growing families. With typical sizes ranging from 1500 to 2500 sq.ft, these homes provide dedicated spaces for parents, children, and guests or a home office.",
    "Unlike older sectors, a 3BHK on Dwarka Expressway offers wider deck balconies and dedicated utility rooms. You get more usable carpet area for your investment with modern architectural norms ensuring dual-aspect configurations.",
    "Top developers like Godrej, M3M, Sobha, and Experion offer 3 BHK apartments with thoughtful floor plans, premium specifications, and world-class amenities including swimming pools, gymnasiums, and landscaped gardens.",
  ],
  layoutHighlights: [
    "Expansive floor plans with wider deck balconies",
    "Cross-ventilated design with natural sunlight",
    "Master-planned gated communities",
    "Premium schools within 10-minute radius",
    "Multi-specialty hospitals nearby",
    "Safe, gated communities with 24/7 security",
  ],

  localFeatures: [
    {
      icon: "school",
      title: "Premium Education",
      description: "Live within 10 minutes of Euro International School and DPS Sec 84. Ensure a zero-stress morning routine for your children without hitting highway traffic.",
    },
    {
      icon: "hospital",
      title: "World-Class Healthcare",
      description: "Immediate access to Manipal Hospital and Aarvy Healthcare. Peace of mind knowing top-tier medical facilities are just a short drive away.",
    },
    {
      icon: "connectivity",
      title: "Global Connectivity",
      description: "Signal-free drive to Yashobhoomi (IICC) and IGI Airport. Upcoming metro extension will further link your luxury 3BHK to the rest of NCR seamlessly.",
    },
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
      question: "What is the average price of a 3BHK on Dwarka Expressway?",
      answer:
        "Currently, a premium 3BHK apartment on Dwarka Expressway ranges between Rs. 2.5 Cr to Rs. 4.5 Cr, depending on the sector, builder reputation, and construction status. Ready-to-move projects command a slight premium over new launches. This pricing reflects the significant infrastructure upgrades and proximity to Delhi.",
    },
    {
      question: "Which are the best sectors for families to live in?",
      answer:
        "For end-users, Sectors 108, 109, and 113 are highly recommended due to their Zero KM to Delhi status. Alternatively, Sectors 83 to 88 offer excellent established social infrastructure, including operational schools and neighborhood markets, making them ideal for families moving in immediately.",
    },
    {
      question: "Are these properties good for investment or end-use?",
      answer:
        "Both. As an end-user, you benefit from luxury amenities and uncluttered connectivity. From an investment perspective, luxury properties on Dwarka Expressway have seen consistent appreciation due to the opening of the NH-8 to Delhi stretch and upcoming developments like the Global City project.",
    },
    {
      question: "What is the average size of 3 BHK flats in Gurgaon?",
      answer:
        "3 BHK flats in Gurgaon typically range from 1500 to 2500 sq.ft super built-up area. Carpet area usually ranges from 1100-1800 sq.ft. Luxury 3 BHK apartments can go up to 3000+ sq.ft.",
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
