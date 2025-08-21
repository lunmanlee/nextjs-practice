export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Page Views</span>
            <span className="font-semibold">45,678</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Unique Visitors</span>
            <span className="font-semibold">12,345</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Bounce Rate</span>
            <span className="font-semibold">23.4%</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-indigo-50 rounded">
        <h2 className="font-semibold text-indigo-800">Learning Note:</h2>
        <p className="text-indigo-700">
          This is a nested route: /dashboard/analytics
          <br />
          File location: <code>src/app/dashboard/analytics/page.tsx</code>
        </p>
      </div>
    </div>
  );
}