import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema, WebPageSchema, FAQSchema, ItemListSchema } from "@/components/seo/SchemaMarkup";

const BASE_URL = "https://www.dwarkaexpresswayncr.com";

export const metadata: Metadata = {
  title: "Dwarka Expressway Map & Connectivity | Prime Real Estate in Delhi NCR",
  description:
    "Explore the Dwarka Expressway map with projects, seamless connectivity to IGI Airport, NH-48, and luxury apartments on Dwarka Expressway. Discover ready to move flats and upcoming commercial projects in Gurgaon.",
  keywords: "dwarka expressway map, connectivity, IGI airport access, NH-48, metro connectivity, gurugram projects, delhi ncr real estate",
  alternates: {
    canonical: `${BASE_URL}/connectivity`,
  },
  openGraph: {
    title: "Dwarka Expressway Map & Connectivity | Prime Real Estate in Delhi NCR",
    description: "Explore the Dwarka Expressway map with projects, seamless connectivity to IGI Airport, NH-48.",
    url: `${BASE_URL}/connectivity`,
    type: "website",
  },
};

const projects = [
  { name: "Signature Global Sarvam", sector: "Sector 37D", price: "2.81 Cr*", occupancy: "70%", tag: "Branded Residences", dxp_conn: "Located just 2 mins from the Dwarka Expressway cloverleaf, offering rapid, signal-free access to NH-48." },
  { name: "Whiteland Westin Residences", sector: "Sector 103", price: "5.5 Cr*", occupancy: "65%", tag: "Forest-themed Living", dxp_conn: "Direct frontage on Dwarka Expressway, ensuring a smooth 15-minute drive directly to IGI Airport." },
  { name: "Godrej Vrikshya", sector: "Sector 103", price: "3.6 Cr*", occupancy: "82%", tag: "High-rise Development", dxp_conn: "Zero-kilometer access to the main carriageway, providing seamless transit to upcoming commercial projects in Gurgaon." },
  { name: "Signature Global De Luxe DXP", sector: "Sector 37D", price: "3.5 Cr*", occupancy: "98%", tag: "Near Completion", dxp_conn: "Strategically placed near the CPR and Dwarka Expressway junction for multi-directional city connectivity." },
  { name: "Hero Homes The Palatial", sector: "Sector 104", price: "1.8 Cr*", occupancy: "92%", tag: "Possession (Dec 2026)", dxp_conn: "Sits right along the expressway, offering rapid connectivity to the Delhi border and nearby social infrastructure." },
  { name: "M3M Capital", sector: "Sector 113", price: "5.2 Cr*", occupancy: "88%", tag: "Ultra-Luxury Living", dxp_conn: "First sector on the Gurgaon side, providing literally zero-minute access to Delhi via the expressway." },
  { name: "Elan The Presidential", sector: "Sector 106", price: "6.5 Cr*", occupancy: "78%", tag: "Under Construction (2028)", dxp_conn: "Prime expressway frontage with upcoming infrastructure and quick routes to Sector 21 Metro." },
  { name: "M3M Crown", sector: "Sector 111", price: "4.5 Cr*", occupancy: "85%", tag: "Under Construction (2027)", dxp_conn: "Bordering Delhi, offering one of the shortest commute times to Yashobhoomi (IICC) and the airport." },
  { name: "Smartworld One DXP", sector: "Sector 113", price: "3.5 Cr*", occupancy: "90%", tag: "Exclusive Launch", dxp_conn: "Immediate Dwarka Express Highway access, perfectly positioning it between Gurugram IT hubs and Delhi." },
  { name: "Puri Diplomatic Residences", sector: "Sector 111", price: "4.2 Cr*", occupancy: "60%", tag: "Premium High-rise", dxp_conn: "Located at the Delhi-Gurgaon toll plaza equivalent, making interstate travel entirely frictionless." },
  { name: "Sobha Altus", sector: "Sector 106", price: "5.0 Cr*", occupancy: "55%", tag: "Ultra-Luxury Living", dxp_conn: "Direct access to the expressway service lanes, bypassing internal sector traffic entirely." },
  { name: "BPTP Amstoria Verti Greens", sector: "Sector 102", price: "3.5 Cr*", occupancy: "12%", tag: "Branded Residences", dxp_conn: "Connected via a wide sector road directly merging onto the Dwarka Expressway within 2 minutes." },
];

