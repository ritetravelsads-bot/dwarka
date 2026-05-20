import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * This page redirects from /projects/[slug] to /[slug] for SEO purposes.
 * The canonical URLs are at root level (e.g., /whiteland-westin-residences)
 * to match the sitemap and Google Search Console indexed URLs.
 * 
 * This redirect ensures backward compatibility for any old links pointing to /projects/[slug].
 */
export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Permanent redirect (308) to root-level URL for SEO
  // e.g. /projects/whiteland-westin-residences -> /whiteland-westin-residences
  redirect(`/${slug}`);
}
