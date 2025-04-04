import React from 'react';
import BootcampCard from './BootcampCard';
import { Package, MessageCircle, GraduationCap, BookOpen, Book, Languages, Clock } from 'lucide-react';

const BootcampSection = () => {
  const bootcamps = [{
    title: "PSLE Power Up Bootcamp",
    description: "Our highly-popular PSLE Power Up Bootcamp is designed to provide structured revision and intensive practice for PSLE success. With 40+ hours of lessons, 300+ pages of latest 2025 revision materials, and live Q&A walkthroughs, students gain a comprehensive understanding of PSLE topics, question trends and exam strategies. A motivational segment and parent briefings ensure both students and parents are well-prepared.",
    formats: ["Physical (Limited Seats)", "Online"],
    objectives: ["Practise with our refreshed PSLE Power Up revision materials and PSLE practice papers", "Reinforce understanding of PSLE topics and concepts", "Gain familiarity with trending PSLE questions and common errors", "Hone PSLE question analysis and answering techniques", "Receive teaching support with our live Q&A walkthroughs and parent briefings", "Stay motivated with our exclusive student motivational segment"],
    imageSrc: "/lovable-uploads/power-up-bc.png",
    category: 'bootcamp',
    showLearnMore: true
  }, {
    title: "PSLE English Oral Bootcamp",
    description: "Our PSLE English Oral Bootcamp prepares your child for the crucial 20%-weighted oral exam component. Students will practise potential PSLE oral topics and scenarios, master effective oral techniques using the REAP & PEERS frameworks, experience real exam conditions with a physical 1-to-1 mock test, and receive our newly produced PSLE Oral Book, fully aligned with MOE's 2025 English Oral changes.",
    formats: ["Online with Physical 1-to-1 Mock Tests"],
    objectives: ["Practise with our latest PSLE English Oral Bootcamp materials", "Gain exposure to potential PSLE oral topics & stimulus-based conversation scenarios", "Reinforce effective oral exam techniques and Mind Stretcher's REAP and PEERS frameworks", "Experience exam-simulated practice with two 1-to-1 physical mock tests", "Receive our newly-produced PSLE Oral Book for additional revision"],
    imageSrc: "/lovable-uploads/english-oral-bc.png",
    category: 'bootcamp',
    showLearnMore: true
  }, {
    title: "PSLE Chinese Oral Bootcamp",
    description: "Our PSLE Chinese Oral Bootcamp is designed to help students excel in the 25%-weighted Chinese Oral Exam. It prepares them for both the Reading Aloud and Video-Based Conversation (VBC) components. Students will gain exposure to common oral topics, familiarise themselves with structured response formats for typical VBC questions, and practise under exam-simulated conditions through 1-to-1 mock tests.",
    formats: ["Online with Physical 1-to-1 Mock Tests"],
    objectives: ["Practise with our latest PSLE Chinese Oral Bootcamp materials", "Gain familiarity with potential PSLE Chinese Oral topics and scenarios", "Reinforce effective oral exam techniques and frameworks", "Practice under exam-simulated conditions with physical 1-to-1 mock tests"],
    imageSrc: "/lovable-uploads/chinese-oral-bc.png",
    category: 'bootcamp',
    showLearnMore: true
  }, {
    title: "PSLE Last Lap Online Bootcamp",
    description: "The PSLE Last Lap Bootcamp is the ultimate final sprint before the exams. It focuses on timely reinforcement of key concepts, targeted practice on commonly challenging components and sharpening of exam techniques—so students head into the PSLE confident and well-prepared.",
    formats: ["Online"],
    objectives: ["Intensive revision on targeted problematic exam components", "Reinforce understanding and application of exam techniques", "Practise with our refreshed PSLE Last Lap revision notes", "Receive timely teaching support for the final sprint to PSLE"],
    imageSrc: "/lovable-uploads/last-lap-bc.png",
    category: 'bootcamp',
    showLearnMore: true
  }, {
    title: "PSLE Revision Resources",
    description: "The Welcome Pack contains 3 essential components to power your child's PSLE revision:\n\n1️⃣ Revision Books\n2️⃣ Study Planners & Checklists\n3️⃣ PSLE-Standard Mock Papers.\n\nAll materials are developed by our experienced academic team to align with the latest PSLE format and requirements.",
    formats: [],
    objectives: ["Access subject-specific revision books with key concepts, worked examples and practice questions", "Follow our structured 4-month PSLE Study Plan with week-by-week revision guidance", "Track progress with comprehensive PSLE Topic Checklists covering all examinable components", "Practice with PSLE-standard mock papers to build exam confidence and time management skills", "Standard Bundle includes 5 titles, while Booster & Mega Bundles include all 8 titles (with 3 additional English Oral resources)"],
    imageSrc: "/lovable-uploads/psle-resources.png",
    category: 'welcome-pack',
    showLearnMore: false,
    hideFormats: true
  }, {
    title: "Online Q&A Consultations",
    description: "Scheduled approximately one week before the PSLE, these targeted consultation sessions provide timely support when students need it most. Each subject receives dedicated time (2.5 hours each for English, Maths, Science and Chinese) where students can submit their questions in advance and vote on which topics they'd like our academic team to address during the live sessions.",
    formats: [],
    objectives: ["Submit your most pressing PSLE questions for our academic team to address", "Benefit from 10 hours of targeted consultation (2.5 hours per subject)", "Gain clarity on challenging concepts just before the PSLE exams", "Learn from questions submitted by peers", "Receive last-minute tips and strategies from our experienced PSLE specialists"],
    imageSrc: "/lovable-uploads/online-qa-consultation.png",
    category: 'timely-support',
    showLearnMore: false,
    hideFormats: true
  }];
  
  return <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-educational-dark font-display">What's in the PSLE Bootcamp Bundles</h2>
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
              hideFormats={bootcamp.hideFormats}
            />
          ))}
        </div>
      </div>
    </section>;
};
export default BootcampSection;
