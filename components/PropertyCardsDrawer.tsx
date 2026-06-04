"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { DEFAULT_PROJECT_IMAGE, makeSlug } from "@/lib/project-data";

interface Property {
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
}

export default function PropertyCardsDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);

  // Fetch properties on first open
  useEffect(() => {
    if (isOpen && properties.length === 0) {
      fetchProperties();
    }
  }, [isOpen]);

  async function fetchProperties() {
    setLoading(true);
    try {
      const res = await fetch("/api/projects?limit=20");
      const data = await res.json();
      if (data.success && data.data?.projects) {
        setProperties(data.data.projects);
      } else if (Array.isArray(data)) {
        setProperties(data);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  // Auto-scroll logic
  const scrollToCard = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container || properties.length === 0) return;
      const cardHeight = container.scrollHeight / properties.length;
      container.scrollTo({ top: index * cardHeight, behavior: "smooth" });
      setActiveIndex(index);
    },
    [properties.length]
  );

  useEffect(() => {
    if (!isOpen || properties.length === 0) return;

    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % properties.length;
          scrollToCard(next);
          return next;
        });
      }
    }, 2800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOpen, properties.length, scrollToCard]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const statusLabel = (p: Property) =>
    p.badge || p.status?.replace(/-/g, " ") || "New Launch";

  const projectUrl = (p: Property) => {
    const slug = p.slug || makeSlug(p.name);
    return `/${slug}`;
  };

  return (
    <>
      {/* ========== FIXED TAB TRIGGER (right edge) ========== */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="View featured properties"
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col items-center justify-center gap-2 
          bg-[#111111] text-white py-6 px-3 rounded-l-2xl shadow-[-4px_0_20px_rgba(0,0,0,0.25)]
          transition-all duration-300 hover:bg-[#f14201] hover:shadow-[-4px_0_24px_rgba(241,66,1,0.4)]
          group cursor-pointer select-none
          ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        {/* Animated property icon */}
        <span className="relative flex items-center justify-center w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#f14201] group-hover:text-white transition-colors">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
          </svg>
        </span>

        {/* Vertical label */}
        <span
          className="text-[10px] font-black uppercase tracking-[0.25em] text-white/80 group-hover:text-white transition-colors"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Properties
        </span>

        {/* Live dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#f14201] group-hover:bg-white animate-pulse" />
      </button>

      {/* ========== BACKDROP ========== */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[95] bg-black/50 backdrop-blur-sm transition-opacity duration-400 
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      {/* ========== DRAWER PANEL ========== */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Featured Properties"
        className={`fixed top-0 right-0 h-full z-[100] w-full sm:w-[400px] bg-[#0d0d0d]
          flex flex-col shadow-[-8px_0_40px_rgba(0,0,0,0.5)]
          transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* --- Header --- */}
        <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-white/10 shrink-0">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f14201] mb-0.5">
              Live Listings
            </p>
            <h2 className="text-xl font-black text-white uppercase leading-none font-heading">
              Featured Properties
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close drawer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#f14201] transition-colors group"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* --- Count badge --- */}
        {properties.length > 0 && (
          <div className="px-6 pt-3 pb-1 shrink-0 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold text-white/50 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f14201] animate-pulse" />
              {properties.length} Projects on Dwarka Expressway
            </span>
          </div>
        )}

        {/* --- Scrollable Cards --- */}
        <div
          ref={scrollRef}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent" }}
        >
          {loading && (
            <div className="flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="animate-pulse bg-white/5 rounded-xl h-28" />
              ))}
            </div>
          )}

          {!loading && properties.map((property, idx) => (
            <PropertySlideCard
              key={property._id}
              property={property}
              isActive={activeIndex === idx}
              index={idx}
              projectUrl={projectUrl(property)}
              statusLabel={statusLabel(property)}
              onHover={() => setActiveIndex(idx)}
            />
          ))}

          {!loading && properties.length === 0 && (
            <div className="text-center py-20 text-white/30 text-sm">
              No properties available.
            </div>
          )}
        </div>

        {/* --- Footer CTA --- */}
        <div className="px-4 pb-6 pt-3 shrink-0 border-t border-white/10">
          <Link
            href="/#residential-project"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#f14201] hover:bg-[#d63801] text-white font-black uppercase tracking-[0.15em] text-xs py-3.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(241,66,1,0.3)] hover:shadow-[0_6px_24px_rgba(241,66,1,0.45)] active:scale-[0.98]"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </aside>

      {/* ========== KEYFRAMES ========== */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes card-enter {
          from { opacity: 0; transform: translateX(24px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .card-enter { animation: card-enter 0.4s ease-out forwards; }
      ` }} />
    </>
  );
}

// ============================
// Individual animated card
// ============================
interface CardProps {
  property: Property;
  isActive: boolean;
  index: number;
  projectUrl: string;
  statusLabel: string;
  onHover: () => void;
}

function PropertySlideCard({ property, isActive, index, projectUrl, statusLabel, onHover }: CardProps) {
  const imageUrl = property.mainImage || DEFAULT_PROJECT_IMAGE;

  return (
    <Link
      href={projectUrl}
      onMouseEnter={onHover}
      className={`group relative flex gap-3 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer border
        ${isActive
          ? "border-[#f14201] bg-white/8 shadow-[0_0_20px_rgba(241,66,1,0.15)]"
          : "border-white/8 bg-white/4 hover:border-[#f14201]/50 hover:bg-white/7"
        }
        card-enter
      `}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-l-xl">
        <Image
          src={imageUrl}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="96px"
        />
        <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? "opacity-0" : "bg-black/30 opacity-100"}`} />
        {/* Active indicator line */}
        {isActive && (
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#f14201]" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center py-3 pr-3 flex-1 min-w-0">
        {/* Status */}
        <span className={`inline-block text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full mb-1.5 w-fit
          ${isActive ? "bg-[#f14201] text-white" : "bg-white/10 text-white/50"} transition-colors duration-300`}
        >
          {statusLabel}
        </span>

        <h3 className="text-sm font-bold text-white leading-tight truncate group-hover:text-[#f14201] transition-colors duration-300 font-heading">
          {property.name}
        </h3>

        <p className="text-[11px] text-white/40 flex items-center gap-1 mt-0.5 truncate">
          <svg className="w-2.5 h-2.5 shrink-0 text-white/30" fill="currentColor" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          {property.sector || property.location}
        </p>

        <p className="text-sm font-black text-[#f14201] mt-1.5 leading-none">
          {property.price.startsWith("₹") ? property.price : `₹ ${property.price}`}
          <span className="text-[9px] text-white/30 font-normal ml-0.5">onwards</span>
        </p>
      </div>

      {/* Arrow hint */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="w-3.5 h-3.5 text-[#f14201]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
