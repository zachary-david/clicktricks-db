interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
  width?: string;
  height?: string;
  lines?: number;
}

export function Skeleton({ 
  className = '', 
  variant = 'text', 
  width = '100%', 
  height = '1rem',
  lines = 1 
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]';
  
  const variantClasses = {
    text: 'rounded',
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    rounded: 'rounded-lg'
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{ 
              width: i === lines - 1 ? '75%' : width,
              height: height
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}

export function CRMTableSkeleton() {
  return (
    <div className="w-full">
      {/* Header Skeleton */}
      <div className="bg-gray-50 border-b border-gray-200 p-4">
        <div className="hidden md:grid grid-cols-12 gap-2">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="col-span-2">
              <Skeleton height="0.75rem" width="80%" />
            </div>
          ))}
        </div>
        <div className="md:hidden text-center">
          <Skeleton height="0.75rem" width="60%" className="mx-auto" />
        </div>
      </div>

      {/* Rows Skeleton */}
      <div className="max-h-80 overflow-y-auto">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="border-b border-gray-100 p-4">
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-12 gap-2">
              {/* Contact */}
              <div className="col-span-2 flex items-center gap-2">
                <Skeleton variant="circular" width="2rem" height="2rem" />
                <div className="flex-1">
                  <Skeleton height="0.875rem" width="70%" />
                  <Skeleton height="0.75rem" width="90%" className="mt-1" />
                </div>
              </div>
              
              {/* Other columns */}
              {Array.from({ length: 5 }, (_, j) => (
                <div key={j} className="col-span-2">
                  <Skeleton height="0.875rem" width="80%" />
                  <Skeleton height="0.75rem" width="60%" className="mt-1" />
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Skeleton variant="circular" width="2.5rem" height="2.5rem" />
                  <div>
                    <Skeleton height="1rem" width="8rem" />
                    <Skeleton height="0.875rem" width="6rem" className="mt-1" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton height="1.25rem" width="4rem" />
                  <Skeleton variant="circular" width="1.5rem" height="1.5rem" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Skeleton height="1.5rem" width="3rem" variant="rounded" />
                <Skeleton height="0.875rem" width="8rem" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Stats Skeleton */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="text-center">
              <Skeleton height="0.75rem" width="60%" className="mx-auto mb-1" />
              <Skeleton height="1.125rem" width="40%" className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="card p-8">
      <div className="flex items-center gap-4 mb-6">
        <Skeleton variant="circular" width="4rem" height="4rem" />
        <div className="flex-1">
          <Skeleton height="1.125rem" width="60%" />
          <Skeleton height="1rem" width="40%" className="mt-1" />
          <Skeleton height="0.875rem" width="80%" className="mt-1" />
          <Skeleton height="0.75rem" width="30%" className="mt-1" />
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <Skeleton key={i} variant="circular" width="1rem" height="1rem" />
        ))}
      </div>
      
      <div className="mb-6">
        <Skeleton lines={3} height="1rem" />
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <Skeleton height="0.875rem" width="90%" />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <Skeleton height="1.5rem" width="50%" className="mb-6" />
      
      <div className="space-y-4 md:space-y-6">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="form-group">
            <Skeleton height="0.875rem" width="30%" className="mb-2" />
            <Skeleton height="3rem" variant="rounded" />
          </div>
        ))}
        
        <div className="pt-2">
          <Skeleton height="3.5rem" variant="rounded" />
        </div>
        
        <Skeleton height="0.75rem" width="80%" className="mx-auto" />
      </div>
    </div>
  );
}