import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/3-bhk-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "3 BHK Flats in Gurgaon | Find Your Perfect 3 BHK Flat",
  description:
    "Explore premium 3 BHK flats in Gurgaon, luxury apartments, builder floors, and ready to move homes across Dwarka Expressway. Discover spacious layouts, modern amenities, and excellent connectivity designed for comfortable family living.",
  keywords:
    "3 bhk flats in gurgaon, 3bhk in gurgaon, 3 bhk flats in gurgaon ready to move, 3 bhk builder floor in gurgaon, buy 3 bhk in gurgaon, 3 bhk apartment in gurgaon, 3 bhk flat for sale in gurgaon, 3 bhk luxury apartments in gurgaon, 3 bhk flats in gurgaon price, 3 bhk flats in dwarka expressway, ready to move 3 bhk flats in dwarka expressway",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Find Your Perfect 3 BHK Flat in Gurgaon",
    description:
      "Explore premium 3 BHK flats in Gurgaon, luxury apartments, builder floors, and ready to move homes across Dwarka Expressway. Spacious layouts, modern amenities, and excellent connectivity.",
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
  heroTagline: "Perfect for Modern Families",
  heroTitle: "Find Your Perfect 3 BHK Flat in Gurgaon",
  heroSubtitle:
    "Explore premium 3 BHK flats in Gurgaon, luxury apartments, builder floors, and ready to move homes across Dwarka Expressway. Discover spacious layouts, modern amenities, and excellent connectivity designed for comfortable family living.",
  heroImage: "/assets/img/3bhk-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "3 BHK Configuration", label: "Premium Family Homes" },
    { icon: "plane", value: "15 Min", label: "To IGI Airport" },
    { icon: "route", value: "Dwarka Expressway", label: "Prime Connectivity" },
    { icon: "shield", value: "RERA Projects", label: "Verified Developments" },
  ],

  quickFacts: [
    { label: "Ideal Family Living", value: "3 BHK Homes" },
    { label: "Prime Connectivity", value: "Dwarka Expressway" },
    { label: "Spacious Layouts", value: "1200–3000 Sq.Ft." },
    { label: "Price Starting", value: "₹1 Cr+" },
  ],

  projectsSectionTitle: "Premium 3 BHK Flats in Gurgaon at a Glance",
  projectsSectionSubtitle:
    "Compare the top 3 BHK flats in Gurgaon, 3 BHK luxury apartments, builder floors, and ready to move 3 BHK flats on Dwarka Expressway. Find the ideal property based on configuration, size range, price starting, and connectivity.",

  projectCards: [
    {
      name: "Builder Floors Gurgaon",
      location: "Prime Gurgaon Sectors",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "3 BHK Builder Floor",
      sizeRange: "1,200 – 2,500 Sq.Ft.",
      startingPrice: "₹1.20 Cr*",
      connectivity: "Prime Gurgaon Sectors",
      href: "/projects",
    },
    {
      name: "Ready to Move 3 BHK",
      location: "Dwarka Expressway",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "dark",
      configuration: "3 BHK Apartment",
      sizeRange: "1,300 – 2,200 Sq.Ft.",
      startingPrice: "₹1.50 Cr*",
      connectivity: "Dwarka Expressway",
      href: "/projects",
    },
    {
      name: "Luxury Apartments",
      location: "Delhi Border",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "amber",
      configuration: "3 & 4 BHK",
      sizeRange: "1,800 – 3,500 Sq.Ft.",
      startingPrice: "₹2.50 Cr*",
      connectivity: "Delhi Border",
      href: "/projects",
    },
    {
      name: "3 BHK Flats Gurgaon",
      location: "Prime Locations",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "3 BHK Homes",
      sizeRange: "1,200 – 3,000 Sq.Ft.",
      startingPrice: "₹1.00 Cr*",
      connectivity: "Prime Locations",
      href: "/projects",
    },
  ],

  layoutTitle: "Why a 3 BHK or 4 BHK on Dwarka Expressway Is Different",
  layoutContent: [
    "A 3 BHK flat for sale in Gurgaon on Dwarka Expressway offers more usable space, better connectivity, and stronger long-term appreciation potential compared to traditional apartment locations. Buyers looking to buy a 3 BHK in Gurgaon often prefer Dwarka Expressway because of its modern infrastructure, wider roads, premium developments, and easy access to Delhi.",
  ],
  layoutHighlights: [
    "Larger Living & Dining Spaces",
    "Dedicated Work-From-Home Areas",
    "Premium Community Amenities",
    "High-Intent Investment Location",
  ],
  layoutImage: "/assets/img/3bhk-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Elite Education",
      description:
        "Access top schools, international institutions, and education hubs within 10–15 minutes of major residential communities.",
    },
    {
      icon: "hospital",
      title: "Premium Healthcare",
      description:
        "World-class hospitals and healthcare facilities ensure convenience, safety, and peace of mind for families.",
    },
    {
      icon: "connectivity",
      title: "Executive Connectivity",
      description:
        "Fast access to Delhi, IGI Airport, Cyber City, metro stations, and key business districts across NCR.",
    },
  ],

  localAreaTitle: "Hidden Gems Near 3 BHK Flats in Gurgaon",
  localAreaDescription:
    "3 BHK flats on Dwarka Expressway offer excellent access to schools, hospitals, shopping centres, business hubs, and metro connectivity, creating the perfect environment for modern family living.",
  nearbyPlaces: [
    { name: "International Schools", distance: "5–10 Min", type: "school" },
    { name: "Education Hubs", distance: "8–10 Min", type: "school" },
    { name: "Premium Hospitals", distance: "8–15 Min", type: "hospital" },
    { name: "Shopping Malls", distance: "15–20 Min", type: "mall" },
    { name: "Business Centres", distance: "15–20 Min", type: "mall" },
    { name: "Metro Connectivity", distance: "10–15 Min", type: "metro" },
  ],

  faqs: [
    {
      question: "What are the best 3 BHK flats in Gurgaon?",
      answer:
        "The best 3 BHK flats in Gurgaon are located across Dwarka Expressway, Sector 106, Sector 108, Sector 113, New Gurgaon, and Golf Course Extension Road. Buyers can choose from luxury apartments, ready-to-move homes, and premium gated communities.",
    },
    {
      question: "What is the average price of a 3 BHK flat in Gurgaon?",
      answer:
        "The price of a 3 BHK flat in Gurgaon depends on location, developer, and amenities. Builder Floor starts from ₹1.20 Cr*, Premium Apartment from ₹1.80 Cr*, Luxury Apartment from ₹2.50 Cr*, and Ultra Luxury Residence from ₹4 Cr*+.",
    },
    {
      question: "What is the size range of 3 BHK flats in Gurgaon?",
      answer:
        "Compact 3 BHK ranges from 1,200–1,600 Sq.Ft., Premium 3 BHK from 1,600–2,200 Sq.Ft., and Luxury 3 BHK from 2,200–3,500 Sq.Ft.",
    },
    {
      question: "Are there ready to move 3 BHK flats in Gurgaon?",
      answer:
        "Yes. Several ready to move 3 BHK flats in Gurgaon are available across Dwarka Expressway, New Gurgaon, and established residential sectors with modern amenities and immediate possession.",
    },
    {
      question: "Why buy a 3 BHK flat on Dwarka Expressway?",
      answer:
        "A 3 BHK flat on Dwarka Expressway offers better connectivity, larger layouts, premium infrastructure, and strong long-term appreciation potential compared to many older residential corridors.",
    },
    {
      question: "Are 3 BHK luxury apartments in Gurgaon a good investment?",
      answer:
        "Yes. Luxury apartments in Gurgaon continue to attract end users, NRIs, and investors due to strong demand, premium amenities, and increasing infrastructure development.",
    },
    {
      question: "What amenities are available in modern 3 BHK apartments?",
      answer:
        "Modern 3 BHK apartments include Clubhouse, Swimming Pool, Gymnasium, Landscaped Gardens, Kids Play Area, Sports Facilities, and 24x7 Security.",
    },
    {
      question: "Which sectors are best for buying a 3 BHK in Gurgaon?",
      answer:
        "Sector 102 is ideal for value buyers, Sector 106 for luxury living, Sector 108 for family homes, Sector 113 for Delhi connectivity, and Sector 114 for long-term investment.",
    },
    {
      question: "What is the difference between a 3 BHK apartment and a 3 BHK builder floor?",
      answer:
        "Apartments offer gated communities and shared amenities, while builder floors provide greater privacy, independent living, and lower density environments.",
    },
    {
      question: "Are there 3 BHK builder floors available in Gurgaon?",
      answer:
        "Yes. Gurgaon offers numerous 3 BHK builder floors across New Gurgaon, Golf Course Extension Road, and premium sectors near Dwarka Expressway.",
    },
    {
      question: "Is Dwarka Expressway the best location for 3 BHK flats?",
      answer:
        "Dwarka Expressway is one of Gurgaon's most sought-after residential destinations due to Delhi connectivity, airport access, metro expansion, and premium residential developments.",
    },
    {
      question: "What makes a 3 BHK or 4 BHK on Dwarka Expressway different?",
      answer:
        "3 BHK and 4 BHK homes on Dwarka Expressway typically offer larger floor plans, wider balconies, better community amenities, and stronger appreciation potential due to planned infrastructure development.",
    },
    {
      question: "Can NRIs buy 3 BHK flats in Gurgaon?",
      answer:
        "Yes. NRIs can purchase residential property in Gurgaon under applicable RBI and FEMA regulations. Many developers also offer dedicated NRI support services.",
    },
    {
      question: "Who should buy a 3 BHK flat in Gurgaon?",
      answer:
        "3 BHK flats are ideal for families, working professionals, investors, NRIs, and homebuyers looking for additional space, comfort, and long-term value.",
    },
    {
      question: "How do I choose the best 3 BHK flat in Gurgaon?",
      answer:
        "Buyers should compare configuration, size range, connectivity, developer reputation, amenities, RERA compliance, price, and future growth potential before making a purchase decision.",
    },
  ],

  relatedLinks: [
    {
      title: "4 BHK Flats in Gurgaon",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Looking for more space? Explore luxury 4 BHK options",
    },
    {
      title: "3 BHK Builder Floors",
      href: "/projects",
      description: "Independent floors with premium lifestyle features",
    },
    {
      title: "Ready to Move 3 BHK",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession apartments in Gurgaon",
    },
    {
      title: "Dwarka Expressway Flats",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Explore premium projects on Dwarka Expressway",
    },
    {
      title: "Luxury Apartments Gurgaon",
      href: "/projects",
      description: "Modern residences with world-class amenities",
    },
    {
      title: "Buy 3 BHK in Gurgaon",
      href: "/projects",
      description: "Find homes with strong investment potential",
    },
  ],

  ctaTitle: "Explore the Best 3 BHK Flats in Gurgaon",
  ctaDescription:
    "Explore the best 3 BHK flats in Gurgaon across Dwarka Expressway, New Gurgaon, and premium residential sectors. Compare verified properties, 3 BHK luxury apartments in Gurgaon, ready-to-move homes, and investment opportunities in some of the city's most sought-after locations.",
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
        title="3 BHK Flats in Gurgaon | Find Your Perfect 3 BHK Flat"
        description="Explore premium 3 BHK flats in Gurgaon, luxury apartments, builder floors, and ready to move homes across Dwarka Expressway. Discover spacious layouts, modern amenities, and excellent connectivity designed for comfortable family living."
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
