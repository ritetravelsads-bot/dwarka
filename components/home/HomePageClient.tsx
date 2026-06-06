"use client";

import { useState } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import PriceIndexSection from "@/components/home/PriceIndexSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import TrustSection from "@/components/home/TrustSection";
import FAQContactSection from "@/components/home/FAQContactSection";
import PopularSearches from "@/components/home/PopularSearches";
import PopupForm from "@/components/PopupForm";
import PropertyCardsDrawer from "@/components/PropertyCardsDrawer";

export default function HomePageClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <main>
        <HeroSlider
          onOpenEmi={undefined}
          onOpenFloorPlan={() => setIsPopupOpen(true)}
        />

        <FeaturedProjects />

        <PopularSearches />

        <PriceIndexSection />

        <HighlightsSection />

        <AmenitiesSection />

        <TrustSection />

        <FAQContactSection />
      </main>

      {/* Property Cards Drawer — fixed on right edge */}
      <PropertyCardsDrawer />

      {/* Popup Form */}
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
    </>
  );
}
