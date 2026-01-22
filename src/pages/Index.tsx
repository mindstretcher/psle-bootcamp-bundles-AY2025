import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import BootcampSection from '@/components/BootcampSection';
import TeacherSection from '@/components/TeacherSection';
import FAQSection from '@/components/FAQSection';
import ObsessedSection from '@/components/ObsessedSection';
import WaitlistBanner from '@/components/WaitlistBanner';
import WaitlistSection from '@/components/WaitlistSection';
import { ChevronRight } from 'lucide-react';

const WAITLIST_URL = 'https://sprw.io/stt-d7RnQ';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle both local scrolling and URL hash updating
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the header height to offset the scroll position
      const headerHeight = document.querySelector('header')?.offsetHeight || 64;
      
      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      
      // Calculate the absolute position by adding the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      // Scroll to the element with the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without triggering a page reload
      window.history.pushState(null, '', `#${id}`);
    }
    setIsMenuOpen(false);
  };

  // Add padding to the top of each section to account for the header height
  useEffect(() => {
    const updateSectionPadding = () => {
      const headerHeight = document.querySelector('header')?.offsetHeight || 64;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        // Add a smaller scroll margin to account for the header height plus a small gap
        (section as HTMLElement).style.scrollMarginTop = `${headerHeight + 8}px`;
      });
    };
    
    // Update padding when the component mounts and when window is resized
    updateSectionPadding();
    window.addEventListener('resize', updateSectionPadding);
    
    // Check for hash in URL on initial load and scroll to that section
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the # character
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const headerHeight = document.querySelector('header')?.offsetHeight || 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100); // Small delay to ensure DOM is fully loaded
        }
      }
    };
    
    // Handle initial hash and hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('resize', updateSectionPadding);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50 flex flex-col w-full">
        {/* 2026 Waitlist Banner */}
        <div className="w-full">
          <WaitlistBanner />
        </div>
        
        {/* Navigation */}
        <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="https://www.mindstretcher.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://main-website.sgp1.cdn.digitaloceanspaces.com/journey-to-psle-bootcamp-bundles/c9bd57da-c8ee-4e55-981a-c3def0189823.png" 
                alt="Mind Stretcher Logo" 
                className="h-10" 
              />
            </a>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('why-it-works')} 
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                Why It Works
              </button>
              <button
                onClick={() => scrollToSection('bootcamp-bundles')}
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                Bootcamps
              </button>
              {/* Schedules and Pricing sections removed - 2026 details not ready yet */}
              <button 
                onClick={() => scrollToSection('teachers')} 
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                Teachers
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                FAQ
              </button>
            </div>
          </nav>

          {/* Waitlist Button */}
          <div className="flex items-center">
            <Button
              className="bg-educational-blue hover:bg-blue-700"
              onClick={() => window.open(WAITLIST_URL, '_blank')}
            >
              Join Waitlist <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      </div>

      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Video Section */}
        <VideoSection />
        
        {/* "We're Obsessed" Section */}
        <section id="why-it-works" className="pt-0">
          <ObsessedSection />
        </section>
        
        {/* Bootcamp Details Section */}
        <section id="bootcamp-bundles" className="pt-0">
          <BootcampSection />
        </section>
        
        {/* Bootcamp Dates & Timings Section - Hidden until 2026 details are ready */}
        
        {/* Pricing Section removed as bundle sales are over */}
        
        {/* Teachers Section */}
        <section id="teachers" className="pt-0">
          <TeacherSection />
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="pt-0">
          <FAQSection />
        </section>
        
        {/* Waitlist Section */}
        <WaitlistSection />
      </main>
      
      {/* Simplified Footer */}
      <footer className="bg-white text-slate-600 py-8 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <a href="https://www.mindstretcher.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://main-website.sgp1.cdn.digitaloceanspaces.com/journey-to-psle-bootcamp-bundles/c9bd57da-c8ee-4e55-981a-c3def0189823.png" 
                  alt="Mind Stretcher Logo" 
                  className="h-10" 
                />
              </a>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
              <button
                onClick={() => scrollToSection('why-it-works')}
                className="text-slate-600 hover:text-educational-blue transition-colors text-sm"
              >
                Why It Works
              </button>
              <button
                onClick={() => scrollToSection('bootcamp-bundles')}
                className="text-slate-600 hover:text-educational-blue transition-colors text-sm"
              >
                Bootcamps
              </button>
              <button
                onClick={() => scrollToSection('teachers')}
                className="text-slate-600 hover:text-educational-blue transition-colors text-sm"
              >
                Teachers
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-slate-600 hover:text-educational-blue transition-colors text-sm"
              >
                FAQ
              </button>
            </nav>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-slate-200 text-sm">
            <p>&copy; {new Date().getFullYear()} Mind Stretcher Education Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
