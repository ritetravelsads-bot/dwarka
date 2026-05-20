import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.BACKEND_API_URL || "https://dwarkaexpresswayncr-backend.onrender.com";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // Fetch from external API
    const res = await fetch(`${API_BASE_URL}/api/projects/${encodeURIComponent(slug)}`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

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

    // Get related projects
    let relatedProjects: typeof project[] = [];
    try {
      const relatedRes = await fetch(`${API_BASE_URL}/api/projects?limit=5`, {
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 300 },
      });
      
      if (relatedRes.ok) {
        const relatedData = await relatedRes.json();
        const allProjects = relatedData.data?.projects || relatedData.projects || relatedData || [];
        relatedProjects = Array.isArray(allProjects)
          ? allProjects.filter((p: typeof project) => p.slug !== project.slug && p._id !== project._id).slice(0, 4)
          : [];
      }
    } catch {
      // Silently fail for related projects
    }

    return NextResponse.json({
      success: true,
      data: {
        project,
        relatedProjects,
      },
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}
