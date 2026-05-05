import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDatabase();
    
    // Get unique developers from projects
    const developers = await db
      .collection("projects")
      .distinct("developer", { isActive: { $ne: false } });

    return NextResponse.json({
      success: true,
      data: developers.sort(),
    });
  } catch (error) {
    console.error("Error fetching developers:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch developers" },
      { status: 500 }
    );
  }
}
