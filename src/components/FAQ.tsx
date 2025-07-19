"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 'FAQ001',
      category: 'Setup',
      question: "Do I need to know how to use Airtable to make this work?",
      answer: "Nope. I'll set everything up for you — including your CRM, automations, and views. You'll get a personalized walkthrough so you know exactly how to use it, even if you've never touched Airtable before.",
      priority: 'High',
      status: 'Active'
    },
    {
      id: 'FAQ002',
      category: 'Pricing',
      question: "Is this built on the free or paid version of Airtable?",
      answer: "You can use the free Airtable plan to get started. Most clients stay on the free plan for months. If you grow into features like advanced permissions or automations, you can upgrade later — but it's totally optional.",
      priority: 'High',
      status: 'Active'
    },
    {
      id: 'FAQ003',
      category: 'Features',
      question: "What exactly is included in the $497 setup?",
      answer: "You get a custom CRM tailored to your business, fully set up inside Airtable. It includes: Lead pipeline tracking, Follow-up reminders, Built-in activity log, Dashboard views, 30-minute onboarding call, 30 days of email support. No templates to figure out. No DIY guesswork. Just log in and use it.",
      priority: 'Critical',
      status: 'Active'
    },
    {
      id: 'FAQ004',
      category: 'Timeline',
      question: "How long does it take to get everything live?",
      answer: "Usually 48 hours or less after your intake form is complete. You'll book a 30-min kickoff call, and then I'll handle the rest while you stay focused on your business.",
      priority: 'Medium',
      status: 'Active'
    },
    {
      id: 'FAQ005',
      category: 'Pricing',
      question: "Do I have to pay for anything else?",
      answer: "Just the one-time $497. You'll only need an Airtable account (free works for most). There are no hidden fees, no monthly CRM subscriptions, and no upsells.",
      priority: 'High',
      status: 'Active'
    }
  ];

  return (
    <section id="faq" className="section relative py-24 sm:py-32" style={{backgroundColor: '#041926 !important', background: '#041926 !important'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-white text-opacity-90">
            Everything you need to know about our Airtable CRM setup
          </p>
        </div>

        {/* FAQ Knowledge Base Table */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="overflow-hidden rounded-lg border border-white border-opacity-20 shadow-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.05) !important', backdropFilter: 'blur(10px) !important'}}>
            {/* Table Header */}
            <div className="px-6 py-3 border-b border-white border-opacity-20" style={{backgroundColor: 'rgba(255, 255, 255, 0.1) !important'}}>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-[#01a2f1] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                  Knowledge Base
                </h3>
                <span className="text-xs text-white text-opacity-70">5 articles</span>
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block">
              {/* FAQ Database Rows */}
              <div className="divide-y divide-white divide-opacity-10">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="transition-all duration-200 hover:bg-white hover:bg-opacity-5"
                  >
                    {/* Question Row */}
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-6 py-4 text-left group"
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* ID */}
                        <div className="col-span-1">
                          <span className="text-xs font-mono text-white text-opacity-50">{faq.id}</span>
                        </div>

                        {/* Category */}
                        <div className="col-span-2">
                          <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-[#01a2f1] bg-opacity-20 text-[#01a2f1] border border-[#01a2f1] border-opacity-30">
                            {faq.category}
                          </span>
                        </div>

                        {/* Question */}
                        <div className="col-span-7">
                          <span className="text-sm font-medium text-white group-hover:text-[#01a2f1] transition-colors">
                            {faq.question}
                          </span>
                        </div>

                        {/* Priority */}
                        <div className="col-span-1">
                          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            faq.priority === 'Critical' 
                              ? 'bg-red-100 bg-opacity-20 text-red-300' 
                              : faq.priority === 'High'
                              ? 'bg-yellow-100 bg-opacity-20 text-yellow-300'
                              : 'bg-gray-100 bg-opacity-20 text-gray-300'
                          }`}>
                            {faq.priority}
                          </span>
                        </div>

                        {/* Expand Icon */}
                        <div className="col-span-1 flex justify-end">
                          <svg
                            className={`w-5 h-5 text-white text-opacity-70 transition-transform duration-200 ${
                              openIndex === index ? "transform rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    {/* Answer Expansion */}
                    {openIndex === index && (
                      <div className="px-6 pb-4 border-t border-white border-opacity-10" style={{backgroundColor: 'rgba(255, 255, 255, 0.02) !important'}}>
                        <div className="grid grid-cols-12 gap-4 pt-4">
                          <div className="col-span-1"></div>
                          <div className="col-span-11">
                            <div className="flex items-start gap-4">
                              <div className="w-2 h-2 bg-[#01a2f1] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-white text-opacity-90 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden divide-y divide-white divide-opacity-10">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="transition-all duration-200">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex flex-col items-start">
                        <span className="text-xs font-mono text-white text-opacity-50 mb-2">{faq.id}</span>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-[#01a2f1] bg-opacity-20 text-[#01a2f1] border border-[#01a2f1] border-opacity-30">
                          {faq.category}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-white group-hover:text-[#01a2f1] transition-colors leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          faq.priority === 'Critical' 
                            ? 'bg-red-100 bg-opacity-20 text-red-300' 
                            : faq.priority === 'High'
                            ? 'bg-yellow-100 bg-opacity-20 text-yellow-300'
                            : 'bg-gray-100 bg-opacity-20 text-gray-300'
                        }`}>
                          {faq.priority}
                        </span>
                        <svg
                          className={`w-5 h-5 text-white text-opacity-70 transition-transform duration-200 ${
                            openIndex === index ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {/* Answer Expansion for Mobile */}
                  {openIndex === index && (
                    <div className="px-6 pb-4 border-t border-white border-opacity-10" style={{backgroundColor: 'rgba(255, 255, 255, 0.02) !important'}}>
                      <div className="pt-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#01a2f1] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-white text-opacity-90 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="px-6 py-3 border-t border-white border-opacity-20" style={{backgroundColor: 'rgba(255, 255, 255, 0.05) !important'}}>
              <div className="flex items-center justify-between text-xs text-white text-opacity-50">
                <span>Showing 5 of 5 questions</span>
                <span>Last updated: Just now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-white text-opacity-90 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#01a2f1] to-[#0182c4] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01a2f1]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}