"use client";

export default function CRMPipelineView() {
  const stages = [
    {
      name: "Qualified",
      count: 8,
      value: "$45,000",
      color: "#33b4f4",
      leads: ["Jennifer W.", "Robert B.", "Amanda T."]
    },
    {
      name: "Demo",
      count: 5,
      value: "$32,500",
      color: "#01a2f1",
      leads: ["Kevin M.", "Sarah L."]
    },
    {
      name: "Proposal",
      count: 3,
      value: "$58,000",
      color: "#0182c4",
      leads: ["Mike D.", "Lisa C.", "David W."]
    },
    {
      name: "Negotiation",
      count: 2,
      value: "$47,000",
      color: "#0182c4",
      leads: ["John S.", "Mary K."]
    },
    {
      name: "Closed Won",
      count: 4,
      value: "$89,500",
      color: "#041926",
      leads: ["Tom R.", "Jessica H."]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #01a2f1'}}>
      <div className="bg-gray-100 p-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-sm text-gray-600 typewriter">Sales Pipeline</span>
      </div>
      
      <div className="p-6">
        {/* Pipeline Overview */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm typewriter text-blue-600 uppercase">Total Pipeline Value</p>
              <p className="text-3xl font-bold text-blue-700">$272,000</p>
            </div>
            <div className="text-right">
              <p className="text-sm typewriter text-blue-600 uppercase">Weighted Forecast</p>
              <p className="text-2xl font-bold text-green-600">$156,800</p>
            </div>
          </div>
        </div>

        {/* Pipeline Stages */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
                <h4 className="font-bold text-sm typewriter uppercase">{stage.name}</h4>
                <p className="text-xs opacity-90">{stage.count} leads</p>
              </div>
              
              {/* Stage Content */}
              <div className="bg-white border-2 border-t-0 rounded-b-lg p-3 min-h-48" style={{borderColor: stage.color}}>
                <div className="mb-3 text-center">
                  <p className="font-bold text-green-600">{stage.value}</p>
                </div>
                
                {/* Lead Cards */}
                <div className="space-y-2">
                  {stage.leads.map((lead, leadIndex) => (
                    <div 
                      key={lead}
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
                          {lead.split(' ')[0][0]}{lead.split(' ')[1] ? lead.split(' ')[1][0] : ''}
                        </div>
                        <span className="text-xs font-medium">{lead}</span>
                      </div>
                      <div className="mt-1 flex justify-between">
                        <span className="text-xs text-gray-500">$12K</span>
                        <span className="text-xs text-gray-500">85%</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add Lead Button */}
                  <button 
                    className="w-full p-2 border-2 border-dashed rounded text-xs font-medium transition-all hover:bg-gray-50"
                    style={{borderColor: stage.color, color: stage.color}}
                  >
                    + Add Lead
                  </button>
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

        {/* Pipeline Actions */}
        <div className="mt-6 flex justify-center gap-3">
          <button 
            className="px-4 py-2 rounded-lg font-medium typewriter transition-all hover:shadow-md"
            style={{backgroundColor: '#01a2f1', color: 'white'}}
          >
            RUN FORECAST
          </button>
          <button 
            className="px-4 py-2 rounded-lg font-medium typewriter transition-all hover:shadow-md border-2"
            style={{borderColor: '#01a2f1', color: '#01a2f1'}}
          >
            EXPORT REPORT
          </button>
        </div>
      </div>
    </div>
  );
}