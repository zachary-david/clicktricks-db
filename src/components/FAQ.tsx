"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need technical skills to use this?",
      answer: "Not at all! Simple CRM is designed for non-technical users. If you can use email, you can use our CRM. We'll set everything up for you during your 30-minute onboarding call."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "Perfect! We built this specifically for business owners who don't want to deal with complex software. The interface is intuitive, and we provide personal training to ensure you're comfortable."
    },
    {
      question: "Can I add team members later?",
      answer: "Yes! You can add unlimited team members at any time. Each person gets their own login and can see only their assigned leads and tasks."
    },
    {
      question: "How is this different from a spreadsheet?",
      answer: "Unlike spreadsheets, Simple CRM automatically reminds you to follow up, tracks all interactions in one place, and shows you exactly who needs attention today. No more manual sorting or lost information."
    },
    {
      question: "What if I don't like it?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your entire payment. No questions asked."
    },
    {
      question: "Is there really no monthly fee?",
      answer: "Correct! You pay $497 once and use it forever. This includes all features, unlimited users, and free updates. No hidden fees or surprise charges."
    },
    {
      question: "How long does setup take?",
      answer: "We'll have you up and running in 30 minutes during your onboarding call. You'll leave the call with a fully functional CRM and the knowledge to use it effectively."
    },
    {
      question: "Can I import my existing contacts?",
      answer: "Yes! We'll help you import your contacts from spreadsheets, email, or other systems during your setup call. All your data transfers seamlessly."
    }
  ];

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            text="Support Via" 
            apps={[
              { name: "Help Desk", icon: "🎧" },
              { name: "Knowledge Base", icon: "📚" },
              { name: "Live Chat", icon: "💬" }
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