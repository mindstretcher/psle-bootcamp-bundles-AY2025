import React from 'react';
import { Sparkles, BookOpen, Users, Award } from 'lucide-react';
const ObsessedSection = () => {
  const features = [{
    icon: <Sparkles className="h-6 w-6 text-educational-blue" />,
    title: "Master Essential PSLE Skills & Techniques",
    description: "Our bootcamps cover all key PSLE content, skills and techniques you need to master for PSLE success. This includes revising key PSLE concepts, and engaging in rigorous drills and practices which exposes you to commonly-tested PSLE questions."
  }, {
    icon: <BookOpen className="h-6 w-6 text-educational-blue" />,
    title: "Latest 2025 PSLE Bootcamp Materials",
    description: "Our 2025 PSLE Bootcamp materials have been refreshed with new materials, and also updated to align with 2025 MOE syllabus changes. These materials are designed to help conquer weaknesses and prepare students well for the PSLE."
  }, {
    icon: <Users className="h-6 w-6 text-educational-blue" />,
    title: "Physical & Online Webinar Formats",
    description: "Our hybrid Oral bootcamps combine live online sessions with 1-1 physical mock exams — designed to maximise each student’s learning."
  }, {
    icon: <Award className="h-6 w-6 text-educational-blue" />,
    title: "Highly-Experienced PSLE Master Teachers",
    description: "Our PSLE Master Teachers have guided numerous students to AL1 with their deep expertise in PSLE trends, marking schemes and proven exam-effective techniques."
  }];
  return <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-gradient-to-b from-white/0 to-pastel-blue/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-educational-dark font-display">We're Obsessed About Getting You Ready For PSLE</h2>
        <p className="text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          What makes our bootcamps effective — proven PSLE strategies, updated 2025 materials, experienced teachers and flexible formats to support every student for PSLE.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 animate-fade-in-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-pastel-blue mb-4 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-educational-dark font-display">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ObsessedSection;