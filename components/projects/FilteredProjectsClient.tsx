"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { projectsData, makeSlug } from "@/lib/project-data";

interface Project {
  _id: string;
  name: string;
  slug?: string;
  location: string;
  sector?: string;
  price: string;
  priceValue?: number;
  mainImage?: string;
  badge?: string;
  status?: string;
  type?: string;
  configurations?: string[];
  developer?: string;
}

interface FilteredProjectsClientProps {
  filterType: "status" | "type" | "bhk";
  filterValue: string;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
}

// Keywords for filtering based on badges/status
const filterKeywords: Record<string, string[]> = {
  // Status filters
  "new-launch": ["new launch", "new", "launch", "pre-launch", "upcoming", "exclusive launch"],
  "ready-to-move": ["ready to move", "ready", "possession", "established", "completed"],
  // Type filters
  "residential": ["residential", "apartments", "flats", "homes", "living", "residences", "villas", "high-rise"],
  "commercial": ["commercial", "sco", "office", "retail", "shop", "business"],
  // BHK filters - these match against configurations array
  "3bhk": ["3 bhk", "3bhk", "3-bhk"],
  "4bhk": ["4 bhk", "4bhk", "4-bhk"],
  "5bhk": ["5 bhk", "5bhk", "5-bhk", "penthouse"],
};

export default function FilteredProjectsClient({
  filterType,
  filterValue,
  title,
  subtitle,
  breadcrumbLabel,
}: FilteredProjectsClientProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const projectsPerPage = 12;

  useEffect(() => {
    fetchAndFilterProjects();
  }, [filterValue]);

  // Filter projects based on filter type and value
  function filterProjects(projectsList: Project[]): Project[] {
    const keywords = filterKeywords[filterValue] || [];
    
    return projectsList.filter((project) => {
      // Get the badge from local data or API
      const localProject = projectsData.find(
        (p) => p.slug === project.slug || makeSlug(p.name) === makeSlug(project.name)
      );
      const badge = (localProject?.badge || project.badge || project.status || "").toLowerCase();
      const projectType = (project.type || "residential").toLowerCase();
      const configurations = (project.configurations || []).map(c => c.toLowerCase());
      
      if (filterType === "bhk") {
        // For BHK filters, check configurations array
        return configurations.some(config => 
          keywords.some(kw => config.includes(kw.replace("-", " ")))
        );
      }
      
      if (filterType === "type") {
        // For type filters, check the type field and badge
        if (filterValue === "residential") {
          return projectType === "residential" || 
                 projectType !== "commercial" ||
                 keywords.some(kw => badge.includes(kw));
        }
        if (filterValue === "commercial") {
          return projectType === "commercial" || 
                 keywords.some(kw => badge.includes(kw));
        }
      }
      
      if (filterType === "status") {
        // For status filters, check badge/status for keywords
        return keywords.some((kw) => badge.includes(kw));
      }
      
      return true;
    });
  }

  async function fetchAndFilterProjects() {
    setLoading(true);
    try {
      // Fetch all projects first
      const res = await fetch(`/api/projects?limit=100`);
      const data = await res.json();
      
      let fetchedProjects: Project[] = [];
      if (data.success) {
        fetchedProjects = data.data.projects;
      }

      // If API returned no projects, use local data as fallback
      if (fetchedProjects.length === 0) {
        fetchedProjects = projectsData.map((p, index) => ({
          _id: `local-${index}`,
          name: p.name,
          slug: p.slug,
          location: p.location,
          sector: p.sector,
          price: p.price,
          mainImage: p.image,
          badge: p.badge,
          status: p.badge?.toLowerCase().includes("ready") ? "ready-to-move" : 
                  p.badge?.toLowerCase().includes("new") || p.badge?.toLowerCase().includes("launch") ? "new-launch" : "under-construction",
          type: "residential",
        }));
      }

      // Apply client-side filtering
      const filtered = filterProjects(fetchedProjects);
      setAllProjects(filtered);
      setProjects(filtered.slice(0, projectsPerPage));
    } catch (error) {
      console.error("Error fetching projects:", error);
      // Fallback to local data on error
      const localProjects = projectsData.map((p, index) => ({
        _id: `local-${index}`,
        name: p.name,
        slug: p.slug,
        location: p.location,
        sector: p.sector,
        price: p.price,
        mainImage: p.image,
        badge: p.badge,
        status: p.badge?.toLowerCase().includes("ready") ? "ready-to-move" : 
                p.badge?.toLowerCase().includes("new") || p.badge?.toLowerCase().includes("launch") ? "new-launch" : "under-construction",
        type: "residential",
      }));
      const filtered = filterProjects(localProjects);
      setAllProjects(filtered);
      setProjects(filtered.slice(0, projectsPerPage));
    } finally {
      setLoading(false);
    }
  }

  // Handle pagination
  useEffect(() => {
    const startIndex = (page - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    
    // Apply search filter if present
    let filteredProjects = allProjects;
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      filteredProjects = allProjects.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.location.toLowerCase().includes(searchLower) ||
          (p.developer?.toLowerCase().includes(searchLower))
      );
    }
    
    setProjects(filteredProjects.slice(startIndex, endIndex));
  }, [page, allProjects, search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  // Calculate total pages
  const getFilteredProjects = () => {
    if (!search.trim()) return allProjects;
    const searchLower = search.toLowerCase();
    return allProjects.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.location.toLowerCase().includes(searchLower) ||
        (p.developer?.toLowerCase().includes(searchLower))
    );
  };
  
  const totalProjects = getFilteredProjects().length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-dark font-medium">{breadcrumbLabel}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            {title}
          </h1>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, developers, locations..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-[#b8954d] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {projects.length} of {totalProjects} projects
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="spinner"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search term or browse all projects
            </p>
            <Link
              href="/projects"
              className="text-primary hover:underline font-medium"
            >
              View All Projects
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            {Array.from(
              { length: Math.min(5, totalPages) },
              (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      page === pageNum
                        ? "bg-primary text-white"
                        : "border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              }
            )}
            {totalPages > 5 && (
              <span className="px-2">...</span>
            )}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
