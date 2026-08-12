# SAJA HAMED — PREMIUM PERSONAL BRAND & PORTFOLIO
## Cursor Project Specification

> This document is the single source of truth for building Saja Hamed's personal portfolio website.
> Follow the requirements exactly. Prioritize simplicity, maintainability, performance, and a polished personal-brand experience over unnecessary technical complexity.

---

# 1. PROJECT GOAL

Build a premium, modern, responsive personal brand website for:

**Saja Hamed**

Positioning:

**Front-End Developer | Digital Builder | Content Creator | AI & Automation Enthusiast**

The website should communicate:

- Strong front-end development ability
- Real-world project experience
- AI and automation interest
- Digital project experience
- Content creation
- Community impact
- Professional personal branding

The website must NOT feel like a generic student portfolio or template.

It should feel like a polished personal brand website that can impress:

- Potential clients
- Recruiters
- Companies
- Collaborators
- Developers
- Students and community members

The visitor journey should be:

**Who is Saja? → What has she built? → What makes her different? → What can she do? → How can I contact her?**

---

# 2. NON-NEGOTIABLE TECHNICAL RULES

## Framework

Use:

- React
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- React Icons

Do NOT use Next.js.

Do NOT migrate the project to TypeScript.

Do NOT introduce a backend.

Do NOT introduce a database.

Do NOT use unnecessary frameworks.

The project must remain understandable to a front-end developer who is still learning.

---

# 3. SIMPLICITY RULE

This project should be clean and simple.

DO:

- Use reusable React components
- Use clear folder names
- Keep components reasonably small
- Use centralized data
- Use simple React state where needed
- Use CSS/Tailwind for styling
- Use Framer Motion only for meaningful animations

DO NOT:

- Build a complicated architecture
- Add Redux unless absolutely necessary
- Add a state-management library
- Add a backend
- Add authentication
- Add a database
- Add unnecessary API layers
- Add complex design patterns
- Create dozens of tiny components with no value
- Over-engineer simple interactions

If something can be solved with a simple React component, do that.

---

# 4. RECOMMENDED PROJECT STRUCTURE

Use a structure similar to:

src/
  assets/
  components/
    layout/
    sections/
    ui/
  data/
    portfolioData.js
  pages/
  App.jsx
  main.jsx
  index.css

Keep the structure flexible.

Do not create folders simply to make the project look "enterprise".

---

# 5. CENTRALIZED DATA ARCHITECTURE

ALL editable portfolio content must be centralized.

Create:

`src/data/portfolioData.js`

Store:

- Personal information
- Hero content
- Social links
- Experience
- Projects
- Certifications
- Skills
- Services
- Content series
- Contact information
- AI assistant answers

Components must render from this data.

Example concept:

```js
export const portfolioData = {
  personal: {},
  socialLinks: [],
  experience: [],
  projects: [],
  certifications: [],
  skills: [],
  services: [],
  contentSeries: [],
  aiAssistant: {}
};
```

Do not hard-code repeated portfolio information inside UI components.

---

# 6. BRAND IDENTITY

## Name

Saja Hamed

Full name:

Saja Hamed Abu Mandeel

## Professional Title

English:

**Front-End Developer | Digital Builder | Content Creator | AI & Automation Enthusiast**

Arabic:

**مطورة واجهات أمامية | بانية مشاريع رقمية | صانعة محتوى | شغوفة بالذكاء الاصطناعي**

## Hero Focus

Keep the Hero focused on:

**Front-End Developer & Digital Builder**

Do not overload the Hero with every title.

Academic status belongs primarily in About / Experience.

## Brand Personality

- Confident
- Creative
- Ambitious
- Professional
- Warm
- Modern
- Authentic

## Brand Message

**I'm not just learning technology. I'm building modern digital products with it.**

---

# 7. DESIGN SYSTEM

## Color Palette

Use only this primary palette:

- Background: `#0F172A`
- Cards: `#1E293B`
- Primary Accent: `#3B82F6`
- AI Accent: `#06B6D4`
- Main Text: `#F8FAFC`
- Muted Text: `#94A3B8`

