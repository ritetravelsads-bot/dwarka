"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/assets/img/dwarka-banner-1.webp",
    title: ["Dwarka Expressway", "Overview"],
    description:
      "Dwarka Expressway cuts Delhi-Gurugram travel to 20 mins to airport and premium Projects in Dwarka Expressway with luxury homes and high ROI",
    showButtons: true,
  },
  {
    image: "/assets/img/dwarka-banner-2.webp",
    title: ["Investment & Real Estate", "Potential"],
    description:
      "The rapid infrastructure and new launches has made Dwarka Expressway Real estate one of the most talked-about investment destinations in NCR.",
    showButtons: false,
  },
  {
    image: "/assets/img/dwarka-banner-3.webp",
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
  // === WIZARD STATE ===
  const [step, setStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [selections, setSelections] = useState({
    budget: "",
    motive: "",
    location: "",
  });

  // Allows showing the "selected" state before moving to next slide
  const handleSelect = (key: string, value: string) => {
    if (animating) return;
    setSelections((prev) => ({ ...prev, [key]: value }));
    setAnimating(true);

    // Give a satisfying 600ms delay to show the selection highlight
    setTimeout(() => {
      if (step < 4) {
        setStep((prev) => prev + 1);
      }
      setAnimating(false);
    }, 600);
  };

  const getStepClass = (stepNumber: number) => {
    if (step === stepNumber)
      return "opacity-100 translate-x-0 pointer-events-auto scale-100 z-10 relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";
    if (step > stepNumber)
      return "opacity-0 -translate-x-16 pointer-events-none scale-95 z-0 absolute top-0 left-0 w-full transition-all duration-500";
    return "opacity-0 translate-x-16 pointer-events-none scale-95 z-0 absolute top-0 left-0 w-full transition-all duration-500";
  };

  return (
    <section className="relative flex flex-col md:block h-screen md:h-[90vh] bg-[#050505] overflow-hidden font-sans">
      
      {/* EMI Calculator Floating Tab */}
      <button
        onClick={onOpenEmi}
        className="fixed top-1/3 right-0 z-50 translate-x-[30%] hover:translate-x-0
                   bg-gradient-to-r from-orange-600 to-orange-500 p-4 rounded-l-2xl
                   text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.4)]
                   cursor-pointer transition-transform duration-300 flex items-center gap-3 group"
      >
        <span className="-rotate-90 md:rotate-0 tracking-widest group-hover:pr-4 transition-all">EMI Calc</span>
        <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
      </button>

      {/* === CINEMATIC BACKGROUND SLIDER === */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={slide.image}
                className="w-full h-full object-cover object-center scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]"
                alt={slide.title.join(" ")}
              />
              {/* Complex Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-[#050505]/80"></div>
              
              <div className="absolute inset-0 flex items-center z-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 flex">
                  <div className="w-full md:w-[45%] lg:w-[50%] pt-20 md:pt-0">
                    <div className="overflow-hidden mb-2">
                      <span className="inline-block py-1 px-3 border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] uppercase tracking-[0.3em] rounded-full backdrop-blur-md">
                        Premium Selection
                      </span>
                    </div>
                    <h2 className="text-white uppercase leading-[0.9] text-5xl md:text-7xl lg:text-8xl flex flex-col drop-shadow-2xl font-black tracking-tighter">
                      <span>{slide.title[0]}</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                        {slide.title[1]}
                      </span>
                    </h2>
                    <p className="text-white/70 mt-6 max-w-lg text-sm md:text-lg leading-relaxed font-light">
                      {slide.description}
                    </p>
                    
                    {slide.showButtons && (
                      <div className="flex flex-wrap gap-4 mt-8">
                        <button
                          onClick={() => window.location.href = '#residential-project'}
                          className="relative overflow-hidden group bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                        >
                          <span className="relative z-10">Explore Projects</span>
                          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                        </button>
                        <button
                          onClick={onOpenFloorPlan}
                          className="group backdrop-blur-md border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest transition-all hover:border-white/50"
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
          {/* Custom Pagination Container */}
          <div className="custom-pagination absolute bottom-8 left-6 md:left-20 z-20 flex gap-2"></div>
        </Swiper>
      </div>

      {/* === FOREGROUND GLASS WIZARD DASHBOARD === */}
      <div className="absolute bottom-0 md:top-0 right-0 w-full md:w-[55%] lg:w-[45%] h-[60vh] md:h-full z-20 flex items-end md:items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-none">

        {/* The Glass Panel */}
        <div className="w-full max-w-lg bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 rounded-t-[2.5rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] pointer-events-auto relative overflow-hidden group">
          
          {/* Dynamic Ambient Orbs inside card */}
          <div className={`absolute -top-32 -right-32 w-64 h-64 bg-orange-600/20 blur-[80px] rounded-full transition-all duration-1000 ${step === 2 ? 'translate-x-10 translate-y-20' : step === 4 ? 'bg-green-500/20' : ''}`}></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full"></div>

          {/* Wizard Header */}
          <div className="mb-8 relative z-10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                  </div>
                  <span className="text-orange-500 uppercase tracking-[0.25em] text-[10px] font-bold">
                    Smart Match AI
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Perfect Fit.</span>
                </h3>
              </div>
              
              {/* Step Counter */}
              <div className="text-right">
                <span className="text-4xl font-light text-white/20">{step}</span>
                <span className="text-sm font-bold text-white/40">/4</span>
              </div>
            </div>

            {/* Premium Progress Bar */}
            <div className="relative w-full h-1 bg-white/10 rounded-full mt-6">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Wizard Steps Container */}
          <div className="relative w-full min-h-[300px]">

            {/* STEP 1: BUDGET */}
            <div className={getStepClass(1)}>
              <div className="text-xs text-white/50 mb-5 font-bold uppercase tracking-widest flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Select Your Capital Segment
              </div>
              <div className="space-y-3">
                {[
                  { id: "b1", label: "₹1.5 Cr - ₹3 Cr", desc: "Premium 3 BHK Residences", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                  { id: "b2", label: "₹3 Cr - ₹5 Cr", desc: "Luxury 3 & 4 BHK Condominiums", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                  { id: "b3", label: "₹5 Cr +", desc: "Ultra-luxury Villas & Penthouses", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" }
                ].map((opt) => {
                  const isSelected = selections.budget === opt.label;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect('budget', opt.label)}
                      className={`group w-full relative overflow-hidden bg-white/[0.03] border p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 text-left hover:bg-white/[0.06] hover:-translate-y-1 ${
                        isSelected ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)] bg-orange-500/10' : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isSelected ? 'bg-orange-500 text-white' : 'bg-white/5 text-white/50 group-hover:text-orange-400 group-hover:bg-orange-500/10'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={opt.icon} /></svg>
                      </div>
                      <div className="flex-1">
                        <div className={`text-lg font-bold mb-0.5 transition-colors ${isSelected ? 'text-orange-400' : 'text-white group-hover:text-orange-300'}`}>{opt.label}</div>
                        <div className="text-xs text-white/40 font-light">{opt.desc}</div>
                      </div>
                      
                      {/* Interactive Radio Orb */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isSelected ? 'border-orange-500' : 'border-white/20 group-hover:border-orange-400/50'}`}>
                        <div className={`w-2.5 h-2.5 rounded-full bg-orange-500 transition-all duration-300 ${isSelected ? 'scale-100' : 'scale-0'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: MOTIVE */}
            <div className={getStepClass(2)}>
              <div className="flex justify-between items-center mb-5">
                <div className="text-xs text-white/50 font-bold uppercase tracking-widest flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  Primary Objective
                </div>
                <button onClick={() => setStep(1)} className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-1">
                  <span>←</span> Back
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 'self', label: "Self Use", desc: "Ready to move-in", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { id: 'roi', label: "Investment", desc: "Maximum ROI focus", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { id: 'upgrade', label: "Upgrade", desc: "Lifestyle elevation", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                  { id: 'lease', label: "Rental Income", desc: "Passive yield generation", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
                ].map((opt) => {
                  const isSelected = selections.motive === opt.label;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect('motive', opt.label)}
                      className={`group relative bg-white/[0.03] border p-5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] ${
                        isSelected ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)] bg-orange-500/10' : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 ${isSelected ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'bg-black/50 border border-white/10 text-white/50 group-hover:text-orange-400 group-hover:border-orange-500/50'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={opt.icon} /></svg>
                      </div>
                      <div className={`font-bold text-sm mb-1 ${isSelected ? 'text-orange-400' : 'text-white group-hover:text-orange-300'}`}>{opt.label}</div>
                      <div className="text-[10px] text-white/40 leading-tight">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: LOCATION */}
            <div className={getStepClass(3)}>
              <div className="flex justify-between items-center mb-5">
                <div className="text-xs text-white/50 font-bold uppercase tracking-widest flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Preferred Zone
                </div>
                <button onClick={() => setStep(2)} className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-1">
                  <span>←</span> Back
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Delhi Border", sub: "Sector 102 - 113", desc: "0-5 mins from Delhi. Maximum appreciation potential.", mapPoint: "top-[20%] left-[70%]" },
                  { label: "Central Expressway", sub: "Sector 81 - 99", desc: "Closer to NH-8 & Cyberhub. Established infrastructure.", mapPoint: "bottom-[30%] left-[30%]" }
                ].map((opt) => {
                  const isSelected = selections.location === opt.label;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelect('location', opt.label)}
                      className={`group w-full relative overflow-hidden bg-white/[0.03] border p-5 rounded-2xl flex flex-col gap-2 transition-all duration-300 text-left hover:-translate-y-1 hover:bg-white/[0.06] ${
                        isSelected ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)] bg-orange-500/10' : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {/* Abstract Mini Map Graphic in Background */}
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" 
                           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                        <div className={`absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,1)] ${opt.mapPoint}`}></div>
                      </div>

                      <div className="relative z-10 flex justify-between items-start w-full">
                        <div>
                          <div className={`font-black text-xl mb-1 transition-colors ${isSelected ? 'text-orange-400' : 'text-white group-hover:text-orange-300'}`}>{opt.label}</div>
                          <span className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] bg-white/10 border border-white/5 px-2 py-1 rounded-md text-white/70 backdrop-blur-sm">{opt.sub}</span>
                        </div>
                        {/* Status Dot */}
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-orange-500' : 'border-white/20'}`}>
                          <div className={`w-3 h-3 rounded-full bg-orange-500 transition-all ${isSelected ? 'scale-100' : 'scale-0'}`} />
                        </div>
                      </div>
                      <div className="relative z-10 text-sm text-white/50 mt-1 font-light leading-relaxed">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: LEAD CAPTURE TERMINAL */}
            <div className={getStepClass(4)}>
              <div className="flex flex-col items-center justify-center pt-4 h-full">
                {/* Success Animation Ring */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-orange-500/30 animate-[spin_3s_linear_infinite]"></div>
                  <div className="absolute inset-0 rounded-full border-t-4 border-orange-500 animate-[spin_2s_linear_infinite]"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] m-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-2 text-center">Matches Locked.</h3>
                <p className="text-white/50 mb-8 text-sm text-center max-w-xs font-light">
                  We found <strong className="text-orange-400 font-bold">3 premium projects</strong> matching your criteria. Verify your number to unlock pricing and floorplans instantly.
                </p>

                <div className="w-full space-y-4">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-30 group-focus-within:opacity-100 transition duration-500"></div>
                    <div className="relative flex bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                      <span className="flex items-center justify-center px-5 bg-white/5 text-white/60 text-sm font-bold border-r border-white/10 tracking-wider">+91</span>
                      <input
                        type="tel"
                        placeholder="Enter Mobile Number"
                        className="w-full bg-transparent py-4 px-5 text-white text-base font-medium outline-none placeholder-white/20"
                      />
                    </div>
                  </div>
                  
                  <button className="relative overflow-hidden w-full group bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] uppercase tracking-[0.15em] text-sm flex justify-center items-center gap-3">
                    <span className="relative z-10">Unlock Dashboard</span>
                    <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                  </button>
                  
                  <button onClick={() => setStep(1)} className="text-[10px] text-white/30 hover:text-orange-400 mt-6 uppercase tracking-widest transition-colors block mx-auto flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    Start Over
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