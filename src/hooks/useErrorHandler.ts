'use client'

import { useCallback, useState } from 'react'
import { logError, NetworkError, ValidationError } from '@/lib/errorTracking'

interface ErrorState {
  error: Error | null
  isError: boolean
  errorMessage: string
}

interface ErrorHandlerOptions {
  onError?: (error: Error) => void
  fallbackMessage?: string
  logToConsole?: boolean
}

export function useErrorHandler(options: ErrorHandlerOptions = {}) {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    isError: false,
    errorMessage: ''
  })

  const resetError = useCallback(() => {
    setErrorState({
      error: null,
      isError: false,
      errorMessage: ''
    })
  }, [])

  const handleError = useCallback((error: unknown) => {
    let errorObject: Error

    // Convert various error types to Error object
    if (error instanceof Error) {
      errorObject = error
    } else if (typeof error === 'string') {
      errorObject = new Error(error)
    } else if (error && typeof error === 'object' && 'message' in error) {
      errorObject = new Error((error as { message: string }).message)
    } else {
      errorObject = new Error('An unknown error occurred')
    }

    // Log error
    logError(errorObject, { source: 'useErrorHandler' })

    // Log to console if requested
    if (options.logToConsole !== false) {
      console.error('Error handled:', errorObject)
    }

    // Set error state
    setErrorState({
      error: errorObject,
      isError: true,
      errorMessage: options.fallbackMessage || errorObject.message
    })

    // Call custom error handler if provided
    options.onError?.(errorObject)
  }, [options])

  // Helper function to handle async operations
  const handleAsync = useCallback(async <T,>(
    asyncFunction: () => Promise<T>,
    errorMessage?: string
  ): Promise<T | null> => {
    try {
      resetError()
      return await asyncFunction()
    } catch (error) {
      handleError(error)
      if (errorMessage) {
        setErrorState(prev => ({ ...prev, errorMessage }))
      }
      return null
    }
  }, [handleError, resetError])

  // Check if error is of specific type
  const isNetworkError = errorState.error instanceof NetworkError
  const isValidationError = errorState.error instanceof ValidationError

  return {
    error: errorState.error,
    isError: errorState.isError,
    errorMessage: errorState.errorMessage,
    isNetworkError,
    isValidationError,
    handleError,
    handleAsync,
    resetError
  }
}

// Hook for form error handling
export function useFormErrorHandler() {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const { handleError, resetError, ...errorState } = useErrorHandler()

  const setFieldError = useCallback((field: string, message: string) => {
    setFieldErrors(prev => ({ ...prev, [field]: message }))
  }, [])

  const clearFieldError = useCallback((field: string) => {
    setFieldErrors(prev => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [field]: removed, ...rest } = prev
      return rest
    })
  }, [])

  const clearAllErrors = useCallback(() => {
    setFieldErrors({})
    resetError()
  }, [resetError])

  const validateField = useCallback((
    field: string,
    value: unknown,
    validator: (value: unknown) => string | null
  ): boolean => {
    const error = validator(value)
    if (error) {
      setFieldError(field, error)
      return false
    }
    clearFieldError(field)
    return true
  }, [setFieldError, clearFieldError])

  return {
    ...errorState,
    fieldErrors,
    hasFieldErrors: Object.keys(fieldErrors).length > 0,
    setFieldError,
    clearFieldError,
    clearAllErrors,
    validateField,
    handleError,
    resetError
  }
}