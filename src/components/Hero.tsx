
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown, Calendar } from 'lucide-react';
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
              <span className="font-semibold text-portfolio-purple">CTO</span> @ <a href="https://aethenix.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-portfolio-purple hover:underline">Aethenix</a> | <span className="font-semibold text-portfolio-purple">Software Engineer</span> & <span className="font-semibold text-portfolio-purple">AI Developer</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-lg">
              As the <span className="font-semibold text-portfolio-purple">CTO at <a href="https://aethenix.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Aethenix</a></span> and a <span className="font-medium text-gray-800">Computer Science graduate</span> from Nirma University, I specialize in <span className="font-semibold text-portfolio-purple">AI</span>, <span className="font-semibold text-portfolio-purple">Machine Learning</span>, and <span className="font-semibold text-portfolio-purple">software engineering</span>. I am deeply passionate about driving <span className="font-medium text-gray-800">technological innovation</span> and solving complex problems at scale. Additionally, I serve as a <span className="font-semibold text-portfolio-purple">Mentor</span> across multiple platforms, conducting teaching sessions and providing <span className="font-semibold text-portfolio-purple">AI, Tech & Career Guidance</span>.
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/neha-rana-ba9212248/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/neha13rana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:rananeha572@gmail.com"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://topmate.io/neha_rana_13"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                title="Book a call on Topmate"
              >
                <Calendar size={20} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10" variant="outline" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState({}, '', '/projects');
                }
              }}>
                View Projects
              </Button>
              <Button className="bg-portfolio-lightPurple hover:bg-portfolio-purple" onClick={() => window.open('https://pages.topmate.io/site.html?thread_id=56b2c8bc-adc0-4207-98ca-5f8a94ccb77f', '_blank')}>
                Book a 1:1 Session
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <Tabs defaultValue="profile" className="w-full">
                {/* <TabsList className="mb-4 mx-auto flex justify-center"> */}
                {/* <TabsTrigger value="profile" className="rounded-full px-6">Profile</TabsTrigger> */}
                {/* </TabsList> */}
                <TabsContent value="profile" className="mt-0 flex justify-center">
                  <div className="rounded-full bg-gradient-to-br from-portfolio-lightPurple to-portfolio-purple p-1 animate-fade-in">
                    <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-full">
                      <AvatarImage
                        src="/nehaprofile.jpeg"
                        alt="Neha Rana - CTO at Aethenix and AI Developer"
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
