# Next.js — Mastery Learning Guide

> **Goal:** Go from zero to production-ready Next.js developer.
> **Approach:** Follow roadmap.sh structure + W3Schools React foundations, then test each concept interactively in this repo's Skill Enhancer system.

---

## Sources

| Source | URL | Use |
|--------|-----|-----|
| roadmap.sh | https://roadmap.sh/nextjs | Full learning path (94 topics) |
| W3Schools React | https://www.w3schools.com/react/ | React fundamentals (prerequisite) |
| Next.js Docs | https://nextjs.org/docs | Official reference |
| Next.js Learn | https://nextjs.org/learn | Official interactive course (16-chapter dashboard project) |
| react.dev | https://react.dev/learn | Official React docs — Quick Start, hooks, state management |
| javascript.info | https://javascript.info/ | Modern JS deep-dive (ES6+, async, DOM, network requests) |
| freeCodeCamp | https://www.freecodecamp.org/news/tag/react/ | Free articles, React & Next.js handbooks, projects |
| MDN Web Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development | Web fundamentals, HTML/CSS/JS references |
| The Odin Project | https://www.theodinproject.com/paths | Full Stack JavaScript path — free, project-based curriculum |

---

## Learning Path Overview

```
Phase 1: Prerequisites (Week 1-2)
Phase 2: Next.js Fundamentals (Week 3-4)
Phase 3: Routing & Data Fetching (Week 5-6)
Phase 4: Styling & Optimization (Week 7)
Phase 5: Testing & Deployment (Week 8)
Phase 6: Advanced Patterns (Week 9-10)
```

---

## Phase 1: Prerequisites (Week 1-2)

### 1.1 JavaScript Basics Refresher
- [ ] ES6+ features (destructuring, spread, arrow functions, template literals)
- [ ] Promises, async/await
- [ ] Array methods (map, filter, reduce)
- [ ] Modules (import/export)

**W3Schools:** https://www.w3schools.com/js/

### 1.2 React Basics (via W3Schools)
- [ ] What is React & why use it
- [ ] JSX syntax and expressions
- [ ] Components (functional)
- [ ] Props — passing data to components
- [ ] State — useState hook
- [ ] Side Effects — useEffect hook
- [ ] Conditional rendering
- [ ] Lists and keys
- [ ] Forms and controlled components
- [ ] React Router basics (to understand routing concept)

**W3Schools:** https://www.w3schools.com/react/

### 1.3 Why Frontend Frameworks / SPA vs SSR
- [ ] Understand SPA (Single Page Application)
- [ ] Understand SSR (Server-Side Rendering)
- [ ] Understand SSG (Static Site Generation)
- [ ] Understand CSR (Client-Side Rendering)
- [ ] Why Next.js over plain React

**roadmap.sh:** https://roadmap.sh/nextjs — "Why Frontend Frameworks", "SPA vs SSR"

#### 🧪 Interactive Test Ideas for Phase 1
```
Scenario: "You need a page to load with SEO-friendly content already in the HTML. 
Which rendering strategy should you use?"
Options: [CSR, SSR, SSG, ISR]
Answer: SSR or SSG (depending on dynamic vs static)

Scenario: "Your React component needs to fetch user data when it first loads."
Options: [useState, useEffect, useRef, useMemo]
Answer: useEffect
```

---

## Phase 2: Next.js Fundamentals (Week 3-4)

### 2.1 Introduction to Next.js
- [ ] What is Next.js and why use it
- [ ] Next.js vs Remix (understand alternatives)
- [ ] Rendering strategies overview (SSR, SSG, ISR, CSR in Next.js)

### 2.2 Project Setup
- [ ] `create-next-app` — scaffold a new project
- [ ] Project structure walkthrough (app/, public/, next.config.js)
- [ ] TypeScript setup in Next.js
- [ ] ESLint + Prettier configuration
- [ ] Environment variables (.env.local, NEXT_PUBLIC_ prefix)

**Practice:** Create a new Next.js app from scratch. Explore every file.

### 2.3 App Router Fundamentals
- [ ] Why use App Router (vs Pages Router)
- [ ] Routing terminology (segments, layouts, pages)
- [ ] File-based routing (`page.tsx`, `layout.tsx`)
- [ ] Nested routes and route groups
- [ ] Dynamic routes `[slug]` and `[...catchAll]`
- [ ] Loading states (`loading.tsx`)
- [ ] Error states (`error.tsx`)
- [ ] `not-found.tsx`

