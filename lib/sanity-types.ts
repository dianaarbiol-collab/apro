export interface SanityPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: any[] // Portable Text
  author: string
  publishedAt: string
  featured?: boolean
  imageUrl?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image?: string
  featured?: boolean
}
