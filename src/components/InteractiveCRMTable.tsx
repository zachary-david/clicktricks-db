"use client";

import { useState } from "react";

interface Lead {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  value: string;
  status: 'hot' | 'warm' | 'cold' | 'closed';
  lastContact: string;
  nextAction: string;
  priority: 'high' | 'medium' | 'low';
}

const sampleLeads: Lead[] = [
  {
    id: 1,
    name: "John Smith",
    company: "TechStart Inc",
    email: "john@techstart.com",
    phone: "(555) 123-4567",
    value: "$15,000",
    status: "hot",
    lastContact: "2 hours ago",
    nextAction: "Follow up call today",
    priority: "high"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Growth Co",
    email: "sarah@growth.com", 
    phone: "(555) 234-5678",
    value: "$8,500",
    status: "warm",
    lastContact: "1 day ago",
    nextAction: "Schedule demo",
    priority: "medium"
  },
  {
    id: 3,
    name: "Mike Davis",
    company: "Scale Solutions",
    email: "mike@scale.com",
    phone: "(555) 345-6789",
    value: "$22,000",
    status: "hot",
    lastContact: "3 hours ago",
    nextAction: "Send proposal",
    priority: "high"
  },
  {
    id: 4,
    name: "Lisa Chen",
    company: "Innovate LLC",
    email: "lisa@innovate.com",
    phone: "(555) 456-7890",
    value: "$12,300",
    status: "warm",
    lastContact: "2 days ago",
    nextAction: "Product demo",
    priority: "medium"
  },
  {
    id: 5,
    name: "David Wilson",
    company: "Future Corp",
    email: "david@future.com",
    phone: "(555) 567-8901",
    value: "$18,750",
    status: "closed",
    lastContact: "1 week ago",
    nextAction: "Contract signed!",
    priority: "low"
  }
];

export default function InteractiveCRMTable() {
  const [selectedLead, setSelectedLead] = useState<number | null>(null);
  const [hoveredLead, setHoveredLead] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-100 text-red-800 border-red-200';
      case 'warm': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cold': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'closed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔥';
      case 'medium': return '⚡';
      case 'low': return '📋';
      default: return '📋';
    }
  };

  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="hidden md:grid grid-cols-12 gap-2 p-4 text-xs font-medium text-gray-600 typewriter uppercase">
          <div className="col-span-2">Contact</div>
          <div className="col-span-2">Company</div>
          <div className="col-span-2">Value</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Last Contact</div>
          <div className="col-span-2">Next Action</div>
        </div>
        {/* Mobile Header */}
        <div className="md:hidden p-4 text-xs font-medium text-gray-600 typewriter uppercase text-center">
          CRM Dashboard - Tap rows to expand
        </div>
      </div>

      {/* Table Body */}
      <div className="max-h-80 overflow-y-auto">
        {sampleLeads.map((lead, index) => (
          <div
            key={lead.id}
            className={`grid grid-cols-12 gap-2 p-4 border-b border-gray-100 transition-all duration-200 cursor-pointer crm-row ${
              selectedLead === lead.id 
                ? 'bg-blue-50 border-l-4 border-l-blue-400' 
                : hoveredLead === lead.id 
                ? 'bg-gray-50' 
                : 'hover:bg-gray-50'
            } ${lead.priority === 'high' ? 'priority-pulse' : ''}`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'slideUp 0.5s ease-out forwards'
            }}
            onClick={() => setSelectedLead(selectedLead === lead.id ? null : lead.id)}
            onMouseEnter={() => setHoveredLead(lead.id)}
            onMouseLeave={() => setHoveredLead(null)}
          >
            {/* Contact */}
            <div className="col-span-3 md:col-span-2">
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{backgroundColor: '#01a2f1'}}
                >
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-sm">{lead.name}</p>
                  <p className="text-xs text-gray-500 hidden md:block">{lead.email}</p>
                  <p className="text-xs text-gray-500 md:hidden">{lead.company}</p>
                </div>
              </div>
            </div>

            {/* Company - Desktop Only */}
            <div className="hidden md:block col-span-2">
              <p className="font-medium text-sm">{lead.company}</p>
              <p className="text-xs text-gray-500">{lead.phone}</p>
            </div>

            {/* Value */}
            <div className="col-span-3 md:col-span-2">
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-green-600">{lead.value}</span>
                <span className="text-lg">{getPriorityIcon(lead.priority)}</span>
              </div>
            </div>

            {/* Status */}
            <div className="col-span-3 md:col-span-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
              </span>
            </div>

            {/* Last Contact - Desktop Only */}
            <div className="hidden md:block col-span-2">
              <p className="text-sm text-gray-600">{lead.lastContact}</p>
            </div>

            {/* Next Action */}
            <div className="col-span-3 md:col-span-2">
              <p className="text-sm font-medium">{lead.nextAction}</p>
              {selectedLead === lead.id && (
                <button 
                  className="mt-1 px-2 py-1 text-xs rounded"
                  style={{backgroundColor: '#01a2f1', color: 'white'}}
                >
                  Take Action
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xs text-gray-500 typewriter">TOTAL LEADS</p>
            <p className="text-sm md:text-lg font-bold" style={{color: '#01a2f1'}}>5</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 typewriter">HOT LEADS</p>
            <p className="text-sm md:text-lg font-bold text-red-600">2</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 typewriter">PIPELINE VALUE</p>
            <p className="text-sm md:text-lg font-bold text-green-600">$76,550</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 typewriter">THIS MONTH</p>
            <p className="text-sm md:text-lg font-bold text-purple-600">$22,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}