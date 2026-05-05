import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const db = await getDatabase();
    
    // Try to find by slug first, then by ID
    let project = await db.collection("projects").findOne({ slug });
    
    if (!project && ObjectId.isValid(slug)) {
      project = await db.collection("projects").findOne({ _id: new ObjectId(slug) });
    }

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    // Get related projects (same type or developer)
    const relatedProjects = await db
      .collection("projects")
      .find({
        _id: { $ne: project._id },
        isActive: { $ne: false },
        $or: [
          { type: project.type },
          { developer: project.developer },
        ],
      })
      .limit(4)
      .toArray();

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
