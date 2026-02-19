import { Scenario } from './types';

export const nextjsScenarios: Scenario[] = [
  // ===================================
  // BEGINNER LEVEL (1-10)
  // ===================================
  {
    id: 'nextjs-routing-1',
    category: 'Beginner • Routing',
    problem: 'I want to create a simple About page in my Next.js 14 app that is accessible at /about. Where should I place the file?',
    visual: `Next.js App Router file-based routing:

app/
├── layout.tsx        ← Root layout
├── page.tsx          ← "/" route
├── about/
│   └── page.tsx      ← "/about" route ✅
├── blog/
│   └── page.tsx      ← "/blog" route
└── contact/
    └── page.tsx      ← "/contact" route

Each folder = URL segment
page.tsx = the page component

URL: https://mysite.com/about
Maps to: app/about/page.tsx`,
    options: ['pages/about.tsx', 'app/about/page.tsx', 'src/about.tsx', 'routes/about.tsx'],
    correctAnswer: 'app/about/page.tsx',
    hint: 'In the App Router, each route is a folder inside app/ with a page.tsx file.',
    explanation: 'Next.js App Router uses file-system routing. Create a folder matching the URL segment inside app/, and add a page.tsx file. The folder name becomes the URL path.',
    codeExample: `// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our about page!</p>
    </div>
  );
}

// Accessible at: /about`
  },
  {
    id: 'nextjs-server-client-1',
    category: 'Beginner • Components',
    problem: 'I need to fetch a list of blog posts from a database and display them. The data doesn\'t need any interactivity. What type of component should I use?',
    visual: `Server Component vs Client Component:

┌─────────────────────────────────┐
│       Server Component          │
│  ✅ Direct DB/API access        │
│  ✅ No JS sent to browser       │
│  ✅ Async/await in component    │
│  ❌ No useState/useEffect       │
│  ❌ No onClick handlers         │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│       Client Component          │
│  ✅ useState, useEffect         │
│  ✅ onClick, onChange            │
│  ✅ Browser APIs                │
│  ❌ Can't access DB directly    │
│  ❌ More JS shipped to browser  │
└─────────────────────────────────┘

Blog posts = just fetching & displaying
No interactivity needed!`,
    options: ['Client Component', 'Server Component', 'API Route', 'Middleware'],
    correctAnswer: 'Server Component',
    hint: 'If you only need to fetch and display data without interactivity, you don\'t need JavaScript on the client.',
    explanation: 'Server Components are the default in Next.js App Router. They run only on the server, can directly access databases, and send zero JavaScript to the browser. Perfect for data display.',
    codeExample: `// app/blog/page.tsx (Server Component by default)
import { db } from '@/lib/db';

export default async function BlogPage() {
  // Direct database access - no API needed!
  const posts = await db.posts.findMany();

  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}`
  },
  {
    id: 'nextjs-use-client-1',
    category: 'Beginner • Components',
    problem: 'I\'m building a counter button that increments when clicked using useState. But I get an error: "You\'re importing a component that needs useState. It only works in a Client Component."',
    visual: `Error in terminal:
┌─────────────────────────────────────┐
│ ⨯ Error:                            │
│ You're importing a component that   │
│ needs useState. It only works in    │
│ a Client Component but none of its  │
│ parents are marked with             │
│ "use client".                       │
└─────────────────────────────────────┘

Server Component (default):
  ❌ useState   ❌ useEffect
  ❌ onClick    ❌ onChange

Client Component ("use client"):
  ✅ useState   ✅ useEffect
  ✅ onClick    ✅ onChange

Need to opt-in to client-side rendering!`,
    options: ['"use server" directive', '"use client" directive', 'import { useState } from "react/client"', 'export const dynamic = "client"'],
    correctAnswer: '"use client" directive',
    hint: 'There\'s a special directive you add at the top of the file to make it a Client Component.',
    explanation: 'Add "use client" at the very top of any file that needs React hooks or event handlers. This tells Next.js to include it in the client JavaScript bundle.',
    codeExample: `"use client"; // ← Add this at the very top!

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
  },
  {
    id: 'nextjs-layout-1',
    category: 'Beginner • Layout',
    problem: 'I want a navigation bar and footer that persist across all pages in my app without re-rendering when navigating between routes.',
    visual: `Without Layout:
/home → Full page reload (nav + content + footer)
/about → Full page reload (nav + content + footer)

Every navigation = everything re-renders! 😫

With Layout:
┌─────────────────────────────┐
│  Navigation Bar             │ ← Persists!
├─────────────────────────────┤
│                             │
│  {children}  ← Only this   │
│              changes!       │
│                             │
├─────────────────────────────┤
│  Footer                     │ ← Persists!
└─────────────────────────────┘

Layout wraps pages, only content swaps`,
    options: ['app/template.tsx', 'app/layout.tsx', 'app/_app.tsx', 'app/wrapper.tsx'],
    correctAnswer: 'app/layout.tsx',
    hint: 'Next.js has a special file convention for shared UI that wraps page content.',
    explanation: 'layout.tsx in the App Router is a shared UI wrapper. It receives {children} and persists across navigations — the layout doesn\'t re-render, only the page content inside it changes.',
    codeExample: `// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>

        <main>{children}</main>

        <footer>© 2024 My App</footer>
      </body>
    </html>
  );
}`
  },
  {
    id: 'nextjs-dynamic-route-1',
    category: 'Beginner • Routing',
    problem: 'I need to create individual blog post pages like /blog/hello-world, /blog/my-first-post, where the slug is dynamic.',
    visual: `Static routes:
