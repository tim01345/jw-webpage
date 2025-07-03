# JourneyWell Website

Creative content and digital marketing studio website built with Next.js, featuring a Vimeo-inspired design system and local business blog.

## 🚀 Features

- 🎨 **Vimeo-inspired Design System** - Clean, professional aesthetic with generous whitespace
- 📝 **Local Business Blog** - Spotlight on Baton Rouge creative community
- 📱 **Mobile-first Responsive Design** - Optimized for all devices
- 🔍 **SEO-optimized Content Structure** - Built for search engine visibility
- ⚡ **Performance-focused** - Next.js optimization with fast loading times
- 🎯 **Conversion-focused Components** - Strategic CTAs and lead capture

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + Custom Design System
- **Language**: TypeScript
- **Deployment**: Vercel-ready
- **CMS**: Sanity (planned integration)

## 📦 Project Structure

```
JW-Webpage/
├── README.md                  <- You are here
├── .gitignore                 <- Git ignore rules
├── prd/                       <- Product Requirements Documents
│   ├── JourneyWell-Blog-Homepage-UI-UX-PRD.md
│   ├── JourneyWell-Company-Summary.md
│   ├── JourneyWell-Final-SEO-Strategy-Report.md
│   └── [other PRD files...]
├── journeywell-website/       <- Next.js Application
│   ├── src/
│   │   ├── app/               <- App Router pages
│   │   ├── components/        <- Reusable components
│   │   ├── lib/               <- Utilities
│   │   └── types/             <- TypeScript definitions
│   ├── public/                <- Static assets
│   ├── package.json
│   └── next.config.js
└── vimeo-clone.*              <- Design reference files
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/JW-Webpage.git
   cd JW-Webpage
   ```

2. **Navigate to the website directory**
   ```bash
   cd journeywell-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Add your API keys to .env.local
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔑 Environment Variables

Create a `.env.local` file in the `journeywell-website` directory:

```env
# Unsplash API (for blog images)
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
UNSPLASH_SECRET_KEY=your_unsplash_secret_key_here
UNSPLASH_APPLICATION_ID=your_unsplash_app_id_here

# Add other API keys as needed
```

## 📄 Pages

- **Homepage** (`/`) - Main landing page with services showcase
- **Blog** (`/blog`) - Local business spotlights and industry insights
- **Services** (`/services/*`) - Individual service pages
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact forms and information

## 🎨 Design System

The website follows a carefully crafted design system based on:
- **Vimeo-inspired minimalism** with generous whitespace
- **Content-first approach** letting work shine
- **Consistent color palette** with JourneyWell brand colors
- **Typography hierarchy** using Inter and Playfair Display
- **Micro-interactions** for enhanced user experience

## 📚 Documentation

Comprehensive project documentation is available in the `/prd` folder:

- **Blog Homepage PRD** - Complete UI/UX specifications
- **Company Summary** - Business overview and services
- **SEO Strategy** - Keyword research and optimization plan
- **Tech Stack Analysis** - Architecture and implementation details

## 🌟 Key Features

### Blog Homepage
- Featured article spotlight with Community Coffee
- Tab navigation (Recent/Popular articles)
- Author profiles and newsletter signup
- Local business spotlight series

### Services
- Podcast Production
- Video Content Creation
- Brand Development
- Photography Services
- Social Media Marketing
- Studio Rentals

## 🚧 Roadmap

- [ ] Sanity CMS integration
- [ ] Unsplash API image integration
- [ ] Interactive pricing calculator
- [ ] Client portal dashboard
- [ ] Advanced analytics
- [ ] Newsletter automation

## 🤝 Contributing

This is a private project for JourneyWell. For questions or suggestions, contact:
- **Email**: team@journeywell.io
- **Phone**: (225) 435-8771

## 📄 License

Private project - All rights reserved by JourneyWell

---

**Built with ❤️ in Baton Rouge, Louisiana** 