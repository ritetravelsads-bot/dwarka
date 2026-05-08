"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Ruler,
  IndianRupee,
  Home,
  Car,
  GraduationCap,
  Hospital,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import PopupForm from "@/components/PopupForm";

interface QuickFact {
  label: string;
  value: string;
  icon: "size" | "price" | "config" | "connectivity";
}

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

interface CategoryPageProps {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  
  // Quick Facts
  quickFacts: QuickFact[];
  
  // Layout Breakdown
  layoutTitle: string;
  layoutDescription: string;
  layoutFeatures: string[];
  
  // Hidden Gems (Local Landmarks)
  localLandmarks: {
    schools: string[];
    hospitals: string[];
    malls: string[];
    connectivity: string[];
  };
  
  // FAQs
  faqs: FAQ[];
  
  // Related Links
  relatedLinks: RelatedLink[];
  
  // SEO Keywords
  primaryKeyword: string;
  secondaryKeywords: string[];
}

const iconMap = {
  size: Ruler,
  price: IndianRupee,
  config: Home,
  connectivity: Car,
};

export default function CategoryPageTemplate({
  heroTitle,
  heroSubtitle,
  heroDescription,
  quickFacts,
  layoutTitle,
  layoutDescription,
  layoutFeatures,
  localLandmarks,
  faqs,
  relatedLinks,
  primaryKeyword,
}: CategoryPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <main className="bg-white">
        {/* Hero Section - Lifestyle First */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {heroSubtitle}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                  {heroTitle}
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {heroDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="cta-button-large"
                  >
                    <Phone className="w-5 h-5" />
                    Get Expert Advice
                  </button>
                  <Link
                    href="/projects"
                    className="cta-button-secondary-light"
                  >
                    Browse All Projects
                  </Link>
                </div>
              </div>

              {/* Quick Facts Grid */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-dark mb-4">
                  Quick Facts
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {quickFacts.map((fact, index) => {
                    const Icon = iconMap[fact.icon];
                    return (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                      >
                        <Icon className="w-5 h-5 text-primary mb-2" />
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          {fact.label}
                        </div>
                        <div className="font-semibold text-dark">
                          {fact.value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Breakdown Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                  {layoutTitle}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {layoutDescription}
                </p>
                <ul className="space-y-3">
                  {layoutFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-semibold text-dark mb-4">
                  Why Choose {primaryKeyword}?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-dark">RERA Approved</div>
                      <div className="text-sm text-slate-500">
                        All projects are RERA verified for transparency
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-dark">Prime Location</div>
                      <div className="text-sm text-slate-500">
                        Strategic connectivity to Delhi, IGI Airport, and Cyber City
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IndianRupee className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-dark">High ROI</div>
                      <div className="text-sm text-slate-500">
                        8-12% annual appreciation in property value
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Gems - Local Landmarks */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                Nearby Landmarks &amp; Connectivity
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Live within minutes of top schools, hospitals, and shopping destinations
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Schools */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-dark mb-3">Schools</h3>
                <ul className="space-y-2">
                  {localLandmarks.schools.map((item, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-primary">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hospitals */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <Hospital className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-semibold text-dark mb-3">Hospitals</h3>
                <ul className="space-y-2">
                  {localLandmarks.hospitals.map((item, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-primary">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Malls */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-dark mb-3">Shopping</h3>
                <ul className="space-y-2">
                  {localLandmarks.malls.map((item, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-primary">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connectivity */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-dark mb-3">Connectivity</h3>
                <ul className="space-y-2">
                  {localLandmarks.connectivity.map((item, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-primary">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">
                Everything you need to know about {primaryKeyword}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-dark pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links / Internal Linking */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                Explore More Options
              </h2>
              <p className="text-slate-600">
                Discover related property categories that might interest you
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{link.description}</p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <span>View Properties</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-dark">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Get expert guidance from our property consultants and discover the best options for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Request Callback
              </button>
              <a
                href="tel:+919873702365"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dark font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call +91 9873702365
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Popup Form */}
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
    </>
  );
}
