'use client'

import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'

// Mock data based on PRD content specifications
const featuredArticle = {
  id: '1',
  title: 'Community Coffee: Brewing Louisiana\'s Legacy for Over 100 Years',
  excerpt: 'Discover how this Baton Rouge institution has remained family-owned while expanding across the South, maintaining their commitment to quality and community impact.',
  category: 'Local Business Spotlight',
  author: 'JourneyWell Team',
  publishedAt: '2025-01-15',
  readTime: '8 min read',
  imageUrl: '/images/blog/community-coffee-feature.jpg',
  featured: true
}

const recentArticles = [
  {
    id: '2',
    title: 'Tin Roof Brewing: From Local Startup to Louisiana Beer Icon',
    excerpt: 'How this Baton Rouge brewery built a brand that resonates across Louisiana while staying true to their local roots.',
    category: 'Business Spotlight',
    author: 'Tim Johnson',
    publishedAt: '2025-01-12',
    readTime: '6 min read',
    imageUrl: '/images/blog/tin-roof-brewing.jpg'
  },
  {
    id: '3',
    title: 'The Rise of Creative Agencies in Baton Rouge',
    excerpt: 'Exploring the growing creative scene in Louisiana\'s capital and the agencies leading the charge.',
    category: 'Industry Insights',
    author: 'Sarah Williams',
    publishedAt: '2025-01-10',
    readTime: '5 min read',
    imageUrl: '/images/blog/br-creative-scene.jpg'
  },
  {
    id: '4',
    title: 'How to Start a Branded Podcast for Your Business',
    excerpt: 'A complete guide to launching a professional podcast that drives business results.',
    category: 'Educational',
    author: 'JourneyWell Team',
    publishedAt: '2025-01-08',
    readTime: '12 min read',
    imageUrl: '/images/blog/podcast-guide.jpg'
  },
  {
    id: '5',
    title: 'Woman\'s Hospital: Leading Healthcare Innovation in Louisiana',
    excerpt: 'How this Baton Rouge healthcare leader continues to set standards for patient care and medical advancement.',
    category: 'Business Spotlight',
    author: 'Emily Chen',
    publishedAt: '2025-01-05',
    readTime: '7 min read',
    imageUrl: '/images/blog/womans-hospital.jpg'
  },
  {
    id: '6',
    title: 'Social Media Content Calendar Template 2025',
    excerpt: 'Free downloadable template to plan and organize your social media content strategy.',
    category: 'Resources',
    author: 'Marketing Team',
    publishedAt: '2025-01-03',
    readTime: '4 min read',
    imageUrl: '/images/blog/content-calendar.jpg'
  }
]

const popularArticles = [
  {
    id: '7',
    title: 'Raising Cane\'s: Building an Empire from Baton Rouge',
    excerpt: 'The incredible story of how Todd Graves built a global chicken finger empire starting from Louisiana.',
    category: 'Success Stories',
    author: 'JourneyWell Team',
    publishedAt: '2024-12-20',
    readTime: '10 min read',
    imageUrl: '/images/blog/raising-canes.jpg'
  },
  {
    id: '8',
    title: 'Best Podcast Studios in Louisiana: Complete Guide',
    excerpt: 'Comprehensive review of professional podcast recording facilities across Louisiana.',
    category: 'Resources',
    author: 'Tim Johnson',
    publishedAt: '2024-12-15',
    readTime: '8 min read',
    imageUrl: '/images/blog/podcast-studios.jpg'
  },
  {
    id: '9',
    title: 'DIY vs. Professional Video Content: What\'s Best for Your Brand?',
    excerpt: 'When to invest in professional video production and when DIY content makes sense.',
    category: 'Educational',
    author: 'Sarah Williams',
    publishedAt: '2024-12-10',
    readTime: '6 min read',
    imageUrl: '/images/blog/diy-vs-professional.jpg'
  }
]

