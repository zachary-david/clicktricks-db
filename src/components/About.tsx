"use client";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet <span style={{ color: '#01a2f1' }}>Garrett Johnson</span>
            </h2>
            <p className="text-lg text-gray-600">ClickTricks DB Founder</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  <img
                    src="https://i.ibb.co/22WPx2j/aboutus-garrett.png"
                    alt="Garrett Johnson, ClickTricks DB Founder"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZjNmNGY2Ii8+CjxjaXJjbGUgY3g9IjEyOCIgY3k9IjEwNCIgcj0iMzIiIGZpbGw9IiMwMWEyZjEiLz4KPHBhdGggZD0iTTEyOCAxNjBDMTAyLjk5NCAxNjAgODIgMTgwLjk5NCA4MiAyMDZIMTc0QzE3NCAxODAuOTk0IDE1My4wMDYgMTYwIDEyOCAxNjBaIiBmaWxsPSIjMDFhMmYxIi8+Cjx0ZXh0IHg9IjEyOCIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwMWEyZjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdhcnJldHQ8L3RleHQ+Cjwvc3ZnPg==";
                      target.alt = "Garrett Johnson - ClickTricks DB Founder";
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Founder
                </div>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
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
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Businesses Helped</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Simple</div>
                  <div className="text-sm text-gray-600">Solutions Focus</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Work With Me
                </a>
                <a
                  href="mailto:support@clicktricksdb.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
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