import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";

// Dynamic imports for below-the-fold components
const Solution = dynamic(() => import('@/components/Solution'), {
  loading: () => <div className="section bg-white animate-pulse"><div className="container"><div className="h-96 bg-gray-200 rounded-lg"></div></div></div>
});

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="section bg-white animate-pulse"><div className="container"><div className="h-96 bg-gray-200 rounded-lg"></div></div></div>
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#041926'}}><div className="container"><div className="h-96 bg-gray-700 rounded-lg"></div></div></div>
});

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#e6f7ff'}}><div className="container"><div className="h-96 bg-gray-200 rounded-lg"></div></div></div>
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section bg-white animate-pulse"><div className="container"><div className="h-96 bg-gray-200 rounded-lg"></div></div></div>
});

const CTA = dynamic(() => import('@/components/CTA'), {
  loading: () => <div className="section bg-white animate-pulse"><div className="container"><div className="h-48 bg-gray-200 rounded-lg"></div></div></div>
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
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      
      {/* Contact Form Section */}
      <section id="contact" className="section" style={{backgroundColor: '#dbeafe'}} aria-labelledby="contact-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <About />
      <Footer />
    </main>
  );
}
