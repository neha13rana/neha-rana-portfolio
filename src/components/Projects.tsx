
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,  
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "University Chatbot System",
      description: "A chatbot that resolves student queries related to Nirma University. Made with Django and NLP, it includes an authentication system for safe login and signup with email confirmation.",
      skills: ["Python", "Django", "Web Development", "NLP", "Authentication"],
      image: "https://placehold.co/600x400?text=University+Chatbot",
      github: "https://github.com/neha13rana/University-Chatbot-_NIH-project",
      demo: "#",
    },
    {
      title: "Multimind Chatbot",
      description: "A chatbot that answers user queries on uploaded PDFs, images, or simple text-based questions. Made with Python, Langchain, and Streamlit, it leverages LLM and prompt engineering.",
      skills: ["Python", "Langchain", "Streamlit", "Prompt Engineering", "LLM"],
      image: "https://placehold.co/600x400?text=Multimind+Chatbot",
      github: "https://github.com/neha13rana/Multimindbot",
      demo: "#",
    },
    {
      title: "Cloth Recommendation System",
      description: "Built a cloth recommendation system using content filtering, generating tags with Word2Vec, optimizing with sparse cosine similarity, and creating a practical matrix with reduced latent overhead.",
      skills: ["Data mining", "Recommender Systems", "NLP", "ML"],
      image: "https://placehold.co/600x400?text=Recommender+System",
      github: "https://github.com/neha13rana/Cloth-Recommendation-System",
      demo: "#",
    },
    {
      title: "AI Content Detector",
      description: "A tool to detect AI content in text using Streamlit, NLP, and Machine Learning. 95% accuracy was achieved using CountVectorizer, TFIDF-Transformer, and multinomial Naive Bayes.",
      skills: ["Streamlit", "Natural Language Processing", "Machine Learning"],
      image: "https://placehold.co/600x400?text=AI+Content+Detector",
      github: "https://github.com/neha13rana/AI-Content-Detector",
      demo: "#",
    },
    {
      title: "Student Counselling Chatbot",
      description: "A chatbot designed to assist students with counselling needs and academic guidance.",
      skills: ["Python", "NLP", "Machine Learning", "Chatbot"],
      image: "https://placehold.co/600x400?text=Student+Counselling",
      github: "https://github.com/neha13rana/Student_Counselling_Chatbot",
      demo: "#",
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-gray-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button size="sm" className="bg-portfolio-lightPurple hover:bg-portfolio-purple gap-2">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
