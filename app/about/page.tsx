import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, WebPageSchema, ServiceSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "Best Top Real Estate Agents – Residential, Commercial & SCO",
  description:
    "Get Expert Guidance from Award-Winning Top Real Estate Agents offering only RERA-approved Projects on Dwarka Expressway.  Contact us for a VIP tour!",
  keywords: "dwarka expressway real estate, gurugram property advisor, real estate consultant, dwarka expressway projects, trusted real estate",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Dwarka Expressway Real Estate Advisory",
    description: "Trusted Local Expertise for Confident Property Decisions. Over 6 years of real estate experience on Dwarka Expressway, Gurugram.",
    url: `${BASE_URL}/about`,
    type: "website",
  },
};

const whyChooseUs = [
  {
    icon: "fa-location-crosshairs",
    title: "Focused Expertise",
    description: "Deep knowledge on Dwarka Expressway and nearby sectors.",
  },
  {
    icon: "fa-indian-rupee-sign",
    title: "Transparency",
    description: "Clear explanations of real prices, not inflated quotes.",
  },
  {
    icon: "fa-hard-hat",
    title: "Honest Insights",
    description: "Transparent details on construction progress and project quality.",
  },
  {
    icon: "fa-scale-balanced",
    title: "Market Reality",
    description: "Guidance based on market reality, not builder promotions.",
  },
];

const coreValues = [
  {
    icon: "fa-regular fa-eye",
    title: "Clarity",
    description: "We believe buyers should clearly understand pricing, timelines, and risks before making any decision.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Trust",
    description: "Every project we recommend is legally verified and RERA compliant.",
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "Experience",
    description: "Our advice is shaped by over two decades of real, on-ground experience in the Gurugram property market.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Client-First",
    description: "We focus on what is right for the buyer — not what is easy to sell.",
  },
];

const expertise = [
  "Dwarka Expressway residential and investment properties",
  "Builder track records and delivery credibility",
  "Sector-wise price trends and appreciation potential",
  "Future infrastructure and connectivity developments",
];

export default function AboutPage() {
  return (
    <main className="font-sans text-dark antialiased bg-white">
      {/* Schema Markup for SEO */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "About Us", url: `${BASE_URL}/about` },
        ]}
      />
      <WebPageSchema
        title="About Us | Dwarka Expressway Real Estate Advisory"
        description="Trusted Local Expertise for Confident Property Decisions. Over 6 years of real estate experience on Dwarka Expressway, Gurugram."
        url={`${BASE_URL}/about`}
      />
      <ServiceSchema />

      {/* HEADER SECTION */}
      <header className="w-full bg-white border-b border-borderGrey pt-20 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <span className="inline-flex items-center gap-2 text-orange-700 font-bold tracking-wider uppercase mb-6 text-sm md:text-base bg-primary/10 px-4 py-2 rounded-full">
            <i className="fa-solid fa-map-location-dot"></i> Dwarka Expressway Real Estate Advisory
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-dark font-heading">
            Trusted Local Expertise for <br className="hidden md:block" />
            Confident Property Decisions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Dwarka Expressway is not just another real estate destination in Gurugram — it is a growth corridor that is shaping the future of the region.
          </p>
        </div>
      </header>

      {/* OUR STORY SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark font-heading">Our Story</h2>
              <p>
                With over 6 years of real estate experience, our journey has been built on working closely with homebuyers and investors across the Gurugram real estate market.
              </p>
              <p>
                Over the years, we noticed a consistent problem: people were being shown multiple properties, but very few were being guided with clarity and honesty. There was too much noise, too much sales-driven advice, and very little real understanding of pricing, construction quality, or long-term value.
              </p>
              <div className="flex items-start gap-4 p-6 bg-lightGrey rounded-xl border-l-4 border-primary">
                <i className="fa-solid fa-quote-left text-primary text-2xl mt-1"></i>
                <p className="font-medium text-dark italic">
                  To bridge this gap, we created a platform dedicated exclusively to Dwarka Expressway property.
                </p>
              </div>
              <p>
                Today, we support families in finding homes that truly fit their future and help investors identify Dwarka Expressway real estate opportunities with strong long-term potential.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl transform rotate-3"></div>
              <Image
                src="/assets/img/about.webp"
                alt="Modern Building Architecture"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <p className="text-primary font-bold text-lg mb-1">20+ Years</p>
                <p className="text-gray-600 text-sm">Of experience in the Gurugram property market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#f14201 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Why Choose Us</h2>
            <p className="text-gray-400 text-lg">
              We work closely with the Dwarka Expressway market to ensure that every client receives clear, practical guidance rather than sales pressure. Clients choose us because we offer:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-16 md:py-24 bg-lightGrey">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark font-heading">Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our work is driven by a few simple principles that shape every interaction:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-transparent hover:border-borderGrey flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <i className={`${value.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Our Expertise</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize exclusively in Dwarka Expressway real estate, allowing us to provide deep, location-specific insights that general portals often miss.
              </p>
              
              <div className="bg-lightGrey p-8 rounded-2xl border border-borderGrey">
                <ul className="space-y-4">
                  {expertise.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fa-solid fa-circle-check text-primary mt-1 mr-3"></i>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Gurugram Skyline"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary text-white py-16 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <i className="fa-solid fa-handshake text-5xl mb-6 text-white/80"></i>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight font-heading">
            Trusted Local Expertise. Verified Projects. Honest Guidance.
          </h2>
          <p className="text-white text-lg md:text-xl mb-8">
            Whether you are looking for a home or exploring Gurugram real estate investment, we ensure your decision is safe, transparent, and future-ready.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-dark text-primary font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
          >
            Contact Us <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
          <p className="mt-8 text-sm text-white">
            Helping you make confident property decisions on Dwarka Expressway, Gurugram.
          </p>
        </div>
      </section>
    </main>
  );
}
