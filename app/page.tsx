"use client";

import { useState } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import LocationSection from "@/components/home/LocationSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import TrustSection from "@/components/home/TrustSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import EmiCalculator from "@/components/EmiCalculator";
import PopupForm from "@/components/PopupForm";

export default function HomePage() {
  const [isEmiOpen, setIsEmiOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Dwarka Expressway Ncr",
            image: "https://dwarkaexpresswayncr.com/assets/img/proj/p-1.png",
            url: "https://dwarkaexpresswayncr.com/",
            telephone: "+91 9873702365",
            priceRange: "50 lakh - 6 CR",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Unit no. 555 JMD Megapolis Badshahpur Sohna Road, Sector 48",
              addressLocality: "Gurugram, Haryana",
              postalCode: "122018",
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "09:00",
              closes: "07:00",
            },
            sameAs: [
              "https://www.instagram.com/dwarkaexpresswayncr/",
              "https://www.facebook.com/people/Dwarka-Expressway-Ncr/61586373907850/",
            ],
          }),
        }}
      />

      <main>
        <HeroSlider
          onOpenEmi={() => setIsEmiOpen(true)}
          onOpenFloorPlan={() => setIsPopupOpen(true)}
        />

        <FeaturedProjects />

        <LocationSection />

        <HighlightsSection />

        <AmenitiesSection />

        <TrustSection />

        <FAQSection />

        <ContactSection />
      </main>

      {/* EMI Calculator Modal */}
      {isEmiOpen && <EmiCalculator onClose={() => setIsEmiOpen(false)} />}

      {/* Popup Form */}
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
    </>
  );
}
