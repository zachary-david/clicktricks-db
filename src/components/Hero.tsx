"use client";

import Link from "next/link";
import Image from "next/image";
import InteractiveCRMTable from "./InteractiveCRMTable";

export default function Hero() {
  return (
    <section className="section bg-white pt-24">
      <div className="container">
        {/* Centered Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: '#e6f7ff', color: '#0182c4'}}>
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            $497 One-Time Setup + $10/month Airtable
          </div>

          {/* Target Badge */}
          <div className="mb-4">
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Perfect for Coaches & Consultants
            </span>
          </div>
          
          <h1 className="mb-6">
            Stop Losing $5,000+ Coaching Clients Because You Forgot to Follow Up
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a professional lead management system that shows you exactly who to call today - set up in 30 minutes
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="#booking"
              className="btn-primary btn-lg"
            >
              Get Your Custom CRM Setup
            </Link>
            <Link
              href="#demo"
              className="btn-secondary btn-lg"
            >
              See How It Works
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{color: '#01a2f1'}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              $497 one-time setup
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{color: '#01a2f1'}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Built on Airtable ($10/mo)
            </div>
          </div>

          {/* Customer Logos & Social Proof */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Trusted by 50+ coaches earning $100K+
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity">
              <div className="flex items-center justify-center h-12 w-24 bg-gray-100 rounded-lg">
                <span className="text-lg font-bold text-gray-600">ACME</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-gray-100 rounded-lg">
                <span className="text-lg font-bold text-gray-600">TechCorp</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-gray-100 rounded-lg">
                <span className="text-lg font-bold text-gray-600">BuildCo</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-gray-100 rounded-lg">
                <span className="text-lg font-bold text-gray-600">ConsultPro</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-gray-100 rounded-lg">
                <span className="text-lg font-bold text-gray-600">ServiceMax</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="font-medium">4.9/5</span>
                <span>•</span>
                <span>Based on 200+ reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width CRM Demo */}
        <div className="relative animate-slide-up">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 lg:p-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{border: '2px solid #01a2f1'}}>
              <div className="bg-gray-100 p-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-600 typewriter">Your Custom Airtable CRM</span>
                <div className="ml-auto flex gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"></div>
                  <div className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"></div>
                </div>
              </div>
              
              <div className="p-0">
                <InteractiveCRMTable />
              </div>
            </div>
          </div>
          
          {/* Interactive Demo Label */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-white px-4 py-2 rounded-full shadow-md border-2" style={{borderColor: '#01a2f1'}}>
              <span className="text-sm font-medium typewriter" style={{color: '#0182c4'}}>
                👆 THIS IS WHAT YOUR AIRTABLE CRM WILL LOOK LIKE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}