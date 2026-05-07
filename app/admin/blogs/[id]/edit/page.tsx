"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import WordPressBlogEditor from "@/components/wordpress-blog-editor"
import { Loader2 } from "lucide-react"

interface BlogPostData {
  _id: string
  title?: string
  slug?: string
  content?: string
  category?: string | string[]
  author?: string
  readTime?: string
  cover_image?: string
  banner_image?: string
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  og_title?: string
  og_description?: string
  og_image?: string
  tags?: string[]
  is_published?: boolean
  faqs?: Array<{ id: string; question: string; answer: string }>
}

export default function EditBlogPostPage() {
  const params = useParams()
  const postId = params.id as string
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [postData, setPostData] = useState<BlogPostData | null>(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/admin/blog/posts/${postId}`, {
          cache: "no-store",
        })
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error || `HTTP ${response.status}`)
        }
        
        const data = await response.json()
        if (data.post) {
          setPostData(data.post)
        } else {
          throw new Error("Post not found")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load post")
      } finally {
        setLoading(false)
      }
    }
    
    if (postId) {
      fetchPost()
    }
  }, [postId])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-destructive font-medium mb-2">Error loading post</p>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    )
  }

  if (!postData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Post not found</p>
      </div>
    )
  }

  return <WordPressBlogEditor initialData={postData} />
}
