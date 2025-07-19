'use client';

import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

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
    <section className="section relative py-24 sm:py-32" style={{backgroundColor: '#041926 !important', background: '#041926 !important'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#01a2f1]">Simple Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">
            One-Time Pricing — No Subscriptions, No Surprises
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl lg:mx-0 lg:flex lg:max-w-none" style={{backgroundColor: 'rgba(255, 255, 255, 0.05) !important', border: '1px solid rgba(255, 255, 255, 0.1) !important', backdropFilter: 'blur(10px) !important'}}>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              $497 Flat Setup Fee
            </h3>
            <p className="mt-6 text-base leading-7 text-white text-opacity-90">
              That's it. No monthly CRM subscription. No confusing tiers. No bloated features you'll never use.
            </p>
            <div className="mt-10">
              <h4 className="text-lg font-semibold text-white mb-4">Here's what you get:</h4>
              <ul role="list" className="space-y-4 text-sm leading-6 text-white text-opacity-90">
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
            </div>
            <div className="mt-10">
              <p className="text-lg font-semibold text-white">
                Own your CRM — no SaaS fees, ever.
              </p>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16" style={{backgroundColor: 'rgba(255, 255, 255, 0.05) !important', border: '1px solid rgba(255, 255, 255, 0.1) !important', backdropFilter: 'blur(10px) !important'}}>
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-white text-opacity-90">One-time payment</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$497</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-white text-opacity-90">USD</span>
                </p>
                <a
                  href="#contact"
                  className="mt-10 block w-full rounded-full bg-gradient-to-r from-[#01a2f1] to-[#0182c4] px-3 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01a2f1]"
                >
                  Get Started Now
                </a>
                <p className="mt-6 text-xs leading-5 text-white text-opacity-80">
                  Setup completed within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm text-white text-opacity-80">
            * Airtable software costs approximately $10/month per user (paid directly to Airtable)
          </p>
        </div>
      </div>
    </section>
  );
}