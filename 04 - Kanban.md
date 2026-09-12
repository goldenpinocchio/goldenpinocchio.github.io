# Kanban — GoldenPinocchio Homepage

## Backlog

### Content & Decisions

- Confirm V1 project list
    
- Confirm destination URL for each project
    
- Mark each project as **Featured** or **Standard**
    
- Confirm GoldenPinocchio naming treatment
    
- Finalize or approve temporary homepage tagline
    
- Confirm visual direction
    
- Confirm color preferences / exclusions
    
- Decide whether About / Info appears in V1
    
- Confirm which secondary links should appear
    
- Confirm any exceptions to default link behavior
    

### Design

- Establish initial color palette
    
- Establish typography direction
    
- Define visual treatment for featured projects
    
- Define visual treatment for standard projects
    
- Decide how much visual variation individual projects can have
    
- Establish desktop layout concept
    
- Establish mobile layout behavior
    
- Decide which decorative elements belong in V1
    
- Define hover / focus / tap interactions
    

### Copy

- Draft homepage intro
    
- Draft final tagline
    
- Draft one-line description for each project
    
- Draft project labels
    
- Draft About / Info label if included
    
- Draft secondary-link labels
    

### Build

- Create homepage shell
    
- Create reusable project data structure
    
- Create reusable project component system
    
- Build intro / identity area
    
- Build featured project entries
    
- Build standard project entries
    
- Add secondary links
    
- Add About / Info portal if approved
    
- Add external-link behavior
    
- Add responsive layout
    
- Add hover / focus / tap states
    
- Add lightweight motion
    
- Add accessibility states
    
- Add any required visual assets
    

### Testing & Polish

- Review desktop hierarchy
    
- Review mobile hierarchy
    
- Review spacing
    
- Review readability
    
- Verify all clickable areas
    
- Verify internal links
    
- Verify external links
    
- Verify new-tab behavior
    
- Verify keyboard navigation
    
- Verify touch behavior
    
- Verify responsive breakpoints
    
- Check loading performance
    
- Check for unnecessary animation
    
- Remove unnecessary copy or UI
    
- Final visual polish
    

---

## In Progress

### Review / Remaining Decisions

- Project list and homepage structure are now set
- Live URLs will be added later as each portal goes live
- No live destinations need to be wired first
- The current tagline is staying for now
- The reference-style icon orbit still has room for one more polish pass if needed

---

## Review / Approval

Items should move here when they are ready for a human decision rather than continuing to be changed automatically.

### Structure

- Approve homepage structure
- Approve project hierarchy
- Approve featured vs. standard project placement

### Visual Direction

- Approve first visual direction
- Approve color palette
- Approve typography direction
- Approve desktop composition
- Approve mobile composition

### Content

- Approve homepage intro
- Approve tagline
- Approve project descriptions
- Approve labels and secondary links

### Build

- Review first working homepage in-browser
- Review interaction behavior
- Review responsive implementation
- Approve V1 before deployment

---

## Done

- Created GoldenPinocchio project folder
- Created core planning documents
- Established project goal
- Established V1 scope
- Established project-first homepage strategy
- Identified Jennifer Xiao as primary inspiration
- Reviewed inspiration site at a structural level
- Defined key inspiration principles
- Established initial homepage architecture
- Established default internal / external link behavior
- Established recommendation for a lightweight, modular implementation
- Built a browser-ready homepage mockup
- Added a modular project-card system
- Added a mascot / identity feature
- Added a small About / Info portal
- Added quick links and a mobile-friendly layout
- Verified the homepage in-browser on desktop and mobile
- Verified the info modal and project preview behavior
- Refreshed GitHub auth with needed Pages/deletion scopes
- Deleted the old `goldenpinocchio/sell-websites` repository after approval
- Added and ran a GitHub Actions Pages deployment workflow
- Verified `https://goldenpinocchio.github.io/` now serves the new Pinocchio Portal homepage

---

# Kanban Rules

## Backlog → In Progress

Only move an item into **In Progress** when it is actively being worked on.

Avoid moving large groups of tasks into In Progress at once.

---

## In Progress → Review / Approval

Move work into **Review / Approval** when:

- there is a meaningful visual or content decision to make
    
- the work affects the homepage direction
    
- a human approval is needed before continuing
    
- the coding agent should not make the decision autonomously
    

---

## Review / Approval → Done

Only move an item to **Done** after it has been explicitly approved or verified.

---

## Agent Guardrail

Hermes and coding agents may independently handle implementation details that do not meaningfully change the agreed design.

They should **not** independently make major decisions about:

- project priority
    
- site identity
    
- visual direction
    
- major layout changes
    
- deleting features
    
- adding large new sections
    
- replacing approved copy
    
- changing destination URLs
    

Those items should return to **Review / Approval**.

---

# Current Priority

The immediate path should be:

1. Finish the planning documents
    
2. Confirm the actual V1 projects and URLs
    
3. Resolve the few blocking open questions
    
4. Create the first working homepage
    
5. Review it in-browser
    
6. Iterate from what is actually visible
    

Avoid spending too long perfecting documentation before producing the first visual build.