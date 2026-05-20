"use client";

import Link from "next/link";
import { Building2, Home, Sparkles, Key, ArrowRight } from "lucide-react";

const popularSearches = [
  {
    title: "Residential Projects on Dwarka Expressway",
    slug: "residential-projects-on-dwarka-expressway",
    icon: Building2,
    description: "Premium residential developments along the expressway",
  },
  {
    title: "Commercial Property in Gurgaon",
    slug: "commercial-property-in-gurgaon",
    icon: Building2,
    description: "Office spaces, retail shops & commercial hubs",
  },
  {
    title: "Upcoming Projects in Gurugram",
    slug: "upcoming-projects-in-gurugram",
    icon: Sparkles,
    description: "New launches & pre-launch opportunities",
  },
  {
    title: "Ready to Move Flats in Gurgaon",
    slug: "ready-to-move-flats-in-gurgaon",
    icon: Key,
    description: "Move-in ready apartments with possession",
  },
  {
    title: "3 BHK Flats in Gurgaon",
    slug: "3-bhk-flats-in-gurgaon",
    icon: Home,
    description: "Spacious 3 bedroom apartments for families",
  },
  {
    title: "4 BHK Flats in Gurgaon",
    slug: "4-bhk-flats-in-gurgaon",
    icon: Home,
    description: "Luxury 4 bedroom penthouses & apartments",
  },
  {
    title: "2 BHK Flats in Gurgaon",
    slug: "2-bhk-flats-in-gurgaon",
    icon: Home,
    description: "Affordable 2 bedroom options for couples",
  },
];

export default function PopularSearches() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-dark font-heading">
            Popular Searches
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Explore the most searched property categories on Dwarka Expressway and Gurgaon
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {popularSearches.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="group block bg-lightGrey hover:bg-white border border-transparent hover:border-borderGrey rounded-xl p-5 md:p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-dark text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
