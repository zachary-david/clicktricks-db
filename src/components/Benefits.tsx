'use client';

import React from 'react';
import { CheckCircleIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import SectionHeader from './SectionHeader';

const benefits = [
  {
    id: 'BEN001',
    feature: 'No Monthly Retainer',
    value: '$497 One-Time',
    description: 'One-time setup fee of $497. No ongoing monthly costs beyond your Airtable subscription.',
    icon: CurrencyDollarIcon,
    status: 'Active',
  },
  {
    id: 'BEN002', 
    feature: 'Easy to Use Software',
    value: 'Airtable Interface',
    description: 'Airtable\'s intuitive interface means you and your team can start using it immediately.',
    icon: LightBulbIcon,
    status: 'Active',
  },
  {
    id: 'BEN003',
    feature: 'Professional Setup',
    value: 'Custom Design',
    description: 'Custom-designed for your business with automated workflows and professional templates.',
    icon: CheckCircleIcon,
    status: 'Active',
  },
];

export default function Benefits() {
  return (
    <section id="features" className="section relative py-20 overflow-hidden" style={{backgroundColor: 'white !important', background: 'white !important'}}>
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(8, 143, 220, 0.3) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionHeader 
          text="Trusted Tools, Done-For-You Design" 
          apps={[
            { name: "Airtable", icon: "🗃️" },
            { name: "Automation", icon: "⚡" },
            { name: "Support", icon: "🛟" }
          ]} 
        />
        
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Why You'll Love ClickTricks DB
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Simple, powerful, and affordable CRM that grows with your business
          </p>
        </div>

        {/* Three Column Layout - Container width with extended horizontal line */}
        <div className="relative">
          {/* Horizontal border underneath header - contained within viewport */}
          <div className="hidden lg:block absolute top-0 h-px bg-[#01a2f1] opacity-30 left-0 right-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative auto-rows-fr">
            {/* Vertical borders that extend into next section */}
            <div className="hidden lg:block absolute top-0 left-1/3 w-px bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
            <div className="hidden lg:block absolute top-0 left-2/3 w-px bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
            
            {benefits.map((benefit) => (
              <div key={benefit.id} className="relative h-full">
                <div className="px-8 py-12 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <benefit.icon className="h-16 w-16 text-[#01a2f1]" aria-hidden="true" />
                  </div>
                  
                  {/* Feature */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.feature}
                  </h3>
                  
                  {/* Value */}
                  <p className="text-lg text-[#01a2f1] font-normal mb-6">
                    {benefit.value}
                  </p>
                  
                  {/* Description */}
                  <p className="text-base text-gray-600 leading-7 font-normal mb-8">
                    {benefit.description}
                  </p>
                  
                  {/* Simple Spreadsheet Illustration */}
                  {benefit.id === 'BEN001' && (
                    <div className="mt-auto pt-6">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-auto w-[180px] h-[120px]">
                        <div className="bg-gray-100 px-2 py-1 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                          <span className="text-[10px] text-gray-600 font-medium">Pricing</span>
                        </div>
                        <div className="p-3 flex flex-col justify-center h-[calc(100%-28px)]">
                          <div className="text-center">
                            <div className="text-gray-900 font-bold text-lg">$497</div>
                            <div className="text-[#01a2f1] text-xs mt-1">One-time fee</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {benefit.id === 'BEN002' && (
                    <div className="mt-auto pt-6">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-auto w-[180px] h-[120px]">
                        <div className="bg-gray-100 px-2 py-1 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                          <span className="text-[10px] text-gray-600 font-medium">Airtable</span>
                        </div>
                        <div className="p-2 h-[calc(100%-28px)]">
                          <div className="bg-gray-50 rounded p-2 h-full">
                            <div className="grid grid-cols-3 gap-1 text-[9px] mb-2">
                              <div className="bg-gray-200 rounded px-1 py-0.5 text-center">Name</div>
                              <div className="bg-gray-200 rounded px-1 py-0.5 text-center">Status</div>
                              <div className="bg-gray-200 rounded px-1 py-0.5 text-center">Value</div>
                            </div>
                            <div className="space-y-1">
                              <div className="grid grid-cols-3 gap-1 text-[8px]">
                                <div className="bg-white rounded px-1 py-0.5">John D.</div>
                                <div className="bg-blue-100 rounded px-1 py-0.5 text-blue-600">Active</div>
                                <div className="bg-white rounded px-1 py-0.5">$5k</div>
                              </div>
                              <div className="grid grid-cols-3 gap-1 text-[8px]">
                                <div className="bg-white rounded px-1 py-0.5">Sarah C.</div>
                                <div className="bg-green-100 rounded px-1 py-0.5 text-green-600">Won</div>
                                <div className="bg-white rounded px-1 py-0.5">$8k</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {benefit.id === 'BEN003' && (
                    <div className="mt-auto pt-6">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-auto w-[180px] h-[120px]">
                        <div className="bg-gray-100 px-2 py-1 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                          <span className="text-[10px] text-gray-600 font-medium">Custom</span>
                        </div>
                        <div className="p-3 flex flex-col justify-center items-center h-[calc(100%-28px)]">
                          <div className="w-8 h-8 bg-[#01a2f1] bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-4 h-4 text-[#01a2f1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-[#01a2f1] text-xs font-medium">Ready to Use</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}