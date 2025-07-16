"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Pricing() {
  const [leadsPerMonth, setLeadsPerMonth] = useState(20);
  const [avgDealSize, setAvgDealSize] = useState(2500);
  
  const competitors = [
    {
      name: "HubSpot",
      price: "$540+/year",
      features: ["Complex setup", "Ongoing monthly fees", "90% features unused"]
    },
    {
      name: "Salesforce",
      price: "$1,800+/year",
      features: ["Enterprise complexity", "Hidden costs everywhere", "Not for coaches"]
    }
  ];

  // ROI Calculator Logic
  const currentLossRate = 0.15; // 15% leads lost to poor organization
  const improvedLossRate = 0.03; // 3% with CRM
  const leadsImproved = leadsPerMonth * (currentLossRate - improvedLossRate);
  const monthlyIncrease = leadsImproved * avgDealSize;
  const yearlyIncrease = monthlyIncrease * 12;
  const totalFirstYearCost = 497 + (10 * 12); // Setup + Airtable yearly
  const roi = ((yearlyIncrease - totalFirstYearCost) / totalFirstYearCost) * 100;

  return (
    <section id="pricing" className="section" style={{backgroundColor: '#e6f7ff'}}>
      <div className="container">
        <SectionHeader 
          text="Compare Against" 
          apps={[
            { name: "HubSpot", icon: "🧮" },
            { name: "Salesforce", icon: "☁️" },
            { name: "Pipedrive", icon: "📊" }
          ]} 
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-6">
            Complete Pricing Transparency - Know Exactly What You'll Pay
          </h2>
          <p className="text-xl text-gray-600">
            One-time setup fee + Airtable's low monthly cost. No hidden fees, no surprises.
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                💰 ROI Calculator: See Your Potential Return
              </h3>
              <p className="text-gray-600">
                Calculate how much revenue you could recover by improving your lead management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Leads per month
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={leadsPerMonth}
                    onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5</span>
                    <span className="font-medium text-blue-600">{leadsPerMonth} leads</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average deal size
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="100"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$500</span>
                    <span className="font-medium text-blue-600">${avgDealSize.toLocaleString()}</span>
                    <span>$10,000</span>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Potential Results:</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Leads recovered monthly:</span>
                    <span className="font-semibold text-green-600">+{leadsImproved.toFixed(1)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly revenue increase:</span>
                    <span className="font-semibold text-green-600">+${monthlyIncrease.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-gray-900 font-medium">Yearly revenue increase:</span>
                    <span className="font-bold text-xl text-green-600">+${yearlyIncrease.toLocaleString()}</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">ROI on $617 first year investment:</span>
                      <span className="font-bold text-2xl text-blue-600">{roi.toFixed(0)}%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Based on reducing lead loss from 15% to 3%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {competitors.map((competitor, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{competitor.name}</h3>
              <p className="text-3xl font-bold text-gray-400 mb-4">{competitor.price}</p>
              <ul className="space-y-2 text-gray-500">
                {competitor.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="card p-8 relative overflow-hidden lg:scale-105" style={{border: '4px solid #01a2f1'}}>
            <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              TRANSPARENT PRICING
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-center">Your Airtable CRM</h3>
            <div className="text-center mb-6">
              <div className="mb-4">
                <p className="text-5xl font-bold" style={{color: '#01a2f1'}}>$497</p>
                <p className="text-gray-600">one-time setup</p>
              </div>
              <div className="text-lg text-gray-700">+</div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-gray-700">$10/mo</p>
                <p className="text-gray-600">Airtable software</p>
                <p className="text-xs text-gray-500 mt-1">(paid directly to Airtable)</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Total Cost Breakdown:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>First year total:</span>
                  <span className="font-semibold">$617</span>
                </div>
                <div className="flex justify-between">
                  <span>Year 2+ (only Airtable):</span>
                  <span className="font-semibold">$120/year</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "✅ Complete custom Airtable setup",
                "✅ 30-minute training call included",
                "✅ Built specifically for coaches",
                "✅ 30-day money-back guarantee",
                "✅ Unlimited contacts & pipelines",
                "✅ You own your Airtable forever"
              ].map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>

            <a href="#booking" className="btn-primary btn-lg w-full text-center">
              Get Started Today
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-gray-600 mt-4">
            If you're not completely satisfied, get a full refund. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}