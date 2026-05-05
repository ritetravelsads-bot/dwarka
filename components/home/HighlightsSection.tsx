export default function HighlightsSection() {
  const specs = [
    { title: "Vitrified tile flooring", description: "Premium finish throughout" },
    { title: "Branded electrical fittings", description: "Modular switches & fixtures" },
    { title: "UPVC windows", description: "Double-glazed for insulation" },
    { title: "Oil-bound distemper walls", description: "Premium paint finish" },
    { title: "Designer bathroom fittings", description: "Premium sanitary ware" },
    { title: "Video door phone", description: "Enhanced security" },
  ];

  return (
    <section className="py-32 px-6 bg-lightGrey">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-dark mb-6">
            Your Dream Home Awaits
          </h2>
          <p className="text-slate-700 font-light">
            Meticulously designed residences with modern architecture, vastu-compliant layouts, and premium specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {/* Large Featured Card */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden border border-borderGrey group project-card bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative p-8 h-full flex flex-col justify-end">
              <div className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-md flex items-center justify-center text-primary mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-3xl text-dark font-semibold mb-3">Premium Residences</h3>
              <div className="space-y-2 mb-4">
                <p className="text-dark font-medium">3 & 4 BHK from 1850 sq.ft</p>
                <p className="text-slate-700 text-sm">Vastu-compliant layouts with natural ventilation</p>
                <p className="text-slate-700 text-sm">Private balconies with expressway views</p>
                <p className="text-slate-700 text-sm">Modular kitchen with premium fixtures</p>
              </div>
            </div>
          </div>

          {/* RERA Card */}
          <div className="bg-white border border-borderGrey rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col justify-center relative overflow-hidden project-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-xl rounded-full"></div>
            <div className="relative">
              <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-2xl text-dark font-semibold mb-2">RERA Approved</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Registered project with transparent documentation and legal compliance
              </p>
              <div className="text-primary font-semibold">Q4 2026 Possession</div>
            </div>
          </div>

          {/* Floor Plan Card */}
          <div className="bg-white border border-borderGrey rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col justify-center relative overflow-hidden project-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-xl rounded-full"></div>
            <div className="relative">
              <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl text-dark font-semibold mb-2">Floor Plans</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Download detailed floor plans and specifications
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium">
                Download Brochure
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Specifications Card */}
          <div className="md:col-span-2 bg-white border border-borderGrey rounded-2xl p-8 hover:shadow-lg transition-all relative overflow-hidden project-card">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-2xl rounded-full"></div>
            <div className="relative">
              <h3 className="text-2xl text-dark font-semibold mb-6">Premium Specifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {specs.slice(0, 3).map((spec, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-dark font-medium text-sm">{spec.title}</p>
                        <p className="text-slate-600 text-xs">{spec.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {specs.slice(3).map((spec, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-dark font-medium text-sm">{spec.title}</p>
                        <p className="text-slate-600 text-xs">{spec.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
