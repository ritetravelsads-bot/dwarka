import { NextResponse } from "next/server";

const API_BASE_URL = process.env.BACKEND_API_URL || "https://dwarkaexpresswayncr-backend.onrender.com";

export async function GET() {
  try {
    // Fetch all projects and extract unique developers
    const res = await fetch(`${API_BASE_URL}/api/projects?limit=100`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = await res.json();
    const projects = data.data?.projects || data.projects || data || [];
    
    // Extract unique developers
    const developers = [...new Set(
      Array.isArray(projects) 
        ? projects.map((p: { developer?: string }) => p.developer).filter(Boolean)
        : []
    )].sort();

    return NextResponse.json({
      success: true,
      data: developers,
    });
  } catch (error) {
    console.error("Error fetching developers:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch developers", data: [] },
      { status: 500 }
    );
  }
}
