import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
          </div>
          <nav className="mt-4">
            <Link 
              href="/dashboard" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Overview
            </Link>
            <Link 
              href="/dashboard/analytics" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Analytics
            </Link>
            <Link 
              href="/dashboard/settings" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4 p-4 bg-orange-50 rounded border">
        <p className="text-sm text-orange-800">
          <strong>Layout Example:</strong> This sidebar appears on all /dashboard/* routes
        </p>
      </div>
    </div>
  );
}