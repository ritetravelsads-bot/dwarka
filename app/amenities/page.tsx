import { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Dumbbell,
  Building2,
  Baby,
  Gamepad2,
  Car,
  Shield,
  Wind,
  Users,
  Droplets,
  Zap,
  TreePine,
  Utensils,
  BookOpen,
  Heart,
  Wifi,
  Coffee,
  Music,
  Film,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "World-Class Amenities | Dwarka Expressway Projects",
  description:
    "Discover premium amenities in Dwarka Expressway projects - Swimming pools, gyms, clubhouses, parks, security systems, and more. Experience luxury living.",
};

const amenityCategories = [
  {
    title: "Sports & Fitness",
    description: "Stay active with world-class sports facilities",
    amenities: [
      { icon: Waves, name: "Swimming Pool", desc: "Temperature controlled infinity pools" },
      { icon: Dumbbell, name: "Gymnasium", desc: "State-of-the-art fitness equipment" },
      { icon: Wind, name: "Jogging Track", desc: "Landscaped running paths" },
      { icon: Gamepad2, name: "Sports Courts", desc: "Tennis, basketball, badminton" },
    ],
  },
  {
    title: "Recreation & Entertainment",
    description: "Unwind with premium leisure facilities",
    amenities: [
      { icon: Building2, name: "Clubhouse", desc: "Premium recreational facility" },
      { icon: Film, name: "Mini Theatre", desc: "Private screening room" },
      { icon: Music, name: "Party Hall", desc: "Banquet and celebration space" },
      { icon: Coffee, name: "Cafe & Lounge", desc: "Casual dining spaces" },
    ],
  },
  {
    title: "Family & Lifestyle",
    description: "Amenities for every family member",
    amenities: [
      { icon: Baby, name: "Kids Play Area", desc: "Safe and engaging play zones" },
      { icon: Users, name: "Senior Citizen Zone", desc: "Peaceful relaxation spaces" },
      { icon: BookOpen, name: "Library", desc: "Reading rooms and study areas" },
      { icon: Utensils, name: "BBQ Area", desc: "Outdoor cooking and dining" },
    ],
  },
  {
    title: "Security & Convenience",
    description: "Safety and convenience at every step",
    amenities: [
      { icon: Shield, name: "24/7 Security", desc: "CCTV and access control" },
      { icon: Car, name: "Covered Parking", desc: "Multi-level parking" },
      { icon: Wifi, name: "High-Speed Internet", desc: "Fiber optic connectivity" },
      { icon: Heart, name: "Medical Center", desc: "On-site first aid facility" },
    ],
  },
  {
    title: "Sustainability",
    description: "Eco-friendly initiatives for a greener tomorrow",
    amenities: [
      { icon: Droplets, name: "Rainwater Harvesting", desc: "Water conservation" },
      { icon: Zap, name: "EV Charging", desc: "Electric vehicle stations" },
      { icon: TreePine, name: "Landscaped Gardens", desc: "80% green open spaces" },
      { icon: Sparkles, name: "Sewage Treatment", desc: "Zero discharge system" },
    ],
  },
];

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              World-Class <span className="text-[#c8a55d]">Amenities</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience luxury living with premium amenities designed for modern
              lifestyles. Every project on Dwarka Expressway offers exceptional facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Amenity Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {amenityCategories.map((category, index) => (
              <div key={index}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[#0f0f1a] mb-3">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-[#c8a55d]/10 flex items-center justify-center mb-4 group-hover:bg-[#c8a55d] transition-colors">
                        <amenity.icon className="w-8 h-8 text-[#c8a55d] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#0f0f1a] mb-2">
                        {amenity.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{amenity.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f0f1a] mb-4">
              Premium Specifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every project features high-quality specifications and finishes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Home Features",
                items: [
                  "App-controlled lighting",
                  "Smart door locks",
                  "Video door phone",
                  "AC pre-installation",
                  "Modular switches",
                ],
              },
              {
                title: "Kitchen & Bath",
                items: [
                  "Modular kitchen",
                  "Chimney & hob",
                  "Premium sanitary ware",
                  "Anti-skid tiles",
                  "Hot & cold water",
                ],
              },
              {
                title: "Living Spaces",
                items: [
                  "Vitrified flooring",
                  "Large windows",
                  "Spacious balconies",
                  "Premium paint finish",
                  "False ceiling provisions",
                ],
              },
            ].map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#0f0f1a] mb-6">
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-[#c8a55d] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c8a55d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience These Amenities
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a site visit to see these world-class amenities in person.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="bg-white text-[#c8a55d] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Projects
            </Link>
            <a
              href="tel:+919354902932"
              className="bg-[#0f0f1a] text-white hover:bg-[#1a1a2e] font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Schedule Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
