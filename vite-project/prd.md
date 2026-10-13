# Product Requirements Document (PRD)

## Project: Hamza Alam --- Cinematic Personal Portfolio

**Document version:** 1.0\
**Date:** 13 October 2026\
**Target tool:** Google Antigravity\
**Project type:** Existing React + Vite + Tailwind CSS website\
**Primary goal:** Complete the existing portfolio into a polished,
responsive, multi-section personal website with smooth motion,
distinctive visual storytelling, and a professional project showcase.

------------------------------------------------------------------------

## 1. Product Overview

Build on the user's existing portfolio rather than replacing it with an
unrelated template. The current design has a dark background, oversized
red "PORTFOLIO" typography, a monochrome portrait, a serif "Hello, I'm"
line, a bold "HAMZA" heading, red role text, short introduction, and
red-accented statistics. The user already has a navbar, hero section,
and about section in progress.

The finished experience should feel like entering a cinematic digital
world: dark, minimal, bold, slightly mysterious, and premium. Use
black/charcoal surfaces, strong red accents, white typography,
restrained gradients, atmospheric lighting, depth, and purposeful
animation. The site must remain readable and fast, not become a
distracting animation demo.

**Important:** Inspect the existing codebase first. Keep working
components, existing design decisions, routes, and assets where
possible. Do not overwrite the project blindly or rebuild everything
from scratch unless the current implementation genuinely requires it.

## 2. User and Audience

### Primary user

Mohd Hamza Alam Khan --- a Class 12 commerce student learning to build
websites with AI and experimenting with web design and development.

### Audience

-   Visitors viewing the portfolio through a shared link.
-   Potential collaborators, other learners, and people interested in
    the user's projects.
-   Recruiters or clients in the future, without falsely claiming
    professional experience.

### Portfolio positioning

Present Hamza as an aspiring web designer and developer who enjoys
turning ideas into interactive digital experiences. Keep the wording
honest and editable.

## 3. Goals and Success Criteria

1.  Extend the existing hero/about/navbar into a complete portfolio with
    meaningful sections and navigation.
2.  Create a consistent visual system across all pages.
3.  Use smooth, high-quality animations that support the content.
4.  Showcase real projects with clear descriptions and working links
    where available.
5.  Work well on mobile, tablet, and desktop.
6.  Keep the project easy for a beginner to understand and maintain.
7.  Preserve compatibility with the existing React + Vite + Tailwind
    setup.
8.  Ensure the site runs locally with the project's existing commands
    and can be deployed to a static host such as GitHub Pages if
    configured.

### Acceptance criteria

-   No broken navigation links, missing images, or console errors in
    normal use.
-   Every main navigation item leads to a real section or page.
-   All major sections are responsive at mobile, tablet, and desktop
    widths.
-   Motion respects `prefers-reduced-motion`.
-   The website remains usable with keyboard navigation.
-   No fabricated client numbers, testimonials, work history, or project
    outcomes.
-   Existing content and portrait are preserved unless the user chooses
    to replace them.

## 4. Technical Constraints

-   **Framework:** Use the React + Vite project already in the
    repository.
-   **Styling:** Use the installed Tailwind CSS setup. Check the
    project's version and configuration before writing classes or
    changing configuration.
-   **Language:** JavaScript/JSX by default; follow the repository's
    existing TypeScript or JavaScript convention.
-   **Routing:** Inspect whether React Router or another router is
    already installed. Reuse it if present. If not, prefer a
    well-structured single-page portfolio with anchor navigation rather
    than adding unnecessary dependencies. Add a router only if distinct
    routes materially improve the project.
-   **Animation:** Prefer CSS transitions/keyframes and use an animation
    library only if it is already installed or adds clear value. Do not
    install a large dependency just for simple reveal effects.
-   **Icons:** Reuse the existing icon library if one is installed;
    otherwise use simple inline SVGs or CSS.
-   **Deployment:** Avoid server-only APIs and features that require a
    backend. All core pages should work as a static site.
