'use client'

import { useEffect } from 'react'
import Logo from '@/components/Logo'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <Logo size="lg" variant="light" className="justify-center" />
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
              <div className="text-5xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
              <p className="text-gray-600 mb-8">
                We're sorry, but something unexpected happened. Don't worry - your interest in our Airtable CRM setup is safe!
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={reset}
                  className="btn-professional btn-lg w-full text-white font-semibold rounded-lg inline-flex items-center justify-center"
                >
                  Try Again
                </button>
                
                <a 
                  href="/"
                  className="btn-secondary btn-lg w-full inline-flex items-center justify-center"
                >
                  Go to Homepage
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  If the problem persists, please contact us. We're still here to help set up your Airtable CRM!
                </p>
                {error.digest && (
                  <p className="text-xs text-gray-400 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}