import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Dynamic imports for below-the-fold components
const Solution = dynamic(() => import('@/components/Solution'), {
  loading: () => <div className="section bg-white animate-pulse"><div className="container"><div className="h-96 bg-gray-200 rounded-lg"></div></div></div>
});

const Benefits = dynamic(() => import('@/components/Benefits'), {
  loading: () => <div className="section bg-white animate-pulse"><div className="container"><div className="h-96 bg-gray-200 rounded-lg"></div></div></div>
});

const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#041926'}}><div className="container"><div className="h-96 bg-gray-700 rounded-lg"></div></div></div>
});

const CallToAction = dynamic(() => import('@/components/CallToAction'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: 'rgba(8, 143, 220, 0.1)'}}><div className="container"><div className="h-48 bg-gray-200 rounded-lg"></div></div></div>
});

const HowYouCanUseIt = dynamic(() => import('@/components/HowYouCanUseIt'), {
  loading: () => <div className="section bg-white animate-pulse"><div className="container"><div className="h-96 bg-gray-200 rounded-lg"></div></div></div>
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#041926'}}><div className="container"><div className="h-96 bg-gray-700 rounded-lg"></div></div></div>
});

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#041926'}}><div className="container"><div className="h-96 bg-gray-700 rounded-lg"></div></div></div>
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#041926'}}><div className="container"><div className="h-96 bg-gray-700 rounded-lg"></div></div></div>
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="form-professional animate-pulse p-8 rounded-xl"><div className="h-96 bg-gray-200 rounded-lg"></div></div>
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="bg-gray-900 animate-pulse h-48"></div>
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Features (Solution) */}
      <Solution />
      
      {/* 3. Why You'll Love (Benefits) */}
      <Benefits />
      
      {/* 4. How It Works */}
      <HowItWorks />
      
      {/* 5. Call to Action (Primary) */}
      <CallToAction variant="primary" />
      
      {/* 6. How You Can Use It */}
      <HowYouCanUseIt />
      
      {/* 7. Reviews (Testimonials) */}
      <Testimonials />
      
      {/* 8. Pricing */}
      <Pricing />
      
      {/* 9. FAQ */}
      <FAQ />
      
      {/* 10. Call to Action (Secondary) */}
      <CallToAction variant="secondary" />
      
      {/* Contact Form Section */}
      <section id="contact" className="section bg-[#088FDC]" aria-labelledby="contact-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Get Started Today</h2>
            <p className="text-lg text-white text-opacity-90">Fill out the form below and we'll set up your custom CRM within 48 hours</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* 11. About Me */}
      <About />
      
      <Footer />
    </main>
  );
}
