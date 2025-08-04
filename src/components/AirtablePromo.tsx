'use client';

import React from 'react';
import Image from 'next/image';

export default function AirtablePromo() {
  return (
    <section className="section relative py-8 sm:py-10" style={{backgroundColor: '#088FDC !important', background: '#088FDC !important'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Content and CTA */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Still not sure? Download Airtable for Free today.
            </h2>
            <p className="text-lg text-white text-opacity-90 mb-8">
              You can always visit us later for a custom database design
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
              <a
                href="https://airtable.com/invite/r/1tSgBaO2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-cta inline-block"
              >
                Download Airtable
              </a>
            </div>
            
            {/* Mobile Airtable Logo - stacked below CTA */}
            <div className="flex lg:hidden items-center justify-center">
              <div className="max-w-xs w-full">
                <Image
                  src="/airtable-logo.svg"
                  alt="Airtable Logo"
                  width={300}
                  height={150}
                  className="w-full h-auto opacity-90 filter brightness-0 invert"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Airtable Logo (Desktop) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="max-w-md w-full">
              <Image
                src="/airtable-logo.svg"
                alt="Airtable Logo"
                width={400}
                height={200}
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}