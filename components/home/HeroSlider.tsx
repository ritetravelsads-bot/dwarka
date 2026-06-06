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
      setSubmitMessage('Please enter a 10-digit number');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Trump Card User',
          phone: phone,
          message: `Budget: ${selections.budget?.title} | Motive: ${selections.motive?.title} | Location: ${selections.location?.title}`,
          source: 'hero_trump_cards',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMessage('Hand Revealed! We will contact you.');
        setTimeout(() => { setSubmitMessage(null); resetGame(); }, 3000);
      } else {
        setSubmitMessage('Failed to submit.');
      }
    } catch (error) {
      setSubmitMessage('Error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cardDecks = {
    1: {
      key: "budget",
      cards: [
        { id: "b1", title: "₹1.5-3 Cr", subtitle: "Premium", stats: { Class: "A", Yield: "High" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" },
        { id: "b2", title: "₹3-5 Cr", subtitle: "Luxury", stats: { Class: "S", Yield: "Max" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400" },
        { id: "b3", title: "₹5 Cr +", subtitle: "Ultra", stats: { Class: "SS", Yield: "Apex" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    2: {
      key: "motive",
      cards: [
        { id: "m1", title: "Self Use", subtitle: "Move-In", stats: { ROI: "Steady", Time: "Now" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" },
        { id: "m2", title: "Investment", subtitle: "Growth", stats: { ROI: "High", Time: "3 Yrs" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    3: {
      key: "location",
      cards: [
        { id: "l1", title: "Delhi Border", subtitle: "Sec 102-113", stats: { Access: "10/10", Vibe: "City" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=400" },
        { id: "l2", title: "Central", subtitle: "Sec 81-99", stats: { Access: "8/10", Vibe: "Zen" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400" }
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
    <section className="relative w-full h-[600px] mt-[80px] flex flex-col font-sans overflow-hidden border-y border-gray-200 bg-[#FAFAFA]">

      {/* ================= BG VIDEO ================= */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-[0.35] grayscale-[20%]">
          <source src="https://cdn.pixabay.com/video/2019/04/10/22615-329618146_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/95 via-[#FAFAFA]/70 to-[#FAFAFA]/90" />
      </div>

      {/* ================= LEFT SIDE: HERO TEXT ================= */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-20 max-w-sm lg:max-w-md">
        <span className="inline-block py-1 px-3 bg-orange-500 text-white font-black uppercase tracking-[0.2em] text-[9px] rounded-sm mb-4">
          Limited Edition Deals
        </span>
        <h1 className="text-5xl lg:text-6xl font-black text-black uppercase tracking-tight leading-[0.95] mb-6">
          High Stakes <br/><span className="text-orange-500">Real Estate.</span>
        </h1>
        <button className="bg-black text-white font-black uppercase tracking-[0.2em] py-4 px-10 rounded-sm transition-all shadow-[6px_6px_0px_#f97316] hover:shadow-[6px_6px_0px_#000] active:translate-y-1 text-xs">
          Explore Projects
        </button>
      </div>

      {/* ================= RIGHT SIDE: HAND SLOTS (MOVED LEFT) ================= */}
      <div className="absolute top-10 right-[10%] md:right-[22%] z-30 flex gap-4 perspective-[1000px]">
        {['budget', 'motive', 'location'].map((key, i) => {
          const card = (selections as any)[key];
          const isActive = step === i + 1 && introPhase === 'ready';
          return (
            <div key={key} className={`w-28 h-40 rounded-xl flex flex-col items-center justify-center transition-all duration-500 transform-style-3d relative overflow-hidden
                ${card ? 'bg-white border-2 border-black shadow-[4px_4px_0px_#000]' : 
                  isActive ? 'bg-orange-50 border-2 border-dashed border-orange-400 scale-105' : 'bg-white/40 backdrop-blur-sm border-2 border-dashed border-gray-300'}`}>
              {!card ? <div className={`text-[9px] font-black tracking-widest ${isActive ? 'text-orange-500 animate-pulse' : 'text-gray-400'}`}>0{i+1}</div> : (
                <div className="absolute inset-0 p-2 flex flex-col justify-between animate-[slot-in_0.4s_ease-out_forwards] bg-white">
                  <div className="w-full h-16 rounded overflow-hidden"><img src={card.image} className="w-full h-full object-cover" /></div>
                  <div className="text-center">
                    <div className="text-xs font-black text-black leading-tight mb-1">{card.title}</div>
                    <div className={`text-[7px] font-bold uppercase tracking-widest ${card.accent}`}>{card.subtitle}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= RESET DECK (SMALLER) ================= */}
      <button onClick={resetGame} disabled={introPhase !== 'ready'}
        className={`absolute w-20 h-32 z-50 transition-all duration-[800ms] ease-out transform-style-3d group cursor-pointer
          ${introPhase === 'hidden' ? 'right-[-20%] bottom-10' : 
            introPhase === 'deck-enter' || introPhase === 'dealing' ? 'right-[20%] bottom-[150px] scale-125' : 
            'right-6 bottom-[-30px] opacity-60 hover:opacity-100 hover:rotate-0 hover:-translate-y-10 rotate-[-10deg]'}`}>
        <div className="absolute inset-0 bg-white border-2 border-black rounded-lg shadow-[0_3px_0_#000]" />
        <div className="absolute inset-0 bg-black border-2 border-black rounded-lg -translate-y-1 translate-x-1 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
          <svg className="w-6 h-6 text-orange-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        </div>
      </button>

      {/* ================= DEALING TABLE (LARGER CARDS) ================= */}
      <div className="absolute top-[180px] right-[4%] md:right-[15%] flex justify-end perspective-[1200px] z-20">
        {[1, 2, 3].map((deckStep) => {
          const deckData = (cardDecks as any)[deckStep];
          return (
            <div key={deckStep} className={`absolute flex justify-end items-center gap-6 transition-all duration-500 right-0
                ${step === deckStep && introPhase === 'ready' ? 'opacity-100 z-30 scale-100 translate-y-0' : 'opacity-0 z-0 pointer-events-none translate-y-20 blur-sm'}`}>
              {deckData.cards.map((card: any, idx: number) => {
                const isSelected = animatingCardId === card.id;
                const isDiscarded = animatingCardId !== null && !isSelected;
                return (
                  <button key={card.id} onClick={() => handleDraw(deckData.key, card)} disabled={animatingCardId !== null}
                    className={`relative w-44 h-64 bg-white rounded-2xl p-4 flex flex-col text-left transition-all duration-400 transform-style-3d shadow-2xl border-2 ${card.border} group
                      hover:-translate-y-6 hover:shadow-orange-500/20 hover:rotate-[-1deg]
                      ${isSelected ? '!scale-50 !-translate-y-[250px] !opacity-0' : ''}
                      ${isDiscarded ? '!translate-y-20 !opacity-0' : ''}
                      ${deckStep === 1 && introPhase === 'ready' && !animatingCardId ? 'animate-[card-pop_0.5s_ease-out_forwards]' : ''}`}>
                    <div className="w-full h-28 bg-gray-100 rounded-xl mb-3 overflow-hidden relative">
                      <img src={card.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-orange-500/10" />
                    </div>
                    <div className="mb-auto">
                      <h3 className="text-lg font-black text-black uppercase leading-tight">{card.title}</h3>
                      <p className={`text-[9px] font-bold uppercase tracking-widest ${card.accent}`}>{card.subtitle}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-200 grid grid-cols-2 gap-2">
                      {Object.entries(card.stats).map(([n, v]) => (
                        <div key={n}><div className="text-[7px] text-gray-400 font-bold uppercase">{n}</div><div className="text-[10px] font-black text-black">{v as string}</div></div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* ================= MASTER CARD (LEAD CAPTURE) ================= */}
      <div className={`absolute top-1/2 right-[5%] md:right-[15%] -translate-y-1/2 flex justify-center items-center transition-all duration-700 
        ${step === 4 ? 'opacity-100 z-50 pointer-events-auto delay-200' : 'opacity-0 scale-50 pointer-events-none'}`}>
        <div className="relative w-[340px] bg-[#050505] rounded-3xl p-1 shadow-[0_20px_60px_rgba(249,115,22,0.4)] animate-[flip-in_0.6s_ease-out_forwards]">
          <div className="w-full h-full border-[1.5px] border-orange-500 rounded-[22px] p-8 flex flex-col justify-between relative overflow-hidden bg-[#050505]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-40" />
            <div className="text-center relative z-10">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Deck Ready</h3>
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed px-2">Combination verified. Unlock the inventory now.</p>
            </div>
            <div className="space-y-4 mt-6 relative z-10">
              <div className="bg-white rounded-lg overflow-hidden flex items-center"><span className="bg-gray-100 text-gray-500 font-black text-xs px-4 py-4 border-r border-gray-200">+91</span><input type="tel" placeholder="Mobile Number" id="heroPhone" className="w-full bg-transparent px-4 py-4 text-black font-bold outline-none text-sm" /></div>
              <button onClick={handleRevealHand} disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-[0.2em] py-4 rounded-lg shadow-[4px_4px_0px_#fff] active:shadow-none active:translate-y-1 text-xs">{isSubmitting ? 'Verifying...' : 'Reveal Hand'}</button>
              {submitMessage && <div className="text-[10px] text-orange-500 text-center font-bold">{submitMessage}</div>}
            </div>
            <button onClick={resetGame} className="relative z-10 text-[10px] text-gray-500 hover:text-white uppercase tracking-widest font-bold mt-6 text-center w-full">Shuffle & Restart</button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slot-in { 0% { opacity: 0; transform: scale(1.5) translateY(50px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes flip-in { 0% { opacity: 0; transform: rotateY(-90deg) scale(0.8); } 100% { opacity: 1; transform: rotateY(0deg) scale(1); } }
        @keyframes card-pop { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05) translateY(-5px); border-color: #f97316; } }
        .transform-style-3d { transform-style: preserve-3d; }
      `}} />
    </section>
  );
}