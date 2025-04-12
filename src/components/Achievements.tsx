
import React from 'react';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Award, Medal, Certificate } from 'lucide-react';

const AchievementCard = ({ icon: Icon, title, description }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <div className="bg-portfolio-purple/10 p-2 rounded-full">
          <Icon className="text-portfolio-purple" size={20} />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Highest CodeForces Rank - 2705",
      description: "CodeForcesRound Div2"
    },
    {
      icon: Medal,
      title: "All India Vibrant Hackathon'23",
      description: "Certificate of Participation"
    },
    {
      icon: Certificate,
      title: "AI Enable Vision Quiz Hackathon",
      description: "Certificate of Participation"
    },
    {
      icon: Medal,
      title: "Online National Level Mixer Hackathon",
      description: "Certificate of Participation"
    },
    {
      icon: Certificate,
      title: "Foundations of User Experience (UX) Design",
      description: "Course Certificate from Google"
    },
    {
      icon: Certificate,
      title: "Software Engineering Virtual Experience Program",
      description: "Certificate of Completion"
    },
    {
      icon: Certificate,
      title: "Advanced Learning Algorithms by DeepLearning.AI",
      description: "Course Certificate from Coursera"
    },
    {
      icon: Certificate,
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      description: "Course Certificate from Coursera"
    },
    {
      icon: Certificate,
      title: "Essentials of Data Science from Infosys",
      description: "Course Certificate"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              icon={achievement.icon} 
              title={achievement.title} 
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
