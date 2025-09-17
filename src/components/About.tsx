import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Code, Brain, Camera, Trophy, Target, User, Briefcase } from "lucide-react";

const About = () => {
  const personalityTraits = [
    { 
      icon: <Brain className="w-5 h-5" />, 
      title: "AI Researcher", 
      description: "Published IEEE papers on lunar landing safety using ML + RL",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      icon: <Camera className="w-5 h-5" />, 
      title: "Visual Artist", 
      description: "2+ years freelance Photoshop work + daily Lightroom edits",
      gradient: "from-orange-500 to-red-600"
    },
    { 
      icon: <Code className="w-5 h-5" />, 
      title: "Full-Stack Builder", 
      description: "From FastAPI backends to React frontends, I ship complete solutions",
      gradient: "from-green-500 to-teal-600"
    },
    { 
      icon: <Trophy className="w-5 h-5" />, 
      title: "Problem Solver", 
      description: "CCNA certified, MERN stack certified, always learning new tech",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const skills = [
    { name: "Python", level: 95, category: "Language", icon: "🐍" },
    { name: "Machine Learning", level: 90, category: "AI/ML", icon: "🤖" },
    { name: "React.js", level: 85, category: "Frontend", icon: "⚛️" },
    { name: "FastAPI", level: 88, category: "Backend", icon: "⚡" },
    { name: "TensorFlow", level: 82, category: "AI/ML", icon: "🧠" },
    { name: "Docker", level: 80, category: "DevOps", icon: "🐳" },
    { name: "Computer Vision", level: 85, category: "AI/ML", icon: "👁️" },
    { name: "JavaScript", level: 83, category: "Language", icon: "📜" },
    { name: "Photoshop", level: 90, category: "Creative", icon: "🎨" },
    { name: "Lightroom", level: 88, category: "Creative", icon: "📸" }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science (AI/ML)",
      institution: "Seshadri Rao Gudlavalleru Engineering College", 
      duration: "2021 - 2025",
      cgpa: "8.2",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Who Am I?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Final year CS student at Gudlavalleru Engineering College with a passion for AI research and visual storytelling. 
            <span className="text-accent font-medium"> I don't just code - I create intelligent solutions that matter.</span>
          </p>
          
          {/* Fun fact */}
          <div className="mt-8 inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm border border-accent/20">
            <span>💡</span>
            <span>Fun fact: I've published IEEE research while maintaining an 8.2/10 CGPA</span>
          </div>
        </div>

        {/* Personality Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {personalityTraits.map((trait, index) => (
            <Card key={index} className="card-gradient shadow-soft hover-lift group">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${trait.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {trait.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-accent transition-smooth">{trait.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{trait.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <Card className="card-gradient shadow-soft hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <User className="w-6 h-6 text-accent" />
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-accent">
                <p className="text-foreground/90 leading-relaxed font-medium">
                  "I believe the future belongs to those who can bridge technical depth with creative vision."
                </p>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Final year Computer Science student at <span className="text-accent font-medium">Gudlavalleru Engineering College</span> 
                with a focus on AI/ML research. Currently maintaining an <span className="text-accent font-medium">8.2/10 CGPA</span> 
                while publishing in IEEE conferences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My journey spans from training YOLO models on lunar crater data to building full-stack web applications 
                with React and FastAPI. I've contributed to the field with publications on reinforcement learning 
                for space exploration and neural networks for voice analysis.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me perfecting Lightroom edits or working on confidential 
                Photoshop projects for clients. This creative practice sharpens my eye for detail and 
                user experience in my technical work.
              </p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="card-gradient shadow-soft hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Code className="w-6 h-6 text-accent" />
                Technical Arsenal
              </CardTitle>
              <p className="text-muted-foreground">Technologies I use to build the future</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(
                  skills.reduce((acc, skill) => {
                    if (!acc[skill.category]) acc[skill.category] = [];
                    acc[skill.category].push(skill);
                    return acc;
                  }, {} as Record<string, typeof skills>)
                ).map(([category, categorySkills]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider flex items-center gap-2">
                      {category === 'AI/ML' && '🤖'}
                      {category === 'Language' && '💻'}
                      {category === 'Frontend' && '🎨'}
                      {category === 'Backend' && '⚙️'}
                      {category === 'DevOps' && '🚀'}
                      {category === 'Creative' && '✨'}
                      {category}
                    </h4>
                    <div className="grid gap-3">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="group">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{skill.icon}</span>
                              <span className="text-sm font-medium group-hover:text-accent transition-colors">{skill.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <Card className="card-gradient shadow-soft hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-accent" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
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
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                    <p className="font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Status */}
        <Card className="card-gradient shadow-soft hover-lift border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" />
              Current Status & Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20 hover:scale-105 transition-transform">
                <Brain className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                <h4 className="font-bold mb-2 text-blue-500">🎓 Graduating Soon</h4>
                <p className="text-sm text-muted-foreground">Final year, actively seeking ML Engineer roles</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-teal-600/10 rounded-lg border border-green-500/20 hover:scale-105 transition-transform">
                <Briefcase className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h4 className="font-bold mb-2 text-green-500">💼 Open to Work</h4>
                <p className="text-sm text-muted-foreground">Full-time AI/ML Engineer positions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-lg border border-orange-500/20 hover:scale-105 transition-transform">
                <Camera className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                <h4 className="font-bold mb-2 text-orange-500">📸 Creating Daily</h4>
                <p className="text-sm text-muted-foreground">Photography edits + freelance design work</p>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full border border-accent/20">
                <span className="animate-pulse">🔥</span>
                <span className="font-medium">Currently available for immediate start!</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;