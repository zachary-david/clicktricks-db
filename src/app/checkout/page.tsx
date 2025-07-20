'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { LockClosedIcon, CurrencyDollarIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import StripeCheckout from '@/components/StripeCheckout';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section relative pt-32 pb-20" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              You're Almost There – Let's Build Your CRM
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pay once, get your custom Airtable CRM delivered in 48 hours.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-600 mb-12">
              <div className="flex items-center gap-2">
                <LockClosedIcon className="h-5 w-5 text-green-600" />
                <span>Secure checkout powered by Stripe</span>
              </div>
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="h-5 w-5 text-green-600" />
                <span>30-Day Support Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stripe Checkout Section */}
      <section className="section relative py-16" style={{backgroundColor: '#f8fafc'}}>
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Purchase</h2>
                <div className="text-3xl font-bold text-[#01a2f1] mb-2">$497</div>
                <p className="text-gray-600">One-time payment • No recurring fees</p>
              </div>
              
              <StripeCheckout />
              
              <div className="mt-8 text-center text-sm text-gray-500">
                <p>By completing your purchase, you agree to our terms of service.</p>
                <p className="mt-2">Questions? Email support@clicktricksdb.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="section relative py-20" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-sm font-bold uppercase tracking-wider" style={{color: '#01a2f1'}}>
                AFTER PAYMENT
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                What Happens Next
              </h2>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Payment Confirmation",
                  description: "You'll receive a payment confirmation email immediately with your receipt and next steps."
                },
                {
                  step: "2",
                  title: "Book Your Kickoff Call",
                  description: "You'll be redirected to book your 30-minute kickoff call where we'll discuss your specific needs."
                },
                {
                  step: "3",
                  title: "Custom CRM Build",
                  description: "We'll build your custom Airtable CRM within 48 hours, tailored to your exact workflow."
                },
                {
                  step: "4",
                  title: "Walkthrough & Support",
                  description: "You'll get a personalized walkthrough of your new CRM plus 30 days of email support."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#01a2f1] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="section relative py-20" style={{backgroundColor: '#041926'}}>
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Quick Questions
              </h2>
            </div>
            
            <CheckoutFAQ />
          </div>
        </div>
      </section>

      {/* Back to Homepage */}
      <section className="section py-12" style={{backgroundColor: 'white'}}>
        <div className="container text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-[#01a2f1] hover:text-[#0182c4] font-medium transition-colors"
          >
            ← Back to homepage
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CheckoutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Is this really custom to my business?",
      answer: "Yes — it's built around your workflow, not a generic template. During our kickoff call, we'll discuss your specific needs and processes to ensure your CRM fits perfectly."
    },
    {
      question: "What if I'm not technical?",
      answer: "You don't need to be. I do the setup and teach you how to use it. The walkthrough session will cover everything you need to know, and you'll have 30 days of support for any questions."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <span className="font-medium text-white">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUpIcon className="h-5 w-5 text-[#01a2f1] flex-shrink-0" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-[#01a2f1] flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}