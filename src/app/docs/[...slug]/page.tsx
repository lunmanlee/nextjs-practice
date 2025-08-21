interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  
  // Simulate a docs structure
  const docsData: Record<string, any> = {
    'getting-started': {
      title: 'Getting Started',
      content: 'Welcome to our documentation! This guide will help you get up and running quickly.'
    },
    'api/users': {
      title: 'Users API',
      content: 'Documentation for the Users API endpoints.'
    },
    'api/posts': {
      title: 'Posts API', 
      content: 'Documentation for the Posts API endpoints.'
    },
    'guides/deployment': {
      title: 'Deployment Guide',
      content: 'Learn how to deploy your application to production.'
    }
  };

  const currentPath = slug.join('/');
  const doc = docsData[currentPath] || {
    title: 'Documentation',
    content: `Documentation for: ${currentPath}`
  };

  return (
    <div className="p-8">
      <nav className="text-sm text-gray-600 mb-4">
        <span>docs</span>
        {slug.map((segment, index) => (
          <span key={index}>
            <span className="mx-2">/</span>
            <span>{segment}</span>
          </span>
        ))}
      </nav>
      
      <h1 className="text-3xl font-bold mb-6">{doc.title}</h1>
      <p className="text-lg mb-6">{doc.content}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border border-gray-200 rounded p-4">
          <h3 className="font-semibold mb-2">Try these URLs:</h3>
          <ul className="space-y-1 text-sm">
            <li><code>/docs/getting-started</code></li>
            <li><code>/docs/api/users</code></li>
            <li><code>/docs/api/posts</code></li>
            <li><code>/docs/guides/deployment</code></li>
            <li><code>/docs/any/nested/path</code></li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded p-4">
          <h3 className="font-semibold mb-2">Current URL Segments:</h3>
          <ul className="space-y-1 text-sm">
            {slug.map((segment, index) => (
              <li key={index}>
                <code>slug[{index}]: {segment}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-red-50 rounded">
        <h2 className="font-semibold text-red-800">Learning Note: Catch-all Routes</h2>
        <p className="text-red-700 mb-3">
          This is a catch-all route using [...slug] syntax.
          <br />
          It captures all segments after /docs/ as an array.
          <br />
          Current path: <code>/{currentPath}</code>
        </p>
        <div className="bg-white p-3 rounded border">
          <p className="text-sm font-medium text-red-800 mb-2">Catch-all Route Code:</p>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`src/app/docs/[...slug]/page.tsx → /docs/* route

interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const currentPath = slug.join('/');
  
  return (
    <div>
      <h1>Docs: {currentPath}</h1>
      <p>Segments: {JSON.stringify(slug)}</p>
    </div>
  );
}

// URLs that match:
// /docs/getting-started → slug = ["getting-started"]
// /docs/api/users → slug = ["api", "users"]
// /docs/guides/deployment/vercel → slug = ["guides", "deployment", "vercel"]`}
          </pre>
        </div>
      </div>
    </div>
  );
}