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
    <section id="testimonials" className="section relative py-20 overflow-hidden" style={{backgroundColor: 'white !important', background: 'white !important'}}>
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(8, 143, 220, 0.4) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Reviews
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            See what our clients say about their results
          </p>
        </div>

        {/* Three Column Layout - Connects directly to previous section */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
            {/* Vertical borders that extend up to previous section and down to horizontal line */}
            <div className="hidden lg:block absolute left-1/3 w-px bg-[#01a2f1] opacity-30" style={{top: '-200px', height: 'calc(100% + 200px)'}}></div>
            <div className="hidden lg:block absolute left-2/3 w-px bg-[#01a2f1] opacity-30" style={{top: '-200px', height: 'calc(100% + 200px)'}}></div>
            
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="px-8 py-12 text-left">
                  {/* Avatar at top */}
                  <div className="mb-6">
                    <Avatar 
                      name={testimonial.name}
                      seed={testimonial.seed}
                      size="xl"
                      className="w-16 h-16"
                    />
                  </div>
                  
                  {/* Text elements vertically stacked with left alignment */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    
                    <p className="text-lg text-[#01a2f1] font-semibold mb-2">
                      {testimonial.title}
                    </p>
                    
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Two-sentence review */}
                  <blockquote className="text-base text-gray-700 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal border to separate columns from header text */}
        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-0 h-px bg-[#01a2f1] opacity-30 left-0 right-0"></div>
        </div>

        {/* Section Header at Bottom */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Join 50+ Freelancers & Small Teams Who Never Lose Another Lead
          </h2>
          <p className="text-xl text-gray-600">
            Real results from freelancers, solopreneurs and small teams
          </p>
        </div>
      </div>
    </section>
  );
}