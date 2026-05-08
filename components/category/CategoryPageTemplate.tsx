"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  ArrowRight,
  Phone,
  CheckCircle,
  Sparkles,
  Shield,
  TrendingUp,
  Clock,
} from "lucide-react";
import PopupForm from "@/components/PopupForm";
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
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  quickFacts: QuickFact[];
  layoutTitle: string;
  layoutDescription: string;
  layoutFeatures: string[];
  localLandmarks: {
    schools: string[];
    hospitals: string[];
    malls: string[];
    connectivity: string[];
  };
  faqs: FAQ[];
  relatedLinks: RelatedLink[];
  primaryKeyword: string;
  secondaryKeywords: string[];
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
  configurationFilter,
}: CategoryPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projects, setProjects] = useState<ApiProject[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
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

        if (configurationFilter && allProjects.length > 0) {
          const filter = configurationFilter.toLowerCase().trim();
          const filtered = allProjects.filter((p) => {
            if (!p.configurations || p.configurations.length === 0) return false;
            return p.configurations.some((c) => c.toLowerCase().includes(filter));
          });
          if (filtered.length > 0) allProjects = filtered;
        }

        allProjects = allProjects.map((p) => enrichProjectData(p));
        setProjects(allProjects.slice(0, 8));
      } catch {
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
        setProjects(fallback.slice(0, 8));
      } finally {
        setLoadingProjects(false);
      }
    }

    fetchProjects();
  }, [configurationFilter]);

  return (
    <>
      <main className="bg-background min-h-screen">
        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1: LIFESTYLE-FIRST HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">
                  {heroSubtitle}
                </span>
              </div>

              {/* H1 with primary keyword */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
                {heroTitle}
              </h1>

              {/* Scannable description — max 3 lines */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <Phone className="w-5 h-5" />
                  Get Expert Advice
                </button>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-card text-foreground font-semibold rounded-xl border border-border hover:border-primary/40 hover:bg-muted/50 transition-all"
                >
                  Browse All Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2: QUICK-FACT TABLE (The Skimmer's Paradise)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16 border-y border-border bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Quick Facts at a Glance
              </h2>
              <p className="text-muted-foreground text-sm">
                Key information for {primaryKeyword}
              </p>
            </div>

            {/* Clean Feature / Details Table */}
            <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider w-1/2">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {quickFacts.map((fact, idx) => {
                    const Icon = iconMap[fact.icon];
                    return (
                      <tr key={idx} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5">
                          <span className="flex items-center gap-3 font-medium text-foreground">
                            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </span>
                            {fact.label}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-lg font-semibold text-primary">
                          {fact.value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: PROJECTS — QUICK-FACTS TABLES PER PROJECT
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {configurationFilter
                    ? `${configurationFilter} Projects on Dwarka Expressway`
                    : "Projects on Dwarka Expressway"}
                </h2>
                <p className="text-muted-foreground">
                  Verified listings with real pricing, RERA details, and expert guidance
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline flex-shrink-0"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Projects Grid */}
            {loadingProjects ? (
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden animate-pulse">
                    <div className="h-48 bg-muted" />
                    <div className="p-5 space-y-3">
                      <div className="h-5 bg-muted rounded w-2/3" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : projects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => {
                  const projectSlug =
                    project.slug ||
                    project.name
                      ?.toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/-+/g, "-")
                      .replace(/^-|-$/g, "");
                  return (
                    <article
                      key={project._id}
                      className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.mainImage || "/assets/img/placeholder-project.webp"}
                          alt={project.alt || project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {project.badge && (
                          <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      {/* Project Header */}
                      <div className="px-5 py-4 border-b border-border">
                        <Link
                          href={`/${projectSlug}`}
                          className="text-lg font-bold text-foreground hover:text-primary transition-colors block mb-1"
                        >
                          {project.name}
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      {/* Quick-Facts Table */}
                      <div className="divide-y divide-border text-sm">
                        <div className="flex justify-between px-5 py-3 hover:bg-muted/30 transition-colors">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Ruler className="w-4 h-4" />
                            Size Range
                          </span>
                          <span className="font-semibold text-foreground">
                            {project.sizeRange || "1,200 – 4,000 sq.ft"}
                          </span>
                        </div>
                        <div className="flex justify-between px-5 py-3 hover:bg-muted/30 transition-colors">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <IndianRupee className="w-4 h-4" />
                            Price Starting
                          </span>
                          <span className="font-semibold text-primary">
                            {project.price ? `₹ ${project.price}` : "On Request"}
                          </span>
                        </div>
                        <div className="flex justify-between px-5 py-3 hover:bg-muted/30 transition-colors">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Home className="w-4 h-4" />
                            Configuration
                          </span>
                          <span className="font-semibold text-foreground">
                            {project.configurations?.length
                              ? project.configurations.join(" / ")
                              : configurationFilter || "2/3/4 BHK"}
                          </span>
                        </div>
                        <div className="flex justify-between px-5 py-3 hover:bg-muted/30 transition-colors">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Car className="w-4 h-4" />
                            Connectivity
                          </span>
                          <span className="font-semibold text-foreground">
                            Airport 15–20 min
                          </span>
                        </div>
                      </div>

                      {/* Footer CTA */}
                      <div className="px-5 py-4 bg-muted/30">
                        <Link
                          href={`/${projectSlug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                        >
                          View Full Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {projectsData.slice(0, 6).map((p) => (
                  <article
                    key={p.slug}
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={p.image || "/assets/img/placeholder-project.webp"}
                        alt={p.alt || p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {p.badge && (
                        <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="px-5 py-4 border-b border-border">
                      <Link
                        href={`/${p.slug}`}
                        className="text-lg font-bold text-foreground hover:text-primary transition-colors block mb-1"
                      >
                        {p.name}
                      </Link>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{p.location}</span>
                      </div>
                    </div>
                    <div className="divide-y divide-border text-sm">
                      <div className="flex justify-between px-5 py-3">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Ruler className="w-4 h-4" />
                          Size Range
                        </span>
                        <span className="font-semibold text-foreground">1,200 – 4,000 sq.ft</span>
                      </div>
                      <div className="flex justify-between px-5 py-3">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <IndianRupee className="w-4 h-4" />
                          Price Starting
                        </span>
                        <span className="font-semibold text-primary">₹ {p.price}</span>
                      </div>
                      <div className="flex justify-between px-5 py-3">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Home className="w-4 h-4" />
                          Configuration
                        </span>
                        <span className="font-semibold text-foreground">{configurationFilter || "2/3/4 BHK"}</span>
                      </div>
                      <div className="flex justify-between px-5 py-3">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Car className="w-4 h-4" />
                          Connectivity
                        </span>
                        <span className="font-semibold text-foreground">Airport 15–20 min</span>
                      </div>
                    </div>
                    <div className="px-5 py-4 bg-muted/30">
                      <Link
                        href={`/${p.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        View Full Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: LAYOUT BREAKDOWN (Educational Content)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Content — 3 cols */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 text-balance">
                  {layoutTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {layoutDescription}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-4">
                  {layoutFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Card — 2 cols */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Why Choose {primaryKeyword}?
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">RERA Approved</div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          All projects verified for transparency and buyer protection
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Prime Location</div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          Direct access to Delhi, IGI Airport in 15 mins, and Cyber City
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Strong ROI</div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          8–12% annual capital appreciation on Dwarka Expressway
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Ready Infrastructure</div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          Expressway fully operational since June 2025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5: HIDDEN GEMS (Hyper-Local Keywords)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Nearby Landmarks &amp; Connectivity
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Live within <strong className="text-foreground">10 minutes</strong> of{" "}
                <strong className="text-foreground">Euro International School</strong> and{" "}
                <strong className="text-foreground">Manipal Hospital</strong> — ensuring your
                family&apos;s needs are met without hitting highway traffic.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Schools */}
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-foreground mb-4">Schools</h3>
                <ul className="space-y-2.5">
                  {localLandmarks.schools.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hospitals */}
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-red-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <Hospital className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-foreground mb-4">Hospitals</h3>
                <ul className="space-y-2.5">
                  {localLandmarks.hospitals.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shopping */}
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-purple-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
                  <ShoppingBag className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-foreground mb-4">Shopping</h3>
                <ul className="space-y-2.5">
                  {localLandmarks.malls.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connectivity */}
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-green-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5">
                  <Car className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-foreground mb-4">Connectivity</h3>
                <ul className="space-y-2.5">
                  {localLandmarks.connectivity.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6: FAQ ACCORDION (Keyword-Rich Toggle)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-muted/30">
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
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === idx ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7: INTERNAL LINKING (Related Pages)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
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
              {relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    View Properties
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8: FINAL CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-background mb-4 text-balance">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Get expert guidance from our property consultants and discover the best options
              for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all"
              >
                <Phone className="w-5 h-5" />
                Request Callback
              </button>
              <a
                href="tel:+919873702365"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-background text-foreground font-semibold rounded-xl hover:bg-muted transition-all"
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
