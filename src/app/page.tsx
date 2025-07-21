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

// Removed sections - keeping components for future use
// const HowYouCanUseIt = dynamic(() => import('@/components/HowYouCanUseIt'), {
//   loading: () => <div className="section bg-white animate-pulse"><div className="container"><div className="h-96 bg-gray-200 rounded-lg"></div></div></div>
// });

// const Testimonials = dynamic(() => import('@/components/Testimonials'), {
//   loading: () => <div className="section animate-pulse" style={{backgroundColor: '#041926'}}><div className="container"><div className="h-96 bg-gray-700 rounded-lg"></div></div></div>
// });

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#041926'}}><div className="container"><div className="h-96 bg-gray-700 rounded-lg"></div></div></div>
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#041926'}}><div className="container"><div className="h-96 bg-gray-700 rounded-lg"></div></div></div>
});

const AirtablePromo = dynamic(() => import('@/components/AirtablePromo'), {
  loading: () => <div className="section animate-pulse" style={{backgroundColor: '#088FDC'}}><div className="container"><div className="h-48 bg-gray-200 rounded-lg"></div></div></div>
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="bg-gray-900 animate-pulse h-48"></div>
});

const CookieBanner = dynamic(() => import('@/components/CookieBanner'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Features (Solution) */}
      <Solution />
      
      {/* 3. Call to Action (Primary) */}
      <CallToAction variant="primary" />
      
      {/* 4. Why You'll Love (Benefits) */}
      <Benefits />
      
      {/* 5. How It Works */}
      <HowItWorks />
      
      {/* 6. Pricing */}
      <Pricing />
      
      {/* 7. FAQ */}
      <FAQ />
      
      {/* 8. Airtable Promo */}
      <AirtablePromo />
      
      {/* 9. About Me */}
      <About />
      
      <Footer />
      
      {/* Cookie Consent Banner */}
      <CookieBanner />
    </main>
  );
}
