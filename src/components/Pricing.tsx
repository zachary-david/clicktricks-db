'use client';

import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

const features = [
  {
    title: 'Custom Airtable CRM Setup',
    description: 'Built specifically for your business — no generic templates'
  },
  {
    title: 'Automated Follow-up Workflows',
    description: 'Never lose a lead or forget a follow-up again'
  },
  {
    title: 'Dashboard Views',
    description: 'Track pipeline, revenue, and lead priorities in one place'
  },
  {
    title: '30-Minute Personal Walkthrough',
    description: 'Learn exactly how to use your new CRM with confidence'
  },
  {
    title: '30 Days of Email Support',
    description: 'Questions? You\'ve got direct access to the builder (that\'s me)'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section relative py-24 sm:py-32" style={{backgroundColor: '#041926 !important', background: '#041926 !important'}}>
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle text="NO SUBSCRIPTIONS, NO SURPRISES" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#ffffff !important'}}>Simple Pricing</h2>
          <p className="text-xl text-gray-300">
            Tell us about your database project and we'll deliver a sample and offer based on your needs.
          </p>
        </div>

        {/* Two Column Layout with Extended Vertical Border */}
        <div className="relative mt-16">
          {/* Horizontal border underneath header - desktop only */}
          <div className="hidden lg:block absolute top-0 h-px bg-[#01a2f1] opacity-30 left-0 right-0"></div>
          {/* Extended vertical border that intersects with next section */}
          <div className="hidden lg:block absolute top-0 left-1/2 w-px bg-[#01a2f1] opacity-30" style={{height: 'calc(100% + 200px)'}}></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
            
            {/* Left Column - Features */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl font-bold tracking-tight mb-6" style={{color: '#ffffff !important'}}>
                What's Included
              </h3>
              <h4 className="text-lg font-semibold mb-6" style={{color: '#ffffff !important'}}>Here's what you get:</h4>
              <ul role="list" className="space-y-4 text-sm leading-6 text-white">
                {features.map((feature) => (
                  <li key={feature.title} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-[#01a2f1]" aria-hidden="true" />
                    <div>
                      <strong className="font-semibold text-white">{feature.title}</strong>
                      <br />
                      {feature.description}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-white mt-8">
                Own your CRM — no SaaS fees, ever.
              </p>
            </div>

            {/* Right Column - Price */}
            <div className="p-6 lg:p-8 flex flex-col justify-center text-center">
              <h3 className="text-2xl font-bold tracking-tight mb-4" style={{color: '#ffffff !important'}}>
                Starting at just $99.
              </h3>
              <p className="text-base leading-7 text-white mb-6">
                That's it. No monthly CRM subscription to us. No confusing tiers. No bloated features you'll never use.
              </p>
              <p className="text-base font-semibold text-white mb-2">One-time payment</p>
              <p className="flex items-baseline justify-center gap-x-2 mb-8">
                <span className="text-5xl font-bold tracking-tight text-white">$99</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
              </p>
              <div className="flex justify-center mb-4">
                <a
                  href="https://airtable.com/appBZnf3TjwoxnVU9/paguBKmCn5fyVfNsk/form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-cta"
                >
                  Get Started Now
                </a>
              </div>
              <p className="text-xs leading-5 text-white mb-4">
                Setup completed within 48 hours of confirmation.
              </p>
              <p className="text-sm text-white">
                * Airtable software costs approximately $10/month per user (paid directly to Airtable). Some design features can be used on Free plan.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}