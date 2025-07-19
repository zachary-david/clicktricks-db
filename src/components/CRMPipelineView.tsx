"use client";

import { useState, useEffect } from 'react';
import ErrorDisplay from './ErrorDisplay';
import { trackError, NetworkError } from '@/lib/errorTracking';
import { ChartBarIcon, ArrowTrendingUpIcon, ClockIcon } from '@heroicons/react/24/outline';

interface PipelineStage {
  id: string;
  name: string;
  count: number;
  value: string;
  percentage: string;
  icon: typeof ChartBarIcon;
  status: 'active' | 'high' | 'completed';
}

export default function CRMPipelineView() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stages, setStages] = useState<PipelineStage[]>([]);
  const [totalValue, setTotalValue] = useState('');

  useEffect(() => {
    const fetchPipelineData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate API call
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate random error for demo (remove in production)
            if (Math.random() > 0.95) {
              reject(new NetworkError('Failed to load pipeline data'));
            } else {
              resolve(true);
            }
          }, 700);
        });

        // Set pipeline data
        const pipelineStages = [
          { 
            id: 'PL001',
            name: "New Leads", 
            count: 5, 
            value: "$25,000", 
            percentage: "11%",
            icon: ChartBarIcon,
            status: "active" as const
          },
          { 
            id: 'PL002',
            name: "Qualified", 
            count: 4, 
            value: "$32,000", 
            percentage: "14%",
            icon: ArrowTrendingUpIcon,
            status: "active" as const
          },
          { 
            id: 'PL003',
            name: "Proposal Sent", 
            count: 3, 
            value: "$45,000", 
            percentage: "20%",
            icon: ClockIcon,
            status: "high" as const
          },
          { 
            id: 'PL004',
            name: "Negotiating", 
            count: 2, 
            value: "$38,000", 
            percentage: "17%",
            icon: ArrowTrendingUpIcon,
            status: "high" as const
          },
          { 
            id: 'PL005',
            name: "Closed Won", 
            count: 6, 
            value: "$85,000", 
            percentage: "38%",
            icon: ChartBarIcon,
            status: "completed" as const
          }
        ];
        
        setStages(pipelineStages);
        setTotalValue('$225,000');
        
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load pipeline data');
        setError(error);
        trackError(error, { component: 'CRMPipelineView' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPipelineData();
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'high':
        return 'bg-yellow-100 text-yellow-800';
      case 'active':
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
              Hot Prospects
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
            Hot Prospects
          </h3>
          <span className="text-xs text-gray-500">{stages.length} stages</span>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        {/* Table Column Headers */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700 uppercase tracking-wide">
          <div className="col-span-1">ID</div>
          <div className="col-span-4">Stage</div>
          <div className="col-span-2">Count</div>
          <div className="col-span-2">Value</div>
          <div className="col-span-2">Pipeline %</div>
          <div className="col-span-1">Status</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100">
          {isLoading ? (
            // Loading skeletons
            [...Array(5)].map((_, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 px-6 py-4 animate-pulse">
                <div className="col-span-1 flex items-center">
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-4 flex items-center gap-3">
                  <div className="h-6 w-6 bg-gray-200 rounded flex-shrink-0"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-1 flex items-center">
                  <div className="h-6 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            stages.map((stage) => (
              <div
                key={stage.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
              >
                {/* ID Column */}
                <div className="col-span-1 flex items-center">
                  <span className="text-xs font-mono text-gray-500">{stage.id}</span>
                </div>

                {/* Stage Column */}
                <div className="col-span-4 flex items-center gap-3">
                  <stage.icon className="h-6 w-6 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold text-gray-900">{stage.name}</span>
                </div>

                {/* Count Column */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-900 font-medium">{stage.count} leads</span>
                </div>

                {/* Value Column */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-[#01a2f1] font-medium">{stage.value}</span>
                </div>

                {/* Percentage Column */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-600">{stage.percentage}</span>
                </div>

                {/* Status Column */}
                <div className="col-span-1 flex items-center">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(stage.status)}`}>
                    {stage.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden divide-y divide-gray-100">
        {isLoading ? (
          [...Array(5)].map((_, index) => (
            <div key={index} className="p-6 animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-gray-200 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))
        ) : (
          stages.map((stage) => (
            <div key={stage.id} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <stage.icon className="h-8 w-8 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{stage.name}</h3>
                  <p className="text-sm text-gray-500">{stage.count} leads • {stage.value}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono text-gray-500 mb-1">{stage.id}</span>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(stage.status)}`}>
                    {stage.status.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Pipeline %:</span>
                  <span className="text-sm text-gray-600">{stage.percentage}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Table Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Showing {stages.length} of {stages.length} pipeline stages • {totalValue} total value</span>
          <span>Last updated: Just now</span>
        </div>
      </div>
    </div>
  );
}