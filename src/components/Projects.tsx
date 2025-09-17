import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Mic, Rocket } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FramePickr-AI",
      description: "An AI-assisted web application that automatically ranks and selects best-quality photographs using advanced computer vision techniques.",
      longDescription: "Developed an intelligent image ranking pipeline that processes photographs using sharpness detection, brightness analysis, and face detection algorithms. Achieved ~85% accuracy across 1,000+ test images with a full-stack deployment.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Python", "FastAPI", "React.js", "TensorFlow", "OpenCV", "Docker", "GitHub Actions"],
      github: "https://github.com/kdsgit06",
      demo: "#",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Podcast Pulse", 
      description: "A full-stack web application for podcast transcription and structured summary generation using AI-powered insights.",
      longDescription: "Engineered a comprehensive platform that transcribes podcasts and extracts meaningful insights using AssemblyAI APIs. Reduced backend processing time by 40% through asynchronous job queues and designed an interactive React UI.",
      icon: <Mic className="w-6 h-6" />,
      tech: ["React.js", "FastAPI", "AssemblyAI", "PostgreSQL", "TailwindCSS", "Docker", "GitHub CI/CD"],
      github: "https://github.com/kdsgit06",
      demo: "#",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Safe Lunar Landings",
      description: "Research project implementing reinforcement learning for hazard detection and landing site selection using Chandrayaan-2 OHRC imagery.",
      longDescription: "Conducted cutting-edge research combining machine learning and reinforcement learning for lunar landing safety. Trained ML models on Chandrayaan-2 data achieving 82.3% precision and implemented PPO-based RL agents for autonomous landing decisions.",
      icon: <Rocket className="w-6 h-6" />,
      tech: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Stable Baselines3", "Matplotlib", "Seaborn"],
      github: "https://github.com/kdsgit06",
      demo: "#",
      gradient: "from-orange-500 to-red-600",
      isResearch: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects spanning AI/ML, full-stack development, and research initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient shadow-soft hover-lift group overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-accent transition-smooth">
                  {project.title}
                  {project.isResearch && (
                    <Badge variant="secondary" className="ml-2 text-xs">Research</Badge>
                  )}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="hover-lift"
          >
            <a 
              href="https://github.com/kdsgit06" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;