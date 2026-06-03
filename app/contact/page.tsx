import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbSchema, WebPageSchema, LocalBusinessSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "Trusted Dwarka Expressway Property Dealers -RERA Verified",
  description:
    "Best deals on Dwarka Expressway Properties with our Trusted Property Dealers. Expert Advice & Massive 2026 Appreciation. Contact us Today for Free Site Visit!",
  keywords: "contact dwarka expressway, book site visit, real estate consultation, dwarka expressway helpline, property enquiry gurugram",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Trusted Dwarka Expressway Property Dealers -RERA Verified",
    description: "Best deals on Dwarka Expressway Properties with our Trusted Property Dealers. Expert Advice & Massive 2026 Appreciation. Contact us Today for Free Site Visit!",
    url: `${BASE_URL}/contact`,
    type: "website",
  },
};

const contactCards = [
  {
    icon: "fa-phone",
    title: "Call Us",
    description: "Talk directly with our property consultants for instant guidance and project details.",
    value: "+91 9873702365",
    href: "tel:+919873702365",
  },
  {
    icon: "fa-envelope",
    title: "Email Us",
    description: "Send us your requirements and receive detailed project information, pricing, and brochures.",
    value: "info@dwarkaexpresswayncr.com",
    href: "mailto:info@dwarkaexpresswayncr.com",
  },
  {
    icon: "fa-clock",
    title: "Office Hours",
    description: "Our team is available to assist you from Monday to Saturday, ensuring quick and reliable support.",
    value: "Mon - Sat, 9:00 AM - 6:00 PM",
    href: null,
  },
];

const benefits = [
  "Latest Price List & Payment Plans",
  "Exclusive Offers & Discounts",
  "Site Visit Assistance",
  "Expert Consultation (No Cost)",
];

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Schema Markup for SEO */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Contact Us", url: `${BASE_URL}/contact` },
        ]}
      />
      <WebPageSchema
        title="Contact Us | Dwarka Expressway NCR"
        description="Book a site visit, request pricing details, and connect with Dwarka Expressway property experts."
        url={`${BASE_URL}/contact`}
      />
      <LocalBusinessSchema />

      {/* HERO SECTION */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a] via-[#f97c44] to-[#fb923c]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              Dwarka Expressway Real Estate
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight font-heading">
              Your Dream Home <br className="hidden md:block" />
              <span className="text-orange-200">Expertly Curated.</span>
            </h1>

            <p className="text-white/90 mt-6 max-w-2xl text-base md:text-xl leading-relaxed font-light">
              Navigate the Dwarka Expressway market with confidence. Get access to <span className="font-semibold text-white underline decoration-orange-400 underline-offset-4">exclusive pre-launch pricing</span> and verified project insights from the region&apos;s top consultants.
            </p>

            <div className="mt-10 flex flex-wrap gap-y-4 gap-x-8 border-t border-white/20 pt-8">
              <div className="flex items-center space-x-2">
                <span className="text-orange-300 text-lg">&#9733;</span>
                <span className="text-white text-sm md:text-base font-medium">1,000+ Happy Families</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-300 text-lg">&#10004;</span>
                <span className="text-white text-sm md:text-base font-medium">RERA Verified Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-300 text-lg">&#9889;</span>
                <span className="text-white text-sm md:text-base font-medium">Instant Expert Callback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS SECTION */}
      <section className="py-16 px-6 bg-white border-b border-borderGrey">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="group bg-lightGrey rounded-2xl p-7 border border-borderGrey shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary mb-4">
                <i className={`fa-solid ${card.icon} text-xl`}></i>
              </div>
              <p className="text-primary font-semibold uppercase text-xs tracking-wider mb-2">{card.title}</p>
              <p className="text-slate-700 mb-3">{card.description}</p>
              {card.href ? (
                <a href={card.href} className={`${card.icon === "fa-phone" ? "text-primary text-2xl font-extrabold hover:underline" : "text-dark text-lg font-bold hover:text-primary transition-colors"}`}>
                  {card.value}
                </a>
              ) : (
                <p className="text-dark text-lg font-bold">{card.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-dark/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-3 tracking-tight">
                Book a Free Site Visit or Get Best Price Deals
              </h2>
              <p className="text-slate-600">
                Fill in your details and our experts will connect with you shortly to assist with the best available options on Dwarka Expressway.
              </p>
            </div>

            <ContactForm source="contact-page" variant="modal" />
          </div>

          {/* Side Content */}
          <div className="space-y-6">
            <div className="bg-white/95 rounded-2xl border border-white/20 shadow-xl p-7">
              <h3 className="text-2xl font-bold text-dark mb-4 font-heading">What You&apos;ll Get</h3>
              <ul className="space-y-3 text-slate-700">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-primary mt-1"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark text-white rounded-2xl border border-white/10 shadow-xl p-7">
              <h3 className="text-2xl font-bold mb-3 font-heading">Limited Time Offers Available</h3>
              <p className="text-white/80 leading-relaxed">
                Due to high demand in Dwarka Expressway projects, prices are increasing rapidly. Connect with us today to secure the best deals and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STILL CONFUSED SECTION */}
      <section className="py-16 px-6 bg-lightGrey border-t border-borderGrey">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-borderGrey p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading">Still Confused? Let Our Experts Help You</h2>
          <p className="text-slate-600 mt-4 max-w-4xl">
            Whether you are buying your first home or investing, our team will guide you at every step to make the right decision.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+919873702365"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              <i className="fa-solid fa-phone"></i>
              Call Now
            </a>
            <a
              href="https://wa.me/919873702365"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
