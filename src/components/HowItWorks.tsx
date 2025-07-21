'use client';

import React, { useState } from 'react';
import { ClipboardDocumentCheckIcon, CogIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import InteractiveCRMTable from './InteractiveCRMTable';
import SectionTitle from './SectionTitle';

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
    <section id="how-it-works" className="section relative py-24 sm:py-32" style={{backgroundColor: '#041926 !important', background: '#041926 !important'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="py-12 min-h-[120px]">
            <SectionTitle 
              text="TRUSTED TOOLS, DONE-FOR-YOU-DESIGN" 
              icon={<CogIcon className="w-4 h-4 text-[#01a2f1]" />}
            />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2" style={{color: '#ffffff !important', fontWeight: '800 !important'}}>
              How It Works
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Get your custom CRM set up in three simple steps
            </p>
          </div>
          {/* Header border - contained within viewport */}
          <div className="hidden lg:block absolute h-0.5 bg-[#01a2f1] opacity-30 left-0 right-0"></div>
        </div>

        <div className="mt-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Steps */}
          <div className="space-y-0 relative lg:text-left text-center">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Border positioned outside the scaleable container */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute h-0.5 bg-[#01a2f1] opacity-30"
                    style={{
                      bottom: '0px',
                      left: '-2rem', 
                      right: '1.5rem'
                    }}
                  />
                )}
                <div
                  className={`relative flex items-start lg:gap-6 gap-4 cursor-pointer transition-all duration-200 px-6 py-12 min-h-[160px] lg:flex-row flex-col lg:text-left text-center ${
                    activeStep === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full lg:mt-1 mt-0 lg:mx-0 mx-auto ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-[#01a2f1] to-[#0182c4]'
                      : 'bg-gray-700'
                  } transition-all duration-200 flex-shrink-0`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span 
                    className="font-bold text-white"
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: '1',
                      textAlign: 'center'
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 lg:text-left text-center">
                  <h3 
                    className="text-xl font-semibold text-white mb-3 leading-tight"
                    style={{color: '#ffffff !important'}}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-base text-gray-400 leading-relaxed"
                  >
                    {step.description}
                  </p>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - CRM Demo */}
          <div className="bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm ring-1 ring-white/10 lg:mt-32">
            <InteractiveCRMTable />
          </div>
        </div>
      </div>
    </section>
  );
}