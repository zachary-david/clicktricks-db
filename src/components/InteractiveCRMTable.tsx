"use client";

import { useState, useEffect } from "react";
import ErrorDisplay from './ErrorDisplay';
import { trackError } from '@/lib/errorTracking';

export default function InteractiveCRMTable() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setIsLoading(false);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load CRM data');
        setError(error);
        trackError(error, { component: 'InteractiveCRMTable' });
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <ErrorDisplay 
          error={error} 
          variant="inline"
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] px-6 py-4">
          <div className="h-5 bg-white/50 rounded w-32 animate-pulse"></div>
        </div>
        <div className="p-6 space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-14 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden" style={{ border: '2px solid rgba(1, 162, 241, 0.2)' }}>
      {/* Clean header */}
      <div className="bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* CRM Database icon */}
            <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="4" rx="2" fill="#01a2f1"/>
                <rect x="3" y="10" width="18" height="4" rx="2" fill="#18BFFF"/>
                <rect x="3" y="16" width="18" height="4" rx="2" fill="#FCB400"/>
              </svg>
            </div>
            <span className="text-base font-semibold text-gray-800">Lead Management</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs bg-white/70 backdrop-blur px-3 py-1.5 rounded-full text-gray-600 font-medium">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Simplified CRM interface */}
      <div className="p-4 sm:p-6">
        {/* Action toolbar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-20 bg-[#01a2f1]/20 rounded-lg flex items-center justify-center">
            <div className="h-2 w-12 bg-[#01a2f1] rounded"></div>
          </div>
          <div className="h-8 w-16 bg-gray-100 rounded-lg"></div>
          <div className="h-8 w-14 bg-gray-100 rounded-lg"></div>
          <div className="ml-auto h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 text-green-600">+</div>
          </div>
        </div>

        {/* CRM data rows */}
        <div className="space-y-2">
          {[
            { priority: '#ef4444', activity: 'recent', value: 95 },
            { priority: '#f59e0b', activity: 'today', value: 80 },
            { priority: '#10b981', activity: 'pending', value: 65 },
            { priority: '#6b7280', activity: 'old', value: 40 }
          ].map((lead, index) => (
            <div key={index} className="relative group">
              {/* Main lead row */}
              <div className="h-16 bg-white rounded-lg border border-gray-200 flex items-center px-4 hover:shadow-md transition-all hover:border-[#01a2f1]/30">
                {/* Priority indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg" style={{ backgroundColor: lead.priority }}></div>
                
                {/* Row content */}
                <div className="flex items-center gap-4 w-full">
                  {/* Contact avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center text-sm font-semibold text-[#01a2f1]">
                    <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#01a2f1]/30"></div>
                    </div>
                  </div>
                  
                  {/* Lead information */}
                  <div className="flex-1 flex items-center gap-6">
                    {/* Name and company */}
                    <div className="min-w-0">
                      <div className="h-3 bg-gray-300 rounded w-28 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-32"></div>
                    </div>
                    
                    {/* Stage badge */}
                    <div className="hidden sm:block">
                      <div className="h-6 px-3 py-1 bg-blue-50 rounded-full border border-blue-200 flex items-center">
                        <div className="h-2 w-16 bg-blue-300 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Activity indicator */}
                    <div className="hidden md:flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: lead.priority }}></div>
                      <div className="h-2 w-20 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Value and actions */}
                  <div className="flex items-center gap-4">
                    {/* Deal value */}
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400 text-sm">$</span>
                        <div className="h-3 w-12 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Action menu */}
                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full mx-0.5"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#01a2f1] to-transparent transition-all duration-300" 
                     style={{ width: `${lead.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive footer */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>4 leads shown</span>
              <span>•</span>
              <span>$90K pipeline</span>
              <span>•</span>
              <span>85% follow-up rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#01a2f1]/10 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-[#01a2f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="text-xs text-gray-400">Live sync</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}