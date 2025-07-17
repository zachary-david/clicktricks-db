"use client";

export default function CRMDashboardView() {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #374151'}}>
      {/* Airtable-style dark header */}
      <div className="bg-gray-800 p-3 sm:p-4 flex items-center gap-2 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-xs sm:text-sm text-gray-200 font-semibold truncate">Dashboard Overview</span>
        <div className="ml-auto flex gap-2">
          <button className="p-1 text-gray-400 hover:text-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="p-3 sm:p-6 bg-gray-900">
        {/* Airtable-style KPI Cards - Dark Mode */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4 rounded-lg hover:bg-gray-750 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-blue-400 uppercase tracking-wide truncate">Total Leads</p>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">42</p>
            <div className="flex items-center mt-1">
              <svg className="w-3 h-3 text-green-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
              <p className="text-xs text-green-400 font-medium">+12% this week</p>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4 rounded-lg hover:bg-gray-750 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-green-400 uppercase tracking-wide truncate">Closed Deals</p>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">8</p>
            <div className="flex items-center mt-1">
              <svg className="w-3 h-3 text-green-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
              <p className="text-xs text-green-400 font-medium">+25% this month</p>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4 rounded-lg hover:bg-gray-750 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-purple-400 uppercase tracking-wide truncate">Revenue</p>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">$89.5K</p>
            <div className="flex items-center mt-1">
              <svg className="w-3 h-3 text-green-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
              <p className="text-xs text-green-400 font-medium">+18% this month</p>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-3 sm:p-4 rounded-lg hover:bg-gray-750 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-orange-400 uppercase tracking-wide truncate">Conversion</p>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">19%</p>
            <div className="flex items-center mt-1">
              <svg className="w-3 h-3 text-green-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
              <p className="text-xs text-green-400 font-medium">+3% this week</p>
            </div>
          </div>
        </div>

        {/* Airtable-style Priority Actions - Dark Mode */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h4 className="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">
              <span className="text-lg">🎯</span>
              Today's Priority Actions
            </h4>
            <button className="text-xs text-gray-400 hover:text-gray-200 font-medium px-2 py-1 rounded border border-gray-600 hover:border-gray-500 transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {/* High Priority Item - Airtable Style */}
            <div className="bg-gray-750 border border-red-500/30 rounded-lg p-3 hover:bg-gray-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3 flex-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-medium text-white">Call John Smith - Hot lead, $15K opportunity</p>
                    <p className="text-xs text-gray-400 mt-0.5">Expected close: This week</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 font-medium rounded border border-red-500/30">URGENT</span>
                  <button className="p-1 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Medium Priority Item */}
            <div className="bg-gray-750 border border-yellow-500/30 rounded-lg p-3 hover:bg-gray-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3 flex-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-white">Send proposal to Mike Davis - $22K deal</p>
                    <p className="text-xs text-gray-400 mt-0.5">Deadline: End of day</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 font-medium rounded border border-yellow-500/30">TODAY</span>
                  <button className="p-1 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Low Priority Item */}
            <div className="bg-gray-750 border border-blue-500/30 rounded-lg p-3 hover:bg-gray-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3 flex-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-white">Schedule demo with Sarah Johnson</p>
                    <p className="text-xs text-gray-400 mt-0.5">Follow-up on initial interest</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 font-medium rounded border border-blue-500/30">THIS WEEK</span>
                  <button className="p-1 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Airtable-style Quick Stats - Dark Mode */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-4">
          <h4 className="text-sm font-medium text-gray-200 mb-3 flex items-center gap-2">
            <span className="text-base">📊</span>
            Pipeline Health
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Progress Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-300">Hot Leads</span>
                  <span className="text-xs text-gray-400">8 leads</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-300">Warm Leads</span>
                  <span className="text-xs text-gray-400">12 leads</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-300">Cold Leads</span>
                  <span className="text-xs text-gray-400">22 leads</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="sm:col-span-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Jennifer Wilson moved to Proposal</span>
                  <span className="text-gray-500">2h ago</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">New lead: Amanda Taylor added</span>
                  <span className="text-gray-500">4h ago</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Demo scheduled with Kevin Martinez</span>
                  <span className="text-gray-500">1d ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Airtable-style Action Button */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button 
            className="flex-1 sm:flex-none px-4 py-2 sm:py-2 rounded-lg font-medium transition-all hover:shadow-lg text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white border border-blue-500"
          >
            📊 VIEW FULL DASHBOARD
          </button>
          <button 
            className="flex-1 sm:flex-none px-4 py-2 sm:py-2 rounded-lg font-medium transition-all hover:shadow-lg text-sm sm:text-base bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600"
          >
            + ADD NEW LEAD
          </button>
        </div>
      </div>
    </div>
  );
}