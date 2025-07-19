'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircleIcon, CalendarIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Optionally fetch session details for display
      // This is just for UI enhancement - the webhook handles the business logic
      fetchSessionData(sessionId);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  const fetchSessionData = async (sessionId: string) => {
    try {
      // You could create an API endpoint to fetch session details if needed
      // For now, we'll just show a generic success message
      setLoading(false);
    } catch (error) {
      console.error('Error fetching session data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#01a2f1] mx-auto mb-4"></div>
          <p className="text-gray-600">Confirming your payment...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Success Hero */}
      <section className="section relative pt-32 pb-20" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                🎉 Payment Successful!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Welcome to ClickTricks DB! Your custom Airtable CRM setup is on its way.
              </p>
            </div>

            {sessionId && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 inline-block">
                <p className="text-sm text-green-700">
                  <strong>Order ID:</strong> {sessionId.slice(-12)}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section relative py-20" style={{backgroundColor: '#f8fafc'}}>
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Happens Next
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Here's exactly what you can expect over the next 48 hours
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  icon: EnvelopeIcon,
                  time: "Within 5 minutes",
                  title: "Confirmation Email",
                  description: "You'll receive a detailed receipt and welcome email with your next steps.",
                  status: "active"
                },
                {
                  icon: CalendarIcon,
                  time: "Next 24 hours",
                  title: "Book Your Kickoff Call",
                  description: "Schedule your 30-minute discovery call to discuss your specific CRM needs and workflow.",
                  status: "pending"
                },
                {
                  icon: CheckCircleIcon,
                  time: "Within 48 hours",
                  title: "CRM Built & Delivered",
                  description: "Your custom Airtable CRM will be built and ready, tailored to your exact requirements.",
                  status: "pending"
                },
                {
                  icon: PhoneIcon,
                  time: "After delivery",
                  title: "Walkthrough & Training",
                  description: "Personal training session to show you how to use every feature, plus 30 days of support.",
                  status: "pending"
                }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.status === 'active' 
                          ? 'bg-green-100' 
                          : 'bg-gray-100'
                      }`}>
                        <step.icon className={`h-6 w-6 ${
                          step.status === 'active' 
                            ? 'text-green-600' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm font-medium text-[#01a2f1] bg-blue-50 px-2 py-1 rounded">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section relative py-20" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
              Quick Actions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:support@clicktricksdb.com?subject=New Customer - Kickoff Call Request"
                className="bg-[#01a2f1] text-white p-6 rounded-lg hover:bg-[#0182c4] transition-colors"
              >
                <EnvelopeIcon className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Contact Us Directly</h3>
                <p className="text-sm opacity-90">Email us to fast-track your kickoff call</p>
              </a>
              
              <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                <CalendarIcon className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Book Your Call Now</h3>
                <p className="text-sm opacity-90">Schedule your 30-minute kickoff call</p>
              </a>
            </div>

            <div className="mt-12">
              <p className="text-gray-600 mb-4">
                Questions? Email us at{' '}
                <a href="mailto:support@clicktricksdb.com" className="text-[#01a2f1] hover:underline">
                  support@clicktricksdb.com
                </a>
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center text-[#01a2f1] hover:text-[#0182c4] font-medium transition-colors"
              >
                ← Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}