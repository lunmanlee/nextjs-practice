interface UserPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  // Stimulate fetching
  const user = {
    id,
    name: `User ${id}`,
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        {user.name}
      </h1>
    </div>
  )
}