const featuredAuthors = [
  {
    id: '1',
    name: 'Tim Johnson',
    title: 'Founder & Creative Director',
    bio: 'Leading JourneyWell\'s vision for creative storytelling and local business partnerships.',
    imageUrl: '/images/team/tim-johnson.jpg',
    articleCount: 12,
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: '2',
    name: 'Sarah Williams',
    title: 'Content Strategist',
    bio: 'Specializing in brand storytelling and content marketing for Louisiana businesses.',
    imageUrl: '/images/team/sarah-williams.jpg',
    articleCount: 8,
    socialLinks: {
      linkedin: '#',
      instagram: '#'
    }
  }
]

export default function BlogHomepage() {
  const [activeTab, setActiveTab] = useState<'recent' | 'popular'>('recent')
  const [email, setEmail] = useState('')

  const currentArticles = activeTab === 'recent' ? recentArticles : popularArticles

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Featured Article - Following PRD Color Specs */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)'
        }}
      >
        {/* PRD Overlay: rgba(37, 99, 235, 0.05) */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: '#111827' }}
            >
              Stories from the
              <span style={{ color: '#2563eb' }}> Heart of Louisiana</span>
            </h1>
            <p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Discover the businesses, creators, and innovators shaping Baton Rouge's creative landscape.
            </p>
          </div>

          {/* Featured Article Card - PRD Specifications */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                    style={{ backgroundColor: '#F3F4F6' }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">☕</div>
                      <div style={{ color: '#6B7280' }}>Community Coffee Feature</div>
                    </div>
                  </div>
                  
                  {/* PRD Image Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                  />
                  
                  {/* Category Tag - PRD Colors */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 text-sm font-medium"
                      style={{
                        backgroundColor: '#2563eb',
                        color: '#FFFFFF',
                        borderRadius: '6px'
                      }}
                    >
                      Local Business Spotlight
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div style={{ padding: '32px' }}>
                  <div className="space-y-4">
                    <h2 
                      className="text-2xl md:text-3xl font-semibold leading-tight group-hover:text-blue-600 transition-colors"
                      style={{ 
                        color: '#111827',
                        fontWeight: '600'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#2563eb'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#111827'
                      }}
                    >
                      Community Coffee: Brewing Louisiana's Legacy for Over 100 Years
                    </h2>
                    
                    <p 
                      className="text-lg leading-relaxed"
                      style={{ 
                        color: '#6B7280',
                        lineHeight: '1.6'
                      }}
                    >
                      Discover how this Baton Rouge institution has remained family-owned while expanding across the South, maintaining their commitment to quality and community impact.
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-4">
                        <span 
                          className="text-sm"
                          style={{ color: '#9CA3AF', fontSize: '14px' }}
                        >
                          By JourneyWell Team
                        </span>
                        <span 
                          className="text-sm"
                          style={{ color: '#9CA3AF', fontSize: '14px' }}
                        >
                          8 min read
                        </span>
                      </div>
                      
                      <Button variant="primary" size="medium" asChild>
                        <Link href="/blog/community-coffee-spotlight">
                          Read Story →
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Tab Navigation */}
              <div className="mb-12">
                <div 
                  className="inline-flex rounded-lg p-1"
                  style={{
                    backgroundColor: '#F9FAFB',
                    borderRadius: '8px',
                    padding: '4px'
                  }}
                >
                  <button
                    onClick={() => setActiveTab('recent')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all`}
                    style={{
                      backgroundColor: activeTab === 'recent' ? '#FFFFFF' : 'transparent',
                      color: activeTab === 'recent' ? '#2563eb' : '#6B7280',
                      borderRadius: '6px',
                      border: 'none',
                      padding: '8px 16px',
                      boxShadow: activeTab === 'recent' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                  >
                    Recent Articles
                  </button>
                  <button
                    onClick={() => setActiveTab('popular')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all`}
                    style={{
                      backgroundColor: activeTab === 'popular' ? '#FFFFFF' : 'transparent',
                      color: activeTab === 'popular' ? '#2563eb' : '#6B7280',
                      borderRadius: '6px',
                      border: 'none',
                      padding: '8px 16px',
                      boxShadow: activeTab === 'popular' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                  >
                    Popular
                  </button>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {currentArticles.map((article) => (
                  <article 
                    key={article.id}
                    className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)'
                      e.currentTarget.style.borderColor = '#CBD5E1'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
                      e.currentTarget.style.borderColor = '#E5E7EB'
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                        style={{ backgroundColor: '#F3F4F6' }}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">📰</div>
                          <div style={{ color: '#6B7280' }}>Article Image</div>
                        </div>
                      </div>
                      <div 
                        className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: '24px' }}>
                      <div className="space-y-3">
                        {/* Category Tag */}
                        <span 
                          className="inline-block px-2 py-1 text-xs font-medium rounded"
                          style={{
                            backgroundColor: '#EEF2FF',
                            color: '#3730A3',
                            borderRadius: '4px',
                            padding: '4px 8px'
                          }}
                        >
                          {article.category}
                        </span>

                        <h3 
                          className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition-colors"
                          style={{
                            color: '#111827',
                            fontWeight: '600'
                          }}
                        >
                          {article.title}
                        </h3>

                        <p 
                          className="text-sm leading-relaxed"
                          style={{
                            color: '#6B7280',
                            lineHeight: '1.6'
                          }}
                        >
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-3">
                            <span 
                              className="text-xs"
                              style={{ color: '#9CA3AF', fontSize: '14px' }}
                            >
                              {article.author}
                            </span>
                            <span 
                              className="text-xs"
                              style={{ color: '#9CA3AF', fontSize: '14px' }}
                            >
                              {article.readTime}
                            </span>
                          </div>
                          
                          <Link 
                            href={`/blog/article/${article.id}`}
                            className="text-sm font-medium hover:underline transition-colors"
                            style={{
                              color: '#2563eb',
                              textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#1D4ED8'
                              e.currentTarget.style.textDecoration = 'underline'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#2563eb'
                              e.currentTarget.style.textDecoration = 'none'
                            }}
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button 
                  className="px-8 py-3 font-medium rounded-lg transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#2563eb',
                    border: '2px solid #2563eb',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb'
                    e.currentTarget.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF'
                    e.currentTarget.style.color = '#2563eb'
                  }}
                >
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Newsletter Signup */}
              <div 
                className="rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)'
                }}
              >
                <div 
                  className="bg-white rounded-xl p-6"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{
                      color: '#111827',
                      fontWeight: '700'
                    }}
                  >
                    Stay Connected
                  </h3>
                  <p 
                    className="text-sm mb-6"
                    style={{ color: '#6B7280' }}
                  >
                    Get weekly insights from Baton Rouge's creative community delivered to your inbox.
                  </p>
                  
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      style={{
                        backgroundColor: '#F9FAFB',
                        border: '1px solid #E5E7EB',
                        color: '#111827',
                        borderRadius: '8px'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2563eb'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#E5E7EB'
                      }}
                    />
                    <button 
                      type="submit"
                      className="w-full py-3 font-medium rounded-lg transition-colors"
                      style={{
                        backgroundColor: '#2563eb',
                        color: '#FFFFFF',
                        borderRadius: '8px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1D4ED8'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563eb'
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* Featured Authors */}
              <div 
                className="bg-white rounded-xl p-6"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '20px'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-6"
                  style={{ color: '#111827' }}
                >
                  Featured Contributors
                </h3>
                
                <div className="space-y-6">
                  {featuredAuthors.map((author) => (
                    <div key={author.id} className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          borderRadius: '50%',
                          border: '2px solid #E5E7EB',
                          width: '48px',
                          height: '48px'
                        }}
                      >
                        <span className="text-lg">👤</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 
                          className="font-semibold"
                          style={{
                            color: '#111827',
                            fontWeight: '600'
                          }}
                        >
                          {author.name}
                        </h4>
                        <p 
                          className="text-sm mb-2"
                          style={{
                            color: '#6B7280',
                            fontSize: '14px'
                          }}
                        >
                          {author.title}
                        </p>
                        <p 
                          className="text-xs leading-relaxed"
                          style={{ color: '#9CA3AF' }}
                        >
                          {author.articleCount} articles published
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div 
                className="bg-white rounded-xl p-6"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '20px'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-6"
                  style={{ color: '#111827' }}
                >
                  Browse Topics
                </h3>
                
                <div className="space-y-3">
                  {[
                    'Local Business Spotlights',
                    'Industry Insights',
                    'Educational Guides',
                    'Success Stories',
                    'Resources & Templates'
                  ].map((category) => (
                    <Link 
                      key={category}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm hover:text-blue-600 transition-colors"
                      style={{ color: '#9CA3AF' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#2563eb'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#9CA3AF'
                      }}
                    >
                      {category} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Tab Navigation & Article Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Tab Navigation - PRD Specifications */}
              <div className="mb-12">
                <div 
                  className="inline-flex rounded-lg"
                  style={{
                    backgroundColor: '#F9FAFB',
                    borderRadius: '8px',
                    padding: '4px'
                  }}
                >
                  <button
                    onClick={() => setActiveTab('recent')}
                    className="transition-all"
                    style={{
                      backgroundColor: activeTab === 'recent' ? '#FFFFFF' : 'transparent',
                      color: activeTab === 'recent' ? '#2563eb' : '#6B7280',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: '500',
                      boxShadow: activeTab === 'recent' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== 'recent') {
                        e.currentTarget.style.backgroundColor = '#FFFFFF'
                        e.currentTarget.style.color = '#374151'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== 'recent') {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#6B7280'
                      }
                    }}
                  >
                    Recent Articles
                  </button>
                  <button
                    onClick={() => setActiveTab('popular')}
                    className="transition-all"
                    style={{
                      backgroundColor: activeTab === 'popular' ? '#FFFFFF' : 'transparent',
                      color: activeTab === 'popular' ? '#2563eb' : '#6B7280',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: '500',
                      boxShadow: activeTab === 'popular' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== 'popular') {
                        e.currentTarget.style.backgroundColor = '#FFFFFF'
                        e.currentTarget.style.color = '#374151'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== 'popular') {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#6B7280'
                      }
                    }}
                  >
                    Popular
                  </button>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mock Article Cards Following PRD Specs */}
                {[
                  {
                    title: 'Tin Roof Brewing: From Local Startup to Louisiana Beer Icon',
                    excerpt: 'How this Baton Rouge brewery built a brand that resonates across Louisiana while staying true to their local roots.',
                    category: 'Business Spotlight',
                    author: 'Tim Johnson',
                    readTime: '6 min read',
                    emoji: '🍺'
                  },
                  {
                    title: 'The Rise of Creative Agencies in Baton Rouge',
                    excerpt: 'Exploring the growing creative scene in Louisiana\'s capital and the agencies leading the charge.',
                    category: 'Industry Insights',
                    author: 'Sarah Williams',
                    readTime: '5 min read',
                    emoji: '🎨'
                  },
                  {
                    title: 'How to Start a Branded Podcast for Your Business',
                    excerpt: 'A complete guide to launching a professional podcast that drives business results.',
                    category: 'Educational',
                    author: 'JourneyWell Team',
                    readTime: '12 min read',
                    emoji: '🎙️'
                  },
                  {
                    title: 'Woman\'s Hospital: Leading Healthcare Innovation',
                    excerpt: 'How this Baton Rouge healthcare leader continues to set standards for patient care and medical advancement.',
                    category: 'Business Spotlight',
                    author: 'Emily Chen',
                    readTime: '7 min read',
                    emoji: '🏥'
                  }
                ].map((article, index) => (
                  <article 
                    key={index}
                    className="group cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      transform: 'translateY(0)',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)'
                      e.currentTarget.style.borderColor = '#CBD5E1'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
                      e.currentTarget.style.borderColor = '#E5E7EB'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {/* Image - PRD 16:9 aspect ratio */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                        style={{ backgroundColor: '#F3F4F6' }}
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-2">{article.emoji}</div>
                          <div style={{ color: '#6B7280', fontSize: '14px' }}>Article Image</div>
                        </div>
                      </div>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                      />
                    </div>

                    {/* Content - PRD padding: 24px */}
                    <div style={{ padding: '24px' }}>
                      <div className="space-y-3">
                        {/* Category Tag - PRD Colors */}
                        <span 
                          className="inline-block text-xs font-medium"
                          style={{
                            backgroundColor: '#EEF2FF',
                            color: '#3730A3',
                            borderRadius: '4px',
                            padding: '4px 8px'
                          }}
                        >
                          {article.category}
                        </span>

                        <h3 
                          className="text-lg leading-tight transition-colors"
                          style={{
                            color: '#111827',
                            fontWeight: '600'
                          }}
                        >
                          {article.title}
                        </h3>

                        <p 
                          className="text-sm leading-relaxed"
                          style={{
                            color: '#6B7280',
                            lineHeight: '1.6'
                          }}
                        >
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-3">
                            <span 
                              className="text-xs"
                              style={{ color: '#9CA3AF', fontSize: '14px' }}
                            >
                              {article.author}
                            </span>
                            <span 
                              className="text-xs"
                              style={{ color: '#9CA3AF', fontSize: '14px' }}
                            >
                              {article.readTime}
                            </span>
                          </div>
                          
                          <Link 
                            href={`/blog/article/${index + 1}`}
                            className="text-sm font-medium transition-colors"
                            style={{
                              color: '#2563eb',
                              textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#1D4ED8'
                              e.currentTarget.style.textDecoration = 'underline'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#2563eb'
                              e.currentTarget.style.textDecoration = 'none'
                            }}
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button - PRD Specifications */}
              <div className="text-center mt-12">
                <button 
                  className="font-medium transition-all duration-200"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#2563eb',
                    border: '2px solid #2563eb',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer',
                    transform: 'translateY(0)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb'
                    e.currentTarget.style.color = '#FFFFFF'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF'
                    e.currentTarget.style.color = '#2563eb'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Newsletter Signup - PRD Gradient Background */}
              <div 
                className="rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)'
                }}
              >
                <div 
                  className="rounded-xl"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <h3 
                    className="text-xl mb-3"
                    style={{
                      color: '#111827',
                      fontWeight: '700'
                    }}
                  >
                    Stay Connected
                  </h3>
                  <p 
                    className="text-sm mb-6"
                    style={{ color: '#6B7280' }}
                  >
                    Get weekly insights from Baton Rouge's creative community delivered to your inbox.
                  </p>
                  
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border outline-none transition-all"
                      style={{
                        backgroundColor: '#F9FAFB',
                        border: '1px solid #E5E7EB',
                        color: '#111827',
                        borderRadius: '8px'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2563eb'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#E5E7EB'
                      }}
                    />
                    <button 
                      type="submit"
                      className="w-full py-3 font-medium transition-colors"
                      style={{
                        backgroundColor: '#2563eb',
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1D4ED8'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563eb'
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* Featured Authors - PRD Author Profiles */}
              <div 
                className="rounded-xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '20px'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-6"
                  style={{ color: '#111827' }}
                >
                  Featured Contributors
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      name: 'Tim Johnson',
                      title: 'Founder & Creative Director',
                      articles: '12 articles'
                    },
                    {
                      name: 'Sarah Williams',
                      title: 'Content Strategist',
                      articles: '8 articles'
                    }
                  ].map((author, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div 
                        className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          borderRadius: '50%',
                          border: '2px solid #E5E7EB',
                          width: '48px',
                          height: '48px'
                        }}
                      >
                        <span className="text-lg">👤</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 
                          className="font-semibold"
                          style={{
                            color: '#111827',
                            fontWeight: '600'
                          }}
                        >
                          {author.name}
                        </h4>
                        <p 
                          className="text-sm mb-1"
                          style={{
                            color: '#6B7280',
                            fontSize: '14px'
                          }}
                        >
                          {author.title}
                        </p>
                        <p 
                          className="text-xs"
                          style={{ color: '#9CA3AF' }}
                        >
                          {author.articles}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 