**roadmap.sh:** https://roadmap.sh/nextjs — "Why use App Router?", "Routing Patterns"

#### 🧪 Interactive Test Ideas for Phase 2
```
Scenario: "You need a URL like /blog/my-first-post where the post slug is dynamic."
Options: [page.tsx in /blog/, [slug]/page.tsx in /blog/, route.ts, layout.tsx]
Answer: [slug]/page.tsx in /blog/

Scenario: "You want a loading spinner to show while a page's data loads."
Options: [loading.tsx, error.tsx, layout.tsx, Suspense boundary]
Answer: loading.tsx

Scenario: "You need shared UI (nav, footer) across all pages in /dashboard/*."
Options: [layout.tsx in /dashboard/, template.tsx, page.tsx, middleware.ts]
Answer: layout.tsx in /dashboard/
```

---

## Phase 3: Routing & Data Fetching (Week 5-6)

### 3.1 Advanced Routing
- [ ] Layouts and Templates (difference between them)
- [ ] Parallel routes (`@slot`)
- [ ] Intercepting routes (`(.)`, `(..)`, `(...)`)
- [ ] Route handlers (API endpoints via `route.ts`)
- [ ] Middleware (`middleware.ts`)

### 3.2 Server vs Client Components
- [ ] Server Components (default in App Router)
- [ ] Client Components (`'use client'` directive)
- [ ] Composition patterns (server wrapping client)
- [ ] When to use which

### 3.3 Data Fetching Patterns
- [ ] Server-side data fetching (fetch in server components)
- [ ] Memoization in fetch (automatic request deduplication)
- [ ] Caching data (Next.js cache behavior)
- [ ] Revalidating cached data (time-based, on-demand)
- [ ] Parallel vs sequential data fetching
- [ ] Preloading data patterns

### 3.4 Server Actions
- [ ] What are Server Actions
- [ ] Using `'use server'` directive
- [ ] Form handling with Server Actions
- [ ] Revalidation after mutations
- [ ] Error handling in Server Actions

### 3.5 Rendering Strategies Deep Dive
- [ ] Client-rendered pages
- [ ] Server-rendered pages
- [ ] Loading and Streaming (React Suspense)
- [ ] Partial prerendering

**roadmap.sh:** https://roadmap.sh/nextjs — "Data Fetching Patterns", "Server Actions", "Rendering"

#### 🧪 Interactive Test Ideas for Phase 3
```
Scenario: "You have a component that needs onClick handlers and useState."
Options: [Server Component, Client Component, API Route, Middleware]
Answer: Client Component

Scenario: "You need to fetch data at request time with fresh data every time."
Options: [fetch with cache: 'force-cache', fetch with cache: 'no-store', getStaticProps, useEffect]
Answer: fetch with cache: 'no-store'

Scenario: "A form needs to insert data into a database without an API route."
Options: [Server Action, Client-side fetch, getServerSideProps, API Route]
Answer: Server Action

Scenario: "You want the same fetch call in multiple components to only hit the API once."
Options: [React.memo, useMemo, Request Memoization, localStorage cache]
Answer: Request Memoization
```

---

## Phase 4: Styling & Optimization (Week 7)

### 4.1 Styling Methods
- [ ] Global CSS
- [ ] CSS Modules (`.module.css`)
- [ ] Sass/SCSS support
- [ ] Tailwind CSS integration
- [ ] CSS-in-JS considerations

### 4.2 Optimizing Assets
- [ ] `next/image` — Image optimization
- [ ] `next/font` — Font optimization
- [ ] `next/script` — Script loading strategies
- [ ] Video handling
- [ ] Metadata and SEO (`metadata` export, `generateMetadata`)
- [ ] Static assets (public/ folder)

### 4.3 Performance Optimization
- [ ] Lazy loading (dynamic imports with `next/dynamic`)
- [ ] Bundle analysis and package bundling
- [ ] Analytics integration
- [ ] OpenTelemetry instrumentation
- [ ] Memory usage optimization

### 4.4 Markdown & MDX
- [ ] MDX support in Next.js
- [ ] Creating blog posts with MDX
- [ ] Custom components in MDX

**roadmap.sh:** https://roadmap.sh/nextjs — "Styling", "Images", "Fonts", "Metadata", "Lazy Loading"

