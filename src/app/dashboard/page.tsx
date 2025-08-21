export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$12,345</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-purple-600">567</p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded">
        <h2 className="font-semibold text-yellow-800">Learning Note: Nested Routes & Layouts</h2>
        <p className="text-yellow-700 mb-3">
          This page uses the dashboard layout. Notice how the sidebar is shared across all dashboard routes.
        </p>
        <div className="bg-white p-3 rounded border">
          <p className="text-sm font-medium text-yellow-800 mb-2">Layout Structure:</p>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`src/app/dashboard/layout.tsx (shared layout)
src/app/dashboard/page.tsx → /dashboard
src/app/dashboard/analytics/page.tsx → /dashboard/analytics

// layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <nav>Dashboard Navigation</nav>
      <main>{children}</main> {/* page.tsx renders here */}
    </div>
  );
}

// page.tsx
export default function DashboardPage() {
  return <div>Dashboard content</div>;
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}