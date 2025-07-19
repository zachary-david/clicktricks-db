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

        {/* Three Column Layout - Container width with extended horizontal line */}
        <div className="relative mt-16">
          {/* Horizontal border underneath header - extends beyond container */}
          <div className="absolute top-0 h-px bg-[#01a2f1] opacity-30" style={{left: '-100vw', right: '-100vw'}}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
            {/* Vertical borders that extend into next section */}
            <div className="hidden lg:block absolute top-0 left-1/3 w-px bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
            <div className="hidden lg:block absolute top-0 left-2/3 w-px bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
            
            {benefits.map((benefit, index) => (
              <div key={benefit.id} className="relative">
                <div className="px-8 py-12 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <benefit.icon className="h-16 w-16 text-[#01a2f1]" aria-hidden="true" />
                  </div>
                  
                  {/* Feature (Typewriter Font) */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-mono tracking-wide">
                    {benefit.feature}
                  </h3>
                  
                  {/* Value */}
                  <p className="text-lg text-[#01a2f1] font-semibold mb-6">
                    {benefit.value}
                  </p>
                  
                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}