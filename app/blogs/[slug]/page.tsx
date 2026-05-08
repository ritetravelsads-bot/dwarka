import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Calendar, Clock, User, Tag, ChevronRight, ArrowLeft } from "lucide-react"
import { connectToDatabase } from "@/lib/mongodb"
import { generateBlogSchema } from "@/lib/schema-markup-generator"
import {
  TableOfContents,
  ShareButtons,
  ReadingProgressBar,
  BackToTop
} from "./_blog-detail-components"

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface BlogPost {
  _id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  banner_image?: string
  cover_image?: string
  og_image?: string
  author?: string
  publication_date?: string
  createdAt?: string
  updatedAt?: string
  category?: string | string[]
  tags?: string[]
  readTime?: string
  read_time?: string
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  og_title?: string
  og_description?: string
  is_published?: boolean
  published?: boolean
  faqs?: FAQItem[]
  schema_markup?: object[]
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { db } = await connectToDatabase()
    const post = await db.collection("blog_posts").findOne({
      slug,
      $or: [{ is_published: true }, { published: true }]
    })
    if (!post) return null
    return {
      ...post,
      _id: post._id?.toString(),
      author: post.author?.toString?.() || post.author,
      category: Array.isArray(post.category) ? post.category[0] : post.category,
      tags: Array.isArray(post.tags) ? post.tags : [],
      faqs: Array.isArray(post.faqs) ? post.faqs : [],
      readTime: post.readTime?.toString() || post.read_time?.toString() || "5"
    } as BlogPost
  } catch (error) {
    console.error("Failed to fetch blog post:", error)
    return null
  }
}

