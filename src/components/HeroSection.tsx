import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, BarChart, Award, Info } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const WAITLIST_URL = 'https://sprw.io/stt-d7RnQ';

const HeroSection = () => {
  
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-educational-dark animate-fade-in-up font-display">
          <span className="block text-5xl sm:text-6xl md:text-7xl text-educational-blue mb-3">Journey to PSLE 2026</span>
          <span className="block text-educational-dark">with our Flagship Bootcamps</span>
        </h1>

        {/* Coming soon callout */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <Badge
            variant="outline"
            className="py-1.5 px-3 md:py-2 md:px-4 text-sm md:text-base font-medium bg-blue-50 border-blue-200 text-educational-blue rounded-full inline-flex items-center gap-1 md:gap-1.5"
          >
            <Info className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
            <span>
              <b>2026 Bootcamps Coming Soon</b> – Join the waitlist to get notified
            </span>
          </Badge>
        </div>

        <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Our flagship PSLE Revision Bootcamps help students prepare for PSLE success. Over the years, thousands of P6 students have benefited from our focused revision and proven exam strategies and achieved outstanding PSLE results.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 font-medium rounded-full bg-educational-blue hover:bg-blue-700 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
          onClick={() => window.open(WAITLIST_URL, '_blank')}
        >
          Join Waitlist <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      {/* Track record stats with icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center hover:shadow-md transition-all duration-300 group">
          <div className="bg-pastel-blue w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <TrendingUp className="h-6 w-6 text-educational-blue" />
          </div>
          <span className="text-3xl font-bold text-educational-dark">2 in 3</span>
          <span className="text-slate-600 text-sm mt-1">Achieved <b>AL1 & AL2</b> in their Mind Stretcher subjects</span>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center hover:shadow-md transition-all duration-300 group">
          <div className="bg-pastel-teal w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <BarChart className="h-6 w-6 text-educational-teal" />
          </div>
          <span className="text-3xl font-bold text-educational-dark">50%+</span>
          <span className="text-slate-600 text-sm mt-1">Achieved a PSLE score of <b>8 and lower</b></span>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center hover:shadow-md transition-all duration-300 group">
          <div className="bg-pastel-yellow w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Award className="h-6 w-6 text-amber-500" />
          </div>
          <span className="text-3xl font-bold text-educational-dark">35%</span>
          <span className="text-slate-600 text-sm mt-1">Scored <b>AL1</b> in their Mind Stretcher subjects</span>
        </div>
      </div>
      
      {/* Abstract shape decorations */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-pastel-blue opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pastel-teal opacity-30 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
