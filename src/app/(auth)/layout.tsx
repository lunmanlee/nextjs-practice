export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {children}
      
      <div className="fixed top-4 right-4 p-3 bg-emerald-50 rounded border max-w-sm">
        <p className="text-sm text-emerald-800">
          <strong>Route Group Layout:</strong> This gradient background appears on all (auth) routes: /login and /register
        </p>
      </div>
    </div>
  );
}