-   **Assets:** Reuse supplied local images. Do not hotlink random
    images or invent image paths. If a needed asset is unavailable,
    create a clearly marked placeholder and explain how the user can
    replace it.
-   **Performance:** Avoid heavy 3D engines, large video backgrounds,
    excessive blur, or animation loops that strain low-powered devices.

## 5. Visual Direction

### Existing design to preserve

-   Very dark/black background.
-   Bold, oversized red "PORTFOLIO" heading.
-   White and red typography.
-   Monochrome portrait as a focal point.
-   Serif italic accent for "Hello, I'm".
-   Minimal, editorial layout with asymmetrical spacing.
-   Red statistics or small labels on the right.

### Design tokens

Use these as a starting point and consolidate them into CSS variables or
the project's Tailwind theme where appropriate.

-   Background: near-black (`#070707` or equivalent).
-   Surface: charcoal (`#111111`).
-   Primary accent: vivid/deep red inspired by the current hero
    (`#D20D25`).
-   Main text: off-white (`#F4F2F2`).
-   Secondary text: muted gray (`#A4A0A0`).
-   Borders: subtle charcoal-gray with low contrast.
-   Display typography: bold modern sans-serif.
-   Accent typography: elegant serif italic, used sparingly.
-   Corner radius: mostly small-to-medium; use large rounded shapes only
    when they support the design.
-   Spacing: generous, consistent, and responsive.

Do not make every section a generic rounded card. Mix editorial layouts,
large typography, fine dividers, image-led panels, and selected cards.

## 6. Information Architecture

Create the following sections or pages. If the project is currently a
single page, implement these as sections with smooth anchor navigation
first. Use separate routes only when it improves the experience and
works with the current setup.

### 6.1 Navbar

-   Brand/monogram or "HAMZA".
-   Links: Home, About, Skills, Projects, Journey, Contact.
-   Active section indication where practical.
-   Smooth scroll to sections.
-   Mobile menu with accessible open/close behavior.
-   Transparent or subtle dark background over the hero; optional
    sticky/fixed behavior.
-   A small "Let's Talk" or "Contact" action.
-   Keep the navbar visually light so it does not compete with the hero.

### 6.2 Hero --- refine existing section

-   Preserve the existing portrait and overall composition.
-   Keep the large "PORTFOLIO" display title, but prevent clipping on
    narrow screens.
-   Main introduction: "Hello, I'm Hamza" and "Aspiring Web Designer &
    Developer" (editable text).
-   Short supporting statement about building thoughtful digital
    experiences.
-   Primary CTA: "Explore My Work".
-   Secondary CTA: "About Me".
-   Add a small scroll indicator.
-   Optional subtle portrait parallax or background glow, with
    restrained movement.
-   Remove unsupported claims such as "3+ years experience", "40+
    projects", or "20+ happy clients" unless the user confirms they are
    true. Use honest alternatives like "Learning by Building", "Projects
    in Progress", or omit statistics.
-   Make sure the portrait, text, and CTA do not overlap at any screen
    size.

### 6.3 About

-   A short, human introduction about Hamza as a student learning web
    design/development and experimenting with projects.
-   Highlight interests such as design, coding, fitness, and learning
    through building.
-   Include an image or portrait only if an appropriate asset exists.
-   Use an editorial split layout with a small "A LITTLE ABOUT ME"
    label.
-   Optional animated timeline or decorative line.
-   Keep all copy editable and avoid overclaiming.

### 6.4 Skills / Toolbox

-   Group skills into sensible categories such as:
    -   Frontend: HTML, CSS, JavaScript, React.
    -   Styling and tools: Tailwind CSS, VS Code, Git, GitHub.
    -   Workflow: prototyping, responsive design, AI-assisted
        experimentation.
-   Only display technologies the user has actually used or is actively
    learning. Mark learning-level skills honestly.
-   Use compact typographic labels, small icons, or restrained
    progress-free indicators.
-   Do not use misleading skill percentages or proficiency meters.
-   Reveal groups with subtle staggered animation.

