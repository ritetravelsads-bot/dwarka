import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a string to a URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

/**
 * Extracts a plain text excerpt from HTML content
 */
export function extractExcerpt(html: string, maxLength: number = 200): string {
  // Remove HTML tags
  const text = html.replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  
  if (text.length <= maxLength) {
    return text
  }
  
  // Cut at the last space before maxLength
  const truncated = text.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...'
}

/**
 * Format a date string for display
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
