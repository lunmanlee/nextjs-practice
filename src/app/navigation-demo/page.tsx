'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function NavigationDemo() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  const handleProgrammaticNavigation = () => {
    if (inputValue) {
      router.push(`/posts/${inputValue}`);
    }
  };

  const handleBackNavigation = () => {
    router.back();
  };

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Navigation Hooks Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Route Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Current Route Info</h2>
          <div className="space-y-2 text-sm">
            <div>
              <strong>Pathname:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{pathname}</code>
            </div>
            <div>
              <strong>Search Params:</strong> 
              <code className="bg-gray-100 px-2 py-1 rounded ml-2">
                {searchParams.toString() || 'none'}
              </code>
            </div>
          </div>
        </div>

        {/* Link Navigation */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Link Navigation</h2>
          <div className="space-y-2">
            <Link 
              href="/navigation-demo?tab=overview" 
              className="block text-blue-600 hover:text-blue-800"
            >
              → Add ?tab=overview
            </Link>
            <Link 
              href="/navigation-demo?tab=settings&debug=true" 
              className="block text-blue-600 hover:text-blue-800"
            >
              → Add multiple params
            </Link>
            <Link 
              href="/posts/navigation-example" 
              className="block text-blue-600 hover:text-blue-800"
            >
              → Go to posts/navigation-example
            </Link>
          </div>
        </div>

        {/* Programmatic Navigation */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Programmatic Navigation</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Navigate to post ID:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter post ID..."
                />
                <button
                  onClick={handleProgrammaticNavigation}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Go
                </button>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleBackNavigation}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Go Back
              </button>
              <button
                onClick={handleRefresh}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Search Params Demo */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Search Params</h2>
          <div className="space-y-2">
            <div className="text-sm">
              <strong>Tab:</strong> {searchParams.get('tab') || 'none'}
            </div>
            <div className="text-sm">
              <strong>Debug:</strong> {searchParams.get('debug') || 'false'}
            </div>
            <div className="text-sm">
              <strong>All params:</strong>
              <pre className="bg-gray-100 p-2 rounded mt-1 text-xs">
                {JSON.stringify(Object.fromEntries(searchParams.entries()), null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded">
        <h2 className="font-semibold text-gray-800 mb-2">Navigation Hooks Reference:</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><code>useRouter()</code> - For programmatic navigation (push, back, refresh)</li>
          <li><code>usePathname()</code> - Get current pathname</li>
          <li><code>useSearchParams()</code> - Access URL search parameters</li>
          <li><code>Link</code> - Declarative navigation component</li>
        </ul>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded">
        <h2 className="font-semibold text-blue-800">Learning Note: Navigation Hooks</h2>
        <p className="text-blue-700 mb-3">
          This page demonstrates client-side navigation hooks. 
          Note the 'use client' directive at the top - these hooks only work in Client Components.
        </p>
        <div className="bg-white p-3 rounded border">
          <p className="text-sm font-medium text-blue-800 mb-2">Navigation Hooks Code:</p>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function NavigationDemo() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  const handleProgrammaticNavigation = () => {
    if (inputValue) {
      router.push(\`/posts/\${inputValue}\`);
    }
  };

  const handleBackNavigation = () => {
    router.back();
  };

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Navigation Hooks Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Route Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Current Route Info</h2>
          <div className="space-y-2 text-sm">
            <div>
              <strong>Pathname:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{pathname}</code>
            </div>
            <div>
              <strong>Search Params:</strong> 
              <code className="bg-gray-100 px-2 py-1 rounded ml-2">
                {searchParams.toString() || 'none'}
              </code>
            </div>
          </div>
        </div>

        {/* Link Navigation */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Link Navigation</h2>
          <div className="space-y-2">
            <Link 
              href="/navigation-demo?tab=overview" 
              className="block text-blue-600 hover:text-blue-800"
            >
              → Add ?tab=overview
            </Link>
            <Link 
              href="/navigation-demo?tab=settings&debug=true" 
              className="block text-blue-600 hover:text-blue-800"
            >
              → Add multiple params
            </Link>
            <Link 
              href="/posts/navigation-example" 
              className="block text-blue-600 hover:text-blue-800"
            >
              → Go to posts/navigation-example
            </Link>
          </div>
        </div>

        {/* Programmatic Navigation */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Programmatic Navigation</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Navigate to post ID:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter post ID..."
                />
                <button
                  onClick={handleProgrammaticNavigation}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Go
                </button>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleBackNavigation}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Go Back
              </button>
              <button
                onClick={handleRefresh}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Search Params Demo */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Search Params</h2>
          <div className="space-y-2">
            <div className="text-sm">
              <strong>Tab:</strong> {searchParams.get('tab') || 'none'}
            </div>
            <div className="text-sm">
              <strong>Debug:</strong> {searchParams.get('debug') || 'false'}
            </div>
            <div className="text-sm">
              <strong>All params:</strong>
              <pre className="bg-gray-100 p-2 rounded mt-1 text-xs">
                {JSON.stringify(Object.fromEntries(searchParams.entries()), null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded">
        <h2 className="font-semibold text-gray-800 mb-2">Navigation Hooks Reference:</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><code>useRouter()</code> - For programmatic navigation (push, back, refresh)</li>
          <li><code>usePathname()</code> - Get current pathname</li>
          <li><code>useSearchParams()</code> - Access URL search parameters</li>
          <li><code>Link</code> - Declarative navigation component</li>
        </ul>
      </div>
    </div>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}