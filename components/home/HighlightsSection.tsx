import { useState } from "react";

export default function EtherealSpatialWizard() {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selections, setSelections] = useState({
    budget: null as string | null,
    motive: null as string | null,
    location: null as string | null,
  });

  const handleSelect = (key: string, value: string) => {
    if (isTransitioning) return;
    
    setSelections((prev) => ({ ...prev, [key]: value }));
    setIsTransitioning(true);
    
    // Allow the selection animation to play before diving to the next step
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsTransitioning(false);
    }, 600);
  };

  // Advanced Z-Axis transition logic
  const getStepStyle = (index: number) => {
    if (step === index) 
      return "opacity-100 translate-z-0 scale-100 blur-none pointer-events-auto z-20";
    if (step > index) 
      return "opacity-0 translate-z-[500px] scale-150 blur-xl pointer-events-none z-30 invisible transition-all duration-1000";
    return "opacity-0 translate-z-[-500px] scale-75 blur-xl pointer-events-none z-10 transition-all duration-1000";
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-[#020617] text-slate-200 overflow-hidden font-sans flex flex-col items-center justify-center perspective-[1500px]">
      
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full transition-colors duration-1000 blur-[120px] opacity-30 animate-pulse-slow
          ${step === 1 ? 'bg-blue-600' : step === 2 ? 'bg-indigo-600' : step === 3 ? 'bg-violet-600' : 'bg-emerald-600'}`} 
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
      </div>

      {/* Top Header */}
      <div className="absolute top-8 left-0 w-full px-8 flex justify-between items-center z-50">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2 text-white">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-violet-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          LUMINA
        </div>
        <div className="text-xs font-semibold tracking-widest uppercase text-slate-500">
          Match Protocol / {step}/4
        </div>
      </div>

      {/* 3D Container for Steps */}
      <div className="relative w-full max-w-5xl h-[500px] transform-style-3d">
        
        {/* ================= STEP 1: BUDGET (Tall Pillars Layout) ================= */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${getStepStyle(1)}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">Establish Parameters</h2>
          <p className="text-slate-400 mb-10">Select your capital deployment range.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
            {[
              { id: 'b1', label: "₹1.5 - ₹3 Cr", tag: "Premium", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { id: 'b2', label: "₹3 - ₹5 Cr", tag: "Luxury", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { id: 'b3', label: "₹5 Cr +", tag: "Ultra-Luxury", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelect('budget', opt.label)}
                className="group relative h-64 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between items-start text-left overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={opt.icon} /></svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-400/80 mb-2">{opt.tag}</div>
                  <div className="text-2xl font-bold text-white">{opt.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ================= STEP 2: MOTIVE (Asymmetrical Masonry Layout) ================= */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${getStepStyle(2)}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">Primary Objective</h2>
          <p className="text-slate-400 mb-10">Define the core intent of your acquisition.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl px-4">
            {/* Large Feature Block */}
            <button
              onClick={() => handleSelect('motive', 'Immediate Move-in')}
              className="group md:col-span-2 relative h-32 rounded-3xl bg-white/5 border border-white/10 p-6 flex items-center gap-6 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] text-left"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                <svg className="w-8 h-8 text-slate-400 group-hover:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">Self-Use & Move-in</div>
                <div className="text-sm text-slate-400">Ready-to-move or near-possession properties with established amenities.</div>
              </div>
            </button>
            
            {/* Split Blocks */}
            {[
              { label: "Pure Investment", desc: "High ROI & appreciation focus", color: "hover:border-emerald-500/50" },
              { label: "Luxury Upgrade", desc: "Lifestyle enhancement", color: "hover:border-violet-500/50" }
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleSelect('motive', opt.label)}
                className={`group relative h-32 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-center overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:bg-white/10 ${opt.color} text-left`}
              >
                <div className="text-xl font-bold text-white mb-1 group-hover:text-white">{opt.label}</div>
                <div className="text-sm text-slate-400">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* ================= STEP 3: LOCATION (Cinematic Wide Bars) ================= */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${getStepStyle(3)}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">Select Territory</h2>
          <p className="text-slate-400 mb-10">Target micro-markets along the expressway.</p>
          
          <div className="flex flex-col gap-5 w-full max-w-4xl px-4">
            {[
              { label: "Delhi Border (Sector 102-113)", desc: "0-5 mins from Delhi, highest future appreciation potential.", bg: "from-blue-600/20 to-transparent" },
              { label: "Central Expressway (Sector 81-99)", desc: "Closer to NH-8, Cyberhub, and existing social infrastructure.", bg: "from-violet-600/20 to-transparent" }
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleSelect('location', opt.label)}
                className="group relative w-full h-28 rounded-3xl bg-white/5 border border-white/10 p-1 flex items-center overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-white/30 text-left"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${opt.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="h-full w-full rounded-[20px] bg-[#020617]/80 backdrop-blur-md p-6 flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">{opt.label}</div>
                    <div className="text-sm text-slate-400 group-hover:translate-x-2 transition-transform duration-300 delay-75">{opt.desc}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ================= STEP 4: THE NEXUS (Final Lead Capture) ================= */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${getStepStyle(4)}`}>
          <div className="w-full max-w-md relative">
            {/* Magical Glowing Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/20 blur-[100px] -z-10 rounded-full animate-pulse-slow"></div>
            
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 text-center shadow-2xl shadow-emerald-500/10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl rotate-12 flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30">
                <svg className="w-10 h-10 text-white -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2">Matrix Aligned.</h2>
              <p className="text-slate-400 mb-8 text-sm">
                We've filtered 40+ projects down to your exact criteria. Verify identity to decrypt your matches.
              </p>
              
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Enter Mobile Number" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-center text-white text-lg placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  />
                </div>
                <button className="w-full bg-white text-black font-bold text-lg py-4 rounded-2xl hover:bg-emerald-400 hover:text-white transition-colors duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
                  Decrypt Matches
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= THE INVENTORY DOCK ================= */}
      {/* This dock catches the user's selections and builds their "profile" visually */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${step === 4 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'} z-50`}>
        <div className="flex items-center gap-2 bg-[#0a0f25]/80 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl">
          
          <div className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:block">
            Your Blueprint
          </div>
          <div className="w-px h-6 bg-white/10 hidden sm:block mx-2"></div>

          {/* Slot 1: Budget */}
          <div className={`h-10 rounded-full px-4 flex items-center justify-center text-sm font-medium transition-all duration-500 ${selections.budget ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-white/5 text-slate-600 border border-dashed border-white/10'}`}>
            {selections.budget || 'Budget Pending'}
          </div>

          {/* Arrow */}
          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

          {/* Slot 2: Motive */}
          <div className={`h-10 rounded-full px-4 flex items-center justify-center text-sm font-medium transition-all duration-500 ${selections.motive ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-white/5 text-slate-600 border border-dashed border-white/10'}`}>
            {selections.motive ? selections.motive.split(' ')[0] : 'Intent'}
          </div>

          {/* Arrow */}
          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

          {/* Slot 3: Location */}
          <div className={`h-10 rounded-full px-4 flex items-center justify-center text-sm font-medium transition-all duration-500 ${selections.location ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' : 'bg-white/5 text-slate-600 border border-dashed border-white/10'}`}>
            {selections.location ? 'Location Set' : 'Zone'}
          </div>
        </div>
      </div>

      {/* Global styles for 3D Perspective and custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-[1500px] { perspective: 1500px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-0 { transform: translateZ(0px); }
        .translate-z-[500px] { transform: translateZ(500px); }
        .translate-z-[-500px] { transform: translateZ(-500px); }
        
        @keyframes pulse-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}