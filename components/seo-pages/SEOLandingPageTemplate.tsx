"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, MapPin, Building, ArrowRight, CheckCircle2, Plane, Shield, Route, GraduationCap, Hospital, Train } from "lucide-react";
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

export interface TrustIndicator {
  icon: "route" | "plane" | "shield";
  value: string;
  label: string;
}

export interface ProjectCard {
  name: string;
  location: string;
  status: "Ready to Move" | "Under Construction" | "New Launch";
  statusColor: "green" | "blue" | "red";
  headerColor: "primary" | "dark" | "amber";
  configuration: string;
  sizeRange: string;
  startingPrice: string;
  connectivity: string;
  href?: string;
}

export interface LocalFeature {
  icon: "school" | "hospital" | "connectivity";
  title: string;
  description: string;
}

export interface SEOPageContent {
  // Hero Section
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  trustIndicators?: TrustIndicator[];
  
  // Quick Facts
  quickFacts: QuickFact[];
  
  // Project Cards (optional - for comparison)
  projectCards?: ProjectCard[];
  projectsSectionTitle?: string;
  projectsSectionSubtitle?: string;
  
  // Layout Breakdown
  layoutTitle: string;
  layoutContent: string[];
  layoutHighlights?: string[];
  layoutImage?: string;
  
  // Local Features (enhanced Hidden Gems)
  localFeatures?: LocalFeature[];
  
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
        return <GraduationCap className="w-5 h-5 text-primary" />;
      case "hospital":
        return <Hospital className="w-5 h-5 text-red-500" />;
      case "mall":
        return <Building className="w-5 h-5 text-amber-500" />;
      case "metro":
        return <Train className="w-5 h-5 text-blue-500" />;
      case "airport":
        return <Plane className="w-5 h-5 text-primary" />;
      case "highway":
        return <Route className="w-5 h-5 text-green-500" />;
      default:
        return <MapPin className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTrustIcon = (icon: TrustIndicator["icon"]) => {
    switch (icon) {
      case "route":
        return <Route className="w-6 h-6 text-primary" />;
      case "plane":
        return <Plane className="w-6 h-6 text-primary" />;
      case "shield":
        return <Shield className="w-6 h-6 text-primary" />;
      default:
        return <MapPin className="w-6 h-6 text-primary" />;
    }
  };

  const getLocalFeatureIcon = (icon: LocalFeature["icon"]) => {
    switch (icon) {
      case "school":
        return <GraduationCap className="w-7 h-7" />;
      case "hospital":
        return <Hospital className="w-7 h-7" />;
      case "connectivity":
        return <Train className="w-7 h-7" />;
      default:
        return <MapPin className="w-7 h-7" />;
    }
  };

