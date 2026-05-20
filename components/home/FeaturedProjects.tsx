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
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
      if (data.success && data.data?.projects) {
        setProjects(data.data.projects);
        setFilteredProjects(data.data.projects);
      } else if (Array.isArray(data)) {
        // Handle direct array response
        setProjects(data);
        setFilteredProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  }

  // Handle search input with autocomplete suggestions
  function handleSearchChange(value: string) {
    setSearchTerm(value);
    
    if (value.trim().length > 0) {
      const term = value.toLowerCase();
      const matchingProjects = projects
        .filter(p => p.name.toLowerCase().includes(term))
        .map(p => p.name)
        .slice(0, 5);
      setSuggestions(matchingProjects);
      setShowSuggestions(matchingProjects.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  function selectSuggestion(name: string) {
    setSearchTerm(name);
    setShowSuggestions(false);
    setSuggestions([]);
  }

  // Parse price string like "2.5 Cr", "1.8 Cr", "50 L" to number in Cr
  function parsePriceInCr(priceStr: string): number {
    if (!priceStr) return 0;
    
    // Clean the price string
    const cleaned = priceStr.replace(/[₹,*\s]/g, '').toLowerCase();
    
    // Extract number
    const match = cleaned.match(/[\d.]+/);
    if (!match) return 0;
    
    const num = parseFloat(match[0]);
    
    // Check for Cr or L suffix
    if (cleaned.includes('cr')) {
      return num; // Already in Cr
    } else if (cleaned.includes('l') || cleaned.includes('lac') || cleaned.includes('lakh')) {
      return num / 100; // Convert L to Cr
    }
    
    // If no suffix, assume it's in Cr if > 100, else might be in L
    return num > 100 ? num / 100 : num;
  }

  function filterProjects() {
    let filtered = [...projects];

    // Search by project name or developer
    if (searchTerm) {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.developer?.toLowerCase().includes(term) ||
          p.slug?.toLowerCase().includes(term)
      );
    }

    // Search by location/sector
    if (locationFilter) {
      const loc = locationFilter.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.location?.toLowerCase().includes(loc) ||
          p.sector?.toLowerCase().includes(loc)
      );
    }

    // Filter by budget range
    if (budgetFilter) {
      let minCr = 0;
      let maxCr = Infinity;
      
      switch (budgetFilter) {
        case "1-2.5":
          minCr = 1;
          maxCr = 2.5;
          break;
        case "2.5-5":
          minCr = 2.5;
          maxCr = 5;
          break;
        case "5-6":
          minCr = 5;
          maxCr = 6;
          break;
        case "6+":
          minCr = 6;
          maxCr = Infinity;
          break;
      }
      
      filtered = filtered.filter((p) => {
        // Use priceValue if available, otherwise parse from price string
        let priceInCr = 0;
        if (p.priceValue) {
          priceInCr = p.priceValue / 10000000; // Convert to Cr
        } else {
          priceInCr = parsePriceInCr(p.price);
        }
        return priceInCr >= minCr && priceInCr <= maxCr;
      });
    }

    setFilteredProjects(filtered);
  }

  return (
    <section id="residential-project" className="py-12 md:px-10 bg-lightGrey">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold uppercase leading-none text-dark font-heading">
              Featured Projects on Dwarka Expressway
            </h3>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Project Name Search with Autocomplete */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <input
                  type="text"
                  placeholder="Search Project Name"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full border border-borderGrey rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {/* Autocomplete Suggestions */}
                {showSuggestions && suggestions.length > 0 && (
                  <ul className="absolute z-20 bg-white border border-gray-300 w-full mt-1 rounded-lg max-h-40 overflow-y-auto shadow-lg">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => selectSuggestion(suggestion)}
                        className="px-4 py-2 hover:bg-primary/10 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-b-0"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Location Filter */}
              <input
                type="text"
                placeholder="Search Sector / Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full border border-borderGrey rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Budget Filter */}
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="w-full border border-borderGrey rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
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
