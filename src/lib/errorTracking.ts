import type { ErrorInfo } from 'react'

interface ErrorContext {
  error: Error
  errorInfo?: ErrorInfo | Record<string, unknown>
  context?: Record<string, unknown>
}

export interface RetryOptions {
  maxRetries?: number
  delay?: number
  backoff?: 'linear' | 'exponential'
  onRetry?: (attempt: number, error: Error) => void
}

interface ErrorReport {
  message: string
  stack?: string
  timestamp: string
  url: string
  userAgent: string
  context?: Record<string, unknown>
  digest?: string
}

class ErrorTracker {
  private static instance: ErrorTracker
  private errorQueue: ErrorReport[] = []
  private isOnline: boolean = true

  private constructor() {
    if (typeof window !== 'undefined') {
      // Monitor online status
      window.addEventListener('online', () => {
        this.isOnline = true
        this.flushErrorQueue()
      })
      
      window.addEventListener('offline', () => {
        this.isOnline = false
      })

      // Set up global error handler
      window.addEventListener('error', (event) => {
        this.logError({
          error: new Error(event.message),
          context: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            type: 'uncaught-error'
          }
        })
      })

      // Set up unhandled promise rejection handler
      window.addEventListener('unhandledrejection', (event) => {
        this.logError({
          error: new Error(event.reason),
          context: {
            type: 'unhandled-rejection',
            promise: event.promise
          }
        })
      })
    }
  }

  static getInstance(): ErrorTracker {
    if (!ErrorTracker.instance) {
      ErrorTracker.instance = new ErrorTracker()
    }
    return ErrorTracker.instance
  }

  logError({ error, errorInfo, context }: ErrorContext): void {
    const report: ErrorReport = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      context: {
        ...context,
        ...errorInfo,
        env: process.env.NODE_ENV
      }
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked:', report)
    }

    // Queue error for sending
    this.errorQueue.push(report)

    // Try to send immediately if online
    if (this.isOnline) {
      this.flushErrorQueue()
    }
  }

  private async flushErrorQueue(): Promise<void> {
    if (this.errorQueue.length === 0) return

    const errors = [...this.errorQueue]
    this.errorQueue = []

    try {
      // In production, send to your error tracking endpoint
      if (process.env.NODE_ENV === 'production') {
        // Example endpoint - replace with your actual service
        // await fetch('/api/errors', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ errors })
        // })
      }
    } catch (error) {
      // If sending fails, add back to queue
      this.errorQueue = [...errors, ...this.errorQueue]
      console.error('Failed to send error reports:', error)
    }
  }

  // Get error statistics
  getErrorStats(): { total: number; pending: number } {
    return {
      total: this.errorQueue.length,
      pending: this.errorQueue.length
    }
  }

  // Clear error queue
  clearErrors(): void {
    this.errorQueue = []
  }
}

// Export singleton instance
export const errorTracker = ErrorTracker.getInstance()

// Helper functions
export function logError(error: Error, context?: Record<string, unknown>): void {
  errorTracker.logError({ error, context })
}

export function logComponentError(
  error: Error,
  errorInfo: ErrorInfo,
  componentName: string
): void {
  errorTracker.logError({
    error,
    errorInfo,
    context: { component: componentName }
  })
}

// Custom error classes
export class NetworkError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message)
    this.name = 'NetworkError'
  }
}

export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

export class BusinessError extends Error {
  constructor(message: string, public code?: string) {
    super(message)
    this.name = 'BusinessError'
  }
}

// Main tracking function
export function trackError(error: Error | unknown, context?: Record<string, unknown>): void {
  const actualError = error instanceof Error ? error : new Error(String(error))
  logError(actualError, context)
}

// Retry mechanism for failed operations
export async function retryOperation<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxRetries = 3,
    delay = 1000,
    backoff = 'exponential',
    onRetry
  } = options

  let lastError: Error

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))
      
      if (attempt === maxRetries - 1) {
        // Last attempt failed
        trackError(lastError, { 
          retryAttempts: maxRetries,
          finalFailure: true 
        })
        throw lastError
      }

      // Calculate delay
      const retryDelay = backoff === 'exponential' 
        ? delay * Math.pow(2, attempt)
        : delay * (attempt + 1)

      // Call retry callback if provided
      onRetry?.(attempt + 1, lastError)

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, retryDelay))
    }
  }

  throw lastError!
}