import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/2-bhk-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "2 BHK Flats in Gurgaon | Buy 2 BHK Near Dwarka Expressway",
  description:
    "Explore 2 BHK flats in Gurgaon, ready-to-move apartments, and affordable homes near Dwarka Expressway. Discover modern amenities, smart layouts, and excellent access to Delhi, Airport, Metro, and business hubs.",
  keywords:
    "2 bhk flat for rent in gurgaon, 2bhk flat in gurgaon, 2 bhk in gurgaon, 2bhk flat in dwarka, 2 bhk for sale in gurgaon, buy 2 bhk in gurgaon, 2bhk in dwarka, 2 bhk flats in dwarka price, 2 bhk flats in gurugram, 2 bhk apartment in gurgaon, 2 bhk flats in gurgaon ready to move, 2 bhk affordable flats in gurgaon, 2 bhk in gurgaon ready to move, 2 bhk society flats in dwarka for sale, 2 bhk flats in dwarka expressway for sale, 2 bhk flat for sale in dwarka expressway, 2 bhk for sale in dwarka expressway, 2 bhk flats in dwarka expressway",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Buy 2 BHK Flats in Gurgaon with Excellent Connectivity",
    description:
      "Explore 2 BHK flats in Gurgaon, ready-to-move apartments, and affordable homes near Dwarka Expressway. Modern amenities, smart layouts, and excellent access to Delhi, Airport, Metro, and business hubs.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "2 BHK Flats in Gurgaon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Perfect for First-Time Homebuyers",
  heroTitle: "Buy 2 BHK Flats in Gurgaon with Excellent Connectivity",
  heroSubtitle:
    "Explore 2 BHK flats in Gurgaon, ready-to-move apartments, and affordable homes near Dwarka Expressway. Discover modern amenities, smart layouts, and excellent access to Delhi, Airport, Metro, and business hubs.",
  heroImage: "/assets/img/2bhk-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "2 BHK Homes", label: "Affordable Living" },
    { icon: "plane", value: "15 Mins", label: "To IGI Airport" },
    { icon: "route", value: "Dwarka Expressway", label: "Prime Connectivity" },
    { icon: "shield", value: "RERA Projects", label: "Verified Developments" },
  ],

  quickFacts: [
    { label: "Ideal Family Size", value: "2–4 Members" },
    { label: "Prime Connectivity", value: "Dwarka Expressway" },
    { label: "Immediate Possession", value: "Ready to Move" },
    { label: "Smart Layouts", value: "600–1500 Sq.Ft." },
  ],

  projectsSectionTitle: "Premium 2 BHK Projects at a Glance",
  projectsSectionSubtitle:
    "Compare the top 2 BHK flats in Gurgaon, ready-to-move apartments, and affordable homes on Dwarka Expressway. Find the perfect property based on configuration, price, size range, and connectivity.",

  projectCards: [
    {
      name: "Signature Global City",
      location: "Dwarka Expressway",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "2 BHK Apartment",
      sizeRange: "950–1,250 Sq.Ft.",
      startingPrice: "₹85 Lakhs*",
      connectivity: "Dwarka Expressway",
      href: "/projects",
    },
    {
      name: "Smart World Gems",
      location: "New Gurgaon",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "dark",
      configuration: "2 BHK Floors",
      sizeRange: "1,050–1,420 Sq.Ft.",
      startingPrice: "₹1.10 Cr*",
      connectivity: "New Gurgaon",
      href: "/projects",
    },
    {
      name: "GLS Avenue 81",
      location: "Near NH-48",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "amber",
      configuration: "2 BHK Home",
      sizeRange: "550–700 Sq.Ft.",
      startingPrice: "₹45 Lakhs*",
      connectivity: "Near NH-48",
      href: "/projects",
    },
    {
      name: "2 BHK Dwarka Expressway",
      location: "Delhi Border",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "2 BHK Premium",
      sizeRange: "900–1,500 Sq.Ft.",
      startingPrice: "₹75 Lakhs*",
      connectivity: "Delhi Border",
      href: "/projects",
    },
  ],

  layoutTitle: "Why a 2 BHK Flat in Gurgaon Is Different",
  layoutContent: [
    "A 2 BHK flat for sale in Gurgaon offers a practical combination of affordability, convenience, and long-term value. Buyers looking to buy a 2 BHK in Gurgaon often prefer locations near Dwarka Expressway because of modern infrastructure, metro connectivity, and growing employment hubs.",
    "Whether you are searching for a 2 BHK flat in Gurgaon ready to move, a 2 BHK affordable flat, or a 2 BHK flat in Dwarka Expressway, these homes provide excellent opportunities for both end-users and investors.",
  ],
  layoutHighlights: [
    "Lower Maintenance Costs",
    "Smart Space Planning",
    "Strong Rental Demand",
    "Prime Connectivity & Growth Potential",
  ],
  layoutImage: "/assets/img/2bhk-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Elite Education",
      description:
        "Leading schools and educational institutions located within minutes of major residential communities.",
    },
    {
      icon: "hospital",
      title: "Premium Healthcare",
      description:
        "Quick access to hospitals, clinics, and healthcare centres for everyday peace of mind.",
    },
    {
      icon: "connectivity",
      title: "Executive Connectivity",
      description:
        "Fast connectivity to Dwarka Expressway, Delhi, Airport, Metro, and key employment hubs.",
    },
  ],

  localAreaTitle: "Hidden Gems Near 2 BHK Flats in Gurgaon",
  localAreaDescription:
    "Live close to top schools, hospitals, shopping centres, and transport networks. Many 2 BHK flats in Dwarka Expressway provide easy access to daily essentials without long travel times.",
  nearbyPlaces: [
    { name: "Euro International School", distance: "5–10 Min", type: "school" },
    { name: "GD Goenka School", distance: "8–10 Min", type: "school" },
    { name: "Manipal Hospital", distance: "8–10 Min", type: "hospital" },
    { name: "Medanta Medicity", distance: "15–20 Min", type: "hospital" },
    { name: "Ambience Mall", distance: "15–20 Min", type: "mall" },
    { name: "Dwarka Metro Access", distance: "10–15 Min", type: "metro" },
  ],

  faqs: [
    {
      question: "What are the best 2 BHK flats in Gurgaon?",
      answer:
        "The best 2 BHK flats in Gurgaon are located across Dwarka Expressway, New Gurgaon, Sector 102, Sector 104, Sector 106, and emerging residential corridors offering excellent connectivity and modern amenities.",
    },
    {
      question: "What is the average price of a 2 BHK flat in Gurgaon?",
      answer:
        "Affordable Housing starts from ₹45 Lakhs*, Premium 2 BHK from ₹75 Lakhs*, Ready-to-Move 2 BHK from ₹85 Lakhs*, and Luxury 2 BHK from ₹1.20 Cr*.",
    },
    {
      question: "What is the size range of a 2 BHK apartment in Gurgaon?",
      answer:
        "Compact 2 BHK ranges from 550–850 Sq.Ft., Standard 2 BHK from 850–1,200 Sq.Ft., and Premium 2 BHK from 1,200–1,500 Sq.Ft.",
    },
    {
      question: "Are there ready-to-move 2 BHK flats in Gurgaon?",
      answer:
        "Yes. Buyers can find ready-to-move 2 BHK flats in Gurgaon across Dwarka Expressway, New Gurgaon, and established residential sectors with immediate possession options.",
    },
    {
      question: "Why buy a 2 BHK flat on Dwarka Expressway?",
      answer:
        "A 2 BHK flat on Dwarka Expressway offers modern infrastructure, metro connectivity, proximity to Delhi, and strong future appreciation potential.",
    },
    {
      question: "Are 2 BHK affordable flats in Gurgaon a good investment?",
      answer:
        "Yes. Affordable 2 BHK flats attract strong rental demand and are popular among first-time homebuyers, professionals, and investors.",
    },
    {
      question: "What amenities are available in modern 2 BHK apartments?",
      answer:
        "Modern 2 BHK apartments come with Clubhouse, Swimming Pool, Gymnasium, Landscaped Gardens, Kids Play Area, 24x7 Security, and Parking.",
    },
    {
      question: "Which sectors are best for buying a 2 BHK in Gurgaon?",
      answer:
        "Sector 102 is ideal for value buyers, Sector 104 for ready possession, Sector 106 for premium living, Sector 108 for family homes, and Sector 113 for Delhi connectivity.",
    },
    {
      question: "What is the difference between a 2 BHK apartment and a 2 BHK builder floor?",
      answer:
        "A 2 BHK apartment offers gated community living and shared amenities, while a builder floor provides greater privacy and lower density living.",
    },
    {
      question: "Are there 2 BHK flats available for rent in Gurgaon?",
      answer:
        "Yes. Gurgaon offers a wide range of 2 BHK rental apartments near Dwarka Expressway, Cyber City, Udyog Vihar, and major commercial hubs.",
    },
    {
      question: "Are there 2 BHK flats in Dwarka Expressway for sale?",
      answer:
        "Yes. Multiple developers offer 2 BHK flats in Dwarka Expressway for sale with modern amenities, excellent connectivity, and attractive payment plans.",
    },
    {
      question: "What makes a 2 BHK layout ideal for first-time buyers?",
      answer:
        "A 2 BHK layout provides an ideal balance of affordability, functionality, maintenance costs, and comfortable living space for small families.",
    },
    {
      question: "Who should buy a 2 BHK flat in Gurgaon?",
      answer:
        "2 BHK flats are ideal for first-time homebuyers, working professionals, young families, investors, and NRIs looking for affordable property options.",
    },
    {
      question: "How close are schools and hospitals to 2 BHK flats on Dwarka Expressway?",
      answer:
        "Many residential projects are located near Euro International School, GD Goenka School, Manipal Hospital, Medanta Medicity, and other important social infrastructure facilities.",
    },
    {
      question: "How do I choose the best 2 BHK flat in Gurgaon?",
      answer:
        "Buyers should compare location, builder reputation, configuration, connectivity, amenities, possession status, RERA compliance, and future appreciation potential before making a purchase decision.",
    },
  ],

  relatedLinks: [
    {
      title: "Premium 3 BHK Flats",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Looking for more space? Explore premium 3 BHK homes",
    },
    {
      title: "Luxury 4 BHK Homes",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Upgrade to larger family residences",
    },
    {
      title: "Ready to Move 2 BHK",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession apartments available",
    },
    {
      title: "Dwarka Expressway Flats",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Modern communities with prime connectivity",
    },
    {
      title: "2 BHK for Rent Gurgaon",
      href: "/projects",
      description: "Popular rental homes near business hubs",
    },
    {
      title: "Property Investment Gurgaon",
      href: "/upcoming-projects-in-gurugram",
      description: "Explore residential growth opportunities",
    },
  ],

  ctaTitle: "Explore Premium 2 BHK Flats in Gurgaon",
  ctaDescription:
    "Explore the best 2 BHK flats in Gurgaon across Dwarka Expressway, New Gurgaon, and emerging residential sectors. Compare verified properties, affordable 2 BHK apartments, ready-to-move homes, and investment-friendly projects in some of Gurgaon's most sought-after locations.",
};

const pageFaqs = pageContent.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function TwoBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "2 BHK Flats in Gurgaon", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="2 BHK Flats in Gurgaon | Buy 2 BHK Near Dwarka Expressway"
        description="Explore 2 BHK flats in Gurgaon, ready-to-move apartments, and affordable homes near Dwarka Expressway. Discover modern amenities, smart layouts, and excellent access to Delhi, Airport, Metro, and business hubs."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="2 BHK Flats in Gurgaon"
      />
    </>
  );
}
