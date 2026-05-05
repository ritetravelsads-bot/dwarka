"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import {
  MapPin,
  Phone,
  Download,
  Play,
  Check,
  Building2,
  Calendar,
  Ruler,
  Home,
  ChevronRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import EmiCalculator from "@/components/EmiCalculator";

interface FloorPlan {
  title: string;
  size: string;
  price: string;
  image?: string;
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
  configurations?: string[];
  rera?: string;
  possession?: string;
  description?: string;
  shortDescription?: string;
  highlights?: string[];
  amenities?: string[];
  floorPlan?: FloorPlan[];
  gallery?: string[];
  mainImage?: string;
  logo?: string;
  brochure?: string;
  masterPlan?: string;
  locationMap?: string;
  videoUrl?: string;
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
}

interface Props {
  project: Project;
  relatedProjects: RelatedProject[];
}

export default function ProjectDetailClient({ project, relatedProjects }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "floor-plans" | "amenities" | "location">("overview");
  const [isEmiOpen, setIsEmiOpen] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const galleryImages = project.gallery?.length ? project.gallery : (project.mainImage ? [project.mainImage] : []);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "new-launch":
        return "bg-[#c8a55d] text-white";
      case "under-construction":
        return "bg-yellow-500/20 text-yellow-600 border border-yellow-500/30";
      case "ready-to-move":
        return "bg-green-500/20 text-green-600 border border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#c8a55d]">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/projects" className="text-gray-500 hover:text-[#c8a55d]">
              Projects
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#0f0f1a] font-medium">{project.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {galleryImages.length > 0 ? (
                <>
                  <Swiper
                    modules={[Navigation, Thumbs]}
                    navigation
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    className="aspect-video"
                  >
                    {galleryImages.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative w-full h-full">
                          <Image
                            src={img}
                            alt={`${project.name} - Image ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {galleryImages.length > 1 && (
                    <Swiper
                      modules={[FreeMode, Thumbs]}
                      onSwiper={setThumbsSwiper}
                      slidesPerView={6}
                      spaceBetween={8}
                      freeMode
                      watchSlidesProgress
                      className="p-2"
                    >
                      {galleryImages.map((img, idx) => (
                        <SwiperSlide key={idx} className="cursor-pointer">
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </>
              ) : (
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <Building2 className="w-20 h-20 text-gray-400" />
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 ${getStatusBadgeClass(project.status)}`}
                  >
                    {project.status.replace(/-/g, " ")}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold text-[#0f0f1a] mb-2">
                    {project.name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-[#c8a55d]" />
                    <span>{project.sector || project.location}</span>
                  </div>
                </div>
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={project.developer}
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                )}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c8a55d]">{project.price}</div>
                  <div className="text-xs text-gray-500">Starting Price</div>
                </div>
                {project.configurations && (
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[#0f0f1a]">
                      {project.configurations.join(", ")}
                    </div>
                    <div className="text-xs text-gray-500">Configurations</div>
                  </div>
                )}
                {project.sizeRange && (
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[#0f0f1a]">{project.sizeRange}</div>
                    <div className="text-xs text-gray-500">Size Range</div>
                  </div>
                )}
                {project.possession && (
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[#0f0f1a]">{project.possession}</div>
                    <div className="text-xs text-gray-500">Possession</div>
                  </div>
                )}
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex gap-6">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "floor-plans", label: "Floor Plans" },
                    { id: "amenities", label: "Amenities" },
                    { id: "location", label: "Location" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`pb-3 font-medium transition-colors ${
                        activeTab === tab.id
                          ? "text-[#c8a55d] border-b-2 border-[#c8a55d]"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {project.description && (
                      <div>
                        <h3 className="text-lg font-semibold text-[#0f0f1a] mb-3">About {project.name}</h3>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                          {project.description}
                        </p>
                      </div>
                    )}
                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-[#0f0f1a] mb-3">Project Highlights</h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-[#c8a55d] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Building2 className="w-5 h-5 text-[#c8a55d]" />
                          <span className="font-medium text-[#0f0f1a]">Developer</span>
                        </div>
                        <p className="text-gray-600">{project.developer}</p>
                      </div>
                      {project.rera && (
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3 mb-2">
                            <Home className="w-5 h-5 text-[#c8a55d]" />
                            <span className="font-medium text-[#0f0f1a]">RERA No.</span>
                          </div>
                          <p className="text-gray-600">{project.rera}</p>
                        </div>
                      )}
                      {project.pricePerSqFt && (
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3 mb-2">
                            <Ruler className="w-5 h-5 text-[#c8a55d]" />
                            <span className="font-medium text-[#0f0f1a]">Price/Sq.Ft</span>
                          </div>
                          <p className="text-gray-600">{project.pricePerSqFt}</p>
                        </div>
                      )}
                      {project.possession && (
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="w-5 h-5 text-[#c8a55d]" />
                            <span className="font-medium text-[#0f0f1a]">Possession</span>
                          </div>
                          <p className="text-gray-600">{project.possession}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "floor-plans" && (
                  <div>
                    {project.floorPlan && project.floorPlan.length > 0 ? (
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.floorPlan.map((plan, idx) => (
                          <div key={idx} className="p-4 border border-gray-200 rounded-xl">
                            {plan.image && (
                              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                                <Image src={plan.image} alt={plan.title} fill className="object-contain" />
                              </div>
                            )}
                            <h4 className="font-semibold text-[#0f0f1a] mb-2">{plan.title}</h4>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Size: {plan.size}</span>
                              <span className="text-[#c8a55d] font-semibold">{plan.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Floor plans coming soon. Contact us for details.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "amenities" && (
                  <div>
                    {project.amenities && project.amenities.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.amenities.map((amenity, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                          >
                            <Check className="w-5 h-5 text-[#c8a55d]" />
                            <span className="text-gray-700">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Amenities details coming soon.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "location" && (
                  <div>
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
                            project.location + ", Gurgaon"
                          )}`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#c8a55d] mt-1" />
                        <div>
                          <p className="font-medium text-[#0f0f1a]">{project.name}</p>
                          <p className="text-gray-600">
                            {project.sector}, {project.location}, Dwarka Expressway, Gurgaon
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-[#0f0f1a] mb-4">Get Best Quote</h3>
              <ContactForm
                projectId={project._id}
                projectName={project.name}
                source="project-detail"
                variant="modal"
              />
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
              <a
                href="tel:+919354902932"
                className="flex items-center justify-center gap-2 w-full bg-[#c8a55d] hover:bg-[#b8954d] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button
                onClick={() => setIsEmiOpen(true)}
                className="flex items-center justify-center gap-2 w-full border border-[#c8a55d] text-[#c8a55d] hover:bg-[#c8a55d]/5 font-semibold py-3 rounded-lg transition-colors"
              >
                EMI Calculator
              </button>
              {project.brochure && (
                <a
                  href={project.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </a>
              )}
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Watch Video
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#0f0f1a] mb-8">Similar Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProjects.map((rp) => (
                <ProjectCard key={rp._id} project={rp} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* EMI Calculator Modal */}
      <EmiCalculator isOpen={isEmiOpen} onClose={() => setIsEmiOpen(false)} />

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setShowEnquiryModal(false)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
            <button
              onClick={() => setShowEnquiryModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-[#0f0f1a] mb-4">
              Enquire About {project.name}
            </h3>
            <ContactForm
              projectId={project._id}
              projectName={project.name}
              source="project-modal"
              variant="modal"
              onSuccess={() => setShowEnquiryModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
