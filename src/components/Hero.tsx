"use client";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import Image from "next/image";
import InteractiveCRMTable from "./InteractiveCRMTable";

export default function Hero() {
  return (
    <section className="section pt-32 md:pt-24" style={{backgroundColor: '#041926 !important', background: '#041926 !important'}}>
      <div className="container">
        {/* Simple Hero Section Header - just text */}
        <div className="text-center mb-6">
          <span className="text-sm font-bold uppercase tracking-wider typewriter" style={{color: '#01a2f1'}}>
            TRUSTED TOOLS, DONE-FOR-YOU-DESIGN
          </span>
        </div>
        
        {/* Centered Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          
          <h1 className="mb-6" style={{color: 'white !important'}}>
            Professional CRM for Freelancers, Solopreneurs and Small Teams
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#d1d5db !important'}}>
           Simple, automated lead tracking so you never miss a follow-up again
          </p>

          
          <div className="flex justify-center mb-8">
            <Link
              href="#booking"
              className="btn-primary btn-lg"
            >
              Get Started Now
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm mb-12" style={{color: '#d1d5db !important'}}>
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
              <p className="text-sm font-medium uppercase tracking-wide" style={{color: '#9ca3af !important'}}>
                Trusted by 50+ freelancers, solopreneurs & small teams
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity">
              <div className="flex items-center justify-center h-12 w-24">
                <span className="text-lg font-bold" style={{color: 'white'}}>ACME</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24">
                <span className="text-lg font-bold" style={{color: 'white'}}>TechCorp</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24">
                <span className="text-lg font-bold" style={{color: 'white'}}>BuildCo</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24">
                <span className="text-lg font-bold" style={{color: 'white'}}>ConsultPro</span>
              </div>
              <div className="flex items-center justify-center h-12 w-24">
                <span className="text-lg font-bold" style={{color: 'white'}}>ServiceMax</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="flex items-center justify-center gap-2 text-sm" style={{color: '#d1d5db !important'}}>
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
          <div className="rounded-2xl p-6 lg:p-8" style={{backgroundColor: '#041926'}}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{border: '2px solid #01a2f1'}}>
              <div className="p-4 flex items-center gap-2" style={{backgroundColor: '#01a2f1'}}>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm font-black" style={{color: 'white', fontFamily: 'var(--font-jakarta)'}}>Your Custom DB</span>
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