### 6.5 Selected Projects

-   This should be one of the most visually important sections.
-   Build a responsive project grid or editorial project list with
    strong image/preview areas.
-   Each project item should support:
    -   Project title.
    -   One-sentence summary.
    -   Technology tags.
    -   Optional status: "Live", "In Progress", or "Experiment".
    -   Live demo link, if available.
    -   Source-code link, if available.
-   Add hover states such as image zoom, border/accent reveal, arrow
    movement, or a gentle lift.
-   Make each card usable by keyboard and touch; do not hide essential
    details behind hover.
-   Add a project-detail route/modal only if useful and compatible with
    the current architecture.
-   Never fabricate project names, descriptions, links, user metrics, or
    client results. If details are missing, create clearly labeled
    sample placeholders in a central data file and explain how to
    replace them.

### 6.6 Project Detail Experience (optional)

If the existing project structure supports routing cleanly, create a
reusable detail layout for selected projects: - Project overview. -
Problem or idea. - Design/development process. - Tools used. -
Screenshots. - Links to demo and repository. - Next/previous project
navigation. If real case-study content is unavailable, do not generate
fake case studies. Keep this optional until real project information is
provided.

### 6.7 Journey / Learning Timeline

-   A visual timeline showing the user's learning journey.
-   Entries should be editable and based only on confirmed details.
-   Start with broad entries such as "Exploring web development",
    "Building portfolio experiments", and "Learning through projects",
    rather than invented dates or achievements.
-   Use a vertical timeline on mobile and a horizontal or vertical
    layout on larger screens.
-   Animate the line and entries when they enter the viewport.

### 6.8 Design Philosophy / What I Value

A compact section with 3 principles: - Clarity: make the interface easy
to understand. - Interaction: use motion to guide attention. -
Curiosity: keep experimenting and improving. Use subtle animated markers
or numbered typography instead of oversized generic cards.

### 6.9 Testimonials (only if genuine)

-   Keep the existing testimonial section if the quotes are real and
    permission to publish them is available.
-   Do not invent names, photos, company titles, or quotes.
-   If no genuine testimonials exist, replace the section with "What I'm
    Building Toward", a short design philosophy section, or project
    highlights.
-   If placeholder testimonials already exist, label them as demo
    content during development and remove them before launch.

### 6.10 Contact

-   Strong closing headline such as "Have an idea? Let's build
    something."
-   Email link only when the user supplies a real public email address.
-   Social links only when the actual URLs are supplied.
-   Optional simple contact form UI. Do not present it as functional
    unless a real form service/backend is configured.
-   If there is no backend, use a clearly labeled email link or
    copy-to-clipboard interaction instead of a fake submit action.
-   Add clear hover/focus states and a success/error message only when
    the action can genuinely produce that state.

### 6.11 Footer

-   Preserve or improve the existing footer.
-   Include brand/monogram, navigation shortcuts, verified social links,
    and a copyright year generated appropriately.
-   Add a "Back to top" control.
-   Keep it visually quiet and aligned with the site's dark/red design.

## 7. Motion and Interaction Requirements

Use motion to add depth and polish, not to slow users down.

### Recommended effects

-   Hero title: brief opacity/position entrance.
-   Hero portrait: subtle scale-in or mask reveal.
-   Section headings: reveal on entering the viewport.
-   Project cards: slight image zoom and accent line/arrow movement.
-   Navbar: restrained background transition after scrolling.
-   Background: low-intensity glow or grain using CSS, only if
    performance remains good.
-   Buttons: smooth color, border, and arrow transitions.
-   Timeline: staggered entry reveal.
-   Optional pointer-based tilt on desktop project cards, with very
    small rotation and no essential information depending on it.

### Motion rules

-   Keep most transitions around 180--500 ms.
-   Avoid long intro sequences that block access to the content.
-   Do not hijack scrolling or force the user through a cinematic
    loading screen.
-   Do not animate every element simultaneously.
-   Disable or greatly reduce nonessential animation when
    `prefers-reduced-motion: reduce` is active.
