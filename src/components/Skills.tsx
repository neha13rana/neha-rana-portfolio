
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Database, Brain, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-portfolio-purple" />,
      skills: ["Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Technologies",
      icon: <Server className="text-portfolio-purple" />,
      skills: ["Machine Learning", "Generative AI", "NLP", "Deep Learning"]
    },
    {
      title: "Frameworks",
      icon: <Database className="text-portfolio-purple" />,
      skills: ["Langchain", "Keras", "PyTorch", "Django", "Flask", "Streamlit"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-portfolio-purple" />,
      skills: ["Git", "MongoDB", "Cassandra", "MySQL"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-portfolio-purple" />,
      skills: ["Problem Solving", "Leadership", "Communication", "Networking", "Creativity", "Team Management"]
    },
    {
      title: "Course Work",
      icon: <Brain className="text-portfolio-purple" />,
      skills: ["DSA", "DBMS", "Computer Networks", "OOP", "OS", "Software Engineering", "Data Mining", "Cryptographic Algorithms", "Software Testing and Quality Assurance"]
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
