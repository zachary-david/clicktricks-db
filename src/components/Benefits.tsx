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
    <section className="section relative py-24 sm:py-32 overflow-hidden" style={{backgroundColor: 'white !important', background: 'white !important'}}>
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
        
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why You'll Love ClickTricks DB
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, powerful, and affordable CRM that grows with your business
          </p>
        </div>

        {/* Database Table View */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            {/* Table Header */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-[#01a2f1] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  Benefits Database
                </h3>
                <span className="text-xs text-gray-500">3 records</span>
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block">
              {/* Table Column Headers */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700 uppercase tracking-wide">
                <div className="col-span-1">ID</div>
                <div className="col-span-3">Feature</div>
                <div className="col-span-2">Value</div>
                <div className="col-span-5">Description</div>
                <div className="col-span-1">Status</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-100">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    {/* ID Column */}
                    <div className="col-span-1 flex items-center">
                      <span className="text-xs font-mono text-gray-500">{benefit.id}</span>
                    </div>

                    {/* Feature Column */}
                    <div className="col-span-3 flex items-center gap-3">
                      <benefit.icon className="h-6 w-6 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm font-semibold text-gray-900">{benefit.feature}</span>
                    </div>

                    {/* Value Column */}
                    <div className="col-span-2 flex items-center">
                      <span className="text-sm text-[#01a2f1] font-medium">{benefit.value}</span>
                    </div>

                    {/* Description Column */}
                    <div className="col-span-5 flex items-center">
                      <p className="text-sm text-gray-600 leading-tight">{benefit.description}</p>
                    </div>

                    {/* Status Column */}
                    <div className="col-span-1 flex items-center">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {benefit.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden divide-y divide-gray-100">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <benefit.icon className="h-8 w-8 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.feature}</h3>
                      <p className="text-sm text-[#01a2f1] font-medium">{benefit.value}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-mono text-gray-500 mb-1">{benefit.id}</span>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {benefit.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Showing 3 of 3 benefits</span>
                <span>Last updated: Just now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#contact"
            className="btn-hero-cta"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}