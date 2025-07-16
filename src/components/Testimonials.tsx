import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      business: "Precision Home Services",
      title: "Owner",
      image: "/testimonial-1.jpg",
      quote: "Before Simple CRM, I was juggling leads in three different spreadsheets and sticky notes. Now every lead is tracked, every follow-up happens on time, and I've increased my close rate by 35%.",
      result: "Increased close rate by 35% in first quarter",
      location: "Austin, TX"
    },
    {
      name: "Robert Kim",
      business: "Strategic Business Consulting",
      title: "Principal Consultant",
      image: "/testimonial-2.jpg",
      quote: "The 30-minute setup promise wasn't marketing fluff - it really took 30 minutes. What used to take me 2 hours of admin work every day now takes 15 minutes. Game changer.",
      result: "Saves 7+ hours per week on administration",
      location: "Seattle, WA"
    },
    {
      name: "Lisa Thompson",
      business: "Thompson Legal Advisory",
      title: "Managing Partner",
      image: "/testimonial-3.jpg",
      quote: "Client confidence went through the roof when I could instantly pull up their case history and follow-up schedule. No more 'let me get back to you' - I have everything at my fingertips.",
      result: "Improved client satisfaction scores by 40%",
      location: "Denver, CO"
    }
  ];

  return (
    <section id="testimonials" className="section" style={{backgroundColor: '#041926'}}>
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
            Join 500+ Service Business Owners Who Transformed Their Lead Management
          </h2>
          <p className="text-xl" style={{color: '#d1fae5'}}>
            Real results from real business owners across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 hover:transform hover:scale-105 transition-all duration-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 font-medium">{testimonial.title}</p>
                  <p className="text-gray-500 text-sm">{testimonial.business}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="mb-6 text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium text-sm">
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
          <p className="text-lg font-medium" style={{color: 'white'}}>4.9/5 average rating from 500+ happy customers</p>
        </div>
      </div>
    </section>
  );
}