'use client';

import React from 'react';
import { UserIcon, UserGroupIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const audiences = [
  {
    id: 'CLI001',
    clientType: 'Solopreneurs',
    icon: UserIcon,
    teamSize: '1 person',
    description: 'Perfect for solo business owners who need to track leads without the complexity of enterprise software.',
    primaryUse: 'Coach inquiries',
    secondaryUse: 'Consulting proposals', 
    tertiaryUse: 'Course enrollments',
    status: 'High Fit',
    revenue: '$50K-$200K',
  },
  {
    id: 'CLI002',
    clientType: 'Freelancers',
    icon: BriefcaseIcon,
    teamSize: '1 person',
    description: 'Ideal for freelancers juggling multiple clients and projects who need organized lead tracking.',
    primaryUse: 'Project inquiries',
    secondaryUse: 'Client communications',
    tertiaryUse: 'Referral tracking',
    status: 'High Fit',
    revenue: '$30K-$150K',
  },
  {
    id: 'CLI003',
    clientType: 'Small Teams',
    icon: UserGroupIcon,
    teamSize: '2-10 people',
    description: 'Built for teams of 2-10 who need shared visibility into leads and customer relationships.',
    primaryUse: 'Team coordination',
    secondaryUse: 'Shared client history',
    tertiaryUse: 'Performance tracking',
    status: 'Perfect Fit',
    revenue: '$100K-$500K',
  },
];

export default function HowYouCanUseIt() {
  return (
    <section className="section relative py-20" style={{backgroundColor: 'white !important', background: 'white !important'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            How You Can Use It
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Tailored solutions for every type of business
          </p>
        </div>

        {/* Client Database Table View */}
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            {/* Table Header */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-[#01a2f1] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  Client Database
                </h3>
                <span className="text-xs text-gray-500">3 records</span>
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block">
              {/* Column Headers */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700 uppercase tracking-wide">
                <div className="col-span-1">ID</div>
                <div className="col-span-2">Client Type</div>
                <div className="col-span-1">Team Size</div>
                <div className="col-span-3">Description</div>
                <div className="col-span-2">Top Use Cases</div>
                <div className="col-span-2">Revenue Range</div>
                <div className="col-span-1">Fit Score</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-100">
                {audiences.map((client) => (
                  <div
                    key={client.id}
                    className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    {/* ID */}
                    <div className="col-span-1 flex items-center">
                      <span className="text-xs font-mono text-gray-500">{client.id}</span>
                    </div>

                    {/* Client Type */}
                    <div className="col-span-2 flex items-center gap-3">
                      <client.icon className="h-6 w-6 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm font-semibold text-gray-900">{client.clientType}</span>
                    </div>

                    {/* Team Size */}
                    <div className="col-span-1 flex items-center">
                      <span className="text-sm text-gray-600">{client.teamSize}</span>
                    </div>

                    {/* Description */}
                    <div className="col-span-3 flex items-center">
                      <p className="text-sm text-gray-600 leading-tight line-clamp-2">{client.description}</p>
                    </div>

                    {/* Use Cases */}
                    <div className="col-span-2 flex flex-col justify-center space-y-1">
                      <span className="text-xs text-[#01a2f1] font-medium">{client.primaryUse}</span>
                      <span className="text-xs text-gray-500">{client.secondaryUse}</span>
                      <span className="text-xs text-gray-400">{client.tertiaryUse}</span>
                    </div>

                    {/* Revenue */}
                    <div className="col-span-2 flex items-center">
                      <span className="text-sm font-medium text-gray-900">{client.revenue}</span>
                    </div>

                    {/* Status */}
                    <div className="col-span-1 flex items-center">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        client.status === 'Perfect Fit' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {client.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden divide-y divide-gray-100">
              {audiences.map((client) => (
                <div key={client.id} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <client.icon className="h-8 w-8 text-[#01a2f1] flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{client.clientType}</h3>
                      <p className="text-sm text-gray-500">{client.teamSize} • {client.revenue}</p>
                    </div>
                    <span className={`ml-auto inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      client.status === 'Perfect Fit' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {client.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{client.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Top Use Cases:</h4>
                    <div className="space-y-1">
                      <div className="text-xs text-[#01a2f1] font-medium">• {client.primaryUse}</div>
                      <div className="text-xs text-gray-500">• {client.secondaryUse}</div>
                      <div className="text-xs text-gray-400">• {client.tertiaryUse}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Showing 3 of 3 client types</span>
                <span>Last updated: Just now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}