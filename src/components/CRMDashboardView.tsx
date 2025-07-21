"use client";

import { useState, useEffect } from 'react';
import ErrorDisplay from './ErrorDisplay';
import { trackError, NetworkError } from '@/lib/errorTracking';
import { ExclamationTriangleIcon, ClockIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

interface DashboardItem {
  id: string;
  priority: 'high' | 'medium' | 'low';
  contact: string;
  task: string;
  deadline: string;
  value: string;
  urgency: string;
  icon: typeof ExclamationTriangleIcon;
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
            id: 'FU001',
            priority: 'high',
            contact: 'John Smith',
            task: 'Hot lead follow-up call',
            deadline: 'Today',
            value: '$15,000',
            urgency: 'URGENT',
            icon: ExclamationTriangleIcon
          },
          {
            id: 'FU002',
            priority: 'medium',
            contact: 'Mike Davis',
            task: 'Send detailed proposal',
            deadline: 'End of day',
            value: '$22,000',
            urgency: 'TODAY',
            icon: ClockIcon
          },
          {
            id: 'FU003',
            priority: 'low',
            contact: 'Sarah Johnson',
            task: 'Schedule product demo',
            deadline: 'This week',
            value: '$8,500',
            urgency: 'THIS WEEK',
            icon: CalendarDaysIcon
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
            id: 'FU001',
            priority: 'high',
            contact: 'John Smith',
            task: 'Hot lead follow-up call',
            deadline: 'Today',
            value: '$15,000',
            urgency: 'URGENT',
            icon: ExclamationTriangleIcon
          },
          {
            id: 'FU002',
            priority: 'medium',
            contact: 'Mike Davis',
            task: 'Send detailed proposal',
            deadline: 'End of day',
            value: '$22,000',
            urgency: 'TODAY',
            icon: ClockIcon
          },
          {
            id: 'FU003',
            priority: 'low',
            contact: 'Sarah Johnson',
            task: 'Schedule product demo',
            deadline: 'This week',
            value: '$8,500',
            urgency: 'THIS WEEK',
            icon: CalendarDaysIcon
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

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'URGENT':
        return 'bg-red-100 text-red-800';
      case 'TODAY':
        return 'bg-yellow-100 text-yellow-800';
      case 'THIS WEEK':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (error) {
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-[#01a2f1] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Follow-ups Due Today
            </h3>
            <span className="text-xs text-gray-500">Error loading</span>
          </div>
        </div>
        <div className="p-6">
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
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Table Header */}
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 bg-[#01a2f1] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Follow-ups Due Today
          </h3>
          <span className="text-xs text-gray-500">{dashboardItems.length} tasks</span>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        {/* Table Column Headers */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700 uppercase tracking-wide">
          <div className="col-span-1">ID</div>
          <div className="col-span-2">Contact</div>
          <div className="col-span-4">Task</div>
          <div className="col-span-2">Deadline</div>
          <div className="col-span-2">Value</div>
          <div className="col-span-1">Priority</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100 min-h-[320px]">
          {isLoading ? (
            // Loading skeletons
            [...Array(3)].map((_, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 animate-pulse">
                <div className="col-span-1 flex items-center">
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-4 flex items-center">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-1 flex items-center">
                  <div className="h-6 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            dashboardItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
              >
                {/* ID Column */}
                <div className="col-span-1 flex items-center">
                  <span className="text-xs font-mono text-gray-500">{item.id}</span>
                </div>

                {/* Contact Column */}
                <div className="col-span-2 flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold text-gray-900">{item.contact}</span>
                </div>

                {/* Task Column */}
                <div className="col-span-4 flex items-center">
                  <span className="text-sm text-gray-600">{item.task}</span>
                </div>

                {/* Deadline Column */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-900 font-medium">{item.deadline}</span>
                </div>

                {/* Value Column */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-[#01a2f1] font-medium">{item.value}</span>
                </div>

                {/* Priority Column */}
                <div className="col-span-1 flex items-center">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getUrgencyColor(item.urgency)}`}>
                    {item.urgency}
                  </span>
                </div>
              </div>
            ))
          )}
          
          {/* Empty rows to maintain consistent height */}
          {!isLoading && dashboardItems.length < 5 && (
            <>
              {[...Array(5 - dashboardItems.length)].map((_, i) => (
                <div key={`empty-${i}`} className="h-16"></div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden divide-y divide-gray-100 min-h-[480px]">
        {isLoading ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="p-6 animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-gray-200 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ))
        ) : (
          dashboardItems.map((item) => (
            <div key={item.id} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="h-8 w-8 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.contact}</h3>
                  <p className="text-sm text-gray-500">{item.deadline} • {item.value}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono text-gray-500 mb-1">{item.id}</span>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getUrgencyColor(item.urgency)}`}>
                    {item.urgency}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">{item.task}</p>
            </div>
          ))
        )}
        
        {/* Empty space to maintain consistent height on mobile */}
        {!isLoading && dashboardItems.length < 5 && (
          <div style={{ height: `${(5 - dashboardItems.length) * 96}px` }}></div>
        )}
      </div>

      {/* Table Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Showing {dashboardItems.length} of {dashboardItems.length} follow-ups</span>
          <span>Last updated: Just now</span>
        </div>
      </div>
    </div>
  );
}