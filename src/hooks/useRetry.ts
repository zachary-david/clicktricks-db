import { useState, useCallback } from 'react'
import { retryOperation, RetryOptions } from '@/lib/errorTracking'

interface UseRetryResult<T> {
  data: T | null
  error: Error | null
  isLoading: boolean
  isRetrying: boolean
  execute: () => Promise<void>
  retry: () => Promise<void>
  reset: () => void
}

export function useRetry<T>(
  operation: () => Promise<T>,
  options?: RetryOptions
): UseRetryResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isRetrying, setIsRetrying] = useState(false)
  const [, setAttemptCount] = useState(0)

  const execute = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    setAttemptCount(0)

    try {
      const result = await retryOperation(operation, {
        ...options,
        onRetry: (attempt, err) => {
          setAttemptCount(attempt)
          setIsRetrying(true)
          options?.onRetry?.(attempt, err)
        }
      })
      
      setData(result)
      setIsRetrying(false)
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
      setIsRetrying(false)
    } finally {
      setIsLoading(false)
    }
  }, [operation, options])

  const retry = useCallback(async () => {
    await execute()
  }, [execute])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setIsLoading(false)
    setIsRetrying(false)
    setAttemptCount(0)
  }, [])

  return {
    data,
    error,
    isLoading,
    isRetrying,
    execute,
    retry,
    reset
  }
}

// Hook for retrying failed network requests
export function useRetryableRequest<T>(
  url: string,
  options?: RequestInit & { retryOptions?: RetryOptions }
): UseRetryResult<T> {
  const { retryOptions, ...fetchOptions } = options || {}

  const operation = useCallback(async () => {
    const response = await fetch(url, fetchOptions)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return response.json() as Promise<T>
  }, [url, fetchOptions])

  return useRetry(operation, retryOptions)
}