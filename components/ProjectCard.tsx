import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

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
  };
  variant?: "default" | "compact";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const imageUrl = project.mainImage || "/images/placeholder-project.jpg";
  const projectUrl = `/projects/${project.slug || project._id}`;
  
  const statusBadge = project.badge || project.status?.replace(/-/g, " ");

  return (
    <Link href={projectUrl} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={imageUrl}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Status Badge */}
          {statusBadge && (
            <div className="absolute top-4 left-4">
              <span className="bg-[#c8a55d] text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase">
                {statusBadge}
              </span>
            </div>
          )}
          {/* Price Badge */}
          <div className="absolute bottom-4 right-4">
            <span className="bg-white/95 backdrop-blur text-[#0f0f1a] text-sm font-bold px-4 py-2 rounded-lg shadow">
              {project.price.startsWith("₹") ? project.price : `₹${project.price}`}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#0f0f1a] mb-2 line-clamp-1 group-hover:text-[#c8a55d] transition-colors">
            {project.name}
          </h3>
          
          <div className="flex items-center gap-2 text-slate-600 mb-3">
            <MapPin className="w-4 h-4 text-[#c8a55d]" />
            <span className="text-sm">{project.sector || project.location}</span>
          </div>

          {variant === "default" && project.configurations && project.configurations.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {project.configurations.slice(0, 3).map((config, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {config}
                </span>
              ))}
            </div>
          )}

          {project.developer && (
            <p className="text-xs text-slate-500">By {project.developer}</p>
          )}

          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-[#c8a55d] font-medium text-sm group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
