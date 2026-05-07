import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function extractExcerpt(html: string, maxLength: number = 200): string {
  if (!html) return ""
  
  let plainText = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<\/(p|div|h[1-6]|li|br|hr)[^>]*>/gi, "\n")
    .replace(/<(p|div|h[1-6]|li|br|hr)[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
  
  const paragraphs = plainText.split(/\n+/).filter(p => p.trim().length > 0)
  const firstParagraph = paragraphs[0] || plainText
  
  if (firstParagraph.length <= maxLength) {
    return firstParagraph
  }
  
  const truncated = firstParagraph.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + "..."
}
