import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getProject(slug: string) {
  const db = await getDatabase();
  
  // Try to find by slug first, then by ID
  let project = await db.collection("projects").findOne({ slug });
  
  if (!project && ObjectId.isValid(slug)) {
    project = await db.collection("projects").findOne({ _id: new ObjectId(slug) });
  }

  if (!project) return null;

  // Get related projects
  const relatedProjects = await db
    .collection("projects")
    .find({
      _id: { $ne: project._id },
      isActive: { $ne: false },
      $or: [{ type: project.type }, { developer: project.developer }],
    })
    .limit(4)
    .toArray();

  return {
    project: JSON.parse(JSON.stringify(project)),
    relatedProjects: JSON.parse(JSON.stringify(relatedProjects)),
  };
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
