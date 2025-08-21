export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? 
          <a href="/register" className="text-blue-600 hover:text-blue-800 ml-1">
            Sign up
          </a>
        </p>
        
        <div className="mt-6 p-4 bg-cyan-50 rounded">
          <h2 className="font-semibold text-cyan-800">Learning Note: Route Groups</h2>
          <p className="text-cyan-700 text-sm mb-3">
            This is inside a route group: (auth)
            <br />
            URL: <code>/login</code> (parentheses don't affect the URL)
          </p>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm font-medium text-cyan-800 mb-2">Route Group Structure:</p>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`src/app/(auth)/layout.tsx (shared auth layout)
src/app/(auth)/login/page.tsx → /login
src/app/(auth)/register/page.tsx → /register

// (auth)/layout.tsx
export default function AuthLayout({ children }) {
  return (
    <div className="auth-wrapper">
      {children} {/* login/register pages render here */}
    </div>
  );
}

// Benefits:
// - Groups related routes (/login, /register)
// - Shares layout without affecting URLs
// - Keeps file structure organized`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}