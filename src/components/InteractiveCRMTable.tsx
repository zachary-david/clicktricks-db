"use client";

import { useState } from "react";

export default function InteractiveCRMTable() {
  const [expandedStage, setExpandedStage] = useState<string | null>("Qualified");
  
  const stages = [
    {
      name: "New Lead",
      count: 5,
      value: "$25,000",
      color: "#33b4f4",
      leads: [
        { name: "Sarah J.", amount: "$5K", probability: "20%" },
        { name: "Mike R.", amount: "$3K", probability: "25%" }
      ]
    },
    {
      name: "Qualified",
      count: 4,
      value: "$32,000",
      color: "#01a2f1",
      leads: [
        { name: "Lisa K.", amount: "$12K", probability: "40%" },
        { name: "Tom B.", amount: "$8K", probability: "35%" }
      ]
    },
    {
      name: "Proposal",
      count: 3,
      value: "$45,000",
      color: "#0182c4",
      leads: [
        { name: "Emma W.", amount: "$20K", probability: "60%" },
        { name: "John D.", amount: "$15K", probability: "65%" }
      ]
    },
    {
      name: "Negotiation",
      count: 2,
      value: "$38,000",
      color: "#0561a6",
      leads: [
        { name: "Anna M.", amount: "$18K", probability: "80%" }
      ]
    },
    {
      name: "Closed Won",
      count: 6,
      value: "$85,000",
      color: "#041926",
      leads: [
        { name: "David L.", amount: "$25K", probability: "100%" },
        { name: "Karen P.", amount: "$30K", probability: "100%" }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #01a2f1'}}>
      <div className="bg-gray-100 p-3 sm:p-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-xs sm:text-sm text-gray-600 font-semibold truncate">ClickTricks CRM - Sales Pipeline</span>
      </div>
      
      <div className="p-3 sm:p-6">
        {/* Pipeline Overview - Compact on mobile */}
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex flex-row justify-between items-center gap-2 sm:gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase">Pipeline</p>
              <p className="text-xl sm:text-3xl font-bold text-blue-700">$225K</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase">Win Rate</p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">32%</p>
            </div>
          </div>
        </div>

        {/* Mobile-Optimized Pipeline View */}
        <div className="block md:hidden">
          {/* Stage Selector Pills */}
          <div className="flex overflow-x-auto pb-2 mb-4 gap-2 no-scrollbar" style={{WebkitOverflowScrolling: 'touch'}}>
            {stages.map((stage) => (
              <button
                key={stage.name}
                onClick={() => setExpandedStage(expandedStage === stage.name ? null : stage.name)}
                className={`flex-shrink-0 px-3 py-2 rounded-full text-xs font-semibold transition-all ${
                  expandedStage === stage.name ? 'text-white shadow-lg' : 'bg-gray-100 text-gray-700'
                }`}
                style={expandedStage === stage.name ? {backgroundColor: stage.color} : {}}
              >
                {stage.name} ({stage.count})
              </button>
            ))}
          </div>

          {/* Expanded Stage Content */}
          {expandedStage && stages.map((stage) => {
            if (stage.name !== expandedStage) return null;
            
            return (
              <div key={stage.name} className="animate-slideUp">
                <div 
                  className="p-3 rounded-t-lg text-white"
                  style={{backgroundColor: stage.color}}
                >
                  <h4 className="font-bold text-sm uppercase">{stage.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs opacity-90">{stage.count} leads</span>
                    <span className="text-sm font-bold">{stage.value}</span>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-t-0 rounded-b-lg p-3" style={{borderColor: stage.color}}>
                  <div className="space-y-2">
                    {stage.leads.map((lead) => (
                      <div 
                        key={lead.name}
                        className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                              style={{backgroundColor: stage.color}}
                            >
                              {lead.name.split(' ')[0][0]}{lead.name.split(' ')[1][0]}
                            </div>
                            <span className="text-sm font-medium">{lead.name}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-gray-900">{lead.amount}</p>
                            <p className="text-xs text-gray-500">{lead.probability}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {stage.count > stage.leads.length && (
                      <div className="text-center py-2">
                        <span className="text-xs text-gray-500">
                          +{stage.count - stage.leads.length} more leads
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Compact Stage Summary (when no stage is expanded) */}
          {!expandedStage && (
            <div className="space-y-2">
              {stages.map((stage, index) => (
                <div 
                  key={stage.name}
                  onClick={() => setExpandedStage(stage.name)}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:shadow-sm transition-all"
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: stage.color,
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideUp 0.5s ease-out forwards'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h5 className="text-sm font-semibold">{stage.name}</h5>
                      <p className="text-xs text-gray-500">{stage.count} leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{stage.value}</p>
                    <p className="text-xs text-gray-500">tap to expand</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Pipeline View - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-5 gap-4">
          {stages.map((stage, index) => (
            <div 
              key={stage.name}
              className="relative"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideUp 0.6s ease-out forwards'
              }}
            >
              {/* Stage Header */}
              <div 
                className="p-3 rounded-t-lg text-white text-center"
                style={{backgroundColor: stage.color}}
              >
                <h4 className="font-bold text-sm uppercase">{stage.name}</h4>
                <p className="text-xs opacity-90">{stage.count} leads • {stage.value}</p>
              </div>
              
              {/* Stage Content */}
              <div className="bg-white border-2 border-t-0 rounded-b-lg p-3 min-h-[200px]" style={{borderColor: stage.color}}>
                <div className="space-y-2">
                  {stage.leads.map((lead, leadIndex) => (
                    <div 
                      key={lead.name}
                      className="p-2 bg-gray-50 rounded border border-gray-200 hover:shadow-sm transition-all cursor-pointer hover:bg-gray-100"
                      style={{
                        animationDelay: `${(index * 150) + (leadIndex * 50)}ms`,
                        animation: 'fadeIn 0.5s ease-out forwards'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{backgroundColor: stage.color}}
                        >
                          {lead.name.split(' ')[0][0]}{lead.name.split(' ')[1][0]}
                        </div>
                        <span className="text-xs font-medium">{lead.name}</span>
                      </div>
                      <div className="mt-1 flex justify-between">
                        <span className="text-xs text-gray-500">{lead.amount}</span>
                        <span className="text-xs text-gray-500">{lead.probability}</span>
                      </div>
                    </div>
                  ))}
                  
                  {stage.count > stage.leads.length && (
                    <div className="text-center py-2">
                      <span className="text-xs text-gray-500">
                        +{stage.count - stage.leads.length} more
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Progress Arrow */}
              {index < stages.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div 
                    className="w-4 h-4 rotate-45 border-r-2 border-b-2"
                    style={{borderColor: stages[index + 1].color}}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Metrics - Responsive */}
        <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4">
          <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 uppercase font-semibold">Avg Deal</p>
            <p className="text-sm sm:text-lg font-bold text-gray-900">$12.5K</p>
          </div>
          <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 uppercase font-semibold">Close Rate</p>
            <p className="text-sm sm:text-lg font-bold text-green-600">32%</p>
          </div>
          <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 uppercase font-semibold">Avg Cycle</p>
            <p className="text-sm sm:text-lg font-bold text-gray-900">21 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}