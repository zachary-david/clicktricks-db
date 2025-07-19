"use client";

import { useState, useEffect } from 'react';
import ErrorDisplay from './ErrorDisplay';
import { trackError, NetworkError } from '@/lib/errorTracking';

interface DashboardItem {
  id: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  subtitle: string;
  label: string;
  labelColor: string;
  borderColor: string;
  dotColor: string;
}

export default function CRMDashboardView() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardItems, setDashboardItems] = useState<DashboardItem[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate API call
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate random error for demo (remove in production)
            if (Math.random() > 0.95) {
              reject(new NetworkError('Failed to load dashboard data'));
            } else {
              resolve(true);
            }
          }, 500);
        });

        // Set dashboard items
        setDashboardItems([
          {
            id: '1',
            priority: 'high',
            title: 'Call John Smith - Hot lead, $15K opportunity',
            subtitle: 'Expected close: This week',
            label: 'URGENT',
            labelColor: 'red',
            borderColor: 'border-red-500/30',
            dotColor: 'bg-red-500'
          },
          {
            id: '2',
            priority: 'medium',
            title: 'Send proposal to Mike Davis - $22K deal',
            subtitle: 'Deadline: End of day',
            label: 'TODAY',
            labelColor: 'yellow',
            borderColor: 'border-yellow-500/30',
            dotColor: 'bg-yellow-500'
          },
          {
            id: '3',
            priority: 'low',
            title: 'Schedule demo with Sarah Johnson',
            subtitle: 'Follow-up on initial interest',
            label: 'THIS WEEK',
            labelColor: 'blue',
            borderColor: 'border-blue-500/30',
            dotColor: 'bg-blue-500'
          }
        ]);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load dashboard');
        setError(error);
        trackError(error, { component: 'CRMDashboardView' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleRetry = () => {
    setError(null);
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate API call
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });

        // Set dashboard items
        setDashboardItems([
          {
            id: '1',
            priority: 'high',
            title: 'Call John Smith - Hot lead, $15K opportunity',
            subtitle: 'Expected close: This week',
            label: 'URGENT',
            labelColor: 'red',
            borderColor: 'border-red-500/30',
            dotColor: 'bg-red-500'
          },
          {
            id: '2',
            priority: 'medium',
            title: 'Send proposal to Mike Davis - $22K deal',
            subtitle: 'Deadline: End of day',
            label: 'TODAY',
            labelColor: 'yellow',
            borderColor: 'border-yellow-500/30',
            dotColor: 'bg-yellow-500'
          },
          {
            id: '3',
            priority: 'low',
            title: 'Schedule demo with Sarah Johnson',
            subtitle: 'Follow-up on initial interest',
            label: 'THIS WEEK',
            labelColor: 'blue',
            borderColor: 'border-blue-500/30',
            dotColor: 'bg-blue-500'
          }
        ]);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load dashboard');
        setError(error);
        trackError(error, { component: 'CRMDashboardView', retry: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  };

  if (error) {
    return (
      <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #374151'}}>
        <div className="bg-gray-800 p-3 sm:p-4 flex items-center gap-2 border-b border-gray-700">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-xs sm:text-sm text-gray-200 font-semibold truncate">Dashboard Overview</span>
        </div>
        <div className="p-4">
          <ErrorDisplay 
            error={error} 
            variant="inline"
            onRetry={handleRetry}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #374151'}}>
      {/* Airtable-style dark header */}
      <div className="bg-gray-800 p-3 sm:p-4 flex items-center gap-2 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-xs sm:text-sm text-gray-200 font-semibold truncate">Dashboard Overview</span>
        <div className="ml-auto flex gap-2">
          <button className="p-1 text-gray-400 hover:text-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

          <div className="space-y-2 sm:space-y-3">
            {isLoading ? (
              <>
                {/* Loading skeletons */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-750 border border-gray-600 rounded-lg p-3 animate-pulse">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3 flex-1">
                        <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-600 rounded w-3/4 mb-1"></div>
                          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-16 bg-gray-600 rounded"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              dashboardItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-gray-750 border ${item.borderColor} rounded-lg p-3 hover:bg-gray-700 transition-colors`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                      <div className={`w-2 h-2 ${item.dotColor} rounded-full ${item.priority === 'high' ? 'animate-pulse' : ''} flex-shrink-0`}></div>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-white">{item.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 bg-${item.labelColor}-500/20 text-${item.labelColor}-300 font-medium rounded border ${item.borderColor}`}>
                        {item.label}
                      </span>
                      <button 
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                        onClick={() => {
                          // Handle item completion
                          console.log('Complete item:', item.id);
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
  );
}