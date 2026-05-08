import { Metadata } from "next";
import CategoryPageTemplate from "@/components/category/CategoryPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "Ready to Move Flats in Gurgaon 2026 | Immediate Possession Homes",
  description:
    "Ready to move flats in Gurgaon with immediate possession. Move-in ready apartments in Dwarka Expressway, ready to move flats under 1 crore. RERA approved projects.",
  keywords:
    "ready to move flats in gurgaon, ready to move apartments, ready to move flats, ready to move flats in dwarka expressway, ready to move flats in gurgaon under 1 crore, dwarka expressway flats",
  alternates: {
    canonical: `${BASE_URL}/ready-to-move-flats-in-gurgaon`,
  },
  openGraph: {
    title: "Ready to Move Flats in Gurgaon 2026 | Immediate Possession",
    description:
      "Discover move-in ready flats in Gurgaon with OC received. No waiting, immediate possession homes.",
    type: "website",
    url: `${BASE_URL}/ready-to-move-flats-in-gurgaon`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Ready to Move Flats in Gurgaon",
      },
    ],
  },
};

const pageData = {
  heroTitle: "Ready to Move Flats in Gurgaon",
  heroSubtitle: "Move In Today, No Waiting",
  heroDescription:
    "Find your perfect ready to move flat in Gurgaon with immediate possession. Our curated selection of move-in ready apartments on Dwarka Expressway and prime locations comes with OC received, fully functional amenities, and established neighborhoods.",
  quickFacts: [
    { label: "Size Range", value: "900 – 4,000 sq.ft", icon: "size" as const },
    { label: "Price Starting", value: "₹ 60 Lakh onwards", icon: "price" as const },
    { label: "Configuration", value: "2 BHK / 3 BHK / 4 BHK | OC Received", icon: "config" as const },
    { label: "Connectivity", value: "IGI Airport 15–20 min | Cyber City 18 min", icon: "connectivity" as const },
  ],
  layoutTitle: "Benefits of Ready to Move Flats in Gurgaon",
  layoutDescription:
    "Ready to move flats eliminate the uncertainty of under-construction properties. You can physically inspect the actual unit, verify construction quality, and start living immediately. No GST on ready properties with OC makes them financially attractive.",
  layoutFeatures: [
    "Immediate possession - no waiting period or construction delays",
    "What you see is what you get - inspect actual unit before purchase",
    "No GST applicable on ready properties with Occupancy Certificate",
    "Established neighborhoods with functional amenities and community",
    "Start earning rent immediately if buying for investment",
    "No risk of project delays or specification changes",
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
      "Medanta Hospital (18 mins)",
      "Max Hospital (16 mins)",
    ],
    malls: [
      "M3M 65th Avenue (8 mins)",
      "Ambience Mall (15 mins)",
      "Vegas Mall (12 mins)",
      "DLF Cyber Hub (20 mins)",
    ],
    connectivity: [
      "IGI Airport (15-20 mins)",
      "Cyber City (18 mins)",
      "Delhi Border (10 mins)",
      "Dwarka Expressway (Direct)",
    ],
  },
  faqs: [
    {
      question: "What are the advantages of ready to move flats over under-construction?",
      answer:
        "Ready to move flats offer immediate possession, no construction risk, physical unit inspection, no GST (on OC-received properties), established amenities, and immediate rental income potential. You avoid years of waiting and potential delivery delays.",
    },
    {
      question: "Are there ready to move flats in Gurgaon under 1 crore?",
      answer:
        "Yes, ready to move flats under 1 crore are available in areas like Sector 81-95 on Dwarka Expressway, Sohna Road, and New Gurgaon. 2 BHK apartments ranging 1,000-1,200 sq.ft are available in this budget from reputed developers.",
    },
    {
      question: "What documents should I verify for ready to move flats?",
      answer:
        "Essential documents include Occupancy Certificate (OC), Completion Certificate (CC), RERA registration, title deed, approved building plan, electricity and water connection approvals, NOC from fire department, and society registration. Our team assists with complete documentation.",
    },
    {
      question: "Is there GST on ready to move flats in Gurgaon?",
      answer:
        "No GST is applicable on ready to move flats that have received Occupancy Certificate (OC). This makes them financially attractive compared to under-construction properties where 5% GST applies on affordable housing and 12% on other residential projects.",
    },
    {
      question: "What is the price range for ready to move flats on Dwarka Expressway?",
      answer:
        "Ready to move flats on Dwarka Expressway range from Rs. 60 Lakh for 2 BHK to Rs. 4 Crore+ for luxury 4 BHK apartments. Price per sq.ft typically ranges from Rs. 6,500 to Rs. 14,000 depending on developer, amenities, and exact location.",
    },
  ],
  relatedLinks: [
    {
      title: "3 BHK Flats in Gurgaon",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Spacious 3-bedroom ready and under-construction options",
    },
    {
      title: "4 BHK Flats in Gurgaon",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Luxury 4-bedroom apartments for larger families",
    },
    {
      title: "2 BHK Flat in Gurgaon",
      href: "/2-bhk-flat-in-gurgaon",
      description: "Affordable 2-bedroom homes for couples and professionals",
    },
  ],
  primaryKeyword: "Ready to Move Flats in Gurgaon",
  secondaryKeywords: [
    "ready to move apartments",
    "ready to move flats in dwarka expressway",
    "ready to move flats in gurgaon under 1 crore",
  ],
};

const pageFaqs = pageData.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function ReadyToMovePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Ready to Move Flats in Gurgaon", url: `${BASE_URL}/ready-to-move-flats-in-gurgaon` },
        ]}
      />
      <WebPageSchema
        title="Ready to Move Flats in Gurgaon 2026 | Immediate Possession Homes"
        description="Discover move-in ready flats in Gurgaon with OC received. No waiting, immediate possession homes."
        url={`${BASE_URL}/ready-to-move-flats-in-gurgaon`}
      />
      <FAQSchema faqs={pageFaqs} />
      <CategoryPageTemplate {...pageData} />
    </>
  );
}
