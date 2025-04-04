import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, BadgePercent } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  // State management
  const [studentType, setStudentType] = useState<'ms' | 'nonMs'>('ms');
  const [subjectCount, setSubjectCount] = useState<'3' | '4' | '5'>('3');
  const [formats, setFormats] = useState({
    standard: 'online' as 'online' | 'physical',
    booster: 'online' as 'online' | 'physical',
    mega: 'online' as 'online' | 'physical',
  });

  // Pricing data structure - Updated based on the provided image
  const pricingData = {
    ms: {
      '3': {
        online: {
          standard: { regular: 920, discounted: 782 },
          booster: { regular: 1400, discounted: 1120 },
          mega: { regular: 1820, discounted: 1365 }
        },
        physical: {
          standard: { regular: 1110, discounted: 943.50 },
          booster: { regular: 1590, discounted: 1272 },
          mega: { regular: 2010, discounted: 1507.50 }
        }
      },
      '4': {
        online: {
          standard: { regular: 1040, discounted: 884 },
          booster: { regular: 1520, discounted: 1216 },
          mega: { regular: 1940, discounted: 1455 }
        },
        physical: {
          standard: { regular: 1280, discounted: 1088 },
          booster: { regular: 1760, discounted: 1408 },
          mega: { regular: 2180, discounted: 1635 }
        }
      },
      '5': {
        online: {
          standard: { regular: 1280, discounted: 1088 },
          booster: { regular: 1760, discounted: 1408 },
          mega: { regular: 2180, discounted: 1635 }
        },
        physical: {
          standard: { regular: 1580, discounted: 1343 },
          booster: { regular: 2060, discounted: 1648 },
          mega: { regular: 2480, discounted: 1860 }
        }
      }
    },
    nonMs: {
      '3': {
        online: {
          standard: { regular: 1020, discounted: 867 },
          booster: { regular: 1650, discounted: 1320 },
          mega: { regular: 2190, discounted: 1642.50 }
        },
        physical: {
          standard: { regular: 1210, discounted: 1028.50 },
          booster: { regular: 1840, discounted: 1472 },
          mega: { regular: 2380, discounted: 1785 }
        }
      },
      '4': {
        online: {
          standard: { regular: 1150, discounted: 977.50 },
          booster: { regular: 1780, discounted: 1424 },
          mega: { regular: 2320, discounted: 1740 }
        },
        physical: {
          standard: { regular: 1390, discounted: 1181.50 },
          booster: { regular: 2020, discounted: 1616 },
          mega: { regular: 2560, discounted: 1920 }
        }
      },
      '5': {
        online: {
          standard: { regular: 1440, discounted: 1224 },
          booster: { regular: 2070, discounted: 1656 },
          mega: { regular: 2610, discounted: 1957.50 }
        },
        physical: {
          standard: { regular: 1760, discounted: 1496 },
          booster: { regular: 2390, discounted: 1912 },
          mega: { regular: 2930, discounted: 2197.50 }
        }
      }
    }
  };

  // Helper function to format price
  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  // Helper function to update format for a specific bundle
  const updateFormat = (bundle: 'standard' | 'booster' | 'mega', format: 'online' | 'physical') => {
    setFormats(prev => ({ ...prev, [bundle]: format }));
  };

  // Helper function to get subject text based on count
  const getSubjectsText = (count: string) => {
    switch(count) {
      case '3': return 'Eng, Math, Sci';
      case '4': return 'Eng, Math, Sci, Chi';
      case '5': return 'Eng, Math, Sci, Chi, HCL';
      default: return 'Eng, Math, Sci';
    }
  };

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-educational-dark font-display">
            PSLE Bootcamp Bundles Pricing
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Save up to 25% with our PSLE Bootcamp Bundles.
          </p>
        </div>

        {/* Student Type Toggle */}
        <div className="max-w-lg mx-auto mb-10 text-center">
          <h3 className="font-semibold mb-2">Student Type</h3>
          <p className="text-sm text-slate-500 mb-4">
            MS students are those currently enrolled in our weekly P6 programmes
          </p>
          <div className="flex justify-center">
            <div className="toggle-container">
              <button 
                className={`toggle-button ${studentType === 'ms' ? 'active' : ''}`}
                onClick={() => setStudentType('ms')}
              >
                MS Student
              </button>
              <button 
                className={`toggle-button ${studentType === 'nonMs' ? 'active' : ''}`}
                onClick={() => setStudentType('nonMs')}
              >
                Non-MS Student
              </button>
            </div>
          </div>
        </div>

        {/* Subject Selection */}
        <div className="max-w-lg mx-auto mb-12 text-center">
          <h3 className="font-semibold mb-2">Subject Selection</h3>
          <p className="text-sm text-slate-500 mb-4">
            For Power Up &amp; Last Lap Bootcamps only
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {(['3', '4', '5'] as const).map((count) => (
              <button
                key={count}
                onClick={() => setSubjectCount(count)}
                className={`subject-btn ${subjectCount === count ? 'active' : ''}`}
              >
                {count} Subjects
                <span className="block text-xs mt-1 text-gray-500">
                  {getSubjectsText(count)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Standard Bundle */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
            <div className="h-2 bg-[#6366f1] w-full absolute top-0"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-1">Standard Bundle</h3>
              <p className="text-sm text-gray-600 mb-3">2 bootcamps: Power Up &amp; Last Lap</p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mb-4">
                <BadgePercent className="h-3.5 w-3.5 mr-1" /> 15% Savings
              </Badge>

              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                {/* Power Up Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Power Up Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        {getSubjectsText(subjectCount)}
                      </span>
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center">
                        <span className="text-xs text-slate-500 mr-2">Format:</span>
                        <div className="format-toggle">
                          <button 
                            className={`format-button ${formats.standard === 'online' ? 'active' : ''}`}
                            onClick={() => updateFormat('standard', 'online')}
                          >
                            Online
                          </button>
                          <button 
                            className={`format-button ${formats.standard === 'physical' ? 'active' : ''}`}
                            onClick={() => updateFormat('standard', 'physical')}
                          >
                            Physical
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Last Lap Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Last Lap Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        {getSubjectsText(subjectCount)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* In Every Bundle Section */}
                <div className="mt-4 mb-2">
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-medium">Included</h4>
                </div>
                
                {/* Welcome Pack */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Revision Resources</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        Welcome Pack
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Online Q&A Consultations */}
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Online Q&A Consultations</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        10 hours of targeted support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-sm text-slate-500">
                  <span className="line-through">
                    ${formatPrice(pricingData[studentType][subjectCount][formats.standard].standard.regular)}
                  </span>
                </div>
                <div className="text-3xl font-bold text-educational-dark">
                  ${formatPrice(pricingData[studentType][subjectCount][formats.standard].standard.discounted)}
                </div>
              </div>

              <Button className="w-full bg-educational-blue hover:bg-educational-blue/90 rounded-md transition-all duration-200 hover:shadow">
                Register Now
              </Button>
            </div>
          </div>

          {/* Booster Bundle */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
            <div className="h-2 bg-[#8b5cf6] w-full absolute top-0"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-1">Booster Bundle</h3>
              <p className="text-sm text-gray-600 mb-3">3 bootcamps: Power Up, Last Lap &amp; English Oral</p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mb-4">
                <BadgePercent className="h-3.5 w-3.5 mr-1" /> 20% Savings
              </Badge>

              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                {/* Power Up Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Power Up Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        {getSubjectsText(subjectCount)}
                      </span>
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center">
                        <span className="text-xs text-slate-500 mr-2">Format:</span>
                        <div className="format-toggle">
                          <button 
                            className={`format-button ${formats.booster === 'online' ? 'active' : ''}`}
                            onClick={() => updateFormat('booster', 'online')}
                          >
                            Online
                          </button>
                          <button 
                            className={`format-button ${formats.booster === 'physical' ? 'active' : ''}`}
                            onClick={() => updateFormat('booster', 'physical')}
                          >
                            Physical
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Last Lap Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Last Lap Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        {getSubjectsText(subjectCount)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* English Oral Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-[#8b5cf6] text-white text-xs py-0.5 px-2 rounded-md shadow-sm">
                    Added
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE English Oral Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        English Oral
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* In Every Bundle Section */}
                <div className="mt-4 mb-2">
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-medium">Included</h4>
                </div>
                
                {/* Welcome Pack */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Revision Resources</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        Welcome Pack
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Online Q&A Consultations */}
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Online Q&A Consultations</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        10 hours of targeted support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-sm text-slate-500">
                  <span className="line-through">
                    ${formatPrice(pricingData[studentType][subjectCount][formats.booster].booster.regular)}
                  </span>
                </div>
                <div className="text-3xl font-bold text-educational-dark">
                  ${formatPrice(pricingData[studentType][subjectCount][formats.booster].booster.discounted)}
                </div>
              </div>

              <Button className="w-full bg-educational-blue hover:bg-educational-blue/90 rounded-md transition-all duration-200 hover:shadow">
                Register Now
              </Button>
            </div>
          </div>

          {/* Mega Bundle */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
            <div className="h-2 bg-[#4f46e5] w-full absolute top-0"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-1">Mega Bundle</h3>
              <p className="text-sm text-gray-600 mb-3">4 bootcamps: Power Up, Last Lap &amp; English and Chinese Oral</p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mb-4">
                <BadgePercent className="h-3.5 w-3.5 mr-1" /> 25% Savings
              </Badge>

              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                {/* Power Up Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Power Up Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        {getSubjectsText(subjectCount)}
                      </span>
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center">
                        <span className="text-xs text-slate-500 mr-2">Format:</span>
                        <div className="format-toggle">
                          <button 
                            className={`format-button ${formats.mega === 'online' ? 'active' : ''}`}
                            onClick={() => updateFormat('mega', 'online')}
                          >
                            Online
                          </button>
                          <button 
                            className={`format-button ${formats.mega === 'physical' ? 'active' : ''}`}
                            onClick={() => updateFormat('mega', 'physical')}
                          >
                            Physical
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Last Lap Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Last Lap Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        {getSubjectsText(subjectCount)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* English Oral Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE English Oral Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        English Oral
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chinese Oral Bootcamp */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-[#4f46e5] text-white text-xs py-0.5 px-2 rounded-md shadow-sm">
                    Added
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Chinese Oral Bootcamp</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        Chinese Oral
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* In Every Bundle Section */}
                <div className="mt-4 mb-2">
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-medium">Included</h4>
                </div>
                
                {/* Welcome Pack */}
                <div className="bg-white p-3 rounded-md shadow-sm mb-3">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">PSLE Revision Resources</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        Welcome Pack
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Online Q&A Consultations */}
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Online Q&A Consultations</h4>
                      <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                        10 hours of targeted support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-sm text-slate-500">
                  <span className="line-through">
                    ${formatPrice(pricingData[studentType][subjectCount][formats.mega].mega.regular)}
                  </span>
                </div>
                <div className="text-3xl font-bold text-educational-dark">
                  ${formatPrice(pricingData[studentType][subjectCount][formats.mega].mega.discounted)}
                </div>
              </div>

              <Button className="w-full bg-educational-blue hover:bg-educational-blue/90 rounded-md transition-all duration-200 hover:shadow">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
