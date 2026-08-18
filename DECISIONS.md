# DECISIONS.md

## 1. Why this approach?

I chose the Premium Home Page track because the challenge is primarily about
product thinking, visual hierarchy, interaction quality, and shipping a
responsive interface rather than simply producing a UI mockup.

For the implementation, I used React with Vite, Tailwind CSS, Framer Motion,
and Lucide React. I considered building the page with plain HTML/CSS, but
React gave me a cleaner component structure for reusable sections such as the
Navbar, Hero, Product Showcase, Insights, How It Works, Final CTA, and Footer.

I also chose to show the product through dashboard-style UI rather than relying
on testimonials, customer logos, or invented statistics. This keeps the
experience visually convincing while remaining honest about the product being
a concept.

## 2. Trade-off under the time limit

The main trade-off was depth versus breadth. Instead of building a large
number of pages or speculative product features, I focused on making the
homepage feel complete: responsive layouts, clear CTAs, product visualization,
scroll-based motion, navigation interactions, authentication entry points,
and a complete light/dark theme.

With a real week, I would spend additional time on accessibility testing,
performance optimization, browser/device testing, keyboard navigation, and
connecting the dashboard preview to realistic API-driven data.

## 3. AI usage and personal verification

I used AI tools as an implementation and brainstorming assistant for parts of
the frontend development, including component structure, animation ideas,
responsive styling, and debugging.

I personally reviewed and integrated the generated code rather than treating
AI output as a final implementation. I verified the application by running
the production build, checking the responsive layout at 390px and 1440px,
reviewing the navigation and authentication flows, and checking the final
Git state before committing changes.

The final design decisions, visual direction, product copy, component
organization, and integration choices were reviewed and adjusted manually.