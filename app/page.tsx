"use client";

import { useState } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import TrustSection from "@/components/home/TrustSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import EmiCalculator from "@/components/EmiCalculator";

export default function HomePage() {
  const [isEmiOpen, setIsEmiOpen] = useState(false);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Dwarka Expressway NCR",
            image: "https://dwarkaexpresswayncr.com/assets/img/proj/p-1.png",
            url: "https://dwarkaexpresswayncr.com/",
            telephone: "+91 9873702365",
            priceRange: "50 lakh - 6 CR",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Unit no. 555 JMD Megapolis Badshahpur Sohna Road, Sector 48",
              addressLocality: "Gurugram, Haryana",
              postalCode: "122018",
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "19:00",
            },
            sameAs: [
              "https://www.instagram.com/dwarkaexpresswayncr/",
              "https://www.facebook.com/people/Dwarka-Expressway-Ncr/61586373907850/",
            ],
          }),
        }}
      />

      <HeroSlider
        onOpenEmi={() => setIsEmiOpen(true)}
        onOpenFloorPlan={() => setIsFloorPlanOpen(true)}
      />
      
      <FeaturedProjects />
      
      <AmenitiesSection />
      
      <TrustSection />
      
      <FAQSection />
      
      <ContactSection />

      {/* EMI Calculator Modal */}
      <EmiCalculator isOpen={isEmiOpen} onClose={() => setIsEmiOpen(false)} />

      {/* Floor Plan Modal - Will implement with project selection */}
      {isFloorPlanOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsFloorPlanOpen(false)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
            <button
              onClick={() => setIsFloorPlanOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-[#0f0f1a] mb-4">View Floor Plans</h2>
            <p className="text-gray-600 mb-6">
              Select a project from our featured listings to view detailed floor plans and pricing.
            </p>
            <a
              href="#residential-project"
              onClick={() => setIsFloorPlanOpen(false)}
              className="inline-block bg-[#c8a55d] hover:bg-[#b8954d] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Browse Projects
            </a>
          </div>
        </div>
      )}
    </>
  );
}
