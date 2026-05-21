import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailClient from "../projects/[slug]/ProjectDetailClient";
import { BreadcrumbSchema, ProjectSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const API_BASE_URL = process.env.BACKEND_API_URL || "https://dwarkaexpresswayncr-backend.onrender.com";
const BASE_URL = "https://www.dwarkaexpresswayncr.com";
// Internal origin used for SSR self-calls (falls back gracefully in Edge)
const INTERNAL_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// List of static routes that should NOT be treated as project slugs
const STATIC_ROUTES = [
  'about',
  'contact',
  'projects',
  'connectivity',
  'amenities',
  'thank-you',
  'admin',
  'new-launch',
  'residential',
  'commercial',
  'ready-to-move',
  '3bhk',
  '4bhk',
  '5bhk',
  '2-bhk-flats-in-gurgaon',
  '3-bhk-flats-in-gurgaon',
  '4-bhk-flats-in-gurgaon',
  'commercial-property-in-gurgaon',
  'ready-to-move-flats-in-gurgaon',
  'residential-projects-on-dwarka-expressway',
  'upcoming-projects-in-gurugram',
];

async function getProject(slug: string) {
  // Don't fetch project data for static routes
  if (STATIC_ROUTES.includes(slug)) {
    return null;
  }

  try {
    // Call our own /api/projects/[slug] route which checks MongoDB first,
    // then falls back to the external API.  We must use an absolute URL
    // for server-side fetch from a Next.js RSC.
    const res = await fetch(
      `${INTERNAL_ORIGIN}/api/projects/${encodeURIComponent(slug)}`,
      {
        next: { revalidate: 300 },
        headers: { Accept: "application/json" },
      }
    );

    if (!res.ok) return null;

    const json = await res.json();

    if (!json.success || !json.data?.project) return null;

    const { project, relatedProjects = [] } = json.data;

    // Auto-populate gallery if empty
    if (!project.gallery || project.gallery.length === 0) {
      project.gallery = project.mainImage ? [project.mainImage] : [];
    }

    return { project, relatedProjects };
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Don't generate metadata for static routes - let their own pages handle it
  if (STATIC_ROUTES.includes(slug)) {
    return {};
  }

  const data = await getProject(slug);
  
  if (!data) {
    return {
      title: "Project Not Found | Dwarka Expressway",
    };
  }

  const { project } = data;

  return {
    title: `${project.name} | ${project.location} | Dwarka Expressway`,
    description: project.shortDescription || project.description?.slice(0, 160) || `${project.name} in ${project.location} - Starting from ${project.price}. Book your site visit today.`,
    keywords: `${project.name}, ${project.developer}, ${project.location}, dwarka expressway, gurgaon real estate`,
    alternates: {
      // Canonical points to root-level URL matching indexed GSC URLs
      canonical: `${BASE_URL}/${slug}`,
    },
    openGraph: {
      title: project.name,
      description: project.shortDescription || `${project.name} by ${project.developer}`,
      images: project.mainImage ? [project.mainImage] : [],
      url: `${BASE_URL}/${slug}`,
    },
  };
}

// Generate dynamic FAQs for each project
function generateProjectFaqs(project: {
  name: string;
  location: string;
  price: string;
  developer?: string;
  possession?: string;
  rera?: string;
  configurations?: string[];
}) {
  return [
    {
      question: `What is the price of ${project.name}?`,
      answer: `${project.name} starts from ${project.price}. Contact us for the latest pricing and offers.`,
    },
    {
      question: `Where is ${project.name} located?`,
      answer: `${project.name} is located in ${project.location}, Dwarka Expressway, Gurgaon.`,
    },
    {
      question: `Who is the developer of ${project.name}?`,
      answer: `${project.name} is developed by ${project.developer || "a reputed developer"}.`,
    },
    {
      question: `What is the possession date of ${project.name}?`,
      answer: `The expected possession for ${project.name} is ${project.possession || "as per project timeline"}.`,
    },
    {
      question: `Is ${project.name} RERA registered?`,
      answer: project.rera 
        ? `Yes, ${project.name} is RERA registered with number ${project.rera}.`
        : `Please contact us for RERA details of ${project.name}.`,
    },
    {
      question: `What configurations are available in ${project.name}?`,
      answer: project.configurations && project.configurations.length > 0
        ? `${project.name} offers ${project.configurations.join(", ")} configurations.`
        : `${project.name} offers various configurations. Contact us for details.`,
    },
  ];
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  // Static routes should be handled by their own pages, not this catch-all
  if (STATIC_ROUTES.includes(slug)) {
    notFound();
  }

  const data = await getProject(slug);

  if (!data) {
    notFound();
  }

  const { project } = data;
  // Canonical URL at root level matches current indexed GSC URLs
  // e.g. https://www.dwarkaexpresswayncr.com/signature-global-sarvam
  const projectUrl = `${BASE_URL}/${slug}`;
  const projectFaqs = generateProjectFaqs(project);

  // Extract price value for schema
  const priceValue = project.priceValue || parseInt(project.price.replace(/[^0-9]/g, "")) * 100000 || 0;

  return (
    <>
      {/* Breadcrumb Schema for Navigation */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${BASE_URL}/` },
          { name: "Projects", url: `${BASE_URL}/projects` },
          { name: project.name, url: projectUrl },
        ]}
      />

      {/* WebPage Schema */}
      <WebPageSchema
        title={`${project.name} | ${project.location} | Dwarka Expressway`}
        description={project.shortDescription || project.description?.slice(0, 160) || `${project.name} in ${project.location} - Starting from ${project.price}`}
        url={projectUrl}
      />

      {/* Project/Product Schema for Rich Results */}
      <ProjectSchema
        name={project.name}
        description={project.description || project.shortDescription || `Premium property in ${project.location}`}
        url={projectUrl}
        image={project.mainImage || `${BASE_URL}/assets/img/Og-Image.png`}
        price={project.price}
        priceValue={priceValue}
        location={project.location}
        developer={project.developer || "Premium Developer"}
        configurations={project.configurations}
        status={project.status}
        possession={project.possession}
        rera={project.rera}
        landArea={project.landSize || project.size}
        amenities={project.amenities}
      />

      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={projectFaqs} />

      {/* Client Component with Interactive Features */}
      <ProjectDetailClient project={data.project} relatedProjects={data.relatedProjects} />
    </>
  );
}
