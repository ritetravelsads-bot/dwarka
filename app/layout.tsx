import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { OrganizationSchema, WebsiteSearchSchema } from "@/components/seo/SchemaMarkup";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  // Ensures Google uses this exact title (not generated from page content)
  title: {
    default: "Projects in Dwarka Expressway NCR - Residential | Commercial",
    template: "%s | Dwarka Expressway NCR",
  },
  // Ensures Google uses this exact description (not generated from page content)
  description:
    "2026 Rapid Infrastructure makes Dwarka Expressway Real estate Top Investment Destinations in NCR. Get Latest Price Trends, EMI Calculator.",
  keywords:
    "dwarka expressway, gurgaon real estate, premium apartments, luxury homes, commercial projects, new launch projects, gurugram property, dwarka expressway projects",
  authors: [{ name: "Dwarka Expressway NCR" }],
  creator: "Dwarka Expressway NCR",
  publisher: "Dwarka Expressway NCR",
  // Canonical URL for SEO
  metadataBase: new URL("https://www.dwarkaexpresswayncr.com"),
  alternates: {
    canonical: "/",
  },
  // Robots directives - ensures search engines index properly
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Projects in Dwarka Expressway - Residential & Commercial Properties",
    description:
      "Explore premium residential & commercial properties on Dwarka Expressway. RERA verified projects from top developers.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
    url: "https://www.dwarkaexpresswayncr.com",
    images: [
      {
        url: "https://www.dwarkaexpresswayncr.com/assets/img/Og-Image.png",
        width: 1200,
        height: 630,
        alt: "Dwarka Expressway NCR Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarka Expressway NCR - Premium Properties",
    description: "Explore premium residential & commercial properties on Dwarka Expressway.",
    images: ["https://www.dwarkaexpresswayncr.com/assets/img/Og-Image.png"],
    creator: "@dwarkaexpresswayncr",
  },
  // Verification tags
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
  // Other important meta tags
  other: {
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/assets/img/favicon.png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body className="bg-white text-dark antialiased" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* Global Schema Markup for SEO */}
        <OrganizationSchema />
        <WebsiteSearchSchema />
        
        <LayoutWrapper>{children}</LayoutWrapper>
        
        <Script
          src="https://kit.fontawesome.com/c1d1e2319d.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
