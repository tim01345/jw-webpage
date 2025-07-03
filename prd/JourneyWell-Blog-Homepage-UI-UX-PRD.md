# JourneyWell Blog Homepage - UI/UX Product Requirements Document

## Document Metadata
- **Project Name:** JourneyWell Blog Homepage Development
- **Version:** 1.0
- **Document Owner:** JourneyWell Development Team
- **Last Updated:** January 2025
- **Status:** Ready for Implementation
- **Estimated Timeline:** 4 weeks
- **Target Launch:** Q1 2025

---

## 1. Executive Summary

### Project Purpose
Design and develop a sophisticated blog homepage for JourneyWell that combines the content authority of ClickUp's blog with the clean, professional aesthetic of Webflow's design system. The blog will serve as a local business spotlight platform and thought leadership hub for the Baton Rouge creative community.

### Design Philosophy
- **Content-First Approach**: Prioritize readability and content discovery
- **Local Community Focus**: Feature Baton Rouge businesses prominently
- **Professional Credibility**: Clean, minimalist design that builds trust
- **Performance-Optimized**: Fast loading times with progressive enhancement

### Success Metrics
- **Engagement**: 3+ minutes average session duration
- **Content Discovery**: 2.5+ pages per session
- **Newsletter Signups**: 100+ monthly subscribers
- **Featured Business Inquiries**: 25+ monthly requests

---

## 2. Competitive Analysis & Architecture Breakdown

### ClickUp Blog Analysis

#### Core Architecture Patterns
```yaml
Navigation Strategy:
  - Multi-level dropdown menus with clear categorization
  - Persistent search functionality
  - Sticky navigation with CTA prominence

Content Organization:
  - Featured hero article with full-width treatment
  - Tabbed content switching (Recent/Popular)
  - Card-based grid layout with progressive loading
  - Author-centric content presentation

Interactive Behaviors:
  - Hover animations on cards (lift effect)
  - Tab switching without page reload
  - Progressive loading with "Load More" functionality
  - Newsletter signup multiple touchpoints
```

#### Component Hierarchy
```
Header Navigation
├── Logo & Brand
├── Multi-level Dropdowns
├── Search Bar
└── Primary CTA

Hero Section
├── Featured Article
├── Newsletter Signup
└── Social Media Links

Content Sections
├── Article Tabs (Recent/Popular)
├── Article Grid
├── Load More Functionality
└── Newsletter Interstitials

Sidebar Components
├── Featured Writers
├── Video Content
└── Additional CTAs

Footer
├── Newsletter Signup
├── Trust Indicators
└── Comprehensive Links
```

### Webflow Blog Analysis

#### Core Architecture Patterns
```yaml
Navigation Strategy:
  - Clean horizontal navigation
  - Category-based filtering
  - Prominent search functionality
  - Enterprise-focused CTAs

Content Organization:
  - Large hero feature with editorial focus
  - Category-driven content sections
  - Resource integration (ebooks/webinars)
  - Professional case study format

Interactive Behaviors:
  - Subtle hover effects
  - Form validation and country selection
  - Carousel/slider components
  - Progressive disclosure patterns
```

#### Component Hierarchy
```
Header Navigation
├── Logo
├── Platform/Solutions/Resources Dropdowns
├── Enterprise/Pricing Links
└── Login/Signup CTAs

Hero Section
├── Large Featured Article
├── Category Navigation
└── Search Integration

Content Grid
├── Category-based Sections
├── Resource Promotions
└── Newsletter Integration

Resource Section
├── Ebooks/Webinars Carousel
├── Expert Quotes
└── Case Study Highlights

Footer
├── Comprehensive Product Links
├── Company Information
└── Social Media Integration
```

---

## 3. Detailed Element Styling Specifications

### Color System & Exact Hex Values

```json
{
  "colorSystem": {
    "primary": {
      "journeywell_blue": "#2563eb",
      "journeywell_purple": "#7c3aed", 
      "journeywell_orange": "#f59e0b"
    },
    "clickup_inspired": {
      "primary_pink": "#FF69B4",
      "secondary_purple": "#8B5CF6",
      "background_white": "#FFFFFF",
      "background_gray": "#F8FAFC",
      "text_primary": "#1F2937",
      "text_secondary": "#6B7280",
      "border_light": "#E5E7EB"
    },
    "webflow_inspired": {
      "primary_blue": "#146EF5",
      "secondary_blue": "#0EA5E9", 
      "background_white": "#FFFFFF",
      "background_gray": "#F9FAFB",
      "text_primary": "#111827",
      "text_secondary": "#6B7280",
      "border_subtle": "#E5E7EB"
    },
    "semantic": {
      "success": "#10B981",
      "warning": "#F59E0B", 
      "error": "#EF4444",
      "info": "#3B82F6"
    }
  }
}
```

### Element-Specific Color Mapping

