import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Book, BookOpen, Languages, MessageSquare } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TeacherSection = () => {
  const teachers = [
    {
      name: "Mavis Tan",
      subject: "Head of Primary English",
      description: "As the Head of English and a former MOE educator, Mavis brings over 14 years of experience preparing students for PSLE. Known for her engaging, dramatic delivery and effervescent style, she's guided numerous cohorts to excel in PSLE English over the past 7 years at our bootcamps.",
      image: "/lovable-uploads/56654422-f1a2-4876-ad3a-d970a8150416.png",
      icon: <BookOpen className="h-6 w-6 text-educational-blue" />
    },
    {
      name: "Mrs Shum",
      subject: "English",
      description: "With over 30 years of teaching experience, Mrs Shum is a highly respected English Master Teacher. She specialises in helping students master comprehension techniques, writing strategies and oral communication skills, helping thousands achieve remarkable PSLE results.",
      image: "/lovable-uploads/15d333d0-ce78-4515-9edd-43d183be0d74.png",
      icon: <MessageSquare className="h-6 w-6 text-educational-blue" />
    },
    {
      name: "Lim Wei Lun",
      subject: "Head of Academics",
      description: "Wei Lun is the Deputy Academic Director and a highly sought-after Master Teacher for Mathematics. A top student from Raffles Institution with education from Columbia and Cambridge Universities, he has helped countless students secure placements in top secondary schools.",
      image: "/lovable-uploads/e298ba1a-dd88-458b-a6fd-063c354492fb.png",
      icon: <Book className="h-6 w-6 text-educational-blue" />
    },
    {
      name: "James Wong",
      subject: "Maths",
      description: "James has over 18 years of teaching experience in Mathematics and is a former university lecturer. A recipient of the prestigious PSC and Chevening Scholarships, he is known for his clear teaching style. James makes complex word problems easy to understand - helping P6 students gain confidence and excel in the PSLE.",
      image: "/lovable-uploads/james-wong-circle.png",
      icon: <Book className="h-6 w-6 text-educational-blue" />
    },
    {
      name: "Chew Meng Yee",
      subject: "Head of Primary Science",
      description: "As Head of Science, Meng Yee has a sharp understanding of PSLE exam patterns, guiding students through misconceptions and tricky open-ended questions. He breaks down complex principles with a structured approach that helps students achieve outstanding results.",
      image: "/lovable-uploads/d8067628-8fcf-4536-ad02-822a133acee2.png",
      icon: <GraduationCap className="h-6 w-6 text-educational-blue" />
    },
    {
      name: "Albert Kang",
      subject: "Science",
      description: "Albert is a former MOE educator with over 10 years of teaching experience. Known for his engaging and inquiry-driven lessons, Albert helps students connect Science concepts to the real world, igniting a deeper understanding and love for learning as they prepare for the PSLE.",
      image: "/lovable-uploads/albert-kang-circle.png",
      icon: <GraduationCap className="h-6 w-6 text-educational-blue" />
    },
    {
      name: "Yu Man",
      subject: "Chinese",
      description: "As Head of Chinese and a former MOE educator with 14 years of teaching experience, Yu Man has guided countless students to excel in PSLE Chinese. She's known for equipping students with effective techniques for oral, comprehension and composition components.",
      image: "/lovable-uploads/ee33bc72-894b-4e2f-b0f1-fc58175edbb1.png",
      icon: <Languages className="h-6 w-6 text-educational-blue" />
    },
    {
      name: "Tang Jianling",
      subject: "Chinese",
      description: "Jianling is a highly respected Master Teacher with over 10 years of teaching experience. Known for her lively and humorous style, she makes learning Chinese enjoyable and has helped many students achieve outstanding results in the PSLE Chinese examination through her engaging teaching methods.",
      image: "/lovable-uploads/jianling-tang-circle.png",
      icon: <Languages className="h-6 w-6 text-educational-blue" />
    }
  ];

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-educational-dark font-display">
          Our Master Teachers
        </h2>
        <p className="text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Learn from our experienced PSLE specialists with proven track records of helping students achieve outstanding results.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="border border-slate-200 hover:shadow-md transition-all duration-300 overflow-hidden hover:scale-[1.02] animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-white border border-blue-100 flex items-center justify-center mb-4 overflow-hidden">
                    {teacher.image ? (
                      <Avatar className="w-full h-full">
                        <AvatarImage 
                          src={teacher.image} 
                          alt={teacher.name}
                          className="object-cover w-full h-full"
                        />
                        <AvatarFallback className="bg-pastel-blue flex items-center justify-center">
                          {teacher.icon}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="w-full h-full rounded-full bg-pastel-blue flex items-center justify-center">
                        {teacher.icon}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-educational-dark mb-1 font-display">{teacher.name}</h3>
                  <p className="text-educational-blue font-medium mb-3">
                    {teacher.subject.includes("Head of") || teacher.subject.includes("Director") 
                      ? teacher.subject 
                      : `${teacher.subject} Specialist`}
                  </p>
                  <p className="text-sm text-slate-600">{teacher.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
