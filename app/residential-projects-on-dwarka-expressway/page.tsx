import { Metadata } from "next";
import CategoryPageTemplate from "@/components/category/CategoryPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "Residential Projects on Dwarka Expressway | Premium Homes 2026",
  description:
    "Explore premium residential projects on Dwarka Expressway. New residential developments with world-class amenities, RERA approved. Property prices starting from 50 Lakh.",
  keywords:
    "residential projects on dwarka expressway, dwarka expressway residential projects, property in dwarka expressway, new residential projects in gurgaon, luxury apartments dwarka expressway",
  alternates: {
    canonical: `${BASE_URL}/residential-projects-on-dwarka-expressway`,
  },
  openGraph: {
    title: "Residential Projects on Dwarka Expressway | Premium Homes",
    description:
      "Discover premium residential projects on Dwarka Expressway with RERA approval and world-class amenities.",
    type: "website",
    url: `${BASE_URL}/residential-projects-on-dwarka-expressway`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Residential Projects on Dwarka Expressway",
      },
    ],
  },
};

const pageData = {
  heroTitle: "Premium Residential Projects on Dwarka Expressway",
  heroSubtitle: "Your Dream Home Awaits",
  heroDescription:
    "Discover exceptional residential projects on Dwarka Expressway offering modern living with world-class amenities. From luxury apartments to premium villas, find your perfect home in NCR's most sought-after corridor with excellent connectivity to Delhi and IGI Airport.",
  quickFacts: [
    { label: "Size Range", value: "1,200 - 5,000 sq.ft", icon: "size" as const },
    { label: "Price Starting", value: "50 Lakh", icon: "price" as const },
    { label: "Configurations", value: "2/3/4 BHK", icon: "config" as const },
    { label: "Airport Distance", value: "15-20 mins", icon: "connectivity" as const },
  ],
  layoutTitle: "Why Dwarka Expressway is Perfect for Residential Living",
  layoutDescription:
    "Dwarka Expressway has emerged as NCR's premier residential destination, offering the perfect blend of connectivity, infrastructure, and lifestyle amenities. With the expressway fully operational since June 2025, property values have seen 8-12% annual appreciation.",
  layoutFeatures: [
    "Signal-free connectivity to IGI Airport in just 15-20 minutes",
    "Proximity to Cyber City and major IT hubs for professionals",
    "World-class amenities including clubhouses, pools, and landscaped gardens",
    "RERA approved projects from top developers like Sobha, M3M, and Godrej",
    "Metro extension planned for enhanced public transport connectivity",
    "Excellent ROI potential with rising property values and rental demand",
  ],
  localLandmarks: {
    schools: [
      "Euro International School (10 mins)",
      "GD Goenka Public School (12 mins)",
      "The Shri Ram School (15 mins)",
      "Pathways World School (20 mins)",
    ],
    hospitals: [
      "Manipal Hospital (10 mins)",
      "Fortis Memorial Hospital (15 mins)",
      "Medanta Hospital (20 mins)",
      "Max Hospital (18 mins)",
    ],
    malls: [
      "Ambience Mall (15 mins)",
      "DLF Cyber Hub (18 mins)",
      "Vegas Mall (12 mins)",
      "M3M 65th Avenue (10 mins)",
    ],
    connectivity: [
      "IGI Airport (15-20 mins)",
      "Cyber City (18 mins)",
      "Delhi Border (10 mins)",
      "Kherki Daula Toll (5 mins)",
    ],
  },
  faqs: [
    {
      question: "What is the average price of residential projects on Dwarka Expressway?",
      answer:
        "Residential projects on Dwarka Expressway start from approximately 50 Lakh for 2 BHK apartments and go up to 6 Crore for luxury 4 BHK penthouses. The average price per square foot ranges from Rs. 7,000 to Rs. 15,000 depending on the developer, location, and amenities.",
    },
    {
      question: "Which are the best residential projects on Dwarka Expressway?",
      answer:
        "Top residential projects include Sobha City (sports lifestyle), M3M Capital (ultra-luxury), Godrej Summit (premium amenities), Experion Windchants (green living), and Smart World One DXP (strategic location). All projects are RERA approved.",
    },
    {
      question: "Is Dwarka Expressway good for residential investment in 2026?",
      answer:
        "Yes, Dwarka Expressway is excellent for residential investment with 8-12% annual appreciation, strong rental yields, and infrastructure completion. The fully operational expressway and upcoming metro extension make it a prime investment destination.",
    },
    {
      question: "What amenities do residential projects on Dwarka Expressway offer?",
      answer:
        "Premium residential projects offer amenities like swimming pools, clubhouses, gyms, landscaped gardens, children's play areas, sports facilities, 24/7 security, power backup, and smart home features. Many projects also have retail and commercial spaces within the complex.",
    },
    {
      question: "How is the connectivity from Dwarka Expressway residential projects?",
      answer:
        "Dwarka Expressway offers excellent connectivity with signal-free access to IGI Airport (15-20 mins), Cyber City (18 mins), and Delhi via the 16-lane highway. The upcoming metro extension will further enhance public transport options.",
    },
  ],
  relatedLinks: [
    {
      title: "Ready to Move Flats in Gurgaon",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession homes with no waiting period",
    },
    {
      title: "3 BHK Flats in Gurgaon",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Spacious family apartments with modern amenities",
    },
    {
      title: "Upcoming Projects in Gurugram",
      href: "/upcoming-projects-in-gurugram",
      description: "New launches with attractive pre-launch prices",
    },
  ],
  primaryKeyword: "Residential Projects on Dwarka Expressway",
  secondaryKeywords: [
    "property in dwarka expressway",
    "new residential projects in gurgaon",
    "dwarka expressway residential projects",
  ],
};

const pageFaqs = pageData.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function ResidentialProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Residential Projects on Dwarka Expressway", url: `${BASE_URL}/residential-projects-on-dwarka-expressway` },
        ]}
      />
      <WebPageSchema
        title="Residential Projects on Dwarka Expressway | Premium Homes 2026"
        description="Explore premium residential projects on Dwarka Expressway with RERA approval and world-class amenities."
        url={`${BASE_URL}/residential-projects-on-dwarka-expressway`}
      />
      <FAQSchema faqs={pageFaqs} />
      <CategoryPageTemplate {...pageData} />
    </>
  );
}
