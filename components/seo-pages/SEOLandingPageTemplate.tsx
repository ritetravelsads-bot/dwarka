"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, MapPin, Building, IndianRupee, ArrowRight, CheckCircle2 } from "lucide-react";
import ContactSection from "@/components/home/ContactSection";

export interface QuickFact {
  label: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  type: "school" | "hospital" | "mall" | "metro" | "airport" | "highway";
}

export interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

export interface SEOPageContent {
  // Hero Section
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  
  // Quick Facts
  quickFacts: QuickFact[];
  
  // Layout Breakdown
  layoutTitle: string;
  layoutContent: string[];
  layoutHighlights?: string[];
  
  // Hidden Gems / Local Info
  localAreaTitle: string;
  localAreaDescription: string;
  nearbyPlaces: NearbyPlace[];
  
  // FAQs
  faqs: FAQ[];
  
  // Internal Linking
  relatedLinks: RelatedLink[];
  
  // CTA
  ctaTitle?: string;
  ctaDescription?: string;
}

interface SEOLandingPageTemplateProps {
  content: SEOPageContent;
  primaryKeyword: string;
}

export default function SEOLandingPageTemplate({ content, primaryKeyword }: SEOLandingPageTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getPlaceIcon = (type: NearbyPlace["type"]) => {
    switch (type) {
      case "school":
        return "🎓";
      case "hospital":
        return "🏥";
      case "mall":
        return "🛒";
      case "metro":
        return "🚇";
      case "airport":
        return "✈️";
      case "highway":
        return "🛣️";
      default:
        return "📍";
    }
  };

  return (
    <main>
      {/* Hero Section - Lifestyle-First */}
      <section className="relative bg-gradient-to-br from-dark to-gray-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/assets/img/pattern-grid.png')] opacity-5" />
        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {content.heroTagline}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              {content.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="#projects"
                className="cta-button-large inline-flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="cta-button-secondary-light bg-white/10 border-white/20 text-white hover:bg-white/20 inline-flex items-center gap-2"
              >
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
            Quick Facts: <span className="text-primary">{primaryKeyword}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {content.quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-lightGrey rounded-xl p-5 md:p-6 text-center border border-transparent hover:border-primary/20 transition-colors"
              >
                <div className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {fact.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layout Breakdown - Educational Content */}
      <section className="py-12 md:py-16 bg-lightGrey">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">
              {content.layoutTitle}
            </h2>
            <div className="space-y-4">
              {content.layoutContent.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {content.layoutHighlights && content.layoutHighlights.length > 0 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.layoutHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 border border-borderGrey"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects CTA Section */}
      <section id="projects" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="bg-dark rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Explore {primaryKeyword}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Browse our curated selection of verified properties with transparent pricing, 
              floor plans, and direct developer contacts.
            </p>
            <Link
              href="/projects"
              className="cta-button-large inline-flex items-center gap-2"
            >
              View All Projects <Building className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hidden Gems - Hyper-Local Section */}
      <section className="py-12 md:py-16 bg-lightGrey">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-dark">
                {content.localAreaTitle}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              {content.localAreaDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-borderGrey flex items-center gap-3 hover:border-primary/20 transition-colors"
                >
                  <span className="text-2xl">{getPlaceIcon(place.type)}</span>
                  <div>
                    <div className="font-medium text-dark text-sm">{place.name}</div>
                    <div className="text-xs text-gray-500">{place.distance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {content.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-lightGrey rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-dark pr-4">
                      {faq.question}
                    </span>
                    <span className="text-primary flex-shrink-0">
                      {openFaqIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openFaqIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-12 md:py-16 bg-lightGrey">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
              Related Searches
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.relatedLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group bg-white rounded-lg p-5 border border-borderGrey hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className="text-sm text-gray-500">{link.description}</p>
                  )}
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
