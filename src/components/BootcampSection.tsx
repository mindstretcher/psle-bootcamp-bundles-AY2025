import React from 'react';
import BootcampCard from './BootcampCard';
import { Package, MessageCircle, GraduationCap, BookOpen, Book, Languages, Clock } from 'lucide-react';

const BootcampSection = () => {
  const bootcamps = [{
    title: "PSLE Power Up Bootcamp",
    description: "Our highly-popular PSLE Power Up Bootcamp is designed to provide structured revision and intensive practice for PSLE success. With 40+ hours of lessons, 300+ pages of latest 2025 revision materials, and live Q&A walkthroughs, students gain a comprehensive understanding of PSLE topics, question trends and exam strategies. A motivational segment and parent briefings ensure both students and parents are well-prepared.",
    formats: ["Online Webinar", "Physical Classes"],
    objectives: ["40+ hours of lessons and 300+ pages of refreshed 2025 PSLE Power Up revision materials and practice papers", "Reinforce understanding of PSLE topics and concepts, gain familiarity with trending PSLE questions and common errors, and hone PSLE question analysis and answering techniques", "Receive PSLE mock papers to be completed as pre-work to assess PSLE readiness", "Bonus segments included: Live Q&A walkthroughs, parent briefings and student motivational segment"],
    imageSrc: "https://main-website.sgp1.cdn.digitaloceanspaces.com/journey-to-psle-bootcamp-bundles/power-up-bc.png",
    category: 'bootcamp',
    showLearnMore: true,
    learnMoreUrl: "https://www.mindstretcher.com/events/psle-power-up-bootcamp"
  }, {
    title: "PSLE English Oral Bootcamp",
    description: "Our PSLE English Oral Bootcamp prepares your child for the crucial 20%-weighted oral exam component. Students will practise potential PSLE oral topics and scenarios, master effective oral techniques using the REAP & PEERS frameworks, experience real exam conditions with physical 1-to-1 mock tests, and receive our newly produced PSLE Oral books, fully aligned with MOE's 2025 English Oral changes.",
    formats: ["Online Webinar with Physical 1-to-1 Mock Tests"],
    objectives: ["Practise with our latest PSLE English Oral Bootcamp materials", "Gain exposure to potential PSLE oral topics & stimulus-based conversation scenarios and reinforce effective oral exam techniques and Mind Stretcher's REAP and PEERS frameworks", "Experience exam-simulated practice with 1-to-1 physical mock tests", "Receive our newly-produced PSLE Oral books for comprehensive revision"],
    imageSrc: "https://main-website.sgp1.cdn.digitaloceanspaces.com/journey-to-psle-bootcamp-bundles/english-oral-bc.png",
    category: 'bootcamp',
    showLearnMore: true,
    learnMoreUrl: "https://www.mindstretcher.com/events/psle-english-oral-bootcamp"
  }, {
    title: "PSLE Chinese Oral Bootcamp",
    description: "Our PSLE Chinese Oral Bootcamp is designed to help students excel in the 25%-weighted Chinese Oral Exam. It prepares them for both the Reading Aloud and Video-Based Conversation (VBC) components. Students will gain exposure to common oral topics, familiarise themselves with structured response formats for typical VBC questions, and practise under exam-simulated conditions through 1-to-1 mock tests.",
    formats: ["Online Webinar with Physical 1-to-1 Mock Tests"],
    objectives: ["Practise with our latest PSLE Chinese Oral Bootcamp materials", "Gain familiarity with potential PSLE Chinese Oral topics and scenarios and reinforce effective oral exam techniques and frameworks", "Practice under exam-simulated conditions with physical 1-to-1 mock tests"],
    imageSrc: "https://main-website.sgp1.cdn.digitaloceanspaces.com/journey-to-psle-bootcamp-bundles/chinese-oral-bc.png",
    category: 'bootcamp',
    showLearnMore: true,
    learnMoreUrl: "https://www.mindstretcher.com/events/psle-chinese-oral-bootcamp"
  }, {
    title: "PSLE Last Lap Bootcamp",
    description: "The PSLE Last Lap Bootcamp is the ultimate final sprint before the exams. It focuses on timely reinforcement of key concepts, targeted practice on commonly challenging components and sharpening of exam techniques so students head into the PSLE confident and well-prepared.",
    formats: ["Online Webinar"],
    objectives: ["Practise with our refreshed 2025 PSLE Last Lap materials", "Intensive revision on targeted problematic exam components and reinforce understanding and application of exam techniques", "Receive timely teaching support for the final sprint to PSLE"],
    imageSrc: "https://main-website.sgp1.cdn.digitaloceanspaces.com/journey-to-psle-bootcamp-bundles/last-lap-bc.png",
    category: 'bootcamp',
    showLearnMore: true,
    learnMoreUrl: "https://www.mindstretcher.com/events/psle-the-last-lap-bootcamp"
  }];
  
  return <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-gradient-to-b from-pastel-blue/30 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-educational-dark font-display">Our Flagship PSLE Bootcamps</h2>
        <p className="text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Everything you need for effective PSLE Preparation.
        </p>
        
        {/* All Items in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bootcamps.map((bootcamp, index) => (
            <BootcampCard 
              key={index} 
              title={bootcamp.title} 
              description={bootcamp.description} 
              formats={bootcamp.formats} 
              objectives={bootcamp.objectives} 
              index={index}
              imageSrc={bootcamp.imageSrc}
              category={bootcamp.category as 'bootcamp' | 'welcome-pack' | 'timely-support'} 
              showLearnMore={bootcamp.showLearnMore}
              learnMoreUrl={bootcamp.learnMoreUrl}
            />
          ))}
        </div>
      </div>
    </section>;
};
export default BootcampSection;
