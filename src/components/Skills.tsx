
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Database, Brain, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-portfolio-purple" />,
      skills: ["Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS", "Java" , "React", "Typescript"]
    },
    {
      title: "Tools & Technologies",
      icon: <Server className="text-portfolio-purple" />,
      skills: ["Google Cloud Platform", "Machine Learning", "Deep Learning (PyTorch, TensorFlow)", "Prompt Engineering", "NLP (Transformers, RAG, Conversational AI)", "Data Mining"]
    },
    {
      title: "Frameworks",
      icon: <Database className="text-portfolio-purple" />,
      skills: ["Langchain", "Keras", "PyTorch", "Django", "Flask", "Streamlit", "Huggingface" , "Numpy" , "Pandas" , "Matplotlib"]
    },
    {
      title: "Developer Tools & Databases",
      icon: <Wrench className="text-portfolio-purple" />,
      skills: ["MySQL", "MongoDB" , "Cassandra", "Git", "GitHub", "Linux/Unix", "Postman", "Jupyter", "Google Colab", "LaTeX", "Kaggle", "Testing Tools (JUnit, Pytest)", "VectorDB(chroma, faiss, milvus)"]
    },
    {
    title: "AI Tools",
    icon: <Sparkles className="text-portfolio-purple" />,
    skills: ["ChatGPT", "Google Gemini", "GitHub Copilot", "Replit", "Lovable", "n8n", "Canva", "Notion AI", "Perplexity AI", "Claude" ,"Gamma", "Notebooklm" ,"Firebase Studio"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-portfolio-purple" />,
      skills: ["Problem Solving", "Leadership", "Communication", "Creativity", "Team Management" ,"Adaptability", "Teamwork", "Critical Thinking", "Organizational Skills", "Active Learning"]
    },
    {
      title: "Course Work",
      icon: <Brain className="text-portfolio-purple" />,
      skills: ["Data structures and algorithms", "Data base management systems", "System Design" , "Computer networks", "OOP", "OS", "Software Engineering", "Data Mining", "Cryptographic Algorithms", "Software Testing and Quality Assurance"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-all animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-portfolio-purple/10 p-2 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