Indigo may only appear in very subtle gradients if needed.

Do NOT use:

- Rainbow gradients
- Neon overload
- Gaming aesthetics
- Excessive purple
- Excessive glassmorphism
- Excessive glowing effects

The design should feel:

**Premium + Clean + Modern + Technical + Personal**

Visual inspiration:

- Apple-level precision
- Linear-like spacing and polish
- Vercel-like simplicity

Do not copy any brand's website.

---

# 8. TYPOGRAPHY

English:

- Inter
- Manrope
- Sora

Arabic:

- IBM Plex Sans Arabic
- Tajawal

Use one primary English font and one Arabic font consistently.

Prioritize:

- Strong headings
- Comfortable body text
- Clear hierarchy
- Good line height

---

# 9. NAVBAR

Sticky navigation.

Transparent at the top.

Blur / semi-solid background after scrolling.

Logo:

**SAJA.**

Navigation:

- Home
- About
- Impact
- Work
- Why Saja
- Skills
- AI Integration
- Certifications
- Services
- Contact

Right side:

**Let's Work Together →**

Language switcher:

**AR | EN**

Mobile:

- Hamburger menu
- Smooth open/close animation
- Accessible keyboard behavior

---

# 10. WEBSITE FLOW

Follow this order:

1. Hero
2. About & Experience
3. Content & Community Impact
4. Selected Work & Case Studies
5. Why Work With Saja
6. Skills & Toolkit
7. AI Integration Showcase
8. Verified Certifications
9. Services
10. Social Presence
11. Contact
12. Floating AI Assistant

---

# 11. HERO

## Badge

**AVAILABLE FOR SELECTED PROJECTS**

## Headline

English:

**I turn ideas into modern digital experiences.**

Arabic:

**أحوّل الأفكار إلى تجارب رقمية حديثة.**

Highlight:

**digital experiences**

Use subtle Cobalt Blue emphasis.

## Supporting Text

English:

**I'm Saja Hamed — a Front-End Developer and Digital Builder crafting interactive web interfaces, AI-enhanced solutions, and automated workflows.**

Arabic equivalent should be provided in the Arabic version.

## CTAs

Primary:

**View My Work →**

Secondary:

**Let's Work Together**

## Social / Direct Links

Email:

marketingsaja279@gmail.com

LinkedIn:

https://www.linkedin.com/in/saja-hamad-dev

GitHub:

https://github.com/sajahamad

Instagram:

https://www.instagram.com/saja._hamed

Bright Gaza Talent:

https://brightgaza.com/talents/2535

## Portrait

Use:

https://i.ibb.co/3ykM3xT/saja-photo.jpg

Display it prominently.

Create an elegant portrait container with subtle depth.

Floating badges:

- React
- JavaScript
- AI
- Automation

Status:

**Currently building: Rentora & Full-Stack AI Workflows**

Do not make the hero visually overcrowded.

---

# 12. ABOUT & EXPERIENCE

Title:

**More than code. I build products.**

Explain the combination of:

- Computer Systems Engineering
- Front-End Development
- UI/UX implementation
- Digital projects
- Community work
- Content creation

## Experience

### Front-End & Digital Projects Specialist — Zero To Hero
2023 – Present

Responsibilities:

- Managing web platforms
- UI/UX implementation
- Interactive web tools
- Digital project coordination

### Front-End Development Intern — WebUra Company
2026

Focus:

- Clean code
- Responsive design
- Team collaboration
- Client-oriented web work

### Technical Trainer & Community Educator

Focus:

- Technical workshops
- Web development education
- Youth digital empowerment

Do not invent additional employment history.

---

# 13. CONTENT & COMMUNITY IMPACT

This is an important part of Saja's personal brand.

Title:

**Beyond Code. I Create Impact.**

Supporting idea:

Technology is only one part of the journey. Through content, digital education, and community initiatives, Saja shares knowledge, encourages growth, and helps students discover new possibilities.

## Three Content Pillars

