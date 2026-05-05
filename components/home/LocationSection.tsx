export default function LocationSection() {
  const connectivityFeatures = [
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: "15 minutes to IGI Airport",
      description: "Direct expressway access for seamless international travel",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Direct Gurugram Access",
      description: "20-minute drive to Cyber City and DLF Phase offices",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "5 km from Diplomatic Enclave",
      description: "Proximity to embassies and international schools",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Adjacent Metro Station (2026)",
      description: "Upcoming metro connectivity for daily commute convenience",
    },
  ];

  return (
    <section id="location" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-dark mb-4">
            Prime Location
          </h2>
          <p className="text-slate-700 mb-6">
            Strategically positioned at the heart of NCR&apos;s most promising corridor
          </p>
        </div>
        <a
          href="#contact"
          className="text-sm text-dark border-b border-dark pb-1 hover:text-primary hover:border-primary transition-colors"
        >
          View detailed location map
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Location Map Visual */}
        <div className="relative overflow-hidden rounded-2xl border border-borderGrey location-image">
          <img
            src="/assets/img/prime-Connectivity.webp"
            alt="Aerial view of Dwarka Expressway showing modern infrastructure and connectivity to Delhi-NCR"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Connectivity Benefits */}
        <div className="space-y-6">
          {connectivityFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl border border-borderGrey hover:border-primary/20 hover:shadow-md transition-all location-card"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
