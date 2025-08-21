export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
          <nav className="mt-4">
            <div className="px-4 py-2">
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
            <div className="px-4 py-2">
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
            </div>
            <div className="px-4 py-2">
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4 p-4 bg-blue-50 rounded border">
        <p className="text-sm text-blue-800">
          <strong>Loading:</strong> Dashboard is loading...
        </p>
      </div>
    </div>
  );
}