### Inspire

Motivational and mindset content.

### Educate

Digital learning, university guidance, and practical technology skills.

### Empower

Helping young people believe they can build meaningful things.

---

# 14. CONTENT SERIES

## Series 01 — ابدأها صح

English label:

**Start It Right**

Purpose:

Educational and motivational content for university students.

Topics include:

- Starting university with the right mindset
- Learning independently online
- Developing digital skills
- Using online resources effectively
- Building learning roadmaps
- Staying motivated when feeling lost

Display:

- Series title
- Description
- Preview thumbnails
- Series badge
- Explore Series button

## Series 02 — High School / Tawjihi Motivational Content

Purpose:

Support and motivate high-school students.

Topics:

- Exam-result emotions
- University major selection
- Handling disappointment
- Career direction
- Personal growth
- Continuing after setbacks

Do not invent statistics about audience size.

---

# 15. SELECTED WORK

Title:

**Selected Work**

Subtitle:

**Real-world applications designed, built, and hosted on GitHub.**

Filters:

- All
- Web Development
- React
- UI/UX
- AI Integration

## Project 1 — Rentora

FEATURED CASE STUDY.

Description:

All-in-one rental marketplace platform for properties, equipment, and services.

Stack:

- React
- JavaScript
- REST APIs
- Tailwind CSS

## Project 2 — Gaza Voice

Description:

Responsive Arabic RTL news platform.

Stack:

- HTML5
- CSS3
- Bootstrap
- JavaScript

## Project 3 — Interactive Weather Application

Description:

Real-time weather dashboard.

Stack:

- React
- Vite
- Weather REST API

## Project 4 — E-Commerce Platform

Description:

Modern web store interface.

Stack:

- React
- Vite
- Tailwind CSS
- API

---

# 16. PROJECT CASE STUDY MODAL

Do not create unnecessary separate pages for every project.

Use a reusable React modal / dialog for case studies.

For each project, support:

- Problem
- My Role
- Solution
- Architecture
- Tech Stack
- Key Features
- Live Demo
- GitHub

Rentora should receive the deepest case-study content.

The modal must:

- Be responsive
- Be keyboard accessible
- Support Escape to close
- Prevent background scrolling while open
- Have clear close controls
- Animate smoothly

---

# 17. PROJECT CTA

After the project section:

**Like what you see? Let's build something together.**

CTA:

**Start a Project →**

---

# 18. WHY WORK WITH SAJA

Title:

**Why Work With Me?**

Create four clean value cards.

### 01 — I Think Beyond UI

I care about how the product works and feels, not just how it looks.

### 02 — AI-Ready Mindset

I actively explore and integrate modern AI tools into digital solutions.

### 03 — Project Ownership

I respect requirements, communication, collaboration, and deadlines.

### 04 — Continuous Evolution

I treat every project as an opportunity to improve code quality and user experience.

---

# 19. SKILLS & TOOLKIT

Do NOT use fake percentage bars.

Use technology cards.

## Front-End

- React
- JavaScript ES6+
- HTML5
- CSS3
- Tailwind CSS
- Bootstrap
- Vite

## AI & Tools

- Claude Code
- Anthropic AI Frameworks
- Prompt Engineering
- API Integration

## Design & Product

- UI/UX Basics
- Figma
- Media Editing
- Digital Content Strategy

## Dev Tools

- Git
- GitHub
- REST APIs
- Responsive Web Design

---

# 20. AI INTEGRATION SHOWCASE

Title:

**AI-Ready Web Experiences**

Explain how AI can enhance modern web products.

Create a visual workflow:

**User Input → AI Logic → Application Logic → Result**

Keep this visual elegant and understandable.

Do not pretend that a real AI backend exists if it has not been implemented.

---

# 21. CERTIFICATIONS

Create credential cards.

Each card should include:

- Certificate name
- Issuing organization
- Short description
- View Credential button

Certificates:

