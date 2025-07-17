import Link from 'next/link'
import Logo from '@/components/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Logo size="lg" variant="light" className="justify-center" />
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
          <div className="text-6xl font-bold text-blue-500 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. Let's get you back to setting up your Airtable CRM!
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="btn-professional btn-lg w-full text-white font-semibold rounded-lg inline-flex items-center justify-center"
            >
              Back to Home
            </Link>
            
            <Link 
              href="/#contact"
              className="btn-secondary btn-lg w-full inline-flex items-center justify-center"
            >
              Get Your Airtable Setup
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? We're here to set up your custom Airtable CRM in 30 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}