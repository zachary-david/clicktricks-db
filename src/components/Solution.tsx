"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import CRMDashboardView from "./CRMDashboardView";
import CRMLeadsView from "./CRMLeadsView";
import CRMPipelineView from "./CRMPipelineView";
import SectionHeader from "./SectionHeader";

export default function Solution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const views = [
    {
      title: "Follow-ups Due Today",
      description: "Simple, automated lead tracking showing exactly which prospects need attention",
      component: <CRMDashboardView />
    },
    {
      title: "All Active Leads",
      description: "Complete Airtable database with interaction history",
      component: <CRMLeadsView />
    },
    {
      title: "Hot Prospects",
      description: "High-value opportunities prioritized by deal size",
      component: <CRMPipelineView />
    }
  ];

  // Auto-advance slideshow (desktop only)
  useEffect(() => {
    if (isPaused) return;
    
    // Only auto-advance on desktop
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (!mediaQuery.matches) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % views.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused, views.length]);

  // Handle manual navigation
  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Resume auto-advance after 8 seconds
    setTimeout(() => setIsPaused(false), 8000);
  }, []);

  // Handle mobile swipe navigation
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + views.length) % views.length);
  }, [views.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % views.length);
  }, [views.length]);

  // Touch/swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Swipe left - next slide
        handleNext();
      } else {
        // Swipe right - previous slide
        handlePrev();
      }
    }
    
    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [handleNext, handlePrev]);

  return (
    <section id="demo" className="section bg-[#088FDC]">
      <div className="container">
        <SectionHeader 
          text="Built on Airtable" 
          apps={[
            { name: "Airtable Tables", icon: "🗃️" },
            { name: "Custom Views", icon: "👀" },
            { name: "Automations", icon: "⚡" }
          ]}
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-6 text-white drop-shadow-lg">
            See Your Simple, Automated Lead Tracking System in Action:{" "}
            <span className="text-gradient">Professional Lead Management Without the Complexity</span>
          </h2>
          <p className="text-xl text-white text-opacity-90">
            Simple, automated lead tracking with custom Airtable views and automated follow-ups - set up in 30 minutes
          </p>
        </div>

        {/* Desktop: Overlapping slideshow */}
        <div className="hidden md:block">
          {/* View title and description */}
          <div className="text-center mb-8 h-20">
            <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-700 ease-in-out drop-shadow-md">
              {views[activeIndex].title}
            </h3>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto transition-all duration-700 ease-in-out">
              {views[activeIndex].description}
            </p>
          </div>

          {/* Overlapping cards container */}
          <div className="relative w-full max-w-5xl mx-auto h-[500px] mb-8">
            {views.map((view, index) => {
              const relativeIndex = index - activeIndex;
              const isActive = index === activeIndex;
              const isPrev = relativeIndex === -1 || (activeIndex === 0 && index === views.length - 1);
              const isNext = relativeIndex === 1 || (activeIndex === views.length - 1 && index === 0);
              
              let transform = 'translateX(0) scale(1)';
              let zIndex = 3;
              let opacity = 1;
              
              if (isPrev) {
                transform = 'translateX(-100px) scale(0.9)';
                zIndex = 1;
                opacity = 0.7;
              } else if (isNext) {
                transform = 'translateX(100px) scale(0.9)';
                zIndex = 2;
                opacity = 0.7;
              } else if (!isActive) {
                transform = 'translateX(0) scale(0.8)';
                zIndex = 0;
                opacity = 0;
              }

              return (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity
                  }}
                  onClick={() => isActive ? null : handleDotClick(index)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  role="button"
                  aria-label={`View ${view.title}`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden border-2 ${isActive ? 'border-[#01a2f1]' : 'border-blue-200'} h-full`}>
                    {view.component}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3" role="tablist" aria-label="Slideshow navigation">
            {views.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                }`}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to ${views[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Traditional carousel */}
        <div className="md:hidden">
          {/* View title and description */}
          <div className="text-center mb-6 px-4">
            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
              {views[activeIndex].title}
            </h3>
            <p className="text-white text-opacity-90 text-sm">
              {views[activeIndex].description}
            </p>
          </div>

          {/* Carousel container */}
          <div 
            className="relative overflow-hidden mb-6"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {views.map((view, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-white rounded-xl shadow-xl overflow-hidden border-2 ${
                    index === activeIndex ? 'border-[#01a2f1]' : 'border-[#01a2f1]/50'
                  }`}>
                    {view.component}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next buttons */}
          <div className="flex justify-between items-center px-4 mb-4">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white rounded-lg hover:bg-opacity-30 transition-colors"
              aria-label="Previous view"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>
            
            {/* Mobile dots */}
            <div className="flex gap-2" role="tablist" aria-label="Slideshow navigation">
              {views.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white bg-opacity-50'
                  }`}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to ${views[index].title}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white rounded-lg hover:bg-opacity-30 transition-colors"
              aria-label="Next view"
            >
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto border-2 border-[#01a2f1]">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              🎯 Never Miss Another Follow-Up Again
            </p>
            <p className="text-gray-600 mb-6">
              Join hundreds of freelancers and small teams who've transformed their lead management with our custom Airtable CRM setup
            </p>
            <a
              href="#booking"
              className="btn-primary btn-lg inline-flex items-center gap-2"
            >
              Get Started Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}