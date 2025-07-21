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
              href="https://airtable.com/invite/r/1tSgBaO2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                color: '#088FDC',
                border: '2px solid',
                borderColor: '#ffffff #e5e7eb #e5e7eb #ffffff',
                padding: '0.625rem 2rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                fontFamily: 'var(--font-mono), monospace',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 8px -2px rgba(8, 143, 220, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease',
                position: 'relative',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'linear-gradient(145deg, #f8f9fa, #ffffff)';
                target.style.borderColor = '#e5e7eb #ffffff #ffffff #e5e7eb';
                target.style.boxShadow = '0 6px 12px -2px rgba(8, 143, 220, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.15)';
                target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'linear-gradient(145deg, #ffffff, #f8f9fa)';
                target.style.borderColor = '#ffffff #e5e7eb #e5e7eb #ffffff';
                target.style.boxShadow = '0 4px 8px -2px rgba(8, 143, 220, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)';
                target.style.transform = 'translateY(0)';
              }}
            >
              Download Airtable
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}