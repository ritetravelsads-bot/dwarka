import { Metadata } from "next";
import SEOLandingPageTemplate, { SEOPageContent } from "@/components/seo-pages/SEOLandingPageTemplate";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";
const PAGE_URL = `${BASE_URL}/4-bhk-flats-in-gurgaon`;

export const metadata: Metadata = {
  title: "4 BHK Flats in Gurgaon | Luxury Homes on Dwarka Expressway",
  description:
    "Explore luxury 4 BHK flats in Gurgaon, 4 BHK builder floors, and premium residences on Dwarka Expressway. Enjoy larger layouts, premium amenities, and seamless connectivity to Delhi, Airport, schools, and healthcare facilities.",
  keywords:
    "4bhk, 4 bhk luxury apartments in gurgaon, 4 bhk flats in gurgaon, 4 bhk flats in dwarka, 4bhk in gurgaon, 4 bhk apartment in gurgaon, 4 bhk builder floor in gurgaon, 4 bhk home, 4 bhk layout",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "4 BHK Flats in Gurgaon | Luxury Homes on Dwarka Expressway",
    description:
      "Explore luxury 4 BHK flats in Gurgaon, 4 BHK builder floors, and premium residences on Dwarka Expressway. Enjoy larger layouts, premium amenities, and seamless connectivity to Delhi, Airport, schools, and healthcare facilities.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/assets/img/Og-Image.png`,
        width: 1200,
        height: 630,
        alt: "4 BHK Flats in Gurgaon",
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
  heroTitle: "Discover Premium 4 BHK Flats in Gurgaon",
  heroSubtitle:
    "Explore luxury 4 BHK flats in Gurgaon, 4 BHK builder floors, and premium residences on Dwarka Expressway. Enjoy larger layouts, premium amenities, and seamless connectivity to Delhi, Airport, schools, and healthcare facilities.",
  heroImage: "/assets/img/4bhk-hero-bg.jpg",

  trustIndicators: [
    { icon: "route", value: "4 BHK Homes", label: "Luxury Configurations" },
    { icon: "school", value: "10 Min", label: "Euro International School" },
    { icon: "hospital", value: "10 Min", label: "Manipal Hospital" },
    { icon: "route", value: "Dwarka Expressway", label: "Prime Connectivity" },
  ],

  quickFacts: [
    { label: "Ideal Family Size", value: "6–8 Members" },
    { label: "Investment Potential", value: "15–18% YoY" },
    { label: "Schools & Hospitals", value: "10 Min Away" },
    { label: "Luxury Layout", value: "2500–4500 Sq.Ft." },
  ],

  projectsSectionTitle: "Premium 4 BHK Projects at a Glance",
  projectsSectionSubtitle:
    "Compare the top 4 BHK flats in Gurgaon, luxury apartments, and premium homes on Dwarka Expressway. Find the perfect property for your family, lifestyle, and investment goals.",

  projectCards: [
    {
      name: "Sobha City",
      location: "Sector 108, Dwarka Expressway",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "4 BHK Premium",
      sizeRange: "2,340–2,772 Sq.Ft.",
      startingPrice: "₹4.25 Cr*",
      connectivity: "10 Min to Airport",
      href: "/projects",
    },
    {
      name: "Godrej Vrikshya",
      location: "Dwarka Expressway",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "dark",
      configuration: "4 BHK Luxury",
      sizeRange: "2,650–3,700 Sq.Ft.",
      startingPrice: "₹4.50 Cr*",
      connectivity: "Dwarka Expressway",
      href: "/projects",
    },
    {
      name: "M3M Crown",
      location: "Near Delhi Border",
      status: "Under Construction",
      statusColor: "blue",
      headerColor: "amber",
      configuration: "4 BHK Residence",
      sizeRange: "2,570–3,100 Sq.Ft.",
      startingPrice: "₹4.10 Cr*",
      connectivity: "Near Delhi Border",
      href: "/projects",
    },
    {
      name: "4 BHK Builder Floors",
      location: "Prime Gurgaon Sectors",
      status: "Ready to Move",
      statusColor: "green",
      headerColor: "primary",
      configuration: "4 BHK Builder Floor",
      sizeRange: "2,000–4,000 Sq.Ft.",
      startingPrice: "₹2.50 Cr*",
      connectivity: "Prime Gurgaon Sectors",
      href: "/projects",
    },
  ],

  layoutTitle: "Why a 4 BHK in Gurgaon Is Different",
  layoutContent: [
    "A 4 BHK flat in Gurgaon on Dwarka Expressway offers larger carpet areas, premium community amenities, and superior connectivity compared to many traditional residential locations. Buyers looking to buy a 4 BHK in Gurgaon often prefer Dwarka Expressway because of its wide roads, planned infrastructure, premium developments, and proximity to Delhi.",
    "Living within 10 minutes of Euro International School and Manipal Hospital ensures that your family's education and healthcare needs are met without spending valuable time in highway traffic. Combined with access to IGI Airport, Cyber City, and metro connectivity, these homes offer both convenience and long-term investment potential.",
  ],
  layoutHighlights: [
    "Dedicated Family & Guest Spaces",
    "Premium Gated Communities",
    "Euro International School Nearby",
    "Manipal Hospital Nearby",
  ],
  layoutImage: "/assets/img/4bhk-building.jpg",

  localFeatures: [
    {
      icon: "school",
      title: "Elite Education",
      description:
        "Access leading schools and educational institutions within a short drive.",
    },
    {
      icon: "hospital",
      title: "Premium Healthcare",
      description:
        "World-class hospitals and healthcare facilities nearby.",
    },
    {
      icon: "connectivity",
      title: "Executive Connectivity",
      description:
        "Fast connectivity to Delhi, Airport, Metro, Cyber City, and business districts.",
    },
  ],

  localAreaTitle: "Hidden Gems Near 4 BHK Flats in Gurgaon",
  localAreaDescription:
    "Live within 10 minutes of Euro International School and Manipal Hospital, ensuring your family's education and healthcare needs are met without hitting highway traffic. Premium 4 BHK homes on Dwarka Expressway also enjoy quick access to shopping, metro stations, and business districts.",
  nearbyPlaces: [
    { name: "Euro International School", distance: "5–10 Min", type: "school" },
    { name: "DPS Gurgaon", distance: "8–10 Min", type: "school" },
    { name: "Manipal Hospital", distance: "8–10 Min", type: "hospital" },
    { name: "Medanta Medicity", distance: "15–20 Min", type: "hospital" },
    { name: "Ambience Mall", distance: "15–20 Min", type: "mall" },
    { name: "Dwarka Metro Access", distance: "10–15 Min", type: "metro" },
  ],

  faqs: [
    {
      question: "What are the best 4 BHK flats in Gurgaon?",
      answer:
        "The best 4 BHK flats in Gurgaon are located across Dwarka Expressway, Sector 106, Sector 108, Sector 113, and New Gurgaon. These projects offer luxury amenities, premium layouts, and excellent connectivity.",
    },
    {
      question: "What is the average price of a 4 BHK flat in Gurgaon?",
      answer:
        "4 BHK Builder Floors start from ₹2.50 Cr*, Premium 4 BHK Apartments from ₹4 Cr*, Luxury 4 BHK Residences from ₹5 Cr*+, and Ultra Luxury Homes from ₹7 Cr*+.",
    },
    {
      question: "What is the size range of a 4 BHK apartment in Gurgaon?",
      answer:
        "Standard 4 BHK ranges from 2,000–2,800 Sq.Ft., Premium 4 BHK from 2,800–3,500 Sq.Ft., and Luxury 4 BHK from 3,500–5,000+ Sq.Ft.",
    },
    {
      question: "Are there ready-to-move 4 BHK flats in Gurgaon?",
      answer:
        "Yes. Buyers can find ready-to-move 4 BHK flats in Gurgaon across Dwarka Expressway, New Gurgaon, and established residential communities with immediate possession options.",
    },
    {
      question: "Why buy a 4 BHK on Dwarka Expressway?",
      answer:
        "A 4 BHK on Dwarka Expressway offers larger layouts, premium amenities, wider roads, modern infrastructure, and stronger appreciation potential than many traditional residential locations.",
    },
    {
      question: "Are 4 BHK luxury apartments in Gurgaon a good investment?",
      answer:
        "Yes. Luxury 4 BHK apartments continue to attract high-net-worth individuals, NRIs, business owners, and long-term investors due to strong demand and limited premium inventory.",
    },
    {
      question: "What amenities are available in modern 4 BHK apartments?",
      answer:
        "Modern 4 BHK apartments come with Clubhouse, Swimming Pool, Gymnasium, Sports Facilities, Landscaped Gardens, Kids Play Area, and 24x7 Security.",
    },
    {
      question: "Which sectors are best for buying a 4 BHK in Gurgaon?",
      answer:
        "Sector 106 is ideal for Luxury Living, Sector 108 for Family Homes, Sector 113 for Delhi Connectivity, Sector 114 for Long-Term Investment, and New Gurgaon for Premium Communities.",
    },
    {
      question: "What is the difference between a 4 BHK apartment and a 4 BHK builder floor?",
      answer:
        "A 4 BHK apartment offers access to shared amenities and gated communities, while a 4 BHK builder floor provides greater privacy, fewer neighbours, and independent living.",
    },
    {
      question: "Are there 4 BHK builder floors available in Gurgaon?",
      answer:
        "Yes. Several premium 4 BHK builder floors are available across Dwarka Expressway, Golf Course Extension Road, and New Gurgaon.",
    },
    {
      question: "How close are schools to 4 BHK flats on Dwarka Expressway?",
      answer:
        "Many 4 BHK luxury apartments are located within 5–10 minutes of leading educational institutions including Euro International School, Delhi Public School, and other reputed schools.",
    },
    {
      question: "How close are hospitals to 4 BHK apartments in Gurgaon?",
      answer:
        "Premium residential communities on Dwarka Expressway offer quick access to healthcare facilities such as Manipal Hospital, Medanta Medicity, Fortis Hospital, and Max Hospital.",
    },
    {
      question: "What makes a 4 BHK layout different from a 3 BHK?",
      answer:
        "A 4 BHK layout typically includes an additional bedroom, larger living spaces, guest accommodation, home office options, and greater flexibility for larger families.",
    },
    {
      question: "Who should buy a 4 BHK home in Gurgaon?",
      answer:
        "4 BHK homes are ideal for larger families, business owners, NRIs, senior executives, and buyers seeking luxury living with additional space and privacy.",
    },
    {
      question: "How do I choose the best 4 BHK flat in Gurgaon?",
      answer:
        "Buyers should compare layout efficiency, carpet area, location, connectivity, builder reputation, amenities, proximity to schools and hospitals, RERA compliance, and future appreciation potential before making a purchase decision.",
    },
  ],

  relatedLinks: [
    {
      title: "Euro International School",
      href: "/projects",
      description: "Premium homes within a short driving distance",
    },
    {
      title: "Manipal Hospital Nearby",
      href: "/projects",
      description: "Healthcare access for modern family living",
    },
    {
      title: "Ready to Move 4 BHK",
      href: "/ready-to-move-flats-in-gurgaon",
      description: "Immediate possession luxury residences",
    },
    {
      title: "Dwarka Expressway Homes",
      href: "/residential-projects-on-dwarka-expressway",
      description: "Prime location near Delhi border",
    },
    {
      title: "4 BHK Builder Floors",
      href: "/projects",
      description: "Independent homes with premium specifications",
    },
    {
      title: "Luxury Apartments Gurgaon",
      href: "/projects",
      description: "Explore high-end residential communities",
    },
  ],

  ctaTitle: "Explore Premium 4 BHK Flats in Gurgaon",
  ctaDescription:
    "Explore the best 4 BHK flats in Gurgaon across Dwarka Expressway, New Gurgaon, and premium residential sectors. Compare verified properties, luxury 4 BHK apartments, spacious builder floors, and ready-to-move homes in some of Gurgaon's most sought-after locations. Live within 10 minutes of Euro International School and Manipal Hospital while enjoying seamless connectivity to Delhi, IGI Airport, Cyber City, and major business hubs across NCR.",
};

const pageFaqs = pageContent.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function FourBHKPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "4 BHK Flats in Gurgaon", url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        title="4 BHK Flats in Gurgaon | Luxury Homes on Dwarka Expressway"
        description="Explore luxury 4 BHK flats in Gurgaon, 4 BHK builder floors, and premium residences on Dwarka Expressway. Enjoy larger layouts, premium amenities, and seamless connectivity to Delhi, Airport, schools, and healthcare facilities."
        url={PAGE_URL}
      />
      <FAQSchema faqs={pageFaqs} />
      <SEOLandingPageTemplate
        content={pageContent}
        primaryKeyword="4 BHK Flats in Gurgaon"
      />
    </>
  );
}
