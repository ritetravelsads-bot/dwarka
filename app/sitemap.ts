import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.dwarkaexpresswayncr.com';
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
      next: { revalidate: 1800 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const projects = data.data?.projects || data.projects || data || [];
    return Array.isArray(projects) ? projects : [];
  } catch {
    return [];
  }
}

function makeSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages — URLs must match exactly what is indexed in GSC
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // /projects-search is the indexed URL for the projects listing page
    // (matches the old PHP /projects-search.php route)
    {
      url: `${BASE_URL}/projects-search`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    // Project category pages
    {
      url: `${BASE_URL}/new-launch`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/residential`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/commercial`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ready-to-move`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/connectivity`,
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
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // SEO landing pages
    {
      url: `${BASE_URL}/2-bhk-flats-in-gurgaon`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/3-bhk-flats-in-gurgaon`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/4-bhk-flats-in-gurgaon`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/commercial-property-in-gurgaon`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/ready-to-move-flats-in-gurgaon`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/residential-projects-on-dwarka-expressway`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/upcoming-projects-in-gurugram`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // Fetch all projects from the API
  const projects = await getAllProjects();

  // Project pages — URLs at ROOT level matching current indexed GSC URLs
  // e.g. https://www.dwarkaexpresswayncr.com/signature-global-sarvam
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => {
    const slug = project.slug || makeSlug(project.name);
    return {
      url: `${BASE_URL}/${slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [...staticPages, ...projectPages];
}
