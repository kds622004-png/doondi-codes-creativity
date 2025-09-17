import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, ExternalLink, Award } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Safe Lunar Landings Using Reinforcement Learning and Chandrayaan-2 OHRC Imagery",
      conference: "IEEE NMITCON-2025",
      status: "To appear in IEEE Xplore",
      year: "2025",
      description: "This research presents a novel approach to lunar landing safety using reinforcement learning algorithms trained on real Chandrayaan-2 OHRC imagery data. The work combines computer vision techniques with PPO-based reinforcement learning for autonomous hazard detection and landing site selection.",
      category: "Research",
      link: "#",
      isUpcoming: true
    },
    {
      title: "Echoes of Gender: Voice Identity with Neural Networks",
      conference: "Hinweis CCIT-2024",
      status: "Published",
      year: "2024", 
      description: "An investigation into gender classification from voice patterns using deep neural networks. This work explores the acoustic features that contribute to gender identification and presents a comprehensive analysis of neural network architectures for voice-based gender recognition.",
      category: "AI/ML",
      link: "#",
      isUpcoming: false
    }
  ];

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Research contributions in artificial intelligence, machine learning, and space technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="card-gradient shadow-soft hover-lift group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-smooth">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {pub.isUpcoming && (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                        <Award className="w-3 h-3 mr-1" />
                        Upcoming
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {pub.category}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl leading-tight mb-3 group-hover:text-accent transition-smooth">
                  {pub.title}
                </CardTitle>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {pub.year}
                  </div>
                  <div className="font-medium text-foreground">
                    {pub.conference}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground font-medium">
                  {pub.status}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {pub.description}
                </p>
                
                <div className="flex justify-between items-center">
                  {pub.link !== "#" ? (
                    <Button 
                      size="sm" 
                      asChild
                      className="hover-lift"
                    >
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read Paper
                      </a>
                    </Button>
                  ) : (
                    <Badge variant="secondary" className="text-xs">
                      {pub.isUpcoming ? "Publication Pending" : "Link Coming Soon"}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More publications coming soon as I continue my research in AI/ML and space technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;