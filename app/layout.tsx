import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dwarka Expressway | Premium Real Estate Projects in Gurgaon",
  description:
    "Discover premium residential and commercial projects on Dwarka Expressway, Gurgaon. Explore new launches, ready-to-move, and under-construction properties from top developers.",
  keywords:
    "dwarka expressway, gurgaon real estate, premium apartments, luxury homes, commercial projects, SCO plots, new launch projects",
  authors: [{ name: "Rite Reality" }],
  openGraph: {
    title: "Dwarka Expressway | Premium Real Estate Projects",
    description:
      "Discover premium residential and commercial projects on Dwarka Expressway, Gurgaon.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-[#0f0f1a] font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
