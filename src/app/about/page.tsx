export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="text-lg">
        This is a static route example. The file is located at:
        <code className="bg-gray-100 px-2 py-1 rounded ml-2">
          src/app/about/page.tsx
        </code>
      </p>
      <div className="mt-6 p-4 bg-blue-50 rounded">
        <h2 className="font-semibold text-blue-800">Learning Note: Static Routes</h2>
        <p className="text-blue-700 mb-3">
          In App Router, each folder represents a route segment, and page.tsx creates the UI for that route.
        </p>
        <div className="bg-white p-3 rounded border">
          <p className="text-sm font-medium text-blue-800 mb-2">File Structure:</p>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`src/app/about/page.tsx → /about route

export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a static route.</p>
    </div>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}