1. AI Fluency: Framework & Foundations — Anthropic / UCC / Ringling College
2. Claude Code 101 — Anthropic
3. Front-End Development Internship (120 Hours) — Zero to Hero
4. Front-End Development Internship — WebUra Company
5. Google UX/UI Professional Certificate (200 Hours)
6. Advanced Soft Skills & Communication (180+ Hours)

Do not invent credential URLs.

Use placeholder fields in `portfolioData.js` where a credential URL is not available.

---

# 22. SERVICES

Create four service cards.

### Front-End Web Development

Responsive React web applications.

### UI/UX Interface Implementation

Pixel-perfect interactive layouts.

### AI Capability Integration

Adding intelligent tools and APIs into web interfaces.

### Content Strategy & Digital Project Planning

Structuring ideas into actionable digital projects.

CTA:

**Have a project in mind? Tell me about it →**

---

# 23. SOCIAL PRESENCE

Title:

**Beyond Development**

Supporting text:

**Building products, sharing knowledge, and creating content that inspires people to move forward.**

Cards:

- Instagram
- TikTok
- LinkedIn
- GitHub
- Bright Gaza

Use real links only where provided.

For TikTok, create an editable placeholder if the exact profile URL is not yet provided.

---

# 24. CONTACT

Title:

**Have an idea? Let's build it.**

Availability:

**● Open to selected opportunities & collaborations**

Form fields:

- Name
- Email
- Project Type
- Scope / Budget
- Message

The form should be UI-ready.

Do not build a backend.

Do not pretend the form sends emails.

If no form backend exists, provide a clean frontend validation state and a clear future integration point.

Direct contact:

marketingsaja279@gmail.com

Social links should come from `portfolioData.js`.

---

# 25. ASK SAJA'S AI

Create a floating button:

**Ask Saja's AI ✨**

When clicked, open a small chat widget.

Initial implementation must be local only.

Use structured portfolio data and predefined answers.

Quick questions:

- Who is Saja?
- What technologies does she use?
- What projects has she built?
- What services does she offer?
- How can I hire her?

IMPORTANT:

Do NOT create a fake API.

Do NOT pretend a real AI model is connected.

Keep the component modular so an AI API or n8n workflow can be connected later.

---

# 26. ANIMATIONS

Use Framer Motion sparingly.

Recommended:

- Fade-up section reveals
- Smooth card hover
- Button hover
- Modal transitions
- Hero entrance
- Subtle floating elements

Avoid:

- Constant motion
- Excessive parallax
- Distracting particles
- Heavy 3D effects
- Long animation delays

The site should remain fast.

---

# 27. RESPONSIVE DESIGN

Must work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile priorities:

- Readable typography
- Simple navigation
- Touch-friendly buttons
- No horizontal overflow
- Proper image sizing
- Smooth modal behavior
- Easy contact form

Test at common mobile widths.

---

# 28. ACCESSIBILITY

Implement:

- Semantic HTML
- Proper heading hierarchy
- Alt text
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Form labels
- Good color contrast
- Reduced-motion consideration

---

# 29. PERFORMANCE

Prioritize performance.

Use:

- Lazy loading for non-critical images
- Optimized image rendering
- Minimal dependencies
- No unnecessary API calls
- No unnecessary libraries
- Reusable components
- Efficient React rendering

Do not sacrifice performance for visual effects.

---

# 30. SEO

Add:

Title:

**Saja Hamed | Front-End Developer & Digital Builder**

Description:

**Portfolio of Saja Hamed — Front-End Developer and Digital Builder creating modern web experiences, AI-enhanced solutions, and smart digital workflows.**

Also prepare:

- Favicon
- Open Graph metadata
- Semantic HTML
- Descriptive page metadata

---

# 31. URL / EXTERNAL LINK RULES

Keep all external URLs centralized in `portfolioData.js`.

Do not scatter URLs across components.

Known links:

Email:
marketingsaja279@gmail.com

LinkedIn:
https://www.linkedin.com/in/saja-hamad-dev

GitHub:
https://github.com/sajahamad

Instagram:
https://www.instagram.com/saja._hamed

