import Logo from '@/components/Logo'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Logo size="lg" variant="light" className="justify-center" />
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
          <div className="flex items-center justify-center mb-4">
            <div className="loading-spinner"></div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Loading Your Airtable CRM Experience...
          </h2>
          
          <p className="text-gray-600 max-w-sm">
            We're preparing everything you need to never lose another $5K+ coaching client.
          </p>
        </div>
      </div>
    </div>
  )
}