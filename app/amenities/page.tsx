import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "World-Class Amenities | Dwarka Expressway NCR",
  description:
    "Experience a lifestyle designed around comfort, convenience, and luxury at Dwarka Expressway NCR. Explore premium wellness, recreation, and community amenities.",
  keywords: "dwarka expressway amenities, luxury amenities gurugram, swimming pool, clubhouse, gymnasium, sports facilities, landscaped gardens",
  alternates: {
    canonical: `${BASE_URL}/amenities`,
  },
  openGraph: {
    title: "World-Class Amenities | Dwarka Expressway NCR",
    description: "Experience a lifestyle designed around comfort, convenience, and luxury at Dwarka Expressway NCR.",
    url: `${BASE_URL}/amenities`,
    type: "website",
  },
};

const lifestyleAmenities = [
  {
    image: "/assets/img/amenities/landscaped-gardens.webp",
    icon: "fa-leaf",
    title: "Landscaped Gardens",
    description: "Beautifully designed green areas provide a peaceful environment for relaxation, morning walks, and outdoor activities, helping you reconnect with nature.",
  },
  {
    image: "/assets/img/amenities/clubhouse-spaces.webp",
    icon: "fa-martini-glass",
    title: "Clubhouse Spaces",
    description: "A modern clubhouse equipped with indoor games, lounge areas, and social spaces where residents can unwind and connect with their community.",
  },
  {
    image: "/assets/img/amenities/swimming-pool.webp",
    icon: "fa-person-swimming",
    title: "Swimming Pool",
    description: "A well-maintained swimming pool designed for both leisure and fitness, offering a refreshing escape from daily routines.",
  },
  {
    image: "/assets/img/amenities/children-play.webp",
    icon: "fa-child-reaching",
    title: "Children's Play Area",
    description: "Safe and engaging play zones for children, designed to encourage physical activity and social interaction in a secure environment.",
  },
];

const wellnessAmenities = [
  {
    image: "/assets/img/amenities/fully-equipped-gymnasium.webp",
    icon: "fa-dumbbell",
    title: "Fully Equipped Gymnasium",
    description: "A modern fitness center with advanced equipment, allowing residents to maintain a healthy and active lifestyle.",
  },
  {
    image: "/assets/img/amenities/jogging-&-cycling-tracks.webp",
    icon: "fa-person-running",
    title: "Jogging & Cycling Tracks",
    description: "Dedicated tracks surrounded by greenery, ideal for morning runs, cycling, and daily fitness routines.",
  },
  {
    image: "/assets/img/amenities/yoga-&-meditation-zone.webp",
    icon: "fa-om",
    title: "Yoga & Meditation Zone",
    description: "Peaceful spaces designed for yoga and meditation, promoting mental well-being and relaxation.",
  },
  {
    image: "/assets/img/amenities/sports-facilities.webp",
    icon: "fa-basketball",
    title: "Sports Facilities",
    description: "Courts and spaces for sports like badminton, basketball, and other recreational activities to keep you active and engaged.",
  },
];

const safetyAmenities = [
  {
    icon: "fa-shield-halved",
    title: "24/7 Security",
    description: "Advanced security systems with CCTV monitoring and trained personnel ensure a safe and secure environment for residents.",
  },
  {
    icon: "fa-plug",
    title: "Power Backup",
    description: "Uninterrupted power supply for common areas and essential services ensures comfort at all times.",
  },
  {
    icon: "fa-square-parking",
    title: "Ample Parking",
    description: "Well-planned parking facilities for residents and visitors, ensuring convenience and organized vehicle management.",
  },
  {
    icon: "fa-elevator",
    title: "High-Speed Elevators",
    description: "Efficient and modern elevators designed for smooth and quick access across all floors in the development.",
  },
];

const communityAdvantages = [
  "Dedicated spaces for community gatherings and celebrations",
  "Retail outlets for daily convenience",
  "Multi-purpose halls for events and functions",
  "Dedicated walking and cycling paths for daily commute within the campus",
  "Beautifully lit common areas for evening strolls",
];

