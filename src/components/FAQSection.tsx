import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I attend both physical and online bootcamps?",
      answer: "Yes, you can attend both physical and online bootcamps. Our bundles often include a mix of both formats to provide flexibility and maximize learning opportunities."
    },
    {
      question: "What's the difference between the physical format and online format?",
      answer: "Physical format provides an in-person learning experience in our centers, with direct interaction with teachers. Online format allows students to participate remotely through our learning platform, with live interactive sessions and access to all digital materials."
    },
    {
      question: "If I'm unable to attend any of the sessions after signing up, or if any sessions are already over at the point of signing up, will recordings be provided?",
      answer: "Yes, recordings will be provided for all online sessions. However, for physical sessions, recordings may not always be available. Please contact our customer service for specific session recordings."
    },
    {
      question: "Can I swap any of the subjects or bootcamps in the bundles?",
      answer: "We have carefully designed our bundles to provide comprehensive preparation for PSLE. While limited customization may be available, we generally recommend following the complete bundle for the best results. Contact our advisors for specific inquiries."
    },
    {
      question: "I need to change my bootcamp run timings from Run 1 to Run 2, or vice versa. Can I still do so after registration?",
      answer: "Yes, you can change your bootcamp run timings subject to availability. Please inform us at least 7 days before the bootcamp starts to accommodate your request."
    },
    {
      question: "How soon will I be able to collect the materials and/or books upon signing up?",
      answer: "Physical materials and books can be collected from our centers within 3-5 working days after registration. For online bootcamps, digital materials will be made available immediately upon confirmation of registration."
    },
    {
      question: "Can I enjoy MS student rates?",
      answer: "Yes, existing Mind Stretcher students can enjoy special rates for our bootcamp bundles. Please provide your MS student ID during registration to apply the discount."
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
