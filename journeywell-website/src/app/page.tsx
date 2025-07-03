import { Navigation } from '@/components/layout/Navigation'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: 'Host in high quality, ad-free',
    description: 'Ensure your videos play in their highest resolution, always ad-free. No competitor distractions or random suggestions here.',
    cta: 'Learn about video hosting',
    href: '/features/hosting',
    icon: '🎥'
  },
  {
    title: 'Collaborate with anyone',
    description: 'Share cuts for review, get granular with time-coded comments, and manage version history in one organized library.',
    cta: 'Learn about video collaboration',
    href: '/features/collaboration',
    icon: '👥'
  },
  {
    title: 'Embed anywhere',
    description: 'Drive traffic to your website with customizable, embeddable player. Share across social channels in seconds.',
    cta: 'Learn about video player',
    href: '/features/player',
    icon: '🔗'
  },
  {
    title: 'Keep videos secure',
    description: 'Keep your content secure with granular access management and advanced privacy settings like password protection.',
    cta: 'Learn about video security',
    href: '/features/security',
    icon: '🔒'
  },
  {
    title: 'Sell your content',
    description: 'Monetize content on demand and even build a subscription platform with simple tools that adjust to your business model.',
    cta: 'Learn about video monetization',
    href: '/features/monetization',
    icon: '💰'
  },
  {
    title: 'Stream live with confidence',
    description: 'Host virtual events, webinars, live broadcasts, and more with easy-to-use live streaming tools.',
    cta: 'Learn about live streaming',
    href: '/features/streaming',
    icon: '📡'
  }
]

const solutions = [
  {
    title: 'Video pros',
    description: 'Showcase work, collaborate with clients, and connect with a passionate community of filmmakers and creatives.',
    href: '/solutions/video-pros',
    icon: '🎬'
  },
  {
    title: 'Marketing teams',
    description: 'Elevate your brand with high-quality video and expand your reach with precision and control.',
    href: '/solutions/marketing',
    icon: '📈'
  },
  {
    title: 'Communications teams',
    description: 'Centralize communication and maximize engagement with high-quality, live events, and secure video hosting.',
    href: '/solutions/communications',
    icon: '📢'
  },
  {
    title: 'Learning and development leaders',
    description: 'Scale training with interactive, AI-powered videos that integrate with any LMS to engage global teams.',
    href: '/solutions/learning',
    icon: '🎓'
  },
  {
    title: 'Content businesses',
    description: 'Monetize your videos with everything you need to grow and manage your audience.',
    href: '/solutions/content',
    icon: '💼'
  },
  {
    title: 'Enterprise organizations',
    description: 'Streamline video workflows across your company with customizable solutions that scale with business needs.',
    href: '/solutions/enterprise',
    icon: '🏢'
  }
]

const testimonials = [
  {
    quote: "One tool for all the content we've ever produced. Amazing.",
    author: "Rainar Aasrand",
    location: "Tallinn, Estonia",
    rating: 5
  },
  {
    quote: "Genuine, ad-free, and uncensored.",
    author: "Sam Reich",
    location: "New York, NY",
    rating: 5
  },
  {
    quote: "The live events streaming platform is the highest quality.",
    author: "Ben Greenhoe",
    title: "Videographer",
    location: "New York, NY",
    rating: 5
  },
  {
    quote: "The creative standard for hosting video. There is no alternative, and there doesn't need to be.",
    author: "Meg Volk",
    title: "Sr. Producer",
    location: "New York, NY",
    rating: 5
  }
]

