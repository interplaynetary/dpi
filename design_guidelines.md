# Free-Association Website Design Guidelines

## Design Approach
**Hybrid Strategy**: Drawing inspiration from Linear's clean tech aesthetic, Stripe's trust-building design, and Notion's clarity, while maintaining accessibility for global impact stakeholders. The design balances technical credibility with human-centered coordination storytelling.

## Core Design Principles
1. **Trust Through Clarity**: Clean, transparent design that builds credibility with funders and institutions
2. **Global Accessibility**: Inclusive design that works across cultures and contexts
3. **Technical Credibility**: Modern, sophisticated aesthetic that demonstrates innovation
4. **Human Connection**: Warm elements that emphasize coordination and mutual recognition

## Color Palette

**Primary Colors (Dark Mode)**
- Background: 222 15% 8%
- Surface: 222 15% 12%
- Primary: 200 85% 55% (trust, technology, coordination)
- Primary Hover: 200 85% 65%

**Primary Colors (Light Mode)**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 200 90% 45%
- Primary Hover: 200 90% 35%

**Accent Colors**
- Success/Growth: 150 70% 50% (for metrics, positive outcomes)
- Coordination: 280 60% 60% (for mutual recognition flows)
- Warning/Urgency: 25 85% 60% (for COP30 deadline emphasis)

**Neutrals**
- Text Primary: 222 20% 95% (dark) / 222 20% 10% (light)
- Text Secondary: 222 10% 70% (dark) / 222 10% 45% (light)
- Border: 222 15% 20% (dark) / 222 10% 88% (light)

## Typography

**Font Families**
- Primary: 'Inter', system-ui, -apple-system, sans-serif (body, UI)
- Display: 'Space Grotesk', sans-serif (headings, emphasis)

**Scale & Hierarchy**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight
- Section Headers: text-4xl md:text-5xl font-bold
- Subsection Headers: text-2xl md:text-3xl font-semibold
- Body Large: text-lg md:text-xl leading-relaxed
- Body: text-base leading-relaxed
- Caption: text-sm text-secondary

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Component spacing: gap-8 md:gap-12
- Container max-width: max-w-7xl mx-auto px-6

**Grid Patterns**
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Metrics: grid-cols-2 md:grid-cols-4
- Content splits: grid-cols-1 lg:grid-cols-2

## Component Library

### Navigation
- Sticky header with glass morphism effect: backdrop-blur-md bg-background/80
- Logo + main nav + CTA button layout
- Mobile: hamburger menu with slide-in drawer

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Large hero image showing global coordination/network visualization
- Prominent headline emphasizing the core value proposition
- Dual CTA buttons: primary "Get Started" + outline "View Demo"
- Trust indicators below: "200+ Contributors | <100ms Convergence | P2P Architecture"

### Process Visualization
- Three-column card layout with numbered steps
- Icon/illustration for each step (values expression, recognition, resource sharing)
- Connecting flow lines between cards (visible on desktop)
- Animated progression on scroll

### Metrics Display
- Large number typography (text-5xl font-bold) with colored accents
- Smaller context text below each metric
- Grid layout with subtle card backgrounds
- Focus on system characteristics: speed, fairness, decentralization

### Real-World Example
- Visual flow diagram with country flags/icons
- Arrow connections showing mutual recognition
- Step-by-step breakdown cards
- Before/After or Problem/Solution split layout

### Timeline Component
- Vertical timeline for implementation status
- Checkmarks for completed features
- Progress indicators for in-progress items
- Clean connector lines between milestones

### Focus Areas
- Cards describing current development priorities
- Emphasis on open participation and mutual recognition
- How contributors receive recognition through the system itself
- Clear CTA for getting involved

### Live Demo Section
- Embedded iframe with border and shadow styling
- "Try it now" heading with explanatory text
- Mobile-responsive frame sizing

### Team/Traction
- Avatar grid or carousel for key contributors
- Quote cards with contributor names and roles
- Logo grid for interested organizations

## Images

**Hero Section**: 
Large, high-quality abstract network visualization showing global coordination nodes and connections. Dark gradient overlay for text readability. Position: Full-width background spanning viewport height.

**Process Section**: 
Icon illustrations (not photos) for each of the 3 steps - can use heroicons or custom SVG icons with primary color.

**Real-World Example**: 
Simplified map or flow diagram showing Tanzania-Brazil connection with directional arrows. Can be illustrative rather than photographic.

**Team Section**: 
Professional headshots or avatar placeholders for key contributors in circular frames.

## Interactive Elements

**Buttons**
- Primary: bg-primary with subtle hover scale and brightness shift
- Outline on images: backdrop-blur-md bg-background/20 border border-primary/50
- No custom hover states needed - rely on component defaults

**Cards**
- Subtle hover lift: hover:translate-y-[-4px] transition-transform
- Border glow effect on hover: hover:border-primary/50
- Background: bg-surface with border-neutral

**Animations**
- Minimal, purposeful only
- Fade-in on scroll for sections
- Number count-up for statistics
- Gentle pulse for CTA buttons

## Accessibility
- Maintain WCAG AA contrast ratios minimum
- Focus visible states on all interactive elements
- Semantic HTML structure with proper heading hierarchy
- Alt text for all images and icons