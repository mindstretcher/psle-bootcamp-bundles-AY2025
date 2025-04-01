
import React from 'react';

const TimelineSection = () => {
  const timelineSteps = [{
    period: "April - May",
    title: "Pre-Bootcamps",
    items: ["PSLE Checklist & Final Sprint Study Plan", "PSLE Mock Exam Papers Pre-Work", "11 PSLE Assessment Books worth $400"]
  }, {
    period: "May - Sep",
    title: "Bootcamps",
    items: ["PSLE Power Up", "PSLE English Oral", "PSLE Chinese Oral", "PSLE Last Lap"]
  }, {
    period: "Sep",
    title: "Post-Bootcamps",
    items: ["Complimentary consultation sessions during Sep holidays"]
  }];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-display">PSLE Bootcamp Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-educational-blue border-4 border-white"></div>
                
                <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2"></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 rounded-full bg-pastel-blue text-blue-700 text-sm font-medium mb-2">
                        {step.period}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <ul className="space-y-2 text-gray-600">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className={`mr-2 ${index % 2 === 0 ? 'order-last ml-2 mr-0' : ''}`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