```json
{
  "elementStyling": {
    "navigationHeader": {
      "background": "#FFFFFF",
      "backdrop_blur": "rgba(255, 255, 255, 0.95)",
      "border_bottom": "#E5E7EB",
      "logo_text": "#2563eb",
      "nav_links": {
        "default": "#6B7280",
        "hover": "#2563eb",
        "active": "#1D4ED8"
      },
      "cta_button": {
        "background": "#2563eb",
        "text": "#FFFFFF",
        "hover_background": "#1D4ED8",
        "shadow": "0 4px 12px rgba(37, 99, 235, 0.25)"
      },
      "search_input": {
        "background": "#F9FAFB",
        "border": "#E5E7EB",
        "text": "#111827",
        "placeholder": "#9CA3AF",
        "focus_border": "#2563eb"
      }
    },
    "heroSection": {
      "background": {
        "type": "gradient",
        "value": "linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)",
        "overlay": "rgba(37, 99, 235, 0.05)"
      },
      "featured_article": {
        "background": "#FFFFFF",
        "border": "#E5E7EB", 
        "shadow": "0 10px 25px rgba(0, 0, 0, 0.1)",
        "hover_shadow": "0 20px 40px rgba(0, 0, 0, 0.15)",
        "image_overlay": "rgba(0, 0, 0, 0.3)",
        "category_tag": {
          "background": "#2563eb",
          "text": "#FFFFFF",
          "border_radius": "6px"
        },
        "title": {
          "color": "#111827",
          "hover": "#2563eb"
        },
        "excerpt": "#6B7280",
        "author": "#9CA3AF",
        "read_time": "#9CA3AF"
      },
      "newsletter_signup": {
        "background": "#FFFFFF",
        "border": "#E5E7EB",
        "shadow": "0 4px 12px rgba(0, 0, 0, 0.05)",
        "input": {
          "background": "#F9FAFB",
          "border": "#E5E7EB",
          "focus_border": "#2563eb",
          "text": "#111827"
        },
        "button": {
          "background": "#2563eb",
          "text": "#FFFFFF",
          "hover_background": "#1D4ED8"
        }
      }
    },
    "contentCards": {
      "container": {
        "background": "#FFFFFF",
        "border": "#E5E7EB",
        "border_radius": "12px",
        "shadow": "0 2px 8px rgba(0, 0, 0, 0.05)",
        "hover_shadow": "0 8px 25px rgba(0, 0, 0, 0.15)",
        "hover_transform": "translateY(-4px)"
      },
      "image": {
        "aspect_ratio": "16/9",
        "background": "#F3F4F6",
        "overlay": "rgba(0, 0, 0, 0.2)",
        "hover_overlay": "rgba(0, 0, 0, 0.4)"
      },
      "content": {
        "padding": "24px",
        "category_tag": {
          "background": "#EEF2FF",
          "text": "#3730A3",
          "border_radius": "4px",
          "padding": "4px 8px"
        },
        "title": {
          "color": "#111827",
          "hover_color": "#2563eb",
          "font_weight": "600"
        },
        "excerpt": {
          "color": "#6B7280",
          "line_height": "1.6"
        },
        "author": {
          "color": "#9CA3AF",
          "font_size": "14px"
        },
        "read_time": {
          "color": "#9CA3AF", 
          "font_size": "14px"
        }
      },
      "cta_link": {
        "color": "#2563eb",
        "hover_color": "#1D4ED8",
        "text_decoration": "none",
        "hover_text_decoration": "underline"
      }
    },
    "tabNavigation": {
      "container": {
        "background": "#F9FAFB",
        "border_radius": "8px",
        "padding": "4px"
      },
      "tab_button": {
        "default": {
          "background": "transparent",
          "color": "#6B7280",
          "border": "none",
          "padding": "8px 16px",
          "border_radius": "6px"
        },
        "active": {
          "background": "#FFFFFF",
          "color": "#2563eb",
          "shadow": "0 2px 4px rgba(0, 0, 0, 0.1)"
        },
        "hover": {
          "background": "#FFFFFF",
          "color": "#374151"
        }
      }
    },
    "authorProfiles": {
      "container": {
        "background": "#FFFFFF",
        "border": "#E5E7EB",
        "border_radius": "12px",
        "padding": "20px"
      },
      "avatar": {
        "border_radius": "50%",
        "border": "2px solid #E5E7EB",
        "size": "48px"
      },
      "name": {
        "color": "#111827",
        "font_weight": "600"
      },
      "title": {
        "color": "#6B7280",
        "font_size": "14px"
      },
      "social_links": {
        "color": "#9CA3AF",
        "hover_color": "#2563eb"
      }
    },
    "newsletterSection": {
      "background": {
        "type": "gradient",
        "value": "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)"
      },
      "container": {
        "background": "#FFFFFF",
        "border": "#E5E7EB",
        "border_radius": "16px",
        "padding": "32px",
        "shadow": "0 4px 12px rgba(0, 0, 0, 0.05)"
      },
      "title": {
        "color": "#111827",
        "font_weight": "700"
      },
      "description": {
        "color": "#6B7280"
      },
      "form": {
        "input": {
          "background": "#F9FAFB",
          "border": "#E5E7EB",
          "focus_border": "#2563eb",
          "border_radius": "8px"
        },
        "button": {
          "background": "#2563eb",
          "text": "#FFFFFF",
          "hover_background": "#1D4ED8",
          "border_radius": "8px"
        }
      }
    }
  }
}
```

