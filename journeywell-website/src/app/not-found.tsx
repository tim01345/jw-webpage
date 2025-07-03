export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-lg mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        
        {/* Debug information */}
        <div className="bg-white p-4 rounded-lg mb-8 text-left text-sm">
          <h3 className="font-semibold mb-2">Debug Information:</h3>
          <div className="space-y-1 text-gray-600">
            <div><strong>Environment:</strong> {process.env.NODE_ENV}</div>
            <div><strong>URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Server-side'}</div>
            <div><strong>Timestamp:</strong> {new Date().toISOString()}</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </a>
          
          <div className="text-sm text-gray-500">
            <p>Available pages:</p>
            <ul className="mt-2 space-y-1">
              <li><a href="/" className="text-blue-600 hover:underline">Home (/)</a></li>
              <li><a href="/debug" className="text-blue-600 hover:underline">Debug (/debug)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}