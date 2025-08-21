import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js App Router Learning Hub
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Static Routes */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Static Routes</h2>
            <div className="space-y-2">
              <Link href="/about" className="block text-blue-600 hover:text-blue-800">
                → /about
              </Link>
              <Link href="/contact" className="block text-blue-600 hover:text-blue-800">
                → /contact
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Basic routing with page.tsx files
            </p>
          </div>

          {/* Dynamic Routes */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h2 className="text-xl font-semibold mb-4 text-green-700">Dynamic Routes</h2>
            <div className="space-y-2">
              <Link href="/posts" className="block text-green-600 hover:text-green-800">
                → /posts (index)
              </Link>
              <Link href="/posts/1" className="block text-green-600 hover:text-green-800">
                → /posts/1
              </Link>
              <Link href="/posts/hello-world" className="block text-green-600 hover:text-green-800">
                → /posts/hello-world
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              [id] dynamic segments
            </p>
          </div>

          {/* Nested Routes */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h2 className="text-xl font-semibold mb-4 text-purple-700">Nested Routes & Layouts</h2>
            <div className="space-y-2">
              <Link href="/dashboard" className="block text-purple-600 hover:text-purple-800">
                → /dashboard
              </Link>
              <Link href="/dashboard/analytics" className="block text-purple-600 hover:text-purple-800">
                → /dashboard/analytics
              </Link>
              <Link href="/dashboard/settings" className="block text-purple-600 hover:text-purple-800">
                → /dashboard/settings
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Shared layouts with nested pages
            </p>
          </div>

          {/* Catch-all Routes */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-xl font-semibold mb-4 text-red-700">Catch-all Routes</h2>
            <div className="space-y-2">
              <Link href="/docs/getting-started" className="block text-red-600 hover:text-red-800">
                → /docs/getting-started
              </Link>
              <Link href="/docs/api/users" className="block text-red-600 hover:text-red-800">
                → /docs/api/users
              </Link>
              <Link href="/docs/guides/deployment" className="block text-red-600 hover:text-red-800">
                → /docs/guides/deployment
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              [...slug] catches all segments
            </p>
          </div>

          {/* Route Groups */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h2 className="text-xl font-semibold mb-4 text-yellow-700">Route Groups</h2>
            <div className="space-y-2">
              <Link href="/login" className="block text-yellow-600 hover:text-yellow-800">
                → /login
              </Link>
              <Link href="/register" className="block text-yellow-600 hover:text-yellow-800">
                → /register
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              (auth) groups with shared layout
            </p>
          </div>

          {/* Navigation Example */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Navigation Hooks</h2>
            <div className="space-y-2">
              <Link href="/navigation-demo" className="block text-indigo-600 hover:text-indigo-800">
                → Navigation Demo
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              useRouter, usePathname examples
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Learning Tips</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Each folder in src/app represents a route segment</li>
            <li>• page.tsx files create the UI for a route</li>
            <li>• layout.tsx files wrap pages and can be nested</li>
            <li>• [param] creates dynamic routes</li>
            <li>• [...slug] creates catch-all routes</li>
            <li>• (group) organizes routes without affecting URL structure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
