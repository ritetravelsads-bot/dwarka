import { Metadata } from "next";
import CategoryPageTemplate from "@/components/category/CategoryPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "Commercial Property in Gurgaon | Shops, Offices & Spaces 2026",
  description:
    "Buy commercial property in Gurgaon - shops, offices, retail spaces. Commercial projects from top developers with high rental yields. RERA approved commercial spaces.",
  keywords:
    "commercial property in gurgaon, commercial projects in gurgaon, commercial property for sale in gurgaon, commercial shops in gurgaon, commercial space for sale in gurgaon, commercial office space in gurgaon",
  alternates: {
    canonical: `${BASE_URL}/commercial-property-in-gurgaon`,
  },
  openGraph: {
    title: "Commercial Property in Gurgaon | Shops, Offices & Spaces",
    description:
      "Discover high-yield commercial properties in Gurgaon including shops, offices, and retail spaces.",
    type: "website",
    url: `${BASE_URL}/commercial-property-in-gurgaon`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Commercial Property in Gurgaon",
      },
    ],
  },
};

const pageData = {
  heroTitle: "Premium Commercial Property in Gurgaon",
  heroSubtitle: "Invest in High-Yield Commercial Spaces",
  heroDescription:
    "Explore lucrative commercial property opportunities in Gurgaon including retail shops, office spaces, and commercial complexes. Prime locations near business hubs with excellent footfall and rental potential for smart investors.",
  quickFacts: [
    { label: "Size Range", value: "200 - 10,000 sq.ft", icon: "size" as const },
    { label: "Price Starting", value: "40 Lakh", icon: "price" as const },
    { label: "Types", value: "Shops/Offices", icon: "config" as const },
    { label: "Rental Yield", value: "6-9% p.a.", icon: "connectivity" as const },
  ],
  layoutTitle: "Why Invest in Commercial Property in Gurgaon",
  layoutDescription:
    "Gurgaon is India's corporate capital with over 250 Fortune 500 companies, making it the ideal destination for commercial real estate investment. With Dwarka Expressway development and growing business ecosystem, commercial properties here offer exceptional rental yields and capital appreciation.",
  layoutFeatures: [
    "High rental yields of 6-9% annually, superior to residential properties",
    "Prime locations near Cyber City, MG Road, and Sohna Road business hubs",
    "Growing corporate presence with continuous demand for office spaces",
    "Excellent footfall for retail shops in established commercial complexes",
    "RERA approved projects ensuring transparency and legal compliance",
    "Easy financing options with attractive commercial property loan rates",
  ],
  localLandmarks: {
    schools: [
      "Euro International School (10 mins)",
      "GD Goenka Public School (12 mins)",
      "The Shri Ram School (15 mins)",
      "Amity University (20 mins)",
    ],
    hospitals: [
      "Medanta Hospital (12 mins)",
      "Fortis Memorial Hospital (15 mins)",
      "Max Hospital (18 mins)",
      "Artemis Hospital (14 mins)",
    ],
    malls: [
      "DLF Cyber Hub (10 mins)",
      "Ambience Mall (12 mins)",
      "MGF Metropolitan (8 mins)",
      "South Point Mall (10 mins)",
    ],
    connectivity: [
      "IGI Airport (20-25 mins)",
      "Delhi Metro (Rapid Metro)",
      "NH-48 Highway",
      "Dwarka Expressway (10 mins)",
    ],
  },
  faqs: [
    {
      question: "What is the average price of commercial property in Gurgaon?",
      answer:
        "Commercial property prices in Gurgaon vary by location and type. Retail shops start from Rs. 40 Lakh, while office spaces range from Rs. 50 Lakh to several crores. Prime locations like MG Road and Cyber City command higher prices of Rs. 15,000-25,000 per sq.ft.",
    },
    {
      question: "Which are the best areas for commercial property in Gurgaon?",
      answer:
        "Top areas for commercial property include Cyber City (IT offices), MG Road (retail and mixed-use), Golf Course Road (premium offices), Sohna Road (growing business hub), and Dwarka Expressway (new commercial developments). Each area caters to different business needs.",
    },
    {
      question: "What is the rental yield for commercial property in Gurgaon?",
      answer:
        "Commercial properties in Gurgaon offer rental yields of 6-9% annually, significantly higher than residential properties (2-3%). Prime locations with established footfall can yield even higher returns. Office spaces typically have longer lease terms providing stable income.",
    },
    {
      question: "Is it a good time to buy commercial property in Gurgaon in 2026?",
      answer:
        "Yes, 2026 is an excellent time to invest as corporate expansion continues, Dwarka Expressway is fully operational, and new business districts are developing. Early investment in upcoming commercial projects can provide significant appreciation and rental income.",
    },
    {
      question: "What documents are required to buy commercial property in Gurgaon?",
      answer:
        "Required documents include identity proof (Aadhaar, PAN), address proof, income proof, bank statements, sale agreement, RERA registration certificate, occupancy certificate, and property title documents. GST registration may be needed for commercial lease agreements.",
    },
  ],
  relatedLinks: [
    {
      title: "Residential Projects on Dwarka Expressway",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Premium residential developments with excellent connectivity",
    },
    {
      title: "Upcoming Projects in Gurugram",
      href: "/upcoming-projects-in-gurugram",
      description: "New commercial and residential launches",
    },
    {
      title: "Ready to Move Flats in Gurgaon",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession properties",
    },
  ],
  primaryKeyword: "Commercial Property in Gurgaon",
  secondaryKeywords: [
    "commercial projects in gurgaon",
    "commercial property for sale in gurgaon",
    "commercial shops in gurgaon",
    "commercial office space in gurgaon",
  ],
};

const pageFaqs = pageData.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function CommercialPropertyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Commercial Property in Gurgaon", url: `${BASE_URL}/commercial-property-in-gurgaon` },
        ]}
      />
      <WebPageSchema
        title="Commercial Property in Gurgaon | Shops, Offices & Spaces 2026"
        description="Discover high-yield commercial properties in Gurgaon including shops, offices, and retail spaces."
        url={`${BASE_URL}/commercial-property-in-gurgaon`}
      />
      <FAQSchema faqs={pageFaqs} />
      <CategoryPageTemplate {...pageData} />
    </>
  );
}
