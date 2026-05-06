import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dwarkaexpresswayncr.com';
const API_BASE_URL = process.env.BACKEND_API_URL || 'https://dwarkaexpresswayncr-backend.onrender.com';

interface Project {
  _id: string;
  slug?: string;
  name: string;
  updatedAt?: string;
  createdAt?: string;
}

async function getAllProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/projects?limit=100`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      return [];
    }
    
    const data = await res.json();
    const projects = data.data?.projects || data.projects || data || [];
    return Array.isArray(projects) ? projects : [];
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/amenities`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/connectivity`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Fetch all projects dynamically
  const projects = await getAllProjects();
  
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug || project._id}`,
    lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
