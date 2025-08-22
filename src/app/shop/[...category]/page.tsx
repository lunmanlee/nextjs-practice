interface ShopPageProps {
  params: Promise<{ category: string[] }>;
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { category } = await params;

  const currentPath = category.join('/');

  return (
    <div className="p-8">
      <h1>hello</h1>
      current path: <code>/{currentPath}</code>

      <p>
        {category.map((segment, index) => (
          <span key={index}>
            <span className="mx-2">/</span>
            <span>{segment}</span>
          </span>
        ))}
      </p>
    </div>
  )
}