// Common types for JourneyWell website

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  startingPrice: string
  href: string
  category: 'production' | 'marketing' | 'rental'
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  client: string
  imageUrl: string
  videoUrl?: string
  tags: string[]
  featured: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  featured: boolean
  imageUrl: string
  slug: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  imageUrl: string
  socialLinks: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

export interface PricingOption {
  id: string
  service: string
  tier: string
  price: string
  features: string[]
  popular?: boolean
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  service: string
  message: string
  budget?: string
}

export interface LocalBusiness {
  id: string
  name: string
  category: string
  description: string
  website?: string
  featured: boolean
  imageUrl: string
  interview?: {
    questions: Array<{
      question: string
      answer: string
    }>
    videoUrl?: string
  }
}