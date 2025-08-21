export default function PostsLoading() {
  return (
    <div className="p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded p-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded">
        <h2 className="font-semibold text-gray-800">Loading State:</h2>
        <p className="text-gray-700 text-sm">
          This loading.tsx file shows while the posts page is loading.
          <br />
          File location: <code>src/app/posts/loading.tsx</code>
        </p>
      </div>
    </div>
  );
}