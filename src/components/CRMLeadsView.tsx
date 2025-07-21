"use client";

import { useState, useEffect } from 'react';
import ErrorDisplay from './ErrorDisplay';
import { trackError } from '@/lib/errorTracking';
import { UserIcon } from '@heroicons/react/24/outline';

interface Lead {
  id: string;
  name: string;
  company: string;
  value: string;
  status: 'hot' | 'warm' | 'cold';
  stage: string;
  source: string;
  icon: typeof UserIcon;
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
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 600);
        });

        // Set leads data
        const leadsData = [
          { 
            id: 'LD001', 
            name: "Jennifer Wilson", 
            company: "Tech Innovators", 
            value: "$25,000", 
            status: "hot" as const, 
            stage: "Proposal Sent",
            source: "Website",
            icon: UserIcon
          },
          { 
            id: 'LD002', 
            name: "Robert Brown", 
            company: "Digital Solutions", 
            value: "$18,500", 
            status: "warm" as const, 
            stage: "Demo Scheduled",
            source: "Referral",
            icon: UserIcon
          },
          { 
            id: 'LD003', 
            name: "Amanda Taylor", 
            company: "Growth Partners", 
            value: "$12,000", 
            status: "cold" as const, 
            stage: "Qualified Lead",
            source: "LinkedIn",
            icon: UserIcon
          },
          { 
            id: 'LD004', 
            name: "Kevin Martinez", 
            company: "Scale Up Inc", 
            value: "$35,000", 
            status: "hot" as const, 
            stage: "Negotiating",
            source: "Cold Email",
            icon: UserIcon
          }
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
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-[#01a2f1] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              All Active Leads
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
            All Active Leads
          </h3>
          <span className="text-xs text-gray-500">{leads.length} leads</span>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        {/* Table Column Headers */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700 uppercase tracking-wide">
          <div className="col-span-1">ID</div>
          <div className="col-span-3">Contact</div>
          <div className="col-span-2">Company</div>
          <div className="col-span-2">Stage</div>
          <div className="col-span-2">Value</div>
          <div className="col-span-1">Source</div>
          <div className="col-span-1">Status</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100 min-h-[320px]">
          {isLoading ? (
            // Loading skeletons
            [...Array(4)].map((_, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 px-6 py-4 animate-pulse">
                <div className="col-span-1 flex items-center">
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-3 flex items-center gap-3">
                  <div className="h-6 w-6 bg-gray-200 rounded flex-shrink-0"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-2 flex items-center">
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-1 flex items-center">
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="col-span-1 flex items-center">
                  <div className="h-6 w-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
              >
                {/* ID Column */}
                <div className="col-span-1 flex items-center">
                  <span className="text-xs font-mono text-gray-500">{lead.id}</span>
                </div>

                {/* Contact Column */}
                <div className="col-span-3 flex items-center gap-3">
                  <lead.icon className="h-6 w-6 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold text-gray-900">{lead.name}</span>
                </div>

                {/* Company Column */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-600">{lead.company}</span>
                </div>

                {/* Stage Column */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-gray-900 font-medium">{lead.stage}</span>
                </div>

                {/* Value Column */}
                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-[#01a2f1] font-medium">{lead.value}</span>
                </div>

                {/* Source Column */}
                <div className="col-span-1 flex items-center">
                  <span className="text-xs text-gray-500">{lead.source}</span>
                </div>

                {/* Status Column */}
                <div className="col-span-1 flex items-center">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))
          )}
          
          {/* Empty rows to maintain consistent height */}
          {!isLoading && leads.length < 5 && (
            <>
              {[...Array(5 - leads.length)].map((_, i) => (
                <div key={`empty-${i}`} className="h-16"></div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden divide-y divide-gray-100 min-h-[480px]">
        {isLoading ? (
          [...Array(4)].map((_, index) => (
            <div key={index} className="p-6 animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-gray-200 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-6 w-12 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))
        ) : (
          leads.map((lead) => (
            <div key={lead.id} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <lead.icon className="h-8 w-8 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                  <p className="text-sm text-gray-500">{lead.company} • {lead.value}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono text-gray-500 mb-1">{lead.id}</span>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Stage:</span>
                  <span className="text-sm text-gray-600">{lead.stage}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Source:</span>
                  <span className="text-sm text-gray-600">{lead.source}</span>
                </div>
              </div>
            </div>
          ))
        )}
        
        {/* Empty space to maintain consistent height on mobile */}
        {!isLoading && leads.length < 5 && (
          <div style={{ height: `${(5 - leads.length) * 96}px` }}></div>
        )}
      </div>

      {/* Table Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Showing {leads.length} of {leads.length} leads • ${totalValue.toLocaleString()} total value</span>
          <span>Last updated: Just now</span>
        </div>
      </div>
    </div>
  );
}