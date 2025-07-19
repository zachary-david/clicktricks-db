'use client';

import React from 'react';
import { CheckCircleIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'No Monthly Retainer',
    description: 'One-time setup fee of $497. No ongoing monthly costs beyond your Airtable subscription.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Easy to Use Software',
    description: 'Airtable\'s intuitive interface means you and your team can start using it immediately.',
    icon: LightBulbIcon,
  },
  {
    title: 'Professional Setup',
    description: 'Custom-designed for your business with automated workflows and professional templates.',
    icon: CheckCircleIcon,
  },
];

export default function Benefits() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why You'll Love ClickTricks DB
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, powerful, and affordable CRM that grows with your business
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#01a2f1] to-[#0182c4]">
                    <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[#01a2f1] to-[#0182c4] px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}