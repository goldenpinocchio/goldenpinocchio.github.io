# Build Notes — GoldenPinocchio Homepage

## Current build decisions
- Identity shown on the page: GoldenPinocchio
- Tone: playful, colorful, artistic, project-first
- Layout metaphor: scrapbook / creative desk / playful project portal
- Interaction level: medium motion with hover lift and soft float
- Link behavior: external destinations open in a new tab
- About/info: small modal portal instead of a full biography section
- Background personality pass: add froggy pond doodles, lily pads, flies, bubbles, and scribble shapes behind the existing rotating project icons
- Mobile direction: a full-screen, no-scroll “project pond” using the same static frog background; the narrow crop is biased left to keep the full standing frog visible, while five enlarged glossy project bubbles drift and gently bounce off one another. The desktop orbit layout remains unchanged.
- Mobile interaction/performance: use a tiny requestAnimationFrame collision loop for five DOM bubbles only (no canvas, physics library, video, or network requests); respect `prefers-reduced-motion` with a static composition.

## Working assumptions used for the mockup
- The homepage should stay modular so more projects can be added later
- The first version can use stub portal tabs until exact project URLs are wired in
- The homepage should feel curated and welcoming, not like a conventional portfolio grid
- The mascot image should act as a visual guide and personality anchor

## Remaining decisions
- Real URLs will be added later as the portal list grows
- No live destinations need to be wired first
- The current tagline is staying for now
- Whether a richer About page should come later
- Whether the orbit spacing or icon scale should be pushed even closer to the reference

## Next likely step
Continue adding project destinations and polish only after reviewing the published homepage build.
