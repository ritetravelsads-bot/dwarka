"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import EmiCalculator from "@/components/EmiCalculator";
import { getProjectBySlug, getProjectByName, DEFAULT_PROJECT_IMAGE } from "@/lib/project-data";

interface FloorPlan {
  title: string;
  size: string;
  price: string;
  image?: string;
}

interface GalleryImage {
  url: string;
  alt?: string;
}

interface Project {
  _id: string;
  name: string;
  slug?: string;
  status: string;
  type: string;
  developer: string;
  location: string;
  sector?: string;
  price: string;
  pricePerSqFt?: string;
  size?: string;
  sizeRange?: string;
  landSize?: string;
  configurations?: string[];
  rera?: string;
  possession?: string;
  description?: string;
  shortDescription?: string;
  highlights?: string[];
  amenities?: string[];
  floorPlan?: FloorPlan[];
  gallery?: (string | GalleryImage)[];
  mainImage?: string;
  logo?: string;
  brochure?: string;
  masterPlan?: string;
  locationMap?: string;
  videoUrl?: string;
  hero?: {
    image?: string;
    heading?: string;
    subText?: string;
    possession?: string;
  };
  about?: {
    title?: string;
    content?: string;
    image?: string;
  };
  city?: string;
  state?: string;
  pincode?: string;
}

interface RelatedProject {
  _id: string;
  name: string;
  slug?: string;
  location: string;
  sector?: string;
  price: string;
  mainImage?: string;
  status?: string;
  developer?: string;
  badge?: string;
  occupancy?: number;
}

interface Props {
  project: Project;
  relatedProjects: RelatedProject[];
}

