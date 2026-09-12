# Homepage Plan — GoldenPinocchio

## Working Concept

Create a colorful, playful single-page homepage for **GoldenPinocchio** that functions as a cheerful visual portal into the projects.

The homepage should feel less like a portfolio index and more like a curated collection of things to explore.

The central interaction should be simple:

**see something interesting → understand what it is → click into it**

---

## Core Homepage Strategy

The homepage should:

- establish GoldenPinocchio’s personality immediately
    
- make the projects the main attraction
    
- use visual objects as navigation
    
- keep the first screen easy to understand
    
- avoid unnecessary copy
    
- feel expressive without becoming cluttered
    
- remain lightweight and easy to expand
    

The homepage should not require visitors to scroll through a traditional résumé or portfolio structure before reaching the projects.

The projects should appear quickly and prominently.

---

# Recommended Page Structure

## 1. Intro / Identity Area

Keep this section compact.

Primary purpose:

**Introduce GoldenPinocchio and establish the tone.**

Possible content:

- GoldenPinocchio name / handle
    
- short tagline
    
- optional one-line introduction
    
- small decorative visual element
    

Example structure:

**GoldenPinocchio**

_Making little things on the internet._

Optional supporting line:

_Apps, experiments, collectibles, websites, and whatever else seems fun._

The final copy can be decided later.

### Design Guidance

Avoid creating a giant conventional hero section.

The introduction should feel integrated into the page rather than occupying the entire viewport.

---

# 2. Project Playground

This is the primary section of the homepage.

Rather than thinking of it strictly as a grid, treat it as a **project playground or visual collection**.

Each project becomes a clickable object.

Possible visual formats include:

- sticker
    
- card
    
- mini browser window
    
- arcade cabinet
    
- poster
    
- sign
    
- notebook
    
- cartridge
    
- toy
    
- icon
    
- illustrated object
    
- small scene
    

Different projects can use different visual treatments.

They should not all look like identical rectangular portfolio cards.

---

## Project Hierarchy

Not every project needs equal prominence.

Create at least two levels of visual hierarchy:

### Featured Projects

Larger or more visually prominent entries for the strongest or most current projects.

### Other Projects

Smaller entries that remain easy to discover without competing with the featured projects.

This hierarchy should make it possible to guide visitors toward the projects that matter most.

---

# 3. Project Interaction

Each project entry should have clear interactive behavior.

At minimum:

- obvious hover or focus state
    
- large clickable target
    
- clear project name
    
- visual indication that it can be opened
    

Possible lightweight interactions:

- slight tilt
    
- small scale increase
    
- movement of a few pixels
    
- changing shadow
    
- border reaction
    
- label reveal
    
- gentle floating animation
    
- small decorative animation
    

Interactions should feel playful but remain fast and predictable.

Avoid large or continuous animations that compete with the content.

---

# 4. Quick Links

Secondary destinations can appear as a small supporting navigation area.

Possible links:

- GitHub
    
- Instagram
    
- other social accounts
    
- email/contact
    
- general information
    

These should remain visually secondary to the projects.

Possible treatments:

- small stickers
    
- text links
    
- badges
    
- buttons
    
- simple illustrated icons
    

Do not allow the quick-links section to become another major navigation grid.

---

# 5. About / General Information

For v1, this should remain optional.

The homepage does not need a large biography section unless it improves the experience.

Possible approaches:

### Option A — Defer Until V2

Only show projects and external links.

### Option B — Small Info Portal

Include a single:

**About / Info**

object alongside the project portals.

Clicking it can eventually open a dedicated page or simple modal.

### Recommended V1 Approach

Use a small **About / Info** portal rather than a full biography section.

This preserves the homepage's playful, project-first character while leaving room for expansion later.

---

# Layout Direction

## Desktop

The desktop composition should feel slightly loose and playful rather than locked into a rigid card grid.

Preferred characteristics:

- asymmetrical positioning
    
- varied project sizes
    
- generous negative space
    
- overlapping decorative elements where appropriate
    
- strong visual hierarchy
    
- clear paths between sections
    

The page may resemble a:

- creative desk
    
- scrapbook
    
- sticker board
    
- gallery wall
    
- playful desktop
    
- collection shelf
    

The exact visual metaphor can emerge during design.

---

## Mobile

Mobile should prioritize usability over maintaining the exact desktop composition.

On smaller screens:

- project objects can stack vertically
    