app/blog/page.tsx  → /blog ✅

Dynamic routes:
app/blog/[slug]/page.tsx  → /blog/hello-world ✅
                          → /blog/my-first-post ✅
                          → /blog/any-slug-here ✅

The [slug] folder captures the URL segment:

URL: /blog/hello-world
           └────┬────┘
                │
    params.slug = "hello-world"

Bracket notation [param] = dynamic!`,
    options: ['app/blog/:slug/page.tsx', 'app/blog/[slug]/page.tsx', 'app/blog/$slug/page.tsx', 'app/blog/slug.tsx'],
    correctAnswer: 'app/blog/[slug]/page.tsx',
    hint: 'Next.js uses square bracket notation in folder names for dynamic segments.',
    explanation: 'Wrap a folder name in square brackets [param] to create a dynamic route segment. The value is available through the params prop in your page component.',
    codeExample: `// app/blog/[slug]/page.tsx
interface Props {
  params: { slug: string };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

// /blog/hello-world → params.slug = "hello-world"
// /blog/next-js-tips → params.slug = "next-js-tips"`
  },
  {
    id: 'nextjs-link-1',
    category: 'Beginner • Navigation',
    problem: 'I\'m using regular <a> tags for internal navigation, but every click causes a full page reload. How do I get client-side navigation?',
    visual: `Regular <a> tag:
Click → Full page reload 🐢
     → Re-downloads all JS
     → Re-renders everything
     → Layout state is lost

Next.js <Link>:
Click → Client-side navigation 🚀
     → Only fetches new page data
     → Layout persists
     → Instant transitions
     → Prefetches on hover!

<a href="/about">         ← Full reload ❌
<Link href="/about">      ← Client-side ✅`,
    options: ['<Navigate to="/about">', '<Link href="/about">', '<Router path="/about">', '<a href="/about" client>'],
    correctAnswer: '<Link href="/about">',
    hint: 'Next.js provides a built-in component from "next/link" for client-side navigation.',
    explanation: 'The Link component from next/link enables client-side navigation. It prefetches linked pages on hover, making navigation feel instant while preserving layout state.',
    codeExample: `import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>

      {/* Dynamic routes work too */}
      <Link href={\`/blog/\${post.slug}\`}>
        {post.title}
      </Link>
    </nav>
  );
}`
  },
  {
    id: 'nextjs-loading-1',
    category: 'Beginner • UX',
    problem: 'When navigating to a page that fetches data, there\'s a blank screen while loading. I want to show a loading skeleton automatically.',
    visual: `Without loading.tsx:
Click link → Blank screen... → Page appears
             😫 Users confused!

With loading.tsx:
Click link → Skeleton/Spinner → Page appears
             ✅ Users see progress!

app/
├── blog/
│   ├── loading.tsx   ← Shows while page loads
│   └── page.tsx      ← Async data fetching

Next.js automatically wraps page.tsx
in <Suspense fallback={<Loading />}>`,
    options: ['app/blog/loading.tsx', 'app/blog/spinner.tsx', 'app/blog/fallback.tsx', 'app/blog/skeleton.tsx'],
    correctAnswer: 'app/blog/loading.tsx',
    hint: 'Next.js has a special file convention that automatically creates a Suspense boundary with your loading UI.',
    explanation: 'loading.tsx is a special Next.js file that automatically wraps the page in a React Suspense boundary. The loading UI shows instantly while the page\'s async data loads.',
    codeExample: `// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="loading-skeleton">
      <div className="skeleton-title" />
      <div className="skeleton-text" />
      <div className="skeleton-text" />
      <div className="skeleton-card" />
      <div className="skeleton-card" />
    </div>
  );
}

// This shows INSTANTLY while
// app/blog/page.tsx fetches data`
  },
  {
    id: 'nextjs-metadata-1',
    category: 'Beginner • SEO',
    problem: 'I need to set the page title and meta description for SEO on my blog post pages dynamically based on the post content.',
    visual: `HTML Head for SEO:
<head>
  <title>My Blog Post | MySite</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
</head>

❌ Old way (manual <Head> component)
✅ New way: Export metadata object

Static:  export const metadata = { ... }
Dynamic: export async function generateMetadata()

Next.js automatically adds to <head>!`,
    options: ['<Head> component', 'export const metadata', 'export async function generateMetadata()', 'document.title = "..."'],
    correctAnswer: 'export async function generateMetadata()',
    hint: 'For dynamic metadata that depends on route params (like blog post slugs), you need an async function.',
    explanation: 'generateMetadata() is an async function you export from page.tsx. It receives the route params, letting you fetch data and return dynamic metadata for SEO.',
    codeExample: `// app/blog/[slug]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: \`\${post.title} | My Blog\`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      images: [post.coverImage],
    },
  };
}`
  },
  {
    id: 'nextjs-image-1',
    category: 'Beginner • Optimization',
    problem: 'My page loads slowly because of large unoptimized images. I need automatic image optimization with lazy loading and responsive sizing.',
    visual: `Regular <img>:
┌─────────────────────────────┐
│ Loads full 4MB image 🐢     │
│ No lazy loading              │
│ No responsive sizes          │
│ Layout shift (CLS) ❌        │
└─────────────────────────────┘

Next.js <Image>:
┌─────────────────────────────┐
│ Auto-optimized to WebP 🚀   │
│ Lazy loads by default        │
│ Serves correct size          │
│ No layout shift ✅           │
│ Blur placeholder available   │
└─────────────────────────────┘

4MB → 200KB automatically!`,
    options: ['<img> with loading="lazy"', '<Image> from next/image', '<Picture> with srcset', '<OptimizedImage>'],
    correctAnswer: '<Image> from next/image',
    hint: 'Next.js has a built-in component that handles image optimization automatically.',
    explanation: 'The Image component from next/image automatically optimizes images: converts to WebP, lazy loads, serves responsive sizes, and prevents layout shift by requiring width/height.',
    codeExample: `import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority  // Load immediately (above fold)
    />
  );
}

// For responsive/fill mode:
<div style={{ position: 'relative', height: 400 }}>
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>`
  },
  {
    id: 'nextjs-error-1',
    category: 'Beginner • Error Handling',
    problem: 'When my data fetching fails on a page, the entire app crashes with an unhandled error. I want to show a friendly error fallback for just that page.',
    visual: `Without error.tsx:
Data fetch fails → 💥 Entire app crashes!
                 → White screen of death

With error.tsx:
Data fetch fails → Error caught in boundary
                 → Shows error UI for that segment
                 → Rest of app still works!

app/
├── blog/
│   ├── error.tsx     ← Catches errors here
│   ├── loading.tsx
│   └── page.tsx      ← If this throws...
│
├── layout.tsx        ← Still works! ✅
└── page.tsx          ← Still works! ✅`,
    options: ['app/blog/error.tsx', 'app/blog/catch.tsx', 'app/blog/fallback.tsx', 'try/catch in page.tsx'],
    correctAnswer: 'app/blog/error.tsx',
    hint: 'Next.js has a special file convention that creates an error boundary around the page.',
    explanation: 'error.tsx creates a React Error Boundary for that route segment. It catches errors in the page and nested components, showing a fallback UI while keeping the rest of the app functional.',
    codeExample: `// app/blog/error.tsx
"use client"; // Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>
        Try Again
      </button>
    </div>
  );
}`
  },
  // ===================================
  // INTERMEDIATE LEVEL (11-20)
  // ===================================
  {
    id: 'nextjs-api-route-1',
    category: 'Intermediate • API',
    problem: 'I need to create a REST API endpoint at /api/users that handles both GET (list users) and POST (create user) requests in the App Router.',
    visual: `API Routes in App Router:

app/
├── api/
│   └── users/
│       └── route.ts  ← API handler

GET  /api/users  → List all users
POST /api/users  → Create new user

route.ts exports named functions:
┌─────────────────────────────┐
│ export async function GET()  │
│ export async function POST() │
│ export async function PUT()  │
│ export async function DELETE()│
└─────────────────────────────┘

Method name = HTTP method!`,
    options: ['app/api/users/handler.ts', 'app/api/users/route.ts', 'pages/api/users.ts', 'app/api/users/index.ts'],
    correctAnswer: 'app/api/users/route.ts',
    hint: 'In the App Router, API endpoints use a file called route.ts with named exports for each HTTP method.',
    explanation: 'route.ts in the App Router replaces pages/api. Export named async functions matching HTTP methods (GET, POST, PUT, DELETE). Each function receives a Request object and returns a Response.',
    codeExample: `// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = await db.users.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await db.users.create({
    data: { name: body.name, email: body.email }
  });
  return NextResponse.json(user, { status: 201 });
}`
  },
  {
    id: 'nextjs-server-action-1',
    category: 'Intermediate • Data Mutation',
    problem: 'I need to handle a form submission to create a new post in my database. I don\'t want to create a separate API route just for this form.',
    visual: `Traditional approach:
Form → fetch('/api/posts', { method: 'POST' }) → API Route → DB
       Extra boilerplate! 😫

Server Actions approach:
Form → Server Action → DB directly!
       No API route needed! ✨

┌──────────────────────────────┐
│  Client (Form)               │
│  <form action={createPost}>  │
│                              │
│  Calls server function       │
│  directly!                   │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│  Server (Action)             │
│  "use server"                │
│  async function createPost() │
│  → db.posts.create(...)      │
└──────────────────────────────┘`,
    options: ['API Route Handler', 'Server Action', 'Client-side fetch', 'getServerSideProps'],
    correctAnswer: 'Server Action',
    hint: 'Next.js 14 introduced a way to call server functions directly from forms without creating API endpoints.',
    explanation: 'Server Actions let you define async server functions (marked with "use server") that can be called directly from forms or client components. No need for separate API routes.',
    codeExample: `// app/blog/new/page.tsx
async function createPost(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await db.posts.create({
    data: { title, content }
  });

  revalidatePath("/blog");
  redirect("/blog");
}

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">Create Post</button>
    </form>
  );
}`
  },
  {
    id: 'nextjs-revalidate-1',
    category: 'Intermediate • Caching',
    problem: 'My blog page is statically generated and cached, but when I publish a new post, the page still shows old data. How do I refresh the cache?',
    visual: `Static Generation (cached):
Build time → HTML generated → Served from CDN
                                  │
                              Super fast! 🚀
                              But stale data 😕

Options to refresh:
┌──────────────────────────────────┐
│ 1. Time-based (ISR):            │
│    revalidate: 60               │
│    → Refresh every 60 seconds   │
│                                  │
│ 2. On-demand:                    │
│    revalidatePath('/blog')       │
│    → Refresh when you say so    │
│                                  │
│ 3. Tag-based:                    │
│    revalidateTag('posts')        │
│    → Refresh all tagged fetches  │
└──────────────────────────────────┘`,
    options: ['res.revalidate()', 'revalidatePath()', 'cache.clear()', 'fetch with no-store'],
    correctAnswer: 'revalidatePath()',
    hint: 'Next.js provides a function to invalidate the cache for a specific path on demand.',
    explanation: 'revalidatePath() purges the cached data for a specific route. Call it in a Server Action after data mutations to ensure users see fresh content on next request.',
    codeExample: `import { revalidatePath } from 'next/cache';

async function createPost(formData: FormData) {
  "use server";

  await db.posts.create({
    data: {
      title: formData.get("title"),
      content: formData.get("content"),
    }
  });

  // Purge the cached blog page
  revalidatePath('/blog');    // Specific page
  revalidateTag('posts');     // Or by tag
  redirect('/blog');
}

// For time-based revalidation:
// fetch('/api/posts', { next: { revalidate: 60 } })`
  },
  {
    id: 'nextjs-middleware-1',
    category: 'Intermediate • Auth',
    problem: 'I need to check if a user is authenticated before they access any page under /dashboard. If not logged in, redirect to /login.',
    visual: `Request flow:

User → /dashboard/settings
         │
         ▼
  ┌──────────────┐
  │  Middleware   │ ← Runs BEFORE page loads
  │              │
  │  Auth check? │
  └──────┬───────┘
         │
    ┌────┴────┐
    ▼         ▼
 ✅ Auth'd   ❌ Not auth'd
    │              │
    ▼              ▼
 Dashboard    Redirect to
 renders      /login

Middleware runs at the EDGE
before any page code executes!`,
    options: ['app/dashboard/layout.tsx with auth check', 'middleware.ts at project root', 'app/dashboard/guard.tsx', '_middleware.ts in each folder'],
    correctAnswer: 'middleware.ts at project root',
    hint: 'Next.js has a special file at the project root that intercepts requests before they reach pages.',
    explanation: 'middleware.ts at the project root runs before every matched request. Use the matcher config to specify which paths it applies to. It runs on the Edge Runtime for fast redirects.',
    codeExample: `// middleware.ts (project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  if (!token) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    );
  }

  return NextResponse.next();
}

// Only run on dashboard routes
export const config = {
  matcher: '/dashboard/:path*',
};`
  },
  {
    id: 'nextjs-parallel-routes-1',
    category: 'Intermediate • Routing',
    problem: 'I\'m building a dashboard with a main content area and a sidebar analytics panel. Both should load independently and show their own loading states.',
    visual: `Dashboard Layout:
┌──────────────────────────────────────┐
│  Header                              │
├────────────────────┬─────────────────┤
│                    │                 │
│  @main             │  @sidebar       │
│  (Team content)    │  (Analytics)    │
│                    │                 │
│  Loading...        │  Loading...     │
│  (independent!)    │  (independent!) │
│                    │                 │
└────────────────────┴─────────────────┘

Parallel Routes load simultaneously!
Each has its own loading/error state.

app/dashboard/
├── layout.tsx      ← Receives both slots
├── @main/
│   └── page.tsx    ← Main content
├── @sidebar/
│   └── page.tsx    ← Sidebar content
└── page.tsx`,
    options: ['Nested layouts', 'Parallel routes with @slots', 'Route groups', 'Dynamic routes'],
    correctAnswer: 'Parallel routes with @slots',
    hint: 'Next.js has a convention using @ prefix for rendering multiple pages simultaneously in the same layout.',
    explanation: 'Parallel routes use @folder convention to render multiple pages in the same layout simultaneously. Each slot loads independently with its own loading and error states.',
    codeExample: `// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  main,
  sidebar,
}: {
  children: React.ReactNode;
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <div className="main-content">{main}</div>
      <div className="sidebar">{sidebar}</div>
    </div>
  );
}

// app/dashboard/@main/page.tsx
// app/dashboard/@sidebar/page.tsx
// Each loads independently! ✨`
  },
  {
    id: 'nextjs-catch-all-1',
    category: 'Intermediate • Routing',
    problem: 'I\'m building a docs site with URLs like /docs/getting-started, /docs/api/auth/login, etc. The path can have any number of segments.',
    visual: `Need to match:
/docs/intro                → 1 segment
/docs/api/auth             → 2 segments
/docs/api/auth/login       → 3 segments
/docs/guides/setup/linux   → 3 segments

Regular: [slug]     → only 1 segment
Catch-all: [...slug] → any number!

app/docs/[...slug]/page.tsx

/docs/a       → params.slug = ["a"]
/docs/a/b     → params.slug = ["a", "b"]
/docs/a/b/c   → params.slug = ["a", "b", "c"]`,
    options: ['app/docs/[slug]/page.tsx', 'app/docs/[...slug]/page.tsx', 'app/docs/**/page.tsx', 'app/docs/[slug+]/page.tsx'],
    correctAnswer: 'app/docs/[...slug]/page.tsx',
    hint: 'The three dots (...) before the parameter name creates a catch-all that matches multiple segments.',
    explanation: 'Catch-all segments [...param] match any number of URL segments. The params value is an array of strings, one for each segment. Use [[...param]] for optional catch-all.',
    codeExample: `// app/docs/[...slug]/page.tsx
interface Props {
  params: { slug: string[] };
}

export default function DocsPage({ params }: Props) {
  // /docs/api/auth → slug = ["api", "auth"]
  const path = params.slug.join('/');

  return <DocContent path={path} />;
}

// Optional catch-all (also matches /docs):
// app/docs/[[...slug]]/page.tsx
// /docs       → slug = undefined
// /docs/intro → slug = ["intro"]`
  },
  {
    id: 'nextjs-streaming-1',
    category: 'Intermediate • Performance',
    problem: 'My page has a fast header section and a slow recommendations section that takes 3 seconds to load. The entire page waits for the slow section.',
    visual: `Without Streaming:
Request → Wait 3s for ALL data → Send full page
          Total: 3 seconds ⏳

With Streaming:
Request → Send header instantly! (0.1s)
        → Stream recommendations when ready (3s)

┌─────────────────────────────┐
│  Header (instant! ✅)       │
├─────────────────────────────┤
│                             │
│  <Suspense>                 │
│    Loading skeleton...      │  ← Shows first
│    ↓↓↓ streams in ↓↓↓      │
│    Recommendations! 🎉      │  ← Replaces skeleton
│                             │
└─────────────────────────────┘

Progressive rendering!`,
    options: ['React.lazy()', '<Suspense> with async component', 'Dynamic import', 'useEffect for delayed load'],
    correctAnswer: '<Suspense> with async component',
    hint: 'React Suspense can wrap async Server Components to stream their HTML progressively.',
    explanation: 'Wrap slow async Server Components in <Suspense> with a fallback. The page sends the fallback immediately, then streams the actual content when the server finishes loading it.',
    codeExample: `// app/page.tsx
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      {/* This renders instantly */}
      <Header />

      {/* This streams in when ready */}
      <Suspense fallback={<RecommendationsSkeleton />}>
        <Recommendations />
      </Suspense>
    </div>
  );
}

// Slow component - no changes needed!
async function Recommendations() {
  const data = await fetch(slowAPI); // 3 seconds
  return <RecommendationsList data={data} />;
}`
  },
  {
    id: 'nextjs-route-group-1',
    category: 'Intermediate • Organization',
    problem: 'I want to organize my routes into (marketing) and (app) groups with different layouts, but I don\'t want the group name in the URL.',
    visual: `Without Route Groups:
app/
├── marketing-layout.tsx  ← Can't have 2 layouts!
└── app-layout.tsx

With Route Groups (parentheses):
app/
├── (marketing)/
│   ├── layout.tsx     ← Marketing layout
│   ├── page.tsx       ← / (home)
│   ├── about/
│   │   └── page.tsx   ← /about
│   └── pricing/
│       └── page.tsx   ← /pricing
│
├── (app)/
│   ├── layout.tsx     ← App layout (with sidebar)
│   ├── dashboard/
│   │   └── page.tsx   ← /dashboard
│   └── settings/
│       └── page.tsx   ← /settings

(parentheses) = excluded from URL!`,
    options: ['_marketing/ prefix', '(marketing)/ parentheses', '.marketing/ dot prefix', 'marketing.group/'],
    correctAnswer: '(marketing)/ parentheses',
    hint: 'Wrapping a folder name in parentheses creates a group that doesn\'t affect the URL path.',
    explanation: 'Route groups use (folderName) convention. The parenthesized name is excluded from the URL while allowing separate layouts, loading states, and error boundaries per group.',
    codeExample: `// app/(marketing)/layout.tsx
export default function MarketingLayout({ children }) {
  return (
    <div>
      <MarketingNav />  {/* Public navigation */}
      {children}
      <Footer />
    </div>
  );
}

// app/(app)/layout.tsx
export default function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />      {/* Authenticated sidebar */}
      <main>{children}</main>
    </div>
  );
}

// /about  → uses marketing layout
// /dashboard → uses app layout`
  },
  {
    id: 'nextjs-fetch-cache-1',
    category: 'Intermediate • Caching',
    problem: 'I need the same API data in multiple Server Components on the same page. Each component calls fetch() independently. Will this make duplicate API calls?',
    visual: `Page renders 3 components:

┌──────────────────────────────────┐
│  <Header />                      │
│  fetch('/api/user') ──┐          │
├──────────────────────────────────┤
│  <Sidebar />           │         │
│  fetch('/api/user') ──┤ Same URL!│
├──────────────────────────────────┤
│  <Profile />           │         │
│  fetch('/api/user') ──┘          │
└──────────────────────────────────┘

Without dedup: 3 API calls 😫
With dedup:    1 API call ✅

Next.js auto-deduplicates fetch()
during a single render pass!`,
    options: ['Yes, 3 duplicate calls', 'No, Next.js deduplicates automatically', 'Only with useMemo', 'Need to use React cache()'],
    correctAnswer: 'No, Next.js deduplicates automatically',
    hint: 'Next.js extends the native fetch API with automatic request deduplication.',
    explanation: 'Next.js automatically deduplicates fetch() requests with the same URL and options during a single server render. Multiple components can fetch the same data without worrying about duplicate requests.',
    codeExample: `// All three components call the same fetch
// Next.js only makes ONE actual request!

// Header.tsx (Server Component)
const user = await fetch('/api/user').then(r => r.json());

// Sidebar.tsx (Server Component)
const user = await fetch('/api/user').then(r => r.json());

// Profile.tsx (Server Component)
const user = await fetch('/api/user').then(r => r.json());

// For non-fetch data sources, use React cache():
import { cache } from 'react';
export const getUser = cache(async (id) => {
  return await db.users.findUnique({ where: { id } });
});`
  },
  // ===================================
  // ADVANCED LEVEL (21-25)
  // ===================================
  {
    id: 'nextjs-intercepting-routes',
    category: 'Advanced • Routing',
    problem: 'I want to show a photo in a modal when clicked from a feed, but if the user shares the URL or refreshes, show the photo as a full page.',
    visual: `From feed (soft navigation):
/feed → Click photo → Modal overlay!
┌─────────────────────────────────┐
│  Feed (behind)                  │
│  ┌───────────────────────────┐  │
│  │   Photo Modal (overlay)   │  │
│  │   URL: /photo/123         │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘

From URL (hard navigation):
/photo/123 → Full photo page!
┌─────────────────────────────────┐
│                                 │
│      Full Photo Page            │
│      (no modal, no feed)        │
│                                 │
└─────────────────────────────────┘

Same URL, different UX based on context!`,
    options: ['Parallel routes only', 'Intercepting routes with (..) convention', 'Conditional rendering in layout', 'Route groups'],
    correctAnswer: 'Intercepting routes with (..) convention',
    hint: 'Next.js has a route convention using dots and parentheses to intercept navigation from specific locations.',
    explanation: 'Intercepting routes use (.) (..) (..)(..) (...) conventions to intercept navigation from the current/parent segments. Combined with parallel routes, they enable modal patterns.',
    codeExample: `// Folder structure:
// app/
// ├── feed/
// │   ├── page.tsx
// │   └── (..)photo/[id]/     ← Intercepts!
// │       └── page.tsx        ← Shows as MODAL
// └── photo/[id]/
//     └── page.tsx            ← Shows as FULL PAGE

// app/feed/(..)photo/[id]/page.tsx
export default function PhotoModal({ params }) {
  return (
    <Modal>
      <Photo id={params.id} />
    </Modal>
  );
}

// app/photo/[id]/page.tsx
export default function PhotoPage({ params }) {
  return <FullPagePhoto id={params.id} />;
}`
  },
  {
    id: 'nextjs-static-generation',
    category: 'Advanced • Rendering',
    problem: 'I have 1000 blog posts with dynamic routes. I want to pre-render all of them at build time for maximum performance.',
    visual: `Build time:
generateStaticParams() → Returns all slugs
  ┌────────────────────────────────┐
  │ [{ slug: "post-1" },          │
  │  { slug: "post-2" },          │
  │  { slug: "post-3" },          │
  │  ...                          │
  │  { slug: "post-1000" }]       │
  └────────────────────────────────┘
           │
           ▼
  Pre-renders 1000 HTML pages!
  Each served from CDN ⚡

Runtime:
Request /blog/post-42 → Serve pre-built HTML
                         No server computation!`,
    options: ['getStaticPaths', 'generateStaticParams', 'getServerSideProps', 'export const dynamic = "static"'],
    correctAnswer: 'generateStaticParams',
    hint: 'The App Router has its own function for generating static paths at build time.',
    explanation: 'generateStaticParams() replaces getStaticPaths in the App Router. Export it from a dynamic route to generate static HTML for all specified params at build time.',
    codeExample: `// app/blog/[slug]/page.tsx

export async function generateStaticParams() {
  const posts = await db.posts.findMany();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Each of these pages is pre-rendered at build time
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return <Article post={post} />;
}

// 1000 posts = 1000 static HTML files!`
  },
  {
    id: 'nextjs-server-only',
    category: 'Advanced • Security',
    problem: 'I have a utility function that uses a secret API key. I accidentally imported it in a Client Component, leaking the key to the browser.',
    visual: `⚠️ DANGER: Secret key leaked!

// lib/api.ts
const API_KEY = process.env.SECRET_KEY;

export async function fetchData() {
  return fetch(url, {
    headers: { Authorization: API_KEY }
  });
}

// components/Dashboard.tsx
"use client"
import { fetchData } from '@/lib/api';
// ❌ SECRET_KEY is now in browser bundle!

Need a compile-time guard to prevent
server-only code from entering client bundles.`,
    options: ['Environment variables with NEXT_PUBLIC_ prefix', 'import "server-only" package', '"use server" directive', 'Dynamic imports'],
    correctAnswer: 'import "server-only" package',
    hint: 'There\'s an npm package that causes a build error if server-only code is imported in a Client Component.',
    explanation: 'The "server-only" package marks a module as server-exclusive. If any Client Component imports it, you get a build-time error, preventing accidental secret leaks.',
    codeExample: `// lib/api.ts
import "server-only"; // ← Build error if imported in client!

const API_KEY = process.env.SECRET_KEY;

export async function fetchSecretData() {
  return fetch('https://api.example.com', {
    headers: { Authorization: \`Bearer \${API_KEY}\` },
  });
}

// If a "use client" component tries to import this:
// ❌ Build Error: "server-only" module imported in Client

// Install: npm install server-only`
  },
  {
    id: 'nextjs-ppr',
    category: 'Advanced • Rendering',
    problem: 'My e-commerce page has a static product layout but a dynamic "Add to Cart" button with real-time stock info. I want the static parts instantly but the dynamic parts streamed.',
    visual: `Partial Prerendering (PPR):

At Build Time:
┌─────────────────────────────────┐
│  Product Title    (static ✅)   │
│  Product Image    (static ✅)   │
│  Description      (static ✅)   │
├─────────────────────────────────┤
│  ┌─────────────────────────┐   │
│  │  <Suspense>              │   │
│  │  Stock: Loading...       │   │  ← Dynamic hole
│  │  [Add to Cart]           │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘

Request Time:
1. Static shell served INSTANTLY from CDN
2. Dynamic parts stream in from server
3. Best of both worlds! 🚀`,
    options: ['ISR with revalidate', 'Partial Prerendering (PPR)', 'Client-side fetching', 'Edge runtime'],
    correctAnswer: 'Partial Prerendering (PPR)',
    hint: 'Next.js has an experimental feature that combines static and dynamic rendering in a single page.',
    explanation: 'Partial Prerendering generates a static shell with dynamic holes (Suspense boundaries). The static parts are served instantly from CDN, while dynamic parts stream from the server.',
    codeExample: `// next.config.js
module.exports = {
  experimental: { ppr: true }
};

// app/product/[id]/page.tsx
import { Suspense } from 'react';

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div>
      {/* Static - prerendered at build time */}
      <h1>{product.name}</h1>
      <Image src={product.image} />
      <p>{product.description}</p>

      {/* Dynamic - streamed at request time */}
      <Suspense fallback={<StockSkeleton />}>
        <StockAndCart productId={params.id} />
      </Suspense>
    </div>
  );
}`
  },
  {
    id: 'nextjs-composition-pattern',
    category: 'Advanced • Patterns',
    problem: 'I need a search page with a Server Component wrapper (for data) and a Client Component input (for interactivity). How do I compose them without making everything a Client Component?',
    visual: `❌ Wrong: Making parent a Client Component
"use client"  ← Infects all children!
└── SearchPage
    ├── SearchInput (client ✅)
    └── SearchResults (now also client! 😫)

✅ Right: Composition pattern
└── SearchPage (SERVER - fetches data)
    ├── SearchInput (CLIENT - interactivity)
    └── SearchResults (SERVER - no JS!)

Pass Server Components as children or props
to Client Components!

Client Component receives {children}
 → children can be Server Components
 → Server code stays on server! ✨`,
    options: ['Make everything "use client"', 'Pass Server Components as children to Client Components', 'Use API routes for all data', 'Use useEffect in Client Component'],
    correctAnswer: 'Pass Server Components as children to Client Components',
    hint: 'Client Components can receive Server Components as children or props — the server-rendered output is just passed through.',
    explanation: 'The composition pattern passes Server Components as children/props to Client Components. The server-rendered output passes through the Client Component boundary without adding JavaScript.',
    codeExample: `// SearchPage.tsx (Server Component)
export default async function SearchPage() {
  return (
    <div>
      {/* Client Component wrapper */}
      <SearchContainer>
        {/* Server Component as children! */}
        <SearchResults />
      </SearchContainer>
    </div>
  );
}

// SearchContainer.tsx (Client Component)
"use client";
export function SearchContainer({ children }) {
  const [query, setQuery] = useState('');
  return (
    <div>
      <input value={query} onChange={...} />
      {children} {/* Server-rendered! No extra JS */}
    </div>
  );
}`
  },
];
