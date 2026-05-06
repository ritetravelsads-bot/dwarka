import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const API_BASE_URL = process.env.BACKEND_API_URL || "https://dwarkaexpresswayncr-backend.onrender.com";

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
    openGraph: {
      title: project.name,
      description: project.shortDescription || `${project.name} by ${project.developer}`,
      images: project.mainImage ? [project.mainImage] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getProject(slug);

  if (!data) {
    notFound();
  }

  return <ProjectDetailClient project={data.project} relatedProjects={data.relatedProjects} />;
}
