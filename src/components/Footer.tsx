
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-darkPurple text-white py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#home" className="text-2xl font-bold font-heading mb-4 md:mb-0">
            Neha<span className="text-portfolio-lightPurple">.</span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-portfolio-lightPurple transition-colors">Home</a>
            <a href="#about" className="hover:text-portfolio-lightPurple transition-colors">About</a>
            <a href="#skills" className="hover:text-portfolio-lightPurple transition-colors">Skills</a>
            <a href="#experience" className="hover:text-portfolio-lightPurple transition-colors">Experience</a>
            <a href="#projects" className="hover:text-portfolio-lightPurple transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-portfolio-lightPurple transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-portfolio-lightPurple transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2025 Neha Rana. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/neha-rana-ba9212248/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-lightPurple transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/neha13rana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-lightPurple transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:rananeha572@gmail.com"
              className="hover:text-portfolio-lightPurple transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-portfolio-lightPurple hover:bg-portfolio-purple text-white p-3 rounded-full shadow-md transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
