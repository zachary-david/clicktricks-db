import type { Metadata } from 'next';
import Link from 'next/link';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Terms of Service | ClickTricks',
  description: 'Terms of Service for ClickTricks Airtable CRM setup services',
  robots: {
    index: true,
    follow: true
  }
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-white mb-4" style={{color: '#ffffff !important'}}>Terms of Service</h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>

        <div className="max-w-none text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>1. Service Description</h2>
          <p className="mb-6 text-gray-300">
            ClickTricks provides custom Airtable CRM setup and configuration services 
            for freelancers, solopreneurs, and small teams. Our services include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Custom Airtable database design and setup</li>
            <li>Automated workflow configuration</li>
            <li>Dashboard and view creation</li>
            <li>Training and documentation</li>
            <li>30-day support guarantee</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>2. Payment Terms</h2>
          <p className="mb-4 text-gray-300">
            Our service pricing is structured as follows:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li><strong>Setup Fee:</strong> Beginning at $99 one-time payment for CRM setup (price may be higher based on project needs and complexity)</li>
            <li><strong>Airtable Software:</strong> $10/month paid directly to Airtable</li>
            <li>Payment for setup services is due upon completion unless otherwise agreed</li>
            <li>Setup fees are non-refundable once work has begun</li>
            <li>Airtable subscription fees are separate and managed by Airtable directly</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>3. Service Limitations and Scope</h2>
          <p className="mb-4 text-gray-300">
            Our service includes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Initial CRM setup and configuration</li>
            <li>Training session (up to 1 hour)</li>
            <li>Basic documentation and user guide</li>
            <li>30-day support for setup-related questions</li>
          </ul>
          <p className="mb-6 text-gray-300">
            <strong>Please note:</strong> We provide setup and initial training. Ongoing support, 
            major modifications, or additional training beyond the initial scope may be subject 
            to additional fees. We are not responsible for data loss, system downtime, or 
            Airtable service issues after project completion.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>4. Client Responsibilities</h2>
          <p className="mb-4 text-gray-300">
            To ensure successful project completion, clients are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Providing accurate business requirements and data structure needs</li>
            <li>Setting up and maintaining their own Airtable account and subscription</li>
            <li>Attending the training session and reviewing provided documentation</li>
            <li>Regular data backups and account security maintenance</li>
            <li>Communicating any changes in requirements promptly</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>5. Intellectual Property</h2>
          <p className="mb-6 text-gray-300">
            Upon full payment, you own all data, configurations, and customizations created 
            specifically for your Airtable CRM implementation. However, our proprietary 
            methodologies, templates, and general business processes remain the intellectual 
            property of ClickTricks.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>6. Support and Guarantee</h2>
          <p className="mb-4 text-gray-300">
            We provide a 30-day support guarantee, which includes:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li>Bug fixes related to initial setup</li>
            <li>Clarification on system functionality</li>
            <li>Minor adjustments to initial configuration</li>
          </ul>
          <p className="mb-6 text-gray-300">
            This guarantee does not cover new feature requests, major structural changes, 
            or issues arising from client modifications to the system.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>7. Limitation of Liability</h2>
          <p className="mb-6 text-gray-300">
            Our total liability for any claims arising from our services is limited to the 
            amount paid for the specific service in question. We are not liable for indirect, 
            incidental, consequential, or punitive damages, including but not limited to loss 
            of profits, data, or business opportunities.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>8. Cancellation and Refunds</h2>
          <p className="mb-6 text-gray-300">
            Due to the custom nature of our services, we do not offer refunds once work has 
            begun. However, if you need to cancel before we start your project, please contact 
            us immediately. Cancellations made before work begins are eligible for a full refund.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>9. Privacy and Data Protection</h2>
          <p className="mb-6 text-gray-300">
            We respect your privacy and handle your data in accordance with our Privacy Policy. 
            Any business information shared during the setup process will be kept confidential 
            and used solely for the purpose of providing our services.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>10. Changes to Terms</h2>
          <p className="mb-6 text-gray-300">
            We reserve the right to modify these terms at any time. Changes will be posted on 
            this page with an updated date. Continued use of our services after changes are 
            posted constitutes acceptance of the revised terms.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white" style={{color: "#ffffff !important"}}>11. Contact Information</h2>
          <p className="mb-4 text-gray-300">
            For questions about these terms or our services, please contact us:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> admin@amarilloautomation.com
            </p>
            <p className="text-gray-300">
              <strong>Subject Line:</strong> Terms of Service Inquiry
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{backgroundColor: '#041926'}} className="border-t border-gray-700 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} ClickTricks. All rights reserved.
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