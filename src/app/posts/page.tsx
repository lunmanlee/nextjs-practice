import Link from 'next/link';

export default function PostsPage() {
  const posts = [
    { id: '1', title: 'First Post', excerpt: 'This is the first post' },
    { id: '2', title: 'Second Post', excerpt: 'This is the second post' },
    { id: '3', title: 'Third Post', excerpt: 'This is the third post' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded p-4">
            <h2 className="text-xl font-semibold mb-2">
              <Link 
                href={`/posts/${post.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 rounded">
        <h2 className="font-semibold text-purple-800">Learning Note:</h2>
        <p className="text-purple-700">
          This posts index page links to dynamic routes. Click any post to see the [id] route in action.
        </p>
      </div>
    </div>
  );
}