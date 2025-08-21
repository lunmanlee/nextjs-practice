interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  
  // Simulate fetching post data
  const post = {
    id,
    title: `Post ${id}`,
    content: `This is the content for post ${id}. In a real app, you would fetch this data from an API or database.`,
    author: 'John Doe',
    date: new Date().toLocaleDateString()
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-600 mb-4">
        By {post.author} on {post.date}
      </div>
      <p className="text-lg mb-6">{post.content}</p>
      
      <div className="mt-6 p-4 bg-green-50 rounded">
        <h2 className="font-semibold text-green-800">Learning Note: Dynamic Routes</h2>
        <p className="text-green-700 mb-3">
          This is a dynamic route. The [id] folder creates a dynamic segment.
          <br />
          Current ID: <code>{id}</code>
        </p>
        <div className="bg-white p-3 rounded border">
          <p className="text-sm font-medium text-green-800 mb-2">Dynamic Route Code:</p>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`src/app/posts/[id]/page.tsx → /posts/:id route

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  
  return (
    <div>
      <h1>Post {id}</h1>
      <p>Dynamic content for post: {id}</p>
    </div>
  );
}

// URLs that match:
// /posts/1 → id = "1"
// /posts/hello → id = "hello"
// /posts/123abc → id = "123abc"`}
          </pre>
        </div>
      </div>
    </div>
  );
}