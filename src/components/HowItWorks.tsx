'use client';

import React, { useState } from 'react';
import { ClipboardDocumentCheckIcon, CogIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import InteractiveCRMTable from './InteractiveCRMTable';

const steps = [
  {
    number: '1',
    title: 'Discovery Call',
    description: 'We start with a 30-minute call to understand your business needs and current lead management challenges. This ensures your CRM is perfectly tailored to your workflow.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    number: '2',
    title: 'Custom Setup',
    description: 'Within 48 hours, we build your custom Airtable CRM with automated workflows, professional templates, and integrations that match your business processes.',
    icon: CogIcon,
  },
  {
    number: '3',
    title: 'Launch & Training',
    description: 'We provide a personalized walkthrough of your new CRM, showing you exactly how to use every feature. Plus, you get 30 days of support to ensure success.',
    icon: RocketLaunchIcon,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-[#041926] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-lg bg-gradient-to-br from-[#01a2f1] to-[#0182c4] p-3">
              <CogIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Get your custom CRM set up in three simple steps
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex gap-4 cursor-pointer transition-all duration-200 ${
                  activeStep === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-[#01a2f1] to-[#0182c4]'
                      : 'bg-gray-700'
                  } transition-all duration-200`}
                >
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - CRM Demo */}
          <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm ring-1 ring-white/10">
            <InteractiveCRMTable />
          </div>
        </div>
      </div>
    </section>
  );
}