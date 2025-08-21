export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="John Doe"
            />
          </div>
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
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? 
          <a href="/login" className="text-blue-600 hover:text-blue-800 ml-1">
            Sign in
          </a>
        </p>
        
        <div className="mt-6 p-4 bg-teal-50 rounded">
          <h2 className="font-semibold text-teal-800">Learning Note:</h2>
          <p className="text-teal-700 text-sm">
            Also in the (auth) route group
            <br />
            File: <code>src/app/(auth)/register/page.tsx</code>
            <br />
            URL: <code>/register</code>
          </p>
        </div>
      </div>
    </div>
  );
}