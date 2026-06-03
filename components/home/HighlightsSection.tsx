import { useState } from "react";

export default function VipMatcherWizard() {
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
      }, 350); // Slightly faster transition to match tighter layout
    }
  };

  // Tighter transition translations (translate-y-8 instead of 16)
  const getStepClass = (stepNumber: number) => {
    if (step === stepNumber) return "opacity-100 translate-y-0 pointer-events-auto scale-100 z-10";
    if (step > stepNumber) return "opacity-0 -translate-y-8 pointer-events-none scale-95 z-0 absolute inset-0";
    return "opacity-0 translate-y-8 pointer-events-none scale-95 z-0 absolute inset-0";
  };

  return (
    <section className="py-10 md:py-14 px-4 bg-[#050505] flex items-center relative overflow-hidden font-sans">
      
      {/* Background ambient glows - slightly reduced size */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Reduced gap-12 to gap-8 for tighter column spacing */}
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* ================= LEFT SIDE: THE COMMAND CENTER ================= */}
        <div className="lg:col-span-7 flex flex-col justify-center min-h-[380px] relative">
          
          {/* Header & Progress - tighter margins */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-orange-500"></div>
              <span className="text-orange-500 uppercase tracking-[0.2em] text-[9px] font-bold">
                Project Matcher V2.0
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Perfect Match.</span>
            </h2>
            
            {/* Minimalist Progress Indicators */}
            <div className="flex gap-2 w-full max-w-sm">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative">
                  <div 
                    className={`absolute inset-y-0 left-0 bg-orange-500 transition-all duration-500 ease-out ${
                      step > i ? 'w-full' : step === i ? 'w-1/2 animate-pulse' : 'w-0'
                    }`} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Steps Container */}
          <div className="relative w-full">
            
            {/* STEP 1: BUDGET */}
            <div className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${getStepClass(1)}`}>
              <h3 className="text-xl text-white/90 font-medium mb-4">01. Select investment bracket</h3>
              <div className="space-y-2.5">
                {[
                  { id: "b1", label: "₹1.5 Cr - ₹3 Cr", desc: "Premium 3 BHK segment" },
                  { id: "b2", label: "₹3 Cr - ₹5 Cr", desc: "Luxury 3 & 4 BHKs" },
                  { id: "b3", label: "₹5 Cr+", desc: "Ultra-luxury & Penthouses" }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('budget', opt.label)}
                    className="group w-full relative bg-white/[0.03] border border-white/10 hover:border-orange-500/50 p-3.5 rounded-xl flex items-center justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.2)] hover:-translate-y-0.5 text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="text-base font-bold text-white mb-0.5 group-hover:text-orange-400 transition-colors">{opt.label}</div>
                      <div className="text-[11px] text-white/40">{opt.desc}</div>
                    </div>
                    <div className="relative z-10 w-6 h-6 rounded-full border border-white/20 group-hover:border-orange-500 flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 rounded-full bg-orange-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: MOTIVE */}
            <div className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${getStepClass(2)}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl text-white/90 font-medium">02. Primary Objective</h3>
                <button onClick={() => setStep(1)} className="text-xs text-white/40 hover:text-orange-500 transition-colors uppercase tracking-widest text-[9px]">← Back</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'move', label: "Self Use", desc: "Immediate move-in", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
                  { id: 'roi', label: "Investment", desc: "High ROI focus", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
                  { id: 'luxury', label: "Upgrade", desc: "Lifestyle luxury", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('motive', opt.label)}
                    className="group relative bg-white/[0.03] border border-white/10 hover:border-orange-500/50 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.2)] hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-orange-500/10 group-hover:border-orange-500/50 transition-colors">
                      <svg className="w-5 h-5 text-white/50 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {opt.icon}
                      </svg>
                    </div>
                    <div className="font-bold text-white text-sm mb-0.5">{opt.label}</div>
                    <div className="text-[10px] text-white/40">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 3: LOCATION */}
            <div className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${getStepClass(3)}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl text-white/90 font-medium">03. Preferred Zone</h3>
                <button onClick={() => setStep(2)} className="text-xs text-white/40 hover:text-orange-500 transition-colors uppercase tracking-widest text-[9px]">← Back</button>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Delhi Border (Sec 102-113)", desc: "0-5 mins from Delhi, highest future appreciation." },
                  { label: "Central E-way (Sec 81-99)", desc: "Closer to NH-8, Cyberhub, and existing social infrastructure." }
                ].map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect('location', opt.label)}
                    className="group w-full bg-white/[0.03] border border-white/10 hover:border-orange-500/50 p-4 rounded-xl flex items-start gap-3 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.2)] text-left hover:-translate-y-0.5"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base mb-0.5">{opt.label}</div>
                      <div className="text-xs text-white/40">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 4: LEAD CAPTURE */}
            <div className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${getStepClass(4)}`}>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
                
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(249,115,22,0.4)] relative">
                  <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" /></svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Ticket Generated.</h3>
                <p className="text-white/60 mb-6 text-xs max-w-[280px] mx-auto leading-relaxed">
                  Criteria locked. Enter your number to unlock matching floorplans & pricing.
                </p>
                
                <div className="max-w-xs mx-auto space-y-3">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/50 text-sm font-bold">+91</div>
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full bg-black/50 border border-white/20 focus:border-orange-500 rounded-lg py-3 pl-12 pr-4 text-white text-sm placeholder-white/20 outline-none transition-colors"
                    />
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition-all hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5 uppercase tracking-wide text-xs">
                    Unlock Matches Now
                  </button>
                  <button onClick={() => setStep(1)} className="text-[10px] text-white/30 hover:text-white mt-3 uppercase tracking-widest transition-colors">
                    Restart Process
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: THE DYNAMIC TICKET ================= */}
        <div className="lg:col-span-5 hidden lg:block">
          {/* Compressed Ticket Container height to 420px */}
          <div className="relative w-full max-w-[320px] mx-auto transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">
            
            <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col min-h-[420px]">
              
              {/* Top Section */}
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent h-16 -translate-y-full animate-[scan_3s_ease-in-out_infinite]" />
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-1">Status</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                      <span className="text-orange-500 font-bold text-xs tracking-wider uppercase">Live Sync</span>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-white/10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 22h20L12 2zm0 6l6 12H6l6-12z" />
                  </svg>
                </div>

                {/* Dynamic Fields - smaller text & spacing */}
                <div className="space-y-4">
                  <div>
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-1">Capital Config</div>
                    <div className="h-6 flex items-end border-b border-white/5 pb-1">
                      {selections.budget ? (
                        <span className="text-lg font-bold text-white font-mono animate-[fade-in_0.3s_ease-out]">{selections.budget}</span>
                      ) : (
                        <span className="text-lg text-white/10 font-mono">_ _ _ _</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-1">Primary Motive</div>
                    <div className="h-6 flex items-end border-b border-white/5 pb-1">
                      {selections.motive ? (
                        <span className="text-base font-bold text-orange-400 font-mono animate-[fade-in_0.3s_ease-out]">{selections.motive}</span>
                      ) : (
                        <span className="text-base text-white/10 font-mono">_ _ _ _</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-1">Target Zone</div>
                    <div className="h-6 flex items-end border-b border-white/5 pb-1">
                      {selections.location ? (
                        <span className="text-sm font-bold text-white font-mono truncate animate-[fade-in_0.3s_ease-out]">{selections.location}</span>
                      ) : (
                        <span className="text-sm text-white/10 font-mono">_ _ _ _</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Divider with cutouts */}
              <div className="relative h-6 w-full flex items-center">
                <div className="absolute left-[-12px] w-6 h-6 bg-[#050505] rounded-full border-r border-white/10"></div>
                <div className="absolute right-[-12px] w-6 h-6 bg-[#050505] rounded-full border-l border-white/10"></div>
                <div className="w-full border-t-2 border-dashed border-white/10 mx-5"></div>
              </div>

              {/* Bottom Barcode Section */}
              <div className="p-6 pt-3 flex-1 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-0.5">Entry Code</div>
                    <div className="text-xs font-mono text-white/50">
                      {step === 4 ? "VALID-2026-DXP" : "PENDING..."}
                    </div>
                  </div>
                  <div className={`w-8 h-8 border border-white/20 rounded p-0.5 transition-all duration-700 ${step === 4 ? 'opacity-100 border-orange-500/50' : 'opacity-20'}`}>
                    <div className="w-full h-full bg-white/20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)' }}></div>
                  </div>
                </div>
                
                {/* Simulated Barcode */}
                <div className={`h-8 w-full flex gap-[2px] transition-opacity duration-1000 ${step === 4 ? 'opacity-100' : 'opacity-30'}`}>
                  {[...Array(28)].map((_, i) => (
                    <div key={i} className={`h-full bg-white ${Math.random() > 0.5 ? 'w-1.5' : 'w-[2px]'}`}></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Absolute Glow behind ticket */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl blur-xl transition-opacity duration-1000 -z-10 ${step === 4 ? 'opacity-30' : 'opacity-0'}`}></div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}