"use client";

import { useState, useEffect } from "react";

interface HeroSliderProps {
  onOpenEmi?: () => void;
  onOpenFloorPlan?: () => void;
}

export default function CinematicDealersTable({ onOpenEmi, onOpenFloorPlan }: HeroSliderProps) {
  const [step, setStep] = useState(1);
  const [animatingCardId, setAnimatingCardId] = useState<string | null>(null);
  const [selections, setSelections] = useState({
    budget: null as any,
    motive: null as any,
    location: null as any,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  // Cinematic Intro State
  const [introPhase, setIntroPhase] = useState('hidden');

  const playIntro = () => {
    setIntroPhase('hidden');
    setTimeout(() => setIntroPhase('deck-enter'), 100);
    setTimeout(() => setIntroPhase('dealing'), 800);
    setTimeout(() => setIntroPhase('ready'), 1400);
  };

  useEffect(() => {
    playIntro();
  }, []);

  const handleRevealHand = async () => {
    const phoneInput = document.getElementById('heroPhone') as HTMLInputElement;
    const phone = phoneInput?.value.replace(/\D/g, '').slice(-10);

    if (!phone || phone.length !== 10) {
      setSubmitMessage('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Slider User',
          phone: phone,
          email: '',
          message: `Budget: ${selections.budget?.title || 'N/A'} | Motive: ${selections.motive?.title || 'N/A'} | Location: ${selections.location?.title || 'N/A'}`,
          source: 'hero_slider',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMessage('Success! Redirecting to your matches...');
        const key = `${selections.budget?.id}_${selections.motive?.id}_${selections.location?.id}`;
        const url = redirectMap[key] || '/projects';
        setTimeout(() => {
          window.location.href = url;
        }, 1500);
      } else {
        setSubmitMessage(result.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('[v0] Error submitting slider data:', error);
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect map: budget key × motive key × location key → URL
  const redirectMap: Record<string, string> = {
    "b1_m1_l1": "/ready-to-move-flats-in-gurgaon",
    "b1_m1_l2": "/ready-to-move-flats-in-gurgaon",
    "b1_m1_l3": "/ready-to-move-flats-in-gurgaon",
    "b1_m1_l4": "/ready-to-move-flats-in-gurgaon",
    "b1_m2_l1": "/2-bhk-flats-in-gurgaon",
    "b1_m2_l2": "/2-bhk-flats-in-gurgaon",
    "b1_m2_l3": "/2-bhk-flats-in-gurgaon",
    "b1_m2_l4": "/2-bhk-flats-in-gurgaon",
    "b2_m1_l1": "/3-bhk-flats-in-gurgaon",
    "b2_m1_l2": "/3-bhk-flats-in-gurgaon",
    "b2_m1_l3": "/3-bhk-flats-in-gurgaon",
    "b2_m1_l4": "/3-bhk-flats-in-gurgaon",
    "b2_m2_l1": "/residential-projects-on-dwarka-expressway",
    "b2_m2_l2": "/residential-projects-on-dwarka-expressway",
    "b2_m2_l3": "/residential-projects-on-dwarka-expressway",
    "b2_m2_l4": "/residential-projects-on-dwarka-expressway",
    "b3_m1_l1": "/4-bhk-flats-in-gurgaon",
    "b3_m1_l2": "/4-bhk-flats-in-gurgaon",
    "b3_m1_l3": "/4-bhk-flats-in-gurgaon",
    "b3_m1_l4": "/4-bhk-flats-in-gurgaon",
    "b3_m2_l1": "/new-launch",
    "b3_m2_l2": "/new-launch",
    "b3_m2_l3": "/new-launch",
    "b3_m2_l4": "/new-launch",
  };

  const cardDecks = {
    1: {
      key: "budget",
      cards: [
        { id: "b1", title: "₹1.5–3 Cr", subtitle: "Premium", stats: { BHK: "2 & 3 BHK", Possession: "Ready" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" },
        { id: "b2", title: "₹3–5 Cr", subtitle: "Luxury", stats: { BHK: "3 & 4 BHK", Possession: "2026–27" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400" },
        { id: "b3", title: "₹5 Cr+", subtitle: "Ultra Luxury", stats: { BHK: "4 & 5 BHK", Possession: "2027–28" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    2: {
      key: "motive",
      cards: [
        { id: "m1", title: "Ready to Move In", subtitle: "End-use / Immediate", stats: { BHK: "2–4 BHK", Possession: "Ready Now" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" },
        { id: "m2", title: "Investment", subtitle: "High ROI", stats: { BHK: "2–5 BHK", Possession: "Under Const." }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    3: {
      key: "location",
      cards: [
        { id: "l1", title: "Delhi Border", subtitle: "Sec 110–114", stats: { BHK: "3 & 4 BHK", Possession: "2026–28" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=400" },
        { id: "l2", title: "Mid Corridor", subtitle: "Sec 102–109", stats: { BHK: "2–4 BHK", Possession: "Ready" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400" },
        { id: "l3", title: "South Zone", subtitle: "Sec 84–88 & 37D", stats: { BHK: "2 & 3 BHK", Possession: "Ready" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400" },
        { id: "l4", title: "Kherki Daula", subtitle: "Sec 81–99 & 114", stats: { BHK: "2–3 BHK", Possession: "2026" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400" }
      ]
    }
  };

  const handleDraw = (stepKey: string, cardData: any) => {
    if (animatingCardId || introPhase !== 'ready') return;
    setAnimatingCardId(cardData.id);

    setTimeout(() => {
      setSelections(prev => ({ ...prev, [stepKey]: cardData }));
      setStep(prev => prev + 1);
      setAnimatingCardId(null);
    }, 500);
  };

  const resetGame = () => {
    if (introPhase !== 'ready') return;
    setStep(1);
    setSelections({ budget: null, motive: null, location: null });
    setAnimatingCardId(null);
    playIntro();
  };

  return (
    // Responsive Height: 750px Mobile, 550px Tablet, 600px Desktop
    <section className="relative w-full h-[750px] md:h-[550px] lg:h-[600px] mt-[80px] flex flex-col font-sans overflow-hidden border-y border-gray-800 bg-[#050505]">

      {/* ================= BACKGROUND VIDEO & OVERLAYS ================= */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover object-center opacity-[1] grayscale-[20%]"
        >
          <source src="/d-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/70 to-black/80 md:via-black/50 md:to-black/50" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-[15%] left-[10%] md:left-[40%] w-12 h-12 md:w-16 md:h-16 text-white/5 animate-[float_6s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
        <svg className="absolute bottom-[20%] right-[10%] md:right-[40%] w-16 h-16 md:w-20 md:h-20 text-orange-500/10 animate-[float_8s_ease-in-out_infinite_reverse]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      </div>

      {/* ================= LEFT SIDE: HERO HEADINGS ================= */}
      <div className="absolute w-full px-4 text-center top-[6%] left-0 md:text-left md:left-6 lg:left-16 md:top-1/2 md:-translate-y-1/2 z-20 md:w-[45%] lg:max-w-md pointer-events-none md:pointer-events-auto">
        <span className="inline-block py-1 px-4 bg-orange-500 text-black font-black uppercase tracking-[0.2em] text-[8px] lg:text-[10px] rounded-full border border-orange-400 mb-3 lg:mb-4 shadow-sm">
          Exclusive Inventory
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05] mb-2 lg:mb-4">
          Dwarka Expressway<br className="hidden md:block"/><span className="text-orange-500"> Overview</span>
        </h1>
        <p className="hidden md:block text-xs lg:text-base text-gray-300 font-medium mb-6 lg:mb-8 max-w-[95%]">
          2, 3 &amp; 4 BHK apartments across Sectors 37D, 84–114 — ready to move &amp; new launches with 15–18% appreciation potential. Pick your budget, purpose, and location in 3 clicks.
        </p>
        <button className="hidden md:block bg-white hover:bg-orange-500 text-black hover:text-white font-black uppercase tracking-[0.2em] py-3 lg:py-3.5 px-6 lg:px-8 rounded-xl transition-all shadow-[4px_4px_0px_#f97316] hover:shadow-[4px_4px_0px_#fff] active:translate-y-1 active:translate-x-1 active:shadow-none text-[10px] lg:text-xs pointer-events-auto">
          Explore Now
        </button>
      </div>

      {/* ================= THE GAME BOARD ================= */}
      
      {/* THE PLAYER'S HAND (TOP SLOTS) */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 md:top-[40px] lg:top-[30px] md:right-6 lg:right-16 md:left-auto md:translate-x-0 z-30 flex gap-2 lg:gap-4 perspective-[1000px] w-full max-w-[340px] md:w-auto justify-center">
        <span className="inline-block py-1 px-4 bg-orange-500 text-black font-black uppercase tracking-[0.1em] text-[12px] lg:text-[10px] rounded-full border border-orange-400 mb-3 lg:mb-4 shadow-sm">
          Find Your Match in 3 Clicks
        </span>
      </div>
      
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 md:top-[40px] lg:top-[80px] md:right-6 lg:right-16 md:left-auto md:translate-x-0 z-30 flex gap-2 lg:gap-4 perspective-[1000px] w-full max-w-[340px] md:w-auto justify-center">
        {[
        { key: 'budget', label: "BUDGET" },
          { key: 'motive', label: "PURPOSE" },
          { key: 'location', label: "LOCATION" }
        ].map((slot, index) => {
          const card = selections[slot.key as keyof typeof selections];
          const isCurrentSlot = step === index + 1 && introPhase === 'ready';

          return (
            <div
              key={slot.key}
              className={`w-[85px] h-[120px] md:w-[76px] md:h-[105px] lg:w-24 lg:h-32 rounded-lg flex flex-col items-center justify-center transition-all duration-500 transform-style-3d relative overflow-hidden
                ${card ? 'bg-white border-[1.5px] border-black shadow-[2px_2px_0px_#000] translate-y-0' :
                  isCurrentSlot ? 'bg-black/80 border-[1.5px] border-dashed border-orange-500 scale-105 shadow-inner' :
                    'bg-black/40 backdrop-blur-sm border-[1.5px] border-dashed border-gray-600'
                }
              `}
            >
              {!card && (
                <div className={`text-[8px] md:text-[7px] lg:text-[8px] font-black tracking-[0.2em] uppercase transition-colors text-center px-1 ${isCurrentSlot ? 'text-orange-500 animate-pulse' : 'text-gray-400'}`}>
                  {slot.label}
                </div>
              )}

              {card && (
                <div className="absolute inset-0 p-1.5 md:p-1 lg:p-2 flex flex-col justify-between animate-[slot-in_0.4s_ease-out_forwards] bg-white z-10">
                  <div className="text-[7px] md:text-[6px] lg:text-[7px] font-black uppercase text-gray-400 tracking-widest">{slot.label}</div>
                  <div className="w-full h-10 md:h-8 lg:h-10 rounded overflow-hidden relative">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] md:text-[9px] lg:text-sm font-black text-black leading-none mb-0.5 truncate">{card.title}</div>
                    <div className={`text-[6px] md:text-[5px] lg:text-[6px] font-bold uppercase tracking-widest ${card.accent}`}>{card.subtitle}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* THE DRAW DECK (RESETS TO BOTTOM RIGHT) */}
      <button
        onClick={resetGame}
        disabled={introPhase !== 'ready'}
        title="Shuffle Deck & Restart"
        className={`absolute w-20 h-32 md:w-20 md:h-28 lg:w-32 lg:h-52 z-40 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform-style-3d group cursor-pointer
          ${introPhase === 'hidden' ? 'right-[-50%] bottom-[50px] opacity-0 rotate-[45deg]' :
            introPhase === 'deck-enter' ? 'right-1/2 translate-x-1/2 md:translate-x-0 md:right-[25%] lg:right-[15%] bottom-[45%] md:bottom-[180px] lg:bottom-[150px] opacity-100 scale-105 rotate-0' :
              introPhase === 'dealing' ? 'right-1/2 translate-x-1/2 md:translate-x-0 md:right-[25%] lg:right-[15%] bottom-[45%] md:bottom-[180px] lg:bottom-[150px] opacity-100 scale-95 rotate-0' :
                'right-4 bottom-4 md:right-8 lg:right-16 md:bottom-[-20px] lg:bottom-[-30px] opacity-40 scale-[0.6] lg:scale-[0.65] -rotate-6 blur-[1px] hover:blur-none hover:opacity-100 hover:scale-[0.7] hover:rotate-0 hover:-translate-y-4 lg:hover:-translate-y-6'
          }
        `}
      >
        <div className="absolute inset-0 bg-white border-2 border-black rounded-xl shadow-[0_4px_0_#d1d5db] group-hover:border-orange-500 transition-colors" />
        <div className="absolute inset-0 bg-white border-2 border-black rounded-xl -translate-y-1 translate-x-1 shadow-[0_4px_0_#d1d5db] group-hover:border-orange-500 transition-colors" />

        <div className="absolute inset-0 bg-black border-2 border-black rounded-xl -translate-y-2 translate-x-2 flex flex-col items-center justify-center overflow-hidden group-hover:bg-orange-500 transition-colors">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]" />
          <svg className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 opacity-80 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-[8px] lg:text-[10px] text-black font-black uppercase tracking-widest mt-1 lg:mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Shuffle
          </span>
        </div>
      </button>

      {/* THE DEALER'S TABLE (CENTER STAGE) */}
      <div className="absolute top-[370px] w-full px-2 left-1/2 -translate-x-1/2 md:top-[180px] lg:top-[240px] md:w-[55%] lg:w-auto md:px-0 md:right-6 lg:right-16 md:left-auto md:translate-x-0 flex justify-center md:justify-end perspective-[1200px] z-20">
        {[1, 2, 3].map((deckStep) => {
          const deckData = (cardDecks as any)[deckStep];
          if (!deckData) return null;

          const isStep1 = deckStep === 1;
          const hideStep1 = isStep1 && (introPhase === 'hidden' || introPhase === 'deck-enter');

          return (
            <div
              key={deckStep}
              className={`absolute flex justify-center md:justify-end items-center gap-2 md:gap-3 lg:gap-5 transition-all duration-500 w-full md:w-auto right-0
                ${hideStep1 ? 'opacity-0 scale-50 translate-y-0 z-0' :
                  step === deckStep ? 'opacity-100 z-30 pointer-events-auto scale-100 translate-y-0' :
                    step > deckStep ? 'opacity-0 z-10 pointer-events-none scale-110 -translate-y-12 blur-sm' :
                      'opacity-0 z-0 pointer-events-none scale-90 translate-y-24 blur-sm'
                }
              `}
            >
              {deckData.cards.map((card: any, idx: number) => {
                const isSelected = animatingCardId === card.id;
                const isDiscarded = animatingCardId !== null && animatingCardId !== card.id;

                const popDelay = idx === 0 ? 'delay-0' : idx === 1 ? 'delay-[100ms]' : 'delay-[200ms]';
                const applyPop = isStep1 && introPhase === 'ready' && !animatingCardId;

                return (
                  <button
                    key={card.id}
                    onClick={() => handleDraw(deckData.key, card)}
                    disabled={animatingCardId !== null || introPhase !== 'ready'}
                    className={`relative w-[105px] h-[170px] md:w-[96px] md:h-[150px] lg:w-36 lg:h-52 bg-white rounded-xl p-2 lg:p-2.5 flex flex-col text-left transition-all duration-400 transform-style-3d shadow-xl border-2 ${card.border} group
                      hover:-translate-y-4 hover:shadow-[0_15px_30px_rgba(249,115,22,0.2)] hover:rotate-[-2deg]
                      ${isSelected ? '!scale-50 !-translate-y-[150px] !opacity-0 z-50 shadow-none' : ''}
                      ${isDiscarded ? '!translate-y-[100px] !rotate-[20deg] !opacity-0 z-10 shadow-none' : ''}
                      ${applyPop ? `animate-[card-pop_0.5s_ease-out_forwards] ${popDelay}` : ''}
                    `}
                  >
                    <div className="w-full h-12 md:h-10 lg:h-16 bg-gray-100 rounded-lg mb-1.5 lg:mb-2 flex items-center justify-center relative overflow-hidden border border-gray-200 shrink-0">
                      <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-orange-500/20 transition-colors duration-300" />
                    </div>

                    <div className="mb-auto px-1">
                      <h3 className="text-[10px] md:text-[9px] lg:text-sm font-black text-black uppercase leading-tight mb-0.5 truncate">{card.title}</h3>
                      <p className={`text-[6px] md:text-[5px] lg:text-[7px] font-bold uppercase tracking-widest ${card.accent}`}>{card.subtitle}</p>
                    </div>

                    <div className="mt-1 lg:mt-2 pt-1 lg:pt-2 border-t border-dashed border-gray-200 grid grid-cols-2 lg:grid-cols-3 gap-1 px-0.5">
                      {Object.entries(card.stats).slice(0, 2).map(([statName, statValue]) => (
                        <div key={statName} className="text-center">
                          <div className="text-[5px] lg:text-[6px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{statName}</div>
                          <div className="text-[7px] lg:text-[8px] font-black text-black bg-gray-100 rounded border border-gray-200 py-0.5">{statValue as string}</div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute -bottom-2 lg:-bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-[6px] lg:text-[7px] font-black tracking-[0.2em] uppercase py-1 px-3 lg:py-1.5 lg:px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                      DRAW
                    </div>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* ================= STATE 4: THE MASTER CARD (LEAD CAPTURE) ================= */}
      <div className={`absolute top-[55%] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-1/2 md:right-8 lg:right-16 md:-translate-y-1/2 flex justify-center items-center transition-all duration-700 w-full px-4 md:px-0 md:w-auto
        ${step === 4 ? 'opacity-100 z-50 pointer-events-auto delay-200' : 'opacity-0 scale-50 pointer-events-none'}`}
      >
        <div className="relative w-full max-w-[320px] md:w-[280px] lg:w-[320px] h-[340px] md:h-[340px] lg:h-[360px] bg-[#050505] rounded-3xl p-1 shadow-[0_15px_40px_rgba(249,115,22,0.3)] animate-[flip-in_0.6s_ease-out_forwards]">
          <div className="w-full h-full border-[1.5px] border-orange-500 rounded-[22px] p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden bg-[#050505]">

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50" />

            <div className="text-center relative z-10 pt-1">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                <svg className="w-5 h-5 text-black ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tight mb-1">Deck Complete</h3>
              <p className="text-[9px] lg:text-[10px] text-gray-400 font-medium leading-relaxed px-2">
                Enter your number to unlock your matches.
              </p>
            </div>

            <div className="space-y-3 mt-3 relative z-10">
              <div className="bg-white rounded-lg overflow-hidden flex items-center focus-within:ring-[1.5px] focus-within:ring-orange-500 transition-all">
                <span className="bg-gray-100 text-gray-500 font-black text-[10px] px-3 py-2.5 lg:py-3 border-r border-gray-200">+91</span>
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  id="heroPhone"
                  className="w-full bg-transparent px-3 py-2.5 lg:py-3 text-black font-bold outline-none placeholder-gray-400 text-xs" 
                />
              </div>

              <button 
                type="button"
                onClick={() => handleRevealHand()}
                disabled={isSubmitting || step !== 4}
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-[0.2em] py-2.5 lg:py-3 rounded-lg transition-all shadow-[2px_2px_0px_#fff] active:shadow-none active:translate-y-0.5 active:translate-x-0.5 text-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Reveal Hand'}
              </button>

              {submitMessage && (
                <div className={`p-2 rounded-lg text-center text-[9px] font-bold ${
                  submitMessage.includes('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}
            </div>

            <button onClick={resetGame} className="relative z-10 text-[9px] text-gray-500 hover:text-white uppercase tracking-widest font-bold mt-2 transition-colors text-center w-full">
              Shuffle & Restart
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes slot-in {
          0% { opacity: 0; transform: scale(1.5) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes flip-in {
          0% { opacity: 0; transform: rotateY(-90deg) scale(0.8); }
          100% { opacity: 1; transform: rotateY(0deg) scale(1); }
        }
        @keyframes card-pop {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.08) translateY(-10px); border-color: #f97316; box-shadow: 0 15px 30px rgba(249,115,22,0.3); }
          100% { transform: scale(1) translateY(0); }
        }
        .perspective-[1000px] { perspective: 1000px; }
        .perspective-[1200px] { perspective: 1200px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}} />
    </section>
  );
}
