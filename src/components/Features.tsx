import SectionHeader from "./SectionHeader";

export default function Features() {
  const features = [
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-xl border-2 border-[#01a2f1]/20 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="18" height="2" rx="1" fill="#01a2f1"/>
            <rect x="3" y="10" width="14" height="2" rx="1" fill="#18BFFF"/>
            <rect x="3" y="14" width="16" height="2" rx="1" fill="#FCB400"/>
            <circle cx="19" cy="7" r="2" fill="#ef4444"/>
            <circle cx="17" cy="11" r="1.5" fill="#f59e0b"/>
            <circle cx="18" cy="15" r="1" fill="#10b981"/>
          </svg>
        </div>
      ),
      title: "Know Exactly Who to Call Today",
      description: "Open your daily 'Follow-ups Due Today' view and see all overdue prospects prioritized by deal value",
      benefits: [
        "Never miss a follow-up again",
        "Automated follow-up reminders in Airtable",
        "Professional image with organized lead tracking"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-[#e0f2fe] to-[#dbeafe] rounded-xl border-2 border-[#01a2f1]/20 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="3" rx="1.5" fill="#01a2f1"/>
            <rect x="4" y="9" width="16" height="3" rx="1.5" fill="#18BFFF"/>
            <rect x="4" y="14" width="16" height="3" rx="1.5" fill="#FCB400"/>
            <circle cx="6" cy="5.5" r="0.8" fill="white"/>
            <circle cx="6" cy="10.5" r="0.8" fill="white"/>
            <circle cx="6" cy="15.5" r="0.8" fill="white"/>
            <rect x="9" y="5" width="8" height="1" rx="0.5" fill="white" opacity="0.7"/>
            <rect x="9" y="10" width="6" height="1" rx="0.5" fill="white" opacity="0.7"/>
            <rect x="9" y="15" width="10" height="1" rx="0.5" fill="white" opacity="0.7"/>
          </svg>
        </div>
      ),
      title: "All Client Info in One Airtable Database",
      description: "Complete interaction history, notes, and contact details organized in professional Airtable views",
      benefits: [
        "Professional image with complete lead history",
        "Notes and interactions tracked automatically",
        "More sales through organized follow-ups"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-[#dbeafe] to-[#c7d2fe] rounded-xl border-2 border-[#01a2f1]/20 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FCB400"/>
            <circle cx="12" cy="12" r="3" fill="#01a2f1"/>
            <path d="M8 16L10 18L16 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="18" cy="6" r="2" fill="#10b981">
              <animate attributeName="r" values="2;2.5;2" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="6" cy="18" r="1.5" fill="#18BFFF">
              <animate attributeName="r" values="1.5;2;1.5" dur="2.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      ),
      title: "Automated Follow-up System",
      description: "Airtable automatically tells you when to reach out - no more manual tracking or forgotten prospects",
      benefits: [
        "Never miss a follow-up with automated reminders",
        "Professional image with consistent follow-up",
        "More sales through better lead management"
      ]
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <SectionHeader 
          text="Built on Airtable" 
          apps={[
            { name: "Airtable", icon: "🎆" },
            { name: "Automations", icon: "🤖" },
            { name: "Custom Views", icon: "👀" }
          ]} 
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Never Miss a Follow-Up, Professional Image, More Sales
          </h2>
          <p className="text-xl text-gray-600">
            Simple, automated lead tracking designed specifically for freelancers and small teams who want professional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="professional-card p-8 animate-scale-in rounded-xl" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="mb-6 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl p-8 text-center" style={{backgroundColor: '#dbeafe', border: '2px solid #93c5fd'}}>
          <h3 className="text-2xl font-bold mb-4">
            Your Custom Airtable CRM Includes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/80 rounded-lg border border-[#01a2f1]/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="6" height="16" rx="1" fill="#01a2f1"/>
                  <rect x="11" y="7" width="6" height="13" rx="1" fill="#18BFFF"/>
                  <rect x="19" y="10" width="2" height="10" rx="1" fill="#FCB400"/>
                </svg>
              </div>
              <p className="font-medium">3 Tables Setup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/80 rounded-lg border border-[#01a2f1]/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="6" width="18" height="3" rx="1.5" fill="#01a2f1"/>
                  <rect x="3" y="11" width="18" height="3" rx="1.5" fill="#18BFFF"/>
                  <rect x="3" y="16" width="18" height="2" rx="1" fill="#FCB400"/>
                  <circle cx="5" cy="7.5" r="0.8" fill="white"/>
                  <circle cx="5" cy="12.5" r="0.8" fill="white"/>
                </svg>
              </div>
              <p className="font-medium">Custom Views</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/80 rounded-lg border border-[#01a2f1]/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="#FCB400"/>
                  <path d="M21 9V7L15 13L12 10L1 21H3V19L12 10L15 13L21 9Z" fill="#01a2f1"/>
                  <circle cx="18" cy="6" r="2" fill="#ef4444">
                    <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <p className="font-medium">Follow-up Alerts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/80 rounded-lg border border-[#01a2f1]/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" fill="#01a2f1"/>
                  <rect x="6" y="4" width="12" height="16" rx="1" fill="white"/>
                  <rect x="7" y="6" width="10" height="1" rx="0.5" fill="#18BFFF"/>
                  <rect x="7" y="8" width="8" height="1" rx="0.5" fill="#FCB400"/>
                  <rect x="7" y="10" width="9" height="1" rx="0.5" fill="#18BFFF"/>
                  <circle cx="12" cy="18" r="1.5" fill="#01a2f1"/>
                </svg>
              </div>
              <p className="font-medium">Mobile Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}