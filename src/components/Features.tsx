import SectionHeader from "./SectionHeader";

export default function Features() {
  const features = [
    {
      icon: "📅",
      title: "Know Exactly Who to Call Today",
      description: "Open one view every morning and see all overdue follow-ups prioritized by hotness",
      benefits: [
        "Never miss a hot lead again",
        "Automated follow-up reminders",
        "Priority sorting by deal value"
      ]
    },
    {
      icon: "🗂️",
      title: "All Customer Info in One Place",
      description: "No more sticky notes or scattered spreadsheets. Every lead, contact, and note organized professionally",
      benefits: [
        "Complete customer history",
        "Notes and interactions tracked",
        "Quick search and filters"
      ]
    },
    {
      icon: "👥",
      title: "Scales When You Hire Help",
      description: "Add team members instantly. Everyone sees their leads and knows what needs to be done",
      benefits: [
        "Unlimited team members",
        "Role-based permissions",
        "Activity tracking"
      ]
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <SectionHeader 
          text="Built With" 
          apps={[
            { name: "Notion", icon: "📋" },
            { name: "Slack", icon: "💬" },
            { name: "Gmail", icon: "📧" }
          ]} 
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-6">
            Everything You Need to Never Lose Another Lead
          </h2>
          <p className="text-xl text-gray-600">
            Simple, powerful features designed specifically for service businesses
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
            Plus These Time-Saving Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📧</div>
              <p className="font-medium">Email Templates</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <p className="font-medium">Sales Reports</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔔</div>
              <p className="font-medium">Smart Alerts</p>
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