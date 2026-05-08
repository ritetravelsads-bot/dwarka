import { Metadata } from "next";
import CategoryPageTemplate from "@/components/category/CategoryPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "2 BHK Flat in Gurgaon 2026 | Affordable 2 Bedroom Apartments",
  description:
    "Find affordable 2 BHK flats in Gurgaon - apartments for rent, sale, ready to move options. 2 BHK in Dwarka Expressway starting from 45 Lakh. RERA approved projects.",
  keywords:
    "2 bhk flat in gurgaon, 2bhk flat in gurgaon, 2 bhk in gurgaon, 2 bhk flat for rent in gurgaon, 2 bhk for sale in gurgaon, 2 bhk flats in dwarka expressway, 2 bhk affordable flats in gurgaon, 2 bhk in gurgaon ready to move",
  alternates: {
    canonical: `${BASE_URL}/2-bhk-flat-in-gurgaon`,
  },
  openGraph: {
    title: "2 BHK Flat in Gurgaon 2026 | Affordable 2 Bedroom Apartments",
    description:
      "Discover affordable 2 BHK flats in Gurgaon perfect for young professionals and couples.",
    type: "website",
    url: `${BASE_URL}/2-bhk-flat-in-gurgaon`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "2 BHK Flat in Gurgaon",
      },
    ],
  },
};

const pageData = {
  heroTitle: "Affordable 2 BHK Flats in Gurgaon",
  heroSubtitle: "Perfect Start for Young Professionals",
  heroDescription:
    "Begin your homeownership journey with our selection of 2 BHK flats in Gurgaon. Ideal for young couples, professionals, and small families, these affordable apartments on Dwarka Expressway offer excellent value with modern amenities and great connectivity.",
  quickFacts: [
    { label: "Size Range", value: "900 - 1,400 sq.ft", icon: "size" as const },
    { label: "Price Starting", value: "45 Lakh", icon: "price" as const },
    { label: "Bedrooms", value: "2 BHK", icon: "config" as const },
    { label: "Best For", value: "First-time Buyers", icon: "connectivity" as const },
  ],
  layoutTitle: "Why 2 BHK is Ideal for First-Time Buyers in Gurgaon",
  layoutDescription:
    "A 2 BHK flat offers the perfect entry point into Gurgaon real estate. With lower EMIs, manageable maintenance costs, and sufficient space for couples or small families, it provides comfortable living while building equity in NCR's fastest-growing residential corridor.",
  layoutFeatures: [
    "Comfortable master bedroom with attached bathroom",
    "Second bedroom for guests, children, or home office",
    "Compact living and dining area optimized for functionality",
    "Modern kitchen with adequate storage and ventilation",
    "Balcony for fresh air and natural light",
    "Lower EMI burden making homeownership accessible",
  ],
  localLandmarks: {
    schools: [
      "Euro International School (10 mins)",
      "GD Goenka Public School (12 mins)",
      "Delhi Public School (15 mins)",
      "Ryan International (14 mins)",
    ],
    hospitals: [
      "Manipal Hospital (10 mins)",
      "Fortis Memorial Hospital (15 mins)",
      "Max Hospital (18 mins)",
      "Narayana Hospital (16 mins)",
    ],
    malls: [
      "M3M 65th Avenue (8 mins)",
      "Vegas Mall (12 mins)",
      "Ambience Mall (15 mins)",
      "MGF Metropolitan (18 mins)",
    ],
    connectivity: [
      "IGI Airport (15-20 mins)",
      "Cyber City (18 mins)",
      "Huda City Metro (15 mins)",
      "Dwarka Expressway (Direct)",
    ],
  },
  faqs: [
    {
      question: "What is the starting price for 2 BHK flats in Gurgaon?",
      answer:
        "2 BHK flats in Gurgaon start from approximately Rs. 45 Lakh in affordable housing projects on Dwarka Expressway and Sohna Road. Standard 2 BHK apartments range from Rs. 50-80 Lakh, while premium 2 BHK in established areas cost Rs. 80 Lakh to Rs. 1.2 Crore.",
    },
    {
      question: "Which areas offer affordable 2 BHK flats in Gurgaon?",
      answer:
        "Most affordable 2 BHK options are in Sector 81-95 on Dwarka Expressway, Sohna Road, New Gurgaon sectors, and Affordable Housing projects under HUDA scheme. These areas offer 2 BHK under Rs. 60 Lakh with good connectivity and upcoming infrastructure.",
    },
    {
      question: "What is the EMI for a 2 BHK flat in Gurgaon?",
      answer:
        "For a 2 BHK flat costing Rs. 60 Lakh with 80% loan (Rs. 48 Lakh) at 8.5% interest for 20 years, EMI is approximately Rs. 41,500. For Rs. 50 Lakh flat with same terms, EMI is around Rs. 34,500. Lower interest rates and longer tenure reduce EMI further.",
    },
    {
      question: "Are there 2 BHK flats in Gurgaon under 50 Lakh?",
      answer:
        "Yes, affordable housing projects on Dwarka Expressway and Sohna Road offer 2 BHK flats under Rs. 50 Lakh. Projects like Signature Global, ROF, and Pareena have 2 BHK ranging from Rs. 45-50 Lakh under HUDA affordable housing scheme with subsidized rates.",
    },
    {
      question: "Is 2 BHK a good investment in Gurgaon for rental income?",
      answer:
        "Yes, 2 BHK flats offer excellent rental potential in Gurgaon with yields of 3-4% annually. Proximity to offices in Cyber City, MG Road, and Golf Course Road ensures steady rental demand from working professionals. Furnished 2 BHK commands Rs. 25,000-40,000 monthly rent.",
    },
  ],
  relatedLinks: [
    {
      title: "3 BHK Flats in Gurgaon",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Need more space? Explore our 3 bedroom options",
    },
    {
      title: "Ready to Move Flats in Gurgaon",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession homes across configurations",
    },
    {
      title: "Upcoming Projects in Gurugram",
      href: "/upcoming-projects-in-gurugram",
      description: "New launches with pre-launch pricing advantages",
    },
  ],
  configurationFilter: "2 BHK",
  primaryKeyword: "2 BHK Flat in Gurgaon",
  secondaryKeywords: [
    "2bhk flat in gurgaon",
    "2 bhk in gurgaon",
    "2 bhk for sale in gurgaon",
    "2 bhk flats in dwarka expressway",
    "2 bhk affordable flats in gurgaon",
  ],
};

const pageFaqs = pageData.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function TwoBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "2 BHK Flat in Gurgaon", url: `${BASE_URL}/2-bhk-flat-in-gurgaon` },
        ]}
      />
      <WebPageSchema
        title="2 BHK Flat in Gurgaon 2026 | Affordable 2 Bedroom Apartments"
        description="Discover affordable 2 BHK flats in Gurgaon perfect for young professionals and couples."
        url={`${BASE_URL}/2-bhk-flat-in-gurgaon`}
      />
      <FAQSchema faqs={pageFaqs} />
      <CategoryPageTemplate {...pageData} />
    </>
  );
}
