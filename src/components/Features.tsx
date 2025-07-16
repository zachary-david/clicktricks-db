import SectionHeader from "./SectionHeader";

export default function Features() {
  const features = [
    {
      icon: "📅",
      title: "Know Exactly Who to Call Today",
      description: "Open your daily 'Follow-ups Due Today' view and see all overdue prospects prioritized by deal value",
      benefits: [
        "Never miss a hot coaching prospect again",
        "Automated follow-up reminders in Airtable",
        "Priority sorting by client value"
      ]
    },
    {
      icon: "🗂️",
      title: "All Client Info in One Airtable Database",
      description: "Complete interaction history, notes, and contact details organized in professional Airtable views",
      benefits: [
        "Complete coaching client history",
        "Notes and interactions tracked automatically",
        "Quick search and Airtable filters"
      ]
    },
    {
      icon: "⚡",
      title: "Automated Follow-up System",
      description: "Airtable automatically tells you when to reach out - no more manual tracking or forgotten prospects",
      benefits: [
        "System-generated follow-up dates",
        "No more manual calendar reminders",
        "Professional follow-up consistency"
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
          <h2 className="mb-6">
            Everything You Need to Never Lose Another Coaching Client
          </h2>
          <p className="text-xl text-gray-600">
            Simple Airtable features designed specifically for coaches who need follow-up tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="text-5xl mb-6 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
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
              <div className="text-3xl mb-2">📊</div>
              <p className="font-medium">3 Tables Setup</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👀</div>
              <p className="font-medium">Custom Views</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔔</div>
              <p className="font-medium">Follow-up Alerts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <p className="font-medium">Mobile Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}