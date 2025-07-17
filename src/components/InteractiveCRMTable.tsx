"use client";

import { useState } from "react";

// Authentic Airtable List View Component
export function AirtableListView() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const leads = [
    { 
      id: 1, 
      name: "Jennifer Wilson", 
      company: "Tech Innovators", 
      value: 25000, 
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
      value: 18500, 
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
      value: 12000, 
      status: "Cold Lead", 
      lastActivity: "3 days ago", 
      stage: "Qualified",
      email: "amanda@growthpartners.com",
      phone: "(555) 456-7890", 
      avatar: "AT"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot Lead': return 'bg-red-100 text-red-700';
      case 'Warm Lead': return 'bg-yellow-100 text-yellow-700';
      case 'Cold Lead': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="p-1 text-gray-500 hover:text-gray-700">
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
          <button className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded border border-blue-200">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
            </svg>
            Status
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 text-xs border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
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
      <div className="divide-y divide-gray-100">
        {leads.map((lead) => (
          <div key={lead.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                {lead.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{lead.name}</p>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate">{lead.company}</p>
                <p className="text-xs text-gray-400 mt-0.5">{lead.stage}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">${lead.value.toLocaleString()}</p>
                <p className="text-xs text-gray-500">{lead.lastActivity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Authentic Airtable Form View Component  
export function AirtableFormView() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    status: 'Hot Lead',
    value: ''
  });

  return (
    <div className="bg-white max-w-md mx-auto">
      {/* Airtable-style form header */}
      <div className="border-b border-gray-200 bg-red-500 px-4 py-3">
        <div className="flex items-center justify-between">
          <button className="flex items-center text-white">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Add a new lead</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lead name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Enter lead name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="email@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deal value</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="25000"
              value={formData.value}
              onChange={(e) => setFormData({...formData, value: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option>Hot Lead</option>
              <option>Warm Lead</option>
              <option>Cold Lead</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">
            Clear form
          </button>
          <button className="px-6 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

// Authentic Airtable Dashboard Component
export function AirtableDashboard() {
  return (
    <div className="bg-white">
      {/* Dashboard header */}
      <div className="border-b border-gray-200 bg-red-500 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Dashboard
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500 uppercase tracking-wide">This quarter</span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">This year</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-2xl font-bold text-gray-900">12</span>
              <span className="text-xl font-bold text-red-500">$12,588</span>
            </div>
            <div className="flex justify-between items-end mt-1">
              <span className="text-xs text-gray-500">Releases</span>
              <span className="text-xs text-gray-500">Spend</span>
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              {/* Blue segment - 23.2% */}
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeDasharray="23.2, 76.8"
                strokeDashoffset="0"
              />
              {/* Pink segment */}
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#ec4899"
                strokeWidth="3"
                strokeDasharray="22.2, 77.8"
                strokeDashoffset="-23.2"
              />
              {/* Teal segment */}
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeDasharray="18.1, 81.9"
                strokeDashoffset="-45.4"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-900">63%</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
                <span className="text-xs text-gray-600">Brand BTS</span>
              </div>
              <div className="w-16 h-2 bg-red-400 rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-400 rounded mr-2"></div>
                <span className="text-xs text-gray-600">Education</span>
              </div>
              <div className="w-12 h-2 bg-pink-400 rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-300 rounded mr-2"></div>
                <span className="text-xs text-gray-600">Event</span>
              </div>
              <div className="w-8 h-2 bg-red-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component that switches between views
export default function AuthenticAirtableCRM() {
  const [activeView, setActiveView] = useState('list');

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
      {/* Mobile-style view switcher */}
      <div className="bg-gray-50 border-b border-gray-200 p-2">
        <div className="flex rounded-lg bg-white p-1 border border-gray-200">
          <button
            onClick={() => setActiveView('list')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              activeView === 'list' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Lead List
          </button>
          <button
            onClick={() => setActiveView('form')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              activeView === 'form' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Add Lead
          </button>
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              activeView === 'dashboard' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Dashboard
          </button>
        </div>
      </div>

      {/* View content */}
      <div className="h-96 overflow-auto">
        {activeView === 'list' && <AirtableListView />}
        {activeView === 'form' && <AirtableFormView />}
        {activeView === 'dashboard' && <AirtableDashboard />}
      </div>
    </div>
  );
}