
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
              I am Neha Rana, a final year student at the Institute of Technology, Nirma University, majoring in Computer Science and Engineering. I am passionate about developing technology and am always eager to solve real-world problems by combining knowledge and innovation.
            </p>
            <p className="text-gray-700 mb-6">
              Currently, I am working at REConnect Energy as an AI Intern. Here, my work involves developing AI tools for the energy and Power Sector of India.
            </p>
            <p className="text-gray-700 mb-6">
              Throughout my academic journey, I have actively participated in various hackathons and coding competitions. This has not only enhanced my technical knowledge but also boosted my team management and leadership skills. The highlight of it includes becoming finalist in SSIP New India Vibrant Hackathon'23, Our project selection for merging with the website of Education Department, Government of Gujarat.
            </p>
            <p className="text-gray-700">
              To strengthen my DSA and problem-solving skills, I have been practicing problems on Codeforces with over 400+ problems solved till now. In my free time, I enjoy diary journaling, reading, photography, and painting.
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
                  <p className="text-gray-600">AI Intern at REConnect Energy Solutions</p>
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
                  <p className="text-gray-600">400+ Codeforces problems solved</p>
                  <p className="text-gray-600">Finalist in SSIP New India Vibrant Hackathon'23</p>
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
