'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const services = [
  {
    title: 'Podcast Production',
    description: 'Professional podcast recording, editing, and production services with multi-angle video capture.',
    features: ['Multi-camera setup', 'Professional audio editing', 'Custom room design', 'Full-length video'],
    startingPrice: 'Starting at $500',
    href: '/services/podcast-production',
    icon: '🎙️'
  },
  {
    title: 'Video Content Creation',
    description: 'Short-form and long-form video content for social media, marketing, and brand storytelling.',
    features: ['TikTok & Reels', 'Branded content', 'Professional editing', 'Multi-platform optimization'],
    startingPrice: 'Starting at $750',
    href: '/services/video-content',
    icon: '🎬'
  },
  {
    title: 'Brand Development',
    description: 'Complete brand identity development from logo design to comprehensive brand guidelines.',
    features: ['Logo design', 'Brand guidelines', 'Marketing materials', 'Brand strategy'],
    startingPrice: 'Starting at $1,200',
    href: '/services/brand-development',
    icon: '🎨'
  },
  {
    title: 'Photography Services',
    description: 'Professional photography for business, events, and personal branding needs.',
    features: ['Business headshots', 'Event photography', 'Product photography', 'Professional editing'],
    startingPrice: 'Starting at $300',
    href: '/services/photography',
    icon: '📸'
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategic social media management and content creation to grow your online presence.',
    features: ['Content strategy', '3-4 posts per week', 'Analytics reporting', 'Community management'],
    startingPrice: 'Starting at $800/mo',
    href: '/services/social-media',
    icon: '📱'
  },
  {
    title: 'Studio Rentals',
    description: 'Professional studio space rentals with customizable sets and professional equipment.',
    features: ['Cyclorama wall', 'Professional lighting', 'Audio equipment', 'Flexible hourly rates'],
    startingPrice: 'Starting at $75/hr',
    href: '/services/studio-rentals',
    icon: '🏢'
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-neutral-900 mb-6">
            Everything You Need to Grow Your Brand
          </h2>
          <p className="body-large text-neutral-600 max-w-3xl mx-auto">
            We offer a complete suite of creative services designed to help businesses 
            tell their story, engage their audience, and drive measurable results.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{service.icon}</div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold">{service.startingPrice}</span>
                    <Button variant="ghost" size="small" asChild>
                      <Link href={service.href}>
                        Learn More →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="text-center bg-neutral-50 rounded-2xl p-12">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
            Not sure which service you need?
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Schedule a free discovery call with our team. We&apos;ll help you identify the best 
            approach to achieve your goals and create a custom package that fits your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" asChild>
              <Link href="/contact">Schedule Discovery Call</Link>
            </Button>
            <Button variant="outline" size="large" asChild>
              <Link href="/pricing">View Pricing Calculator</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}