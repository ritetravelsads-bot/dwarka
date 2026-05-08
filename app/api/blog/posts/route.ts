import { connectToDatabase } from "@/lib/mongodb"

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    
    const posts = await db.collection("blog_posts")
      .find({ 
        $or: [{ is_published: true }, { published: true }] 
      })
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray()

    const serializedPosts = posts.map(post => ({
      ...post,
      _id: post._id.toString(),
      category: Array.isArray(post.category) ? post.category[0] : post.category,
    }))

    return new Response(JSON.stringify({ posts: serializedPosts }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
