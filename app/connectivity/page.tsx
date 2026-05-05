import { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  TrainFront,
  Car,
  Building2,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Connectivity & Location | Dwarka Expressway",
  description:
    "Dwarka Expressway offers excellent connectivity to IGI Airport, Delhi, Gurgaon Cyber City, NH-8, and more. Travel times, nearby landmarks, and infrastructure details.",
};

const connectivityHighlights = [
  {
    icon: Plane,
    title: "IGI Airport",
    distance: "15-20 mins",
    description: "Signal-free expressway connection to Terminal 3",
  },
  {
    icon: Building2,
    title: "Cyber City",
    distance: "20-25 mins",
    description: "Quick access to Gurgaon IT hub",
  },
  {
    icon: TrainFront,
    title: "Metro Connectivity",
    distance: "2024-25",
    description: "Blue Line extension under construction",
  },
  {
    icon: Car,
    title: "NH-8 Highway",
    distance: "10 mins",
    description: "Direct connection via Kherki Daula",
  },
];

const nearbyPlaces = [
  {
    category: "Education",
    icon: GraduationCap,
    places: [
      { name: "DPS International", distance: "5 km" },
      { name: "The Shri Ram School", distance: "8 km" },
      { name: "GD Goenka University", distance: "12 km" },
      { name: "Amity University", distance: "15 km" },
    ],
  },
  {
    category: "Healthcare",
    icon: Stethoscope,
    places: [
      { name: "Medanta Hospital", distance: "10 km" },
      { name: "Fortis Hospital", distance: "12 km" },
      { name: "Artemis Hospital", distance: "15 km" },
      { name: "Max Hospital", distance: "18 km" },
    ],
  },
  {
    category: "Shopping & Entertainment",
    icon: ShoppingBag,
    places: [
      { name: "Ambience Mall", distance: "15 km" },
      { name: "MGF Megacity Mall", distance: "8 km" },
      { name: "Select City Walk", distance: "20 km" },
      { name: "DLF Cyber Hub", distance: "20 km" },
    ],
  },
  {
    category: "Business Hubs",
    icon: Building2,
    places: [
      { name: "Udyog Vihar", distance: "15 km" },
      { name: "Cyber City", distance: "20 km" },
      { name: "Golf Course Road", distance: "18 km" },
      { name: "Sohna Road", distance: "12 km" },
    ],
  },
];

const expresswaySectors = [
  "Sector 99", "Sector 102", "Sector 103", "Sector 104",
  "Sector 106", "Sector 108", "Sector 109", "Sector 110",
  "Sector 111", "Sector 112", "Sector 113", "Sector 37D",
];

const infrastructureProjects = [
  {
    name: "Metro Extension",
    status: "Under Construction",
    completion: "2025",
    description: "Blue Line extension from Dwarka Sector 21 to Najafgarh",
  },
  {
    name: "Signal-Free Corridor",
    status: "Completed",
    completion: "2024",
    description: "8-lane elevated expressway with zero traffic signals",
  },
  {
    name: "Diplomatic Enclave",
    status: "Planned",
    completion: "2027",
    description: "International diplomatic zone near Sector 112-113",
  },
  {
    name: "Regional Rapid Transit",
    status: "Approved",
    completion: "2028",
    description: "RRTS connectivity to Delhi-Alwar corridor",
  },
];

export default function ConnectivityPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Connectivity & <span className="text-[#c8a55d]">Location</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Dwarka Expressway offers unmatched connectivity to Delhi, IGI Airport,
              Gurgaon, and major business hubs. A strategic location for modern living.
            </p>
          </div>
        </div>
      </section>

      {/* Key Connectivity */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectivityHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[#c8a55d]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#c8a55d]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f0f1a] mb-1">{item.title}</h3>
                <div className="text-2xl font-bold text-[#c8a55d] mb-2">{item.distance}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expressway Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0f0f1a] mb-6">
                Dwarka Expressway Overview
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dwarka Expressway (NPR) is a 27.6 km, 16-lane signal-free highway
                  connecting Shiv Murti (Delhi) to Kherki Daula Toll Plaza (Gurgaon).
                </p>
                <p>
                  The expressway features an 8-lane elevated corridor and 8-lane
                  at-grade road, dramatically reducing travel times between Delhi and
                  Gurgaon.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#c8a55d]">27.6</div>
                  <div className="text-sm text-gray-600">Kilometers Length</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#c8a55d]">16</div>
                  <div className="text-sm text-gray-600">Lane Expressway</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#c8a55d]">0</div>
                  <div className="text-sm text-gray-600">Traffic Signals</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#c8a55d]">20</div>
                  <div className="text-sm text-gray-600">Mins to Airport</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.27236214!2d76.98!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17c6f36c9e3f%3A0x7e9c8e8b8f0f8f0f!2sDwarka%20Expressway%2C%20Haryana!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Covered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f0f1a] mb-4">
              Key Sectors on Dwarka Expressway
            </h2>
            <p className="text-gray-600">
              Premium residential and commercial developments across prime sectors
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {expresswaySectors.map((sector, index) => (
              <Link
                key={index}
                href={`/projects?location=${encodeURIComponent(sector)}`}
                className="px-6 py-3 bg-white rounded-full shadow hover:shadow-lg hover:bg-[#c8a55d] hover:text-white transition-all font-medium"
              >
                {sector}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f0f1a] mb-4">
              Nearby Landmarks
            </h2>
            <p className="text-gray-600">
              Essential facilities and amenities within easy reach
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nearbyPlaces.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#c8a55d]/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#c8a55d]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f0f1a]">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.places.map((place, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">{place.name}</span>
                      <span className="text-[#c8a55d] font-medium text-sm">
                        {place.distance}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Projects */}
      <section className="py-20 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Upcoming Infrastructure
            </h2>
            <p className="text-white/60">
              Major projects that will further enhance connectivity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {infrastructureProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {project.name}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : project.status === "Under Construction"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#c8a55d]">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{project.completion}</span>
                  </div>
                </div>
                <p className="text-white/60">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c8a55d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Properties on Dwarka Expressway
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Find your ideal property in the most connected location of NCR.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="bg-white text-[#c8a55d] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Projects
            </Link>
            <Link
              href="/contact"
              className="bg-[#0f0f1a] text-white hover:bg-[#1a1a2e] font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Schedule Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
