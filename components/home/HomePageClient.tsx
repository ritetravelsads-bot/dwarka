"use client";

import { useState } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import PriceIndexSection from "@/components/home/PriceIndexSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import TrustSection from "@/components/home/TrustSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import PopularSearches from "@/components/home/PopularSearches";
import EmiCalculator from "@/components/EmiCalculator";
import PopupForm from "@/components/PopupForm";

export default function HomePageClient() {
  const [isEmiOpen, setIsEmiOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <main>
        <HeroSlider
          onOpenEmi={() => setIsEmiOpen(true)}
          onOpenFloorPlan={() => setIsPopupOpen(true)}
        />

        <FeaturedProjects />

        <PopularSearches />

        <PriceIndexSection />

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
