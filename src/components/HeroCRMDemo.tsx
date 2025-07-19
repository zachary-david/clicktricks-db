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
  // Simple contact data
  const contacts = [
    { name: "Sarah Chen", company: "Digital Dynamics", status: "Proposal", value: "$18.5K" },
    { name: "Michael Rodriguez", company: "TechFlow Solutions", status: "Negotiation", value: "$32K" },
    { name: "Emma Thompson", company: "Growth Partners", status: "Qualified", value: "$12.8K" },
    { name: "David Kim", company: "Scale Ventures", status: "Demo", value: "$45K" },
    { name: "Lisa Park", company: "Innovation Labs", status: "Follow-up", value: "$22.5K" }
  ];

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'Negotiation': 'bg-green-100 text-green-700',
      'Proposal': 'bg-blue-100 text-blue-700', 
      'Demo': 'bg-purple-100 text-purple-700',
      'Qualified': 'bg-yellow-100 text-yellow-700',
      'Follow-up': 'bg-orange-100 text-orange-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

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
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
        <div className="p-4 space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Simple header */}
      <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Lead Pipeline</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Grid view</span>
        </div>
      </div>

      {/* Desktop: 4 columns */}
      <div className="hidden md:block">
        {/* Header row */}
        <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-gray-50 border-b border-gray-200">
          <div className="text-xs font-medium text-gray-600 uppercase">Name</div>
          <div className="text-xs font-medium text-gray-600 uppercase">Company</div>
          <div className="text-xs font-medium text-gray-600 uppercase">Stage</div>
          <div className="text-xs font-medium text-gray-600 uppercase">Revenue</div>
        </div>
        
        {/* Data rows */}
        <div className="divide-y divide-gray-200">
          {contacts.map((contact, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
              <div className="text-sm font-medium text-gray-900 truncate">{contact.name}</div>
              <div className="text-sm text-gray-600 truncate">{contact.company}</div>
              <div>
                <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(contact.status)}`}>
                  {contact.status}
                </span>
              </div>
              <div className="text-sm font-semibold text-green-600">{contact.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: 2 columns */}
      <div className="md:hidden">
        {/* Header row */}
        <div className="grid grid-cols-2 gap-4 px-4 py-2 bg-gray-50 border-b border-gray-200">
          <div className="text-xs font-medium text-gray-600 uppercase">Name</div>
          <div className="text-xs font-medium text-gray-600 uppercase">Stage</div>
        </div>
        
        {/* Data rows */}
        <div className="divide-y divide-gray-200">
          {contacts.map((contact, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 px-4 py-3 hover:bg-gray-50">
              <div className="text-sm font-medium text-gray-900 truncate">{contact.name}</div>
              <div>
                <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(contact.status)}`}>
                  {contact.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}