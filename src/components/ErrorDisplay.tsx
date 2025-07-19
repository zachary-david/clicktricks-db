'use client'

import { useEffect, useState } from 'react'
import { logError } from '@/lib/errorTracking'

interface ErrorDisplayProps {
  error: Error | string
  reset?: () => void
  title?: string
  showDetails?: boolean
  variant?: 'inline' | 'full' | 'toast'
  onClose?: () => void
  onRetry?: () => void
  onDismiss?: () => void
  className?: string
}

export default function ErrorDisplay({
  error,
  reset,
  title = 'Something went wrong',
  showDetails = process.env.NODE_ENV === 'development',
  variant = 'inline',
  onClose,
  onRetry,
  onDismiss,
  className = ''
}: ErrorDisplayProps) {
  const [isVisible, setIsVisible] = useState(true)
  const errorMessage = typeof error === 'string' ? error : error.message

  useEffect(() => {
    // Log error when component mounts
    const errorObject = typeof error === 'string' ? new Error(error) : error
    logError(errorObject, { display: variant })
  }, [error, variant])

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  if (!isVisible) return null

  if (variant === 'toast') {
    return (
      <div className="fixed bottom-4 right-4 max-w-sm animate-slide-up z-50">
        <div className="bg-red-50 border border-red-200 rounded-lg shadow-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{title}</h3>
              <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={handleClose}
                className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
              >
                <span className="sr-only">Dismiss</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'full') {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-600 mb-6">{errorMessage}</p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-amber-800 mb-2">Quick fixes to try:</h3>
                <ul className="text-sm text-amber-700 space-y-1 text-left">
                  <li>• Refresh the page</li>
                  <li>• Check your internet connection</li>
                  <li>• Clear your browser cache</li>
                  <li>• Try again in a few moments</li>
                </ul>
              </div>
              
              {(reset || onRetry) && (
                <button
                  onClick={reset || onRetry}
                  className="bg-gradient-to-r from-[#01a2f1] to-[#0182c4] text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Try Again
                </button>
              )}
              
              {showDetails && error instanceof Error && error.stack && (
                <details className="mt-6 text-left">
                  <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                    Technical details
                  </summary>
                  <pre className="mt-2 text-xs text-gray-600 bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default inline variant
  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
          {(reset || onRetry) && (
            <button
              onClick={reset || onRetry}
              className="mt-2 text-sm font-medium text-red-600 hover:text-red-500"
            >
              Try again →
            </button>
          )}
        </div>
        {(onClose || onDismiss) && (
          <button
            onClick={onDismiss || handleClose}
            className="ml-auto flex-shrink-0 inline-flex rounded-md text-red-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      {showDetails && error instanceof Error && error.stack && (
        <details className="mt-3">
          <summary className="text-xs text-red-600 cursor-pointer">Show details</summary>
          <pre className="mt-1 text-xs text-red-600 overflow-x-auto">{error.stack}</pre>
        </details>
      )}
    </div>
  )
}