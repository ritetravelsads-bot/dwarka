import { useState, useEffect } from "react";

export default function CinematicDealersTable() {
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
        console.log('[v0] Slider data submitted successfully:', { phone, selections });
        setSubmitMessage('Success! Our team will contact you shortly.');
        setTimeout(() => {
          setSubmitMessage(null);
          resetGame();
        }, 3000);
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

  const cardDecks = {
    1: {
      key: "budget",
      cards: [
        { id: "b1", title: "₹1.5-3 Cr", subtitle: "Premium", stats: { Class: "A", Yield: "7/10", Risk: "Low" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" },
        { id: "b2", title: "₹3-5 Cr", subtitle: "Luxury", stats: { Class: "S", Yield: "8/10", Risk: "Med" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400" },
        { id: "b3", title: "₹5 Cr +", subtitle: "Ultra", stats: { Class: "SS", Yield: "9/10", Risk: "High" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    2: {
      key: "motive",
      cards: [
        { id: "m1", title: "Self Use", subtitle: "Move-In", stats: { Utility: "Max", ROI: "Steady", Time: "Now" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" },
        { id: "m2", title: "Investment", subtitle: "High ROI", stats: { Utility: "Low", ROI: "Max", Time: "3 Yrs" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" }
      ]
    },
    3: {
      key: "location",
      cards: [
        { id: "l1", title: "Delhi Border", subtitle: "Sec 102-113", stats: { Access: "10/10", Growth: "Fast", Vibe: "Urban" }, border: "border-orange-500", accent: "text-orange-500", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=400" },
        { id: "l2", title: "Central", subtitle: "Sec 81-99", stats: { Access: "8/10", Growth: "Steady", Vibe: "Subtle" }, border: "border-black", accent: "text-black", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400" }
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

  // Clicking the deck resets the form
  const resetGame = () => {
    if (introPhase !== 'ready') return;
    setStep(1);
    setSelections({ budget: null, motive: null, location: null });
    setAnimatingCardId(null);
    playIntro();
  };

  return (
    // mt-[80px] ensures it clears your navigation bar
    <section className="relative w-full h-[600px] mt-[80px] flex flex-col items-center font-sans overflow-hidden border-y border-gray-200 bg-[#FAFAFA]">

      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Dwarka Expressway Estate"
          className="w-full h-full object-cover object-center opacity-[0.25] grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/95 via-[#FAFAFA]/85 to-[#FAFAFA]/95" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-[15%] left-[10%] w-16 h-16 text-black/5 animate-[float_6s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
        <svg className="absolute bottom-[20%] right-[12%] w-20 h-20 text-orange-500/10 animate-[float_8s_ease-in-out_infinite_reverse]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-orange-500/5 rounded-full" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-full px-4 text-center z-20 flex flex-col items-center">
        <span className="inline-block py-1 px-3 bg-orange-100 text-orange-600 font-black uppercase tracking-[0.2em] text-[8px] rounded-full border border-orange-200 mb-2 shadow-sm">
          Deal Your Future
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight leading-none">
          Build Your <span className="text-orange-500">Portfolio.</span>
        </h2>
      </div>

      {/* ================= THE PLAYER'S HAND (TOP SLOTS) ================= */}
      <div className="absolute top-[85px] md:top-[95px] z-30 flex gap-3 md:gap-4 perspective-[1000px]">
        {[
          { key: 'budget', label: "CAPITAL" },
          { key: 'motive', label: "TACTIC" },
          { key: 'location', label: "ZONE" }
        ].map((slot, index) => {
          const card = selections[slot.key as keyof typeof selections];
          const isCurrentSlot = step === index + 1 && introPhase === 'ready';

          return (
            <div
              key={slot.key}
              className={`w-20 h-28 md:w-24 md:h-32 rounded-lg flex flex-col items-center justify-center transition-all duration-500 transform-style-3d relative overflow-hidden
                ${card ? 'bg-white border-[1.5px] border-black shadow-[2px_2px_0px_#000] translate-y-0' :
                  isCurrentSlot ? 'bg-orange-50 border-[1.5px] border-dashed border-orange-400 scale-105 shadow-inner' :
                    'bg-white/50 backdrop-blur-sm border-[1.5px] border-dashed border-gray-400'
                }
              `}
            >
              {!card && (
                <div className={`text-[8px] font-black tracking-[0.2em] uppercase transition-colors ${isCurrentSlot ? 'text-orange-500 animate-pulse' : 'text-gray-400'}`}>
                  {slot.label}
                </div>
              )}

              {/* Slotted Card Data */}
              {card && (
                <div className="absolute inset-0 p-2 flex flex-col justify-between animate-[slot-in_0.4s_ease-out_forwards] bg-white z-10">
                  <div className="text-[7px] font-black uppercase text-gray-400 tracking-widest">{slot.label}</div>
                  <div className="w-full h-8 md:h-10 rounded overflow-hidden relative">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-black text-black leading-none mb-0.5 truncate">{card.title}</div>
                    <div className={`text-[6px] font-bold uppercase tracking-widest ${card.accent}`}>{card.subtitle}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= THE DRAW DECK (LEFT SIDE RESET MECHANIC) ================= */}
      <button
        onClick={resetGame}
        disabled={introPhase !== 'ready'}
        title="Shuffle Deck & Restart"
        className={`absolute w-28 h-44 md:w-32 md:h-52 z-40 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform-style-3d group cursor-pointer
          ${introPhase === 'hidden' ? 'left-[-50%] top-[240px] opacity-0 -rotate-[45deg]' :
            introPhase === 'deck-enter' ? 'left-1/2 -translate-x-1/2 top-[230px] md:top-[240px] opacity-100 scale-105 rotate-0' :
              introPhase === 'dealing' ? 'left-1/2 -translate-x-1/2 top-[230px] md:top-[240px] opacity-100 scale-95 rotate-0' :
                'left-4 md:left-8 lg:left-12 top-[240px] translate-x-0 opacity-40 scale-[0.6] md:scale-[0.65] -rotate-6 blur-[1px] hover:blur-none hover:opacity-100 hover:scale-[0.65] md:hover:scale-[0.7] hover:rotate-0'
          }
        `}
      >
        <div className="absolute inset-0 bg-white border-2 border-black rounded-xl shadow-[0_4px_0_#d1d5db] group-hover:border-orange-500 transition-colors" />
        <div className="absolute inset-0 bg-white border-2 border-black rounded-xl -translate-y-1 translate-x-1 shadow-[0_4px_0_#d1d5db] group-hover:border-orange-500 transition-colors" />

        {/* Top Deck Card */}
        <div className="absolute inset-0 bg-black border-2 border-black rounded-xl -translate-y-2 translate-x-2 flex flex-col items-center justify-center overflow-hidden group-hover:bg-orange-500 transition-colors">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]" />

          <svg className="w-8 h-8 text-orange-500 opacity-80 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>

          <span className="text-[10px] text-black font-black uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Shuffle
          </span>
        </div>
      </button>

      {/* ================= THE DEALER'S TABLE (CENTER STAGE) ================= */}
      <div className="absolute top-[230px] md:top-[240px] w-full max-w-4xl flex justify-center perspective-[1200px] z-20">

        {[1, 2, 3].map((deckStep) => {
          const deckData = (cardDecks as any)[deckStep];
          if (!deckData) return null;

          const isStep1 = deckStep === 1;
          const hideStep1 = isStep1 && (introPhase === 'hidden' || introPhase === 'deck-enter');

          return (
            <div
              key={deckStep}
              className={`absolute flex justify-center items-center gap-2.5 md:gap-5 transition-all duration-500 
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
                    className={`relative w-28 h-44 md:w-36 md:h-52 bg-white rounded-xl p-2 md:p-2.5 flex flex-col text-left transition-all duration-400 transform-style-3d shadow-xl border-2 ${card.border} group
                      hover:-translate-y-4 hover:shadow-[0_15px_30px_rgba(249,115,22,0.2)] hover:rotate-[-2deg]
                      ${isSelected ? '!scale-50 !-translate-y-[150px] !opacity-0 z-50 shadow-none' : ''}
                      ${isDiscarded ? '!translate-y-[100px] !rotate-[20deg] !opacity-0 z-10 shadow-none' : ''}
                      ${applyPop ? `animate-[card-pop_0.5s_ease-out_forwards] ${popDelay}` : ''}
                    `}
                  >
                    {/* Card Graphic with Image */}
                    <div className="w-full h-12 md:h-16 bg-gray-100 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden border border-gray-200">
                      <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-orange-500/20 transition-colors duration-300" />
                    </div>

                    <div className="mb-auto px-1">
                      <h3 className="text-xs md:text-sm font-black text-black uppercase leading-none mb-0.5">{card.title}</h3>
                      <p className={`text-[6px] md:text-[7px] font-bold uppercase tracking-widest ${card.accent}`}>{card.subtitle}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="mt-2 pt-2 border-t-2 border-dashed border-gray-200 grid grid-cols-3 gap-1 px-0.5">
                      {Object.entries(card.stats).map(([statName, statValue]) => (
                        <div key={statName} className="text-center">
                          <div className="text-[5px] md:text-[6px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{statName}</div>
                          <div className="text-[7px] md:text-[8px] font-black text-black bg-gray-100 rounded border border-gray-200 py-0.5">{statValue as string}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-[7px] font-black tracking-[0.2em] uppercase py-1.5 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
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
      {/* Positioned absolute top-[55%] to guarantee it perfectly centers in the 600px height without cutting off */}
      <div className={`absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center transition-all duration-700 
        ${step === 4 ? 'opacity-100 z-50 pointer-events-auto delay-200' : 'opacity-0 scale-50 pointer-events-none'}`}
      >
        <div className="relative w-[300px] h-[340px] md:w-[320px] md:h-[360px] bg-[#050505] rounded-3xl p-1 shadow-[0_15px_40px_rgba(249,115,22,0.3)] animate-[flip-in_0.6s_ease-out_forwards]">
          <div className="w-full h-full border-[1.5px] border-orange-500 rounded-[22px] p-5 flex flex-col justify-between relative overflow-hidden bg-[#050505]">

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50" />

            <div className="text-center relative z-10 pt-1">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                <svg className="w-5 h-5 text-black ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">Deck Complete</h3>
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed px-2">
                Unlocked <span className="text-orange-500 font-bold">14 Off-Market</span> properties. Verify identity to claim.
              </p>
            </div>

            <div className="space-y-3 mt-3 relative z-10">
              <div className="bg-white rounded-lg overflow-hidden flex items-center focus-within:ring-[1.5px] focus-within:ring-orange-500 transition-all">
                <span className="bg-gray-100 text-gray-500 font-black text-[10px] px-3 py-3 border-r border-gray-200">+91</span>
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  id="heroPhone"
                  className="w-full bg-transparent px-3 py-3 text-black font-bold outline-none placeholder-gray-400 text-xs" 
                />
              </div>

              <button 
                type="button"
                onClick={() => handleRevealHand()}
                disabled={isSubmitting || step !== 4}
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-[0.2em] py-3 rounded-lg transition-all shadow-[2px_2px_0px_#fff] active:shadow-none active:translate-y-0.5 active:translate-x-0.5 text-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
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
