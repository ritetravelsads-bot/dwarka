"use client";

import { useState } from "react";
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
    overlayClass: "bg-black/50 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent",
  },
  {
    image: "/assets/img/dwarka-banner-2.webp",
    title: ["Investment & Real Estate", "Potential"],
    description:
      "The rapid infrastructure and new launches has made Dwarka Expressway Real estate one of the most talked-about investment destinations in NCR.",
    showButtons: false,
    overlayClass: "bg-black/50 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent",
  },
  {
    image: "/assets/img/dwarka-banner-3.webp",
    title: ["Dealers & Upcoming", "Opportunities"],
    description:
      "Find trusted Dwarka Expressway property dealers for seamless buying, exclusive deals, and site visits on upcoming properties in Dwarka Expressway.",
    showButtons: false,
    overlayClass: "bg-black/50 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent",
  },
];

interface HeroSliderProps {
  onOpenEmi?: () => void;
  onOpenFloorPlan?: () => void;
}

export default function HeroSlider({ onOpenEmi, onOpenFloorPlan }: HeroSliderProps) {
  // === WIZARD STATE ===
  const [step, setStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [selections, setSelections] = useState({
    budget: "",
    motive: "",
    location: "",
  });

  const handleSelect = (key: string, value: string) => {
    if (animating) return;
    setSelections((prev) => ({ ...prev, [key]: value }));

    if (step < 4) {
      setAnimating(true);
      setTimeout(() => {
        setStep((prev) => prev + 1);
        setAnimating(false);
      }, 400);
    }
  };

  const getStepClass = (stepNumber: number) => {
    if (step === stepNumber) return "opacity-100 translate-y-0 pointer-events-auto scale-100 z-10 relative";
    if (step > stepNumber) return "opacity-0 -translate-y-12 pointer-events-none scale-95 z-0 absolute top-0 left-0 w-full";
    return "opacity-0 translate-y-12 pointer-events-none scale-95 z-0 absolute top-0 left-0 w-full";
  };

  return (
    <section className="relative flex flex-col md:block md:h-[85vh] pt-20 md:pt-20 bg-[#050505]">

      {/* EMI Calculator Button */}
      <button
        onClick={onOpenEmi}
        className="fixed md:bottom-1/2 bottom-1/3 right-[-50px] z-50 
                   -rotate-90 bg-orange-600 p-4 rounded-t-lg
                   text-white font-bold text-sm uppercase tracking-wider
                   cursor-pointer hover:bg-orange-500 transition-colors shadow-lg"
      >
        Emi Calculate
      </button>

      {/* === BACKGROUND SLIDER === */}
      <div className="w-full h-[450px] md:h-full md:absolute md:inset-0 z-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="heroSwiper h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={slide.image}
                className="w-full h-full object-cover object-center"
                alt={slide.title.join(" ")}
              />
              <div className={`absolute inset-0 ${slide.overlayClass} flex items-center`}>
                {/* Text constrained to the left on Desktop so it doesn't overlap the Wizard */}
                <div className="container mx-auto px-4 md:px-8 lg:px-12 flex">
                  <div className="w-full md:w-[55%] lg:w-[50%]">
                    <h2 className="text-white font-teko uppercase leading-[0.9] text-4xl sm:text-5xl md:text-7xl flex flex-col drop-shadow-lg">
                      <span>{slide.title[0]}</span>
                      <span className="text-orange-500">{slide.title[1]}</span>
                    </h2>
                    <p className="text-white/80 mt-4 max-w-md text-sm sm:text-base md:text-lg drop-shadow-md">
                      {slide.description}
                    </p>
                    {slide.showButtons && (
                      <div className="flex gap-4 mt-6">
                        <button
                          onClick={() => window.location.href = '#residential-project'}
                          className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-colors"
                        >
                          View Project
                        </button>
                        <button
                          onClick={onOpenFloorPlan}
                          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-colors"
                        >
                          Floor Plans
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === FOREGROUND GLASS WIZARD === */}
      <div className="w-full md:absolute md:top-0 md:right-0 md:h-full md:w-[45%] lg:w-[40%] z-20 flex items-center justify-center p-4 md:pr-8 lg:pr-16 pointer-events-none">

        {/* The Glass Panel */}
        <div className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] pointer-events-auto relative overflow-hidden">

          {/* Subtle Orange Glow inside card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-600/30 blur-[60px] rounded-full pointer-events-none"></div>

          {/* Wizard Header */}
          <div className="mb-6 relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-orange-500 uppercase tracking-[0.2em] text-[9px] font-bold">
                Project Matcher V2.0
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Perfect Match.</span>
            </h3>

            {/* Progress Bar */}
            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-orange-500 transition-all duration-700 ease-out ${step > i ? 'w-full' : step === i ? 'w-1/2 animate-pulse' : 'w-0'
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Wizard Steps Container */}
          <div className="relative w-full min-h-[320px]">

            {/* STEP 1: BUDGET */}
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${getStepClass(1)}`}>
              <div className="text-sm text-white/60 mb-4 font-medium uppercase tracking-wider">01. Capital Config</div>
              <div className="space-y-3">
                {[
                  { id: "b1", label: "₹1.5 Cr - ₹3 Cr", desc: "Premium 3 BHK" },
                  { id: "b2", label: "₹3 Cr - ₹5 Cr", desc: "Luxury 3 & 4 BHKs" },
                  { id: "b3", label: "₹5 Cr+", desc: "Ultra-luxury & Penthouses" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('budget', opt.label)}
                    className="group w-full bg-white/5 border border-white/10 hover:border-orange-500/50 p-4 rounded-xl flex items-center justify-between overflow-hidden transition-all duration-300 hover:bg-orange-500/5 text-left"
                  >
                    <div>
                      <div className="text-lg font-bold text-white mb-0.5 group-hover:text-orange-400 transition-colors">{opt.label}</div>
                      <div className="text-xs text-white/40">{opt.desc}</div>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-orange-500 flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 rounded-full bg-orange-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: MOTIVE */}
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${getStepClass(2)}`}>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-white/60 font-medium uppercase tracking-wider">02. Objective</div>
                <button onClick={() => setStep(1)} className="text-[10px] text-white/40 hover:text-orange-500 uppercase tracking-widest">← Back</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSelect('motive', 'Immediate Move-in')}
                  className="col-span-2 group bg-white/5 border border-white/10 hover:border-orange-500/50 p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:bg-orange-500/5 text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">Self Use</div>
                    <div className="text-[11px] text-white/40">Immediate move-in ready</div>
                  </div>
                </button>
                {[
                  { id: 'roi', label: "Investment", desc: "High ROI focus", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { id: 'luxury', label: "Upgrade", desc: "Lifestyle luxury", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('motive', opt.label)}
                    className="group bg-white/5 border border-white/10 hover:border-orange-500/50 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-orange-500/5"
                  >
                    <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-2 group-hover:border-orange-500/50 transition-colors">
                      <svg className="w-5 h-5 text-white/50 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={opt.icon} /></svg>
                    </div>
                    <div className="font-bold text-white text-sm">{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 3: LOCATION */}
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${getStepClass(3)}`}>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-white/60 font-medium uppercase tracking-wider">03. Target Zone</div>
                <button onClick={() => setStep(2)} className="text-[10px] text-white/40 hover:text-orange-500 uppercase tracking-widest">← Back</button>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Delhi Border", sub: "Sector 102-113", desc: "0-5 mins from Delhi, max appreciation." },
                  { label: "Central E-way", sub: "Sector 81-99", desc: "Closer to NH-8 & Cyberhub infrastructure." }
                ].map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect('location', opt.label)}
                    className="group w-full bg-white/5 border border-white/10 hover:border-orange-500/50 p-4 rounded-xl flex flex-col gap-1 transition-all duration-300 hover:bg-orange-500/5 text-left"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">{opt.label}</div>
                      <span className="text-[9px] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded text-white/60">{opt.sub}</span>
                    </div>
                    <div className="text-xs text-white/40 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 4: LEAD CAPTURE */}
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${getStepClass(4)}`}>
              <div className="text-center pt-2">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" /></svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Ticket Generated.</h3>
                <p className="text-white/60 mb-6 text-xs px-4">
                  We've locked in your criteria. Enter your number to instantly unlock the matching floorplans & pricing.
                </p>

                <div className="space-y-3">
                  <div className="flex bg-black/60 border border-white/20 rounded-xl focus-within:border-orange-500 overflow-hidden transition-colors">
                    <span className="flex items-center justify-center px-4 bg-white/5 text-white/50 text-sm font-bold border-r border-white/10">+91</span>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full bg-transparent py-3 px-4 text-white text-sm outline-none placeholder-white/30"
                    />
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] uppercase tracking-wide text-xs">
                    Unlock Matches Now
                  </button>
                  <button onClick={() => setStep(1)} className="text-[10px] text-white/30 hover:text-white mt-4 uppercase tracking-widest transition-colors block mx-auto">
                    Restart Process
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}