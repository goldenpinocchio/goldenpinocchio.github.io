# SPEC.md — SellWebsites.io

## 1. Concept & Vision

A bold, conversion-focused single-page site that sells web design services. The vibe is **"we're good at what we do, and we prove it."** Dark, premium, confident — like walking into a high-end design studio. Every element earns its place. No fluff, no template-slop. Just sharp design, real work, and clear next steps.

**Visitor emotion:** "These people know what they're doing. I want THAT for my site."

---

## 2. Design Language

### Aesthetic Direction
**Dark luxury tech** — deep blacks with electric lime accents. Confident, modern, slightly edgy. Think: premium design agency that actually ships.

### Color Palette
```
--bg-primary:      #0a0a0a   (near-black background)
--bg-secondary:    #111111   (card backgrounds)
--bg-tertiary:     #1a1a1a   (elevated surfaces)
--text-primary:    #ffffff   (headlines)
--text-secondary:  #a0a0a0   (body text)
--text-muted:     #666666   (subtle text)
--accent:          #d4ff00   (electric lime — the signature)
--accent-hover:    #c4e600   (lime darkened)
--border:          #2a2a2a   (subtle borders)
--success:         #00c853   (form success)
--error:           #ff4444   (form errors)
```

### Typography
- **Headings**: `Space Grotesk` (700) — geometric, confident, modern tech feel
- **Body**: `Inter` (400, 500) — clean, highly readable, professional
- **Accent/Labels**: `Space Grotesk` (500) — uppercase tracking for labels
- **Scale**: H1: 72px → H2: 48px → H3: 32px → H4: 24px → Body: 18px → Small: 14px

### Spatial System
- **Grid**: 12-column, max-width 1200px centered
- **Section padding**: 120px vertical (desktop), 80px (tablet), 60px (mobile)
- **Card padding**: 32px
- **Gutters**: 24px
- **Border radius**: 12px (cards), 8px (buttons), 4px (inputs)

### Motion Philosophy
- **Entrance**: Elements fade + slide up (0→1 opacity, 0→-20px translateY) on scroll-into-view, 600ms ease-out, staggered 100ms
- **Hover**: Scale 1.02 on cards, color shift on buttons, 200ms ease
- **Scroll**: Subtle parallax on hero background, smooth anchor scrolling
- **CTAs**: Subtle pulse animation on primary CTA buttons

### Visual Assets
- **Icons**: Lucide icons (inline SVG) — consistent 24px stroke weight
- **Images**: Dark-themed mockup frames for portfolio items (custom CSS)
- **Decorative**: Subtle grid pattern overlay on hero, lime accent glows

---

## 3. Layout & Structure

### Page Flow (single page, anchor navigation)
```
[Sticky Nav]
    ↓
[Hero] — "Websites That Actually Sell"
    ↓
[Social Proof Bar] — logos, metrics
    ↓
[Services] — what we build
    ↓
[Portfolio] — real examples with hover reveals
    ↓
[Process] — how we work (4 steps)
    ↓
[Pricing] — 3 packages
    ↓
[Testimonials] — real feedback
    ↓
[FAQ] — common questions
    ↓
[CTA Section] — final push
    ↓
[Footer]
```

### Responsive Strategy
- Desktop: Full layouts, horizontal arrangements
- Tablet (768px): 2-column grids, reduced type scale
- Mobile (480px): Single column, stacked layouts, hamburger nav

---

## 4. Features & Interactions

### Navigation
- Sticky header, transparent → solid on scroll (background becomes --bg-primary)
- Logo left, nav links center, CTA button right
- Mobile: hamburger icon → full-screen overlay menu with lime accent
- Smooth scroll to anchor sections

### Hero Section
- Large headline: "Websites That Actually Sell"
- Subheadline: benefit-focused, 1-2 sentences
- Two CTAs: "Start Your Project" (primary) + "See Our Work" (ghost/scroll)
- Background: subtle animated grid pattern
- Floating accent shapes (lime glow blobs)