const aiFeatures = [
  {
    title: 'Translate your videos quickly and easily',
    description: 'Save time and money on localization with AI-powered video translation. Adapt your videos into dozens of languages, both audio and captions, in minutes.',
    cta: 'Translate with AI',
    href: '/features/ai-translation'
  },
  {
    title: 'Let Vimeo AI answer your viewers\' questions',
    description: 'Within the video player, viewers can ask questions and get answers that link to the specific moment of the video for helpful context.',
    cta: 'Find answers with AI',
    href: '/features/ai-answers'
  },
  {
    title: 'Edit videos as easily as editing a document',
    description: 'Edit your video\'s transcript to trim, cut, and rearrange footage. Plus, the timeline editor is always there when you need it.',
    cta: 'Edit video by text',
    href: '/features/text-editing'
  },
  {
    title: 'Automatically optimize your videos for SEO',
    description: 'Vimeo AI provides SEO-optimized titles, descriptions, chapters, and tags. Just upload, click to generate, and share away.',
    cta: 'Auto-generate the details',
    href: '/features/seo-optimization'
  }
]

const staffPicks = [
  {
    title: 'Sierra',
    author: 'Sander Joon',
    thumbnail: '/images/staff-pick-1.jpg'
  },
  {
    title: 'The Burden',
    author: 'Niki Lindroth von Bahr',
    thumbnail: '/images/staff-pick-2.jpg'
  },
  {
    title: 'Shadow Brother Sunday',
    author: 'Alden Ehrenreich',
    thumbnail: '/images/staff-pick-3.jpg'
  },
  {
    title: 'Shé (Snake)',
    author: 'Renee Zhan',
    thumbnail: '/images/staff-pick-4.jpg'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Announcement Banner */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm text-gray-700">
            Explore new capabilities and exciting updates in our Spring 2025 Release
          </p>
          <div className="flex items-center gap-4">
            <Link href="/releases" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
              Learn more →
            </Link>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Close</span>
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        {/* Dark Translucent Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-sm font-medium mb-6 opacity-90">Your complete video platform</p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your videos,<br />
            <span className="text-white">your way</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Vimeo's ad-free platform provides everything you need to host, manage, and share high-quality videos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="primary" size="large" className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-4 rounded-lg">
              See plans →
            </Button>
            <Button variant="ghost" size="large" className="text-white border-white hover:bg-white/10 px-8 py-4 rounded-lg">
              Start for free →
            </Button>
          </div>
          
          {/* Video Preview Card */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/20 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold">See why millions love Vimeo</p>
              <p className="text-sm opacity-75">Watch our story</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by 287+ million creatives, marketers, and businesses
          </h2>
          
          {/* Animated Company Logos */}
          <div className="relative">
            <div className="flex animate-scroll space-x-8 items-center">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 h-12 w-32 bg-gray-300 rounded flex items-center justify-center opacity-60">
                  <span className="text-gray-600 font-semibold text-sm">LOGO {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            The platform that powers<br />your video strategy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.title} className="text-center">
                {/* Video Player Mockup */}
                <div className="mb-8">
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-green-500 rounded flex items-center justify-center relative">
                      {feature.title === 'Host in high quality, ad-free' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-white to-green-400 rounded"></div>
                      )}
                      {feature.title === 'Collaborate with anyone' && (
                        <div className="absolute inset-0 bg-gray-700 rounded flex items-center justify-center">
                          <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
                        </div>
                      )}
                      {feature.title === 'Embed anywhere' && (
                        <div className="absolute inset-0 bg-gray-700 rounded flex items-center justify-center">
                          <div className="w-12 h-12 bg-yellow-400 rounded"></div>
                        </div>
                      )}
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    {/* Video Controls */}
                    <div className="flex items-center justify-between mt-2 px-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-600 rounded"></div>
                        <div className="flex-1 h-1 bg-gray-600 rounded"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                  {/* Browser Bar */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-6 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                  {feature.cta} →
                </button>
              </div>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.slice(3, 6).map((feature) => (
              <div key={feature.title} className="text-center">
                {/* Video Player Mockup */}
                <div className="mb-8">
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="aspect-video bg-gray-700 rounded flex items-center justify-center relative">
                      {/* Play button */}
                      <div className="w-12 h-12 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                      </div>
                    </div>
                    {/* Video Controls */}
                    <div className="flex items-center justify-between mt-2 px-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-600 rounded"></div>
                        <div className="flex-1 h-1 bg-gray-600 rounded"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                  {/* Browser/App Bar */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="h-6 bg-gray-600 rounded"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                  {feature.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Video */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 relative">
                  {/* Person in video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-orange-500 rounded-full"></div>
                  </div>
                  {/* Video overlay with name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">SP</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Cole Webley</div>
                        <div className="text-xs text-gray-600">Staff Pick filmmaker / Member since 2011</div>
                      </div>
                      <div className="ml-auto">
                        <div className="w-12 h-8 bg-cyan-400 rounded flex items-center justify-center">
                          <div className="w-0 h-0 border-l-3 border-l-black border-y-2 border-y-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* URL bar */}
              <div className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg inline-block">
                vimeo.com/solutions/creative-professionals
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A video solution perfect for everyone
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you're a seasoned pro or just starting out, Vimeo's intuitive platform makes it easy to upload, manage, and share your videos with complete control over privacy and distribution.
              </p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium transition-colors mb-12">
                See our plans →
              </button>
              
              {/* Solutions List */}
              <div className="space-y-6">
                {solutions.slice(0, 6).map((solution, index) => (
                  <div key={solution.title} className="flex items-start space-x-4 group cursor-pointer">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      {index === 0 && <div className="w-6 h-6 bg-gray-400 rounded"></div>}
                      {index === 1 && <div className="w-6 h-6 bg-gray-400 rounded"></div>}
                      {index === 2 && <div className="w-6 h-6 bg-gray-400 rounded"></div>}
                      {index === 3 && <div className="w-6 h-6 bg-gray-400 rounded"></div>}
                      {index === 4 && <div className="w-6 h-6 bg-gray-400 rounded"></div>}
                      {index === 5 && <div className="w-6 h-6 bg-gray-400 rounded"></div>}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {solution.title} →
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-12">What customers are saying</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-900 font-medium mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{testimonial.author}</p>
                  {testimonial.title && <p>{testimonial.title}</p>}
                  <p>{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            AI that takes your videos to the next level
          </h2>
          
          <div className="space-y-6">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <Link href={feature.href} className="inline-block text-blue-600 font-medium hover:underline">
                      {feature.cta} →
                    </Link>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Picks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join a thriving community of the world's greatest storytellers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              For more than 20 years, acclaimed visionaries and undiscovered talent have used Vimeo to share videos and get inspired. Get discovered by millions through coveted Staff Picks and Best of the Year showcases.
            </p>
            <Button variant="outline" size="large" className="border-gray-300 text-gray-700 hover:border-gray-400">
              Discover Staff Picks
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffPicks.map((pick, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <div className="absolute top-3 left-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    Staff Pick
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-semibold">{pick.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{pick.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enterprise security and scale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Vimeo retains the high-quality that video pros have trusted for decades, while providing the scalability, security, and insights that leading enterprise businesses demand.
            </p>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-gray-900">
              Learn about Vimeo Enterprise
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'SOC 2 Type II',
              'GDPR aligned', 
              'HIPAA solution',
              'ISO 27001 and 27701 certified',
              'AES-256 and HTTPS/TLS encryption',
              'Single Sign-On (SSO) integration'
            ].map((feature) => (
              <div key={feature} className="text-center p-6">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">✓</span>
                </div>
                <h3 className="font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Discover the latest from Vimeo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/releases" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all text-left">
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-3">New</span>
              <h3 className="font-semibold text-gray-900 mb-2">
                Explore our latest product releases and improvements.
              </h3>
              <span className="text-blue-600 font-medium">Learn more →</span>
            </Link>
            
            <Link href="/streaming" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all text-left">
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-3">New</span>
              <h3 className="font-semibold text-gray-900 mb-2">
                Build and monetize your own video streaming service with Vimeo Streaming.
              </h3>
              <span className="text-blue-600 font-medium">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}