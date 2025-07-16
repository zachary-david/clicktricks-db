"use client";

import { useState } from "react";

export default function CRMLeadsView() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const leads = [
    { id: 1, name: "Jennifer Wilson", company: "Tech Innovators", value: "$25,000", status: "hot", lastActivity: "2 hours ago", stage: "Proposal" },
    { id: 2, name: "Robert Brown", company: "Digital Solutions", value: "$18,500", status: "warm", lastActivity: "1 day ago", stage: "Demo" },
    { id: 3, name: "Amanda Taylor", company: "Growth Partners", value: "$12,000", status: "cold", lastActivity: "3 days ago", stage: "Qualified" },
    { id: 4, name: "Kevin Martinez", company: "Scale Up Inc", value: "$35,000", status: "hot", lastActivity: "30 min ago", stage: "Negotiation" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-100 text-red-800';
      case 'warm': return 'bg-yellow-100 text-yellow-800';
      case 'cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #01a2f1'}}>
      <div className="bg-gray-100 p-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-sm text-gray-600 typewriter">Lead Management</span>
      </div>
      
      <div className="p-6">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4">
          {['all', 'hot', 'warm', 'cold'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1 rounded-full text-xs font-medium typewriter uppercase transition-all ${
                selectedFilter === filter 
                  ? 'text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={selectedFilter === filter ? {backgroundColor: '#01a2f1'} : {}}
            >
              {filter} ({filter === 'all' ? leads.length : leads.filter(l => l.status === filter).length})
            </button>
          ))}
        </div>

        {/* Leads List */}
        <div className="space-y-3">
          {leads.filter(lead => selectedFilter === 'all' || lead.status === selectedFilter).map((lead, index) => (
            <div 
              key={lead.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideUp 0.5s ease-out forwards'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{backgroundColor: '#01a2f1'}}
                  >
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold">{lead.name}</h4>
                    <p className="text-sm text-gray-600">{lead.company}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-green-600">{lead.value}</p>
                  <p className="text-xs text-gray-500">{lead.lastActivity}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status.toUpperCase()}
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    Stage: {lead.stage}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <button className="text-xs px-3 py-1 rounded" style={{backgroundColor: '#e6f7ff', color: '#0182c4'}}>
                    Email
                  </button>
                  <button className="text-xs px-3 py-1 rounded" style={{backgroundColor: '#01a2f1', color: 'white'}}>
                    Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Lead Button */}
        <div className="mt-4 text-center">
          <button 
            className="px-4 py-2 rounded-lg font-medium typewriter transition-all hover:shadow-md"
            style={{backgroundColor: '#01a2f1', color: 'white'}}
          >
            + ADD NEW LEAD
          </button>
        </div>
      </div>
    </div>
  );
}