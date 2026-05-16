import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { BreadcrumbSchema, ProjectSchema, FAQSchema, WebPageSchema } from "@/components/seo/SchemaMarkup";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const API_BASE_URL = process.env.BACKEND_API_URL || "https://dwarkaexpresswayncr-backend.onrender.com";
const BASE_URL = "https://www.dwarkaexpresswayncr.com";

async function getProject(slug: string) {
  try {
    // Fetch project from external API (same as PHP version)
    const res = await fetch(`${API_BASE_URL}/api/projects/${encodeURIComponent(slug)}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      return null;
    }

    const project = await res.json();
    
    if (!project || !project.name) {
      return null;
    }

    // Auto-populate gallery if empty (similar to PHP version)
    if (!project.gallery || project.gallery.length === 0) {
      project.gallery = project.mainImage ? [project.mainImage] : [];
    }

    // Get related projects (fetch all and filter client-side)
    let relatedProjects: typeof project[] = [];
    try {
      const relatedRes = await fetch(`${API_BASE_URL}/api/projects?limit=5`, {
        next: { revalidate: 300 },
        headers: { 'Accept': 'application/json' },
      });
      
      if (relatedRes.ok) {
        const relatedData = await relatedRes.json();
        const allProjects = relatedData.data?.projects || relatedData.projects || relatedData || [];
        relatedProjects = Array.isArray(allProjects) 
          ? allProjects.filter((p: typeof project) => 
              p.slug !== project.slug && p._id !== project._id
            ).slice(0, 4)
          : [];
      }
    } catch {
      // Silently fail for related projects
    }

    return {
      project,
      relatedProjects,
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
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

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
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
