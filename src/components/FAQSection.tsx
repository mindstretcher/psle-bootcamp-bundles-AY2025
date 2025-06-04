import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const FAQSection = () => {
  const faqs = [
    {
      question: "Are our PSLE Bootcamp Bundles still available?",
      answer: (
        <div>
          <p>The PSLE Bootcamp Bundles (which included Power Up, Oral & Last Lap bootcamps) are no longer available as the Power Up Bootcamp has already started. However, you can still sign up for the remaining Power Up sessions, as well as the upcoming English Oral, Chinese Oral and Last Lap Bootcamps individually — just scroll up to explore them.</p>
        </div>
      )
    },
    {
      question: "I previously purchased the bundles, where can I find information on my sessions?",
      answer: (
        <div>
          <p>Great! If you’ve already purchased a bundle, your access to all included sessions are confirmed. Just refer to the email confirmation we sent, or reach out to our Events Team at <a href="mailto:events@mindstretcher.com" className="text-blue-600 hover:underline">events@mindstretcher.com</a> if you need any help.</p>
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
            <li><strong>Mid-May:</strong> PSLE Power Up Materials, 5 revision books, mock papers and study plans & checklists</li>
            <li><strong>End-May:</strong> PSLE English & Chinese Oral Pack, PSLE Chinese Oral final sprint materials, 3 revision books for English Oral</li>
            <li><strong>End-August:</strong> PSLE Last Lap Bootcamp materials</li>
          </ul>
          
          <p className="mt-2"><strong>For Online Bootcamp students:</strong></p>
          <p>You'll receive an email once your materials are ready for collection at your selected MS centre (as indicated during registration).</p>
          
          <p className="mt-2"><strong>For Physical (Power Up) Bootcamp students:</strong></p>
          <p>Your Power Up materials will be issued on the day of the physical bootcamp. For all other materials, you'll be notified via email when they're ready for collection.</p>

          <p className="mt-2"><strong>Signing Up After The Collection Dates?</strong></p>
          <p>No worries — we’ll still arrange for your child’s materials to be collected at your convenience. Just keep an eye on your inbox, we’ll notify you as soon as they’re ready!</p>
        
        </div>
      )
    },
    {
      question: "I need to change my bootcamp run timings. Can I still do so after registration?",
      answer: (
        <div>
          <p>Yes, you can request a change between run timings, subject to availability. Simply email our Events Team at <a href="mailto:events@mindstretcher.com" className="text-blue-600 hover:underline">events@mindstretcher.com</a>, and we'll assist you as soon as possible.</p>
          <p className="mt-2"><strong>Important note:</strong> For Power Up Bootcamp – as online and physical runs are priced differently, we're unable to accommodate switches between Run 1 (Online) and Runs 2 or 3 (Physical).</p>
        </div>
      )
    },
    {
      question: "Is transport and lunch provided for students attending the PSLE Power Up Physical Bootcamp?",
      answer: (
        <div>
          <p><strong>Transport:</strong> Not provided. Please make arrangements to bring your child to the venue.</p>
          <p className="mt-2"><strong>Lunch:</strong> Bento lunch will be provided for students attending core on-site bootcamp subjects (English, Math, Science, Chinese). You can indicate dietary preferences in the registration form.</p>
        </div>
      )
    },
    {
      question: "Are there lunch breaks for sessions that span from morning to afternoon?",
      answer: (
        <div>
          <p><strong>Power Up and Last Lap Bootcamp (English, Maths, Science, Chinese Workshops 8:30am - 4:30pm):</strong></p>
          <p>For all Power Up and Last Lap Subject Workshops, there will be a 45-minute lunch break (bento lunch will be provided for physical Power Up workshops).</p>
          
          <p className="mt-2"><strong>English and Chinese Oral Bootcamp (Oral Workshops 9am - 4pm)</strong></p>
          <p>For both English and Chinese Oral Workshops, there will be a 1-hour lunch break.</p>
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
    <section id="faq" className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-gradient-to-b from-blue-50/20 to-slate-50/60">
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
