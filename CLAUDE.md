# Simple CRM Landing Page

A professional, conversion-optimized landing page for Simple CRM - built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- ✅ **Responsive Design**: Mobile-first, fully responsive design
- ✅ **Performance Optimized**: Fast loading, Core Web Vitals optimized
- ✅ **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards
- ✅ **Smooth Scrolling**: Navigation with smooth scroll to sections
- ✅ **Contact Form**: Fully validated contact form with error handling
- ✅ **Interactive Elements**: FAQ accordion, tabbed demo section, modal
- ✅ **Professional Design**: Modern UI with consistent color scheme and typography

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind imports
│   ├── layout.tsx           # Root layout with SEO meta tags
│   └── page.tsx            # Main landing page
├── components/
│   ├── Navigation.tsx       # Sticky navigation with smooth scroll
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Problem.tsx         # Problem identification section
│   ├── Solution.tsx        # Solution demo with tabs
│   ├── Features.tsx        # Feature highlights
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── Pricing.tsx         # Pricing comparison
│   ├── FAQ.tsx             # FAQ with accordion
│   ├── CTA.tsx             # Final call-to-action
│   ├── ContactForm.tsx     # Contact form with validation
│   └── Footer.tsx          # Footer with links
└── public/                 # Static assets
```

## Key Components

### Hero Section
- Compelling headline with value proposition
- Primary and secondary CTAs
- Trust indicators and social proof
- Interactive CRM dashboard mockup

### Problem Section
- 5 key pain points with visual icons
- Statistics to emphasize urgency

### Solution Section
- Tabbed interface showing different views
- Video placeholder for demo content

### Features Section
- 3 main features with benefits
- Additional feature highlights

### Testimonials
- 3 customer testimonials with results
- Star ratings and social proof

### Pricing Section
- Comparison with competitors
- Clear value proposition
- Money-back guarantee emphasis

### FAQ Section
- Expandable accordion interface
- 8 common questions answered

### Contact Form
- Full form validation
- Professional form fields
- Success/error state handling

## Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: "#2563eb",    // Blue
  secondary: "#059669",  // Green
  accent: "#ea580c",     // Orange
}
```

### Content
All text content can be easily updated in the respective component files.

### Calendar Integration
Replace the Calendly placeholder in `CTA.tsx` with your actual booking system.

### Form Handling
Update the form submission logic in `ContactForm.tsx` to integrate with your backend or email service.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the application: `npm run build`
2. Deploy the `out` folder to your hosting provider

## SEO Configuration

The landing page includes comprehensive SEO optimization:
- Meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready

Update SEO meta tags in `src/app/layout.tsx`.

## Performance

- **Core Web Vitals Optimized**: Fast loading and responsive design
- **Image Optimization**: Next.js Image component for optimized images
- **Lazy Loading**: Components load as needed
- **Minimal Bundle Size**: Optimized for fast loading

Built with Next.js 14, TypeScript, and Tailwind CSS.
