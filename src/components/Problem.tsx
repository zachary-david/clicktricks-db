import SectionHeader from "./SectionHeader";

export default function Problem() {
  const problems = [
    {
      icon: "⏰",
      title: "Every morning you waste 30 minutes figuring out who to follow up with",
      description: "Without a system, you're constantly scrambling to remember which prospects need attention"
    },
    {
      icon: "📊",
      title: "Hot leads get forgotten in spreadsheet chaos and sticky notes",
      description: "Valuable opportunities slip through the cracks when leads are scattered across spreadsheets, sticky notes, and different systems"
    },
    {
      icon: "😰",
      title: "You look unprofessional when you can't find client interaction history",
      description: "Saying 'let me get back to you' destroys confidence when clients expect immediate answers"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            "I'm Losing Leads in Spreadsheets and Sticky Notes"
          </h2>
          <p className="text-xl text-gray-600">
            If this sounds familiar, you're not alone. Most freelancers and small teams lose 15% of potential revenue to disorganized lead management.
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
              <span className="text-2xl font-bold">The average freelancer loses $25,000/year</span> to poor follow-up systems
            </p>
            <p className="text-sm text-red-600 italic">
              That's multiple clients who chose competitors because you forgot to follow up
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}