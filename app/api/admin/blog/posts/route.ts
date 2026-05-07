import { connectToDatabase } from "@/lib/mongodb"
import { requireAdmin } from "@/lib/auth"
import { slugify, extractExcerpt } from "@/lib/utils"

export async function GET() {
  try {
    await requireAdmin()

    const { db } = await connectToDatabase()
    const rawPosts = await db.collection("blog_posts").find({}).sort({ createdAt: -1 }).toArray()
    
    // Serialize MongoDB ObjectIds to strings
    const posts = rawPosts.map((post) => ({
      ...post,
      _id: post._id.toString(),
      category: Array.isArray(post.category) ? post.category[0] : post.category,
    }))

    return new Response(JSON.stringify({ posts }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    })
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
    const {
      title,
      slug: customSlug,
      content,
      category,
      author,
      readTime,
      cover_image,
      banner_image,
      meta_title,
      meta_description,
      meta_keywords,
      og_title,
      og_description,
      og_image,
      tags,
      is_published,
      faqs,
      schema_markup,
    } = body

    if (!title || !content || !author) {
      return new Response(JSON.stringify({ error: "Missing required fields: title, content, and author are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }
    
    // Auto-generate excerpt from content's first paragraph
    const excerpt = extractExcerpt(content, 200)

    const { db } = await connectToDatabase()

    // Use custom slug if provided, otherwise generate from title
    const slug = customSlug ? customSlug.trim() : slugify(title)

    // Check for existing slug
    const existingPost = await db.collection("blog_posts").findOne({ slug })
    const finalSlug = existingPost ? `${slug}-${Date.now()}` : slug

    // Handle category - support both string and array formats
    const categoryValue = Array.isArray(category) ? category : (category ? [category] : ["general"])

    const result = await db.collection("blog_posts").insertOne({
      title,
      slug: finalSlug,
      excerpt,
      content,
      category: categoryValue,
      author,
      readTime: Number.parseInt(readTime) || 5,
      read_time: Number.parseInt(readTime) || 5,
      cover_image: cover_image || null,
      banner_image: banner_image || null,
      meta_title: meta_title || title,
      meta_description: meta_description || excerpt.substring(0, 160),
      meta_keywords: meta_keywords || "",
      og_title: og_title || title,
      og_description: og_description || excerpt,
      og_image: og_image || banner_image || cover_image || null,
      tags: Array.isArray(tags) ? tags : [],
      faqs: Array.isArray(faqs) ? faqs : [],
      schema_markup: schema_markup || null,
      is_published: is_published !== false,
      published: is_published !== false,
      publication_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return new Response(
      JSON.stringify({
        success: true,
        message: "Blog post created successfully",
        id: result.insertedId,
        slug: finalSlug,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("[Blog] Error creating blog post:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to create blog post"
    const statusCode = errorMessage === "Unauthorized" ? 401 : 500

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    })
  }
}
