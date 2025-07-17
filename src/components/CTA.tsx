"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function CTA() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section id="booking" className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            text="Schedule With" 
            apps={[
              { name: "Calendly", icon: "📅" },
              { name: "Zoom", icon: "📹" },
              { name: "Google Meet", icon: "🎥" }
            ]} 
          />
          
          <h2 className="text-white mb-6">
            Ready to Transform Your Lead Management in 30 Minutes?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 500+ freelancers and small teams who never lose leads anymore
          </p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">What Happens Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex gap-4">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Book Your Demo</h4>
                  <p className="text-white/80 text-sm">Choose a time that works for you</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">See Your Custom Setup</h4>
                  <p className="text-white/80 text-sm">We'll show you exactly how it works for your business</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Go Live in 30 Minutes</h4>
                  <p className="text-white/80 text-sm">Start organizing your leads immediately</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setShowCalendly(true)}
              className="btn bg-white text-blue-600 hover:bg-gray-100 btn-lg"
            >
              Get Started Now
            </button>
            
            <p className="text-white/80">
              <span className="font-semibold">⚡ Limited spots available this week</span>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg font-medium mb-4">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:support@clicktricksdb.com" className="text-white hover:text-white/80">
                📧 support@clicktricksdb.com
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <a href="tel:+1234567890" className="text-white hover:text-white/80">
                📞 (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>

      {showCalendly && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Book Your Demo</h3>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Demo</h4>
                  <p className="text-gray-600 mb-6">Choose a 20-minute slot that works best for you</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h5 className="font-semibold text-gray-900 mb-2">📅 Quick Demo</h5>
                    <p className="text-gray-600 text-sm mb-4">See how ClickTricks DB works for your business</p>
                    <p className="text-blue-600 font-medium">20 minutes</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h5 className="font-semibold text-gray-900 mb-2">🚀 Setup Call</h5>
                    <p className="text-gray-600 text-sm mb-4">Demo + immediate setup assistance</p>
                    <p className="text-blue-600 font-medium">45 minutes</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
                  <h5 className="font-semibold text-gray-900 mb-4">Select Your Preferred Time:</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-gray-700 font-medium"
                        onClick={() => {
                          // Here you would integrate with actual calendar booking
                          alert(`Demo scheduled for ${time}. In a real implementation, this would connect to Calendly or your preferred booking system.`);
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">All times are EST. More slots available on the next page.</p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    🔒 No credit card required • 30-day support guarantee
                  </p>
                  <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      window.open('https://calendly.com/your-link', '_blank');
                    }}
                  >
                    View All Available Times →
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Replace the Calendly link above with your actual booking URL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}