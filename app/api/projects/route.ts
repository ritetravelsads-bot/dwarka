import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.BACKEND_API_URL || "https://dwarkaexpresswayncr-backend.onrender.com";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit") || "12";
    const page = searchParams.get("page") || "1";
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const type = searchParams.get("type") || "";
    const developer = searchParams.get("developer") || "";
    const configuration = searchParams.get("configuration") || "";

    // Fetch from external API
    const apiUrl = new URL(`${API_BASE_URL}/api/projects`);
    apiUrl.searchParams.set("limit", limit);
    apiUrl.searchParams.set("page", page);
    if (search) apiUrl.searchParams.set("search", search);
    if (status) apiUrl.searchParams.set("status", status);
    if (type) apiUrl.searchParams.set("type", type);
    if (developer) apiUrl.searchParams.set("developer", developer);
    if (configuration) apiUrl.searchParams.set("configuration", configuration);

    const res = await fetch(apiUrl.toString(), {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 60 }, // Cache for 1 minute
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = await res.json();
    
    // Handle different response formats
    let projects = [];
    let pagination = { total: 0, page: 1, limit: 12, totalPages: 1 };
    
    if (Array.isArray(data)) {
      projects = data;
      pagination.total = data.length;
      pagination.totalPages = Math.ceil(data.length / parseInt(limit));
    } else if (data.data?.projects) {
      projects = data.data.projects;
      pagination = data.data.pagination || pagination;
    } else if (data.projects) {
      projects = data.projects;
      pagination = data.pagination || pagination;
    }

    return NextResponse.json({
      success: true,
      data: {
        projects,
        pagination,
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects", data: { projects: [], pagination: { total: 0, page: 1, limit: 12, totalPages: 1 } } },
      { status: 500 }
    );
  }
}
