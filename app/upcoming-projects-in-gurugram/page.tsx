import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/upcoming-projects-in-gurugram`;

export const metadata: Metadata = {
  title: "Upcoming Projects in Gurugram 2026 | New Launches & Pre-Launch",
  description:
    "Discover upcoming projects in Gurugram - new launches, pre-launch offers & best investment opportunities. Latest residential & commercial projects in Gurgaon.",
  keywords:
    "upcoming projects in gurugram, new launch in gurgaon, new upcoming projects in gurgaon, upcoming projects on dwarka expressway, pre launch residential projects in gurgaon, properties on dwarka expressway, new commercial projects in gurgaon, affordable housing dwarka expressway, Best Projects on Dwarka Expressway, flat in dwarka expressway",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Upcoming Projects in Gurugram | New Launches 2026",
    description:
      "Early bird offers on upcoming projects in Gurugram. Pre-launch prices, payment flexibility & maximum appreciation potential.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "Upcoming Projects in Gurugram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageContent: SEOPageContent = {
  heroTagline: "Be the First Investor",
  heroTitle: "Early-Bird Upcoming Projects in Gurugram",
  heroSubtitle:
    "Get exclusive access to pre-launch projects with early bird pricing. Maximize your returns by investing in Gurugram's most anticipated developments before they hit the market.",
  heroImage: "/assets/img/upcoming-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "10-15%", label: "Pre-Launch Discount" },
    { icon: "plane", value: "50+", label: "New Launches" },
    { icon: "shield", value: "RERA", label: "Pre-Registered" },
  ],

  quickFacts: [
    { label: "Early Discount", value: "10-15%" },
    { label: "Best Units", value: "First Choice" },
    { label: "Appreciation", value: "15-20%" },
    { label: "Flex Payment", value: "CLP Plans" },
  ],

  projectsSectionTitle: "Upcoming New Launches at a Glance",
  projectsSectionSubtitle: "Be among the first to invest in these upcoming projects with pre-launch pricing.",

  projectCards: [
    {
      name: "Godrej Zenith",
      location: "Sector 89, Gurgaon",
      status: "New Launch",
      statusColor: "red",
      headerColor: "primary",
      configuration: "3/4 BHK Premium",
      sizeRange: "1,800 - 3,200 Sq.Ft.",
      startingPrice: "Rs. 2.2 Cr*",
      connectivity: "Pre-Launch Price",
      href: "/projects",
    },
    {
      name: "M3M Altitude",
      location: "Sector 65, Gurgaon",
      status: "New Launch",
      statusColor: "red",
      headerColor: "dark",
      configuration: "2/3 BHK",
      sizeRange: "1,200 - 2,100 Sq.Ft.",
      startingPrice: "Rs. 1.4 Cr*",
      connectivity: "Golf Course Ext",
      href: "/projects",
    },
    {
      name: "Tata Primanti",
      location: "Sector 72, Gurgaon",
      status: "New Launch",
      statusColor: "blue",
      headerColor: "amber",
      configuration: "3/4/5 BHK Villas",
      sizeRange: "2,500 - 5,000 Sq.Ft.",
      startingPrice: "Rs. 3.5 Cr*",
      connectivity: "Villa Township",
      href: "/projects",
    },
  ],

  layoutTitle: "Why Invest in Upcoming Projects in Gurugram?",
  layoutContent: [
    "Investing in upcoming projects in Gurugram offers the advantage of pre-launch pricing, typically 10-15% lower than market rates. Early investors also get priority in unit selection, choosing the best floors, views, and configurations.",
    "Gurugram's real estate market continues to expand with new residential and commercial projects across Dwarka Expressway, Golf Course Extension Road, and emerging sectors. Top developers are launching premium projects with innovative designs and amenities.",
    "The city's infrastructure development, including metro extensions, road improvements, and upcoming commercial hubs, makes upcoming projects attractive for both end-users and investors seeking long-term appreciation.",
  ],
  layoutHighlights: [
    "Pre-launch prices 10-15% below market rates",
    "Priority booking for best unit selection",
    "Flexible payment plans during construction",
    "Maximum appreciation potential from early investment",
  ],
  layoutImage: "/assets/img/upcoming-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Future Infrastructure",
      description: "Upcoming projects are planned around future schools, metros, and commercial hubs for maximum appreciation.",
    },
    {
      icon: "hospital",
      title: "Planned Amenities",
      description: "World-class hospitals and healthcare facilities planned in the project vicinity as part of township development.",
    },
    {
      icon: "connectivity",
      title: "Growth Corridors",
      description: "Located along upcoming metro lines, expressways, and commercial zones for long-term value appreciation.",
    },
  ],

  localAreaTitle: "Emerging Investment Zones",
  localAreaDescription:
    "Gurugram's upcoming projects are concentrated in high-growth corridors with excellent infrastructure and connectivity to major business districts.",
  nearbyPlaces: [
    { name: "Dwarka Expressway", distance: "Prime Corridor", type: "highway" },
    { name: "Golf Course Extension", distance: "Luxury Zone", type: "highway" },
    { name: "SPR (Southern Peripheral)", distance: "Emerging Hub", type: "highway" },
    { name: "New Gurgaon", distance: "Affordable Zone", type: "highway" },
    { name: "Sector 102-115", distance: "High Growth", type: "metro" },
    { name: "Pataudi Road", distance: "Value Corridor", type: "highway" },
  ],

  faqs: [
    {
      question: "What are the best upcoming projects in Gurugram for 2026?",
      answer:
        "Top upcoming projects in Gurugram include new launches from Godrej, M3M, Sobha, DLF, and Tata Housing along Dwarka Expressway and Golf Course Extension Road. These projects offer luxury amenities and excellent appreciation potential.",
    },
    {
      question: "How can I book an upcoming project in Gurugram?",
      answer:
        "To book an upcoming project, you can register for pre-launch alerts, pay a token amount (typically 5-10% of property value), and complete KYC formalities. We help you navigate the booking process and secure the best units.",
    },
    {
      question: "What is the advantage of buying in pre-launch phase?",
      answer:
        "Pre-launch buyers get prices 10-15% below market rates, first choice of units, flexible payment plans spread over construction period, and maximum appreciation as the project nears completion.",
    },
    {
      question: "Are upcoming projects in Gurugram RERA registered?",
      answer:
        "Yes, all upcoming projects must obtain RERA registration before marketing. We only recommend RERA registered projects ensuring transparency, timely delivery, and legal protection for buyers.",
    },
    {
      question: "What is the expected appreciation on upcoming projects?",
      answer:
        "Upcoming projects in prime locations like Dwarka Expressway typically see 15-20% appreciation from launch to possession. Early investors benefit from both pre-launch discounts and post-launch price increases.",
    },
  ],

  relatedLinks: [
    {
      title: "Residential Projects",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Premium homes on Dwarka Expressway",
    },
    {
      title: "Commercial Property",
      href: "/commercial-property-in-gurgaon",
      description: "Office spaces & retail shops",
    },
    {
      title: "Ready to Move",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession properties",
    },
    {
      title: "3 BHK Flats",
      href: "/3-bhk-flats-in-gurgaon",
      description: "Spacious apartments for families",
    },
    {
      title: "4 BHK Flats",
      href: "/4-bhk-flats-in-gurgaon",
      description: "Luxury penthouses & apartments",
    },
    {
      title: "2 BHK Flats",
      href: "/2-bhk-flats-in-gurgaon",
      description: "Compact living options",
    },
  ],
};

const pageFaqs = pageContent.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function UpcomingProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Upcoming Projects in Gurugram", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="Upcoming Projects in Gurugram"
        description="Discover upcoming projects in Gurugram - new launches, pre-launch offers & best investment opportunities."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="Upcoming Projects in Gurugram"
      />
    </>
  );
}
