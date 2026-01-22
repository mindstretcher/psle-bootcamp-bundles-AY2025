import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, ChevronRight } from 'lucide-react';

const WAITLIST_URL = 'https://sprw.io/stt-d7RnQ';

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-16 px-4 bg-gradient-to-r from-educational-blue to-blue-600 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
          <Bell className="h-8 w-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready for PSLE 2026?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
          Be the first to know when our 2026 PSLE Bootcamps open for registration. Join the waitlist to get notified early.
        </p>
        <Button
          size="lg"
          className="bg-white text-educational-blue hover:bg-blue-50 transition-colors duration-300 font-medium text-lg px-8"
          onClick={() => window.open(WAITLIST_URL, '_blank')}
        >
          Join Waitlist <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-blue-200 mt-6">
          We'll notify you as soon as registration opens for 2026.
        </p>
      </div>
    </section>
  );
};

export default WaitlistSection;
