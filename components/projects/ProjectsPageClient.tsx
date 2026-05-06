"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { Search, Filter, X, ChevronDown } from "lucide-react";

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

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const statusOptions = [
  { value: "", label: "All Status" },
  { value: "new-launch", label: "New Launch" },
  { value: "under-construction", label: "Under Construction" },
  { value: "ready-to-move", label: "Ready to Move" },
];

const typeOptions = [
  { value: "", label: "All Types" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "sco", label: "SCO Plots" },
  { value: "plots", label: "Plots" },
];

const budgetOptions = [
  { value: "", label: "All Budgets" },
  { value: "under-1cr", label: "Under Rs.1 Cr" },
  { value: "1cr-2cr", label: "Rs.1 Cr - Rs.2 Cr" },
  { value: "2cr-5cr", label: "Rs.2 Cr - Rs.5 Cr" },
  { value: "5cr-10cr", label: "Rs.5 Cr - Rs.10 Cr" },
  { value: "above-10cr", label: "Above Rs.10 Cr" },
];

const configOptions = [
  { value: "", label: "All Configurations" },
  { value: "2 BHK", label: "2 BHK" },
  { value: "3 BHK", label: "3 BHK" },
  { value: "4 BHK", label: "4 BHK" },
  { value: "5 BHK", label: "5 BHK" },
  { value: "Penthouse", label: "Penthouse" },
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const [projects, setProjects] = useState<Project[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [developers, setDevelopers] = useState<string[]>([]);

  // Filter states
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [budget, setBudget] = useState(searchParams.get("budget") || "");
  const [developer, setDeveloper] = useState(searchParams.get("developer") || "");
  const [configuration, setConfiguration] = useState(searchParams.get("configuration") || "");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchDevelopers();
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [status, type, budget, developer, configuration, page]);

  async function fetchDevelopers() {
    try {
      const res = await fetch("/api/developers");
      const data = await res.json();
      if (data.success) {
        setDevelopers(data.data);
      }
    } catch (error) {
      console.error("Error fetching developers:", error);
    }
  }

  async function fetchProjects() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (status) params.set("status", status);
      if (type) params.set("type", type);
      if (budget) params.set("budget", budget);
      if (developer) params.set("developer", developer);
      if (configuration) params.set("configuration", configuration);
      params.set("page", page.toString());
      params.set("limit", "12");

      const res = await fetch(`/api/projects?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setProjects(data.data.projects);
        setPagination(data.data.pagination);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchProjects();
  };

  const clearFilters = () => {
    setSearch("");
    setStatus("");
    setType("");
    setBudget("");
    setDeveloper("");
    setConfiguration("");
    setPage(1);
  };

  const hasActiveFilters = status || type || budget || developer || configuration || search;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4">
            Projects on Dwarka Expressway
          </h1>
          <p className="text-gray-600 text-lg">
            Explore premium residential and commercial projects from top developers
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <form onSubmit={handleSearch} className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, developers, locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-[var(--primary)] hover:bg-[#b8954d] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>
          </form>

          {/* Filter Panel */}
          {showFilters && (
            <div className="border-t border-gray-100 pt-4 mt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <select
                  value={status}
                  onChange={(e) => { setStatus(e.target.value); setPage(1); }}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                >
                  {statusOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                <select
                  value={type}
                  onChange={(e) => { setType(e.target.value); setPage(1); }}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                >
                  {typeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                <select
                  value={budget}
                  onChange={(e) => { setBudget(e.target.value); setPage(1); }}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                <select
                  value={developer}
                  onChange={(e) => { setDeveloper(e.target.value); setPage(1); }}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                >
                  <option value="">All Developers</option>
                  {developers.map((dev) => (
                    <option key={dev} value={dev}>
                      {dev}
                    </option>
                  ))}
                </select>

                <select
                  value={configuration}
                  onChange={(e) => { setConfiguration(e.target.value); setPage(1); }}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                >
                  {configOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-4 flex items-center gap-2 text-red-500 hover:text-red-600 text-sm font-medium"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        {pagination && (
          <div className="mb-6 text-gray-600">
            Showing {projects.length} of {pagination.total} projects
          </div>
        )}

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
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your filters or search term</p>
            <button
              onClick={clearFilters}
              className="text-[var(--primary)] hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    page === pageNum
                      ? "bg-[var(--primary)] text-white"
                      : "border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            {pagination.totalPages > 5 && <span className="px-2">...</span>}
            <button
              onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
              disabled={page === pagination.totalPages}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center"><div className="spinner"></div></div>}>
      <ProjectsContent />
    </Suspense>
  );
}
