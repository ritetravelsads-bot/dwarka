import Link from "next/link";

const specs = [
  { title: "Vitrified tile flooring", description: "Premium finish throughout" },
  { title: "Branded electrical fittings", description: "Modular switches & fixtures" },
  { title: "UPVC double-glazed windows", description: "Superior noise & heat insulation" },
  { title: "Oil-bound distemper walls", description: "Premium paint finish" },
  { title: "Designer bathroom fittings", description: "Premium sanitary ware" },
  { title: "Video door phone", description: "Enhanced security" },
];

const stats = [
  { value: "3 & 4", unit: "BHK", label: "Configurations" },
  { value: "1850", unit: "sq.ft", label: "Starting size" },
  { value: "Q4", unit: "2026", label: "Possession" },
];

export default function HighlightsSection() {
  return (
    <section className="py-12 px-4 bg-lightGrey">
      <div className="max-w-5xl mx-auto">

        {/* Section label + title */}
        <div className="mb-8">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[10px] font-bold mb-2 border border-primary/20">
            Project Highlights
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">
              Your Dream Home Awaits
            </h2>
            <p className="text-sm text-slate-500 max-w-xs sm:text-right">
              Vastu-compliant layouts with modern architecture and premium finishes.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-5 gap-4">

          {/* Left column — specs list (3 cols wide) */}
          <div className="md:col-span-3 bg-white border border-borderGrey rounded-2xl overflow-hidden">

            {/* Stat strip */}
            <div className="flex divide-x divide-borderGrey border-b border-borderGrey">
              {stats.map((s, i) => (
                <div key={i} className="flex-1 text-center py-3 px-2">
                  <p className="text-xl font-bold text-dark leading-none">
                    {s.value}<span className="text-sm font-medium text-primary ml-0.5">{s.unit}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div className="divide-y divide-borderGrey">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50/60 transition-colors group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-dark">{spec.title}</p>
                    <p className="text-xs text-slate-400">{spec.description}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — 2 stacked cards (2 cols wide) */}
          <div className="md:col-span-2 flex flex-col gap-4">

            {/* RERA card */}
            <div className="flex-1 bg-dark rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative">
              {/* Decorative ring */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-[16px] border-white/5"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border-[12px] border-primary/10"></div>

              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold mb-1">RERA Approved</h3>
                <p className="text-white/50 text-xs leading-relaxed">
                  Fully registered project with transparent documentation and complete legal compliance.
                </p>
              </div>

              <div className="relative mt-4 flex items-center justify-between">
                <span className="text-xs text-white/30 uppercase tracking-wider">Possession</span>
                <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">Q4 2026</span>
              </div>
            </div>

            {/* Brochure card */}
            <div className="bg-white border border-borderGrey rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-dark text-lg font-bold mb-1">Floor Plans</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Download detailed floor plans and full project specifications.
                </p>
              </div>

              <Link
                href="#contact"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Brochure
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
