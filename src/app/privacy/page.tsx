import type { Metadata } from 'next';
import Link from 'next/link';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Privacy Policy | ClickTricks DB',
  description: 'Privacy Policy for ClickTricks DB Airtable CRM setup services',
  robots: {
    index: true,
    follow: true
  }
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen" style={{backgroundColor: '#041926'}}>
      {/* Header */}
      <header style={{backgroundColor: '#041926'}} className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Logo size="md" variant="dark" />
            </Link>
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4" style={{color: '#ffffff !important'}}>Privacy Policy</h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>

        <div className="max-w-none text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>Information We Collect</h2>
          <p className="mb-6 text-gray-300">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Fill out our contact form</li>
            <li>Request information about our Airtable CRM setup services</li>
            <li>Communicate with us via email or phone</li>
            <li>Subscribe to our newsletter or updates</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>How We Use Your Information</h2>
          <p className="mb-4 text-gray-300">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Send you information about our Airtable CRM setup services</li>
            <li>Improve our website and services</li>
            <li>Analyze website usage and traffic patterns</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>Cookies and Analytics</h2>
          <p className="mb-4 text-gray-300">
            We use Google Analytics and Google Tag Manager to understand how visitors use our website. 
            These services may collect information such as:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Pages you visit on our site</li>
            <li>Time and date of your visit</li>
            <li>Referring website</li>
          </ul>
          <p className="mb-6 text-gray-300">
            You can opt out of analytics tracking using our cookie banner or by adjusting your browser settings.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>Data Sharing</h2>
          <p className="mb-6 text-gray-300">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except as described in this policy. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Service providers who assist us in operating our website or conducting our business</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Third parties with your explicit consent</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>Data Security</h2>
          <p className="mb-6 text-gray-300">
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no 
            method of transmission over the internet is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>Your Rights</h2>
          <p className="mb-4 text-gray-300">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Object to processing of your personal information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>Contact Us</h2>
          <p className="mb-4 text-gray-300">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700">
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> admin@amarilloautomation.com
            </p>
            <p className="text-gray-300">
              <strong>Subject Line:</strong> Privacy Policy Inquiry
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>Updates to This Policy</h2>
          <p className="mb-6 text-gray-300">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page 
            with an updated "Last modified" date. We encourage you to review this policy periodically.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{backgroundColor: '#041926'}} className="border-t border-gray-700 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} ClickTricks DB. All rights reserved.
            </p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-[#01a2f1] hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#01a2f1] hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}