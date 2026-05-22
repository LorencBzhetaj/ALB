# ALB Custom Painting & Remodeling — Next.js Website

## Tech Stack
- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icons)

## Folder Structure
```
app/
  layout.tsx          — Root layout (Header + Footer)
  page.tsx            — Homepage
  about/page.tsx
  services/page.tsx
  services/kitchen-remodeling/page.tsx
  services/bathroom-remodeling/page.tsx
  services/interior-exterior-painting/page.tsx
  services/tile-installation/page.tsx
  services/fire-water-restoration/page.tsx
  services/home-building/page.tsx
  services/addition/page.tsx
  our-work/page.tsx
  contact/page.tsx
  api/contact/route.ts  — Contact form API
  sitemap.ts
  robots.ts
components/
  Header.tsx          — Sticky header, mobile hamburger menu
  Footer.tsx          — Full footer with service area
  TrustBar.tsx        — Trust indicators bar
  CTASection.tsx      — Reusable CTA section
  ServiceCard.tsx     — Service card component
  Testimonials.tsx    — Review cards + HomeAdvisor badge
  ContactForm.tsx     — Form with validation + API submit
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
# Fill in your API keys
```

### 3. Run locally
```bash
npm run dev
# Open http://localhost:3000
```

### 4. Build for production
```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Or push to GitHub and import at vercel.com — zero-config deployment.

## Required Environment Variables
```
CONTACT_EMAIL_TO=alb@albremodeling.com
RESEND_API_KEY=your_resend_api_key        # or any email provider
NEXT_PUBLIC_SITE_URL=https://albremodeling.com
```

## Connect Email (Contact Form)
The form posts to `/api/contact`. To actually send emails:
1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Install: `npm install resend`
3. Uncomment the Resend code in `app/api/contact/route.ts`

## Image Replacement
All images currently use Unsplash placeholders.
Replace with real project photos from albremodeling.com:
- Place images in `/public/images/`
- Update `src=""` in each component/page

## SEO
- Each page has unique `metadata` (title + description)
- `sitemap.xml` auto-generated at /sitemap.xml
- `robots.txt` auto-generated at /robots.txt
- Security headers set in `next.config.ts`

## Design Colors
- Charcoal: `#1a1a1a`
- Gold/Copper: `#C9A84C`
- Cream: `#F5F0E8`
