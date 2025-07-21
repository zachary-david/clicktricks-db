"use client";

import { useState, useEffect } from "react";
import ErrorDisplay from './ErrorDisplay';
import { trackError } from '@/lib/errorTracking';
import { useErrorHandler } from '@/hooks/useErrorHandler';

interface Lead {
  id: number;
  name: string;
  company: string;
  value: string;
  status: string;
  lastActivity: string;
  stage: string;
  email: string;
  phone: string;
  avatar: string;
}

export default function InteractiveCRMTable() {
  const [activeView, setActiveView] = useState('list');
  const [isLoading, setIsLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const { error, handleError, resetError } = useErrorHandler();

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setIsLoading(true);
        resetError();
        
        // Simulate API call
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 800);
        });

        // Set leads data
        const leadsData = [
          { 
            id: 1, 
            name: "Jennifer Wilson", 
            company: "Tech Innovators", 
            value: "$25,000", 
            status: "Hot Lead", 
            lastActivity: "2 hours ago", 
            stage: "Proposal",
            email: "jennifer@techinnovators.com",
            phone: "(555) 123-4567",
            avatar: "JW"
          },
          { 
            id: 2, 
            name: "Robert Brown", 
            company: "Digital Solutions", 
            value: "$18,500", 
            status: "Warm Lead", 
            lastActivity: "1 day ago", 
            stage: "Demo",
            email: "robert@digitalsolutions.com", 
            phone: "(555) 987-6543",
            avatar: "RB"
          },
          { 
            id: 3, 
            name: "Amanda Taylor", 
            company: "Growth Partners", 
            value: "$12,000", 
            status: "Cold Lead", 
            lastActivity: "3 days ago", 
            stage: "Qualified",
            email: "amanda@growthpartners.com",
            phone: "(555) 456-7890", 
            avatar: "AT"
          },
          { 
            id: 4, 
            name: "Kevin Martinez", 
            company: "Scale Up Inc", 
            value: "$35,000", 
            status: "Hot Lead", 
            lastActivity: "30 min ago", 
            stage: "Negotiation",
            email: "kevin@scaleupinc.com",
            phone: "(555) 321-0987",
            avatar: "KM"
          },
        ];
        
        setLeads(leadsData);
      } catch (err) {
        handleError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeads();
  }, []); // Remove handleError dependency to prevent infinite loop

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot Lead': return 'bg-red-100 text-red-700 border-red-200';
      case 'Warm Lead': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Cold Lead': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Authentic Airtable List View
  const AirtableListView = () => {
    if (error) {
      return (
        <div className="bg-white p-6">
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
        <div className="bg-white">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
            <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
          <div className="p-4 space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      );
    }

    return (
    <div className="bg-white">
      {/* Airtable-style header */}
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span className="text-sm font-medium text-gray-900">Lead Pipeline</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Airtable-style filters */}
      <div className="border-b border-gray-200 bg-white px-4 py-2">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded border border-blue-200 hover:bg-blue-100 transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
            </svg>
            Status
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 text-xs border border-gray-300 rounded text-gray-600 hover:bg-gray-50 transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
            </svg>
            Type
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Airtable-style record list */}
      <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
        {leads.map((lead, index) => (
          <div 
            key={lead.id} 
            className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'slideUp 0.5s ease-out forwards'
            }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0"
                style={{backgroundColor: '#01a2f1'}}
              >
                {lead.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{lead.name}</p>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate">{lead.company}</p>
                <p className="text-xs text-gray-400 mt-0.5">{lead.stage}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold text-gray-900">{lead.value}</p>
                <p className="text-xs text-gray-500">{lead.lastActivity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Lead Button */}
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
        <button className="w-full py-2 px-4 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors font-medium">
          + Add New Lead
        </button>
      </div>
    </div>
    );
  };

  // Authentic Airtable Form View
  const AirtableFormView = () => {
    const [formError, setFormError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setFormError(null);
      setIsSubmitting(true);

      try {
        // Simulate form submission
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 1000);
        });

        // Success - switch back to list view
        setActiveView('list');
      } catch (err) {
        setFormError(err instanceof Error ? err.message : 'Failed to add lead');
        trackError(err instanceof Error ? err : new Error('Form submission failed'), {
          component: 'InteractiveCRMTable',
          view: 'form'
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
    <div className="bg-white">
      {/* Form header - Airtable red style */}
      <div className="bg-red-500 px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <button className="flex items-center text-white hover:text-red-100 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to List
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Add a new lead</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lead name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Enter lead name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deal value</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="25000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              <option>Hot Lead</option>
              <option>Warm Lead</option>
              <option>Cold Lead</option>
            </select>
          </div>
          
          {formError && (
            <ErrorDisplay 
              error={new Error(formError)} 
              variant="inline"
              onDismiss={() => setFormError(null)}
            />
          )}
        </form>

        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
            Clear form
          </button>
          <button 
            type="submit"
            className="px-6 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create'}
          </button>
        </div>
      </div>
    </div>
    );
  };

  // Authentic Airtable Dashboard View
  const AirtableDashboard = () => {
    if (error) {
      return (
        <div className="bg-white p-6">
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
        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-32 animate-pulse"></div>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 bg-gray-100 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      );
    }

    return (
    <div className="bg-white">
      <div className="p-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500 uppercase tracking-wide">This quarter</span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">Pipeline</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-2xl font-bold text-gray-900">4</span>
              <span className="text-xl font-bold text-green-600">$90K</span>
            </div>
            <div className="flex justify-between items-end mt-1">
              <span className="text-xs text-gray-500">Hot Leads</span>
              <span className="text-xs text-gray-500">Value</span>
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Hot Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 bg-red-400 rounded"></div>
              <span className="text-xs text-gray-500">40%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Warm Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-yellow-400 rounded"></div>
              <span className="text-xs text-gray-500">30%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Cold Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-2 bg-blue-400 rounded"></div>
              <span className="text-xs text-gray-500">30%</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-gray-200">
          <button className="w-full py-2 px-4 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors font-medium">
            View Full Dashboard
          </button>
        </div>
      </div>
    </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Airtable-style view switcher */}
      <div className="bg-gray-50 border-b border-gray-200 p-2">
        <div className="flex rounded-lg bg-white p-1 border border-gray-200">
          <button
            onClick={() => setActiveView('list')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              activeView === 'list' 
                ? 'bg-blue-500 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            📋 Lead List
          </button>
          <button
            onClick={() => setActiveView('form')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              activeView === 'form' 
                ? 'bg-blue-500 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            ➕ Add Lead
          </button>
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              activeView === 'dashboard' 
                ? 'bg-blue-500 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            📊 Dashboard
          </button>
        </div>
      </div>

      {/* View content with fixed height for Hero compatibility */}
      <div className="h-80 overflow-hidden">
        {activeView === 'list' && <AirtableListView />}
        {activeView === 'form' && <AirtableFormView />}
        {activeView === 'dashboard' && <AirtableDashboard />}
      </div>
    </div>
  );
}