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
      title: "Highest rank 2705 in DIV2 codeforces",
      description: "Continuous practice for enhancing DSA & coding skills",
      link: "https://codeforces.com/profile/Neha.Rana"
    },
    {
      
    },
    {
      icon: Medal,
      title: "SSIP New India Vibrant Hackathon'23 Finalist",
      description: "Selected among top teams nationwide",
      link: "https://drive.google.com/file/d/1n_mZvirhuSnGwDlDgkjxdWh-6XTDZB2x/view?pli=1"
    },
    {
      icon: Medal,
      title: "All India Women Only Hackathon’23",
      description: "Selected among top teams nationwide",
      link: "https://drive.google.com/file/d/15vD6vIozT94LRdsnD7FwYnDXVs-PRgGj/view"
    },
    {
      icon: FileText,
      title: "Project Selected by Education Dept, Govt. of Gujarat",
      description: "For integration with their official website",
      link: "https://drive.google.com/file/d/1n_mZvirhuSnGwDlDgkjxdWh-6XTDZB2x/view?pli=1"
    },
    {
      icon: Medal,
      title: "Online National Level Mined Hackathon",
      description: "Certificate of Participation",
      link: "https://drive.google.com/file/d/1xCdaGwuJN_UtR4bvU4dSbnN5-twU8JWu/view"
    },
    {
      icon: FileText,
      title: "Foundations of User Experience (UX) Design",
      description: "Course Certificate from Google",
      link: "https://drive.google.com/file/d/1CfRWjQmQJ9DOZo64i-46ND8dUCEU6Jeu/view"
    },
    {
      icon: FileText,
      title: "Software Engineering Virtual Experience Program by Goldman Sachs",
      description: "Certificate of Completion",
      link: "https://drive.google.com/file/d/1tN1DtS-75Tou3qi2tIwiJ_kmStOPgaBD/view"
    },
    {
      icon: FileText,
      title: "Advanced Learning Algorithms by DeepLearning.AI",
      description: "Course Certificate from Coursera",
      link: "https://drive.google.com/file/d/1LvGBDYXpyNmxIju5H4wWaCeoccO9ZG1K/view"
    },
    {
      icon: FileText,
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      description: "Course Certificate from Coursera",
      link: "https://drive.google.com/file/d/11OhQxj4iZKu3iS3e3xM6DDO70kOeufa5/view"
    },
    {
      icon: FileText,
      title: "Python for Data Science from Infosys",
      description: "Course Certificate",
      link: "https://drive.google.com/file/d/1VKIArfI1XpQ2yl3SYqi48tzF63eymW4_/view"
    },
    {
      icon: FileText,
      title: "Github Foundation",
      description: "Certification exam",
      link: "https://www.credly.com/go/CnW65Sdm"
    },
    {
      icon: Medal,
      title: "Google Cloud",
      description: "Skill Boost",
      link: "https://www.cloudskillsboost.google/public_profiles/7c622c86-c668-461b-a946-6cba77321976"
    },
    {
      icon: Award,
      title: "ICPC Asia Kanpur Preliminary 2024",
      description: "Participated in the International Collegiate Programming Contest (ICPC) is the largest computer programming contest in the world. ",
      link: "https://drive.google.com/file/d/1QBC0k3wCJAirT7OgpdqjwvGTZwhLDrAV/view"
      
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Achievements & Certifications</h2>
        
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
