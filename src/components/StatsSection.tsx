
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      value: "2 in 3",
      description: (
        <>
          Achieved <strong className="font-bold">AL1 and AL2</strong> in their Mind Stretcher subjects
        </>
      ), 
      delay: "0ms"
    },
    {
      value: "50%+",
      description: (
        <>
          Achieved a PSLE score of <strong className="font-bold">8 and lower</strong>
        </>
      ),
      delay: "100ms"
    },
    {
      value: "35%",
      description: (
        <>
          Scored above 90 marks, earning the <strong className="font-bold">coveted AL1</strong> in their MS subjects
        </>
      ),
      delay: "200ms"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden animate-fade-in-up" style={{ animationDelay: stat.delay }}>
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  <Check className="h-8 w-8 text-educational-blue" />
                </div>
                <h3 className="text-4xl font-bold text-educational-dark mb-2">{stat.value}</h3>
                <p className="text-slate-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
