import { useState, useEffect } from "react";

export default function MainframeAccordionWizard() {
  const [activeStep, setActiveStep] = useState(1);
  const [processingStep, setProcessingStep] = useState<number | null>(null);
  const [selections, setSelections] = useState({
    budget: "",
    motive: "",
    location: "",
  });

  const handleSelect = (stepIndex: number, key: string, value: string) => {
    if (processingStep) return;
    
    setSelections((prev) => ({ ...prev, [key]: value }));
    setProcessingStep(stepIndex);

    // Simulate system processing before collapsing
    setTimeout(() => {
      setProcessingStep(null);
      if (stepIndex < 4) {
        setActiveStep(stepIndex + 1);
      }
    }, 450);
  };

  const steps = [
    {
      id: 1,
      key: "budget",
      title: "CAPITAL ALLOCATION",
      completedText: selections.budget,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 h-full">
          {[
            { label: "₹1.5 - ₹3 Cr", tag: "PREMIUM", desc: "Tier-1 segment properties" },
            { label: "₹3 - ₹5 Cr", tag: "LUXURY", desc: "Expansive 3 & 4 BHK configs" },
            { label: "₹5 Cr +", tag: "ULTRA", desc: "Penthouses & bespoke villas" }
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleSelect(1, 'budget', opt.label)}
              className="group relative bg-[#0a0a0a] border border-white/10 hover:border-orange-500 rounded-lg p-3 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(249,115,22,0.1)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-[9px] font-bold tracking-[0.2em] text-orange-500">{opt.tag}</span>
                <svg className="w-4 h-4 text-white/20 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <div className="text-lg font-bold text-white mb-0.5">{opt.label}</div>
                <div className="text-[10px] text-white/40">{opt.desc}</div>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      id: 2,
      key: "motive",
      title: "STRATEGIC OBJECTIVE",
      completedText: selections.motive,
      content: (
        <div className="grid grid-cols-2 gap-2 h-full">
          {[
            { label: "Immediate Move-in", tag: "SELF-USE", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { label: "Pure Investment", tag: "HIGH ROI", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            { label: "Luxury Upgrade", tag: "LIFESTYLE", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
          ].map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => handleSelect(2, 'motive', opt.label)}
              className={`group relative bg-[#0a0a0a] border border-white/10 hover:border-orange-500 rounded-lg p-3 flex flex-col justify-between text-left transition-all duration-300 hover:bg-orange-500/5 ${i === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:text-orange-400 text-white/40 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={opt.icon} /></svg>
                </div>
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/30 group-hover:text-orange-500 transition-colors">{opt.tag}</span>
              </div>
              <div className="text-base font-bold text-white group-hover:translate-x-1 transition-transform">{opt.label}</div>
            </button>
          ))}
        </div>
      )
    },
    {
      id: 3,
      key: "location",
      title: "ZONE DESIGNATION",
      completedText: selections.location,
      content: (
        <div className="flex flex-col gap-2 h-full">
          {[
            { label: "Delhi Border (Sector 102-113)", desc: "0-5 mins from Delhi, highest appreciation vector." },
            { label: "Central Expressway (Sector 81-99)", desc: "Proximity to NH-8, Cyberhub, and existing infrastructure." }
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleSelect(3, 'location', opt.label)}
              className="group flex-1 bg-[#0a0a0a] border border-white/10 hover:border-orange-500 rounded-lg p-3 flex items-center justify-between text-left transition-all duration-300 hover:bg-orange-500/5"
            >
              <div>
                <div className="text-sm font-bold text-white mb-0.5 group-hover:text-orange-400 transition-colors">{opt.label}</div>
                <div className="text-[10px] text-white/40">{opt.desc}</div>
              </div>
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                <svg className="w-3 h-3 text-transparent group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      id: 4,
      key: "auth",
      title: "DECRYPT MATCHES",
      completedText: "",
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center px-4 relative">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] pointer-events-none rounded-lg" />
          
          <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center mb-3 text-orange-500 relative z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight">System Matrix Aligned</h3>
          <p className="text-[11px] text-white/40 mb-4 max-w-xs">
            Parameters locked. Enter your credentials to decrypt the 3 exact project matches bypassing public inventory.
          </p>
          
          <div className="w-full max-w-xs space-y-2 relative z-10">
            <div className="flex bg-[#050505] border border-white/20 rounded-lg focus-within:border-orange-500 overflow-hidden transition-colors">
              <span className="flex items-center justify-center px-3 bg-white/5 text-white/50 text-xs font-bold border-r border-white/10">+91</span>
              <input 
                type="tel" 
                placeholder="Mobile Terminal ID" 
                className="w-full bg-transparent py-2.5 px-3 text-white text-sm outline-none placeholder-white/20"
              />
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs tracking-widest uppercase py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              Initialize Decryption
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#020202] flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Mainframe Container */}
      <div className="w-full max-w-3xl h-[600px] bg-[#050505] border border-white/5 rounded-2xl p-2 flex flex-col gap-2 relative shadow-2xl">
        
        {/* Dynamic Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden z-50">
          <div className="w-full h-1 bg-white/5 absolute top-0 animate-[scan_4s_linear_infinite]" />
        </div>

        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const isCompleted = activeStep > step.id;
          const isProcessing = processingStep === step.id;
          const isLocked = activeStep < step.id;

          return (
            <div
              key={step.id}
              className={`relative flex flex-col rounded-xl overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.3,1)]
                ${isActive ? 'flex-[1_1_0%] border border-orange-500/40 bg-[#0a0a0a] shadow-[0_0_30px_-5px_rgba(249,115,22,0.15)]' : 
                  isCompleted ? 'h-12 border border-white/10 bg-[#070707] cursor-pointer hover:border-orange-500/30' : 
                  'h-12 border border-white/5 bg-[#030303] opacity-40 pointer-events-none'
                }`}
              onClick={() => isCompleted && setActiveStep(step.id)}
            >
              
              {/* Processing Laser Animation */}
              {isProcessing && (
                <div className="absolute bottom-0 left-0 h-0.5 bg-orange-500 animate-[load_0.45s_ease-out_forwards]" />
              )}

              {/* Panel Header Bar (Always Visible) */}
              <div className="h-12 shrink-0 flex items-center px-4 justify-between relative z-20 bg-gradient-to-r from-transparent to-black/50">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-orange-500' : isCompleted ? 'text-white/50' : 'text-white/20'}`}>
                    0{step.id}
                  </span>
                  <span className={`text-xs font-bold tracking-[0.15em] ${isActive ? 'text-white' : 'text-white/50'}`}>
                    {step.title}
                  </span>
                </div>
                
                {isCompleted && !isActive && (
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-orange-400 font-bold truncate max-w-[150px] uppercase">{step.completedText}</span>
                    <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                )}
                
                {isLocked && (
                  <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" /></svg>
                )}
              </div>

              {/* Active Content Area (Absolute positioned to prevent squashing during flex-grow animation) */}
              <div className="absolute top-12 left-0 right-0 bottom-0">
                <div className={`p-3 h-full transition-all duration-500 delay-100 ${isActive && !isProcessing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  {step.content}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        @keyframes load {
          0% { width: 0%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
      `}} />
    </section>
  );
}