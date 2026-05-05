import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import type { SearchFilters } from "@/lib/types";

export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase();
    const searchParams = request.nextUrl.searchParams;
    
    const filters: SearchFilters = {
      status: searchParams.get("status") || undefined,
      type: searchParams.get("type") || undefined,
      developer: searchParams.get("developer") || undefined,
      budget: searchParams.get("budget") || undefined,
      configuration: searchParams.get("configuration") || undefined,
      search: searchParams.get("search") || undefined,
    };

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const featured = searchParams.get("featured") === "true";
    const popular = searchParams.get("popular") === "true";

    // Build query
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = { isActive: { $ne: false } };

    if (filters.status) {
      query.status = filters.status;
    }

    if (filters.type) {
      query.type = filters.type;
    }

    if (filters.developer) {
      query.developer = { $regex: filters.developer, $options: "i" };
    }

    if (filters.configuration) {
      query.configurations = { $in: [filters.configuration] };
    }

    if (filters.budget) {
      const budgetRanges: Record<string, { min: number; max: number }> = {
        "under-1cr": { min: 0, max: 10000000 },
        "1cr-2cr": { min: 10000000, max: 20000000 },
        "2cr-5cr": { min: 20000000, max: 50000000 },
        "5cr-10cr": { min: 50000000, max: 100000000 },
        "above-10cr": { min: 100000000, max: Infinity },
      };
      const range = budgetRanges[filters.budget];
      if (range) {
        query.priceValue = { $gte: range.min, $lte: range.max };
      }
    }

    if (filters.search) {
      query.$or = [
        { name: { $regex: filters.search, $options: "i" } },
        { developer: { $regex: filters.search, $options: "i" } },
        { location: { $regex: filters.search, $options: "i" } },
        { sector: { $regex: filters.search, $options: "i" } },
      ];
    }

    if (featured) {
      query.isFeatured = true;
    }

    if (popular) {
      query.isPopular = true;
    }

    const skip = (page - 1) * limit;

    const [projects, total] = await Promise.all([
      db
        .collection("projects")
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db.collection("projects").countDocuments(query),
    ]);

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
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
