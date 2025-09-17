import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code, Database, Cloud, Palette } from "lucide-react";

const About = () => {
  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "C", "SQL"],
    "Frameworks & Libraries": ["React.js", "Node.js", "FastAPI", "Express.js", "TailwindCSS", "TensorFlow", "PyTorch"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools & Platforms": ["Git", "GitHub", "Linux", "Docker", "VS Code", "Postman"],
    "AI/ML": ["Machine Learning", "Deep Learning", "Computer Vision", "Reinforcement Learning", "OpenCV", "Stable Baselines3"],
    "Specializations": ["Full-Stack Development", "Data Structures & Algorithms", "DBMS", "Computer Networks"]
  };

  const education = [
    {
      degree: "B.Tech in Computer Science (AI/ML)",
      institution: "Seshadri Rao Gudlavalleru Engineering College", 
      duration: "2021 - 2025",
      cgpa: "7.31",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      duration: "2019 - 2021", 
      cgpa: "8.37",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const certifications = [
    "MERN Stack Certification - SmartInternz (2024)",
    "IBM Machine Learning with Python - edX (2024)",
    "CCNA v7: Networking, Security & Automation - Cisco (2024)"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science graduate specializing in AI/ML, passionate about creating intelligent solutions 
            and combining technical expertise with creative visual storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <Card className="card-gradient shadow-soft hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-accent" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-accent pl-6 pb-4 last:pb-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-muted-foreground">{edu.duration}</span>
                          <Badge variant="secondary">CGPA: {edu.cgpa}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="card-gradient shadow-soft hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <p className="font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="card-gradient shadow-soft">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Code className="w-6 h-6 text-accent" />
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    {category === "Databases" && <Database className="w-4 h-4 text-accent" />}
                    {category === "Tools & Platforms" && <Cloud className="w-4 h-4 text-accent" />}
                    {category === "AI/ML" && <Palette className="w-4 h-4 text-accent" />}
                    {!["Databases", "Tools & Platforms", "AI/ML"].includes(category) && <Code className="w-4 h-4 text-accent" />}
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-accent/10 transition-smooth">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;