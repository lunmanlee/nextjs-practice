'use client';

import { useEffect } from 'react';

export default function PostsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Posts error:', error);
  }, [error]);

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-800 mb-4">
            Something went wrong!
          </h2>
          <p className="text-red-600 mb-4">
            An error occurred while loading the posts.
          </p>
          <button
            onClick={reset}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Try again
          </button>
        </div>
        
        <div className="mt-6 p-4 bg-orange-50 rounded">
          <h2 className="font-semibold text-orange-800">Error Boundary:</h2>
          <p className="text-orange-700 text-sm">
            This error.tsx file catches errors in the posts route.
            <br />
            File location: <code>src/app/posts/error.tsx</code>
            <br />
            Note: Must be a Client Component ('use client')
          </p>
        </div>
      </div>
    </div>
  );
}