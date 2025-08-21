# Next.js App Router - Learning Exercises

This repository contains hands-on exercises to help you learn Next.js App Router routing concepts.

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## 📚 Routing Concepts Covered

### 1. Static Routes
**Files:** `src/app/about/page.tsx`, `src/app/contact/page.tsx`

- Basic routing with `page.tsx` files
- Each folder represents a route segment
- Try visiting: `/about`, `/contact`

### 2. Dynamic Routes
**Files:** `src/app/posts/[id]/page.tsx`, `src/app/posts/page.tsx`

- Dynamic segments using `[param]` syntax
- Access params via `params` prop
- Try visiting: `/posts/1`, `/posts/hello-world`, `/posts/any-id`

### 3. Nested Routes & Layouts
**Files:** `src/app/dashboard/layout.tsx`, `src/app/dashboard/*/page.tsx`

- Shared layouts using `layout.tsx`
- Nested routing structure
- Try visiting: `/dashboard`, `/dashboard/analytics`, `/dashboard/settings`

### 4. Catch-all Routes
**Files:** `src/app/docs/[...slug]/page.tsx`

- Catch multiple segments with `[...slug]`
- Access as array via `params.slug`
- Try visiting: `/docs/getting-started`, `/docs/api/users`, `/docs/any/nested/path`

### 5. Route Groups
**Files:** `src/app/(auth)/login/page.tsx`, `src/app/(auth)/register/page.tsx`

- Organize routes without affecting URL structure
- Shared layouts for grouped routes
- Try visiting: `/login`, `/register`

### 6. Navigation
**Files:** `src/app/navigation-demo/page.tsx`

- `Link` component for client-side navigation
- `useRouter()` for programmatic navigation
- `usePathname()` and `useSearchParams()` hooks
- Try the interactive navigation demo

### 7. Loading & Error States
**Files:** `src/app/posts/loading.tsx`, `src/app/posts/error.tsx`

- `loading.tsx` for loading UI
- `error.tsx` for error boundaries
- Automatic loading states during navigation

## 🏃‍♂️ Practice Exercises

### Exercise 1: Add a New Static Route
Create a new static route at `/services`:
1. Create `src/app/services/page.tsx`
2. Add some content about your services
3. Add a link to it from the home page

### Exercise 2: Create a User Profile Route
Create a dynamic route for user profiles:
1. Create `src/app/users/[id]/page.tsx`
2. Display the user ID and some mock user data
3. Create an index page at `src/app/users/page.tsx` with links to different users

### Exercise 3: Add a Blog Section
Create a nested blog structure:
1. Create `src/app/blog/layout.tsx` with a sidebar
2. Add `src/app/blog/page.tsx` for the blog index
3. Add `src/app/blog/[slug]/page.tsx` for individual posts
4. Include loading and error states

### Exercise 4: Shopping Cart with Categories
Create a shopping structure with catch-all routes:
1. Create `src/app/shop/[...category]/page.tsx`
2. Handle different category levels (e.g., `/shop/electronics/phones/iphone`)
3. Display breadcrumbs showing the category hierarchy

### Exercise 5: Admin Dashboard
Create an admin section using route groups:
1. Create `src/app/(admin)/dashboard/page.tsx`
2. Add more admin pages like users, settings
3. Create a shared admin layout with navigation

## 🔍 Key Learning Points

### File Structure
```
src/app/
├── page.tsx                    # Home page (/)
├── about/page.tsx             # Static route (/about)
├── posts/
│   ├── page.tsx               # Posts index (/posts)
│   ├── [id]/page.tsx          # Dynamic route (/posts/[id])
│   ├── loading.tsx            # Loading UI for posts
│   └── error.tsx              # Error boundary for posts
├── docs/
│   └── [...slug]/page.tsx     # Catch-all route (/docs/...)
├── dashboard/
│   ├── layout.tsx             # Shared layout for dashboard
│   ├── page.tsx               # Dashboard home (/dashboard)
│   ├── analytics/page.tsx     # Nested route (/dashboard/analytics)
│   └── settings/page.tsx      # Nested route (/dashboard/settings)
└── (auth)/                    # Route group (doesn't affect URL)
    ├── layout.tsx             # Shared layout for auth pages
    ├── login/page.tsx         # Login page (/login)
    └── register/page.tsx      # Register page (/register)
```

### Special Files
- `page.tsx` - Creates the UI for a route
- `layout.tsx` - Shared UI that wraps pages (can be nested)
- `loading.tsx` - Loading UI shown while page loads
- `error.tsx` - Error boundary for handling errors
- `not-found.tsx` - 404 page for routes that don't exist

### Route Types
- **Static**: `/about` → `src/app/about/page.tsx`
- **Dynamic**: `/posts/123` → `src/app/posts/[id]/page.tsx`
- **Catch-all**: `/docs/api/users` → `src/app/docs/[...slug]/page.tsx`
- **Route Groups**: `/login` → `src/app/(auth)/login/page.tsx`

### Navigation Methods
- `<Link href="/path">` - Declarative navigation
- `router.push('/path')` - Programmatic navigation
- `router.back()` - Navigate back
- `router.refresh()` - Refresh current route

## 📖 Additional Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)
- [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

## 🎯 Next Steps

After completing these exercises, explore:
- Server Components vs Client Components
- Data Fetching patterns
- Route Handlers (API routes)
- Middleware
- Internationalization

Happy learning! 🚀