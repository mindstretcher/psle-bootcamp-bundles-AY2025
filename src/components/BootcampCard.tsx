import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { redirectToCheckout } from '@/lib/helper';

interface BootcampCardProps {
  title: string;
  description: string;
  formats: string[];
  objectives: string[];
  index: number;
  icon?: React.ReactNode;
  imageSrc?: string;
  featured?: boolean;
  category?: 'bootcamp' | 'welcome-pack' | 'timely-support';
  showLearnMore?: boolean;
  hideFormats?: boolean;
  learnMoreUrl?: string;
}

const BootcampCard: React.FC<BootcampCardProps> = ({
  title,
  description,
  formats,
  objectives,
  index,
  icon,
  imageSrc,
  featured = false,
  category = 'bootcamp',
  showLearnMore = false,
  hideFormats = false,
  learnMoreUrl = ''
}: BootcampCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [activeMode, setActiveMode] = useState('online');
  
  // Category-based styles - text only, no borders
  const categoryTextColor = {
    'bootcamp': 'text-educational-blue',
    'welcome-pack': 'text-teal-600',
    'timely-support': 'text-amber-600'
  };

  return (
    <Card 
      className={`border border-slate-100 
                 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden 
                 animate-fade-in-up
                 h-full flex flex-col ${featured ? 'ring-1 ring-educational-blue/10' : ''}`} 
      style={{ animationDelay: `${index * 75}ms` }}
    >
      <CardHeader className={`pb-2 flex items-start gap-3 ${featured ? 'border-b border-slate-100' : ''}`}>
        {imageSrc ? (
          <div className="w-full overflow-hidden rounded-md mb-2">
            <AspectRatio ratio={16/9} className="bg-slate-100">
              <img 
                src={imageSrc} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        ) : icon ? (
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mt-1">{icon}</div>
        ) : null}
        <div className="flex-grow">
          <div className="mb-1">
            {category === 'bootcamp' && (
              <span className="text-xs font-medium text-educational-blue uppercase tracking-wider">Bootcamp</span>
            )}
            {category === 'welcome-pack' && (
              <span className="text-xs font-medium text-teal-600 uppercase tracking-wider">Welcome Pack</span>
            )}
            {category === 'timely-support' && (
              <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">Timely Support</span>
            )}
          </div>
          <CardTitle className="text-xl text-educational-dark font-display">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-sm text-slate-600 mb-4">
          {description}
        </CardDescription>
        
        {/* Custom section for Power Up Bootcamp */}
        {title === "PSLE Power Up Bootcamp" && (
          <div className="mb-4">
            {/* Mode Toggle */}
            <div className="flex justify-center mb-3">
              <div className="inline-flex p-1 bg-blue-50 rounded-lg">
                <button 
                  onClick={() => setActiveMode('online')} 
                  className={`px-3 py-1 text-xs font-medium rounded-md transition ${activeMode === 'online' ? 'bg-white shadow-sm text-educational-blue' : 'text-slate-600 hover:bg-blue-100/50'}`}
                >
                  Online
                </button>
                <button 
                  onClick={() => setActiveMode('physical')} 
                  className={`px-3 py-1 text-xs font-medium rounded-md transition ${activeMode === 'physical' ? 'bg-white shadow-sm text-educational-blue' : 'text-slate-600 hover:bg-blue-100/50'}`}
                >
                  Physical
                </button>
              </div>
            </div>
            
            {/* Online Mode Content */}
            {activeMode === 'online' && (
              <>
                {/* Power Up Workshops Section */}
                <div className="bg-slate-50 rounded-md p-3 mb-3">
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-slate-700 uppercase tracking-wide">POWER UP WORKSHOPS (ONLINE)</h4>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center">
                      <span>Jun 2025</span>
                      <span className="mx-1">|</span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        From MS: $162.50, Non-MS: $182.50
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div className="font-medium text-sm">English, Maths, Science, Chinese, Higher Chinese</div>
                  </div>
                </div>

                {/* Bonus Section */}
                <div className="bg-slate-50 rounded-md p-3 mb-3">
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-slate-700 uppercase tracking-wide">BONUS SEGMENTS</h4>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center">
                      <span>Jun-Jul 2025</span>
                      <span className="mx-1">|</span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        Free
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div className="font-medium text-sm">Parent Briefings</div>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div className="font-medium text-sm">Student Motivational Segment</div>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div className="font-medium text-sm">Practice Papers Live Q&A</div>
                  </div>
                </div>
                
                {/* Per Subject Price */}
                <div className="border border-dashed border-educational-blue/50 rounded-md p-3 mb-3 bg-blue-50/30">
                  <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium text-slate-700 mb-1">Per Subject Price:</div>
                    <div className="flex flex-col gap-2">
                      <div className="grid grid-cols-5 text-xs">
                        <div className="col-span-2 font-medium"></div>
                        <div className="font-medium text-slate-600">MS</div>
                        <div className="font-medium text-slate-600">Non-MS</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">1 subject</div>
                        <div className="text-slate-700">$290</div>
                        <div className="text-slate-700">$340</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">2 subjects</div>
                        <div className="text-slate-700">$220</div>
                        <div className="text-slate-700">$250</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">3 subjects</div>
                        <div className="text-slate-700">$186.67</div>
                        <div className="text-slate-700">$210</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">4 subjects</div>
                        <div className="text-slate-700">$162.50</div>
                        <div className="text-slate-700">$182.50</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">HCL add-on</div>
                        <div className="text-slate-700">$140</div>
                        <div className="text-slate-700">$160</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Full Bootcamp Price */}
                <div className="border border-dashed border-educational-blue/50 rounded-md p-3 mb-3 bg-blue-50/30">
                  <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium text-slate-700">Full Bootcamp Price (all subjects):</div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-medium text-slate-600">MS:</div>
                        <span className="line-through text-slate-500 text-sm">$1240</span>
                        <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$790</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-medium text-slate-600">Non-MS:</div>
                        <span className="line-through text-slate-500 text-sm">$1520</span>
                        <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$890</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* Physical Mode Content */}
            {activeMode === 'physical' && (
              <>
                {/* Power Up Workshops Section */}
                <div className="bg-slate-50 rounded-md p-3 mb-3">
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-slate-700 uppercase tracking-wide">POWER UP WORKSHOPS (PHYSICAL)</h4>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center">
                      <span>Jun 2025</span>
                      <span className="mx-1">|</span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        From MS: $222.50, Non-MS: $242.50
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div className="font-medium text-sm">English, Maths, Science, Chinese, Higher Chinese</div>
                  </div>
                </div>

                {/* Bonus Section */}
                <div className="bg-slate-50 rounded-md p-3 mb-3">
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-slate-700 uppercase tracking-wide">BONUS SEGMENTS</h4>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center">
                      <span>Jun-Jul 2025</span>
                      <span className="mx-1">|</span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        Free
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div className="font-medium text-sm">Parent Briefings</div>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div className="font-medium text-sm">Student Motivational Segment</div>
                  </div>
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div className="font-medium text-sm">Practice Papers Live Q&A</div>
                  </div>
                </div>

                {/* Per Subject Price */}
                <div className="border border-dashed border-educational-blue/50 rounded-md p-3 mb-3 bg-blue-50/30">
                  <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium text-slate-700 mb-1">Per Subject Price:</div>
                    <div className="flex flex-col gap-2">
                      <div className="grid grid-cols-5 text-xs">
                        <div className="col-span-2 font-medium"></div>
                        <div className="font-medium text-slate-600">MS</div>
                        <div className="font-medium text-slate-600">Non-MS</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">1 subject</div>
                        <div className="text-slate-700">$380</div>
                        <div className="text-slate-700">$430</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">2 subjects</div>
                        <div className="text-slate-700">$290</div>
                        <div className="text-slate-700">$320</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">3 subjects</div>
                        <div className="text-slate-700">$250</div>
                        <div className="text-slate-700">$273.33</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">4 subjects</div>
                        <div className="text-slate-700">$222.50</div>
                        <div className="text-slate-700">$242.50</div>
                      </div>
                      
                      <div className="grid grid-cols-5 text-xs items-center">
                        <div className="col-span-2 font-medium">HCL add-on</div>
                        <div className="text-slate-700">$200</div>
                        <div className="text-slate-700">$240</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Full Bootcamp Price */}
                <div className="border border-dashed border-educational-blue/50 rounded-md p-3 mb-3 bg-blue-50/30">
                  <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium text-slate-700">Full Bootcamp Price (all subjects):</div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-medium text-slate-600">MS:</div>
                        <span className="line-through text-slate-500 text-sm">$1660</span>
                        <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$1090</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-medium text-slate-600">Non-MS:</div>
                        <span className="line-through text-slate-500 text-sm">$1960</span>
                        <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$1210</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        
        {/* Custom sections for English and Chinese Oral Bootcamps */}
        {(title === "PSLE English Oral Bootcamp" || title === "PSLE Chinese Oral Bootcamp") && (
          <div className="mb-4">
            {/* Introduction Webinar Section */}
            <div className="bg-slate-50 rounded-md p-3 mb-3">
              <div className="mb-3">
                <h4 className="text-xs font-medium text-slate-700 uppercase tracking-wide">INTRODUCTION WEBINAR</h4>
                <div className="text-xs text-slate-500 mt-0.5 flex items-center">
                  <span>May 2025</span>
                  <span className="mx-1">|</span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    Free
                  </span>
                </div>
              </div>
              <div className="flex items-start mb-2">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div className="font-medium text-sm">
                  {title === "PSLE English Oral Bootcamp" && "Ace PSLE English Oral Webinar"}
                  {title === "PSLE Chinese Oral Bootcamp" && "Ace PSLE Chinese Oral Webinar"}
                </div>
              </div>
            </div>
            
            {/* Oral Pack Section */}
            <div className="bg-slate-50 rounded-md p-3 mb-3">
              <div className="mb-3">
                <h4 className="text-xs font-medium text-slate-700 uppercase tracking-wide">
                  {title === "PSLE English Oral Bootcamp" && "ENGLISH ORAL PACK"}
                  {title === "PSLE Chinese Oral Bootcamp" && "CHINESE ORAL PACK"}
                </h4>
                <div className="text-xs text-slate-500 mt-0.5 flex items-center">
                  <span>
                    {title === "PSLE English Oral Bootcamp" && "Jun-Jul 2025"}
                    {title === "PSLE Chinese Oral Bootcamp" && "Jun 2025"}
                  </span>
                  <span className="mx-1">|</span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    MS: $360, Non-MS: $450
                  </span>
                </div>
              </div>
              
              <div className="flex items-start mb-2">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div className="font-medium text-sm">
                  {title === "PSLE English Oral Bootcamp" && "PSLE English Oral Workshop"}
                  {title === "PSLE Chinese Oral Bootcamp" && "PSLE Chinese Oral Workshop"}
                </div>
              </div>
              
              <div className="flex items-start mb-2">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div className="font-medium text-sm">1-1 Physical Mock Tests</div>
              </div>
              
              {title === "PSLE English Oral Bootcamp" && (
                <div className="flex items-start mb-2">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <div className="font-medium text-sm">Live Demo, Mass Consultations and Teachings</div>
                </div>
              )}
            </div>
            
            {/* Third Section - Different for each bootcamp */}
            <div className="bg-slate-50 rounded-md p-3 mb-3">
              <div className="mb-3">
                <h4 className="text-xs font-medium text-slate-700 uppercase tracking-wide">
                  {title === "PSLE English Oral Bootcamp" && "ENGLISH ORAL SBC WORKSHOPS"}
                  {title === "PSLE Chinese Oral Bootcamp" && "CHINESE ORAL FINAL SPRINT WORKSHOP"}
                </h4>
                <div className="text-xs text-slate-500 mt-0.5 flex items-center">
                  <span>
                    {title === "PSLE English Oral Bootcamp" && "Jul-Aug 2025"}
                    {title === "PSLE Chinese Oral Bootcamp" && "Aug 2025"}
                  </span>
                  <span className="mx-1">|</span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    {title === "PSLE English Oral Bootcamp" && "MS: $300, Non-MS: $360"}
                    {title === "PSLE Chinese Oral Bootcamp" && "MS: $150, Non-MS: $180"}
                  </span>
                </div>
              </div>
              
              <div className="flex items-start mb-2">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div className="font-medium text-sm">
                  {title === "PSLE English Oral Bootcamp" && "PSLE English Oral SBC Workshops"}
                  {title === "PSLE Chinese Oral Bootcamp" && "PSLE Chinese Oral Final Sprint Workshop"}
                </div>
              </div>
            </div>
            
            {/* Full Bootcamp Price */}
            <div className="border border-dashed border-educational-blue/50 rounded-md p-3 mb-3 bg-blue-50/30">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-slate-700">Full Bootcamp Price:</div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-medium text-slate-600">MS:</div>
                    {title === "PSLE English Oral Bootcamp" && (
                      <>
                        <span className="line-through text-slate-500 text-sm">$660</span>
                        <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$480</span>
                      </>
                    )}
                    {title === "PSLE Chinese Oral Bootcamp" && (
                      <>
                        <span className="line-through text-slate-500 text-sm">$510</span>
                        <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$420</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-medium text-slate-600">Non-MS:</div>
                    {title === "PSLE English Oral Bootcamp" && (
                      <>
                        <span className="line-through text-slate-500 text-sm">$810</span>
                        <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$630</span>
                      </>
                    )}
                    {title === "PSLE Chinese Oral Bootcamp" && (
                      <>
                        <span className="line-through text-slate-500 text-sm">$630</span>
                        <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$540</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Custom section for Last Lap Bootcamp */}
        {title === "PSLE Last Lap Bootcamp" && (
          <div className="mb-4">
            {/* Last Lap Workshops Section */}
            <div className="bg-slate-50 rounded-md p-3 mb-3">
              <div className="mb-3">
                <h4 className="text-xs font-medium text-slate-700 uppercase tracking-wide">LAST LAP WORKSHOPS</h4>
                <div className="text-xs text-slate-500 mt-0.5 flex items-center">
                  <span>Sep 2025</span>
                  <span className="mx-1">|</span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    From MS: $97.50, Non-MS: $105/subject
                  </span>
                </div>
              </div>
              <div className="flex items-start mb-2">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div className="font-medium text-sm">English, Maths, Science, Chinese, Higher Chinese</div>
              </div>
            </div>
            
            {/* Per Subject Price */}
            <div className="border border-dashed border-educational-blue/50 rounded-md p-3 mb-3 bg-blue-50/30">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-slate-700 mb-1">Per Subject Price:</div>
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-5 text-xs">
                    <div className="col-span-2 font-medium"></div>
                    <div className="font-medium text-slate-600">MS</div>
                    <div className="font-medium text-slate-600">Non-MS</div>
                  </div>
                  
                  <div className="grid grid-cols-5 text-xs items-center">
                    <div className="col-span-2 font-medium">1 subject</div>
                    <div className="text-slate-700">$220</div>
                    <div className="text-slate-700">$250</div>
                  </div>
                  
                  <div className="grid grid-cols-5 text-xs items-center">
                    <div className="col-span-2 font-medium">2 subjects</div>
                    <div className="text-slate-700">$150</div>
                    <div className="text-slate-700">$165</div>
                  </div>
                  
                  <div className="grid grid-cols-5 text-xs items-center">
                    <div className="col-span-2 font-medium">3 subjects</div>
                    <div className="text-slate-700">$120</div>
                    <div className="text-slate-700">$130</div>
                  </div>
                  
                  <div className="grid grid-cols-5 text-xs items-center">
                    <div className="col-span-2 font-medium">4 subjects</div>
                    <div className="text-slate-700">$97.50</div>
                    <div className="text-slate-700">$105</div>
                  </div>
                  
                  <div className="grid grid-cols-5 text-xs items-center">
                    <div className="col-span-2 font-medium">HCL add-on</div>
                    <div className="text-slate-700">$100</div>
                    <div className="text-slate-700">$130</div>
                  </div>
                  
                </div>
              </div>
            </div>
            
            {/* Full Bootcamp Price */}
            <div className="border border-dashed border-educational-blue/50 rounded-md p-3 mb-3 bg-blue-50/30">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-slate-700">Full Bootcamp Price (all subjects):</div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-medium text-slate-600">MS:</div>
                    <span className="line-through text-slate-500 text-sm">$980</span>
                    <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$490</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-medium text-slate-600">Non-MS:</div>
                    <span className="line-through text-slate-500 text-sm">$1130</span>
                    <span className="bg-educational-blue text-white font-bold px-2 py-0.5 rounded text-sm">$550</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="pt-3">
            {!hideFormats && formats.length > 0 && (
              <div className="mb-3">
                <h4 className="font-medium text-xs uppercase tracking-wider text-slate-500 mb-2">Format</h4>
                <div className="flex flex-wrap gap-2">
                  {formats.map((format, i) => (
                    <span key={i} className="inline-block px-2 py-1 bg-blue-50 text-educational-blue rounded-full text-xs">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <h4 className="font-medium text-xs uppercase tracking-wider text-slate-500 mb-2">What you'll get</h4>
            <ul className="space-y-2">
              {objectives.map((objective, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-educational-blue mr-2 mt-1.5"></span>
                  <span className="text-slate-700 text-sm">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="mt-3 text-educational-blue hover:text-educational-blue hover:bg-blue-50 w-full"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>View Less <ChevronUp className="ml-1 h-3 w-3" /></>
          ) : (
            <>View Details <ChevronDown className="ml-1 h-3 w-3" /></>
          )}
        </Button>
      </CardContent>
      
      <CardFooter className="pt-4 pb-6 px-6 flex gap-3">
        <Button 
          className="flex-1 bg-educational-blue hover:bg-educational-blue/90"
          onClick={() => redirectToCheckout()}
        >
          Register Now <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
        
        {showLearnMore && (
          <Button 
            variant="outline"
            className="flex-1 border-educational-blue text-educational-blue hover:bg-blue-50"
            onClick={() => window.open(learnMoreUrl, '_blank')}
          >
            Learn More <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BootcampCard;