export default function ProjectDetailClient({ project, relatedProjects }: Props) {
  const [isEmiOpen, setIsEmiOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  // Enrich project data with local data for correct images (p-X.webp format from PHP)
  const localData = project.slug 
    ? getProjectBySlug(project.slug) 
    : getProjectByName(project.name);

  // Use local image if API image is missing or is a placeholder
  const enrichedMainImage = localData?.image || project.mainImage || DEFAULT_PROJECT_IMAGE;
  const enrichedAlt = localData?.alt || project.name;

  // Process gallery images
  const galleryImages: { url: string; alt: string }[] = [];
  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach((img, idx) => {
      if (typeof img === 'string') {
        galleryImages.push({ url: img, alt: `${project.name} - Image ${idx + 1}` });
      } else if (img && typeof img === 'object' && img.url) {
        galleryImages.push({ url: img.url, alt: img.alt || `${project.name} - Image ${idx + 1}` });
      }
    });
  } else if (enrichedMainImage) {
    // Use enriched main image as fallback gallery image
    galleryImages.push({ url: enrichedMainImage, alt: enrichedAlt });
  }

  const heroImage = project.hero?.image || enrichedMainImage;

  const defaultAmenities = [
    { icon: "fa-person-swimming", name: "Swimming Pool" },
    { icon: "fa-dumbbell", name: "Gymnasium" },
    { icon: "fa-tree-city", name: "Landscaped Gardens" },
    { icon: "fa-child-reaching", name: "Kids Play Area" },
    { icon: "fa-square-parking", name: "Covered Parking" },
    { icon: "fa-shield-halved", name: "24/7 Security" },
    { icon: "fa-martini-glass", name: "Club House" },
    { icon: "fa-person-running", name: "Jogging Track" },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[rgba(241,66,1,0.05)]">
      {/* HERO SECTION */}
      <section className="relative w-full h-[750px] md:h-[650px] overflow-hidden bg-black pt-12">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={project.name}
            fill
            className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105"
            style={{ animation: "slowZoom 20s infinite alternate linear" }}
            priority
          />
        ) : (
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--dark) 0%, var(--dark-secondary) 100%)" }}></div>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 -mt-20">
          <span className="px-4 py-1 rounded-full text-xs font-bold tracking-[0.4em] uppercase mb-4 border border-primary text-white bg-black/40 backdrop-blur-sm">
            Premium Real Estate
          </span>
          <span className="px-4 py-1 rounded-full text-xs font-bold tracking-[0.4em] uppercase mb-4 border border-primary text-white bg-black/40 backdrop-blur-sm">
            Rera Approved
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight font-heading">
            {project.hero?.heading || project.name}
          </h1>

          <div className="w-24 h-1 mb-6 bg-primary"></div>

          <p className="text-lg md:text-2xl max-w-2xl font-light leading-relaxed text-lightGrey">
            {project.hero?.subText || project.shortDescription || "Experience the pinnacle of luxury living."}
          </p>

          <div className="flex flex-col md:flex-row gap-4 my-2">
            <button
              onClick={() => document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-lg bg-primary text-white rounded"
            >
              Schedule a Site Visit
            </button>
            <button
              onClick={() => setIsEmiOpen(true)}
              className="px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-black border border-white text-white bg-transparent rounded"
            >
              Emi Calculator
            </button>
          </div>
        </div>

        {/* Info Bar at Bottom */}
        <div className="absolute md:bottom-8 bottom-5 left-0 right-0 z-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border overflow-hidden shadow-2xl bg-dark border-white/10">
              <div className="py-6 border-r border-b md:border-b-0 border-white/10 text-center group hover:bg-black/40 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-1 text-primary">Land Area</p>
                <p className="text-xl font-bold text-white uppercase">{project.landSize || project.size || "N/A"}</p>
              </div>
              <div className="py-6 border-r border-b md:border-b-0 border-white/10 text-center group hover:bg-black/40 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-1 text-primary">Possession</p>
                <p className="text-xl font-bold text-white uppercase">{project.hero?.possession || project.possession || "N/A"}</p>
              </div>
              <div className="py-6 border-r border-white/10 text-center group hover:bg-black/40 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-1 text-primary">Starting Price</p>
                <p className="text-xl font-bold text-white uppercase">{project.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* ABOUT + CONFIGURATIONS SECTION */}
        {(project.about?.content || project.description || (project.configurations && project.configurations.length > 0)) && (
          <section className="my-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs uppercase tracking-[0.35em] font-bold text-primary">About the Project</span>
              <div className="flex-1 h-px bg-primary/20"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10">

              {/* ── Left: Image panel ── */}
              <div className="relative lg:col-span-2 min-h-[300px] lg:min-h-[600px]">
                {(project.about?.image || enrichedMainImage) ? (
                  <>
                    <Image
                      src={project.about?.image || enrichedMainImage}
                      alt={`${project.name} — Project Overview`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest mb-2">
                        {project.status?.replace(/-/g, " ") || "Premium Project"}
                      </span>
                      <p className="text-white font-bold text-lg leading-tight">{project.name}</p>
                      <p className="text-white/60 text-sm mt-0.5">
                        {project.sector && `${project.sector}, `}{project.location}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-dark">
                    <i className="fa-solid fa-building text-white/10 text-6xl" />
                  </div>
                )}
              </div>

              {/* ── Right: Content panel ── */}
              <div className="lg:col-span-3 bg-dark flex flex-col divide-y divide-white/10">

                {/* About text */}
                {(project.about?.content || project.description) && (
                  <div className="p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight font-heading">
                      {project.about?.title || `About ${project.name}`}
                    </h2>
                    <div className="w-10 h-1 bg-primary mb-5" />

                    {/* Clamped text with read more */}
                    <div className="relative">
                      <p
                        className="text-sm leading-relaxed text-lightGrey/75"
                        style={
                          !aboutExpanded
                            ? {
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }
                            : undefined
                        }
                      >
                        {project.about?.content || project.description}
                      </p>
                      {!aboutExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
                      )}
                    </div>
                    <button
                      onClick={() => setAboutExpanded((v) => !v)}
                      className="mt-3 flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
                    >
                      {aboutExpanded ? (
                        <>Show Less <i className="fa-solid fa-chevron-up text-[9px]" /></>
                      ) : (
                        <>Read More <i className="fa-solid fa-chevron-down text-[9px]" /></>
                      )}
                    </button>
                  </div>
                )}

                {/* Configurations table */}
                {project.configurations && project.configurations.length > 0 && (
                  <div className="flex flex-col flex-1">
                    {/* Table header */}
                    <div className="grid grid-cols-4 bg-primary/10 border-b border-white/10 px-6 py-3">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary">BHK Type</span>
                      <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary text-center">Super Area</span>
                      <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary text-center">Starting Price</span>
                      <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary text-right">Payment Plan</span>
                    </div>

                    {/* Table rows */}
                    <div className="divide-y divide-white/[0.07]">
                      {project.configurations.map((config, idx) => {
                        // Try to match a floorPlan entry to this config for richer data
                        const matched = project.floorPlan?.find((fp) =>
                          fp.title?.toLowerCase().includes(config.toLowerCase()) ||
                          config.toLowerCase().includes(fp.title?.toLowerCase())
                        );
                        const superArea = matched?.size || project.sizeRange || project.size || "On Request";
                        const startingPrice = matched?.price || project.price || "On Request";

                        return (
                          <div
                            key={idx}
                            className="grid grid-cols-4 items-center px-6 py-4 hover:bg-white/[0.03] transition-colors group cursor-pointer"
                            onClick={() =>
                              document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            {/* BHK */}
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                                <i className="fa-solid fa-bed text-primary group-hover:text-white text-[10px] transition-colors" />
                              </div>
                              <span className="text-white font-bold text-sm group-hover:text-primary transition-colors">
                                {config}
                              </span>
                            </div>

                            {/* Super Area */}
                            <div className="text-center">
                              <span className="text-white/80 text-sm font-medium">{superArea}</span>
                            </div>

                            {/* Starting Price */}
                            <div className="text-center">
                              <span className="text-primary font-bold text-sm">{startingPrice}</span>
                            </div>

                            {/* Payment Plan */}
                            <div className="text-right">
                              <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide bg-white/5 border border-white/10 text-white/60 group-hover:border-primary/40 group-hover:text-primary transition-colors">
                                Flexible
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Table footer CTA */}
                    <div className="mt-auto px-6 py-5 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <p className="text-white/50 text-xs">
                        * Prices are indicative. Contact us for exact pricing &amp; payment schedules.
                      </p>
                      <button
                        onClick={() =>
                          document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="flex-shrink-0 px-6 py-2.5 bg-primary text-white font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity"
                      >
                        Get Full Price Sheet
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom CTAs */}
                <div className="p-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-7 py-3 font-bold uppercase text-xs tracking-widest transition-all hover:opacity-90 bg-primary text-white"
                  >
                    Get Best Quote
                  </button>
                  <button
                    onClick={() => document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-7 py-3 font-bold uppercase text-xs tracking-widest border border-white/20 hover:border-primary hover:text-primary text-white transition-all"
                  >
                    Schedule Site Visit
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* AMENITIES SECTION */}
        <section className="max-w-6xl mx-auto px-4 mb-16 py-12 rounded-2xl shadow-lg border bg-dark border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase tracking-tight text-primary font-heading">
            <span className="text-white">Premium</span> Amenities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(project.amenities && project.amenities.length > 0 ? 
              project.amenities.slice(0, 8).map((amenity, idx) => ({
                icon: defaultAmenities[idx % defaultAmenities.length].icon,
                name: amenity
              })) : 
              defaultAmenities
            ).map((amenity, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors">
                  <i className={`fa-solid ${amenity.icon} text-2xl`}></i>
                </div>
                <h3 className="text-white font-medium text-sm">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY SECTION */}
        {galleryImages.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center uppercase tracking-tight text-dark font-heading">
              Project <span className="text-primary">Gallery</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.slice(0, 8).map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(idx)}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <i className="fa-solid fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FLOOR PLANS SECTION */}
        {project.floorPlan && project.floorPlan.length > 0 && (
          <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center uppercase tracking-tight text-dark font-heading">
              Floor <span className="text-primary">Plans</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.floorPlan.map((plan, idx) => (
                <div key={idx} className="border border-borderGrey rounded-xl p-6 hover:shadow-lg transition-shadow">
                  {plan.image && (
                    <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                      <Image src={plan.image} alt={plan.title} fill className="object-contain" />
                    </div>
                  )}
                  <h4 className="font-semibold text-dark mb-2">{plan.title}</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Size: {plan.size}</span>
                    <span className="text-primary font-semibold">{plan.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LOCATION SECTION */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center uppercase tracking-tight text-dark font-heading">
            <span className="text-primary">Location</span> Map
          </h2>
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
            {project.locationMap ? (
              <Image
                src={project.locationMap}
                alt="Location Map"
                fill
                className="object-cover"
              />
            ) : (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                  (project.sector || project.location) + ", Gurgaon, Dwarka Expressway"
                )}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
          <div className="mt-4 p-4 bg-lightGrey rounded-xl">
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot text-primary mt-1"></i>
              <div>
                <p className="font-medium text-dark">{project.name}</p>
                <p className="text-gray-600">
                  {project.sector && `${project.sector}, `}{project.location}, Dwarka Expressway, Gurgaon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="project-contact" className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark font-heading">
                Get <span className="text-primary">Best Quote</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Fill in your details and our property experts will connect with you shortly.
              </p>

              <div className="space-y-4 mb-6">
                <a
                  href="tel:+919873702365"
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  <i className="fa-solid fa-phone"></i>
                  Call Now: +91 9873702365
                </a>
                <button
                  onClick={() => setIsEmiOpen(true)}
                  className="flex items-center justify-center gap-2 w-full border border-primary text-primary hover:bg-primary/5 font-semibold py-3 rounded-lg transition-colors"
                >
                  <i className="fa-solid fa-calculator"></i>
                  EMI Calculator
                </button>
                {project.brochure && (
                  <a
                    href={project.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border border-borderGrey text-dark hover:bg-lightGrey font-semibold py-3 rounded-lg transition-colors"
                  >
                    <i className="fa-solid fa-download"></i>
                    Download Brochure
                  </a>
                )}
              </div>
            </div>
            <div>
              <ContactForm
                projectId={project._id}
                projectName={project.name}
                source="project-detail"
                variant="modal"
              />
            </div>
          </div>
        </section>

        {/* RELATED PROJECTS */}
        {relatedProjects.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 font-heading">
              Similar <span className="text-primary">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProjects.map((rp) => (
                <ProjectCard key={rp._id} project={rp} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* EMI Calculator Modal */}
      <EmiCalculator isOpen={isEmiOpen} onClose={() => setIsEmiOpen(false)} />

      {/* Lightbox Modal */}
      {lightboxOpen && galleryImages.length > 0 && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl hover:text-primary transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button
            onClick={() => setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
            className="absolute left-4 text-white text-3xl hover:text-primary transition-colors"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={() => setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 text-white text-3xl hover:text-primary transition-colors"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={galleryImages[lightboxIndex].url}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
