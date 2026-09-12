# GoldenPinocchio Homepage

This folder contains the complete planning and execution instructions for building the **GoldenPinocchio GitHub homepage**.

Your job is not simply to review these documents or create another plan.

Your job is to:

**read the project documentation, work through the Kanban, make reasonable implementation decisions, build the homepage, test it, and present a working homepage mockup for review.**

---

# Source of Truth

Before changing code, read these documents in order:

1. [00 - Project Brief](https://chatgpt.com/c/00%20-%20Project%20Brief)
    
2. [01 - Inspiration Audit - Jennifer Xiao](https://chatgpt.com/c/01%20-%20Inspiration%20Audit%20-%20Jennifer%20Xiao)
    
3. [02 - Homepage Plan](https://chatgpt.com/c/02%20-%20Homepage%20Plan)
    
4. [03 - Open Questions](https://chatgpt.com/c/03%20-%20Open%20Questions)
    
5. [04 - Kanban](https://chatgpt.com/c/04%20-%20Kanban)
    

Treat these documents as the project's design and product requirements.

Do not ignore them and substitute a generic portfolio design.

---

# Primary Objective

Create a working V1 homepage for **GoldenPinocchio** that feels:

- playful
    
- colorful
    
- personal
    
- project-focused
    
- slightly whimsical
    
- visually memorable
    
- lightweight
    
- easy to expand
    

The homepage should function as a **visual portal into the projects**.

The visitor should feel like they are entering a small creative world rather than looking at a conventional developer portfolio.

The central experience should be:

**see something interesting → understand what it represents → click into it**

---

# Important Instruction

Do not stop after:

- reading the documents
    
- summarizing the project
    
- creating another implementation plan
    
- updating the Kanban
    
- proposing design ideas
    
- creating wireframes in text
    

Those may be intermediate steps.

The required result of this task is a **working homepage mockup running in the browser**.

---

# Working Method

You may break the project into as many internal steps as necessary.

Work systematically through the Kanban.

You should be capable of handling normal implementation decisions autonomously.

Do not ask for approval after every small step.

Use the documentation and recommended defaults to keep moving.

Only treat something as a blocker if proceeding would create a major irreversible decision or requires information that genuinely cannot be reasonably inferred.

For unresolved non-critical decisions, use the recommended defaults documented in the project files.

The first working version is intended to give us something visual to react to.

---

# Phase 1 — Understand the Existing Project

Before implementation:

1. Inspect the repository.
    
2. Identify the existing framework and project structure.
    
3. Identify the current homepage entry point.
    
4. Identify existing styling conventions.
    
5. Identify existing assets that may be useful.
    
6. Identify the existing build and development commands.
    
7. Do not unnecessarily replace the framework or restructure the entire repository.
    

Work with the existing architecture wherever practical.

---

# Phase 2 — Read and Synthesize the Planning Documents

Read all five planning documents before designing the homepage.

From them, extract:

- project goals
    
- visual direction
    
- homepage hierarchy
    
- project-list requirements
    
- interaction principles
    
- responsive requirements
    
- link behavior
    
- design guardrails
    
- recommended defaults
    
- Kanban tasks
    

Use this combined information as the implementation specification.

---

# Phase 3 — Resolve Open Questions

Review:

**03 - Open Questions**

Some questions may already have recommended defaults.

Use those defaults when the user has not provided another answer.

Do not block the first homepage mockup over minor unanswered questions.

For example, unless contradicted elsewhere, use these defaults:

### Identity

Use:

**GoldenPinocchio**

as the primary homepage identity.

---

### Visual Direction

Use:

**playful editorial + digital scrapbook + light retro influence**

Do not make the entire site arcade-themed.

Retro or Nintendo-inspired elements can appear where they make sense, but the GoldenPinocchio identity should be broad enough to contain many different projects.

---

### About

Use a small **About / Info portal** rather than a large biography section.

If no content exists for the About destination yet, it may be visually represented without building a full About page in V1.

---

### Animation

Use a **medium** amount of motion.

Examples:

- hover movement
    
- subtle tilt
    
- scale
    
- shadow changes
    
- small floating details
    
- short transitions
    

Avoid constant distracting animation.

---

### Link Behavior

Use:

- internal GoldenPinocchio pages → same tab
    
- external project websites → new tab
    
- GitHub → new tab
    
- social profiles → new tab
    

Use appropriate security attributes for external links.

---

# Phase 4 — Establish the Homepage Content Model

Do not hardcode every project as unrelated markup if a reusable structure is practical.

Create a simple project data model that can support fields such as:

- name
    
- short description
    
- URL
    
- internal/external
    
- featured status
    
- visual treatment
    
- image/icon
    
- accent
    
- status
    
- sort order
    

The exact implementation should fit the existing framework.

The goal is to make adding a future project straightforward.

---

# Phase 5 — Build the Homepage Structure

The homepage should contain approximately the following hierarchy.

## GoldenPinocchio Identity

Create a compact introduction containing:

- GoldenPinocchio
    
- short playful tagline
    
- optional one-line description
    

Do not create a huge conventional hero that pushes the projects below the fold.

The intro should establish personality and quickly lead into the projects.

---

## Project Playground

This is the main attraction.

Projects should behave like **visual portals**, not generic portfolio cards.

Possible visual treatments include:

- stickers
    
- mini browser windows
    
- signs
    
- posters
    
- game cartridges
    
- app windows
    
- arcade-inspired objects
    
- illustrated objects
    
- notebooks
    
- toys
    
- small scenes
    

You do not need to use all of these.

Choose treatments appropriate for the actual projects.

Different projects may have different visual identities.

The homepage should still feel like one coherent GoldenPinocchio world.

---

# Project Hierarchy

Not every project should receive identical weight.

Create:

### Featured Projects

Approximately 2–4 visually prominent projects.

These can be:

- larger
    
- more colorful
    
- more interactive
    
- more centrally positioned
    

### Standard Projects

Smaller project portals that remain easy to discover.

Avoid making the page a uniform matrix of identical cards.

---

# Layout Direction

## Desktop

Favor a playful, somewhat loose composition.

Use:

- asymmetry
    
- varied object sizes
    
- generous negative space
    
- intentional layering
    
- strong hierarchy
    
- unexpected but understandable placement
    

The composition may borrow the feeling of:

- a creative desk
    
- a sticker board
    
- a scrapbook
    
- a playful computer desktop
    
- a collection shelf
    
- a gallery wall
    

Do not force a metaphor if it makes the design worse.

---

## Mobile

Mobile usability takes priority over preserving desktop positioning.

On smaller screens:

- stack or reorganize projects
    
- maintain readable text
    
- maintain large touch targets
    
- reduce unnecessary decorative objects
    
- avoid accidental overlap
    
- avoid horizontal scrolling unless truly necessary
    

The mobile experience should feel intentionally designed.

Do not simply shrink the desktop composition.

---

# Visual Direction

The homepage should combine:

**playful editorial + digital scrapbook + light retro influence**

Possible ingredients:

- expressive typography
    
- bold color
    
- warm neutral backgrounds
    
- thick outlines
    
- irregular shapes
    
- stickers
    
- doodles
    
- subtle textures
    
- playful shadows
    
- small retro digital details
    
- project-specific artwork
    

Keep the visual hierarchy controlled.

Colorful should not mean chaotic.

---

# Inspiration Rule

The Jennifer Xiao site is a reference for **design philosophy**, not something to clone.

Borrow concepts such as:

- visual navigation
    
- generous space
    
- personality
    
- illustration as interface
    
- curiosity-driven exploration
    
- simple paths into content
    

Do not directly copy:

- artwork
    
- layout
    
- typography
    
- color combinations
    
- illustrations
    
- button designs
    
- composition
    

GoldenPinocchio needs its own visual identity.

---

# Interaction Design

Clickable objects should clearly feel interactive.

Add appropriate:

- hover states
    
- focus states
    
- touch behavior
    
- pointer behavior
    

Possible effects include:

- slight rotation
    
- small translation
    
- scale changes
    
- shadow movement
    
- label changes
    
- small decorative reactions
    

Keep interactions quick and responsive.

Do not make navigation dependent on an animation completing.

---

# Accessibility

Playful design should not reduce usability.

Verify:

- text contrast
    
- visible keyboard focus
    
- semantic links
    
- usable touch targets
    
- keyboard navigation
    
- meaningful alt text where appropriate
    
- reduced-motion behavior where practical
    

Do not hide essential information behind hover-only interactions.

---

# Performance

Keep V1 lightweight.

Avoid introducing large dependencies purely for visual effects.

Prefer:

- CSS
    
- existing framework capabilities
    
- optimized assets
    
- lightweight animation
    

over heavyweight animation systems unless there is a clear benefit.

---

# What Not to Build

Do not expand V1 into a large website.

Do not build unless specifically required:

- blog
    
- CMS
    
- authentication
    
- dashboard
    
- user accounts
    
- search
    
- complex filtering
    
- large About page
    
- elaborate page transitions
    
- unnecessary backend
    
- complicated navigation system
    

Do not over-engineer this.

---

# Design Patterns to Avoid

Do not default to:

- generic developer portfolio template
    
- three identical cards in a row
    
- SaaS-style project cards
    
- giant gradient hero
    
- résumé-first homepage
    
- dashboard UI
    
- excessive glassmorphism
    
- giant blocks of explanatory text
    
- generic dark-mode tech aesthetic
    
- meaningless animated backgrounds
    

If the page could easily belong to thousands of other developers, the design direction is wrong.

---

# Kanban Execution

Use:

[04 - Kanban](https://chatgpt.com/c/04%20-%20Kanban)

as the active project tracker.

Work through the tasks systematically.

Update task status as meaningful work is completed.

The board should reflect actual progress rather than theoretical progress.

Items should generally move:

**Backlog → In Progress → Review / Approval → Done**

For implementation tasks that can be objectively verified, move them to Done when they are completed and tested.

For major subjective design decisions, place them in Review / Approval for the user to evaluate alongside the mockup.

---

# Human Approval Boundary

You may independently decide normal technical implementation details.

Do not make large product changes that contradict the planning documents.

Human approval should be reserved for meaningful decisions such as:

- major visual-direction changes
    
- changing project priority
    
- removing major projects
    
- changing important URLs
    
- substantially changing the GoldenPinocchio identity
    
- replacing approved copy
    
- introducing major new sections
    

Do not stop the entire build because one of these may need refinement later.

Build the best reasonable first version and flag the decision for review.

---

# Test the Homepage

Before presenting the mockup, verify the page in the browser.

Check at minimum:

### Functionality

- homepage loads
    
- project links work
    
- external links behave correctly
    
- internal links behave correctly
    
- no obvious console/runtime errors
    

### Desktop

- hierarchy feels intentional
    
- spacing works
    
- project objects do not collide incorrectly
    
- text is readable
    
- interactions work
    

### Mobile

- page reorganizes correctly
    
- no broken overflow
    
- clickable targets remain usable
    
- text remains readable
    
- major decorative elements do not obstruct content
    

### Interaction

- hover works where applicable
    
- keyboard focus works
    
- touch behavior is sensible
    
- animations do not interfere with navigation
    

### Performance

- no unnecessarily heavy assets
    
- no obviously wasteful animation
    
- no unnecessary dependency added for a trivial effect
    

---

# Clean Up Before Review

Before presenting the homepage:

- remove obvious placeholder code
    
- remove unused components
    
- remove dead styles
    
- remove accidental debug output
    
- fix obvious layout problems
    
- fix broken links
    
- fix console errors
    
- ensure the implementation is understandable enough for future AI agents to modify
    

Do not over-polish indefinitely.

The objective is a strong V1 mockup that can be evaluated visually.

---

# Required Final Deliverable

Do not finish this assignment with only documentation.

At the end of the workflow, provide:

## 1. Working Homepage Mockup

The homepage should be implemented and viewable in the browser.

This is the primary deliverable.

---

## 2. Kanban Status

Update the Kanban to accurately show:

- completed work
    
- items awaiting approval
    
- anything intentionally deferred
    

---

## 3. Brief Build Summary

Summarize:

- what was built
    
- major design decisions made
    
- project structure used
    
- important interactions added
    
- responsive behavior
    
- anything that still requires a user decision
    

Keep this concise.

---

## 4. Review Instructions

Tell the user exactly how to view the homepage mockup.

If the development server is already running, provide the local address.

If a command is required, provide the exact command.

---

# Definition of Done

This task is complete when:

- all planning documents have been reviewed
    
- the relevant Kanban tasks have been worked through
    
- a coherent GoldenPinocchio visual direction has been implemented
    
- the homepage exists as working code
    
- projects are represented as interactive visual portals
    
- desktop layout works
    
- mobile layout works
    
- links behave correctly
    
- basic accessibility has been considered
    
- the page has been tested in-browser
    
- the Kanban reflects the actual state of the work
    
- the user can open and evaluate a working homepage mockup
    

The target is **not a perfect final website**.

The target is a strong, functional, visually distinctive first version that gives the user something real to react to.

---

# Final Principle

Do not spend the entire task planning how to build GoldenPinocchio.

**Build GoldenPinocchio.**