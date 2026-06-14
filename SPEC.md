# SPEC.md — SellWebsites.io

## Concept & Vision

A bold, conversion-focused multi-page website selling web design services. Each page has its own distinct personality while maintaining brand cohesion. The overall vibe is **"we're good at what we do, and we prove it."** Dark, premium, confident — like walking into a high-end design studio.

**Visitor emotion:** "These people know what they're doing. I want THAT for my site."

---

## Page Structure

### Pages
1. **Homepage** (`index.html`) — Dark lime theme, hero + services + portfolio + process
2. **About** (`about.html`) — Warm editorial cream theme, company story + team + timeline
3. **Pricing** (`pricing.html`) — Clean light blue theme, 3-tier pricing + add-ons + guarantee
4. **Contact** (`contact.html`) — Dark teal theme, info cards + working form → goldenpinocchio@gmail.com

---

## Design System

### Color Palettes by Page

**Homepage**
```
--bg-primary:      #0a0a0a   (near-black)
--accent:          #d4ff00   (electric lime)
```

**About**
```
--bg-primary:      #faf8f5   (warm cream)
--accent:          #c45d3a   (terracotta)
--font-heading:    Playfair Display
```

**Pricing**
```
--bg-primary:      #ffffff   (clean white)
--accent:          #2563eb   (royal blue)
--font-heading:    DM Sans
```

**Contact**
```
--bg-primary:      #050810   (deep navy)
--accent:          #00d4aa   (teal/cyan)
--font-heading:    Outfit
```

### Typography by Page
- **Homepage**: Space Grotesk (headings) + Inter (body)
- **About**: Playfair Display (headings) + Source Sans 3 (body) — editorial serif feel
- **Pricing**: DM Sans (headings) + Space Mono (accents) — clean professional
- **Contact**: Outfit (headings) + Fira Code (labels) — modern tech

### Motion
- Scroll-triggered reveal animations (fade + slide up)
- Staggered element reveals (100ms delay between items)
- Hover state transitions (200-300ms)
- Page-specific ambient animations (Contact page pulse indicator)

---

## Page Specifications

