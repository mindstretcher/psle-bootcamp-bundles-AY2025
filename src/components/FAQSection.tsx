import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "When will registration for PSLE Bootcamps 2026 open?",
      answer: (
        <div>
          <p>Registration details for our 2026 PSLE Bootcamps will be announced soon. Join our waitlist to be the first to know when registration opens.</p>
        </div>
      )
    },
    {
      question: "What bootcamps will be offered in 2026?",
      answer: (
        <div>
          <p>We plan to offer our popular flagship bootcamps again in 2026:</p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>PSLE Power Up Bootcamp</strong> - Comprehensive revision for English, Maths, Science, and Chinese</li>
            <li><strong>PSLE English Oral Bootcamp</strong> - Focused preparation for the English Oral exam</li>
            <li><strong>PSLE Chinese Oral Bootcamp</strong> - Targeted practice for the Chinese Oral exam</li>
            <li><strong>PSLE Last Lap Bootcamp</strong> - Final sprint revision before the PSLE</li>
          </ul>
          <p className="mt-2">Details on schedules, formats, and pricing will be shared once registration opens.</p>
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
      question: "Will recordings be provided if I miss a session?",
      answer: "Yes! Recordings of all registered webinars and online bootcamps will be made available to all registrants."
    },
    {
      question: "Who are the teachers conducting the bootcamps?",
      answer: (
        <div>
          <p>Our PSLE Bootcamps are conducted by our team of highly-experienced PSLE Master Teachers who have guided numerous students to AL1 with their deep expertise in PSLE trends, marking schemes, and proven exam-effective techniques.</p>
          <p className="mt-2">You can learn more about our teachers in the Teachers section above.</p>
        </div>
      )
    },
    {
      question: "What is the cancellation and refund policy?",
      answer: "All fees paid for any of our events are strictly non-refundable and non-transferable."
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
