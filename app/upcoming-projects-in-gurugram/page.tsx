import { Metadata } from "next";
import CategoryPageTemplate from "@/components/category/CategoryPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "Upcoming Projects in Gurugram 2026 | New Launch Properties",
  description:
    "Discover upcoming projects in Gurugram - new launches, pre-launch offers. Best upcoming residential and commercial projects on Dwarka Expressway with attractive launch prices.",
  keywords:
    "upcoming projects in gurugram, new launch in gurgaon, new upcoming projects in gurgaon, upcoming projects on dwarka expressway, pre launch residential projects in gurgaon, properties on dwarka expressway",
  alternates: {
    canonical: `${BASE_URL}/upcoming-projects-in-gurugram`,
  },
  openGraph: {
    title: "Upcoming Projects in Gurugram 2026 | New Launch Properties",
    description:
      "Explore new launch and pre-launch properties in Gurugram with exclusive pricing and early bird offers.",
    type: "website",
    url: `${BASE_URL}/upcoming-projects-in-gurugram`,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Upcoming Projects in Gurugram",
      },
    ],
  },
};

const pageData = {
  heroTitle: "Upcoming Projects in Gurugram 2026",
  heroSubtitle: "Be First to Invest in New Launches",
  heroDescription:
    "Get exclusive access to upcoming projects in Gurugram with pre-launch pricing advantages. Discover new residential and commercial developments on Dwarka Expressway and prime Gurgaon locations from top developers before general market release.",
  quickFacts: [
    { label: "Size Range", value: "1,000 – 5,000 sq.ft", icon: "size" as const },
    { label: "Price Starting", value: "₹ 1 Crore onwards (pre-launch)", icon: "price" as const },
    { label: "Configuration", value: "2 BHK / 3 BHK / 4 BHK / 5 BHK", icon: "config" as const },
    { label: "Connectivity", value: "IGI Airport 15–20 min | Metro Extension 2027", icon: "connectivity" as const },
  ],
  layoutTitle: "Why Invest in Upcoming Projects in Gurugram",
  layoutDescription:
    "Investing in upcoming projects offers significant advantages including pre-launch pricing 10-15% below market rates, flexible payment plans, and maximum appreciation potential. Gurugram's continued growth as NCR's business hub ensures strong demand for new developments.",
  layoutFeatures: [
    "Pre-launch prices typically 10-15% lower than market rates",
    "Flexible construction-linked payment plans reducing financial burden",
    "Choice of best units including premium floors and views",
    "Maximum capital appreciation potential from launch to possession",
    "Latest architectural designs and modern amenities",
    "RERA registration ensuring project delivery timelines",
  ],
  localLandmarks: {
    schools: [
      "Euro International School (10 mins)",
      "GD Goenka Public School (12 mins)",
      "Pathways World School (18 mins)",
      "Scottish High International (15 mins)",
    ],
    hospitals: [
      "Manipal Hospital (10 mins)",
      "Medanta Hospital (15 mins)",
      "Fortis Memorial Hospital (18 mins)",
      "Max Hospital (16 mins)",
    ],
    malls: [
      "M3M 65th Avenue (8 mins)",
      "Ambience Mall (15 mins)",
      "DLF Cyber Hub (20 mins)",
      "Vegas Mall (12 mins)",
    ],
    connectivity: [
      "IGI Airport (15-20 mins)",
      "Dwarka Expressway (Direct)",
      "Delhi Metro Extension (2027)",
      "NH-48 Highway (10 mins)",
    ],
  },
  faqs: [
    {
      question: "What are the upcoming projects in Gurugram for 2026?",
      answer:
        "Major upcoming projects in Gurugram for 2026 include new phases from Sobha, M3M, Godrej, and Signature Global on Dwarka Expressway. Pre-launch projects offer 10-15% discount on market rates with flexible payment options. Contact us for exclusive early access to new launches.",
    },
    {
      question: "Is it safe to invest in upcoming projects before launch?",
      answer:
        "Yes, investing in RERA-registered upcoming projects is safe. RERA mandates project registration before advertising, ensuring legal compliance. Verify RERA number, developer track record, and project approvals before investing. We only recommend verified developers.",
    },
    {
      question: "What is the advantage of pre-launch investment in Gurugram?",
      answer:
        "Pre-launch investments offer 10-15% lower prices than post-launch rates, best unit selection, flexible payment plans (20-40-40 or construction-linked), and maximum appreciation from launch to possession. Early investors typically see 20-30% value increase by possession.",
    },
    {
      question: "When is the best time to book in upcoming projects?",
      answer:
        "The best time is during soft launch or pre-launch phase when developers offer maximum discounts and promotions. First-day bookings often get additional benefits like free parking, club membership, or modular kitchen. Register with us for early notifications.",
    },
    {
      question: "What documents should I check before investing in new launches?",
      answer:
        "Essential documents include RERA registration certificate, land ownership documents, environmental clearance, building plan approval, developer's past project delivery records, and allotment letter format. Our team helps verify all documentation.",
    },
  ],
  relatedLinks: [
    {
      title: "Residential Projects on Dwarka Expressway",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Ongoing residential developments with various possession dates",
    },
    {
      title: "Ready to Move Flats in Gurgaon",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "For immediate possession requirements",
    },
    {
      title: "3 BHK Flats in Gurgaon",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Spacious family apartments across Gurgaon",
    },
  ],
  primaryKeyword: "Upcoming Projects in Gurugram",
  secondaryKeywords: [
    "new launch in gurgaon",
    "new upcoming projects in gurgaon",
    "upcoming projects on dwarka expressway",
    "pre launch residential projects in gurgaon",
  ],
};

const pageFaqs = pageData.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function UpcomingProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Upcoming Projects in Gurugram", url: `${BASE_URL}/upcoming-projects-in-gurugram` },
        ]}
      />
      <WebPageSchema
        title="Upcoming Projects in Gurugram 2026 | New Launch Properties"
        description="Explore new launch and pre-launch properties in Gurugram with exclusive pricing and early bird offers."
        url={`${BASE_URL}/upcoming-projects-in-gurugram`}
      />
      <FAQSchema faqs={pageFaqs} />
      <CategoryPageTemplate {...pageData} />
    </>
  );
}