async function getRelatedPosts(category: string | string[] | undefined, currentSlug: string): Promise<BlogPost[]> {
  try {
    const { db } = await connectToDatabase()
    const categoryValue = Array.isArray(category) ? category[0] : category
    const posts = await db.collection("blog_posts")
      .find({
        $or: [{ is_published: true }, { published: true }],
        slug: { $ne: currentSlug },
        ...(categoryValue ? { 
          $or: [
            { category: categoryValue },
            { category: { $in: [categoryValue] } }
          ]
        } : {})
      })
      .limit(3)
      .project({
        title: 1,
        slug: 1,
        excerpt: 1,
        banner_image: 1,
        cover_image: 1,
        author: 1,
        publication_date: 1,
        createdAt: 1,
        readTime: 1,
        read_time: 1,
        category: 1
      })
      .toArray()
    return posts.map((p) => ({
      ...p,
      _id: p._id?.toString(),
      author: p.author?.toString?.() || p.author,
      category: Array.isArray(p.category) ? p.category[0] : p.category
    })) as BlogPost[]
  } catch (error) {
    console.error("Failed to fetch related posts:", error)
    return []
  }
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: "Post not found" }
  return {
    title: post.meta_title || `${post.title} | Dwarka Expressway NCR Blog`,
    description: post.meta_description || post.excerpt,
    keywords: post.meta_keywords || post.tags?.join(", "),
    openGraph: {
      title: post.og_title || post.title,
      description: post.og_description || post.excerpt,
      url: `https://www.dwarkaexpresswayncr.com/blogs/${slug}`,
      type: "article",
      publishedTime: post.publication_date,
      authors: [post.author?.toString() || "Dwarka Expressway NCR"],
      images: [post.og_image || post.banner_image || post.cover_image || ""].filter(Boolean)
    },
    twitter: {
      card: "summary_large_image",
      title: post.og_title || post.title,
      description: post.og_description || post.excerpt,
      images: [post.og_image || post.banner_image || post.cover_image || ""].filter(Boolean)
    }
  }
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) notFound()

  const relatedPosts = await getRelatedPosts(post.category, slug)

  const publishDate = new Date(
    post.publication_date || post.createdAt || Date.now()
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const schemaMarkup = generateBlogSchema(post, post.author || "Dwarka Expressway NCR")
  const canonicalUrl = `https://www.dwarkaexpresswayncr.com/blogs/${slug}`
  const heroImage = post.banner_image || post.cover_image || post.og_image
  const categoryDisplay = Array.isArray(post.category) ? post.category[0] : post.category

  return (
    <>
      {/* Schema Markup for SEO */}
      {Array.isArray(schemaMarkup) && schemaMarkup.map((schema, index) => (
        <Script
          key={`blog-schema-${index}`}
          id={`blog-schema-${index}`}
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Reading progress bar */}
      <ReadingProgressBar />

      <main className="min-h-screen pt-20">
        {/* HERO */}
        <section className="relative w-full bg-lightGrey border-b border-borderGrey overflow-hidden">
          {heroImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 blur-2xl scale-105"
              style={{ backgroundImage: `url(${heroImage})` }}
              aria-hidden="true"
            />
          )}

          <div className="relative container mx-auto px-4 pt-10 pb-0">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
              <Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
              <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="text-dark">
                {categoryDisplay || "Uncategorized"}
              </span>
              <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="text-dark font-medium truncate max-w-[200px] sm:max-w-none" title={post.title}>
                {post.title}
              </span>
            </nav>

            {/* Category badge */}
            <span className="inline-block mb-4 px-3 py-1 text-xs font-bold rounded-sm bg-primary/10 text-primary uppercase tracking-wide">
              {categoryDisplay || "Uncategorized"}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-6 max-w-3xl text-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-6 text-pretty">
                {post.excerpt}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              {post.author && (
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-semibold text-dark">{post.author}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publication_date || post.createdAt}>{publishDate}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime || post.read_time || "5"} min read</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {heroImage && (
            <div className="relative container mx-auto px-4">
              <div className="w-full aspect-[16/7] overflow-hidden rounded-t-lg shadow-2xl">
                <Image
                  src={heroImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </section>

        {/* CONTENT */}
        <section className="w-full py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* Main Article */}
              <article className="flex-1 min-w-0">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-borderGrey">
                    <Tag className="h-3.5 w-3.5 text-gray-500 shrink-0" />
                    {post.tags.map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/blogs?tag=${encodeURIComponent(tag)}`}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-lightGrey hover:bg-primary/10 text-gray-600 hover:text-primary transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Blog HTML content */}
                <div
                  className="blog-content blog-article-content prose prose-lg max-w-none text-dark leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* FAQ Section */}
                {post.faqs && Array.isArray(post.faqs) && post.faqs.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-borderGrey">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {post.faqs.filter((faq: FAQItem) => faq.question?.trim() && faq.answer?.trim()).map((faq: FAQItem, index: number) => (
                        <details
                          key={faq.id || index}
                          className="group border border-borderGrey rounded-lg bg-white overflow-hidden"
                        >
                          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-dark hover:bg-lightGrey transition-colors">
                            <h3 className="flex items-center gap-3 text-base font-semibold m-0" style={{ fontFamily: "'Outfit', sans-serif" }}>
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                                {index + 1}
                              </span>
                              {faq.question}
                            </h3>
                            <svg
                              className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="px-5 pb-4 pt-2 border-t border-borderGrey bg-lightGrey">
                            <p className="text-gray-600 leading-relaxed m-0">
                              {faq.answer}
                            </p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author card */}
                {post.author && (
                  <div className="mt-12 pt-8 border-t border-borderGrey">
                    <div className="flex items-start gap-4 p-6 rounded-lg bg-lightGrey border border-borderGrey">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">Written by</p>
                        <p className="text-base font-bold text-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>{post.author}</p>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          Expert content creator at Dwarka Expressway NCR, covering real estate, property trends, and market insights.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile share */}
                <div className="mt-8 lg:hidden">
                  <ShareButtons title={post.title} url={canonicalUrl} />
                </div>
              </article>

              {/* Sidebar */}
              <aside className="w-full lg:w-72 shrink-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
                <TableOfContents content={post.content} />

                <div className="hidden lg:block">
                  <ShareButtons title={post.title} url={canonicalUrl} />
                </div>

                {/* Post meta card */}
                <div className="rounded-lg border border-borderGrey bg-white p-5 space-y-4">
                  <p className="text-sm font-bold text-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Post Details</p>
                  <dl className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-gray-500 mt-0.5 shrink-0" />
                      <div>
                        <dt className="text-xs text-gray-500">Published</dt>
                        <dd className="font-semibold text-dark">{publishDate}</dd>
                      </div>
                    </div>
                    {categoryDisplay && (
                      <div className="flex items-start gap-2">
                        <Tag className="h-4 w-4 text-gray-500 mt-0.5 shrink-0" />
                        <div>
                          <dt className="text-xs text-gray-500">Category</dt>
                          <dd>
                            <span className="font-semibold text-primary">
                              {categoryDisplay}
                            </span>
                          </dd>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-gray-500 mt-0.5 shrink-0" />
                      <div>
                        <dt className="text-xs text-gray-500">Read time</dt>
                        <dd className="font-semibold text-dark">{post.readTime || post.read_time || "5"} minutes</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <section className="w-full py-12 px-4 border-t border-borderGrey bg-lightGrey">
            <div className="container mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Related Articles</h2>
                <Link
                  href="/blogs"
                  className="text-sm text-primary hover:underline flex items-center gap-1 font-semibold"
                >
                  View all
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((related) => {
                  const relatedImage = related.banner_image || related.cover_image
                  const relatedDate = new Date(
                    related.publication_date || related.createdAt || Date.now()
                  ).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                  const relatedCategory = Array.isArray(related.category) ? related.category[0] : related.category

                  return (
                    <Link
                      key={related._id}
                      href={`/blogs/${related.slug}`}
                      className="group flex flex-col rounded-lg border border-borderGrey bg-white overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="w-full aspect-video bg-lightGrey overflow-hidden relative">
                        {relatedImage ? (
                          <Image
                            src={relatedImage}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-primary/5">
                            <span className="text-3xl text-primary/30 font-bold">
                              {related.title?.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col flex-1 p-5">
                        {relatedCategory && (
                          <span className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            {relatedCategory}
                          </span>
                        )}
                        <h3 className="text-sm font-bold text-dark leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {related.title}
                        </h3>
                        {related.excerpt && (
                          <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-3">
                            {related.excerpt}
                          </p>
                        )}
                        <div className="mt-auto flex items-center gap-3 text-xs text-gray-500 pt-3 border-t border-borderGrey">
                          <span>{relatedDate}</span>
                          <span>&middot;</span>
                          <span>{related.readTime || related.read_time || "5"} min</span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* BACK LINK */}
        <div className="w-full py-8 px-4 border-t border-borderGrey">
          <div className="container mx-auto">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>

        <BackToTop />
      </main>
    </>
  )
}
