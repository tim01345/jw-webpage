export default function Debug() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Debug Page</h1>
        <p className="text-gray-600 mb-4">
          If you can see this page, Next.js routing is working correctly.
        </p>
        <div className="space-y-2 text-sm text-left bg-white p-4 rounded-lg">
          <div><strong>Environment:</strong> {process.env.NODE_ENV}</div>
          <div><strong>Next.js Version:</strong> 14.0.4</div>
          <div><strong>Build Time:</strong> {new Date().toISOString()}</div>
        </div>
        <div className="mt-6">
          <a 
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
} 