import { ObjectId } from "mongodb"
import { connectToDatabase } from "@/lib/mongodb"
import { requireAdmin } from "@/lib/auth"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function extractExcerpt(html: string, maxLength = 200): string {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
  if (text.length <= maxLength) return text
  const truncated = text.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + "..."
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin()

    const { id } = await params
    const { db } = await connectToDatabase()

    let post
    if (ObjectId.isValid(id)) {
      post = await db.collection("blog_posts").findOne({ _id: new ObjectId(id) })
    }
    
    if (!post) {
      post = await db.collection("blog_posts").findOne({ slug: id })
    }

    if (!post) {
      return new Response(JSON.stringify({ error: "Blog post not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Serialize MongoDB ObjectId to string
    const serializedPost = {
      ...post,
      _id: post._id.toString(),
      category: Array.isArray(post.category) ? post.category[0] : post.category,
    }

    return new Response(JSON.stringify({ post: serializedPost }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin()

    const { id } = await params

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

    // Find the existing post
    let existingPost
    if (ObjectId.isValid(id)) {
      existingPost = await db.collection("blog_posts").findOne({ _id: new ObjectId(id) })
    }
    
    if (!existingPost) {
      existingPost = await db.collection("blog_posts").findOne({ slug: id })
    }

    if (!existingPost) {
      return new Response(JSON.stringify({ error: "Blog post not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Use custom slug if provided, otherwise keep existing or generate from title
    let slug = existingPost.slug
    if (customSlug && customSlug.trim()) {
      // Use the custom slug provided by user
      slug = customSlug.trim()
      // Check for existing slug (excluding current post)
      const duplicateSlug = await db.collection("blog_posts").findOne({ 
        slug, 
        _id: { $ne: existingPost._id } 
      })
      if (duplicateSlug) {
        slug = `${slug}-${Date.now()}`
      }
    } else if (title !== existingPost.title && !existingPost.slug) {
      // Only auto-generate slug if title changed AND there's no existing slug
      slug = slugify(title)
      const duplicateSlug = await db.collection("blog_posts").findOne({ 
        slug, 
        _id: { $ne: existingPost._id } 
      })
      if (duplicateSlug) {
        slug = `${slug}-${Date.now()}`
      }
    }

    // Handle category - support both string and array formats
    const categoryValue = Array.isArray(category) ? category : (category ? [category] : ["general"])

    const result = await db.collection("blog_posts").updateOne(
      { _id: existingPost._id },
      {
        $set: {
          title,
          slug,
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
          updatedAt: new Date(),
        },
      }
    )

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "Blog post not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Blog post updated successfully",
        slug,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error("[Blog] Error updating blog post:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to update blog post"
    const statusCode = errorMessage === "Unauthorized" ? 401 : 500

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin()

    const { id } = await params
    const { db } = await connectToDatabase()

    let result
    if (ObjectId.isValid(id)) {
      result = await db.collection("blog_posts").deleteOne({ _id: new ObjectId(id) })
    }
    
    if (!result || result.deletedCount === 0) {
      result = await db.collection("blog_posts").deleteOne({ slug: id })
    }

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Blog post not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Blog post deleted successfully",
      }),
      {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    )
  } catch (error) {
    console.error("[Blog] Error deleting blog post:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to delete blog post"
    const statusCode = errorMessage === "Unauthorized" ? 401 : 500

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    })
  }
}
