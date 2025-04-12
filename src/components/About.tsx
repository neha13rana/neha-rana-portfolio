
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Award, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="animate-fade-in-up">
            <p className="text-gray-700 mb-6">
              I am a Computer Science graduate from Nirma University with a CGPA of 7.37. My academic journey has equipped me with strong foundations in various programming languages and technologies, with a particular focus on AI and Machine Learning.
            </p>
            <p className="text-gray-700 mb-6">
              Beyond technical skills, I pride myself on problem-solving abilities, leadership qualities, and effective communication. I've worked on diverse projects ranging from chatbots to recommendation systems, always aiming to create impactful solutions.
            </p>
            <p className="text-gray-700">
              Currently, I'm working on AI tool development for the Energy and Power sector at Reconnect Energy Solutions Limited, while continuously expanding my knowledge in emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-l-4 border-l-portfolio-purple hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <div className="bg-portfolio-purple/10 p-3 rounded-full h-fit">
                  <BookOpen className="text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Education</h3>
                  <p className="text-gray-600">B.Tech in Computer Science from Nirma University (2021-2025)</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-portfolio-purple hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <div className="bg-portfolio-purple/10 p-3 rounded-full h-fit">
                  <Briefcase className="text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Experience</h3>
                  <p className="text-gray-600">AI Intern at Reconnect Energy Solutions Limited</p>
                  <p className="text-gray-600">Web Development at iShape Technolab</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-portfolio-purple hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <div className="bg-portfolio-purple/10 p-3 rounded-full h-fit">
                  <Award className="text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Achievements</h3>
                  <p className="text-gray-600">Highest CodeForces Rank - 2705</p>
                  <p className="text-gray-600">Hackathon winner & certificates in multiple domains</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