// FAQs specific to connectivity page
const connectivityFaqs = [
  {
    question: "How long is Dwarka Expressway?",
    answer: "Dwarka Expressway is a 27.6 km, 16-lane highway connecting Delhi to Gurgaon.",
  },
  {
    question: "How far is Dwarka Expressway from IGI Airport?",
    answer: "Dwarka Expressway offers direct connectivity to IGI Airport in just 15-20 minutes via signal-free roads.",
  },
  {
    question: "Which sectors are best connected on Dwarka Expressway?",
    answer: "Sectors 113, 112, 111, 106, 103, and 102 have the best connectivity to Delhi and Gurgaon.",
  },
  {
    question: "Is metro connectivity available on Dwarka Expressway?",
    answer: "Metro extension is planned and will connect Dwarka Expressway to Delhi Metro network.",
  },
  {
    question: "What is the route of Dwarka Expressway?",
    answer: "Dwarka Expressway runs from Shiv Murti (Mahipalpur, Delhi) to Kherki Daula Toll Plaza (Gurgaon).",
  },
];

// Generate project list for schema
const projectListForSchema = projects.map((project) => ({
  name: project.name,
  url: `${BASE_URL}/projects/${makeSlug(project.name)}`,
  image: `${BASE_URL}/assets/img/default-project.webp`,
  price: project.price,
}));

