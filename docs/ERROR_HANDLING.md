# Error Handling Guide for ClickTricks DB

## Overview

The ClickTricks DB landing page implements a comprehensive error handling system designed to provide excellent user experience while capturing detailed error information for debugging and monitoring.

## Components

### 1. Global Error Boundary (`src/app/global-error.tsx`)

The global error boundary catches unhandled errors at the application level and provides:
- User-friendly error messages
- Recovery suggestions
- Error reporting functionality
- Technical details in development mode
- Professional branding consistency

### 2. Component Error Boundary (`src/components/ErrorBoundary.tsx`)

A reusable error boundary for wrapping individual components:
- Prevents entire app crashes
- Provides localized error handling
- Maintains user context where possible

### 3. Error Display Component (`src/components/ErrorDisplay.tsx`)

Flexible error display with three variants:
- **inline**: For form and inline errors
- **full**: For page-level errors
- **toast**: For temporary notifications

### 4. Error Tracking (`src/lib/errorTracking.ts`)

Centralized error logging system:
- Automatic error capture
- Offline queue support
- Custom error types (NetworkError, ValidationError, BusinessError)
- Integration hooks for external services

### 5. Error Hooks (`src/hooks/useErrorHandler.ts`)

React hooks for error handling:
- `useErrorHandler`: General error handling
- `useFormErrorHandler`: Form-specific error handling with field validation

## Usage Examples

### Basic Error Handling

```typescript
import { useErrorHandler } from '@/hooks/useErrorHandler'
import ErrorDisplay from '@/components/ErrorDisplay'

function MyComponent() {
  const { handleError, isError, errorMessage, resetError } = useErrorHandler()

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      // Process data
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <div>
      {isError && (
        <ErrorDisplay 
          error={errorMessage} 
          reset={resetError}
          variant="inline"
        />
      )}
      {/* Component content */}
    </div>
  )
}
```

### Form Error Handling

```typescript
import { useFormErrorHandler } from '@/hooks/useErrorHandler'

function ContactForm() {
  const { 
    fieldErrors, 
    setFieldError, 
    clearFieldError,
    handleError,
    isError 
  } = useFormErrorHandler()

  const validateEmail = (email: string) => {
    if (!email) {
      setFieldError('email', 'Email is required')
      return false
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFieldError('email', 'Invalid email format')
      return false
    }
    clearFieldError('email')
    return true
  }

  // Form implementation
}
```

### Custom Error Types

```typescript
import { NetworkError, ValidationError } from '@/lib/errorTracking'

// Network error with status code
throw new NetworkError('Service unavailable', 503)

// Validation error with field
throw new ValidationError('Invalid email format', 'email')
```

## Error Recovery Strategies

### 1. Automatic Retry
For transient errors (network issues), consider implementing retry logic:

```typescript
const { handleAsync } = useErrorHandler()

const fetchWithRetry = async (url: string, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    const result = await handleAsync(
      () => fetch(url),
      `Failed to fetch (attempt ${i + 1})`
    )
    if (result) return result
    await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
  }
  throw new Error('Max retries exceeded')
}
```

### 2. Fallback UI
Components should provide meaningful fallbacks:

```typescript
<ErrorBoundary fallback={<LoadingFallback />}>
  <CriticalComponent />
</ErrorBoundary>
```

### 3. User Guidance
Always provide clear next steps:
- Refresh the page
- Check internet connection
- Contact support
- Try alternative actions

## Production Considerations

### 1. Error Reporting Service Integration

Update `src/lib/errorTracking.ts` to send errors to your service:

```typescript
if (process.env.NODE_ENV === 'production') {
  await fetch(process.env.NEXT_PUBLIC_ERROR_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ errors })
  })
}
```

### 2. Environment Variables

Add to `.env.production`:
```
NEXT_PUBLIC_ERROR_ENDPOINT=https://your-service.com/api/errors
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

### 3. Privacy Considerations
- Sanitize error messages before logging
- Avoid logging sensitive user data
- Implement data retention policies

## Testing Error Scenarios

### 1. Manual Testing
- Force errors in development with error triggers
- Test offline scenarios
- Verify error boundaries catch errors

### 2. Automated Testing
```typescript
// Example test
it('should display error message on form submission failure', async () => {
  // Mock API to return error
  server.use(
    rest.post('/api/contact', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )
  
  // Trigger form submission
  // Assert error is displayed
})
```

## Best Practices

1. **Always provide context**: Users should understand what went wrong
2. **Offer solutions**: Guide users on how to resolve the issue
3. **Log appropriately**: Capture enough detail for debugging without exposing sensitive data
4. **Fail gracefully**: Maintain as much functionality as possible
5. **Test error paths**: Ensure error handling works as expected
6. **Monitor in production**: Set up alerts for critical errors

## Common Error Scenarios

### Form Submission Errors
- Network failures
- Validation errors
- Server errors
- Rate limiting

### Data Loading Errors
- API failures
- Timeout errors
- Permission errors
- Data format errors

### Browser Compatibility
- Unsupported features
- JavaScript errors
- CSS issues

## Accessibility

Ensure error messages are accessible:
- Use proper ARIA attributes
- Announce errors to screen readers
- Provide keyboard navigation
- Use sufficient color contrast

## Performance

Error handling should be lightweight:
- Lazy load error components
- Minimize error tracking payload
- Batch error reports
- Use efficient data structures