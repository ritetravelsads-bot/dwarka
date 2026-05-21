import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const EXTERNAL_API = process.env.BACKEND_API_URL || "https://dwarkaexpresswayncr-backend.onrender.com";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Helper: fetch related projects from a list
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function pickRelated(allProjects: any[], currentSlug: string, currentId?: string) {
    return allProjects
      .filter((p) => p.slug !== currentSlug && String(p._id) !== String(currentId))
      .slice(0, 4);
  }

  // ── 1. Try MongoDB first by slug ────────────────────────────────────────────
  try {
    const client = await clientPromise;
    const db = client.db("dwarka");

    const project = await db.collection("projects").findOne({ slug });

    if (project) {
      // Auto-populate gallery if empty
      if (!project.gallery || project.gallery.length === 0) {
        project.gallery = project.mainImage ? [project.mainImage] : [];
      }

      // Related projects from same MongoDB collection
      const relatedDocs = await db
        .collection("projects")
        .find({ slug: { $ne: slug } })
        .sort({ createdAt: -1 })
        .limit(5)
        .toArray();

      return NextResponse.json({
        success: true,
        data: {
          project,
          relatedProjects: pickRelated(relatedDocs, slug, String(project._id)),
        },
      });
    }
  } catch (dbError) {
    console.error("[api/projects/slug] MongoDB error:", dbError);
  }

  // ── 2. Fallback to external API ─────────────────────────────────────────────
  try {
    const res = await fetch(
      `${EXTERNAL_API}/api/projects/${encodeURIComponent(slug)}`,
      { headers: { Accept: "application/json" }, next: { revalidate: 300 } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    const project = await res.json();

    if (!project || !project.name) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    // Get related projects from external API
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let relatedProjects: any[] = [];
    try {
      const relatedRes = await fetch(`${EXTERNAL_API}/api/projects?limit=5`, {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
      });
      if (relatedRes.ok) {
        const relatedData = await relatedRes.json();
        const all = relatedData.data?.projects || relatedData.projects || relatedData || [];
        relatedProjects = Array.isArray(all) ? pickRelated(all, project.slug, project._id) : [];
      }
    } catch {
      // silently ignore related projects failure
    }

    return NextResponse.json({ success: true, data: { project, relatedProjects } });
  } catch (error) {
    console.error("[api/projects/slug] External API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}
