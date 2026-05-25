"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/assets/img/dwarka-banner-1.webp",
    title: ["Dwarka Expressway", "Overview"],
    description:
      "Dwarka Expressway cuts Delhi-Gurugram travel to 20 mins to airport and premium Projects in Dwarka Expressway with luxury homes and high ROI",
    showButtons: true,
    overlayClass: "bg-black/40",
  },
  {
    image: "/assets/img/dwarka-banner-2.webp",
    title: ["Investment & Real Estate", "Potential"],
    description:
      "The rapid infrastructure and new launches has made Dwarka Expressway Real estate one of the most talked-about investment destinations in NCR.",
    showButtons: false,
    overlayClass: "bg-gradient-to-r from-black/80 to-transparent",
  },
  {
    image: "/assets/img/dwarka-banner-3.webp",
    title: ["Dealers & Upcoming", "Opportunities"],
    description:
      "Find trusted Dwarka Expressway property dealers for seamless buying, exclusive deals, and site visits on upcoming properties in Dwarka Expressway.",
    showButtons: false,
    overlayClass: "bg-gradient-to-r from-black/80 to-transparent",
  },
];

interface HeroSliderProps {
  onOpenEmi?: () => void;
  onOpenFloorPlan?: () => void;
}

export default function HeroSlider({ onOpenEmi, onOpenFloorPlan }: HeroSliderProps) {
  return (
    <section className="relative md:h-[85vh] pt-16 md:pt-20">
      {/* EMI Calculator Button */}
      <button
        onClick={onOpenEmi}
        className="fixed md:bottom-1/2 bottom-1/3 right-[-50px] z-50 
                   -rotate-90 bg-primary p-4 rounded-t-lg
                   text-white font-bold text-sm uppercase
                   cursor-pointer hover:bg-primary/90 transition-colors"
      >
        Emi Calculate
      </button>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="heroSwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              className="w-full h-[280px] md:h-full object-cover"
              alt={slide.title.join(" ")}
            />
            <div className={`absolute inset-0 ${slide.overlayClass} flex items-center`}>
              <div className="container mx-auto px-4">
                <h2 className="text-white font-teko uppercase leading-none text-3xl sm:text-4xl md:text-6xl flex flex-col">
                  <span>{slide.title[0]}</span>
                  <span className="text-primary">{slide.title[1]}</span>
                </h2>
                <p className="text-white/70 mt-3 md:mt-4 max-w-md text-sm sm:text-base md:text-lg">
                  {slide.description}
                </p>
                {slide.showButtons && (
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => window.location.href = '#residential-project'}
                      className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg"
                    >
                      View Project
                    </button>
                    <button
                      onClick={onOpenFloorPlan}
                      className="bg-dark hover:bg-dark/80 text-white px-6 py-2 rounded-lg"
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
