"use client";

import { useState, useEffect } from "react";
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
  LayoutGrid,
} from "lucide-react";
import PopupForm from "@/components/PopupForm";
import ProjectCard from "@/components/ProjectCard";
import { projectsData, enrichProjectData } from "@/lib/project-data";

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

  // Quick Facts (table format)
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

  // Configuration filter for matching projects (e.g. "2 BHK", "3 BHK", "4 BHK")
  configurationFilter?: string;
}

interface ApiProject {
  _id: string;
  name: string;
  slug?: string;
  location: string;
  sector?: string;
  price: string;
  mainImage?: string;
  badge?: string;
  status?: string;
  type?: string;
  configurations?: string[];
  developer?: string;
  occupancy?: number;
  alt?: string;
  sizeRange?: string;
}

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
  configurationFilter,
}: CategoryPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projects, setProjects] = useState<ApiProject[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  // Map label → icon
  const iconMap = {
    size: Ruler,
    price: IndianRupee,
    config: Home,
    connectivity: Car,
  };

  // Fetch and filter projects by configuration
  useEffect(() => {
    async function fetchProjects() {
      try {
        // Pass configuration as query param to let the backend filter too
        const params = new URLSearchParams({ limit: "50" });
        if (configurationFilter) {
          params.set("configuration", configurationFilter);
        }
        const res = await fetch(`/api/projects?${params.toString()}`);
        const json = await res.json();
        let allProjects: ApiProject[] = [];

        if (json?.data?.projects) {
          allProjects = json.data.projects;
        } else if (Array.isArray(json)) {
          allProjects = json;
        }

        // Client-side safety filter: if configurationFilter is set and backend
        // did not filter, do it here so results are always correct
        if (configurationFilter && allProjects.length > 0) {
          const filter = configurationFilter.toLowerCase().trim();
          const filtered = allProjects.filter((p) => {
            if (!p.configurations || p.configurations.length === 0) return false;
            return p.configurations.some((c) =>
              c.toLowerCase().includes(filter)
            );
          });
          // Only apply client filter if it actually narrows results;
          // if backend already filtered (returns only matching), keep as-is
          if (filtered.length > 0) allProjects = filtered;
        }

        // Enrich with local data (images, occupancy)
        allProjects = allProjects.map((p) => enrichProjectData(p));

        setProjects(allProjects.slice(0, 9));
      } catch {
        // Fallback: use local static data
        const fallback = projectsData.map((p) => ({
          _id: p.slug,
          name: p.name,
          slug: p.slug,
          location: p.location,
          sector: p.sector,
          price: p.price,
          mainImage: p.image,
          badge: p.badge,
          occupancy: p.occupancy,
          alt: p.alt,
          configurations: [] as string[],
        }));
        setProjects(fallback.slice(0, 9));
      } finally {
        setLoadingProjects(false);
      }
    }

    fetchProjects();
  }, [configurationFilter]);

  return (
    <>
      <main className="bg-background">
        {/* ─── 1. LIFESTYLE-FIRST HERO ─────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--muted))] pt-28 pb-12 md:pt-32 md:pb-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Copy */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 tracking-wide">
                  {heroSubtitle}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5 text-balance">
                  {heroTitle}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
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
                  <Link href="/projects" className="cta-button-secondary-light">
                    Browse All Projects
                  </Link>
                </div>
              </div>

              {/* ─── 2. QUICK-FACT TABLE ─────────────────────────────────────── */}
              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-border bg-muted/40">
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Quick Facts at a Glance
                  </h2>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-3 text-left font-semibold text-foreground w-1/2">
                        Feature
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {quickFacts.map((fact, idx) => {
                      const Icon = iconMap[fact.icon];
                      return (
                        <tr
                          key={idx}
                          className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <span className="flex items-center gap-2 font-medium text-foreground">
                              <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                              {fact.label}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-semibold text-primary">
                            {fact.value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MATCHING PROJECTS ────────────────────────────────────────────── */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {configurationFilter
                    ? `${configurationFilter} Projects on Dwarka Expressway`
                    : `Projects on Dwarka Expressway`}
                </h2>
                <p className="text-muted-foreground">
                  Verified listings with real pricing, RERA details, and expert guidance
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline flex-shrink-0"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {loadingProjects ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-card rounded-2xl border border-border overflow-hidden animate-pulse"
                  >
                    <div className="h-56 bg-muted" />
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-4 bg-muted rounded w-1/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : projects.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
            ) : (
              // Fallback: show static local data cards
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.slice(0, 6).map((p) => (
                  <ProjectCard
                    key={p.slug}
                    project={{
                      _id: p.slug,
                      name: p.name,
                      slug: p.slug,
                      location: p.location,
                      sector: p.sector,
                      price: p.price,
                      mainImage: p.image,
                      badge: p.badge,
                      occupancy: p.occupancy,
                      alt: p.alt,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ─── 3. LAYOUT BREAKDOWN ─────────────────────────────────────────── */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                  {layoutTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {layoutDescription}
                </p>
                <ul className="space-y-3">
                  {layoutFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-5 flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5 text-primary" />
                  Why Choose {primaryKeyword}?
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">RERA Approved</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        All projects verified for full transparency and buyer protection
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Prime Location</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Direct access to Delhi, IGI Airport in 15 mins, and Cyber City
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IndianRupee className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Strong ROI</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        8–12% annual capital appreciation on Dwarka Expressway corridor
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. HIDDEN GEMS — HYPER-LOCAL KEYWORDS ───────────────────────── */}
        <section className="py-16 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Nearby Landmarks &amp; Connectivity
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Live within <strong>10 minutes</strong> of{" "}
                <strong>Euro International School</strong> and{" "}
                <strong>Manipal Hospital</strong> — ensuring your family&apos;s needs
                are met without hitting the highway traffic.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Schools */}
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Schools</h3>
                <ul className="space-y-2">
                  {localLandmarks.schools.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary font-bold leading-5">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hospitals */}
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <Hospital className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Hospitals</h3>
                <ul className="space-y-2">
                  {localLandmarks.hospitals.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary font-bold leading-5">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Malls */}
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Shopping</h3>
                <ul className="space-y-2">
                  {localLandmarks.malls.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary font-bold leading-5">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connectivity */}
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Connectivity</h3>
                <ul className="space-y-2">
                  {localLandmarks.connectivity.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary font-bold leading-5">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. FAQ ACCORDION ────────────────────────────────────────────── */}
        <section className="py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about {primaryKeyword}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-muted/30 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed bg-card">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. INTERNAL LINKING ─────────────────────────────────────────── */}
        <section className="py-16 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Explore More Options
              </h2>
              <p className="text-muted-foreground">
                Discover related property categories that might interest you
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <span>View Properties</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-dark">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Get expert guidance from our property consultants and discover the
              best options for your needs.
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

      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
    </>
  );
}
