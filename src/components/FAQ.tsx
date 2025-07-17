"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly do I get for $497?",
      answer: "You get a complete Airtable CRM setup with 3 custom tables, 4 optimized views, automated follow-up reminders, and a 30-minute training call. Plus 30 days of email support to ensure you're using it effectively."
    },
    {
      question: "What does Airtable cost per month?",
      answer: "Airtable costs $10/month for the Plus plan, which you pay directly to Airtable. This gives you 5,000 records and 100,000 API calls per month - more than enough for most small businesses."
    },
    {
      question: "Why does Airtable cost $10/month on top of your $497?",
      answer: "Airtable is the platform your CRM runs on - think of it like paying for electricity to power your house. The $10/month goes directly to Airtable, not me. This gives you a professional database that syncs across all your devices."
    },
    {
      question: "How is this different from a spreadsheet?",
      answer: "Unlike spreadsheets, this Airtable system automatically reminds you to follow up, tracks all interactions in one place, and shows you exactly who needs attention today. No more manual sorting or lost information."
    },
    {
      question: "What if I already have a CRM?",
      answer: "Most freelancers and small teams find their current CRM is either too complex or too basic. Our Airtable solution is designed specifically for growing businesses - simple enough to use daily, powerful enough to scale with you."
    },
    {
      question: "Do I need technical skills to use Airtable?",
      answer: "Not at all! If you can use email, you can use Airtable. We handle all the technical setup, and the interface is intuitive. You'll be comfortable using it within your first week."
    },
    {
      question: "What if I don't like Airtable?",
      answer: "I offer a 30-day money-back guarantee. If you're not completely satisfied with your custom Airtable CRM, I'll refund your entire $497 payment. The Airtable subscription is separate and can be canceled anytime."
    },
    {
      question: "Can other people access my Airtable CRM?",
      answer: "Yes! You can add team members to your Airtable base anytime. Each person gets their own Airtable login, and you control what they can see and edit."
    },
    {
      question: "How long does the Airtable setup take?",
      answer: "I'll have your complete Airtable CRM built and ready in 30 minutes during our setup call. You'll leave knowing exactly how to use your new lead tracking system."
    },
    {
      question: "Can I import my existing contacts into Airtable?",
      answer: "Absolutely! I'll help you import all your leads and contacts from spreadsheets, phone, email, or other systems directly into your new Airtable CRM during our setup call."
    }
  ];

  return (
    <section id="faq" className="section bg-white">
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
          
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
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
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
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