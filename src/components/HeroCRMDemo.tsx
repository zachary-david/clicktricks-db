"use client";

import { useState } from "react";

export default function HeroCRMDemo() {
  const [activeView, setActiveView] = useState('list');

  const leads = [
    { 
      id: 1, 
      name: "Jennifer Wilson", 
      company: "Tech Innovators", 
      value: "$25,000", 
      status: "Hot Lead", 
      lastActivity: "2 hours ago", 
      stage: "Proposal",
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
      avatar: "KM"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot Lead': return 'bg-red-100 text-red-700 border-red-200';
      case 'Warm Lead': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Cold Lead': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Simple lead list optimized for Hero display
  const LeadListView = () => (
    <div className="bg-white">
      {/* Simple header */}
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">Active Leads</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">4 leads</span>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Lead rows */}
      <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
        {leads.map((lead, index) => (
          <div 
            key={lead.id} 
            className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
            style={{
              animationDelay: `${index * 150}ms`,
              animation: 'slideUp 0.6s ease-out forwards'
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
                <p className="text-sm font-semibold text-green-600">{lead.value}</p>
                <p className="text-xs text-gray-500">{lead.lastActivity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Quick dashboard view for Hero
  const QuickDashboard = () => (
    <div className="bg-white p-4">
      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <p className="text-xs font-semibold text-blue-600 uppercase">Total Leads</p>
          <p className="text-2xl font-bold text-blue-700">42</p>
          <p className="text-xs text-green-600">↗ +12% week</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <p className="text-xs font-semibold text-green-600 uppercase">Pipeline</p>
          <p className="text-2xl font-bold text-green-700">$89K</p>
          <p className="text-xs text-green-600">↗ +18% month</p>
        </div>
      </div>

      {/* Today's actions */}
      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Today's Actions</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 bg-white rounded border-l-4 border-l-red-400">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-700 flex-1">Call John Smith - $15K deal</span>
            <span className="text-xs text-red-600 font-medium">URGENT</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-white rounded border-l-4 border-l-yellow-400">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-xs text-gray-700 flex-1">Send proposal to Mike Davis</span>
            <span className="text-xs text-yellow-600 font-medium">TODAY</span>
          </div>
        </div>
        
        <button className="w-full mt-3 py-2 px-3 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors">
          View All Tasks
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Tab switcher optimized for Hero */}
      <div className="bg-gray-50 border-b border-gray-200 p-2">
        <div className="flex rounded-lg bg-white p-1 border border-gray-200">
          <button
            onClick={() => setActiveView('list')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              activeView === 'list' 
                ? 'text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            style={activeView === 'list' ? {backgroundColor: '#01a2f1'} : {}}
          >
            📋 Leads
          </button>
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              activeView === 'dashboard' 
                ? 'text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            style={activeView === 'dashboard' ? {backgroundColor: '#01a2f1'} : {}}
          >
            📊 Dashboard
          </button>
        </div>
      </div>

      {/* Content area - fixed height for Hero */}
      <div className="h-80 overflow-hidden">
        {activeView === 'list' && <LeadListView />}
        {activeView === 'dashboard' && <QuickDashboard />}
      </div>
    </div>
  );
}