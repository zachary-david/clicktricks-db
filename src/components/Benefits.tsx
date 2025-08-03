'use client';

import React from 'react';
import { CheckCircleIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';
import { BiSupport } from 'react-icons/bi';
import { MdOutlineAttachMoney, MdOutlineLightbulb, MdOutlineSettings } from 'react-icons/md';

const benefits = [
  {
    id: 'BEN001',
    feature: 'No Monthly Retainer Required',
    description: 'One-time setup fee starting at $99. No ongoing monthly costs beyond your Airtable subscription.',
    icon: CurrencyDollarIcon,
    status: 'Active',
  },
  {
    id: 'BEN002', 
    feature: 'Reduce the Clutter',
    description: 'AirTable/s core capabilities do it all -- reducing the need for multiple scattered tools and tech.',
    icon: LightBulbIcon,
    status: 'Active',
  },
  {
    id: 'BEN003',
    feature: '30-Day Support',
    description: 'Additional support at no additional cost to ensure you are getting the most from your custom AirTable.',
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
            radial-gradient(circle at 2px 2px, rgba(8, 143, 220, 0.4) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionTitle 
          text="Trusted Tools, Done-For-You Design" 
          icon={<BiSupport className="w-4 h-4 text-[#01a2f1]" />}
        />
        
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Scale Fearlessly
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Simple, powerful, and affordable CRM that grows with your business
          </p>
        </div>

        {/* Three Column Layout - Container width with extended horizontal line */}
        <div className="relative">
          {/* Horizontal border underneath header - contained within viewport */}
          <div className="hidden lg:block absolute top-0 h-0.5 bg-[#01a2f1] opacity-30" style={{left: '50%', transform: 'translateX(-40rem)', width: '80rem'}}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative auto-rows-fr">
            {/* Vertical borders that extend into next section */}
            <div className="hidden lg:block absolute top-0 left-1/3 w-0.5 bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
            <div className="hidden lg:block absolute top-0 left-2/3 w-0.5 bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
            
            {benefits.map((benefit) => (
              <div key={benefit.id} className="relative h-full">
                <div className="px-8 py-12 text-left lg:text-center h-full flex flex-col">
                  {/* Section Title for each benefit */}
                  <div className="mb-3">
                    <SectionTitle 
                      text={benefit.id === 'BEN001' ? 'NO MONTHLY FEES' : benefit.id === 'BEN002' ? 'EASY TO USE' : 'PROFESSIONAL SETUP'}
                      icon={benefit.id === 'BEN001' ? <MdOutlineAttachMoney className="w-4 h-4 text-[#01a2f1]" /> : benefit.id === 'BEN002' ? <MdOutlineLightbulb className="w-4 h-4 text-[#01a2f1]" /> : <MdOutlineSettings className="w-4 h-4 text-[#01a2f1]" />}
                      variant="bordered"
                    />
                  </div>
                  
                  {/* Feature */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {benefit.feature}
                  </h3>
                  
                  
                  {/* Description */}
                  <p className="text-base text-gray-600 leading-6 font-normal mb-4">
                    {benefit.description}
                  </p>
                  
                  {/* Clean Mini Graphics */}
                  {benefit.id === 'BEN001' && (
                    <div className="mt-auto pt-2">
                      <div className="bg-white rounded-xl shadow-sm overflow-hidden mx-auto w-[180px] h-[120px]" style={{ border: '2px solid rgba(1, 162, 241, 0.2)' }}>
                        <div className="bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] px-3 py-2 flex items-center justify-between">
                          <div className="w-4 h-4 bg-white rounded-md shadow-sm flex items-center justify-center">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FCB400"/>
                            </svg>
                          </div>
                          <span className="text-[10px] text-gray-700 font-medium">PRICING</span>
                        </div>
                        <div className="p-4 flex flex-col justify-center h-[calc(100%-36px)]">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 mb-1">$497</div>
                            <div className="text-[#01a2f1] text-xs font-medium mb-2">One-time setup</div>
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full opacity-30"></div>
                              <div className="text-[10px] text-gray-500">vs $540/year</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {benefit.id === 'BEN002' && (
                    <div className="mt-auto pt-2">
                      <div className="bg-white rounded-xl shadow-sm overflow-hidden mx-auto w-[180px] h-[120px]" style={{ border: '2px solid rgba(1, 162, 241, 0.2)' }}>
                        <div className="bg-gradient-to-r from-[#e0f2fe] to-[#dbeafe] px-3 py-2 flex items-center justify-between">
                          <div className="w-4 h-4 bg-white rounded-md shadow-sm flex items-center justify-center">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 3h18v18H3V3z" fill="#FCB400"/>
                              <path d="M3 3h9v9H3V3z" fill="#18BFFF"/>
                              <path d="M12 3h9v9h-9V3z" fill="#F82B60"/>
                              <path d="M3 12h9v9H3v-9z" fill="#F82B60"/>
                              <path d="M12 12h9v9h-9v-9z" fill="#FCB400"/>
                            </svg>
                          </div>
                          <span className="text-[10px] text-gray-700 font-medium">AIRTABLE</span>
                        </div>
                        <div className="p-3 h-[calc(100%-36px)]">
                          <div className="space-y-2">
                            {/* Simple data rows */}
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#01a2f1] rounded-full"></div>
                              </div>
                              <div className="flex-1 h-2 bg-gradient-to-r from-[#01a2f1]/20 to-transparent rounded"></div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              <div className="flex-1 h-2 bg-gradient-to-r from-green-500/20 to-transparent rounded"></div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              </div>
                              <div className="flex-1 h-2 bg-gradient-to-r from-orange-500/20 to-transparent rounded"></div>
                            </div>
                          </div>
                          <div className="mt-3 text-center">
                            <div className="text-[10px] text-gray-500">Intuitive Interface</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {benefit.id === 'BEN003' && (
                    <div className="mt-auto pt-2">
                      <div className="bg-white rounded-xl shadow-sm overflow-hidden mx-auto w-[180px] h-[120px]" style={{ border: '2px solid rgba(1, 162, 241, 0.2)' }}>
                        <div className="bg-gradient-to-r from-[#dbeafe] to-[#c7d2fe] px-3 py-2 flex items-center justify-between">
                          <div className="w-4 h-4 bg-white rounded-md shadow-sm flex items-center justify-center">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="4" width="18" height="4" rx="2" fill="#01a2f1"/>
                              <rect x="3" y="10" width="18" height="4" rx="2" fill="#18BFFF"/>
                              <rect x="3" y="16" width="18" height="4" rx="2" fill="#FCB400"/>
                            </svg>
                          </div>
                          <span className="text-[10px] text-gray-700 font-medium">CUSTOM</span>
                        </div>
                        <div className="p-3 flex flex-col justify-center items-center h-[calc(100%-36px)]">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#01a2f1]/20 to-[#01a2f1]/10 rounded-xl flex items-center justify-center mb-2">
                            <svg className="w-5 h-5 text-[#01a2f1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-[#01a2f1] text-xs font-medium">Professional Setup</div>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          </div>
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