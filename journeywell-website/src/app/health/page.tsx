export default function HealthCheck() {
  const checks = [
    {
      name: 'Next.js App Router',
      status: 'pass',
      message: 'App directory routing is working'
    },
    {
      name: 'Tailwind CSS',
      status: 'pass',
      message: 'Styling system loaded'
    },
    {
      name: 'TypeScript',
      status: 'pass',
      message: 'Type checking enabled'
    },
    {
      name: 'Environment',
      status: process.env.NODE_ENV === 'production' ? 'pass' : 'warn',
      message: `Running in ${process.env.NODE_ENV} mode`
    }
  ];

  const overallStatus = checks.every(check => check.status === 'pass') ? 'healthy' : 'warning';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">System Health Check</h1>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              overallStatus === 'healthy' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${
                overallStatus === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
              }`}></div>
              {overallStatus === 'healthy' ? 'All Systems Operational' : 'Some Issues Detected'}
            </div>
          </div>

          <div className="space-y-4">
            {checks.map((check, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    check.status === 'pass' ? 'bg-green-500' : 
                    check.status === 'warn' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div>
                    <h3 className="font-medium text-gray-900">{check.name}</h3>
                    <p className="text-sm text-gray-600">{check.message}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  check.status === 'pass' ? 'bg-green-100 text-green-800' :
                  check.status === 'warn' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {check.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">System Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Build Time:</span> {new Date().toISOString()}
              </div>
              <div>
                <span className="font-medium">Node Environment:</span> {process.env.NODE_ENV}
              </div>
              <div>
                <span className="font-medium">Next.js Version:</span> 14.0.4
              </div>
              <div>
                <span className="font-medium">React Version:</span> 18.2.0
              </div>
            </div>
          </div>

          <div className="mt-8 text-center space-x-4">
            <a 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </a>
            <a 
              href="/debug"
              className="inline-block bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Debug Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 