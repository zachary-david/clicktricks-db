'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'

interface ErrorInfo {
  timestamp: string
  userAgent: string
  url: string
  errorStack?: string
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null)
  const [reportSent, setReportSent] = useState(false)

  useEffect(() => {
    // Capture error details
    const info: ErrorInfo = {
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
      errorStack: error.stack
    }
    setErrorInfo(info)

    // Log error with structured data
    console.error('Global error occurred:', {
      message: error.message,
      digest: error.digest,
      ...info
    })

    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to your error tracking service
      // logErrorToService({ error, info })
    }
  }, [error])

  const handleSendReport = async () => {
    try {
      // In production, this would send to your error reporting endpoint
      console.log('Error report:', {
        error: error.message,
        digest: error.digest,
        ...errorInfo
      })
      setReportSent(true)
      
      // Show success message for 3 seconds
      setTimeout(() => setReportSent(false), 3000)
    } catch (e) {
      console.error('Failed to send error report:', e)
    }
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
          <div className="max-w-lg w-full text-center">
            <div className="mb-8">
              <Logo size="lg" variant="light" className="justify-center" />
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
                <p className="text-gray-600 mb-6">
                  We apologize for the inconvenience. The good news? Your interest in ClickTricks is safe, and we're here to help!
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h2 className="font-semibold text-gray-800 mb-2">What can you do?</h2>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li className="flex items-start">
                    <span className="text-[#01a2f1] mr-2">•</span>
                    <span>Try refreshing the page</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01a2f1] mr-2">•</span>
                    <span>Check your internet connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01a2f1] mr-2">•</span>
                    <span>Clear your browser cache</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01a2f1] mr-2">•</span>
                    <span>Contact us if the issue persists</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={reset}
                  className="w-full bg-gradient-to-r from-[#01a2f1] to-[#0182c4] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </button>
                
                <Link 
                  href="/"
                  className="w-full bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Homepage
                </Link>
                
                {!reportSent ? (
                  <button
                    onClick={handleSendReport}
                    className="w-full text-gray-500 text-sm hover:text-gray-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Report this issue
                  </button>
                ) : (
                  <div className="text-green-600 text-sm flex items-center justify-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Report sent successfully!
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Still interested in ClickTricks?</span> This error won't affect your ability to get started with your custom Airtable CRM setup.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Need immediate assistance? We're here to help!
                  </p>
                  <a 
                    href="mailto:support@clicktricks.com" 
                    className="text-[#01a2f1] hover:text-[#0182c4] font-medium text-sm"
                  >
                    support@clicktricksdb.com
                  </a>
                </div>
                
                {(error.digest || errorInfo) && (
                  <details className="mt-4 text-left">
                    <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">
                      Technical details
                    </summary>
                    <div className="mt-2 p-3 bg-gray-50 rounded text-xs text-gray-500 font-mono overflow-x-auto">
                      {error.digest && <div>Error ID: {error.digest}</div>}
                      {errorInfo && (
                        <>
                          <div>Time: {new Date(errorInfo.timestamp).toLocaleString()}</div>
                          <div>URL: {errorInfo.url}</div>
                          {process.env.NODE_ENV === 'development' && errorInfo.errorStack && (
                            <div className="mt-2 whitespace-pre-wrap break-words">
                              {errorInfo.errorStack}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}