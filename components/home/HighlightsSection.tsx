import { useState } from "react";

export default function CompactDealersTable() {
  const [step, setStep] = useState(1);
  const [animatingCardId, setAnimatingCardId] = useState<string | null>(null);
  const [selections, setSelections] = useState({
    budget: null as any,
    motive: null as any,
    location: null as any,
  });

  const cardDecks = {
    1: {
      key: "budget",
      cards: [
        { id: "b1", title: "₹1.5-3 Cr", subtitle: "Premium", stats: { Class: "A", Yield: "7/10", Risk: "Low" }, border: "border-orange-500", accent: "text-orange-500" },
        { id: "b2", title: "₹3-5 Cr", subtitle: "Luxury", stats: { Class: "S", Yield: "8/10", Risk: "Med" }, border: "border-black", accent: "text-black" },
        { id: "b3", title: "₹5 Cr +", subtitle: "Ultra", stats: { Class: "SS", Yield: "9/10", Risk: "High" }, border: "border-orange-500", accent: "text-orange-500" }
      ]
    },
    2: {
      key: "motive",
      cards: [
        { id: "m1", title: "Self Use", subtitle: "Move-In", stats: { Utility: "Max", ROI: "Steady", Time: "Now" }, border: "border-black", accent: "text-black" },
        { id: "m2", title: "Investment", subtitle: "High ROI", stats: { Utility: "Low", ROI: "Max", Time: "3 Yrs" }, border: "border-orange-500", accent: "text-orange-500" }
      ]
    },
    3: {
      key: "location",
      cards: [
        { id: "l1", title: "Delhi Border", subtitle: "Sec 102-113", stats: { Access: "10/10", Growth: "Fast", Vibe: "Urban" }, border: "border-orange-500", accent: "text-orange-500" },
        { id: "l2", title: "Central", subtitle: "Sec 81-99", stats: { Access: "8/10", Growth: "Steady", Vibe: "Subtle" }, border: "border-black", accent: "text-black" }
      ]
    }
  };

  const handleDraw = (stepKey: string, cardData: any) => {
    if (animatingCardId) return;
    setAnimatingCardId(cardData.id);
    
    setTimeout(() => {
      setSelections(prev => ({ ...prev, [stepKey]: cardData }));
      setStep(prev => prev + 1);
      setAnimatingCardId(null);
    }, 500); // Faster 500ms animation for the compact layout
  };

  const resetGame = () => {
    setStep(1);
    setSelections({ budget: null, motive: null, location: null });
    setAnimatingCardId(null);
  };

  return (
    <section className="relative w-full h-[600px] bg-[#FAFAFA] flex flex-col items-center font-sans overflow-hidden border-y border-gray-200">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] border border-black rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-black rounded-full" />
        <div className="absolute h-full w-px bg-black" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full px-4 text-center z-20 flex flex-col items-center">
        <span className="inline-block py-1 px-3 bg-orange-100 text-orange-600 font-black uppercase tracking-[0.2em] text-[8px] rounded-full border border-orange-200 mb-2 shadow-sm">
          Deal Your Future
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight leading-none">
          Build Your <span className="text-orange-500">Portfolio.</span>
        </h2>
      </div>

      {/* ================= THE PLAYER'S HAND (TOP SLOTS) ================= */}
      <div className="absolute top-[100px] z-30 flex gap-3 md:gap-4 perspective-[1000px]">
        {[
          { key: 'budget', label: "CAPITAL" },
          { key: 'motive', label: "TACTIC" },
          { key: 'location', label: "ZONE" }
        ].map((slot, index) => {
          const card = selections[slot.key as keyof typeof selections];
          const isCurrentSlot = step === index + 1;
          
          return (
            <div 
              key={slot.key} 
              className={`w-20 h-28 md:w-24 md:h-32 rounded-lg flex flex-col items-center justify-center transition-all duration-500 transform-style-3d relative
                ${card ? 'bg-white border-[1.5px] border-black shadow-[2px_2px_0px_#000] translate-y-0' : 
                  isCurrentSlot ? 'bg-orange-50 border-[1.5px] border-dashed border-orange-400 scale-105 shadow-inner' : 
                  'bg-gray-50 border-[1.5px] border-dashed border-gray-300'
                }
              `}
            >
              {!card && (
                <div className={`text-[8px] font-black tracking-[0.2em] uppercase ${isCurrentSlot ? 'text-orange-500 animate-pulse' : 'text-gray-400'}`}>
                  {slot.label}
                </div>
              )}
              
              {/* Slotted Card Data */}
              {card && (
                <div className="absolute inset-0 p-2 flex flex-col justify-between animate-[slot-in_0.4s_ease-out_forwards]">
                  <div className="text-[7px] font-black uppercase text-gray-400 tracking-widest">{slot.label}</div>
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-black text-black leading-none mb-0.5">{card.title}</div>
                    <div className={`text-[7px] font-bold uppercase tracking-widest ${card.accent}`}>{card.subtitle}</div>
                  </div>
                  <div className="w-full flex gap-1">
                    <div className="h-0.5 flex-1 bg-black rounded-full" />
                    <div className="h-0.5 w-1.5 bg-orange-500 rounded-full" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= THE DEALER'S TABLE (CENTER STAGE) ================= */}
      <div className="absolute top-[240px] md:top-[250px] w-full max-w-4xl flex justify-center perspective-[1200px] z-20">
        
        {[1, 2, 3].map((deckStep) => {
          const deckData = (cardDecks as any)[deckStep];
          if (!deckData) return null;

          return (
            <div 
              key={deckStep} 
              className={`absolute flex justify-center items-center gap-3 md:gap-5 transition-all duration-500 
                ${step === deckStep ? 'opacity-100 z-30 pointer-events-auto scale-100 translate-y-0' : 
                  step > deckStep ? 'opacity-0 z-10 pointer-events-none scale-110 -translate-y-12 blur-sm' : 
                  'opacity-0 z-0 pointer-events-none scale-90 translate-y-24 blur-sm'
                }
              `}
            >
              {deckData.cards.map((card: any) => {
                const isSelected = animatingCardId === card.id;
                const isDiscarded = animatingCardId !== null && animatingCardId !== card.id;

                return (
                  <button
                    key={card.id}
                    onClick={() => handleDraw(deckData.key, card)}
                    disabled={animatingCardId !== null}
                    className={`relative w-28 h-44 md:w-36 md:h-56 bg-white rounded-xl p-3 flex flex-col text-left transition-all duration-400 transform-style-3d shadow-xl border-2 ${card.border} group
                      hover:-translate-y-4 hover:shadow-[0_15px_30px_rgba(249,115,22,0.2)] hover:rotate-[-2deg]
                      ${isSelected ? '!scale-50 !-translate-y-[150px] !opacity-0 z-50 shadow-none' : ''}
                      ${isDiscarded ? '!translate-y-[100px] !rotate-[20deg] !opacity-0 z-10 shadow-none' : ''}
                    `}
                  >
                    {/* Card Graphic */}
                    <div className="w-full h-12 md:h-16 bg-gray-50 border border-gray-200 rounded-lg mb-2 md:mb-3 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300" />
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black flex items-center justify-center bg-white relative z-10 group-hover:scale-110 transition-transform">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                    </div>

                    <div className="mb-auto">
                      <h3 className="text-sm md:text-base font-black text-black uppercase leading-none mb-0.5">{card.title}</h3>
                      <p className={`text-[7px] md:text-[8px] font-bold uppercase tracking-widest ${card.accent}`}>{card.subtitle}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="mt-2 pt-2 border-t-2 border-dashed border-gray-200 grid grid-cols-3 gap-1">
                      {Object.entries(card.stats).map(([statName, statValue]) => (
                        <div key={statName} className="text-center">
                          <div className="text-[6px] md:text-[7px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{statName}</div>
                          <div className="text-[8px] md:text-[9px] font-black text-black bg-gray-100 rounded border border-gray-200 py-0.5">{statValue as string}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Button */}
                    <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] font-black tracking-[0.2em] uppercase py-1.5 px-5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                      DRAW
                    </div>
                  </button>
                );
              })}
            </div>
          );
        })}

        {/* ================= STATE 4: THE MASTER CARD (LEAD CAPTURE) ================= */}
        <div className={`absolute top-0 flex justify-center items-center transition-all duration-700 
          ${step === 4 ? 'opacity-100 z-50 pointer-events-auto delay-200' : 'opacity-0 scale-50 pointer-events-none'}`}
        >
          <div className="relative w-[300px] h-[360px] md:h-[380px] bg-[#050505] rounded-3xl p-1 shadow-[0_15px_40px_rgba(249,115,22,0.3)] animate-[flip-in_0.6s_ease-out_forwards]">
            <div className="w-full h-full border-[1.5px] border-orange-500 rounded-[22px] p-5 flex flex-col justify-between relative overflow-hidden bg-[#050505]">
              
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50" />

              <div className="text-center relative z-10 pt-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  <svg className="w-5 h-5 text-black ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1.5">Deck Complete</h3>
                <p className="text-[10px] text-gray-400 font-medium leading-relaxed px-4">
                  Unlocked <span className="text-orange-500 font-bold">14 Off-Market</span> properties. Verify identity to claim.
                </p>
              </div>

              <div className="space-y-3 mt-4 relative z-10 px-2">
                <div className="bg-white rounded-lg overflow-hidden flex items-center focus-within:ring-[1.5px] focus-within:ring-orange-500 transition-all">
                  <span className="bg-gray-100 text-gray-500 font-black text-[10px] px-3 py-3 border-r border-gray-200">+91</span>
                  <input type="tel" placeholder="Mobile Number" className="w-full bg-transparent px-3 py-3 text-black font-bold outline-none placeholder-gray-400 text-xs" />
                </div>
                
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-[0.2em] py-3 rounded-lg transition-all shadow-[2px_2px_0px_#fff] active:shadow-none active:translate-y-0.5 active:translate-x-0.5 text-[10px]">
                  Reveal Hand
                </button>
              </div>

              <button onClick={resetGame} className="relative z-10 text-[9px] text-gray-500 hover:text-white uppercase tracking-widest font-bold mt-4 transition-colors text-center w-full">
                Shuffle & Restart
              </button>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slot-in {
          0% { opacity: 0; transform: scale(1.5) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes flip-in {
          0% { opacity: 0; transform: rotateY(-90deg) scale(0.8); }
          100% { opacity: 1; transform: rotateY(0deg) scale(1); }
        }
        .perspective-[1000px] { perspective: 1000px; }
        .perspective-[1200px] { perspective: 1200px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}} />
    </section>
  );
}