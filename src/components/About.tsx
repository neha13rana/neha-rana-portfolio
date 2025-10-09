
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
              I am Neha Rana, a Computer Science and Engineering graduate from the Institute of Technology, Nirma University, with the expertise in AI/ML, software development and problem-solving. I aim to leverage technology and innovation to build impactful, efficient, and scalable solutions for real-world challenges.
            </p>
            <p className="text-gray-700 mb-6">
              Recently, I completed my internship at REConnect Energy, where I worked as an AI Intern. My role involved developing AI tools tailored for the Energy and Power Sector of India.Open-source AI contributor on Hugging Face, building datasets, training NLP models, and deploying multilingual translation and conversational AI solutions. Passionate about leveraging Generative AI tools to create impactful applications.
            </p>
            <p className="text-gray-700 mb-6">
              Throughout my academic and professional journey, I have actively participated in hackathons, coding competitions, and collaborative projects, strengthening both my technical and leadership abilities. Notably, I was a finalist in the SSIP New India Vibrant Hackathon 2023 and my project was selected by the Education Department, Government of Gujarat for integration with their official website.With strong technical skills and creative problem-solving, I specialize in using AI tools and frameworks to design and develop innovative solutions.Created my personal portfolio using vibe coding tools like Lovable, and collaborated with the production team during my internship to enhance UI designs using Replit, Napkin, and Mermaid AI
            </p>
            <p className="text-gray-700">
              I am also a Google Cloud Facilitator ’25, a participant in the McKinsey Forward Program ’25 and actively learning and collaborating with startups through Y Combinator Startup School, exploring how AI and entrepreneurship can come together to drive meaningful innovation.            </p>
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
                  <p className="text-gray-600">AI Developer Intern at REConnect Energy Solutions</p>
                  <p className="text-gray-600">Web Developer Intern at iShape Technolab</p>
                  <p className="text-gray-600">Team Lead, Developer for the project of Student Counselling Chatbot (For the education department-Government of Gujarat)</p>
                  <p className="text-gray-600">Open-Source Contributor — Hugging Face</p>

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
                  <p className="text-gray-600">Codeforces Highest rank 2705 in Div2</p>
                  <p className="text-gray-600">Finalist in SSIP New India Vibrant Hackathon'23</p>
                  <p className="text-gray-600">McKinsey Forward Program ’25</p>
                  <p className="text-gray-600">Google Cloud Facilitator ’25</p>
                  <p className="text-gray-600">Y Combinator Startup School ’25</p>
                  <p className="text-gray-600">Top 1% Class XII Board Examination'21 (Qualified for INSPIRE Scholarship (SHE), Govt. of India)</p>
                  <p className="text-gray-600"> ICPC Asia Kanpur Preliminary 2024- Participant</p>
                  
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
