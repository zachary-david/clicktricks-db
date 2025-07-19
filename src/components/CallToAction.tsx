'use client';

import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface CallToActionProps {
  variant?: 'primary' | 'secondary';
}

export default function CallToAction({ variant = 'primary' }: CallToActionProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <section className={`relative bg-[#088FDC] py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-lg bg-white bg-opacity-20 backdrop-blur-sm p-3">
              <SparklesIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">
            {isPrimary 
              ? 'Ready to Transform Your Lead Management?' 
              : 'Start Growing Your Business Today'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white text-opacity-90">
            {isPrimary
              ? 'Join hundreds of freelancers and small teams who never miss a follow-up. Get your custom Airtable CRM set up in 48 hours with our proven system.'
              : 'Stop losing leads in spreadsheets and sticky notes. Get a professional CRM that actually works for your business - set up and ready to use in just 48 hours.'}
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="#contact"
              className="rounded-full bg-white text-[#088FDC] px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}