import { 
  Dumbbell, 
  Waves, 
  Car, 
  Shield, 
  Users, 
  Droplets, 
  Zap, 
  TreePine,
  Building2,
  Baby,
  Gamepad2,
  Wind
} from "lucide-react";

const amenities = [
  { icon: Waves, title: "Swimming Pool", description: "Temperature controlled pool" },
  { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art equipment" },
  { icon: Building2, title: "Clubhouse", description: "Premium recreational facility" },
  { icon: Baby, title: "Kids Play Area", description: "Safe play zones" },
  { icon: Gamepad2, title: "Indoor Games", description: "Multiple gaming options" },
  { icon: Car, title: "Covered Parking", description: "Multi-level parking" },
  { icon: Shield, title: "24/7 Security", description: "Advanced surveillance" },
  { icon: Wind, title: "Jogging Track", description: "Landscaped pathways" },
  { icon: Users, title: "Senior Citizen Zone", description: "Peaceful relaxation area" },
  { icon: Droplets, title: "Rainwater Harvesting", description: "Eco-friendly initiative" },
  { icon: Zap, title: "EV Charging", description: "Electric vehicle stations" },
  { icon: TreePine, title: "Landscaped Gardens", description: "Green open spaces" },
];

export default function AmenitiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1a] mb-4">
            World-Class Amenities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience luxury living with our premium amenities designed for modern lifestyle
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#c8a55d]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#c8a55d]/10 flex items-center justify-center mb-4 group-hover:bg-[#c8a55d] transition-colors">
                <amenity.icon className="w-7 h-7 text-[#c8a55d] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[#0f0f1a] font-semibold mb-1">{amenity.title}</h3>
              <p className="text-slate-500 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+919354902932"
            className="inline-flex items-center gap-2 bg-[#c8a55d] hover:bg-[#b8954d] text-white font-semibold px-8 py-4 rounded-lg transition-all group"
          >
            Schedule Site Visit
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
