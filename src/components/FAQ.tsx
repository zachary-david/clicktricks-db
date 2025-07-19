"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to know how to use Airtable to make this work?",
      answer: "Nope. I'll set everything up for you — including your CRM, automations, and views. You'll get a personalized walkthrough so you know exactly how to use it, even if you've never touched Airtable before."
    },
    {
      question: "Is this built on the free or paid version of Airtable?",
      answer: "You can use the free Airtable plan to get started. Most clients stay on the free plan for months. If you grow into features like advanced permissions or automations, you can upgrade later — but it's totally optional."
    },
    {
      question: "What exactly is included in the $497 setup?",
      answer: "You get a custom CRM tailored to your business, fully set up inside Airtable. It includes: Lead pipeline tracking, Follow-up reminders, Built-in activity log, Dashboard views, 30-minute onboarding call, 30 days of email support. No templates to figure out. No DIY guesswork. Just log in and use it."
    },
    {
      question: "How long does it take to get everything live?",
      answer: "Usually 48 hours or less after your intake form is complete. You'll book a 30-min kickoff call, and then I'll handle the rest while you stay focused on your business."
    },
    {
      question: "Do I have to pay for anything else?",
      answer: "Just the one-time $497. You'll only need an Airtable account (free works for most). There are no hidden fees, no monthly CRM subscriptions, and no upsells."
    }
  ];

  return (
    <section id="faq" className="section" style={{backgroundColor: '#041926 !important', background: '#041926 !important'}}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            text="Questions About" 
            apps={[
              { name: "Airtable", icon: "🗃️" },
              { name: "Setup Process", icon: "⚙️" },
              { name: "Pricing", icon: "💰" }
            ]} 
          />
          
          <h2 className="text-center mb-12 text-white drop-shadow-lg">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg shadow-sm" style={{backgroundColor: 'rgba(255, 255, 255, 0.05) !important', border: '1px solid rgba(255, 255, 255, 0.1) !important', backdropFilter: 'blur(10px) !important'}}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-colors duration-200"
                >
                  <span className="font-medium text-lg text-white">{faq.question}</span>
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
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-white text-opacity-90">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-white text-opacity-90 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}