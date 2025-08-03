"use client";

import { useState, useEffect } from 'react';
import ErrorDisplay from './ErrorDisplay';
import { trackError } from '@/lib/errorTracking';

export default function HeroCRMDemo() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        // Simulate quick load since this is a demo component
        await new Promise((resolve) => setTimeout(resolve, 300));
        setIsLoading(false);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load demo');
        setError(error);
        trackError(error, { component: 'HeroCRMDemo' });
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
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden" style={{ border: '2px solid rgba(1, 162, 241, 0.2)' }}>
      {/* Clean header with Airtable branding */}
      <div className="bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {/* Airtable-style icon */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3h18v18H3V3z" fill="#FCB400"/>
                <path d="M3 3h9v9H3V3z" fill="#18BFFF"/>
                <path d="M12 3h9v9h-9V3z" fill="#F82B60"/>
                <path d="M3 12h9v9H3v-9z" fill="#F82B60"/>
                <path d="M12 12h9v9h-9v-9z" fill="#FCB400"/>
              </svg>
            </div>
            <span className="text-sm sm:text-base font-semibold text-gray-800 truncate">Lead Tracker</span>
          </div>
          <span className="text-[10px] sm:text-xs bg-white/70 backdrop-blur px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-gray-600 font-medium whitespace-nowrap flex-shrink-0">GRID VIEW</span>
        </div>
      </div>

      {/* Simplified data representation */}
      <div className="p-4 sm:p-6">
        {/* Column headers as simple lines */}
        <div className="flex gap-2 mb-4">
          <div className="h-8 bg-gradient-to-r from-[#e0f2fe] to-[#dbeafe] rounded-lg flex-1 min-w-0"></div>
          <div className="h-8 bg-gradient-to-r from-[#e0f2fe] to-[#dbeafe] rounded-lg flex-1 min-w-0 hidden sm:block"></div>
          <div className="h-8 bg-gradient-to-r from-[#e0f2fe] to-[#dbeafe] rounded-lg flex-1 min-w-0 hidden md:block"></div>
          <div className="h-8 bg-gradient-to-r from-[#e0f2fe] to-[#dbeafe] rounded-lg flex-1 min-w-0 hidden lg:block"></div>
        </div>

        {/* Data rows as simple rectangles with subtle details */}
        <div className="space-y-2">
          {[
            { accent: '#10b981', width: '85%' },
            { accent: '#3b82f6', width: '70%' },
            { accent: '#f59e0b', width: '90%' },
            { accent: '#8b5cf6', width: '60%' },
            { accent: '#ef4444', width: '75%' }
          ].map((row, index) => (
            <div key={index} className="relative group">
              {/* Main row container */}
              <div className="h-12 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 flex items-center px-3 sm:px-4 hover:shadow-sm transition-shadow overflow-hidden">
                {/* Progress indicator */}
                <div className="absolute left-0 top-0 bottom-0 rounded-l-lg" style={{ width: row.width, backgroundColor: `${row.accent}10` }}></div>
                
                {/* Row content placeholders */}
                <div className="flex items-center gap-2 sm:gap-4 relative z-10 w-full min-w-0">
                  {/* Avatar placeholder */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0"></div>
                  
                  {/* Text placeholders */}
                  <div className="flex-1 flex items-center gap-3 sm:gap-6 min-w-0">
                    <div className="h-2 bg-gray-200 rounded-full flex-shrink-0" style={{ width: `${Math.min(60 + index * 5, 80)}px` }}></div>
                    <div className="h-2 bg-gray-200 rounded-full hidden sm:block flex-shrink-0" style={{ width: `${Math.min(80 - index * 8, 60)}px` }}></div>
                    
                    {/* Status indicator */}
                    <div className="ml-auto flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: row.accent }}></div>
                      <div className="h-5 sm:h-6 px-2 sm:px-3 rounded-full" style={{ backgroundColor: `${row.accent}20`, border: `1px solid ${row.accent}30` }}>
                        <div className="h-full w-8 sm:w-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add more rows indicator */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}