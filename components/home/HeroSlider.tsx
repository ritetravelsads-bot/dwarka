"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/banners/dwarka-banner-1.webp",
    title: ["Dwarka Expressway", "Overview"],
    description:
      "Dwarka Expressway cuts Delhi-Gurugram travel to 20 mins to airport and premium Projects in Dwarka Expressway with luxury homes and high ROI",
    showButtons: true,
  },
  {
    image: "/images/banners/dwarka-banner-2.webp",
    title: ["Investment & Real Estate", "Potential"],
    description:
      "The rapid infrastructure and new launches has made Dwarka Expressway Real estate one of the most talked-about investment destinations in NCR.",
    showButtons: false,
  },
  {
    image: "/images/banners/dwarka-banner-3.webp",
    title: ["Dealers & Upcoming", "Opportunities"],
    description:
      "Find trusted Dwarka Expressway property dealers for seamless buying, exclusive deals, and site visits on upcoming properties in Dwarka Expressway.",
    showButtons: false,
  },
];

interface HeroSliderProps {
  onOpenEmi?: () => void;
  onOpenFloorPlan?: () => void;
}

export default function HeroSlider({ onOpenEmi, onOpenFloorPlan }: HeroSliderProps) {
  const emiButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Any initialization if needed
  }, []);

  return (
    <section className="relative md:h-[85vh] pt-16 md:pt-20">
      {/* EMI Calculator Button */}
      <button
        ref={emiButtonRef}
        onClick={onOpenEmi}
        className="fixed md:bottom-1/2 bottom-1/3 right-[-50px] z-50 
                   -rotate-90 bg-[#c8a55d] p-4 rounded-t-lg
                   text-white font-bold text-sm uppercase
                   cursor-pointer hover:bg-[#b8954d] transition-colors"
      >
        EMI Calculate
      </button>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              className="w-full h-[280px] md:h-full object-cover"
              alt={slide.title.join(" ")}
            />
            <div
              className={`absolute inset-0 ${
                index === 0 ? "bg-black/40" : "bg-gradient-to-r from-black/80 to-transparent"
              } flex items-center`}
            >
              <div className="container mx-auto px-4">
                <h2 className="text-white font-bold uppercase leading-none text-3xl sm:text-4xl md:text-6xl flex flex-col">
                  <span>{slide.title[0]}</span>
                  <span className="text-[#c8a55d]">{slide.title[1]}</span>
                </h2>
                <p className="text-white/70 mt-3 md:mt-4 max-w-md text-sm sm:text-base md:text-lg">
                  {slide.description}
                </p>
                {slide.showButtons && (
                  <div className="flex gap-4 mt-4">
                    <a
                      href="#residential-project"
                      className="bg-[#c8a55d] hover:bg-[#b8954d] text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      View Project
                    </a>
                    <button
                      onClick={onOpenFloorPlan}
                      className="bg-[#0f0f1a] hover:bg-[#1a1a2e] text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      View Floor Plans
                    </button>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
