import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/residential-projects-on-dwarka-expressway`;

export const metadata: Metadata = {
  title: "Residential Projects on Dwarka Expressway | New Launches 2026",
  description:
    "Explore premium residential projects on Dwarka Expressway. Find luxury apartments, ready-to-move flats & new launches from top developers. RERA verified properties.",
  keywords:
    "residential projects on dwarka expressway, dwarka expressway residential projects, property in dwarka expressway, new residential projects in gurgaon, dwarka expressway flats",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Residential Projects on Dwarka Expressway | Premium Living",
    description:
      "Discover luxury residential projects on Dwarka Expressway. 2/3/4 BHK apartments from top developers with world-class amenities.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Residential Projects on Dwarka Expressway",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Premium Living Awaits",
  heroTitle: "Premium Residential Projects on Dwarka Expressway",
  heroSubtitle:
    "Discover your dream home along India's most sought-after urban corridor. From luxury penthouses to smart apartments, find residences that match your lifestyle.",
  heroImage: "/assets/img/residential-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "27.6 km", label: "16-Lane Highway" },
    { icon: "plane", value: "15 Mins", label: "To IGI Airport" },
    { icon: "shield", value: "20+", label: "Top Developers" },
  ],

  quickFacts: [
    { label: "Appreciation", value: "8-12% YoY" },
    { label: "Green Living", value: "Low Density" },
    { label: "Metro Coming", value: "2027" },
    { label: "Delhi Access", value: "Zero KM" },
  ],

  projectsSectionTitle: "Top Residential Projects at a Glance",
  projectsSectionSubtitle: "Compare the best residential projects on Dwarka Expressway from top developers.",

  projectCards: [
    {
      name: "Sobha City",
      location: "Sector 108, Dwarka Exp",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "primary",
      configuration: "2/3/4 BHK",
      sizeRange: "1,400 - 3,500 Sq.Ft.",
      startingPrice: "Rs. 1.8 Cr*",
      connectivity: "Sports Lifestyle",
      href: "/projects",
    },
    {
      name: "M3M Capital",
      location: "Sector 113, Dwarka Exp",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "dark",
      configuration: "3/4 BHK Golf Estate",
      sizeRange: "1,665 - 3,500 Sq.Ft.",
      startingPrice: "Rs. 2.5 Cr*",
      connectivity: "Zero KM Delhi",
      href: "/projects",
    },
    {
      name: "Godrej Summit",
      location: "Sector 104, Dwarka Exp",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "amber",
      configuration: "2/3/4 BHK",
      sizeRange: "1,150 - 3,200 Sq.Ft.",
      startingPrice: "Rs. 85 Lakh*",
      connectivity: "Family Living",
      href: "/projects",
    },
  ],

  layoutTitle: "Why Choose Residential Projects on Dwarka Expressway?",
  layoutContent: [
    "Dwarka Expressway has emerged as the most promising residential destination in Delhi-NCR. The 27.6 km, 16-lane highway connects Delhi's IGI Airport to Gurgaon, offering seamless connectivity and a pollution-free environment.",
    "Residential projects on Dwarka Expressway offer a unique blend of luxury, convenience, and investment potential. With the expressway now fully operational, property values have witnessed steady appreciation of 8-12% annually.",
    "Top developers like Godrej, M3M, Sobha, and Experion have launched premium residential projects here, featuring world-class amenities including clubhouses, swimming pools, landscaped gardens, and smart home technology.",
  ],
  layoutHighlights: [
    "Direct connectivity to IGI Airport in just 15-20 minutes",
    "Metro extension planned for enhanced accessibility",
    "Green belt development with low-density living",
    "Premium schools and hospitals within 10 minutes",
  ],
  layoutImage: "/assets/img/residential-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Premium Education",
      description: "Euro International School, GD Goenka, and DPS within 10 minutes. Zero-stress school commute.",
    },
    {
      icon: "hospital",
      title: "World-Class Healthcare",
      description: "Manipal Hospital, Medanta, and Aarvy Healthcare nearby. Top-tier medical care at your doorstep.",
    },
    {
      icon: "connectivity",
      title: "Seamless Connectivity",
      description: "16-lane expressway to Delhi, upcoming metro, and proximity to IGI Airport and Cyber City.",
    },
  ],

  localAreaTitle: "Neighborhood Highlights",
  localAreaDescription:
    "Live within minutes of premium schools, multi-specialty hospitals, and shopping destinations. The Dwarka Expressway corridor offers an integrated township experience with everything you need nearby.",
  nearbyPlaces: [
    { name: "Euro International School", distance: "5 min drive", type: "school" },
    { name: "Manipal Hospital", distance: "8 min drive", type: "hospital" },
    { name: "Ambience Mall", distance: "12 min drive", type: "mall" },
    { name: "Sector 21 Metro Station", distance: "10 min drive", type: "metro" },
    { name: "IGI Airport", distance: "15-20 min drive", type: "airport" },
    { name: "NH-48 Highway", distance: "5 min drive", type: "highway" },
  ],

  faqs: [
    {
      question: "What is the average price of residential projects on Dwarka Expressway?",
      answer:
        "Residential projects on Dwarka Expressway range from 50 Lakh to 6+ Crore depending on the configuration, developer, and amenities. 2 BHK apartments start around 50-80 Lakh, 3 BHK from 1.2-3 Crore, and 4 BHK luxury units from 2.5-6+ Crore.",
    },
    {
      question: "Which are the best residential projects on Dwarka Expressway?",
      answer:
        "Top residential projects include Sobha City (sports lifestyle), M3M Capital (ultra-luxury), Godrej Summit (family-focused), and Experion Windchants (green living). Each offers unique features catering to different lifestyle preferences.",
    },
    {
      question: "Is Dwarka Expressway good for residential investment?",
      answer:
        "Yes, Dwarka Expressway is excellent for residential investment with 8-12% annual appreciation. The completed infrastructure, upcoming metro extension, and proximity to business hubs make it a prime investment destination.",
    },
    {
      question: "What amenities do residential projects on Dwarka Expressway offer?",
      answer:
        "Most residential projects offer clubhouses, swimming pools, gymnasiums, landscaped gardens, kids play areas, jogging tracks, sports facilities, 24/7 security, power backup, and smart home features.",
    },
    {
      question: "Are there ready-to-move residential projects on Dwarka Expressway?",
      answer:
        "Yes, several residential projects are ready for possession including units in Godrej Summit, M3M Merlin, and Sobha City. About 25,000 units are expected to be ready by 2027.",
    },
  ],

  relatedLinks: [
    {
      title: "3 BHK Flats in Gurgaon",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Spacious 3 bedroom apartments for families",
    },
    {
      title: "4 BHK Flats in Gurgaon",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Luxury 4 bedroom penthouses & apartments",
    },
    {
      title: "Ready to Move Flats",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Move-in ready apartments with possession",
    },
    {
      title: "Upcoming Projects",
      href: "/upcoming-projects-in-gurugram",
      description: "New launches & pre-launch opportunities",
    },
    {
      title: "Commercial Property",
      href: "/commercial-property-in-gurgaon",
      description: "Office spaces & retail shops",
    },
    {
      title: "2 BHK Flats",
      href: "/2-bhk-flats-in-gurgaon",
      description: "Affordable options for couples",
    },
  ],
};

const pageFaqs = pageContent.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function ResidentialProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Residential Projects on Dwarka Expressway", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="Residential Projects on Dwarka Expressway"
        description="Explore premium residential projects on Dwarka Expressway. Find luxury apartments, ready-to-move flats & new launches from top developers."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="Residential Projects on Dwarka Expressway"
      />
    </>
  );
}
