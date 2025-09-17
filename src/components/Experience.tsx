import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      title: "Machine Learning Virtual Intern",
      company: "SmartInternz (SmartBridge)", 
      duration: "Jun 2024 - Dec 2024",
      location: "Remote",
      type: "Guided Program",
      description: "Completed a comprehensive 6-month guided internship program focusing on machine learning applications and real-world project development.",
      achievements: [
        "Built regression model to predict plant power output using Python & scikit-learn",
        "Achieved ~85% accuracy (R² score) on predictive modeling tasks",
        "Documented complete workflow and findings on GitHub",
        "Participated in structured training sessions and mentorship programs"
      ],
      skills: ["Python", "scikit-learn", "Machine Learning", "Data Analysis", "GitHub"]
    }
  ];

  const certifications = [
    {
      name: "MERN Stack Certification",
      issuer: "SmartInternz",
      year: "2024",
      category: "Full-Stack Development"
    },
    {
      name: "IBM Machine Learning with Python",
      issuer: "edX",
      year: "2024", 
      category: "Machine Learning"
    },
    {
      name: "CCNA v7: Networking, Security & Automation",
      issuer: "Cisco",
      year: "2024",
      category: "Networking"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional experience and industry certifications that showcase my commitment to continuous learning.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-accent" />
            Professional Experience
          </h3>
          
          {experience.map((exp, index) => (
            <Card key={index} className="card-gradient shadow-soft hover-lift">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="text-lg font-semibold text-accent mb-2">{exp.company}</div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Badge className="w-6 h-6 bg-accent text-accent-foreground p-1" />
            Industry Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient shadow-soft hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Badge className="w-6 h-6 bg-accent text-accent-foreground p-1" />
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                  <div className="flex justify-center gap-2">
                    <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                    <Badge variant="secondary" className="text-xs">{cert.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;