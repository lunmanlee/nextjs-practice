export default function ContactPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
      <p className="text-lg mb-4">
        Another static route example at:
        <code className="bg-gray-100 px-2 py-1 rounded ml-2">
          src/app/contact/page.tsx
        </code>
      </p>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Your name"
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
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-green-50 rounded">
        <h2 className="font-semibold text-green-800">Learning Note: Static Routes with Forms</h2>
        <p className="text-green-700 mb-3">
          Static routes can contain interactive elements like forms. Each page.tsx file is a React component.
        </p>
        <div className="bg-white p-3 rounded border">
          <p className="text-sm font-medium text-green-800 mb-2">Code Structure:</p>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{`src/app/contact/page.tsx → /contact route

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}