Bright Gaza:
https://brightgaza.com/talents/2535

Portrait:
https://i.ibb.co/3ykM3xT/saja-photo.jpg

---

# 32. CONTENT ACCURACY RULE

This is extremely important.

Do NOT invent:

- Clients
- Testimonials
- Companies
- Jobs
- Statistics
- Followers
- Project results
- Revenue
- Certifications
- Credential links
- Awards

If information is missing, use an editable placeholder in the data file.

The website should communicate confidence without exaggeration.

---

# 33. LANGUAGE SUPPORT

Build the UI so Arabic and English content can coexist cleanly.

The language switcher:

**AR | EN**

should switch the visible content.

Arabic mode:

- Use RTL
- Use Arabic font
- Correct text alignment
- Correct icon positioning
- Correct spacing
- Keep layout responsive

English mode:

- Use LTR
- Use English font

Do not introduce a large internationalization framework unless absolutely necessary.

A simple centralized language object is preferred.

---

# 34. COMPONENT GUIDELINE

Suggested reusable components:

- Navbar
- Button
- SectionHeader
- SocialLinks
- Hero
- About
- ExperienceCard
- ContentImpact
- ContentSeriesCard
- Projects
- ProjectCard
- ProjectFilter
- CaseStudyModal
- WhySaja
- Skills
- SkillCard
- AIShowcase
- Certifications
- CredentialCard
- Services
- SocialPresence
- Contact
- AIAssistant
- Footer

Do not create components for every small `<div>`.

---

# 35. DEVELOPMENT PHASES

## PHASE 1 — FOUNDATION

Build:

- Vite + React setup
- Tailwind
- Global styles
- Data architecture
- Navbar
- Responsive layout

Do not start with complex animations.

## PHASE 2 — CORE BRAND

Build:

- Hero
- About
- Experience
- Content & Community
- Projects

## PHASE 3 — CONVERSION

Build:

- Why Saja
- Skills
- Services
- Contact
- CTAs

## PHASE 4 — TRUST & DIFFERENTIATION

Build:

- Certifications
- AI Integration Showcase
- Social Presence

## PHASE 5 — INTERACTION

Add:

- Framer Motion
- Project case-study modal
- AI assistant UI
- Mobile navigation animation
- Hover states

## PHASE 6 — POLISH

Check:

- Responsive behavior
- Accessibility
- Performance
- SEO
- RTL
- Broken links
- Console errors
- Build errors

---

# 36. IMPORTANT CURSOR INSTRUCTIONS

Before writing code:

1. Inspect the existing project.
2. Do not delete useful existing files without reason.
3. Explain the implementation plan briefly.
4. Create the simplest maintainable architecture.
5. Implement the core website first.
6. Run the project.
7. Check for errors.
8. Fix errors before moving to the next phase.

When making changes:

- Prefer small, understandable edits.
- Do not rewrite unrelated files.
- Do not add dependencies unless necessary.
- Do not change the chosen stack.
- Do not replace React with another framework.

If a requirement is ambiguous:

**Prefer the simplest implementation that satisfies the requirement.**

---

# 37. DEFINITION OF DONE

The project is considered complete only when:

- React + Vite works
- No console errors
- No build errors
- Responsive desktop/mobile layout works
- Navigation works
- All sections render correctly
- Projects render from centralized data
- Project filtering works
- Case study modal works
- Contact form UI works
- AI assistant UI works locally
- Social links work
- Image loads correctly
- Arabic/English direction works
- Animations are subtle and performant
- No fake information has been added
- Code is readable and maintainable
- README explains how to run and update the portfolio

---

# FINAL CREATIVE DIRECTION

The final experience should make a visitor think:

**"This is not just a developer showing projects."**

It should communicate:

**Saja builds.  
Saja learns.  
Saja creates.  
Saja shares.  
Saja automates.  
Saja creates impact.**

The website should feel like a real personal brand with technical credibility — not a university assignment.

Build it with React.
Keep it simple.
Keep it maintainable.
Make it premium.
Do not over-engineer it.
