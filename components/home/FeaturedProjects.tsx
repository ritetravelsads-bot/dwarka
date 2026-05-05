"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Search } from "lucide-react";

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

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [searchTerm, locationFilter, budgetFilter, projects]);

  async function fetchProjects() {
    try {
      const res = await fetch("/api/projects?limit=30");
      const data = await res.json();
      if (data.success) {
        setProjects(data.data.projects);
        setFilteredProjects(data.data.projects);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  }

  function filterProjects() {
    let filtered = [...projects];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.developer?.toLowerCase().includes(term)
      );
    }

    if (locationFilter) {
      const loc = locationFilter.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.location?.toLowerCase().includes(loc) ||
          p.sector?.toLowerCase().includes(loc)
      );
    }

    if (budgetFilter) {
      const [min, max] = budgetFilter.split("-").map((v) => {
        if (v === "6+") return [60000000, Infinity];
        return parseFloat(v) * 10000000;
      });
      
      const minVal = typeof min === "number" ? min : min[0];
      const maxVal = typeof max === "number" ? max : (max ? max[1] : Infinity);
      
      filtered = filtered.filter((p) => {
        const price = p.priceValue || 0;
        return price >= minVal && price <= maxVal;
      });
    }

    setFilteredProjects(filtered);
  }

  return (
    <section id="residential-project" className="py-20 md:px-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none text-[#0f0f1a]">
              Featured Projects on Dwarka Expressway
            </h2>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Project Name Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Project Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c8a55d] focus:border-transparent"
                />
              </div>

              {/* Location Filter */}
              <input
                type="text"
                placeholder="Search Sector / Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c8a55d] focus:border-transparent"
              />

              {/* Budget Filter */}
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c8a55d] focus:border-transparent bg-white"
              >
                <option value="">Select Budget</option>
                <option value="1-2.5">₹1 Cr to ₹2.5 Cr</option>
                <option value="2.5-5">₹2.5 – ₹5 Cr</option>
                <option value="5-6">₹5 – ₹6 Cr</option>
                <option value="6+">Above ₹6 Cr</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="spinner"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
