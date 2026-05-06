import { Shield, CheckCircle } from "lucide-react";

const pastProjects = [
  "Green Valley Residency, Gurugram (2022) - 500 units",
  "Sky Heights Apartments, Noida (2021) - 350 units",
  "Harmony Villas, Greater Noida (2020) - 200 units",
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Stats Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[dark] mb-4">
                Built on Trust
              </h2>
              <p className="text-slate-600">
                A legacy of excellence in NCR real estate development
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-gray-200 bg-white">
                <div className="text-5xl font-light text-[dark] mb-2">25+</div>
                <div className="text-slate-700 font-medium">Years of Experience</div>
                <div className="text-slate-500 text-sm">In NCR real estate market</div>
              </div>

              <div className="p-6 rounded-xl border border-gray-200 bg-white">
                <div className="text-5xl font-light text-[dark] mb-2">15,000+</div>
                <div className="text-slate-700 font-medium">Happy Families</div>
                <div className="text-slate-500 text-sm">Across 40 completed projects</div>
              </div>

              <div className="p-6 rounded-xl border border-gray-200 bg-white">
                <div className="text-5xl font-light text-[dark] mb-2">98%</div>
                <div className="text-slate-700 font-medium">On-Time Delivery</div>
                <div className="text-slate-500 text-sm">Industry-leading track record</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 leading-relaxed text-lg">
              With over two decades shaping NCR&apos;s skyline, we deliver RERA approved projects
              from Award winning property developers. Our RERA certified commitment ensures
              transparency and trust for thousands of families.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-borderGrey bg-white hover:shadow-md transition-all">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-dark font-semibold mb-2">ISO Certified</h3>
                <p className="text-slate-500 text-sm">
                  International quality standards maintained
                </p>
              </div>

              <div className="p-6 rounded-xl border border-borderGrey bg-white hover:shadow-md transition-all">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-dark font-semibold mb-2">RERA Compliant</h3>
                <p className="text-slate-500 text-sm">
                  All projects registered and transparent
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
              <h4 className="text-dark font-semibold mb-3">Notable Past Projects</h4>
              <ul className="space-y-2">
                {pastProjects.map((project, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
