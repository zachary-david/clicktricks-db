'use client';

import React from 'react';
import { CheckCircleIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';
import { BiSupport } from 'react-icons/bi';

const benefits = [
  {
    id: 'BEN001',
    feature: 'New to Airtable? No Problem.',
    description: 'Our team of certified platform developers provide training and ongoing email support for the first 30 days.',
    icon: CurrencyDollarIcon,
    status: 'Active',
  },
  {
    id: 'BEN002', 
    feature: 'Scale Fearlessly',
    description: 'Optional upgrades automate email or SMS outreach, sync with your invoicing system, track marketing efforts, and much more.',
    icon: LightBulbIcon,
    status: 'Active',
  },
  {
    id: 'BEN003',
    feature: 'One-and-Done Pricing',
    description: 'Our build is a flat setup fee starting at $99. No ongoing monthly costs to us are required. Airtable subscriptions are optional.',
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
        <div className="text-left lg:text-center mb-6">
        </div>
        
        <div className="mx-auto max-w-2xl text-left lg:text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Simple. Powerful. Affordable.
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Airtable is an all-in-one platform that streamlines operations, tracks key business metrics, and accelerates growth for companies of all sizes.
          </p>
        </div>

        {/* Three Column Layout - Container width with extended horizontal line */}
        <div className="relative">
          {/* Horizontal border underneath header - contained within viewport */}
          <div className="hidden lg:block absolute top-0 h-0.5 bg-[#01a2f1] opacity-30" style={{left: '50%', transform: 'translateX(-40rem)', width: '80rem'}}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
            {/* Vertical borders that extend into next section */}
            <div className="hidden lg:block absolute top-0 left-1/3 w-0.5 bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
            <div className="hidden lg:block absolute top-0 left-2/3 w-0.5 bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
            
            {benefits.map((benefit) => (
              <div key={benefit.id} className="relative">
                <div className="px-8 py-12 text-left lg:text-center min-h-[280px] flex flex-col justify-center">
                  {/* Feature */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.feature}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-gray-600 leading-6 font-normal">
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