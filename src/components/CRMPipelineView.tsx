"use client";

import { useState } from "react";

export default function CRMPipelineView() {
  const [activeView, setActiveView] = useState('pipeline');

  // Realistic business data
  const pipelineData = {
    totalValue: "$225K",
    winRate: "32%",
    avgDeal: "$12.5K",
    closeRate: "32%",
    avgCycle: "21 days"
  };

  const stages = [
    {
      name: "NEW LEAD",
      count: 5,
      value: "$25,000",
      color: "#60A5FA",
      leads: [
        { name: "Sarah J.", value: "$5K", probability: "20%" },
        { name: "Mike R.", value: "$3K", probability: "25%" }
      ]
    },
    {
      name: "QUALIFIED", 
      count: 4,
      value: "$32,000",
      color: "#34D399",
      leads: [
        { name: "Lisa K.", value: "$12K", probability: "40%" },
        { name: "Tom B.", value: "$8K", probability: "35%" }
      ]
    },
    {
      name: "PROPOSAL",
      count: 3,
      value: "$45,000", 
      color: "#F59E0B",
      leads: [
        { name: "Emma W.", value: "$20K", probability: "60%" },
        { name: "John D.", value: "$15K", probability: "65%" }
      ]
    },
    {
      name: "NEGOTIATION",
      count: 2,
      value: "$38,000",
      color: "#EF4444", 
      leads: [
        { name: "Anna M.", value: "$18K", probability: "80%" }
      ]
    },
    {
      name: "CLOSED WON",
      count: 6,
      value: "$85,000",
      color: "#1F2937",
      leads: [
        { name: "David L.", value: "$25K", probability: "100%" },
        { name: "Karen P.", value: "$30K", probability: "100%" }
      ]
    }
  ];

  // Light modern view matching your reference
  const PipelineView = () => (
    <div className="bg-white">
      {/* Header with stats */}
      <div className="border-b border-gray-200 bg-gray-50 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            <span className="text-sm font-semibold text-gray-900">Sales Pipeline</span>
          </div>
          <span className="text-xs bg-blue-100 px-2 py-1 rounded text-blue-700">Kanban view</span>
        </div>
        
        {/* Top stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <p className="text-xs font-medium text-blue-600 uppercase">Pipeline</p>
            <p className="text-xl font-bold text-blue-700">{pipelineData.totalValue}</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <p className="text-xs font-medium text-green-600 uppercase">Win Rate</p>
            <p className="text-xl font-bold text-green-700">{pipelineData.winRate}</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <p className="text-xs font-medium text-purple-600 uppercase">Avg Cycle</p>
            <p className="text-xl font-bold text-purple-700">{pipelineData.avgCycle}</p>
          </div>
        </div>
      </div>

      {/* Pipeline stages */}
      <div className="p-4">
        <div className="grid grid-cols-5 gap-4">
          {stages.map((stage, index) => (
            <div key={stage.name} className="space-y-2">
              {/* Stage header */}
              <div 
                className="p-3 rounded-t-lg text-white text-center"
                style={{backgroundColor: stage.color}}
              >
                <h4 className="font-bold text-xs uppercase tracking-wide">{stage.name}</h4>
                <p className="text-xs opacity-90">{stage.count} leads • {stage.value}</p>
              </div>
              
              {/* Stage content */}
              <div className="bg-white border-2 rounded-b-lg p-2 min-h-40" style={{borderColor: stage.color}}>
                <div className="space-y-2">
                  {stage.leads.map((lead, leadIndex) => (
                    <div 
                      key={lead.name}
                      className="p-2 bg-gray-50 rounded border border-gray-200 hover:shadow-sm transition-all cursor-pointer"
                      style={{
                        animationDelay: `${(index * 150) + (leadIndex * 50)}ms`,
                        animation: 'slideUp 0.5s ease-out forwards'
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{backgroundColor: stage.color}}
                        >
                          {lead.name.split(' ')[0][0]}{lead.name.split(' ')[1] ? lead.name.split(' ')[1][0] : ''}
                        </div>
                        <span className="text-xs font-medium text-gray-900 truncate">{lead.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-green-600">{lead.value}</span>
                        <span className="text-xs text-gray-500">{lead.probability}</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Show remaining count if more leads */}
                  {stage.count > stage.leads.length && (
                    <div className="text-center">
                      <span className="text-xs text-gray-500">+{stage.count - stage.leads.length} more</span>
                    </div>
                  )}
                  
                  {/* Add button */}
                  <button 
                    className="w-full p-2 border-2 border-dashed rounded text-xs font-medium transition-all hover:bg-gray-50"
                    style={{borderColor: stage.color, color: stage.color}}
                  >
                    + Add Lead
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">AVG DEAL</p>
            <p className="text-xl font-bold text-gray-700">{pipelineData.avgDeal}</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">CLOSE RATE</p>
            <p className="text-xl font-bold text-green-600">{pipelineData.closeRate}</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">AVG CYCLE</p>
            <p className="text-xl font-bold text-gray-700">{pipelineData.avgCycle}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #01a2f1'}}>
      {/* Browser-style header */}
      <div className="bg-gray-100 p-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-sm text-gray-600 font-semibold">ClickTricks CRM - Sales Pipeline</span>
      </div>
      
      <div className="p-0">
        <PipelineView />
      </div>
    </div>
  );
}