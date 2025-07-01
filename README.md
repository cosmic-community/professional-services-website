<!-- README_START -->
# Professional Services Website

A modern, high-performance website built with Astro and powered by Cosmic CMS, showcasing professional services, team members, case studies, and client testimonials. Features a clean, responsive design optimized for performance and SEO.

![Professional Services Website](https://imgix.cosmicjs.com/438f8e10-5696-11f0-a051-23c10f41277a-photo-1611224923853-80b023f02d71-1751386375986.jpg?w=1200&h=400&fit=crop&auto=format,compress)

## Features

- 🚀 **Lightning Fast** - Built with Astro for optimal performance
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern Design** - Clean, professional interface with Tailwind CSS
- 📝 **Content Management** - Powered by Cosmic CMS for easy content updates
- 🔍 **SEO Optimized** - Built-in SEO best practices and meta tags
- ♿ **Accessible** - WCAG compliant design and markup
- 📊 **Case Studies** - Showcase successful projects with detailed results
- 👥 **Team Profiles** - Meet the team with detailed member profiles
- 💬 **Client Testimonials** - Social proof with ratings and reviews
- 🛠️ **Services Pages** - Detailed service offerings with features and pricing

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=digital-services-production)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> Set up an Astro website powered by my existing content. Set apiEnvironment: "staging" in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **[Astro](https://astro.build/)** - Modern static site generator
- **[Cosmic](https://www.cosmicjs.com)** - Headless CMS for content management
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[@cosmicjs/sdk](https://www.cosmicjs.com/docs)** - Official Cosmic JavaScript SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env` file in the root directory:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## Cosmic SDK Examples

### Fetching Services
```javascript
import { cosmic } from '../lib/cosmic';

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching a Single Case Study
```javascript
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug: 'project-slug' })
  .depth(1);
```

### Fetching Team Members
```javascript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This website uses [Cosmic](https://www.cosmicjs.com) as a headless CMS with the following content types:

- **Services** - Professional service offerings with features and pricing
- **Team Members** - Staff profiles with photos, bios, and skills
- **Case Studies** - Project showcases with challenges, solutions, and results  
- **Testimonials** - Client reviews with ratings and company information

The content is fetched at build time using the [Cosmic SDK](https://www.cosmicjs.com/docs) for optimal performance and SEO.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `bun run build`
5. Set publish directory: `dist`

### Other Static Hosts
The built site in the `dist` folder can be deployed to any static hosting service.

Remember to set your environment variables in your hosting platform's dashboard.
<!-- README_END -->