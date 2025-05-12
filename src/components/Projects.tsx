
// import React from 'react';
// import { 
//   Card, 
//   CardContent, 
//   CardDescription, 
//   CardFooter,  
//   CardHeader, 
//   CardTitle 
// } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Github, ExternalLink } from 'lucide-react';
// // import React, { useState } from 'react';
// // import { 
// //   Card, 
// //   CardContent, 
// //   CardDescription, 
// //   CardFooter,  
// //   CardHeader, 
// //   CardTitle 
// // } from '@/components/ui/card';
// // import { Badge } from '@/components/ui/badge';
// // import { Button } from '@/components/ui/button';
// // import { Github, ExternalLink } from 'lucide-react';

// // const Projects = () => {
// //   const [expandedDescriptions, setExpandedDescriptions] = useState({});

// //   const toggleDescription = (index) => {
// //     setExpandedDescriptions((prevState) => ({
// //       ...prevState,
// //       [index]: !prevState[index]
// //     }));
// //   };

// const Projects = () => {
//   const projects = [
//     {
//       title: "University Chatbot System",
//       description: "A chatbot that resolves student queries related to Nirma University. Made with Django and NLP, it includes an authentication system for safe login and signup with email confirmation.",
//       skills: ["Python", "Django", "Web Development", "NLP", "Authentication"],
//       image: "https://placehold.co/600x400?text=University+Chatbot",
//       github: "https://github.com/neha13rana/University-Chatbot-_NIH-project",
//     },
//     {
//       title: "Multimind Chatbot",
//       description: "A chatbot that answers user queries on uploaded PDFs, images, or simple text-based questions. Made with Python, Langchain, and Streamlit, it leverages LLM and prompt engineering.",
//       skills: ["Python", "Langchain", "Streamlit", "Prompt Engineering", "LLM"],
//       image: "https://placehold.co/600x400?text=Multimind+Chatbot",
//       github: "https://github.com/neha13rana/Multimindbot",
//       demo: "https://huggingface.co/spaces/Neha13/Multimindbot",
//     },
//     {
//       title: "Cloth Recommendation System",
//       description: "Built a cloth recommendation system using content filtering, generating tags with Word2Vec, optimizing with sparse cosine similarity, and creating a practical matrix with reduced latent overhead.",
//       skills: ["Data mining", "Recommender Systems", "NLP", "ML"],
//       image: "https://placehold.co/600x400?text=Recommender+System",
//       github: "https://github.com/neha13rana/Cloth-Recommendation-System",
//     },
//     {
//       title: "AI Content Detector",
//       description: "A tool to detect AI content in text using Streamlit, NLP, and Machine Learning. 95% accuracy was achieved using CountVectorizer, TFIDF-Transformer, and multinomial Naive Bayes.",
//       skills: ["Streamlit", "Natural Language Processing", "Machine Learning"],
//       image: "https://placehold.co/600x400?text=AI+Content+Detector",
//       github: "https://github.com/neha13rana/AI-Content-Detector",
//       demo: "https://huggingface.co/spaces/Neha13/AI_Content_Detector",
//     },
//     {
//       title: "Student Counselling Chatbot",
//       description: "A chatbot designed to assist students with counselling needs and academic guidance.",
//       skills: ["Python", "NLP", "Machine Learning", "Chatbot"],
//       image: "https://placehold.co/600x400?text=Student+Counselling",
//       github: "https://github.com/neha13rana/Student_Counselling_Chatbot",
//       demo: "https://huggingface.co/spaces/Neha13/Student_Counselling_Bot",
//     },
//       {
//       title: "LL1, SLR1 - Parser Application",
//       description: "This is a user-friendly LL(1) and SLR(1) Parser Visualizer built using Python and Streamlit. The applications allow users to input context-free grammars, generate parsing tables, and simulate parsing of input strings with detailed visual feedback — perfect for students and educators in compiler design and automata theory.",
//       skills: ["Python", "Streamlit", "Pandas", "Compiler Construction"],
//       image: "https://placehold.co/600x400?text=Parser+Application",
//       github: "https://github.com/neha13rana/Parser-LL1-SLR1-Application",
//       demo1: "https://huggingface.co/spaces/Neha13/cc1",
//       demo2: "https://huggingface.co/spaces/Neha13/CC",
//     },
//       {
//       title: "Stereotypical Bias Analyzer",
//       description: "This study investigates stereotypical bias in pre-trained language models, which often reflect societal biases due to training on large-scale real-world data. We introduce a novel, comprehensive dataset merging four existing sources to assess bias across ten domains including race, gender, and religion. By evaluating models like BERT and RoBERTa, we reveal their susceptibility to stereotypical bias, underscoring the importance of mitigating such biases in NLP applications.",
//       skills: ["Python", "NLP", "ML/DL", "Flask", "Data Engineering", "Transformers & Hugging Face"],
//       image: "https://placehold.co/600x400?text=Bias+Analyzer",
//       github: "https://github.com/neha13rana/Stereotypical-Bias-Analyzer",
//     },
//       {
//       title: "Feedback processor",
//       description: "Pulpy-Juices is a web application developed with the Django framework. Its primary purpose is twofold: to gather feedback from real customers about the various products, and to present the juice company manager with an analysis of the feedback received from all clients. The analysis is displayed in various graphs to aid comprehension.",
//       skills: ["Python", "Data Analysis", "Django" , "HTML" , "CSS"],
//       image: "https://placehold.co/600x400?text=Feedback+Processor",
//       github: "https://github.com/neha13rana/feedback-processor",
//     },
//     {
//       title: "Multilingual FAQ Management System with Django",
//       description: "This project provides a robust solution for managing FAQs in multiple languages with a user-friendly interface. It includes advanced features such as WYSIWYG editor support, API endpoints for multilingual operations, caching for improved performance, and a well-documented workflow for deployment and testing.",
//       skills: ["Python","Django","REST API Development","Multilingual Support","WYSIWYG Editors (django-ckeditor)","Redis Caching","Google Translate API Integration","Docker & Containerization","Unit Testing (pytest)","PEP8 Compliance","Version Control with Git","Deployment (Heroku/AWS)","Documentation Writing"],
//       image: "https://placehold.co/600x400?text=FAQ+Management+System",
//       github: "https://github.com/neha13rana/multilingual-faq-management-system-with-django",
//     }
    
