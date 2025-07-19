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
          <span className="text-sm font-bold uppercase tracking-wider typewriter" style={{color: '#01a2f1'}}>
            TRUSTED TOOLS, DONE-FOR-YOU-DESIGN
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg mt-4" style={{color: 'white !important'}}>
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-white text-opacity-90">
            Everything you need to know about our Airtable CRM setup
          </p>
        </div>

        {/* Simple FAQ List */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-white border-opacity-20 rounded-lg overflow-hidden"
                style={{backgroundColor: 'rgba(255, 255, 255, 0.05) !important', backdropFilter: 'blur(10px) !important'}}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left group hover:bg-white hover:bg-opacity-5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white transition-colors" style={{color: 'white !important'}}>
                      {faq.question}
                    </h3>
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
                </button>
                
                {/* Answer Dropdown */}
                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-white border-opacity-10" style={{backgroundColor: 'rgba(255, 255, 255, 0.02) !important'}}>
                    <div className="pt-4">
                      <p className="text-base text-white text-opacity-90 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
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