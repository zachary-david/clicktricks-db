"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#demo", label: "DEMO" },
    { href: "#features", label: "FEATURES" },
    { href: "#how-it-works", label: "HOW IT WORKS" },
    { href: "#pricing", label: "PRICING" },
    { href: "#faq", label: "FAQ" },
    { href: "#about", label: "ABOUT" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-grid-bottom ${
        isScrolled
          ? "backdrop-blur-md shadow-md"
          : ""
      }`}
      style={{backgroundColor: isScrolled ? '#041926ee' : '#041926'}}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo size="md" variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-item transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                style={{color: 'white'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#01a2f1'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}
                role="menuitem"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://airtable.com/appBZnf3TjwoxnVU9/paguBKmCn5fyVfNsk/form" target="_blank" rel="noopener noreferrer" 
              className="btn btn-primary text-xs font-bold py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Get your custom Airtable CRM setup"
            >
              Get Your Airtable Setup
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 min-w-[44px] min-h-[44px] rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ transform: isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="menu"
          aria-labelledby="mobile-menu-button"
        >
          <div className="py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-item transition-all duration-200 p-4 rounded-lg hover:bg-gray-100 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  style={{ 
                    color: 'white',
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="https://airtable.com/appBZnf3TjwoxnVU9/paguBKmCn5fyVfNsk/form" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary w-full text-center text-xs font-bold py-2.5 px-3 min-h-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Get your custom Airtable CRM setup"
                >
                  Get Your Airtable Setup
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}