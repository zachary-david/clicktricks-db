"use client";

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section" style={{backgroundColor: '#041926 !important', background: '#041926 !important'}}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg" style={{color: 'white !important'}}>
              About Me
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl bg-gray-100 mb-4">
                <Image
                  src="https://i.ibb.co/22WPx2j/aboutus-garrett.png"
                  alt="Garrett Johnson, ClickTricks DB Founder"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">
                  <span style={{ color: '#01a2f1' }}>Garrett Johnson</span>
                </h3>
                <p className="text-white text-opacity-90">ClickTricks DB Founder</p>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4 text-lg text-white text-opacity-90 leading-relaxed">
                <p>
                  I help small business owners and solopreneurs use technology to grow their businesses—without the headaches.
                </p>
                
                <p>
                  I've spent years working in paid digital advertising and affiliate marketing. I've seen how the right tools can completely change a business for the better. But I've also watched too many business owners get stuck trying to figure out complicated systems that are supposed to help but just cause stress instead.
                </p>
                
                <p>
                  That's why I focus on keeping things simple. Whether you need help with your first Facebook ad, want to set up affiliate partnerships, or just can't figure out some new marketing tool, I'll show you what works and skip all the confusing stuff.
                </p>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center border border-white border-opacity-20">
                  <div className="text-2xl font-bold text-[#01a2f1] mb-1">500+</div>
                  <div className="text-sm text-white text-opacity-80">Businesses Helped</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center border border-white border-opacity-20">
                  <div className="text-2xl font-bold text-[#01a2f1] mb-1">5+</div>
                  <div className="text-sm text-white text-opacity-80">Years Experience</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center border border-white border-opacity-20">
                  <div className="text-2xl font-bold text-[#01a2f1] mb-1">Simple</div>
                  <div className="text-sm text-white text-opacity-80">Solutions Focus</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#01a2f1] text-white font-semibold rounded-lg hover:bg-[#0182c4] transition-colors"
                >
                  Work With Me
                </a>
                <a
                  href="mailto:support@clicktricksdb.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white border-opacity-30 text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}