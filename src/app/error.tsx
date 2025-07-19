'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import ErrorDisplay from '@/components/ErrorDisplay'
import { trackError } from '@/lib/errorTracking'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    trackError(error, {
      source: 'route-error-boundary',
      digest: error.digest,
    })
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-lg text-white/80 mb-8">
                We encountered an unexpected error while processing your request. 
                Our team has been notified and is working to fix this issue.
              </p>

              {process.env.NODE_ENV === 'development' && (
                <ErrorDisplay 
                  error={error} 
                  variant="inline"
                  className="mb-8 text-left"
                />
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Try Again
                </button>
                
                <Link
                  href="/"
                  className="px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-200 text-center"
                >
                  Back to Homepage
                </Link>
              </div>

              <div className="mt-12 p-6 bg-white/10 backdrop-blur rounded-2xl">
                <h2 className="text-xl font-semibold text-white mb-3">
                  Quick fixes to try:
                </h2>
                <ul className="text-left space-y-2 text-white/80">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Refresh the page (Ctrl+R or Cmd+R)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Clear your browser cache</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Check your internet connection</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Try again in a few minutes</span>
                  </li>
                </ul>
              </div>

              <p className="mt-8 text-sm text-white/60">
                Error ID: {error.digest || 'Unknown'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}