-   Disable pointer-parallax/tilt on touch devices and where hover is
    unavailable.
-   Avoid continuous expensive animations, huge blur layers, and
    excessive `will-change`.
-   Use Intersection Observer or an existing lightweight solution for
    reveal-on-scroll; clean up observers correctly.
-   Ensure animations do not cause layout shifts or hide content when
    JavaScript fails.

## 8. Responsive Design

### Desktop

-   Use the full editorial composition and asymmetrical layouts.
-   Allow large typography and generous whitespace.
-   Keep content within a readable maximum width.

### Tablet

-   Reduce title sizes and gaps.
-   Reflow split layouts when space is limited.
-   Avoid narrow text columns.

### Mobile

-   Stack hero content cleanly.
-   Scale "PORTFOLIO" with responsive typography such as `clamp()`.
-   Keep the portrait visible without covering text.
-   Use a mobile menu with an accessible button and clear state.
-   Make buttons and links comfortably tappable.
-   Avoid horizontal overflow.
-   Ensure project details are visible without hover.
-   Test at approximately 360px, 390px, 768px, 1024px, and 1440px
    widths.

## 9. Accessibility

-   Use semantic `header`, `nav`, `main`, `section`, and `footer`
    elements.
-   Keep a logical heading hierarchy.
-   Provide meaningful alt text for content images; use empty alt text
    for decorative images.
-   Ensure keyboard focus is visible.
-   Ensure navigation and interactive controls work with keyboard and
    touch.
-   Use sufficient text contrast.
-   Do not communicate status through color alone.
-   Respect reduced-motion preferences.
-   Give mobile-menu controls accessible labels and `aria-expanded`
    state.
-   Avoid clickable `div` elements when a button or link is appropriate.

## 10. Content and Data Management

-   Keep projects, skills, timeline entries, and social links in clearly
    named data files or arrays rather than duplicating markup.
-   Use simple component names, for example:
    -   `Navbar`
    -   `Hero`
    -   `About`
    -   `Skills`
    -   `Projects`
    -   `ProjectCard`
    -   `Journey`
    -   `Values`
    -   `Testimonials`
    -   `Contact`
    -   `Footer`
-   Adapt naming to the existing project rather than creating duplicate
    components.
-   Keep personal copy easy to edit.
-   Add comments only where they help a beginner understand non-obvious
    code.
-   Never include private credentials, API keys, or secrets in the
    repository.

## 11. Suggested Project Structure

First inspect the actual repository and follow its conventions. If a
structure is needed, use a simple structure similar to:

``` text
src/
  assets/
    images/
  components/
    Navbar.jsx
    Footer.jsx
    SectionHeading.jsx
    ProjectCard.jsx
    Reveal.jsx
  sections/
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Journey.jsx
    Values.jsx
    Testimonials.jsx
    Contact.jsx
  data/
    projects.js
    skills.js
    journey.js
    socialLinks.js
  App.jsx
  main.jsx
  index.css
```

Do not create all these files blindly if the existing app uses a
different layout. Avoid duplicate `App` files, unused components, and
unnecessary abstractions.

## 12. Performance Requirements

-   Keep the site lightweight and usable on a lower-powered laptop and
    mid-range mobile phone.
-   Prefer optimized local images and correct image sizing.
-   Lazy-load below-the-fold images where appropriate.
-   Avoid unnecessary dependencies and large background videos.
-   Prevent repeated state updates on every pointer movement where CSS
    can do the job.
-   Clean up event listeners and observers.
-   Avoid console warnings and React key errors.
-   Do not delay page interaction while animations run.
-   Use CSS transforms and opacity for most animations.
-   Verify the production build succeeds.

## 13. SEO and Sharing

-   Add a meaningful page title, meta description, and theme color.
-   Use a sensible favicon if an asset is available; otherwise leave a
    clear placeholder.
-   Add Open Graph metadata where appropriate, using valid local or
    deployed asset paths.