### Homepage (index.html)
- **Theme**: Dark luxury tech (#0a0a0a + #d4ff00 lime)
- **Hero**: Animated grid background, gradient text headline, dual CTAs
- **Social Proof Bar**: 4 stats in horizontal row
- **Services**: 3 cards (Launch/Growth/Scale) with hover lift effect
- **Portfolio**: 6 project cards with hover overlay reveals
- **Process**: 4-step horizontal timeline with connecting line
- **Final CTA**: Dark card with lime gradient border
- **Footer**: 4-column layout with newsletter signup

### About (about.html)
- **Theme**: Warm editorial (#faf8f5 cream + #c45d3a terracotta)
- **Hero**: Large serif headline with italic accent
- **Story Section**: 2-column with image, company origin narrative
- **Values**: 3-column icon cards (Conversion First, True Partnership, Honest Timeline)
- **Team**: 4-column grid with photos, names, roles
- **Timeline**: Vertical timeline with year markers
- **CTA**: Centered call to action

### Pricing (pricing.html)
- **Theme**: Clean light (#ffffff + #2563eb blue)
- **Hero**: Centered headline with toggle for monthly/annual
- **Pricing Cards**: 3 tiers (Launch $1,500 / Growth $4,500 / Scale $12,000+)
- **Add-Ons**: 4-card grid with prices
- **FAQ**: Accordion-style Q&A
- **Guarantee**: 2-column with checklist
- **CTA**: Dual buttons (primary + secondary)

### Contact (contact.html)
- **Theme**: Dark tech (#050810 deep navy + #00d4aa teal)
- **Hero**: Grid background, pulsing indicator dot
- **Info Cards**: Email, Location, Schedule sections
- **Form**: Full working form with:
  - Name, Email (required)
  - Company, Current Website
  - Service dropdown (Launch/Growth/Scale/Redesign/Other)
  - Budget dropdown
  - Timeline dropdown
  - Message textarea (required)
  - Submit button → Formspree → goldenpinocchio@gmail.com
- **FAQ**: 5 accordion questions specific to contact/process
- **Success State**: Hidden div that shows on successful form submit

---

## Form Setup (Contact Page)

The contact form uses **Formspree** for email delivery. To activate:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Replace `YOUR_FORM_ID` in `contact.html` with your actual form ID
6. Set the form endpoint: `https://formspree.io/f/YOUR_FORM_ID`

**Alternative**: Change `action="..."` to use any form service (Netlify Forms, Basin, etc.) or point to your own backend.

---

## Features & Interactions

### Navigation
- Sticky header with background change on scroll
- Active state indicators on current page
- Mobile hamburger menu with full-screen overlay
- Smooth anchor scrolling

### Forms (Contact)
- Field validation (required fields)
- Loading state on submit button
- Success message on completion
- Error handling with fallback success display

### Pricing Toggle
- Monthly/Annual switch
- Visual price update (CSS only, prices are fixed for simplicity)
- "Save 20%" badge on annual

### FAQ Accordion
- Click to expand/collapse
- Only one open at a time
- Smooth height animation

### Scroll Reveals
- Elements fade + slide up when entering viewport
- IntersectionObserver-based (no scroll event spam)
- Staggered timing for grouped elements

---

## Technical Approach

### Stack
- **Pure HTML/CSS/JS** — no build step, no framework
- **Google Fonts** via CDN
- **Formspree** for contact form email delivery
- **Works directly on GitHub Pages**

### File Structure
```
sell-websites/
├── index.html      (Homepage - dark lime)
├── about.html      (About - warm editorial)
├── pricing.html    (Pricing - clean light)
├── contact.html    (Contact - dark teal + form)
├── SPEC.md         (This file)
└── .github/
    └── workflows/
        └── pages.yml  (GitHub Pages deployment)
```

### Performance
- Single HTML file per page
- Minimal JS (vanilla, no libraries)
- Lazy loading images via native `loading="lazy"`
- Google Fonts with `display=swap`

### Deployment
- GitHub Pages ready
- Push to `main` branch
- Enable Pages in repo settings: Settings → Pages → Deploy from branch → main
- Site URL: `https://goldenpinocchio.github.io/sell-websites/`

---

## Content

### Homepage Stats
- 150+ Sites Launched
- 98% Client Satisfaction
- 4.9★ Average Rating
- 8+ Years Experience

### Team (About)
- **Alex Chen** — Founder & Lead Designer (10 years product/web design)
- **Maya Rodriguez** — Design Director (former Spotify)
- **James Park** — Lead Developer (full-stack)
- **Sarah Kim** — Project Manager

### Pricing Tiers
| Tier | Price | Timeline | Pages | Revisions |
|------|-------|----------|-------|-----------|
| Launch | $1,500 | 5 days | 1 | 2 |
| Growth | $4,500 | 3 weeks | 8 | 5 |
| Scale | $12,000+ | 4+ weeks | Unlimited | Unlimited |

### Add-Ons
- Extra Revisions: $250
- Copywriting: $750
- Logo Design: $1,200
- Monthly Support: $99/mo

### Timeline (About)
- 2018: The Garage Days
- 2019: Hired First Teammate
- 2020: Weathered the Storm
- 2021: 50 Sites Milestone
- 2023: Expanded to SaaS
- 2026: 150+ Sites Later

---

## Quality Checklist

- [ ] All 4 pages load without errors
- [ ] Navigation links work between all pages
- [ ] Mobile hamburger menu opens/closes
- [ ] Form submits and shows success message
- [ ] FAQ accordions expand/collapse
- [ ] Pricing toggle switches state
- [ ] Scroll reveal animations fire
- [ ] All images load (Unsplash)
- [ ] Fonts load correctly
- [ ] GitHub Pages deployment configured
