import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/3-bhk-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "3 BHK Flats in Gurgaon | Luxury Apartments on Dwarka Expressway",
  description:
    "Discover premium 3 BHK flats in Gurgaon on Dwarka Expressway. Verified residential projects with modern amenities, excellent connectivity, trusted developers, and expert buying guidance.",
  keywords:
    "3 bhk flats in gurgaon, 3bhk in gurgaon, 3 bhk flats in gurgaon ready to move, 3 bhk builder floor in gurgaon, buy 3 bhk in gurgaon, 3 bhk apartment in gurgaon, 3 bhk flat for sale in gurgaon, 3 bhk luxury apartments in gurgaon, 3 bhk flats in gurgaon price, 3 bhk flats in dwarka expressway, ready to move 3 bhk flats in dwarka expressway, residential projects on dwarka expressway",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "3 BHK Flats in Gurgaon | Luxury Apartments on Dwarka Expressway",
    description:
      "Discover premium 3 BHK flats in Gurgaon on Dwarka Expressway. Verified residential projects with modern amenities, excellent connectivity, and expert buying guidance.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "3 BHK Flats in Gurgaon on Dwarka Expressway",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Live Connected. Invest Smarter.",
  heroTitle: "Discover Premium 3 BHK Flats in Gurgaon on Dwarka Expressway",
  heroSubtitle:
    "Explore verified 3 BHK residential projects on Dwarka Expressway with modern amenities, excellent connectivity, trusted developers, and expert buying guidance.",
  heroImage: "/assets/img/3bhk-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "Dwarka Expressway", label: "Direct Access" },
    { icon: "plane", value: "Approx. 15 Mins", label: "To IGI Airport" },
    { icon: "shield", value: "RERA Status", label: "Verify Project-Wise" },
  ],

  quickFacts: [
    { label: "Airport Connectivity", value: "15-25 Mins" },
    { label: "Residential Projects", value: "50+" },
    { label: "Price Per Sq. Ft.", value: "Rs.13K-28K" },
    { label: "Top Sectors", value: "102, 106, 108 & 113" },
  ],

  projectsSectionTitle: "3 BHK Flats on Dwarka Expressway at a Glance",
  projectsSectionSubtitle:
    "Find the right 3 BHK property in Dwarka Expressway based on budget, location, lifestyle, and investment goals.",

  projectCards: [
    {
      name: "Ready-to-Move Projects",
      location: "Near Dwarka Expressway",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "Apartments & Penthouses",
      sizeRange: "Immediate Possession",
      startingPrice: "Rs. 1.8 Cr*",
      connectivity: "Near Dwarka Expressway",
      href: "/ready-to-move-flats-in-gurgaon",
    },
    {
      name: "Under-Construction Projects",
      location: "Airport & Metro Access",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "dark",
      configuration: "Luxury Residences",
      sizeRange: "Future Appreciation",
      startingPrice: "Rs. 2.2 Cr*",
      connectivity: "Airport & Metro Access",
      href: "/residential-projects-on-dwarka-expressway",
    },
    {
      name: "New 3 BHK Projects in Gurgaon",
      location: "Delhi Border Advantage",
      status: "New Launch",
      statusColor: "red",
      headerColor: "amber",
      configuration: "Premium Communities",
      sizeRange: "Latest Opportunities",
      startingPrice: "Rs. 1.5 Cr*",
      connectivity: "Delhi Border Advantage",
      href: "/upcoming-projects-in-gurugram",
    },
  ],

  layoutTitle: "Why Choose 3 BHK Flats on Dwarka Expressway?",
  layoutContent: [
    "3 BHK residential projects on Dwarka Expressway have emerged as one of the most preferred choices for homebuyers and investors in Gurgaon. With seamless connectivity to Delhi, IGI Airport, Cyber City, and upcoming metro infrastructure, this corridor offers the perfect blend of modern living and long-term growth potential.",
    "Unlike many older residential zones, 3 BHK property in Dwarka Expressway benefits from wide roads, master-planned sectors, premium social infrastructure, and thoughtfully designed gated communities. Buyers can choose from ready-to-move homes, luxury apartments, and new residential projects in Gurgaon developed by some of India's most trusted real estate brands.",
    "Leading developers including Sobha, M3M, Godrej, Smart World, ATS, Elan, and Experion are shaping the skyline with world-class residential communities featuring landscaped greens, clubhouses, sports facilities, and smart living amenities. Whether you are looking for a dream home or an investment opportunity, Dwarka Expressway 3 BHK projects offer excellent value and future potential.",
  ],
  layoutHighlights: [
    "Direct connectivity to Delhi, IGI Airport, and Cyber City",
    "Premium residential communities by leading developers",
    "Upcoming metro connectivity and growing commercial hubs",
    "Top schools, hospitals, malls, and business districts nearby",
  ],
  layoutImage: "/assets/img/3bhk-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Family-Friendly Education",
      description:
        "Top schools including DPS, Euro International School, and GEMS Education are located within 5-15 minutes of 3 BHK projects on Dwarka Expressway.",
    },
    {
      icon: "hospital",
      title: "Premium Healthcare Access",
      description:
        "Medanta, Manipal, Fortis, and Max hospitals provide quality healthcare within a 10-20 minute radius of your 3 BHK home.",
    },
    {
      icon: "connectivity",
      title: "Excellent Connectivity",
      description:
        "Direct connectivity to Delhi, IGI Airport (15-25 mins), Cyber City (20 mins), and Dwarka Sector 21 Metro (10-15 mins).",
    },
  ],

  localAreaTitle: "Prime Connectivity & Lifestyle Infrastructure",
  localAreaDescription:
    "3 BHK flats on Dwarka Expressway are located in well-planned neighborhoods with excellent schools, healthcare facilities, shopping destinations, and seamless connectivity within easy reach.",
  nearbyPlaces: [
    { name: "Delhi Public School", distance: "5-10 min", type: "school" },
    { name: "Euro International School", distance: "5-10 min", type: "school" },
    { name: "Medanta Medicity", distance: "15-20 min", type: "hospital" },
    { name: "Manipal Hospital", distance: "10-15 min", type: "hospital" },
    { name: "Ambience Mall Gurgaon", distance: "15-20 min", type: "mall" },
    { name: "Dwarka Sector 21 Metro", distance: "10-15 min", type: "metro" },
  ],

  faqs: [
    {
      question: "What are the best 3 BHK residential projects on Dwarka Expressway?",
      answer:
        "The best 3 BHK residential projects on Dwarka Expressway include developments in Sectors 102, 106, 108, 113, and 114 by reputed developers such as Sobha, Godrej, M3M, Smart World, ATS, Elan, and Experion. Popular sectors include Sector 108 for established residential communities, Sector 106 for luxury developments, Sector 113 for close proximity to Delhi, and Sector 102 for competitive pricing and connectivity.",
    },
    {
      question: "What is the average price of 3 BHK flats on Dwarka Expressway in 2026?",
      answer:
        "The average property price for 3 BHK flats on Dwarka Expressway ranges from Rs. 13,000 to Rs. 28,000 per sq. ft. in 2026, depending on the sector, developer reputation, project specifications, and construction stage. Sector 102 averages Rs. 13,000-16,000 (value buyers), Sector 106 Rs. 15,000-20,000 (luxury living), Sector 108 Rs. 16,000-22,000 (family homes), Sector 113 Rs. 18,000-28,000 (Delhi connectivity), and Sector 114 Rs. 16,000-24,000 (long-term investment). Prices are indicative and buyers should verify project-wise details before booking.",
    },
    {
      question: "Is buying a 3 BHK flat on Dwarka Expressway a good investment in 2026?",
      answer:
        "Yes. 3 BHK property on Dwarka Expressway is considered one of Gurgaon's strongest real estate investment corridors due to direct Delhi connectivity, airport accessibility, infrastructure upgrades, and increasing commercial activity. Key investment drivers include direct connectivity to Delhi, 15-25 minutes from IGI Airport, upcoming metro connectivity, growing office and retail developments, premium residential communities, and strong end-user demand. The market is transitioning from an emerging corridor into a mature residential destination.",
    },
    {
      question: "Which sector is best for 3 BHK flats on Dwarka Expressway?",
      answer:
        "The best sector depends on your goals and budget. Sector 108 is recommended for family living, Sector 106 for luxury housing, Sector 113 for Delhi connectivity, Sector 114 for long-term investment, and Sector 102 for value for money. Each sector offers unique advantages in terms of proximity, pricing, and infrastructure.",
    },
    {
      question: "What schools, hospitals, and lifestyle facilities are near Dwarka Expressway 3 BHK projects?",
      answer:
        "3 BHK projects on Dwarka Expressway are surrounded by Delhi Public School (5-10 min), Euro International School (5-10 min), GEMS Education (10-15 min), Mount Olympus School (10-15 min), Medanta Medicity (15-20 min), Manipal Hospital (10-15 min), Fortis Hospital (15-20 min), Ambience Mall (15-20 min), Cyber City (20 min), Dwarka Sector 21 Metro (10-15 min), and IGI Airport (15-25 min).",
    },
  ],

  relatedLinks: [
    {
      title: "Best Property on Dwarka Expressway",
      href: "/projects",
      description: "Handpicked projects for homebuyers",
    },
    {
      title: "Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Compare top-rated residential communities",
    },
    {
      title: "New Projects in Gurgaon",
      href: "/upcoming-projects-in-gurugram",
      description: "Discover the latest project launches",
    },
    {
      title: "Ready to Move Flats",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Move in without waiting for possession",
    },
    {
      title: "4 BHK Flats in Gurgaon",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Premium homes by leading developers",
    },
    {
      title: "Commercial Property in Gurgaon",
      href: "/commercial-property-in-gurgaon",
      description: "Explore high-potential growth corridors",
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
        title="3 BHK Flats in Gurgaon on Dwarka Expressway"
        description="Discover premium 3 BHK flats in Gurgaon on Dwarka Expressway. Verified residential projects with modern amenities, excellent connectivity, trusted developers, and expert buying guidance."
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
