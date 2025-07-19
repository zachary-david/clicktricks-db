import SectionHeader from "./SectionHeader";
import Avatar from "./Avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Creative Design Studio",
      title: "Freelance Designer",
      seed: "sarah-designer",
      quote: "Before my Airtable CRM, I was losing potential clients because I forgot to follow up. Now I see exactly who to call each morning and I haven't lost a single hot prospect in 6 months.",
      result: "Zero lost prospects in 6 months",
      location: "Austin, TX",
      revenue: "$85K+ annually"
    },
    {
      name: "Michael Chen",
      business: "TechConsult Pro",
      title: "Solopreneur",
      seed: "michael-tech",
      quote: "The Airtable setup was genuinely 30 minutes. What used to take me 2 hours of spreadsheet wrestling every day now takes 5 minutes. I can focus on client work instead of admin.",
      result: "Saves 9+ hours per week on administration",
      location: "Seattle, WA",
      revenue: "$120K+ annually"
    },
    {
      name: "Jennifer Martinez",
      business: "Digital Marketing Team",
      title: "Small Team Owner",
      seed: "jennifer-marketing",
      quote: "Client confidence skyrocketed when I could instantly access their entire project history and next steps. No more 'let me check and get back to you' - everything is right there in Airtable.",
      result: "Improved client satisfaction by 45%",
      location: "Denver, CO",
      revenue: "$150K+ annually"
    }
  ];

  return (
    <section id="testimonials" className="section" style={{backgroundColor: '#041926 !important', background: '#041926 !important'}}>
      <div className="container">
        <SectionHeader 
          text="Trusted By" 
          apps={[
            { name: "Trustpilot", icon: "⭐" },
            { name: "Google Reviews", icon: "🔍" },
            { name: "Better Business Bureau", icon: "🏆" }
          ]} 
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-6" style={{color: 'white'}}>
            Join 50+ Freelancers & Small Teams Who Never Lose Another Lead
          </h2>
          <p className="text-xl" style={{color: '#d1fae5'}}>
            Real results from freelancers, solopreneurs and small teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 hover:transform hover:scale-105 transition-all duration-300 animate-scale-in rounded-xl" style={{animationDelay: `${index * 0.1}s`, backgroundColor: 'rgba(255, 255, 255, 0.05) !important', border: '1px solid rgba(255, 255, 255, 0.1) !important', backdropFilter: 'blur(10px) !important'}}>
              <div className="flex items-center gap-4 mb-6">
                <Avatar 
                  name={testimonial.name}
                  seed={testimonial.seed}
                  size="lg"
                  className="flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-lg text-white truncate">{testimonial.name}</h4>
                  <p className="text-white text-opacity-90 font-medium">{testimonial.title}</p>
                  <p className="text-white text-opacity-70 text-sm truncate">{testimonial.business}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-white text-opacity-60 text-xs">{testimonial.location}</p>
                    <span className="text-white text-opacity-50">•</span>
                    <p className="text-green-600 text-xs font-medium">{testimonial.revenue}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="mb-6 text-white text-opacity-90 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-green-500 bg-opacity-20 border border-green-400 border-opacity-30 rounded-lg p-4">
                <p className="text-green-300 font-medium text-sm">
                  📈 {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-lg font-medium" style={{color: 'white'}}>4.9/5 average rating from 50+ freelancers and small teams</p>
        </div>
      </div>
    </section>
  );
}