//   ];

//   return (
//     <section id="projects" className="py-20">
//       <div className="section-container">
//         <h2 className="section-title">Projects</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
//           {projects.map((project, index) => (
//             <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
//               <div className="h-48 overflow-hidden bg-gray-100">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <CardHeader>
//                 <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
//                 <CardDescription className="line-clamp-2">{project.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.skills.map((skill, skillIndex) => (
//                     <Badge key={skillIndex} variant="secondary" className="bg-gray-100">
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <Button variant="outline" size="sm" className="gap-2">
//                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//                     <Github size={16} />
//                     <span>GitHub</span>
//                   </a>
//                 </Button>
//                 <Button size="sm" className="bg-portfolio-lightPurple hover:bg-portfolio-purple gap-2">
//                   <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//                     <ExternalLink size={16} />
//                     <span>Live Demo</span>
//                   </a>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React, { useState } from 'react';
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
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const projects = [
    {
      title: "University Chatbot System",
      description: "A chatbot that resolves student queries related to Nirma University. Made with Django and NLP, it includes an authentication system for safe login and signup with email confirmation.",
      skills: ["Python", "Django", "Web Development", "NLP", "Authentication"],
      image: "https://placehold.co/600x400?text=University+Chatbot",
      github: "https://github.com/neha13rana/University-Chatbot-_NIH-project",
    },
    {
      title: "Multimind Chatbot",
      description: "A chatbot that answers user queries on uploaded PDFs, images, or simple text-based questions. Made with Python, Langchain, and Streamlit, it leverages LLM and prompt engineering.",
      skills: ["Python", "Langchain", "Streamlit", "Prompt Engineering", "LLM"],
      image: "https://placehold.co/600x400?text=Multimind+Chatbot",
      github: "https://github.com/neha13rana/Multimindbot",
      demo: "https://huggingface.co/spaces/Neha13/Multimindbot",
    },
    {
      title: "Cloth Recommendation System",
      description: "Built a cloth recommendation system using content filtering, generating tags with Word2Vec, optimizing with sparse cosine similarity, and creating a practical matrix with reduced latent overhead.",
      skills: ["Data mining", "Recommender Systems", "NLP", "ML"],
      image: "https://placehold.co/600x400?text=Recommender+System",
      github: "https://github.com/neha13rana/Cloth-Recommendation-System",
    },
    {
      title: "AI Content Detector",
      description: "A tool to detect AI content in text using Streamlit, NLP, and Machine Learning. 95% accuracy was achieved using CountVectorizer, TFIDF-Transformer, and multinomial Naive Bayes.",
      skills: ["Streamlit", "Natural Language Processing", "Machine Learning"],
      image: "https://placehold.co/600x400?text=AI+Content+Detector",
      github: "https://github.com/neha13rana/AI-Content-Detector",
      demo: "https://huggingface.co/spaces/Neha13/AI_Content_Detector",
    },
    {
      title: "Student Counselling Chatbot",
      description: "A chatbot designed to assist students with counselling needs and academic guidance.",
      skills: ["Python", "NLP", "Machine Learning", "Chatbot"],
      image: "https://placehold.co/600x400?text=Student+Counselling",
      github: "https://github.com/neha13rana/Student_Counselling_Chatbot",
      demo: "https://huggingface.co/spaces/Neha13/Student_Counselling_Bot",
    },
    {
      title: "LL1, SLR1 - Parser Application",
      description: "This is a user-friendly LL(1) and SLR(1) Parser Visualizer built using Python and Streamlit. The applications allow users to input context-free grammars, generate parsing tables, and simulate parsing of input strings with detailed visual feedback — perfect for students and educators in compiler design and automata theory.",
      skills: ["Python", "Streamlit", "Pandas", "Compiler Construction"],
      image: "https://placehold.co/600x400?text=Parser+Application",
      github: "https://github.com/neha13rana/Parser-LL1-SLR1-Application",
      demo: "https://huggingface.co/spaces/Neha13/cc1",
      demo: "https://huggingface.co/spaces/Neha13/CC",
    },
    {
      title: "Stereotypical Bias Analyzer",
      description: "This study investigates stereotypical bias in pre-trained language models, which often reflect societal biases due to training on large-scale real-world data. We introduce a novel, comprehensive dataset merging four existing sources to assess bias across ten domains including race, gender, and religion. By evaluating models like BERT and RoBERTa, we reveal their susceptibility to stereotypical bias, underscoring the importance of mitigating such biases in NLP applications.",
      skills: ["Python", "NLP", "ML/DL", "Flask", "Data Engineering", "Transformers & Hugging Face"],
      image: "https://placehold.co/600x400?text=Bias+Analyzer",
      github: "https://github.com/neha13rana/Stereotypical-Bias-Analyzer",
    },
    {
      title: "Feedback processor",
      description: "Pulpy-Juices is a web application developed with the Django framework. Its primary purpose is twofold: to gather feedback from real customers about the various products, and to present the juice company manager with an analysis of the feedback received from all clients. The analysis is displayed in various graphs to aid comprehension.",
      skills: ["Python", "Data Analysis", "Django", "HTML", "CSS"],
      image: "https://placehold.co/600x400?text=Feedback+Processor",
      github: "https://github.com/neha13rana/feedback-processor",
    },
    {
      title: "Multilingual FAQ Management System with Django",
      description: "This project provides a robust solution for managing FAQs in multiple languages with a user-friendly interface. It includes advanced features such as WYSIWYG editor support, API endpoints for multilingual operations, caching for improved performance, and a well-documented workflow for deployment and testing.",
      skills: [
        "Python", "Django", "REST API Development", "Multilingual Support",
        "WYSIWYG Editors (django-ckeditor)", "Redis Caching", "Google Translate API Integration",
        "Docker & Containerization", "Unit Testing (pytest)", "PEP8 Compliance",
        "Version Control with Git", "Deployment (Heroku/AWS)", "Documentation Writing"
      ],
      image: "https://placehold.co/600x400?text=FAQ+Management+System",
      github: "https://github.com/neha13rana/multilingual-faq-management-system-with-django",
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
                <CardDescription>
                  {expandedDescriptions[index]
                    ? project.description
                    : `${project.description.substring(0, 100)}...`}
                  <button 
                    onClick={() => toggleDescription(index)} 
                    className="text-blue-500 ml-2">
                    {expandedDescriptions[index] ? 'Show Less' : 'Show More'}
                  </button>
                </CardDescription>
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
                {project.demo && (
                  <Button size="sm" className="bg-portfolio-lightPurple hover:bg-portfolio-purple gap-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
