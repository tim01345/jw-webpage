'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="display-heading text-neutral-900">
                Creative Content That
                <span className="text-primary-600"> Drives Results</span>
              </h1>
              
              <p className="body-large text-neutral-600 max-w-xl">
                From podcast production to brand development, we help businesses in Baton Rouge 
                and beyond tell their story through powerful visual content that converts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              
              <Button variant="secondary" size="large" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">200+</div>
                <div className="text-sm text-neutral-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-neutral-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">5★</div>
                <div className="text-sm text-neutral-600">Average Rating</div>
              </div>
            </div>
          </div>
          
          {/* Media content */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Video placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto">
                    <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-neutral-700">
                    <div className="font-semibold">Watch Our Demo Reel</div>
                    <div className="text-sm text-neutral-500">See our work in action</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-2xl transform rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-500 rounded-xl transform -rotate-12 opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-neutral-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}