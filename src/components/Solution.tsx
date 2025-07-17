"use client";

import { useState } from "react";
import CRMDashboardView from "./CRMDashboardView";
import CRMLeadsView from "./CRMLeadsView";
import CRMPipelineView from "./CRMPipelineView";
import SectionHeader from "./SectionHeader";
import { CRMTableSkeleton } from "./SkeletonLoader";

export default function Solution() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(false);

  const screenshots = {
    dashboard: {
      title: "Follow-ups Due Today",
      description: "Simple, automated lead tracking - your daily Airtable view showing exactly which prospects need attention",
      component: <CRMDashboardView />
    },
    leads: {
      title: "All Active Leads", 
      description: "Simple, automated lead tracking - complete Airtable database of all prospects with interaction history",
      component: <CRMLeadsView />
    },
    pipeline: {
      title: "Hot Prospects",
      description: "Simple, automated lead tracking - Airtable view of high-value opportunities prioritized by deal size",
      component: <CRMPipelineView />
    }
  };

  return (
    <section id="demo" className="section" style={{backgroundColor: '#e6f7ff'}}>
      <div className="container">
        <SectionHeader 
          text="Built on Airtable" 
          apps={[
            { name: "Airtable Tables", icon: "🗃️" },
            { name: "Custom Views", icon: "👀" },
            { name: "Automations", icon: "⚡" }
          ]} 
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-6">
            See Your Simple, Automated Lead Tracking System in Action:{" "}
            <span className="text-gradient">Professional Lead Management Without the Complexity</span>
          </h2>
          <p className="text-xl text-gray-600">
            Simple, automated lead tracking with custom Airtable views and automated follow-ups - set up in 30 minutes
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 lg:p-8">
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(screenshots).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    if (activeTab !== key) {
                      setIsLoading(true);
                      setTimeout(() => {
                        setActiveTab(key);
                        setIsLoading(false);
                      }, 300);
                    }
                  }}
                  disabled={isLoading}
                  className={`px-6 py-3 rounded-lg font-medium typewriter transition-all duration-200 ${
                    activeTab === key
                      ? "text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md"
                  } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  style={activeTab === key ? {backgroundColor: '#01a2f1'} : {}}
                >
                  {isLoading && activeTab === key ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Loading...
                    </div>
                  ) : (
                    value.title
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className={`mb-8 transition-all duration-300 ${isLoading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            {isLoading ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <CRMTableSkeleton />
              </div>
            ) : (
              <div className="animate-fade-in">
                {screenshots[activeTab as keyof typeof screenshots].component}
              </div>
            )}
          </div>

          <div className="text-center bg-white rounded-xl p-6" style={{border: '2px solid #01a2f1'}}>
            <p className="text-lg font-medium text-gray-900 mb-2">
              🎯 Core Value: "Simple, automated lead tracking - never forget a prospect again"
            </p>
            <p className="text-sm text-gray-600 mb-4">
              {screenshots[activeTab as keyof typeof screenshots].description}
            </p>
            <a
              href="#booking"
              className="btn-primary btn-lg"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}