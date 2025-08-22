interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: BlogPageProps) {
  const { id } = await params;

  const blog = {
    id,
    title: `Banana are dying`,
    content: `Rip banana`,
    author: 'lun',
    date: new Date().toLocaleDateString()
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-3">
        {blog.title} by {blog.author}
      </h1>
      
      <p>{blog.content}</p>
    </div>
  )
}