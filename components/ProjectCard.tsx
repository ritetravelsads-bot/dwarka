import Image from "next/image";
import Link from "next/link";
import { getProjectByName, getProjectBySlug, DEFAULT_PROJECT_IMAGE, makeSlug } from "@/lib/project-data";

interface ProjectCardProps {
  project: {
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
  };
  variant?: "default" | "compact";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  // Enrich with local data for correct images and occupancy from PHP version
  const localData = project.slug 
    ? getProjectBySlug(project.slug) 
    : getProjectByName(project.name);

  // Use local image (p-X.webp) if available, fallback to API image, then default
  const imageUrl = localData?.image || project.mainImage || DEFAULT_PROJECT_IMAGE;
  
  // Generate proper slug
  const projectSlug = project.slug || localData?.slug || makeSlug(project.name);
  const projectUrl = `/projects/${projectSlug}`;
  
  // Use local badge/status or API data
  const statusBadge = localData?.badge || project.badge || project.status?.replace(/-/g, " ");
  
  // Use local occupancy (correct values from PHP) or API data
  const occupancy = localData?.occupancy ?? project.occupancy ?? 0;
  
  // Use local alt text or fallback
  const altText = localData?.alt || project.alt || project.name;
  
  // SVG Math for occupancy circle
  const radius = 15.915;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (occupancy / 100) * circumference;

  return (
    <Link href={projectUrl} className="group bg-white rounded-2xl shadow-lg overflow-hidden project-card transition-transform hover:-translate-y-1 block">
      {/* Image Container */}
      <div className="relative">
        <Image
          src={imageUrl}
          alt={altText}
          width={400}
          height={224}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status Badge */}
        {statusBadge && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            {statusBadge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-1 flex-1">
            <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-xs text-gray-500 flex items-center">
              <svg className="w-3 h-3 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
              {project.sector || project.location}
            </p>
            <p className="text-lg font-bold text-red-700 pt-1">
              {project.price.startsWith("₹") ? project.price : `₹ ${project.price}`}*
            </p>
          </div>

          {/* Occupancy Circle */}
          {variant === "default" && (
            <div className="flex flex-col items-center justify-center min-w-[60px]">
              <div className="relative w-12 h-12">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r={radius} fill="transparent" stroke="#e5e7eb" strokeWidth="4"/>
                  <circle 
                    cx="20" 
                    cy="20" 
                    r={radius} 
                    fill="transparent" 
                    stroke="#15803d" 
                    strokeWidth="4" 
                    strokeDasharray={circumference} 
                    strokeDashoffset={offset} 
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-gray-700">{occupancy}%</span>
                </div>
              </div>
              <span className="text-[9px] uppercase font-bold text-gray-400 mt-1">Occupancy</span>
            </div>
          )}
        </div>

        <hr className="my-3 border-gray-100" />

        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-xs uppercase group-hover:underline">
            View Details
          </span>
          <svg className="w-3 h-3 text-primary transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
