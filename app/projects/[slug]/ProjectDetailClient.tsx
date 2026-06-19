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
        {/* ABOUT SECTION — REDESIGNED */}
        {(project.about?.content || project.description) && (
          <section className="my-12">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs uppercase tracking-[0.35em] font-bold text-primary">About the Project</span>
              <div className="flex-1 h-px bg-primary/20"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Image — takes 2/5 on desktop */}
              <div className="relative lg:col-span-2 min-h-[300px] lg:min-h-[520px] order-first">
                {(project.about?.image || enrichedMainImage) ? (
                  <>
                    <Image
                      src={project.about?.image || enrichedMainImage}
                      alt={`${project.name} — Project Overview`}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay with project name tag */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-sm mb-2">
                        {project.status?.replace(/-/g, " ") || "Premium Project"}
                      </span>
                      <p className="text-white font-bold text-lg leading-tight">{project.name}</p>
                      <p className="text-white/70 text-sm">{project.sector && `${project.sector}, `}{project.location}</p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-dark">
                    <i className="fa-solid fa-building text-white/10 text-6xl"></i>
                  </div>
                )}
              </div>

              {/* Content — takes 3/5 on desktop */}
              <div className="lg:col-span-3 bg-dark p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight font-heading">
                    {project.about?.title || `About ${project.name}`}
                  </h2>
                  <div className="w-12 h-1 bg-primary mb-6"></div>

                  <p className="text-base leading-relaxed text-lightGrey/80 mb-8">
                    {project.about?.content || project.description}
                  </p>

                  {/* Key Project Stats inline row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-1">Developer</p>
                      <p className="text-white font-bold text-sm leading-tight">{project.developer || "—"}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-1">Possession</p>
                      <p className="text-white font-bold text-sm leading-tight">{project.possession || project.hero?.possession || "—"}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-1">Starting Price</p>
                      <p className="text-white font-bold text-sm leading-tight">{project.price || "—"}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-1">RERA</p>
                      <p className="text-white font-bold text-xs leading-tight break-all">{project.rera || "Registered"}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                      {project.highlights.slice(0, 6).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-lightGrey/80">
                          <i className="fa-solid fa-circle-check text-primary mt-0.5 flex-shrink-0"></i>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3 font-bold uppercase text-xs tracking-widest transition-all hover:opacity-90 bg-primary text-white rounded-sm"
                  >
                    Get Best Quote
                  </button>
                  <button
                    onClick={() => document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3 font-bold uppercase text-xs tracking-widest transition-all border border-white/20 hover:border-primary hover:text-primary text-white rounded-sm"
                  >
                    Schedule Site Visit
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CONFIGURATIONS SECTION */}
        {project.configurations && project.configurations.length > 0 && (
          <section className="my-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs uppercase tracking-[0.35em] font-bold text-primary">Configurations</span>
              <div className="flex-1 h-px bg-primary/20"></div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-dark overflow-hidden shadow-xl">
              {/* Header bar */}
              <div className="bg-primary px-8 py-5 flex items-center justify-between">
                <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight font-heading">
                  Available Configurations
                </h2>
                <span className="text-white/80 text-sm font-medium">
                  {project.configurations.length} {project.configurations.length === 1 ? "Type" : "Types"} Available
                </span>
              </div>

              {/* Configuration cards */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {project.configurations.map((config, idx) => (
                    <div
                      key={idx}
                      className="group relative border border-white/10 rounded-xl p-6 hover:border-primary/60 hover:bg-white/5 transition-all duration-300 cursor-pointer"
                      onClick={() => document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      {/* Config icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-primary/15 border border-primary/30 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                          <i className="fa-solid fa-bed text-primary group-hover:text-white text-sm transition-colors"></i>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-primary transition-colors font-semibold">
                          Unit Type {idx + 1}
                        </span>
                      </div>

                      <h3 className="text-white font-black text-2xl md:text-3xl font-heading mb-1 group-hover:text-primary transition-colors">
                        {config}
                      </h3>
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-4">
                        {project.name}
                      </p>

                      {/* Size & price info if available */}
                      <div className="space-y-1.5 border-t border-white/10 pt-4">
                        {project.sizeRange && (
                          <div className="flex justify-between text-xs">
                            <span className="text-white/40 uppercase tracking-wider">Size Range</span>
                            <span className="text-white/80 font-medium">{project.sizeRange}</span>
                          </div>
                        )}
                        {project.size && !project.sizeRange && (
                          <div className="flex justify-between text-xs">
                            <span className="text-white/40 uppercase tracking-wider">Size</span>
                            <span className="text-white/80 font-medium">{project.size}</span>
                          </div>
                        )}
                        {project.pricePerSqFt && (
                          <div className="flex justify-between text-xs">
                            <span className="text-white/40 uppercase tracking-wider">Price / Sq.Ft.</span>
                            <span className="text-primary font-bold">{project.pricePerSqFt}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-xs">
                          <span className="text-white/40 uppercase tracking-wider">Starting At</span>
                          <span className="text-primary font-bold">{project.price}</span>
                        </div>
                      </div>

                      <div className="mt-4 text-[10px] uppercase tracking-widest text-white/30 group-hover:text-primary transition-colors font-semibold flex items-center gap-1">
                        <span>Get Price Details</span>
                        <i className="fa-solid fa-arrow-right text-[8px]"></i>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA strip */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-semibold text-sm">Looking for a specific configuration?</p>
                    <p className="text-white/50 text-xs mt-0.5">Our property experts will help you find the perfect unit.</p>
                  </div>
                  <button
                    onClick={() => document.getElementById("project-contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex-shrink-0 px-6 py-2.5 bg-primary text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Enquire Now
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
