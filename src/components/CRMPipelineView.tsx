"use client";

import { useState, useEffect } from 'react';
import ErrorDisplay from './ErrorDisplay';
import { trackError, NetworkError } from '@/lib/errorTracking';

interface PipelineStage {
  name: string;
  count: number;
  value: string;
  color: string;
}

interface PipelineStats {
  avgDeal: string;
  closeRate: string;
  avgCycle: string;
}

export default function CRMPipelineView() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stages, setStages] = useState<PipelineStage[]>([]);
  const [totalValue, setTotalValue] = useState('');
  const [stats, setStats] = useState<PipelineStats>({
    avgDeal: '$0',
    closeRate: '0%',
    avgCycle: '0 days'
  });

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
          { name: "New Leads", count: 5, value: "$25K", color: '#60A5FA' },
          { name: "Qualified", count: 4, value: "$32K", color: '#34D399' },
          { name: "Proposal", count: 3, value: "$45K", color: '#F59E0B' },
          { name: "Negotiation", count: 2, value: "$38K", color: '#EF4444' },
          { name: "Closed Won", count: 6, value: "$85K", color: '#10B981' }
        ];
        
        setStages(pipelineStages);
        setTotalValue('$225K');
        setStats({
          avgDeal: '$12.5K',
          closeRate: '32%',
          avgCycle: '21 days'
        });
        
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

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #01a2f1'}}>
        <div className="p-4 flex items-center gap-2" style={{backgroundColor: '#041926'}}>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-sm text-white font-semibold">ClickTricks CRM - Pipeline</span>
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #01a2f1'}}>
      {/* Browser header */}
      <div className="p-4 flex items-center gap-2" style={{backgroundColor: '#041926'}}>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-sm text-white font-semibold">ClickTricks CRM - Pipeline</span>
      </div>
      
      <div className="p-6">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Sales Pipeline</h3>
          <p className="text-sm text-gray-600">
            {isLoading ? (
              <span className="inline-block h-4 w-40 bg-gray-200 rounded animate-pulse"></span>
            ) : (
              `Total Pipeline Value: ${totalValue}`
            )}
          </p>
        </div>

        {/* Simple pipeline stages */}
        <div className="space-y-3">
          {isLoading ? (
            // Loading skeletons
            [...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="text-right">
                  <div className="h-4 bg-gray-200 rounded w-12 mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))
          ) : (
            stages.map((stage) => (
              <div key={stage.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{backgroundColor: stage.color}}
                  ></div>
                  <span className="font-medium text-gray-900">{stage.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">{stage.value}</div>
                  <div className="text-xs text-gray-500">{stage.count} leads</div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom stats */}
        <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">
              {isLoading ? (
                <span className="inline-block h-6 w-16 bg-gray-200 rounded animate-pulse"></span>
              ) : (
                stats.avgDeal
              )}
            </div>
            <div className="text-xs text-gray-500">Avg Deal</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">
              {isLoading ? (
                <span className="inline-block h-6 w-12 bg-gray-200 rounded animate-pulse"></span>
              ) : (
                stats.closeRate
              )}
            </div>
            <div className="text-xs text-gray-500">Close Rate</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">
              {isLoading ? (
                <span className="inline-block h-6 w-16 bg-gray-200 rounded animate-pulse"></span>
              ) : (
                stats.avgCycle
              )}
            </div>
            <div className="text-xs text-gray-500">Avg Cycle</div>
          </div>
        </div>
      </div>
    </div>
  );
}