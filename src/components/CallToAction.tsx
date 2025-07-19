'use client';

import React from 'react';

interface CallToActionProps {
  variant?: 'primary' | 'secondary';
}

export default function CallToAction({ variant = 'primary' }: CallToActionProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <section className={`section relative py-8 sm:py-10`} style={{backgroundColor: 'white !important', background: 'white !important'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {isPrimary 
                ? 'Ready to Transform Your Lead Management?' 
                : 'Start Growing Your Business Today'}
            </h2>
          </div>
          
          {/* Right Column - CTA Button */}
          <div className="flex justify-center lg:justify-end">
            <a
              href="/checkout"
              className="btn-hero-cta px-12 py-4 text-lg font-bold"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}