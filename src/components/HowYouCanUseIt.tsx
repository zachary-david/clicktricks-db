'use client';

import React from 'react';
import { UserIcon, UserGroupIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const audiences = [
  {
    title: 'Solopreneurs',
    icon: UserIcon,
    description: 'Perfect for solo business owners who need to track leads without the complexity of enterprise software.',
    useCases: [
      'Track coaching inquiries and client progress',
      'Manage consulting proposals and follow-ups',
      'Organize course enrollments and student communications',
    ],
  },
  {
    title: 'Freelancers',
    icon: BriefcaseIcon,
    description: 'Ideal for freelancers juggling multiple clients and projects who need organized lead tracking.',
    useCases: [
      'Track project inquiries and quote status',
      'Manage client communications and deadlines',
      'Monitor referrals and networking contacts',
    ],
  },
  {
    title: 'Small Teams',
    icon: UserGroupIcon,
    description: 'Built for teams of 2-10 who need shared visibility into leads and customer relationships.',
    useCases: [
      'Coordinate team follow-ups and assignments',
      'Share client history across team members',
      'Track team performance and pipeline metrics',
    ],
  },
];

export default function HowYouCanUseIt() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How You Can Use It
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tailored solutions for every type of business
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#01a2f1] to-[#0182c4]">
                    <audience.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{audience.title}</h3>
                </div>
                
                <p className="text-base leading-7 text-gray-600 mb-6">
                  {audience.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Use Cases:
                  </h4>
                  <ul className="space-y-2">
                    {audience.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#01a2f1] mr-2">•</span>
                        <span className="text-sm text-gray-600">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}