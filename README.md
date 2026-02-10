# Olasile Abolade - AI Product Manager Portfolio

A professional portfolio website with an animated landing page, built with Next.js 14, TailwindCSS, and TypeScript. Inspired by mattpalmer.io's minimal design.

## Features

- **Animated Landing Page**: "Olasile is [activity]" with cycling text and illustrated avatars
- **Multi-page Navigation**: Separate pages for About, Projects, Writing, Contact
- **Clean, Minimal Design**: Large typography, soft animations, professional color palette
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Open Graph tags, structured metadata, accessible markup

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & Tailwind
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   ├── page.tsx             # Animated landing page
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── projects/
│   │   │   └── page.tsx         # Projects/Case Studies page
│   │   ├── writing/
│   │   │   └── page.tsx         # Writing/Articles page
│   │   └── contact/
│   │       └── page.tsx         # Contact page
│   └── components/
│       ├── AnimatedHero.tsx     # Landing page with cycling animations
│       ├── PageLayout.tsx       # Shared layout for inner pages
│       └── index.ts             # Component exports
├── public/
│   ├── avatars/                 # SVG illustrations for activities
│   │   ├── hiking.svg
│   │   ├── hacking.svg
│   │   ├── traveling.svg
│   │   ├── gaming.svg
│   │   ├── building.svg
│   │   └── reading.svg
│   ├── resume.pdf               # Your resume (add this)
│   └── og-image.png             # Open Graph image (add this)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd /Users/oabolade/agents_app_build/portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Customization

### Activities & Avatars

Edit `src/components/AnimatedHero.tsx` to customize the activities:

```typescript
const activities: Activity[] = [
  { text: 'hiking', avatar: '/avatars/hiking.svg', color: 'text-emerald-500' },
  { text: 'hacking', avatar: '/avatars/hacking.svg', color: 'text-blue-500' },
  // Add or modify activities here
]
```

Replace the SVG files in `public/avatars/` with your own custom illustrations.

### Social Links

Update social links in:
- `src/components/AnimatedHero.tsx` (landing page)
- `src/components/PageLayout.tsx` (inner pages footer)

### Content Updates

- **About Page**: `src/app/about/page.tsx`
- **Projects**: `src/app/projects/page.tsx`
- **Writing**: `src/app/writing/page.tsx`
- **Contact**: `src/app/contact/page.tsx`

### Contact Form

The contact form uses [Formspree](https://formspree.io/):

1. Create a free Formspree account
2. Get your form ID
3. Replace `YOUR_FORM_ID` in `src/app/contact/page.tsx`

### Color Scheme

Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  background: '#FAFAFA',
  foreground: '#171717',
  accent: '#2563EB',
  muted: '#737373',
  surface: '#FFFFFF',
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

3. **Add Custom Domain:**
   - In Vercel dashboard → Settings → Domains
   - Add `olasile-abolade.me`
   - Update DNS records as instructed

## Pages Overview

| Page | Path | Description |
|------|------|-------------|
| Landing | `/` | Animated "Olasile is..." hero with navigation links |
| About | `/about` | Bio, specializations, experience timeline |
| Projects | `/projects` | Case studies with Problem → Approach → Solution → Impact |
| Writing | `/writing` | Articles and blog posts |
| Contact | `/contact` | Contact form and social links |

## Avatar Illustrations

The current avatars are placeholder SVGs. For a polished look, consider:
- Commissioning custom illustrations
- Using AI tools (Midjourney, DALL-E) to generate consistent character illustrations
- Using services like Notion-style avatar generators

## License

MIT License

---

Built with care by Olasile Abolade
