import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Award, Users, Building2, Clock, Shield, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Dwarka Expressway Real Estate",
  description:
    "Learn about Dwarka Expressway NCR - Your trusted partner for premium real estate properties on Dwarka Expressway, Gurgaon. 25+ years of experience.",
};

const stats = [
  { value: "25+", label: "Years of Experience", description: "In NCR real estate" },
  { value: "15,000+", label: "Happy Families", description: "Across 40+ projects" },
  { value: "98%", label: "On-Time Delivery", description: "Industry leading" },
  { value: "50+", label: "Projects Listed", description: "Premium properties" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in complete transparency in all our dealings. Every project we recommend is RERA approved.",
  },
  {
    icon: Target,
    title: "Customer First",
    description: "Your dream home is our priority. We go above and beyond to match you with the perfect property.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We partner only with reputed developers who maintain the highest construction standards.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Our experienced team provides end-to-end support from property selection to possession.",
  },
];

const milestones = [
  { year: "2000", event: "Founded with a vision to transform NCR real estate" },
  { year: "2010", event: "Crossed 5,000 happy families milestone" },
  { year: "2015", event: "Expanded operations to Dwarka Expressway corridor" },
  { year: "2020", event: "Achieved 15,000+ satisfied customers" },
  { year: "2024", event: "Became the leading consultancy on Dwarka Expressway" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/about-hero.jpg"
            alt="About Hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#c8a55d]">Dwarka Expressway NCR</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Your trusted partner in finding premium real estate properties on Dwarka
              Expressway, Gurgaon. We bring dreams to reality with transparency, trust,
              and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-[#c8a55d] mb-2">{stat.value}</div>
                <div className="font-semibold text-[#0f0f1a] mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1a] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dwarka Expressway NCR was founded with a singular vision: to make the
                  home-buying journey seamless, transparent, and rewarding for every
                  customer. Over the past 25 years, we have grown from a small consultancy
                  to one of the most trusted names in NCR real estate.
                </p>
                <p>
                  Our journey began in 2000 when we recognized the potential of the
                  Delhi-NCR real estate market. Since then, we have helped over 15,000
                  families find their dream homes across Gurgaon, Noida, and Greater Noida.
                </p>
                <p>
                  With the inauguration of Dwarka Expressway, we identified this corridor
                  as the next big hub for premium real estate. Today, we are proud to be
                  the leading consultancy for properties on Dwarka Expressway, partnering
                  with top developers like M3M, Godrej, Sobha, DLF, and more.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="bg-[#c8a55d] hover:bg-[#b8954d] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#c8a55d] text-[#c8a55d] hover:bg-[#c8a55d]/5 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-story.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#c8a55d] text-white p-6 rounded-2xl">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1a] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define our commitment to you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 hover:border-[#c8a55d]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#c8a55d]/10 flex items-center justify-center mb-4 group-hover:bg-[#c8a55d] transition-colors">
                  <value.icon className="w-7 h-7 text-[#c8a55d] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f0f1a] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1a] mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#c8a55d]/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-[#c8a55d] mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#c8a55d] rounded-full"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Discover the advantages of partnering with Dwarka Expressway NCR
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "RERA Approved Projects Only",
              "Best Price Guarantee",
              "Free Site Visits",
              "Expert Legal Assistance",
              "Home Loan Support",
              "Post-Sale Service",
              "Virtual Tour Options",
              "Zero Brokerage on Select Projects",
              "24/7 Customer Support",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c8a55d]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#c8a55d]" />
                </div>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c8a55d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the best properties on Dwarka Expressway.
            Schedule a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#c8a55d] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919354902932"
              className="bg-[#0f0f1a] text-white hover:bg-[#1a1a2e] font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Call: +91 93549 02932
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