#### 🧪 Interactive Test Ideas for Phase 4
```
Scenario: "You want to optimize images with automatic resizing and lazy loading."
Options: [<img> tag, next/image, CSS background-image, SVG only]
Answer: next/image

Scenario: "You need scoped CSS that won't leak to other components."
Options: [Global CSS, CSS Modules, Inline styles, !important everywhere]
Answer: CSS Modules

Scenario: "A heavy chart library should only load when the component is visible."
Options: [import at top, next/dynamic with ssr: false, useEffect import, CDN script]
Answer: next/dynamic with ssr: false
```

---

## Phase 5: Testing & Deployment (Week 8)

### 5.1 Testing
- [ ] Unit testing with Jest
- [ ] Unit testing with Vitest
- [ ] E2E testing with Playwright
- [ ] E2E testing with Cypress
- [ ] Testing server components
- [ ] Testing API routes

### 5.2 Preparing for Production
- [ ] Production checklist
- [ ] Environment configuration
- [ ] Error handling best practices
- [ ] Security headers

### 5.3 Deployment Options
- [ ] Vercel (recommended, zero-config)
- [ ] Self-hosted with Node.js
- [ ] Docker deployment
- [ ] Static export (`output: 'export'`)
- [ ] Custom server setup

**roadmap.sh:** https://roadmap.sh/nextjs — "Vitest", "Jest", "Playwright", "Cypress", "Deployment Options"

#### 🧪 Interactive Test Ideas for Phase 5
```
Scenario: "You need to test user flows like login, navigation, and form submission end-to-end."
Options: [Jest, Vitest, Playwright, React Testing Library]
Answer: Playwright

Scenario: "Your Next.js app needs to deploy with zero configuration and edge functions."
Options: [Vercel, AWS EC2, Docker, Static export]
Answer: Vercel
```

---

## Phase 6: Advanced Patterns (Week 9-10)

### 6.1 Advanced Configuration
- [ ] Custom server setup
- [ ] `next.config.js` deep dive
- [ ] Turbopack (development builds)
- [ ] Third-party library integration

### 6.2 Authentication & Authorization
- [ ] NextAuth.js / Auth.js
- [ ] Middleware-based auth
- [ ] Protected routes
- [ ] Session management

### 6.3 Full-Stack Patterns
- [ ] Database integration (Prisma, Drizzle)
- [ ] API design patterns
- [ ] Real-time features (WebSockets, SSE)
- [ ] File uploads
- [ ] Background jobs

### 6.4 Production Architecture
- [ ] Monorepo setups (Turborepo)
- [ ] Micro-frontends
- [ ] Internationalization (i18n)
- [ ] Multi-tenancy

#### 🧪 Interactive Test Ideas for Phase 6
```
Scenario: "You need to check if a user is authenticated before rendering any dashboard page."
Options: [layout.tsx check, middleware.ts, each page.tsx, client-side useEffect]
Answer: middleware.ts

Scenario: "Your app needs type-safe database queries with auto-generated types."
Options: [Raw SQL, Prisma ORM, fetch API, localStorage]
Answer: Prisma ORM
```

---

## Skill Enhancer Scenario Categories

Map these to the interactive testing system in this repo:

| Category | Topics | Scenarios Count |
|----------|--------|----------------|
| Beginner • Setup | create-next-app, project structure, config | ~5 |
| Beginner • Routing | File-based routing, dynamic routes, layouts | ~8 |
| Intermediate • Components | Server vs Client, composition patterns | ~6 |
| Intermediate • Data | Fetching, caching, revalidation, Server Actions | ~8 |
| Intermediate • Styling | CSS Modules, Tailwind, next/image, next/font | ~5 |
| Advanced • Performance | Lazy loading, streaming, bundle optimization | ~5 |
| Advanced • Testing | Jest, Playwright, testing patterns | ~4 |
| Advanced • Deployment | Vercel, Docker, production checklist | ~4 |
| **Total** | | **~45** |

---

## Recommended Learning Order

1. ✅ W3Schools React tutorial (if React is new)
2. ✅ Next.js official Learn course (https://nextjs.org/learn)
3. ✅ roadmap.sh/nextjs — follow topic by topic
4. ✅ Build a project after each phase
5. ✅ Test yourself with Skill Enhancer scenarios

## Project Ideas (Build After Each Phase)

| Phase | Project |
|-------|---------|
| Phase 2 | Personal portfolio with static pages |
| Phase 3 | Blog with MDX and dynamic routes |
| Phase 4 | Dashboard with optimized images and lazy-loaded charts |
| Phase 5 | Full-stack todo app with Server Actions + tests |
| Phase 6 | SaaS starter with auth, database, and deployment |
