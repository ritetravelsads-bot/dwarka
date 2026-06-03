import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/residential-projects-on-dwarka-expressway`;

export const metadata: Metadata = {
  title: "Residential Projects on Dwarka Expressway | Gurgaon 2026",
  description:
    "Discover premium residential projects on Dwarka Expressway, Gurgaon. Verified properties with modern amenities, excellent connectivity, trusted developers, and expert buying guidance.",
  keywords:
    "residential projects on dwarka expressway, dwarka expressway residential projects, property in dwarka expressway, new residential projects in gurgaon, dwarka expressway flats, luxury apartments dwarka expressway, ready to move flats gurgaon, residential property gurgaon 2026",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Residential Projects on Dwarka Expressway | Gurgaon 2026",
    description:
      "Discover premium residential projects on Dwarka Expressway. Verified properties with modern amenities, excellent connectivity, and expert buying guidance.",
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
  heroTagline: "Live Connected. Invest Smarter.",
  heroTitle: "Discover Premium Residential Projects on Dwarka Expressway, Gurgaon Today",
  heroSubtitle:
    "Explore verified residential projects on Dwarka Expressway with modern amenities, excellent connectivity, trusted developers, and expert buying guidance.",
  heroImage: "/assets/img/residential-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "Dwarka Expressway", label: "Direct Access" },
    { icon: "plane", value: "Approx. 15 Mins", label: "Dwarka Sector 21 Metro" },
    { icon: "shield", value: "RERA Status", label: "Verify Project-Wise Before Booking" },
  ],

  quickFacts: [
    { label: "Airport Connectivity", value: "15-25 Mins" },
    { label: "Residential Projects", value: "50+" },
    { label: "Price Per Sq. Ft.", value: "Rs.13K-28K" },
    { label: "Top Sectors", value: "102, 106, 108 & 113" },
  ],

  projectsSectionTitle: "Dwarka Expressway Residential Projects at a Glance",
  projectsSectionSubtitle:
    "Find the right property in Dwarka Expressway based on budget, location, lifestyle, and investment goals.",

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
      name: "New Residential Projects in Gurgaon",
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

  layoutTitle: "Why Choose Residential Projects on Dwarka Expressway?",
  layoutContent: [
    "Residential projects on Dwarka Expressway have emerged as one of the most preferred choices for homebuyers and investors in Gurgaon. With seamless connectivity to Delhi, IGI Airport, Cyber City, and upcoming metro infrastructure, this corridor offers the perfect blend of modern living and long-term growth potential.",
    "Unlike many older residential zones, property in Dwarka Expressway benefits from wide roads, master-planned sectors, premium social infrastructure, and thoughtfully designed gated communities. Buyers can choose from ready-to-move homes, luxury apartments, and new residential projects in Gurgaon developed by some of India's most trusted real estate brands.",
    "Leading developers including Sobha, M3M, Godrej, Smart World, ATS, Elan, and Experion are shaping the skyline with world-class residential communities featuring landscaped greens, clubhouses, sports facilities, and smart living amenities. Whether you are looking for a dream home or an investment opportunity, Dwarka Expressway residential projects offer excellent value and future potential.",
  ],
  layoutHighlights: [
    "Direct connectivity to Delhi, IGI Airport, and Cyber City",
    "Premium residential communities by leading developers",
    "Upcoming metro connectivity and growing commercial hubs",
    "Top schools, hospitals, malls, and business districts nearby",
    "Wide roads, planned infrastructure, and modern urban development",
    "Strong end-user demand and long-term investment prospects",
  ],
  layoutImage: "/assets/img/residential-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Family-Friendly Education",
      description:
        "Top schools including DPS, Euro International School, and GEMS Education are located within 5-15 minutes of residential projects on Dwarka Expressway.",
    },
    {
      icon: "hospital",
      title: "Premium Healthcare Access",
      description:
        "Medanta, Manipal, Fortis, and Max hospitals provide quality healthcare within a 10-20 minute radius of your home.",
    },
    {
      icon: "connectivity",
      title: "Excellent Connectivity",
      description:
        "Direct connectivity to Delhi, IGI Airport (15-25 mins), Cyber City (20 mins), and Dwarka Metro (10-15 mins).",
    },
  ],

  localAreaTitle: "Prime Connectivity & Lifestyle Infrastructure",
  localAreaDescription:
    "Residential projects on Dwarka Expressway are located in well-planned neighborhoods with excellent schools, healthcare facilities, shopping destinations, and seamless connectivity within easy reach.",
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
      question: "What are the best residential projects on Dwarka Expressway?",
      answer:
        "The best residential projects on Dwarka Expressway include developments in Sectors 102, 106, 108, 113, and 114 by reputed developers such as Sobha, Godrej, M3M, Smart World, ATS, Elan, and Experion. These projects offer modern amenities, excellent connectivity, and strong long-term appreciation potential. Popular sectors include Sector 108 for established residential communities, Sector 106 for luxury developments, Sector 113 for close proximity to Delhi, and Sector 102 for competitive pricing and connectivity.",
    },
    {
      question: "What is the average property price on Dwarka Expressway?",
      answer:
        "The average property price on Dwarka Expressway ranges from Rs. 13,000 to Rs. 28,000 per sq. ft. in 2026, depending on the sector, developer reputation, project specifications, and construction stage. Sector 102 averages Rs. 13,000-16,000 (value buyers), Sector 106 Rs. 15,000-20,000 (luxury living), Sector 108 Rs. 16,000-22,000 (family homes), Sector 113 Rs. 18,000-28,000 (Delhi connectivity), and Sector 114 Rs. 16,000-24,000 (long-term investment). Prices are indicative and buyers should verify project-wise details before booking.",
    },
    {
      question: "Is property in Dwarka Expressway a good investment in 2026?",
      answer:
        "Yes. Property in Dwarka Expressway is considered one of Gurgaon's strongest real estate investment corridors due to direct Delhi connectivity, airport accessibility, infrastructure upgrades, and increasing commercial activity. Key investment drivers include direct connectivity to Delhi, 15-25 minutes from IGI Airport, upcoming metro connectivity, growing office and retail developments, premium residential communities, and strong end-user demand. The market is transitioning from an emerging corridor into a mature residential destination.",
    },
    {
      question: "Which sector is best on Dwarka Expressway?",
      answer:
        "The best sector depends on your goals, budget, and lifestyle requirements. Sector 108 is recommended for family living, Sector 106 for luxury housing, Sector 113 for Delhi connectivity, Sector 114 for long-term investment, and Sector 102 for value for money.",
    },
    {
      question: "Is Dwarka Expressway better than Golf Course Extension Road?",
      answer:
        "Dwarka Expressway generally offers better value for money, while Golf Course Extension Road provides a more mature luxury market. Buyers seeking larger homes and newer developments often prefer Dwarka Expressway. Dwarka Expressway offers excellent value for money, excellent Delhi connectivity, a growing luxury segment, high new launch inventory, and high investment potential. Golf Course Extension offers moderate value, moderate Delhi connectivity, a mature luxury segment, moderate new launches, and stable investment potential.",
    },
    {
      question: "What are the pros and cons of residential projects on Dwarka Expressway?",
      answer:
        "Pros: Direct Delhi and Gurgaon connectivity, 15-25 minutes to IGI Airport, premium developers and gated communities, strong infrastructure growth, and multiple options across Sectors 102, 106, 108, 113, and 114. Cons: Premium sectors have higher entry prices, some pockets still have ongoing construction, metro connectivity is still developing, and maintenance charges may be higher in luxury projects.",
    },
    {
      question: "What schools, hospitals, and lifestyle facilities are near Dwarka Expressway residential projects?",
      answer:
        "Schools nearby include Delhi Public School (5-10 min), Euro International School (5-10 min), GEMS Education (10-15 min), and Mount Olympus School (10-15 min). Hospitals include Medanta Medicity (15-20 min), Manipal Hospital (10-15 min), Fortis Hospital (15-20 min), and Max Hospital (15-20 min). Lifestyle destinations include Ambience Mall (15-20 min), Cyber City (20 min), Dwarka Sector 21 Metro (10-15 min), and IGI Airport (15-25 min).",
    },
  ],

  relatedLinks: [
    {
      title: "Best Property on Dwarka Expressway",
      href: "/projects",
      description: "Handpicked projects for homebuyers",
    },
    {
      title: "Dwarka Expressway Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Compare top-rated residential communities",
    },
    {
      title: "New Residential Projects in Gurgaon",
      href: "/upcoming-projects-in-gurugram",
      description: "Discover the latest project launches",
    },
    {
      title: "Ready to Move Properties",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Move in without waiting for possession",
    },
    {
      title: "Luxury Property in Gurgaon",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Premium homes by leading developers",
    },
    {
      title: "Gurgaon Investment Opportunities",
      href: "/commercial-property-in-gurgaon",
      description: "Explore high-potential growth corridors",
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
        description="Discover premium residential projects on Dwarka Expressway, Gurgaon. Verified properties with modern amenities, excellent connectivity, trusted developers, and expert buying guidance."
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
