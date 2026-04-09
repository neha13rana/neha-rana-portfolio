
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Award, Briefcase, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="animate-fade-in-up">
            <p className="text-gray-700 mb-6">
              I am Neha Rana, currently the <span className="font-semibold text-portfolio-purple">CTO at <a href="https://aethenix.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Aethenix</a></span>. As a <span className="font-medium text-gray-800">Computer Science and Engineering</span> graduate from Nirma University with expertise in <span className="font-semibold text-portfolio-purple">AI/ML</span>, <span className="font-semibold text-portfolio-purple">software development</span>, and problem-solving, I aim to leverage technology and innovation to build impactful, efficient, and scalable solutions for real-world challenges.
            </p>
            <p className="text-gray-700 mb-6">
              I completed my internship at REConnect Energy, where I worked as an <span className="font-semibold text-portfolio-purple">AI Intern</span>. My role involved developing <span className="font-semibold text-portfolio-purple">AI tools</span> tailored for the Energy and Power Sector of India. With strong technical skills and creative problem-solving, I specialize in using AI models and frameworks to design and develop innovative solutions. Created my personal portfolio using vibe coding tools like Lovable, and collaborated with the production team during my internship to enhance UI designs using Replit, Napkin, and Mermaid AI.
            </p>
            <p className="text-gray-700 mb-6">
              Throughout my academic and professional journey, I have actively participated in hackathons, coding competitions, and collaborative projects, strengthening both my <span className="font-medium text-gray-800">technical and leadership abilities</span>. Notably, I was a finalist in the SSIP New India Vibrant Hackathon 2023 and my project was selected by the Education Department, Government of Gujarat for integration with their official website. Open-source AI contributor on Hugging Face, building datasets, training <span className="font-semibold text-portfolio-purple">NLP models</span>, and deploying multilingual translation and conversational AI solutions. Passionate about leveraging <span className="font-semibold text-portfolio-purple">Generative AI tools</span> to create impactful applications.
            </p>
            <p className="text-gray-700">
              I am also a Google Cloud Facilitator ’25, a participant in the McKinsey Forward Program ’25 and actively learning and collaborating with startups through Y Combinator Startup School, exploring how <span className="font-semibold text-portfolio-purple">AI and entrepreneurship</span> can come together to drive meaningful innovation. Additionally, I actively serve as a <span className="font-semibold text-portfolio-purple">Technical Mentor</span> across multiple platforms, conducting dedicated sessions to provide <span className="font-semibold text-portfolio-purple">AI, Tech, and Career Guidance</span>.
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
                  <div className="flex items-start gap-2 mt-2">
                    <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                    <p className="text-gray-600">B.Tech in Computer Science from Nirma University (2021-2025)</p>
                  </div>
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
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600 flex items-center flex-wrap gap-x-2">
                        CTO at <a href="https://aethenix.com/" target="_blank" rel="noopener noreferrer" className="text-portfolio-purple font-medium hover:underline">Aethenix</a>
                        <span className="text-xs bg-portfolio-purple/10 text-portfolio-purple px-2 py-0.5 rounded-full font-medium">Present</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600 flex items-center flex-wrap gap-x-2">
                        Technical Mentor (AI, Tech & Career Guidance)
                        <span className="text-xs bg-portfolio-purple/10 text-portfolio-purple px-2 py-0.5 rounded-full font-medium">Present</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600 flex items-center flex-wrap gap-x-2">
                        Independent Tech & AI Strategy Consultant on Topmate
                        <span className="text-xs bg-portfolio-purple/10 text-portfolio-purple px-2 py-0.5 rounded-full font-medium">Present</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">AI Developer Intern at REConnect Energy Solutions</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">Web Developer Intern at iShape Technolab</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">Team Lead, Developer for the project of Student Counselling Chatbot (For the education department-Government of Gujarat)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600 flex items-center flex-wrap gap-x-2">
                        Open-Source Contributor at Hugging Face
                        <span className="text-xs bg-portfolio-purple/10 text-portfolio-purple px-2 py-0.5 rounded-full font-medium">Present</span>
                      </p>
                    </div>
                  </div>

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
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">Codeforces Highest rank 2705 in Div2</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">Finalist in SSIP New India Vibrant Hackathon'23</p>
                    </div>
                    {/* <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">McKinsey Forward Program ’25</p>
                    </div> */}
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">Google Cloud Facilitator ’25</p>
                    </div>
                    {/* <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">Y Combinator Startup School ’25</p>
                    </div> */}
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">Top 1% Class XII Board Examination'21 (Qualified for INSPIRE Scholarship (SHE), Govt. of India)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-portfolio-purple shrink-0 mt-0.5" />
                      <p className="text-gray-600">ICPC Asia Kanpur Preliminary 2024- Participant</p>
                    </div>
                  </div>

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
