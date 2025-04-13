import React from 'react';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Award, Medal, FileText } from 'lucide-react';

const AchievementCard = ({ icon: Icon, title, description, link }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <div className="bg-portfolio-purple/10 p-2 rounded-full">
          <Icon className="text-portfolio-purple" size={20} />
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardTitle className="text-lg hover:underline text-blue-600">
            {title}
          </CardTitle>
        </a>
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
      title: "400+ Codeforces Problems Solved",
      description: "Continuous practice for enhancing DSA skills",
      link: "https://codeforces.com/profile/neha13rana"
    },
    {
      icon: Medal,
      title: "SSIP New India Vibrant Hackathon'23 Finalist",
      description: "Selected among top teams nationwide",
      link: "https://example.com/ssip-certificate"
    },
    {
      icon: Medal,
      title: "All India Women Only Hackathon’23",
      description: "Selected among top teams nationwide",
      link: "https://example.com/women-hackathon-certificate"
    },
    {
      icon: FileText,
      title: "Project Selected by Education Dept, Govt. of Gujarat",
      description: "For integration with their official website",
      link: "https://example.com/gujarat-project-cert"
    },
    {
      icon: Medal,
      title: "Online National Level Mined Hackathon",
      description: "Certificate of Participation",
      link: "https://example.com/mined-hackathon-certificate"
    },
    {
      icon: FileText,
      title: "Foundations of User Experience (UX) Design",
      description: "Course Certificate from Google",
      link: "https://coursera.org/verify/google-ux-cert-id"
    },
    {
      icon: FileText,
      title: "Software Engineering Virtual Experience Program by Goldman Sachs",
      description: "Certificate of Completion",
      link: "https://example.com/goldman-sachs-certificate"
    },
    {
      icon: FileText,
      title: "Advanced Learning Algorithms by DeepLearning.AI",
      description: "Course Certificate from Coursera",
      link: "https://coursera.org/verify/advanced-learning-cert-id"
    },
    {
      icon: FileText,
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      description: "Course Certificate from Coursera",
      link: "https://coursera.org/verify/unsupervised-cert-id"
    },
    {
      icon: FileText,
      title: "Python for Data Science from Infosys",
      description: "Course Certificate",
      link: "https://example.com/infosys-python-cert"
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
              link={achievement.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

// import React from 'react';
// import { 
//   Card, 
//   CardContent,
//   CardDescription,
//   CardHeader, 
//   CardTitle 
// } from '@/components/ui/card';
// import { Award, Medal, FileText } from 'lucide-react';

// const AchievementCard = ({ icon: Icon, title, description }) => (
//   <Card className="hover:shadow-md transition-shadow">
//     <CardHeader className="pb-2">
//       <div className="flex items-center gap-3">
//         <div className="bg-portfolio-purple/10 p-2 rounded-full">
//           <Icon className="text-portfolio-purple" size={20} />
//         </div>
//         <CardTitle className="text-lg">{title}</CardTitle>
//       </div>
//     </CardHeader>
//     <CardContent>
//       <CardDescription>{description}</CardDescription>
//     </CardContent>
//   </Card>
// );

// const Achievements = () => {
//   const achievements = [
//     {
//       icon: Award,
//       title: "400+ Codeforces Problems Solved",
//       description: "Continuous practice for enhancing DSA skills"
//     },
//     {
//       icon: Medal,
//       title: "SSIP New India Vibrant Hackathon'23 Finalist",
//       description: "Selected among top teams nationwide"
//     },
//     {
//       icon: Medal,
//       title: "All India Women Only Hackathon’23",
//       description: "Selected among top teams nationwide"
//     },
//     {
//       icon: FileText,
//       title: "Project Selected by Education Dept, Govt. of Gujarat",
//       description: "For integration with their official website"
//     },
//     {
//       icon: Medal,
//       title: "Online National Level Mined Hackathon",
//       description: "Certificate of Participation"
//     },
//     {
//       icon: FileText,
//       title: "Foundations of User Experience (UX) Design",
//       description: "Course Certificate from Google"
//     },
//     {
//       icon: FileText,
//       title: "Software Engineering Virtual Experience Program by Goldman Sachs",
//       description: "Certificate of Completion"
//     },
//     {
//       icon: FileText,
//       title: "Advanced Learning Algorithms by DeepLearning.AI",
//       description: "Course Certificate from Coursera"
//     },
//     {
//       icon: FileText,
//       title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
//       description: "Course Certificate from Coursera"
//     },
//     {
//       icon: FileText,
//       title: "Python for Data Science from Infosys",
//       description: "Course Certificate"
//     }
//   ];

//   return (
//     <section id="achievements" className="py-20 bg-gray-50">
//       <div className="section-container">
//         <h2 className="section-title">Achievements</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {achievements.map((achievement, index) => (
//             <AchievementCard 
//               key={index} 
//               icon={achievement.icon} 
//               title={achievement.title} 
//               description={achievement.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;
