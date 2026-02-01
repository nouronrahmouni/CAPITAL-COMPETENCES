# Capital Competences - Professional Training Website

A clean, professional, multi-language website built with Next.js 14 and React, designed to meet Google Ads, Meta Ads, and TikTok Ads requirements.

## Features

- **Multi-Language Support**: Full English and French translations with language switcher
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and schema markup
- **Ad Policy Compliant**: Clean landing pages, clear navigation, no misleading content
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images, code splitting, and lazy loading

## Pages

- **Home**: Hero section, features, testimonials, and CTAs
- **About**: Mission, vision, values, history, and team
- **Services**: Service cards with detailed descriptions
- **Blog**: Article listing and individual post pages
- **FAQ**: Accordion-style frequently asked questions
- **Contact**: Contact form with validation and company info
- **Privacy Policy**: Legal privacy information
- **Terms of Service**: Legal terms and conditions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **i18n**: next-intl
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/capital-competences.git
cd capital-competences
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── privacy/
│   │   ├── services/
│   │   ├── terms/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Analytics.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LanguageSwitcher.tsx
│   └── index.ts
├── messages/
│   ├── en.json
│   └── fr.json
├── i18n.ts
└── middleware.ts
```

## Analytics Integration

To enable analytics, add your tracking IDs in the layout:

```tsx
import { GoogleAnalytics, MetaPixel, TikTokPixel } from '@/components/Analytics';

// In your layout
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
<MetaPixel pixelId="XXXXXXXXXX" />
<TikTokPixel pixelId="XXXXXXXXXX" />
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```ts
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  },
}
```

### Content

Edit the translation files in `src/messages/` to update content:
- `en.json` - English content
- `fr.json` - French content

## Ad Policy Compliance

This website is designed to comply with:
- ✅ Google Ads policies
- ✅ Meta Ads (Facebook/Instagram) policies
- ✅ TikTok Ads policies

Key compliance features:
- Clear, functional navigation
- No misleading content or clickbait
- Accessible contact information
- Privacy policy and terms of service
- No affiliate or third-party ads
- Fast loading times
- Mobile-responsive design

## License

MIT License - See LICENSE file for details.

## Support

For questions or support, contact: info@capitalcompetences.com
