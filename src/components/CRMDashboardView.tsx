"use client";

export default function CRMDashboardView() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{border: '2px solid #01a2f1'}}>
      <div className="bg-gray-100 p-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-sm text-gray-600 typewriter">Dashboard Overview</span>
      </div>
      
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-xs typewriter text-blue-600 uppercase">Total Leads</p>
            <p className="text-2xl font-bold text-blue-700">42</p>
            <p className="text-xs text-green-600">↗ +12% this week</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-xs typewriter text-green-600 uppercase">Closed Deals</p>
            <p className="text-2xl font-bold text-green-700">8</p>
            <p className="text-xs text-green-600">↗ +25% this month</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="text-xs typewriter text-purple-600 uppercase">Revenue</p>
            <p className="text-2xl font-bold text-purple-700">$89,500</p>
            <p className="text-xs text-green-600">↗ +18% this month</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <p className="text-xs typewriter text-orange-600 uppercase">Conversion</p>
            <p className="text-2xl font-bold text-orange-700">19%</p>
            <p className="text-xs text-green-600">↗ +3% this week</p>
          </div>
        </div>

        {/* Today's Priority Actions */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            🎯 Today's Priority Actions
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-white rounded border-l-4 border-l-red-400 priority-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Call John Smith - Hot lead, $15K opportunity</span>
              <span className="ml-auto text-xs text-red-600 font-medium">URGENT</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-white rounded border-l-4 border-l-yellow-400">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Send proposal to Mike Davis - $22K deal</span>
              <span className="ml-auto text-xs text-yellow-600 font-medium">TODAY</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-white rounded border-l-4 border-l-blue-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Schedule demo with Sarah Johnson</span>
              <span className="ml-auto text-xs text-blue-600 font-medium">THIS WEEK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}