### Social Proof Bar
- 4-5 client logos or "Trusted by X+ companies" text
- 3 key metrics: "150+ Sites Built", "98% Client Satisfaction", "4.9★ Average Rating"
- Subtle horizontal scroll on mobile

### Services Section
- 3 cards: "Launch Sites" (brochure/personal), "Growth Sites" (lead gen/landing), "Scale Sites" (full SaaS/e-commerce)
- Each card: icon, title, description, feature list, "From $X" starting price
- Hover: card lifts with shadow, lime border accent appears

### Portfolio Section
- 6 project cards in masonry/grid
- Each card: project image (dark mockup), title, category tag, brief description
- Hover: overlay slides up with "View Project →" CTA
- Click: could link to live site (for this demo, just visual)

### Process Section
- 4 steps in horizontal timeline (vertical on mobile)
- Each step: number badge, title, description
- Steps: "Discovery" → "Design" → "Build" → "Launch"
- Connected by lime accent line

### Pricing Section
- 3 tiers: "Starter" ($1,500), "Growth" ($4,500), "Scale" ($12,000+)
- Middle tier ("Growth") visually highlighted with lime border + "Most Popular" badge
- Each tier: price, tagline, feature list (checkmarks), CTA button
- Annual/monthly toggle (visual only for this demo)

### Testimonials
- 3 testimonial cards
- Each: quote, name, title, company, small avatar placeholder
- Horizontal scroll on mobile

### FAQ Section
- Accordion-style Q&A (5-6 questions)
- Click to expand/collapse
- Questions: timeline, revisions, hosting, post-launch support, payment, custom features

### Final CTA Section
- Dark card with lime gradient border accent
- Headline: "Ready to sell more online?"
- Subtext + "Start Your Project" button

### Footer
- 4 columns: Logo/tagline, Services, Company, Connect
- Newsletter signup input
- Social icons
- Copyright + Privacy/Terms links

---

## 5. Component Inventory

### Buttons
- **Primary**: Lime bg, black text, 16px padding, rounded-8, hover: darken + scale 1.02
- **Ghost**: Transparent, white border, white text, hover: lime border + text
- **States**: disabled (opacity 0.5), loading (spinner), success (green check)

### Cards
- **Service Card**: Dark bg, icon top, title, description, feature list, price, CTA
- **Portfolio Card**: Image area, overlay on hover, title, category tag
- **Testimonial Card**: Quote text, avatar, name/title, company
- **Pricing Card**: Header with tier name, price, feature list, CTA

### Form Elements
- **Input**: Dark bg, subtle border, focus: lime border, 48px height
- **Textarea**: Same styling, min-height 120px
- **Select**: Custom styled dropdown
- **Checkbox**: Custom lime checkmark

### Navigation
- **Desktop Nav**: Flex row, links with hover underline animation
- **Mobile Nav**: Full-screen overlay, large links, close button

### Badges/Tags
- Small pill-shaped labels (category tags, "Most Popular")
- Uppercase, small text, lime or white bg

---

## 6. Technical Approach

### Stack
- **Single HTML file** with embedded CSS and JS (for portability/GitHub Pages)
- No build step required — works directly on GitHub Pages
- Vanilla JS for interactions (accordion, mobile nav, scroll effects)
- CSS custom properties for theming
- Google Fonts via CDN (Space Grotesk, Inter)

### Performance Targets
- Single page under 100KB (excluding fonts)
- Lazy load below-fold images
- Smooth scroll polyfill not needed (native CSS `scroll-behavior`)

### Third-Party
- Google Fonts: Space Grotesk + Inter
- Lucide Icons: via CDN (lucide.dev)
- No analytics, no tracking — clean

### Deployment
- GitHub Pages ready — push to `main` branch, enable Pages in repo settings
- `index.html` at root
- `SPEC.md` at root
