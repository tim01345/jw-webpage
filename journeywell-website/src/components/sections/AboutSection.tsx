'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function AboutSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="section-heading text-neutral-900">
                We Do It All, So You Don&apos;t Have To
              </h2>
              
              <div className="space-y-4 text-neutral-600">
                <p className="body-large">
                  JourneyWell is a creative content and digital marketing studio dedicated to 
                  helping businesses and individuals bring their vision to life. Based in 
                  Baton Rouge, Louisiana, we serve clients locally and nationwide.
                </p>
                
                <p>
                  Our philosophy is simple: <strong>&ldquo;LET&apos;S CREATE TOGETHER.&rdquo;</strong> We believe 
                  in working with our clients, not just for them. Every project begins with 
                  understanding your unique vision, goals, and brand identity.
                </p>
              </div>
            </div>
            
            {/* Key features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900">One-Stop Creative Shop</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Everything you need under one roof - no need to coordinate multiple vendors.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900">Professional Facilities</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  State-of-the-art studio spaces with professional-grade equipment.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900">Local Expertise</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Deep understanding of the Baton Rouge market and community.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900">Results-Driven</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Focus on measurable outcomes that help grow your business and brand.
                </p>
              </div>
            </div>
            
            <div className="pt-6">
              <Button variant="primary" size="large" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
          
          {/* Visual content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Studio image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-primary-700">
                  <div className="text-2xl mb-2">🏢</div>
                  <div className="text-sm font-medium">Our Studio</div>
                </div>
              </div>
              
              {/* Team image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-secondary-700">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm font-medium">Our Team</div>
                </div>
              </div>
              
              {/* Equipment image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-accent-700">
                  <div className="text-2xl mb-2">🎬</div>
                  <div className="text-sm font-medium">Equipment</div>
                </div>
              </div>
              
              {/* Client work placeholder */}
              <div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl flex items-center justify-center">
                <div className="text-center text-neutral-700">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-sm font-medium">Client Work</div>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-6 border border-neutral-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">200+</div>
                <div className="text-sm text-neutral-600">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}