export default function AmenitiesPage() {
  return (
    <main className="pt-20">
      {/* Schema Markup for SEO */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Amenities", url: `${BASE_URL}/amenities` },
        ]}
      />
      <WebPageSchema
        title="World-Class Amenities | Dwarka Expressway NCR"
        description="Experience a lifestyle designed around comfort, convenience, and luxury at Dwarka Expressway NCR."
        url={`${BASE_URL}/amenities`}
      />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-10 md:pb-40 overflow-hidden text-white">
        <Image
          src="/assets/img/amenities/amenities-hero.webp"
          alt="Luxury Amenities"
          fill
          className="absolute inset-0 w-full h-full object-cover transform scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center h-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6 border border-primary/30 backdrop-blur-md">
              Premium Lifestyle
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight font-heading">
              World-Class <span className="text-primary font-light italic">Amenities</span> for a Modern Lifestyle
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl">
              Experience a lifestyle designed around comfort, convenience, and luxury at Dwarka Expressway NCR. Every amenity is thoughtfully planned to enhance your everyday living—from wellness and recreation to security and community spaces.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center rounded justify-center gap-3 bg-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-dark transition-all duration-300 shadow-lg group"
            >
              <i className="fa-solid fa-download group-hover:-translate-y-1 transition-transform"></i>
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 bg-white border-b border-borderGrey">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-8 tracking-tight font-heading">
            Designed for Comfort, <br /><span className="font-light">Built for Lifestyle</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
            <p>
              Modern living goes beyond just a home—it&apos;s about the lifestyle that comes with it. The amenities at Dwarka Expressway are carefully curated to meet the needs of today&apos;s residents, offering a perfect blend of leisure, wellness, and functionality. From open green spaces to premium indoor facilities, every element is designed to create a balanced and fulfilling living experience.
            </p>
            <p>
              With a focus on quality infrastructure and thoughtful planning, residents can enjoy a self-sustained environment where everything is accessible without stepping too far from home.
            </p>
          </div>
        </div>
      </section>

      {/* LIFESTYLE & RECREATION SECTION */}
      <section className="py-24 bg-lightGrey relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Leisure</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight font-heading">
                Lifestyle & <span className="font-light">Recreation</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifestyleAmenities.map((amenity, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-borderGrey/50">
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <i className={`fa-solid ${amenity.icon}`}></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{amenity.title}</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH & WELLNESS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end flex-row-reverse text-right">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Fitness</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight font-heading">
                Health & <span className="font-light">Wellness</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {wellnessAmenities.map((amenity, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-center p-6 border border-borderGrey rounded-2xl hover:shadow-lg transition-shadow bg-lightGrey/30 group">
                <div className="w-full sm:w-40 h-40 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`fa-solid ${amenity.icon} text-primary text-xl`}></i>
                    <h3 className="text-xl font-bold text-dark">{amenity.title}</h3>
                  </div>
                  <p className="text-slate-500 font-light leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & CONVENIENCE SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')" }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-3">Essentials</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
              Safety & <span className="font-light italic">Convenience</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyAmenities.map((amenity, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary border border-primary/30">
                  <i className={`fa-solid ${amenity.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{amenity.title}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="py-24 bg-lightGrey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/img/amenities/complete-lifestyle.webp"
                alt="Community Lifestyle"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-white rounded-2xl pointer-events-none"></div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Holistic Living</span>
                <h2 className="text-3xl md:text-5xl font-bold text-dark tracking-tight mb-6 font-heading">
                  A Complete Lifestyle <br /><span className="font-light italic">Within Your Reach</span>
                </h2>
                <div className="w-16 h-1 bg-primary"></div>
              </div>
              
              <p className="text-slate-600 font-light text-lg leading-relaxed">
                The amenities at Dwarka Expressway are designed to create a holistic living environment where residents can enjoy comfort, convenience, and a sense of community. From social spaces that bring people together to wellness facilities that promote a healthy lifestyle, every aspect is planned with you in mind.
              </p>

              <ul className="space-y-3">
                {communityAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa-solid fa-circle-check text-primary mt-1 mr-3"></i>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                Schedule a Visit <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary text-white py-16 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <i className="fa-solid fa-house-flag text-5xl mb-6 text-white/80"></i>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight font-heading">
            Experience World-Class Living on Dwarka Expressway
          </h2>
          <p className="text-white text-lg md:text-xl mb-8">
            Book a site visit today and experience these amenities firsthand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-dark text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-dark transition-all hover:scale-105"
          >
            Book Site Visit <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}
