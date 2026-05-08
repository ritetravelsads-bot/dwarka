import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, User, ChevronRight, ArrowRight, Calendar } from "lucide-react"
import { connectToDatabase } from "@/lib/mongodb"

export const metadata: Metadata = {
  title: "Blogs | Dwarka Expressway NCR - Real Estate Insights & Property Tips",
  description:
    "Explore expert insights on real estate investments, property buying guides, market trends, and luxury living tips from Dwarka Expressway NCR professionals.",
  alternates: {
    canonical: "https://www.dwarkaexpresswayncr.com/blogs",
  },
  openGraph: {
    title: "Blogs | Dwarka Expressway NCR - Real Estate Insights",
    description: "Expert real estate insights and property investment tips from Dwarka Expressway NCR professionals.",
    url: "https://www.dwarkaexpresswayncr.com/blogs",
  },
}

interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  author: string
  category: string
  readTime: number
  read_time?: number
  createdAt: string
  cover_image?: string
  banner_image?: string
  tags?: string[]
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const { db } = await connectToDatabase()
    const posts = await db
      .collection("blog_posts")
      .find({ $or: [{ is_published: true }, { published: true }] })
      .sort({ createdAt: -1 })
      .toArray()

    return posts.map((post) => ({
      _id: post._id.toString(),
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      author: post.author || "Dwarka Expressway NCR",
      category: Array.isArray(post.category) ? post.category[0] : (post.category || "Uncategorized"),
      readTime: post.readTime || post.read_time || 5,
      createdAt: post.createdAt?.toISOString() || new Date().toISOString(),
      cover_image: post.cover_image,
      banner_image: post.banner_image,
      tags: post.tags || [],
    }))
  } catch (error) {
    console.error("Failed to fetch blog posts:", error)
    return []
  }
}

async function getCategories(): Promise<string[]> {
  try {
    const { db } = await connectToDatabase()
    const categories = await db.collection("blog_posts").distinct("category")
    return categories
      .flat()
      .filter((cat): cat is string => typeof cat === "string" && Boolean(cat))
  } catch {
    return []
  }
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>
}) {
  const params = await searchParams
  const allPosts = await getBlogPosts()
  const categories = await getCategories()

  // Filter posts based on search params
  let filteredPosts = allPosts
  if (params.category) {
    filteredPosts = filteredPosts.filter(
      (post) => post.category.toLowerCase() === params.category?.toLowerCase()
    )
  }
  if (params.search) {
    const searchTerm = params.search.toLowerCase()
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm)
    )
  }

  // Get featured post (first post) and rest
  const featuredPost = filteredPosts[0]
  const recentPosts = filteredPosts.slice(1, 4)
  const remainingPosts = filteredPosts.slice(4)

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* SEO H1 - Screen reader accessible */}
      <h1 className="sr-only">Real Estate Blogs - Property Tips & Market Insights | Dwarka Expressway NCR</h1>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 px-4 bg-lightGrey border-b border-borderGrey">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Industry Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Real Estate <span className="text-primary">Blog</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights on property investments, market trends, and luxury living tips from Dwarka Expressway NCR professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-4 px-4 bg-white border-b border-borderGrey sticky top-20 z-40">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Link
              href="/blogs"
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${!params.category
                  ? "bg-primary text-white shadow-md"
                  : "bg-lightGrey text-gray-600 hover:bg-gray-200"
                }`}
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blogs?category=${encodeURIComponent(category)}`}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-all ${params.category?.toLowerCase() === category.toLowerCase()
                    ? "bg-primary text-white shadow-md"
                    : "bg-lightGrey text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {filteredPosts.length === 0 ? (
        <section className="w-full py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-lightGrey rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-dark mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>No articles found</h2>
            <p className="text-gray-600 mb-6">
              {params.search
                ? `No results for "${params.search}". Try different keywords.`
                : "No blog posts in this category yet. Check back soon!"}
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="w-full py-12 md:py-16 px-4">
              <div className="container mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Featured Article</h2>
                  <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Latest
                  </div>
                </div>

                <Link href={`/blogs/${featuredPost.slug}`} className="group block">
                  <div className="relative grid md:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden border border-borderGrey shadow-lg hover:shadow-xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 md:h-[420px] overflow-hidden">
                      {featuredPost.cover_image || featuredPost.banner_image ? (
                        <Image
                          src={featuredPost.cover_image || featuredPost.banner_image || ""}
                          alt={featuredPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                          <span className="text-6xl text-white/20 font-bold">DXP</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-sm uppercase tracking-wide">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 md:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full capitalize">
                          {featuredPost.category || "Uncategorized"}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {featuredPost.readTime} min read
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {featuredPost.title}
                      </h3>

                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-borderGrey">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-dark">{featuredPost.author}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(featuredPost.createdAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                          </div>
                        </div>

                        <span className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          )}

          {/* Recent Posts */}
          {recentPosts.length > 0 && (
            <section className="w-full py-12 px-4 bg-lightGrey">
              <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>Recent Articles</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {recentPosts.map((post) => (
                    <Link key={post._id} href={`/blogs/${post.slug}`} className="group">
                      <article className="bg-white rounded-lg overflow-hidden border border-borderGrey h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          {post.cover_image || post.banner_image ? (
                            <Image
                              src={post.cover_image || post.banner_image || ""}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                              <span className="text-4xl text-white/20 font-bold">DXP</span>
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-sm capitalize">
                              {post.category || "Uncategorized"}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <h3 className="font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>

                          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-borderGrey">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime} min
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All Posts Grid */}
          {remainingPosts.length > 0 && (
            <section className="w-full py-12 md:py-16 px-4">
              <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>More Articles</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {remainingPosts.map((post) => (
                    <Link key={post._id} href={`/blogs/${post.slug}`} className="group">
                      <article className="bg-white rounded-lg overflow-hidden border border-borderGrey h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="relative h-36 overflow-hidden">
                          {post.cover_image || post.banner_image ? (
                            <Image
                              src={post.cover_image || post.banner_image || ""}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 25vw"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <span className="text-2xl text-gray-300 font-bold">DXP</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <span className="text-xs text-primary font-semibold capitalize">
                            {post.category || "Uncategorized"}
                          </span>
                          <h3 className="font-bold text-sm text-dark mt-1 line-clamp-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                            <Clock className="h-3 w-3" />
                            {post.readTime} min read
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Newsletter CTA */}
      <section className="w-full py-16 md:py-24 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Stay Updated with Real Estate Insights
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest articles on property investments, market trends, and expert tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-sm transition-colors uppercase tracking-wide">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
