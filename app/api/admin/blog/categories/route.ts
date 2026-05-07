import { ObjectId } from "mongodb"
import { connectToDatabase } from "@/lib/mongodb"
import { requireAdmin } from "@/lib/auth"
import { slugify } from "@/lib/utils"

export async function GET() {
  try {
    await requireAdmin()

    const { db } = await connectToDatabase()
    const collection = db.collection("blog_categories")

    const categories = await collection.find({}).sort({ name: 1 }).toArray()

    return new Response(
      JSON.stringify({
        categories: categories.map((cat) => ({
          ...cat,
          _id: cat._id.toString(),
        })),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unauthorized"
    const statusCode = errorMessage === "Unauthorized" ? 401 : 500

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function POST(request: Request) {
  try {
    await requireAdmin()

    const body = await request.json()
    const { name } = body

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Category name is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      )
    }

    const { db } = await connectToDatabase()
    const collection = db.collection("blog_categories")

    const slug = slugify(name.trim())

    // Check if category already exists
    const existingCategory = await collection.findOne({
      $or: [
        { name: { $regex: `^${name.trim()}$`, $options: "i" } },
        { slug: slug },
      ],
    })

    if (existingCategory) {
      return new Response(
        JSON.stringify({ error: "Category already exists" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      )
    }

    const result = await collection.insertOne({
      name: name.trim(),
      slug: slug,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return new Response(
      JSON.stringify({
        success: true,
        message: "Category created successfully",
        category: {
          _id: result.insertedId.toString(),
          name: name.trim(),
          slug: slug,
        },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error("[Blog] Error creating blog category:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to create category"
    const statusCode = errorMessage === "Unauthorized" ? 401 : 500

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function DELETE(request: Request) {
  try {
    await requireAdmin()

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return new Response(JSON.stringify({ error: "Category ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const { db } = await connectToDatabase()
    const collection = db.collection("blog_categories")

    const result = await collection.deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Category not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Category deleted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error("[Blog] Error deleting blog category:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to delete category"
    const statusCode = errorMessage === "Unauthorized" ? 401 : 500

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    })
  }
}
