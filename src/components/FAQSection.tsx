import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const FAQSection = () => {
  const faqs = [
    {
      question: "What perks are included when I sign up for a Bootcamp Bundle?",
      answer: (
        <div>
          <p>When you register for any Bootcamp Bundles, you'll receive a range of useful resources to support your child's PSLE preparation:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Bundle Discount Savings:</strong> Enjoy 15-25% off, depending on the bundle selected (Standard, Booster and Mega).</li>
            <li><strong>PSLE Revision Books:</strong> All bundles include the following 5 titles at no extra cost:
              <ul className="list-circle pl-5 mt-1 space-y-1">
                <li>Best A* Model Compositions (English)</li>
                <li>Practice Papers for PSLE Maths</li>
                <li>PSLE Mathematics - Concepts & Strategies Book</li>
                <li>Tackling Science Open-ended Questions (Vol. 1 & 2)</li>
              </ul>
              <p className="mt-1"><strong>Booster and Mega Bundles Bonus:</strong> 3 additional English Oral titles as part of the PSLE English Oral SBC Workshops.</p>
              <ul className="list-circle pl-5 mt-1 space-y-1">
                <li>Mastering PSLE Reading Aloud</li>
                <li>English Oral SBC Vol. 1 (Title TBC)</li>
                <li>English Oral SBC Vol. 2 (Title TBC)</li>
              </ul>
            </li>
            <li><strong>PSLE Online Q&A Consultation:</strong> Live 2.5-hour subject-specific Q&A sessions in the week leading up to PSLE.</li>
            <li><strong>PSLE Mock Papers:</strong> To assess readiness and build familiarity with PSLE exam formats.</li>
            <li><strong>PSLE Study Planners & Checklists:</strong> 4-month PSLE Study Plan and Topic Checklists to keep students on track.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Can I swap any of the subjects or bootcamps in the Bootcamp Bundles?",
      answer: (
        <div>
          <p><strong>Subject swap:</strong></p>
          <p>The Standard Bundle comprises of 3 subjects: English, Maths, and Science. We are unable to accommodate any subject swaps. If you're interested in enrolling for Chinese and/or Higher Chinese, you may select the 4 Subjects or 5 Subjects option.</p>
          
          <p className="mt-2"><strong>Bootcamp swap:</strong></p>
          <p>Similarly, for the Booster Bundle, we are unable to exchange English Oral Bootcamp for Chinese Oral Bootcamp. If you intend to select these 3 bootcamps – PSLE Power Up, PSLE Last Lap, and Chinese Oral – you may select the Mega Bundle option which includes all 4 bootcamps! Alternatively, you can purchase the Standard Bundle and the Chinese Oral Bootcamp as a separate standalone purchase.</p>
        </div>
      )
    },
    {
      question: "Can I enjoy MS student rates?",
      answer: (
        <div>
          <p>Our MS student rates for any events are specifically reserved for students who attend our regular weekly programmes. They do not extend to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Ex-students</li>
            <li>Trial class students</li>
            <li>Participants of our bootcamps, short courses, workshops, webinars, or events</li>
          </ul>
          <p className="mt-2">Should your child wish to attend our events at the exclusive MS student rate, you can enroll him/her in at least one of our regular weekly programmes. That would then qualify your child as a MS student!</p>
        </div>
      )
    },
    {
      question: "How soon will I be able to collect the materials upon signing up?",
      answer: (
        <div>
          <p>As bootcamps are held from May to September, materials will be released in phases:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Mid-May:</strong> PSLE Power Up materials, English & Chinese Oral Pack materials, revision books, mock papers and study plans & checklists</li>
            <li><strong>Mid-July:</strong> PSLE Chinese Oral Final Sprint materials</li>
            <li><strong>End-August:</strong> PSLE Last Lap Bootcamp materials</li>
          </ul>
          
          <p className="mt-2"><strong>For Online Bootcamp students:</strong></p>
          <p>You'll receive an email once your materials are ready for collection at your selected MS centre (as indicated during registration).</p>
          
          <p className="mt-2"><strong>For Physical (Power Up) Bootcamp students:</strong></p>
          <p>Your Power Up materials will be issued on the day of the physical bootcamp. For all other materials, you'll be notified via email when they're ready for collection.</p>
          
          <p className="mt-2">You can expect the first notification by mid-May. Keep an eye on your inbox — we'll remind you as soon as your materials are available!</p>
        </div>
      )
    },
    {
      question: "I need to change my bootcamp run timings from Run 2 (Tampines) to Run 3 (Toa Payoh), or vice versa. Can I still do so after registration?",
      answer: (
        <div>
          <p>Yes, you can request a change between the physical runs (Run 2 and Run 3), subject to availability.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Simply email our Events Team at <a href="mailto:events@mindstretcher.com" className="text-blue-600 hover:underline">events@mindstretcher.com</a>, and we'll assist you as soon as possible.</li>
            <li>Do note that the two runs are held at different venues, so please ensure you're able to make the necessary arrangements for your child to attend.</li>
          </ul>
          <p className="mt-2"><strong>Important note:</strong> As online and physical runs are priced differently, we're unable to accommodate switches between Run 1 (Online) and Runs 2 or 3 (Physical).</p>
        </div>
      )
    },
    {
      question: "Is transport and lunch provided for students attending the PSLE Power-Up Physical Bootcamp?",
      answer: (
        <div>
          <p><strong>Transport:</strong> Not provided. Please make arrangements to bring your child to the venue.</p>
          <p className="mt-2"><strong>Lunch:</strong> Bento lunch will be provided for students attending core on-site bootcamp subjects (English, Math, Science, Chinese). You can indicate dietary preferences in the registration form.</p>
        </div>
      )
    },
    {
      question: "Do I need to complete the PSLE mock papers ahead of time?",
      answer: (
        <div>
          <p>Yes, we strongly encourage students to complete the PSLE mock papers before the Power Up Bootcamp begins. These papers are provided as part of any Bootcamp Bundles purchased, and are also included for all students registered for the PSLE Power Up Bootcamp.</p>
          <p className="mt-2">During the bootcamp, we’ll be going through selected challenging or commonly misunderstood questions from the papers, so having them completed in advance will help your child follow the discussion more effectively and gain maximum value from the walkthroughs.</p>
        </div>
      )
    },
    {
      question: "If I'm unable to attend any of the sessions after signing up, or if any sessions are already over at the point of signing up, will recordings be provided?",
      answer: "Absolutely! Recordings of all registered webinars and online bootcamps will be made available to all registrants till the end of this academic year."
    },
    {
      question: "How can I book my child's 1-to-1 oral mock test sessions?",
      answer: "We will provide instructions for booking the 1-to-1 oral mock test sessions in early June. You will receive an email with a booking link to ensure you have all the necessary information to schedule your session smoothly."
    },
    {
      question: "Can I cancel my registration if I change my mind?",
      answer: "No, all fees paid for any of our events are strictly non-refundable and non-transferable."
    }
  ];

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-educational-dark">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-slate-200 rounded-lg mb-4 overflow-hidden animate-fade-in-up" 
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AccordionTrigger className="px-6 py-4 text-left text-educational-dark hover:bg-slate-100 hover:no-underline flex items-center w-full">
                <span className="flex-1 text-left">{faq.question}</span>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-4 pt-2 text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
