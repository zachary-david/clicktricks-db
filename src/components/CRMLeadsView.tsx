"use client";

import { useState, useEffect } from 'react';
import ErrorDisplay from './ErrorDisplay';
import { trackError, BusinessError } from '@/lib/errorTracking';

interface Lead {
  id: string;
  name: string;
  company: string;
  value: string;
  status: 'hot' | 'warm' | 'cold';
  stage: string;
}

export default function CRMLeadsView() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate API call
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate random error for demo (remove in production)
            if (Math.random() > 0.95) {
              reject(new BusinessError('Unable to fetch leads data'));
            } else {
              resolve(true);
            }
          }, 600);
        });

        // Set leads data
        const leadsData = [
          { id: '1', name: "Jennifer Wilson", company: "Tech Innovators", value: "$25,000", status: "hot" as const, stage: "Proposal" },
          { id: '2', name: "Robert Brown", company: "Digital Solutions", value: "$18,500", status: "warm" as const, stage: "Demo" },
          { id: '3', name: "Amanda Taylor", company: "Growth Partners", value: "$12,000", status: "cold" as const, stage: "Qualified" },
          { id: '4', name: "Kevin Martinez", company: "Scale Up Inc", value: "$35,000", status: "hot" as const, stage: "Negotiation" }
        ];
        
        setLeads(leadsData);
        
        // Calculate total value
        const total = leadsData.reduce((sum, lead) => {
          const value = parseInt(lead.value.replace(/[$,]/g, ''));
          return sum + value;
        }, 0);
        setTotalValue(total);
        
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load leads');
        setError(error);
        trackError(error, { component: 'CRMLeadsView' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'hot': 'bg-red-100 text-red-800',
      'warm': 'bg-yellow-100 text-yellow-800', 
      'cold': 'bg-blue-100 text-blue-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #01a2f1'}}>
        <div className="p-4 flex items-center gap-2" style={{backgroundColor: '#041926'}}>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-sm text-white font-semibold">ClickTricks CRM - Leads</span>
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
        <span className="ml-4 text-sm text-white font-semibold">ClickTricks CRM - Leads</span>
      </div>
      
      <div className="p-6">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">All Active Leads</h3>
          <p className="text-sm text-gray-600">
            {isLoading ? (
              <span className="inline-block h-4 w-32 bg-gray-200 rounded animate-pulse"></span>
            ) : (
              `${leads.length} leads • $${totalValue.toLocaleString()} total value`
            )}
          </p>
        </div>

        {/* Desktop: 4 columns */}
        <div className="hidden md:block">
          {/* Header row */}
          <div className="grid grid-cols-4 gap-4 pb-2 mb-4 border-b border-gray-200">
            <div className="text-xs font-medium text-gray-600 uppercase">Contact</div>
            <div className="text-xs font-medium text-gray-600 uppercase">Company</div>
            <div className="text-xs font-medium text-gray-600 uppercase">Status</div>
            <div className="text-xs font-medium text-gray-600 uppercase">Value</div>
          </div>
          
          {/* Data rows */}
          <div className="space-y-3">
            {isLoading ? (
              // Loading skeletons
              [...Array(4)].map((_, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded-lg animate-pulse">
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-5 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-5 bg-gray-200 rounded w-20"></div>
                </div>
              ))
            ) : (
              leads.map((lead) => (
                <div key={lead.id} className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div className="font-medium text-gray-900">{lead.name}</div>
                  <div className="text-gray-600">{lead.company}</div>
                  <div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(lead.status)}`}>
                      {lead.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="font-semibold text-green-600">{lead.value}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Mobile: 2 columns */}
        <div className="md:hidden">
          {/* Header row */}
          <div className="grid grid-cols-2 gap-4 pb-2 mb-4 border-b border-gray-200">
            <div className="text-xs font-medium text-gray-600 uppercase">Contact</div>
            <div className="text-xs font-medium text-gray-600 uppercase">Status</div>
          </div>
          
          {/* Data rows */}
          <div className="space-y-3">
            {isLoading ? (
              // Loading skeletons
              [...Array(4)].map((_, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-lg animate-pulse">
                  <div>
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
              ))
            ) : (
              leads.map((lead) => (
                <div key={lead.id} className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{lead.name}</div>
                    <div className="text-xs text-gray-500">{lead.company}</div>
                  </div>
                  <div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(lead.status)}`}>
                      {lead.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Add button */}
        <div className="mt-6 text-center">
          <button 
            className="px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md"
            style={{backgroundColor: '#01a2f1', color: 'white'}}
          >
            + ADD NEW LEAD
          </button>
        </div>
      </div>
    </div>
  );
}