import SectionHeader from "./SectionHeader";

export default function Problem() {
  const problems = [
    {
      icon: "📝",
      title: "Leads scattered across sticky notes and spreadsheets",
      description: "Important customer information gets lost in the chaos of unorganized systems"
    },
    {
      icon: "📞",
      title: "Forgetting to follow up with hot prospects",
      description: "Missing opportunities because there's no system to track who needs attention"
    },
    {
      icon: "🤯",
      title: "Spending hours every week organizing customer info",
      description: "Wasting valuable time that could be spent growing your business"
    },
    {
      icon: "💸",
      title: "Lost revenue from disorganized lead management",
      description: "Deals slip through the cracks when you can't track them properly"
    },
    {
      icon: "😰",
      title: "Looking unprofessional when clients ask for updates",
      description: "Scrambling to find information makes you look disorganized to clients"
    }
  ];

  return (
    <section id="problems" className="section bg-white">
      <div className="container">
        <SectionHeader 
          text="The Current Reality" 
          apps={[
            { name: "Excel", icon: "📊" },
            { name: "Google Sheets", icon: "📈" },
            { name: "Sticky Notes", icon: "📝" }
          ]} 
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-6">
            Tired of Losing Leads Because Your System is Broken?
          </h2>
          <p className="text-xl text-gray-600">
            If you're running your business with spreadsheets and sticky notes, you're leaving money on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card stagger-animation animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4 animate-bounce-gentle" style={{animationDelay: `${index * 0.2}s`}}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-xl max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-red-800 font-medium mb-2">
              <span className="text-2xl font-bold">85%</span> of service businesses lose at least one major client per year due to poor follow-up
            </p>
            <p className="text-sm text-red-600 italic">
              Source: Harvard Business Review Study on Customer Retention (2023)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}