### Component State Mapping

```json
{
  "componentStates": {
    "articleCards": {
      "default": {
        "transform": "translateY(0)",
        "shadow": "0 2px 8px rgba(0, 0, 0, 0.05)",
        "border_color": "#E5E7EB"
      },
      "hover": {
        "transform": "translateY(-4px)",
        "shadow": "0 8px 25px rgba(0, 0, 0, 0.15)",
        "border_color": "#CBD5E1",
        "transition": "all 0.3s ease"
      },
      "focus": {
        "outline": "2px solid #2563eb",
        "outline_offset": "2px"
      }
    },
    "buttons": {
      "primary": {
        "default": {
          "background": "#2563eb",
          "color": "#FFFFFF",
          "transform": "translateY(0)"
        },
        "hover": {
          "background": "#1D4ED8",
          "transform": "translateY(-2px)",
          "shadow": "0 4px 12px rgba(37, 99, 235, 0.25)"
        },
        "active": {
          "background": "#1E40AF",
          "transform": "translateY(0)"
        },
        "disabled": {
          "background": "#9CA3AF",
          "cursor": "not-allowed",
          "opacity": "0.6"
        }
      }
    }
  }
}
```

### DO NOT Rules - Critical Implementation Guidelines

```json
{
  "colorRestrictions": {
    "DO_NOT_apply_card_gradients_to": [
      "icons",
      "buttons", 
      "text_elements",
      "navigation_items"
    ],
    "DO_NOT_apply_button_colors_to": [
      "text_content",
      "card_backgrounds",
      "icon_fills",
      "border_elements"
    ],
    "DO_NOT_apply_text_colors_to": [
      "background_elements",
      "button_backgrounds",
      "card_shadows",
      "overlay_elements"
    ]
  }
}
```

---

## 4. Updated TODO List with Blog Integration

### Phase 1: Foundation & Core Components (Week 1-2)

#### Technical Setup
- [ ] **Install and configure Sanity CMS** with blog schema
- [ ] **Set up Next.js dynamic routing** for `/blog/[category]/[slug]`
- [ ] **Implement design system** with exact color specifications from PRD
- [ ] **Create responsive grid system** with mobile-first approach
- [ ] **Set up image optimization** with WebP support and lazy loading

#### Core Components
- [ ] **BlogHeader Component** with navigation and search
- [ ] **HeroSection Component** with featured content
- [ ] **ArticleCard Component** with hover animations
- [ ] **TabNavigation Component** for Recent/Popular switching

### Phase 2: Content Management & Data Integration (Week 2-3)

#### Sanity CMS Setup
- [ ] **Article Schema Configuration**
- [ ] **Local Business Schema Configuration**
- [ ] **Author Schema Configuration** with social links
- [ ] **Category Schema Configuration** with color coding

#### Content Integration
- [ ] **API Routes Setup** for blog data fetching
- [ ] **Static Generation Configuration** for SEO optimization
- [ ] **Search Functionality** with Sanity GROQ queries
- [ ] **Newsletter Integration** with ConvertKit/Mailchimp

### Phase 3: Advanced Features & Interactions (Week 3-4)

#### Interactive Components
- [ ] **CategoryFilter Component** with active states
- [ ] **AuthorProfile Components** for community building
- [ ] **NewsletterSignup Components** (multiple variants)
- [ ] **LoadMore Component** with infinite scroll option

#### Advanced Features
- [ ] **Search Component** with real-time results
- [ ] **Related Articles Component** using tags/categories
- [ ] **Social Sharing Component** for articles
- [ ] **Reading Progress Indicator** for long-form content

### Phase 4: SEO & Performance Optimization (Week 4)

#### SEO Implementation
- [ ] **Dynamic Meta Tags** for all blog content
- [ ] **Structured Data (JSON-LD)** for articles and businesses
- [ ] **XML Sitemap Generation** for blog content
- [ ] **Open Graph Images** for social sharing

#### Performance Optimization
- [ ] **Image Optimization** with Next.js Image component
- [ ] **Code Splitting** for blog-specific functionality
- [ ] **Bundle Analysis** and optimization
- [ ] **Core Web Vitals Optimization** to meet targets

---

## 5. Success Metrics & KPIs

### Engagement Metrics
- **Average Session Duration**: 3+ minutes
- **Pages Per Session**: 2.5+ pages
- **Bounce Rate**: <60% for blog content
- **Newsletter Signup Rate**: 5%+ of blog visitors

### Content Performance
- **Monthly Article Views**: 5,000+ within 6 months
- **Featured Business Inquiries**: 25+ monthly requests
- **Social Shares**: 50+ per featured article
- **Search Rankings**: Top 10 for 25+ local keywords

### Business Impact
- **Lead Generation**: 200% increase through blog content
- **Brand Awareness**: 300% increase in local searches
- **Community Engagement**: 100+ local business connections
- **Revenue Attribution**: 30% of new clients from blog

---

**Document Status**: Ready for development kickoff
**Review Date**: Weekly during implementation phases  
**Contact**: team@journeywell.io for clarifications 