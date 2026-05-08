import { Metadata } from "next";
import CategoryPageTemplate from "@/components/category/CategoryPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "4 BHK Flats in Gurgaon 2026 | Luxury 4 Bedroom Apartments",
  description:
    "Explore luxury 4 BHK flats in Gurgaon - premium apartments, penthouses, and builder floors. 4 BHK in Dwarka Expressway starting from 1.5 Crore. RERA approved projects.",
  keywords:
    "4 bhk flats in gurgaon, 4bhk, 4bhk in gurgaon, 4 bhk luxury apartments in gurgaon, 4 bhk apartment in gurgaon, 4 bhk flats in dwarka, 4 bhk builder floor in gurgaon",
  alternates: {
    canonical: `${BASE_URL}/4-bhk-flats-in-gurgaon`,
  },
  openGraph: {
    title: "4 BHK Flats in Gurgaon 2026 | Luxury 4 Bedroom Apartments",
    description:
      "Discover premium 4 BHK apartments and penthouses in Gurgaon with world-class amenities.",
    type: "website",
    url: `${BASE_URL}/4-bhk-flats-in-gurgaon`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "4 BHK Flats in Gurgaon",
      },
    ],
  },
};

const pageData = {
  heroTitle: "Luxury 4 BHK Flats in Gurgaon",
  heroSubtitle: "Spacious Living for Large Families",
  heroDescription:
    "Experience luxury living with our curated selection of 4 BHK flats in Gurgaon. Premium apartments and penthouses on Dwarka Expressway featuring expansive layouts, designer interiors, and world-class amenities for discerning families seeking the finest homes.",
  quickFacts: [
    { label: "Size Range", value: "2,200 - 5,000 sq.ft", icon: "size" as const },
    { label: "Price Starting", value: "1.5 Crore", icon: "price" as const },
    { label: "Bedrooms", value: "4 BHK", icon: "config" as const },
    { label: "Type", value: "Luxury", icon: "connectivity" as const },
  ],
  layoutTitle: "Why Choose 4 BHK Luxury Living in Gurgaon",
  layoutDescription:
    "A 4 BHK apartment represents the pinnacle of residential comfort, ideal for large families or those who desire dedicated spaces for various needs. With separate bedrooms for family members, home office, and entertainment areas, 4 BHK homes on Dwarka Expressway offer unmatched lifestyle.",
  layoutFeatures: [
    "Grand master suite with walk-in closet and luxury bathroom",
    "Separate children's bedrooms with attached bathrooms",
    "Dedicated guest bedroom for visitors and relatives",
    "Home office or library for work-from-home professionals",
    "Large living area suitable for entertaining guests",
    "Premium finishes, modular kitchen, and servant quarters",
  ],
  localLandmarks: {
    schools: [
      "Euro International School (10 mins)",
      "GD Goenka Public School (12 mins)",
      "Scottish High International (15 mins)",
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
      "DLF Cyber Hub (15 mins)",
      "Ambience Mall (18 mins)",
      "Good Earth City Centre (12 mins)",
    ],
    connectivity: [
      "IGI Airport (15-20 mins)",
      "Cyber City (18 mins)",
      "Golf Course Road (15 mins)",
      "Delhi via Expressway (25 mins)",
    ],
  },
  faqs: [
    {
      question: "What is the average price of 4 BHK flats on Dwarka Expressway?",
      answer:
        "4 BHK flats on Dwarka Expressway range from Rs. 1.5 Crore to Rs. 6 Crore depending on developer, size, and amenities. Standard 4 BHK (2,200-2,800 sq.ft) costs Rs. 1.5-2.5 Crore, while luxury penthouses (3,500-5,000 sq.ft) range from Rs. 3.5-6 Crore.",
    },
    {
      question: "Which developers offer the best 4 BHK flats in Gurgaon?",
      answer:
        "Top developers for luxury 4 BHK include M3M (M3M Mansion, M3M Golf Estate), Sobha (Sobha City), DLF (DLF Camellias, DLF Privana), Godrej (Godrej Summit), and Trump Towers. These developers offer premium specifications, established communities, and reliable delivery.",
    },
    {
      question: "What amenities are included in luxury 4 BHK apartments?",
      answer:
        "Luxury 4 BHK amenities include private lift lobby, smart home automation, premium Italian marble, modular kitchen with appliances, servant quarters, multiple car parking, clubhouse membership, infinity pools, concierge services, and 24/7 security with video surveillance.",
    },
    {
      question: "Are 4 BHK penthouses available in Gurgaon?",
      answer:
        "Yes, several premium projects offer 4 BHK penthouses ranging from 3,500-5,000 sq.ft with private terraces, panoramic views, and exclusive amenities. M3M Mansion, DLF Camellias, and Ireo Victory Valley offer stunning penthouses priced from Rs. 4-10 Crore.",
    },
    {
      question: "What is the maintenance cost for 4 BHK flats in Gurgaon?",
      answer:
        "Maintenance costs for 4 BHK flats typically range from Rs. 3-5 per sq.ft per month for standard projects and Rs. 6-10 per sq.ft for ultra-luxury projects. For a 3,000 sq.ft 4 BHK, expect monthly maintenance of Rs. 15,000-30,000 depending on amenities and services.",
    },
  ],
  relatedLinks: [
    {
      title: "3 BHK Flats in Gurgaon",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Explore spacious 3 BHK alternatives for families",
    },
    {
      title: "Residential Projects on Dwarka Expressway",
      href: "/residential-projects-on-dwarka-expressway",
      description: "All residential developments on the expressway",
    },
    {
      title: "Ready to Move Flats in Gurgaon",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession luxury homes",
    },
  ],
  primaryKeyword: "4 BHK Flats in Gurgaon",
  secondaryKeywords: [
    "4bhk",
    "4bhk in gurgaon",
    "4 bhk luxury apartments in gurgaon",
    "4 bhk flats in dwarka",
  ],
};

const pageFaqs = pageData.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function FourBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "4 BHK Flats in Gurgaon", url: `${BASE_URL}/4-bhk-flats-in-gurgaon` },
        ]}
      />
      <WebPageSchema
        title="4 BHK Flats in Gurgaon 2026 | Luxury 4 Bedroom Apartments"
        description="Discover premium 4 BHK apartments and penthouses in Gurgaon with world-class amenities."
        url={`${BASE_URL}/4-bhk-flats-in-gurgaon`}
      />
      <FAQSchema faqs={pageFaqs} />
      <CategoryPageTemplate {...pageData} />
    </>
  );
}
