import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  title: "Projects in Dwarka Expressway Ncr- Residential | Commercial",
  description:
    "2026 Rapid Infrastructure makes Dwarka Expressway Real estate Top Investment Destinations in NCR. Get Latest Price Trends, EMI Calculator.",
  keywords:
    "dwarka expressway, gurgaon real estate, premium apartments, luxury homes, commercial projects, new launch projects",
  authors: [{ name: "Dwarka Expressway NCR" }],
  openGraph: {
    title: "Projects in Dwarka Expressway – Residential & Commercial Properties",
    description:
      "Explore premium residential & commercial properties on Dwarka Expressway.",
    type: "website",
    locale: "en_IN",
    siteName: "Dwarka Expressway NCR",
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
    title: "Dwarka Expressway NCR",
    description: "Explore premium properties.",
    images: ["https://www.dwarkaexpresswayncr.com/assets/img/Og-Image.png"],
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
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
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
