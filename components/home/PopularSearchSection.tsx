import Link from "next/link";
import { ArrowRight, Building2, Home, MapPin, Key, Bed } from "lucide-react";

const popularSearches = [
  {
    title: "Residential Projects on Dwarka Expressway",
    description: "Premium residential developments with world-class amenities",
    href: "/residential-projects-on-dwarka-expressway",
    icon: Building2,
    tag: "Trending",
  },
  {
    title: "Commercial Property in Gurgaon",
    description: "Prime commercial spaces for business and investment",
    href: "/commercial-property-in-gurgaon",
    icon: Building2,
    tag: "Hot",
  },
  {
    title: "Upcoming Projects in Gurugram",
    description: "New launches and pre-launch opportunities",
    href: "/upcoming-projects-in-gurugram",
    icon: MapPin,
    tag: "New Launch",
  },
  {
    title: "Ready to Move Flats in Gurgaon",
    description: "Move-in ready homes with immediate possession",
    href: "/ready-to-move-flats-in-gurgaon",
    icon: Key,
    tag: "Ready",
  },
  {
    title: "3 BHK Flats in Gurgaon",
    description: "Spacious 3-bedroom apartments for families",
    href: "/3-bhk-flats-in-gurgaon",
    icon: Bed,
    tag: "Popular",
  },
  {
    title: "4 BHK Flats in Gurgaon",
    description: "Luxury 4-bedroom residences with premium features",
    href: "/4-bhk-flats-in-gurgaon",
    icon: Home,
    tag: "Luxury",
  },
  {
    title: "2 BHK Flat in Gurgaon",
    description: "Affordable 2-bedroom homes for young professionals",
    href: "/2-bhk-flat-in-gurgaon",
    icon: Bed,
    tag: "Affordable",
  },
];

export default function PopularSearchSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Explore Properties
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Popular Searches
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover the most sought-after property categories on Dwarka Expressway and Gurgaon
          </p>
        </div>

        {/* Search Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {popularSearches.map((search, index) => {
            const Icon = search.icon;
            return (
              <Link
                key={index}
                href={search.href}
                className="group relative p-5 bg-white border border-gray-200 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Tag */}
                <span className="absolute top-4 right-4 text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded">
                  {search.tag}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-dark mb-1.5 group-hover:text-primary transition-colors pr-12">
                  {search.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                  {search.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-sm text-primary font-medium">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark text-white font-medium rounded-lg hover:bg-dark/90 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
