
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 min-h-screen flex items-center">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 animate-fade-in-up">
            <h4 className="text-portfolio-purple font-medium mb-2 text-lg">Hello, I'm</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
              Neha Rana
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              Software Engineer & AI Developer
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-lg">
              Computer Science graduate from Nirma University with expertise in AI, Machine Learning, and Full Stack Development.
              Passionate about solving complex problems and creating innovative solutions.
            </p>
            
            <div className="flex gap-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/neha-rana-ba0212248/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/nehaa3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:rananehaa77@gmail.com"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-lightPurple hover:bg-portfolio-purple">
                Download Resume
              </Button>
              <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="mb-4 mx-auto flex justify-center">
                  <TabsTrigger value="profile" className="rounded-full px-6">Profile</TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="mt-0 flex justify-center">
                  <div className="rounded-full bg-gradient-to-br from-portfolio-lightPurple to-portfolio-purple p-1 animate-fade-in">
                    <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-full">
                      <AvatarImage 
                        src="/lovable-uploads/d831f8c5-7489-46ed-b149-263a60d050ec.png" 
                        alt="Neha Rana" 
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl bg-portfolio-purple text-white">NR</AvatarFallback>
                    </Avatar>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">👩‍💻</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-gray-500 mb-2">Scroll Down</span>
          <ChevronDown size={20} className="text-portfolio-purple" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
