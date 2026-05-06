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
    const res = await fetch(`${API_BASE_URL}/api/projects?limit=500`, {
      next: { revalidate: 1800 }, // Revalidate every 30 minutes for fresher data
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
  // Priority: 1.0 = Most important, 0.0 = Least important
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
      priority: 0.95,
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
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/connectivity`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // Fetch all projects dynamically
  const projects = await getAllProjects();
  
  // Generate project pages with proper slugs
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => {
    // Generate slug from name if not available
    const slug = project.slug || project.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    return {
      url: `${BASE_URL}/projects/${slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // High priority for property pages
    };
  });

  // Return combined sitemap sorted by priority
  return [...staticPages, ...projectPages];
}
