
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
      period: "January 2025 - May 2025",
      description: "Worked on AI powered tools (chatbot, summarizer) with Flask and Google Cloud Vertex AI, integrating RAG workflows and prompt engineering to evaluate LLMs and finalize Google Gemini models (by evaluating their performance).Built a Generative AI pipeline that transforms text into context aware diagrams using CoT prompting and LLM generated Mermaid code, dynamically rendered with Mermaid.js. Collaborated with the production team to refine and enhance the UI on Replit for improved user experience.",
      location: "On-site (Bangalore)",
    },
    {
      company: "Project for Education Department-Government of Gujarat",
      role: "Team Lead, Developer",
      period: "January 2024 - Feb 2025",
      description: " Led a team to develop Streamlit based multilingual chatbot using RAG with LangChain, FAISS, Groq, vertex ai. Implemented document verification, integrated OCR to enable chat with scanned documents,managed memory efficiently and applied prompt engineering to optimize pipelines for multilingual query resolution.",
      location: "Remote",
    },    
    {
      company: "Huggingface",
      role: "Open-Source AI Contributor",
      period: "2024 - Present",
      description: "Conceptualized, developed, and deployed multiple AI applications and models on Hugging Face Spaces, including: Gujarati Translator – Transformer-based multilingual translation system. AI Content Detector – Text classification model for detecting AI-generated content. MultimindBot and DocchatBOT – Conversational AI solutions for document-based question answering. Curated, structured, and published datasets such as Chatbot_Nirma_Dataset and Bias Identification to support NLP tasks and model training. Utilized Transformers, Fairseq, and PyTorch for model development, fine-tuning, and inference. Maintains a public profile showcasing all projects: huggingface.co/Neha13",
      location: "Remote",
    }
    {
      company: "iShape Technolab Pvt. Ltd.",
      role: "Web Development Intern",
      period: "June 2024 - July 2024",
      description: " Created a real-time chat app with PHP, AJAX & MySQL featuring secure authentication and privacy.",
      location: "On-site (Ahmedabad)",
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
