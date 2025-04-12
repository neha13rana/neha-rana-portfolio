
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Reconnect Energy Solutions Limited",
      role: "AI Intern",
      period: "January 2025 - Ongoing",
      description: "Working on the AI Tool Development for the application of Energy and Power Sector of India.",
      location: "Remote",
    },
    {
      company: "Project for Education Department-Government of Gujarat",
      role: "Team Lead, Developer",
      period: "January 2024 - Ongoing",
      description: "Developed multilingual chatbot using LangChain, Open LLM with Tesseract OCR document processing, built cross-platform solution (React web app + Android) with JWT authentication.",
      location: "Gujarat, India",
    },
    {
      company: "iShape Technolab Pvt. Ltd.",
      role: "Web Development Intern",
      period: "June 2024 - July 2024",
      description: "Developed a real-time chat application with PHP, featuring user-friendly design, secure authentication, and robust password protection to ensure privacy.",
      location: "Remote",
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-10 space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-portfolio-purple hover:shadow-md transition-shadow animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold mb-1">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-medium text-portfolio-purple">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="bg-portfolio-purple/10 px-3 py-1 rounded-full flex items-center gap-2">
                    <Calendar size={16} className="text-portfolio-purple" />
                    <span className="text-sm font-medium text-portfolio-purple">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{exp.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Briefcase size={16} />
                  <span>{exp.location}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