function makeSlug(name: string) {
  return name.toLowerCase().trim().replace(/[^A-Za-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export default function ConnectivityPage() {
  return (
    <main className="text-dark antialiased pt-20">
      {/* Schema Markup for SEO */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Connectivity", url: `${BASE_URL}/connectivity` },
        ]}
      />
      <WebPageSchema
        title="Dwarka Expressway Map & Connectivity | Prime Real Estate in Delhi NCR"
        description="Explore the Dwarka Expressway map with projects, seamless connectivity to IGI Airport, NH-48."
        url={`${BASE_URL}/connectivity`}
      />
      <FAQSchema faqs={connectivityFaqs} />
      <ItemListSchema projects={projectListForSchema} />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-10 md:pb-32 bg-gradient-to-br from-slate-900 via-dark to-slate-800 overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary blur-[100px]"></div>
          <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/50 blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white uppercase tracking-[0.2em] text-xs font-bold mb-6 border border-white/20 backdrop-blur-sm">
              Real Estate Dwarka Expressway
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight font-heading">
              Seamless <span className="text-primary font-light italic">Connectivity</span> & Projects Map
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12 text-center">
              Positioned at one of the most strategic locations, the Dwarka Express Highway is redefining real estate. Explore the ultimate Dwarka Expressway route map and discover the finest luxury apartments on Dwarka Expressway.
            </p>
            
            <a
              href="#projects-map"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 text-sm font-bold tracking-wide uppercase rounded hover:bg-white hover:text-dark transition-all duration-300 shadow-lg"
            >
              View Connectivity Map
              <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section id="projects-map" className="py-24 bg-white border-b border-borderGrey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 tracking-tight font-heading">
              Dwarka Expressway Map <span className="font-light">With Projects</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              Visualize your next investment with our comprehensive map. As the <strong>Dwarka Expressway completion date</strong> finalizes, checking the <strong>sector 103 gurgaon map</strong> or <strong>sector 102 gurgaon map</strong> highlights the immense potential of this <strong>Gurgaon smart city</strong> corridor connecting straight to the Delhi border.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-borderGrey bg-lightGrey p-2 md:p-4">
            <Image
              src="/assets/img/dxp-conn-map.png"
              alt="Dwarka Expressway route map showcasing luxury apartments on Dwarka Expressway"
              width={1400}
              height={800}
              className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 border border-primary/20">
              Project Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 tracking-tight font-heading">
              Top 10 Residential Projects in Gurgaon <span className="font-light">& Beyond</span>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              Browse the finest <strong>residential apartments on Dwarka Expressway</strong>. Every project is uniquely connected to the highway, offering distinct advantages for commuters and investors alike. Discover <strong>Dwarka express highway projects</strong>, pricing, and exact connectivity details below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((prop, index) => {
              const urlSlug = makeSlug(prop.name);
              return (
                <div
                  key={index}
                  className="bg-white border border-borderGrey hover:border-primary/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-lightGrey text-dark text-xs font-bold px-3 py-1 rounded-md border border-borderGrey/80">
                        {prop.sector}
                      </span>
                      <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-md">
                        {prop.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                      {prop.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <div className="flex items-center gap-1">
                        <i className="fa-solid fa-tag text-primary"></i> {prop.price}
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="fa-solid fa-building-circle-check text-primary"></i> {prop.occupancy} Occupancy
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-borderGrey border-dashed">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Expressway Connectivity:
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {prop.dxp_conn}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-lightGrey border-t border-borderGrey/50 text-center">
                    <Link
                      href={`/projects/${urlSlug}`}
                      className="text-sm font-bold text-primary hover:text-dark transition-colors uppercase tracking-wide flex items-center justify-center gap-2"
                    >
                      View Details <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION SECTION */}
      <section className="py-16 bg-slate-50 border-t border-borderGrey">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-10 text-dark font-heading">Quick Navigation & Neighborhood Insights</h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-600">
            <div className="space-y-4">
              <p><strong>Hotspots to Watch:</strong> Investors are closely tracking the <strong>Sector 88A Gurgaon map</strong>, <strong>Sector 89 Gurgaon map</strong>, and <strong>Sector 80 Gurgaon</strong> for upcoming township developments. Projects like <strong>Smart World One DXP</strong>, <strong>Lotus Homes Dwarka Expressway</strong>, and <strong>ATS Dwarka Expressway</strong> are drawing massive attention.</p>
              <p><strong>Luxury Enclaves:</strong> Properties such as <strong>Elan The Presidential</strong>, <strong>Sobha International City Sector 109</strong>, and <strong>Mahindra Luminare</strong> set the benchmark. Meanwhile, <strong>The Landmark Apartments</strong> and <strong>BPTP Park</strong> offer exceptional living standards.</p>
              <p><strong>Pin Codes & Zones:</strong> Navigating the area? The <strong>Sec 102 Gurgaon pin code</strong> (122505) covers major hubs including <strong>BPTP Amstoria Sector 102</strong> and <strong>Shapoorji Pallonji Joyville Sector 102</strong>.</p>
            </div>
            <div className="space-y-4">
              <p><strong>Affordable & Ready to Move:</strong> Searching for <strong>affordable flats in Dwarka Expressway</strong>? Areas near <strong>Garden City Gurgaon</strong> offer great deals. There&apos;s a wide variety of <strong>ready to move apartments in Dwarka Expressway</strong> including <strong>DLF Skycourt Sector 86</strong> and <strong>Skycourt Gurgaon</strong>.</p>
              <p><strong>Emerging Opportunities:</strong> Keep an eye out for <strong>Adani plots on Dwarka Expressway</strong>, <strong>One Dwarka</strong>, and <strong>Signature Tower 2</strong>. Engaging with trusted <strong>Dwarka Expressway property dealers</strong> is highly recommended to secure the best <strong>Dwarka Expressway flats price</strong>.</p>
              <p><strong>Featured Developments:</strong> Don&apos;t miss <strong>Puri Emerald Bay Sector 104</strong>, <strong>M3M Sector 111 Dwarka Expressway</strong>, and <strong>Godrej Vriksha Sector 103</strong> for prime <strong>new projects in Dwarka</strong> and NCR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')" }}></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight font-heading">
            Ready to Find Your <span className="text-primary font-light italic">Dream Home?</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12">
            Whether you are seeking <strong>upcoming affordable housing projects in Gurgaon</strong>, tracking <strong>Dwarka Expressway projects ready to move</strong>, or exploring <strong>new township</strong> launches, our experts are here to guide you.
            <br /><br />
            Secure your site visit today and get complete <strong>Dwarka Expressway project details</strong>.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 text-base font-bold tracking-wide uppercase hover:bg-white hover:text-dark transition-all duration-300 shadow-xl shadow-primary/20"
          >
            Contact Real Estate Experts
            <i className="fa-regular fa-calendar-check"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}
