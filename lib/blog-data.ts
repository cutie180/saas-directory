export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  metaTitle?: string
  metaDescription: string
  date: string
  dateModified?: string
  category: string
  readTime?: string
  focusKeyword: string
  authorName?: string
  authorUrl?: string
  image?: string
  icon?: unknown
  faqs?: Array<{ question: string; answer: string }>
  content?: any
  relatedSlugs?: string[]
}

/** Editorial content is intentionally empty until USA-focused, researched articles are published. */
export const BLOG_POSTS: Record<string, BlogPost> = {}
