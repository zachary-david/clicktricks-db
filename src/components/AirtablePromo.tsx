'use client';

import React from 'react';

export default function AirtablePromo() {
  return (
    <section className="section relative py-8 sm:py-10" style={{backgroundColor: '#088FDC !important', background: '#088FDC !important'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">
              Still not sure? Download Airtable for Free today.
            </h2>
            <p className="text-lg text-white text-opacity-90">
              You can always visit us later for a custom database design
            </p>
          </div>
          
          {/* Right Column - CTA Button */}
          <div className="flex justify-center lg:justify-end">
            <a
              href="https://airtable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold bg-white text-[#088FDC] rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Download Airtable
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}