  const getStatusBgColor = (color: ProjectCard["statusColor"]) => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "blue":
        return "bg-blue-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getHeaderBgColor = (color: ProjectCard["headerColor"]) => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "dark":
        return "bg-dark";
      case "amber":
        return "bg-amber-600";
      default:
        return "bg-primary";
    }
  };

  // Limit highlights to 4 items
  const displayHighlights = content.layoutHighlights?.slice(0, 4) || [];

  return (
    <main>
      {/* Hero Section - Lifestyle-First */}
      <section className="relative bg-gradient-to-br from-dark to-gray-900 text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${content.heroImage || "/assets/img/hero-bg.jpg"}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/40" />
        
        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <div className="max-w-3xl">
            {/* Benefit Driven Subheadline */}
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm uppercase">
              {content.heroTagline}
            </span>
            
            {/* SEO Optimized H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">
              {content.heroTitle.split(" ").map((word, i) => {
                // Highlight keywords like "Luxury", "Premium", numbers like "3BHK"
                const isHighlight = /^(luxury|premium|3bhk|4bhk|2bhk|ready|move)/i.test(word);
                return isHighlight ? (
                  <span key={i} className="text-primary">{word} </span>
                ) : (
                  <span key={i}>{word} </span>
                );
              })}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
              {content.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="cta-button-large inline-flex items-center justify-center gap-2"
              >
                Explore Floor Plans <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-center px-6 py-3 rounded font-medium transition-all inline-flex items-center justify-center gap-2"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators Bar */}
        {content.trustIndicators && content.trustIndicators.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-4 hidden md:block">
            <div className="container mx-auto px-4 md:px-10">
              <div className="flex justify-around items-center">
                {content.trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    {getTrustIcon(indicator.icon)}
                    <div>
                      <p className="font-bold">{indicator.value}</p>
                      <p className="text-xs text-gray-300 uppercase">{indicator.label}</p>
                    </div>
                    {index < content.trustIndicators!.length - 1 && (
                      <div className="h-8 w-px bg-white/30 ml-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Quick Benefits Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
            Quick Benefits: <span className="text-primary">{primaryKeyword}</span>
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

      {/* Project Comparison Cards - Interactive Quick-Fact Grid */}
      {content.projectCards && content.projectCards.length > 0 && (
        <section id="projects" className="py-12 md:py-16 bg-lightGrey">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                {content.projectsSectionTitle || "Premium Projects at a Glance"}
              </h2>
              <p className="text-gray-600">
                {content.projectsSectionSubtitle || `Compare the top ready-to-move and under-construction ${primaryKeyword}. Find the perfect fit for your budget and lifestyle.`}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
              {content.projectCards.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-borderGrey overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Card Header */}
                  <div className={`${getHeaderBgColor(project.headerColor)} p-2.5 md:p-5 relative`}>
                    <div className={`absolute top-2 right-2 md:top-4 md:right-4 z-10 ${getStatusBgColor(project.statusColor)} text-white text-[9px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded shadow-sm`}>
                      {project.status}
                    </div>
                    <h3 className="text-xs md:text-xl font-bold text-white mb-0.5 md:mb-1 pr-14 md:pr-20 line-clamp-1">{project.name}</h3>
                    <p className="text-[10px] md:text-sm text-white/80 flex items-center gap-1 md:gap-2">
                      <MapPin className="w-2.5 h-2.5 md:w-4 md:h-4 flex-shrink-0" /> 
                      <span className="line-clamp-1">{project.location}</span>
                    </p>
                  </div>
                  
                  {/* Mobile: Compact List View */}
                  <div className="block md:hidden p-2.5 space-y-1.5 text-[10px]">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Config</span>
                      <span className="text-dark font-semibold">{project.configuration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Size</span>
                      <span className="text-dark">{project.sizeRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Price</span>
                      <span className="text-primary font-bold">{project.startingPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Access</span>
                      <span className="text-dark line-clamp-1 max-w-[60%] text-right">{project.connectivity}</span>
                    </div>
                  </div>
                  
                  {/* Desktop: Data Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-borderGrey text-gray-500 uppercase text-xs tracking-wider">
                          <th className="p-4 font-semibold w-2/5">Feature</th>
                          <th className="p-4 font-semibold w-3/5">Details</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-gray-100 hover:bg-primary/5 transition-colors">
                          <td className="p-4 text-gray-600 font-medium">Configuration</td>
                          <td className="p-4 text-dark font-bold">{project.configuration}</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-primary/5 transition-colors">
                          <td className="p-4 text-gray-600 font-medium">Size Range</td>
                          <td className="p-4 text-dark">{project.sizeRange}</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-primary/5 transition-colors">
                          <td className="p-4 text-gray-600 font-medium">Starting Price</td>
                          <td className="p-4 text-primary font-bold text-base">{project.startingPrice}</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50/50 hover:bg-primary/5 transition-colors">
                          <td className="p-4 text-gray-600 font-medium">Connectivity</td>
                          <td className="p-4 text-dark">{project.connectivity}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="p-2 md:p-4 bg-white border-t border-gray-100 flex justify-center md:justify-end">
                    <Link
                      href={project.href || "/projects"}
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1.5 md:px-5 md:py-2 rounded-md md:rounded-lg font-medium text-[10px] md:text-sm transition-colors w-full md:w-auto text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Internal Link Suggestion */}
            <div className="mt-10 text-center bg-primary/5 rounded-xl p-6 border border-primary/10">
              <p className="text-gray-700 font-medium">
                Looking for more options?{" "}
                <Link href="/projects" className="text-primary hover:underline font-bold">
                  Explore all projects on Dwarka Expressway here.
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Layout Breakdown - Educational Content (Why Choose Section) */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 min-h-[500px]">
            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Why Choose This Corridor?
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 leading-tight">
                {content.layoutTitle}
              </h2>
              
              <div className="space-y-4">
                {content.layoutContent.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {displayHighlights.length > 0 && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {displayHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-lightGrey rounded-lg p-4 border border-borderGrey"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Image Section - Full Height */}
            <div className="w-full lg:w-1/2 flex">
              <div className="w-full bg-white p-2 rounded-2xl shadow-xl border border-borderGrey relative group flex-1">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-2 -z-10 transition-transform group-hover:rotate-3" />
                <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-xl overflow-hidden bg-lightGrey">
                  <Image 
                    src={content.layoutImage || "/assets/img/3bhk-building.jpg"} 
                    alt={`${primaryKeyword} Building`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
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
                  <span className="w-10 h-10 rounded-lg bg-lightGrey flex items-center justify-center shadow-sm">
                    {getPlaceIcon(place.type)}
                  </span>
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

      {/* Projects CTA Section (if no project cards) */}
      {!content.projectCards && (
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
      )}

      {/* FAQ Section with Accordions */}
      <section className="py-12 md:py-16 bg-white border-t border-borderGrey">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Everything you need to know about investing in this corridor.
            </p>
            
            <div className="space-y-3">
              {content.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-lightGrey border border-borderGrey rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-100 transition-colors"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="font-bold text-dark pr-4 text-base">
                      {faq.question}
                    </span>
                    <span className="text-primary flex-shrink-0 transition-transform duration-300" style={{
                      transform: openFaqIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                    }}>
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
                      <div className="w-full h-px bg-borderGrey mx-6" style={{ width: "calc(100% - 3rem)" }} />
                      <div className="px-6 py-4 text-gray-600 leading-relaxed">
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

      {/* Internal Linking Section - Related Searches */}
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

      {/* Life Beyond the Gates - Local Features (Moved to after Related Searches) */}
      {content.localFeatures && content.localFeatures.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                Life Beyond the Gates
              </h2>
              <p className="text-gray-600">
                Discover the hyper-local infrastructure that makes living on the Expressway incredibly convenient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.localFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-lightGrey p-8 rounded-2xl hover:shadow-lg transition-shadow border border-borderGrey"
                >
                  <div className={`w-14 h-14 rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6 ${
                    feature.icon === "school" ? "bg-primary/10 text-primary" :
                    feature.icon === "hospital" ? "bg-red-50 text-red-500" :
                    "bg-amber-50 text-amber-600"
                  }`}>
                    {getLocalFeatureIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Internal link to blog */}
            <div className="mt-10 text-center">
              <Link 
                href="/blogs" 
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-colors group"
              >
                Read our blog: Top Projects for 2026
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