-   Use descriptive link text and meaningful page headings.
-   Do not add fake structured data, fake business details, or false
    professional claims.

## 14. Functional Requirements

-   Navbar links scroll or navigate to the correct destination.
-   Mobile navigation opens and closes reliably.
-   CTA buttons lead to meaningful sections or valid links.
-   Project demo/source links work when supplied.
-   Back-to-top control works.
-   Any copy-email action gives truthful feedback and handles missing
    email configuration gracefully.
-   Contact form must not pretend to send messages if no service is
    configured.
-   All interactive controls have hover, focus, and active states.
-   No button should be decorative while appearing functional.
-   No dead links or empty sections should remain in the final version.

## 15. Antigravity Execution Plan

Follow these phases in order. After each phase, inspect the result
before moving on.

### Phase 1 --- Audit the existing project

1.  Inspect the repository tree, `package.json`, Vite configuration,
    Tailwind configuration, entry point, and current components.
2.  Run the existing project using its current scripts.
3.  Identify what is already implemented: navbar, hero, about, footer,
    testimonials, and any other sections.
4.  Check current image assets and identify the portrait shown in the
    hero.
5.  Note existing bugs, responsive issues, dependencies, and deployment
    assumptions.
6.  Do not delete or replace working code before understanding it.

### Phase 2 --- Stabilize the design system

1.  Define consistent colors, typography, spacing, borders, and
    responsive widths.
2.  Fix the existing navbar, hero, and about section before expanding.
3.  Make the hero responsive and preserve the red/black visual identity.
4.  Remove or replace any unsupported experience/project/client
    statistics.
5.  Verify the layout at mobile and desktop widths.

### Phase 3 --- Build the remaining sections

1.  Add Skills/Toolbox.
2.  Add Selected Projects using reusable components and editable data.
3.  Add Journey/Timeline.
4.  Add Design Philosophy/Values.
5.  Review Testimonials for authenticity.
6.  Add Contact.
7.  Polish the Footer and navigation.
8.  Keep the layout consistent and avoid repetitive card grids.

### Phase 4 --- Add motion and interactions

1.  Implement entrance/reveal animations.
2.  Add project hover and focus states.
3.  Add subtle hero depth/parallax only if it stays smooth.
4.  Add reduced-motion behavior and disable touch-inappropriate effects.
5.  Verify no content is hidden or inaccessible when animations are
    reduced.

### Phase 5 --- Quality assurance

1.  Run the development server and inspect the actual page.
2.  Check all sections, links, buttons, and mobile menu.
3.  Test responsive widths and keyboard navigation.
4.  Inspect browser console for errors and warnings.
5.  Run the existing production build command.
6.  Fix build errors, broken asset paths, overflow, and layout shifts.
7.  Summarize the changes and list any details the user still needs to
    supply, such as real project URLs, social links, email, or genuine
    testimonials.

## 16. Definition of Done

The portfolio is complete when: - The existing project still runs using
the repository's expected commands. - The existing visual identity is
preserved and refined. - The page contains the planned sections with
coherent spacing and responsive layouts. - Animations feel smooth but do
not block reading or interaction. - All content is honest, editable, and
free of invented credentials. - Real links work; missing links are
clearly identified for the user to fill in. - The mobile menu, CTAs, and
footer controls work. - Reduced-motion and keyboard accessibility are
addressed. - The production build passes. - The user receives a concise
summary of files changed and how to run/deploy the site.

## 17. Final Instruction to Antigravity

Act as a careful senior frontend developer and design partner. **Inspect
first, then implement incrementally.** Use the existing React, Vite, and
Tailwind setup. Preserve the user's current red-and-black portfolio
design and portrait. Do not replace the project with a generic template,
do not invent personal achievements, and do not add unnecessary
dependencies. Prioritize a beautiful visual result, responsive behavior,
clean component structure, beginner-friendly code, smooth lightweight
animations, and working interactions. After implementation, run the app
and build, fix issues, and explain what was completed and what real
content still needs to be supplied.
