import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const EXTERNAL_API = process.env.BACKEND_API_URL || "https://dwarkaexpresswayncr-backend.onrender.com";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") || "12", 10);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "";
  const type = searchParams.get("type") || "";
  const developer = searchParams.get("developer") || "";

  // ── 1. Try MongoDB first ────────────────────────────────────────────────────
  try {
    const client = await clientPromise;
    const db = client.db("dwarka");

    // Build query filter
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = {};
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { developer: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { sector: { $regex: search, $options: "i" } },
      ];
    }
    if (status) filter.status = { $regex: status, $options: "i" };
    if (type)   filter.type   = { $regex: type,   $options: "i" };
    if (developer) filter.developer = { $regex: developer, $options: "i" };

    const total = await db.collection("projects").countDocuments(filter);
    const skip  = (page - 1) * limit;

    const projects = await db
      .collection("projects")
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    // If MongoDB has data, return it
    if (projects.length > 0 || total > 0) {
      return NextResponse.json({
        success: true,
        data: {
          projects,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        },
      });
    }
  } catch (dbError) {
    console.error("[api/projects] MongoDB error, falling back to external API:", dbError);
  }

  // ── 2. Fallback to external API if MongoDB returned nothing ─────────────────
  try {
    const apiUrl = new URL(`${EXTERNAL_API}/api/projects`);
    apiUrl.searchParams.set("limit", String(limit));
    apiUrl.searchParams.set("page",  String(page));
    if (search)    apiUrl.searchParams.set("search",    search);
    if (status)    apiUrl.searchParams.set("status",    status);
    if (type)      apiUrl.searchParams.set("type",      type);
    if (developer) apiUrl.searchParams.set("developer", developer);

    const res = await fetch(apiUrl.toString(), {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`External API returned ${res.status}`);

    const data = await res.json();

    let projects: unknown[] = [];
    let pagination = { total: 0, page, limit, totalPages: 1 };

    if (Array.isArray(data)) {
      projects = data;
      pagination.total = data.length;
      pagination.totalPages = Math.ceil(data.length / limit);
    } else if (data.data?.projects) {
      projects   = data.data.projects;
      pagination = data.data.pagination || pagination;
    } else if (data.projects) {
      projects   = data.projects;
      pagination = data.pagination || pagination;
    }

    return NextResponse.json({ success: true, data: { projects, pagination } });
  } catch (extError) {
    console.error("[api/projects] External API error:", extError);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects",
        data: { projects: [], pagination: { total: 0, page, limit, totalPages: 1 } },
      },
      { status: 500 }
    );
  }
}
