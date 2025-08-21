import Link from "next/link";

export default function UsersPage() {
  const users = [
    { id: '1', name: 'Sansan'},
    { id: '2', name: 'Erer'},
    { id: '3', name: 'Yiyi'},
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="border border-gray-200 rounded p-4">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/users/${user.id}`} className="text-blue-600 hover:text-blue-800">
                  {user.name}
                </Link>
              </h2>
            </div> 
          ))}
        </div>
      </h1>
    </div>
  )
}