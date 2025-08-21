export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded px-3 py-2"
              defaultValue="johndoe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 rounded px-3 py-2"
              defaultValue="john@example.com"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable notifications</span>
            </label>
          </div>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
      
      <div className="mt-6 p-4 bg-pink-50 rounded">
        <h2 className="font-semibold text-pink-800">Learning Note:</h2>
        <p className="text-pink-700">
          Another nested route: /dashboard/settings
          <br />
          Notice how the layout is shared with other dashboard pages.
        </p>
      </div>
    </div>
  );
}