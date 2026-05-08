import { Metadata } from "next";
import CategoryPageTemplate from "@/components/category/CategoryPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "3 BHK Flats in Gurgaon 2026 | Premium 3 Bedroom Apartments",
  description:
    "Explore 3 BHK flats in Gurgaon - luxury apartments, ready to move 3 BHK, and new launches. 3 BHK flats in Dwarka Expressway starting from 80 Lakh. RERA approved.",
  keywords:
    "3 bhk flats in gurgaon, 3bhk in gurgaon, 3 bhk flat for sale in gurgaon, 3 bhk luxury apartments in gurgaon, 3 bhk flats in gurgaon ready to move, 3 bhk flats in dwarka expressway, 3 bhk builder floor in gurgaon",
  alternates: {
    canonical: `${BASE_URL}/3-bhk-flats-in-gurgaon`,
  },
  openGraph: {
    title: "3 BHK Flats in Gurgaon 2026 | Premium 3 Bedroom Apartments",
    description:
      "Discover spacious 3 BHK apartments in Gurgaon with modern amenities and excellent connectivity.",
    type: "website",
    url: `${BASE_URL}/3-bhk-flats-in-gurgaon`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "3 BHK Flats in Gurgaon",
      },
    ],
  },
};

const pageData = {
  heroTitle: "Premium 3 BHK Flats in Gurgaon",
  heroSubtitle: "Perfect for Growing Families",
  heroDescription:
    "Discover spacious 3 BHK flats in Gurgaon designed for comfortable family living. From luxury apartments in gated communities to affordable builder floors, find the perfect 3 bedroom home on Dwarka Expressway and prime Gurgaon locations.",
  quickFacts: [
    { label: "Size Range", value: "1,400 – 2,500 sq.ft", icon: "size" as const },
    { label: "Price Starting", value: "₹ 80 Lakh onwards", icon: "price" as const },
    { label: "Configuration", value: "3 BHK (3 Bed + 3 Bath + Hall + Kitchen)", icon: "config" as const },
    { label: "Connectivity", value: "IGI Airport 15–20 min | Cyber City 18 min", icon: "connectivity" as const },
  ],
  layoutTitle: "Why 3 BHK is Perfect for Families in Gurgaon",
  layoutDescription:
    "A 3 BHK flat offers the ideal balance of space and affordability for Indian families. With a dedicated bedroom for parents, children, and a guest room or home office, it provides flexibility for modern family needs while being more affordable than larger configurations.",
  layoutFeatures: [
    "Master bedroom with attached bathroom and wardrobe space",
    "Second bedroom ideal for children or as a guest room",
    "Third bedroom perfect for home office or additional family members",
    "Spacious living and dining areas for family gatherings",
    "Modern kitchen with utility area for storage",
    "Multiple balconies for fresh air and natural light",
  ],
  localLandmarks: {
    schools: [
      "Euro International School (10 mins)",
      "GD Goenka Public School (12 mins)",
      "The Shri Ram School (15 mins)",
      "Pathways World School (18 mins)",
    ],
    hospitals: [
      "Manipal Hospital (10 mins)",
      "Fortis Memorial Hospital (15 mins)",
      "Medanta Hospital (18 mins)",
      "Artemis Hospital (14 mins)",
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
      "Metro Station (Planned)",
    ],
  },
  faqs: [
    {
      question: "What is the price range for 3 BHK flats in Gurgaon?",
      answer:
        "3 BHK flats in Gurgaon range from Rs. 80 Lakh to Rs. 3 Crore depending on location, developer, and amenities. Dwarka Expressway offers 3 BHK from Rs. 80 Lakh to Rs. 2.5 Crore. Premium sectors like Golf Course Road command Rs. 2-4 Crore for luxury 3 BHK.",
    },
    {
      question: "Which are the best areas for 3 BHK flats in Gurgaon?",
      answer:
        "Top areas for 3 BHK flats include Dwarka Expressway (value for money), Golf Course Road (luxury), Sohna Road (affordable), Sector 82-95 (new developments), and Nirvana Country (established community). Choice depends on budget and connectivity needs.",
    },
    {
      question: "What is the ideal size for a 3 BHK flat in Gurgaon?",
      answer:
        "Ideal 3 BHK flat sizes range from 1,400 sq.ft (compact) to 2,500 sq.ft (luxury). For a comfortable family of 4-5, a 1,600-1,800 sq.ft 3 BHK provides good room sizes, adequate storage, and proper ventilation. Luxury 3 BHKs exceed 2,000 sq.ft.",
    },
    {
      question: "Are there ready to move 3 BHK flats on Dwarka Expressway?",
      answer:
        "Yes, several projects on Dwarka Expressway offer ready to move 3 BHK flats with immediate possession. Projects like Sobha City, Godrej Meridien, and ATS Homekraft have OC-received towers. Prices for ready 3 BHK range from Rs. 1 Crore to Rs. 2.5 Crore.",
    },
    {
      question: "What amenities come with 3 BHK flats in Gurgaon?",
      answer:
        "Premium 3 BHK flats include amenities like swimming pool, clubhouse, gym, children's play area, landscaped gardens, 24/7 security, power backup, covered parking, multipurpose hall, indoor games, and some offer servant quarters and smart home features.",
    },
  ],
  relatedLinks: [
    {
      title: "4 BHK Flats in Gurgaon",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Looking for more space? Explore premium 4 BHK options",
    },
    {
      title: "2 BHK Flat in Gurgaon",
      href: "/2-bhk-flat-in-gurgaon",
      description: "Compact homes for couples and young professionals",
    },
    {
      title: "Ready to Move Flats in Gurgaon",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession options across configurations",
    },
  ],
  configurationFilter: "3 BHK",
  primaryKeyword: "3 BHK Flats in Gurgaon",
  secondaryKeywords: [
    "3bhk in gurgaon",
    "3 bhk flat for sale in gurgaon",
    "3 bhk luxury apartments in gurgaon",
    "3 bhk flats in dwarka expressway",
  ],
};

const pageFaqs = pageData.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function ThreeBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "3 BHK Flats in Gurgaon", url: `${BASE_URL}/3-bhk-flats-in-gurgaon` },
        ]}
      />
      <WebPageSchema
        title="3 BHK Flats in Gurgaon 2026 | Premium 3 Bedroom Apartments"
        description="Discover spacious 3 BHK apartments in Gurgaon with modern amenities and excellent connectivity."
        url={`${BASE_URL}/3-bhk-flats-in-gurgaon`}
      />
      <FAQSchema faqs={pageFaqs} />
      <CategoryPageTemplate {...pageData} />
    </>
  );
}