- large visuals can shrink proportionally
    
- decorative elements can move or disappear
    
- clickable targets must remain large
    
- project names must remain readable
    
- horizontal scrolling should generally be avoided
    

Do not force a free-form desktop layout into a cramped mobile canvas.

The mobile version should feel intentionally redesigned rather than merely scaled down.

---

# Visual System

The overall visual system should combine:

**playful editorial + digital scrapbook + light retro influence**

Possible ingredients:

- bold colors
    
- warm neutrals
    
- illustrated objects
    
- thick outlines
    
- playful type
    
- stickers
    
- subtle texture
    
- shadows
    
- doodles
    
- irregular shapes
    
- small retro-computing or game-inspired details
    

Avoid making the entire homepage strictly arcade-themed.

Individual projects can carry stronger thematic identities.

---

# Content Model

Project data should be separated from the presentation wherever practical.

Each project should support fields such as:

- `name`
    
- `shortDescription`
    
- `url`
    
- `linkType`
    
- `featured`
    
- `visualType`
    
- `image`
    
- `icon`
    
- `accent`
    
- `status`
    
- `sortOrder`
    

Example concept:

```text
Project
├── name
├── short description
├── destination
├── internal / external
├── featured
├── artwork
├── visual style
└── display order
```

The homepage should render these entries through reusable components rather than manually duplicating the markup for every project.

This will make future additions significantly easier.

---

# Link Behavior

Use consistent rules.

### Internal GoldenPinocchio Content

Open in the same tab.

### External Project Websites

Open in a new tab.

### External Social Profiles

Open in a new tab.

External links should use the appropriate security attributes.

The user should not have to manually decide link behavior for every future project if it can be derived from the project type.

---

# Suggested V1 Homepage Flow

A visitor should experience the page approximately like this:

### 1.

See:

**GoldenPinocchio**

and immediately get a sense of personality.

### 2.

See several visually interesting project objects.

### 3.

Notice one or two projects receiving stronger visual emphasis.

### 4.

Hover, tap, or interact with something.

### 5.

Click into a project.

### 6.

Optionally discover smaller social or info links.

The experience should remain understandable without instructions.

---

# Recommended V1 Build Order

## Phase 1 — Structure

1. Create the basic responsive page
    
2. Add intro / identity
    
3. Establish project data structure
    
4. Render placeholder project objects
    
5. Confirm mobile behavior
    

## Phase 2 — Visual Direction

6. Establish typography
    
7. Establish color palette
    
8. Create project visual treatments
    
9. Add background / decorative elements
    
10. Refine spacing and hierarchy
    

## Phase 3 — Interaction

11. Add hover / focus states
    
12. Add lightweight animations
    
13. Add external-link behavior
    
14. Verify keyboard navigation
    
15. Verify touch interaction
    

## Phase 4 — Polish

16. Test desktop widths
    
17. Test mobile widths
    
18. Check performance
    
19. Confirm project links
    
20. Remove unnecessary UI or copy
    

---

# V1 Guardrails

Do not build:

- a large multi-page site
    
- a blog
    
- project filtering
    
- search
    
- CMS functionality
    
- user accounts
    
- complex routing
    
- a large biography page
    
- dashboard-style navigation
    
- elaborate page transitions
    
- excessive animation
    

Do not add features simply because they are common portfolio conventions.

Every element should have a clear reason to exist.

---

# Things to Avoid Visually

Avoid defaulting to:

- identical rectangular project cards
    
- a three-column SaaS grid
    
- giant gradient hero banners
    
- generic developer portfolio layouts
    
- long résumé-style copy
    
- excessive glassmorphism
    
- heavy dark-mode dashboard styling
    
- meaningless animated backgrounds
    
- dozens of competing colors with no hierarchy
    

The page can be colorful without becoming visually noisy.

---

# Success Criteria

V1 is successful when:

- the page feels fun immediately
    
- GoldenPinocchio has a recognizable visual personality
    
- projects dominate the experience
    
- visitors understand what can be clicked
    
- featured projects naturally attract more attention
    
- the desktop layout feels playful
    
- the mobile layout feels intentional
    
- project links behave correctly
    
- adding a new project requires minimal code
    
- the page remains lightweight and fast
    
- the site feels more like a creative world than a portfolio template
    

---

# Core Homepage Principle

The homepage should answer one question extremely well:

**What would make someone want to click around?**

Everything else is secondary.