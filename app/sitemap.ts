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

interface BlogPost {
  slug: string;
  updatedAt?: string;
  createdAt?: string;
  publication_date?: string;
}

async function getAllProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/projects?limit=500`, {
      next: { revalidate: 1800 },
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

async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blog/posts?limit=500`, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    const posts = data.posts || data.data?.posts || data || [];
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages — URLs exactly matching the indexed Google sitemap
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects-search`,
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
    // Category/filter pages indexed on Google
    {
      url: `${BASE_URL}/2-bhk-flat-in-gurgaon`,
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
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ready-to-move-flats-in-gurgaon`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
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
    // Blog index page — already indexed on Google
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Project pages — use TOP-LEVEL slugs (e.g. /godrej-vrikshya) matching the Google-indexed PHP URLs
  const projects = await getAllProjects();
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => {
    const slug = project.slug || project.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    return {
      // Top-level slug — matches the indexed URLs like /godrej-vrikshya, /m3m-capital, etc.
      url: `${BASE_URL}/${slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    };
  });

  // Blog post pages — /blogs/{slug} matching the Google-indexed WordPress blog URLs
  const blogPosts = await getAllBlogPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: post.updatedAt
      ? new Date(post.updatedAt)
      : post.publication_date
      ? new Date(post.publication_date)
      : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
