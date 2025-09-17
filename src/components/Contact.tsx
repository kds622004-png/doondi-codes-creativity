import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle, Send, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "doondi.dev@gmail.com",
      href: "mailto:doondi.dev@gmail.com",
      description: "Best way to reach me for collaborations"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      value: "Connect with me",
      href: "https://www.linkedin.com/in/doondi-subhash-63122b22a/",
      description: "Professional networking and updates"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View my repositories", 
      href: "https://github.com/kdsgit06",
      description: "Code, projects, and contributions"
    }
  ];

  const collaborationAreas = [
    "AI/ML Research Projects",
    "Full-Stack Web Development", 
    "Computer Vision Applications",
    "Open Source Contributions",
    "Photography & Visual Storytelling",
    "Technical Writing & Documentation"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Always excited to collaborate on innovative projects, discuss AI/ML research, or share insights about technology and creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <Card className="card-gradient shadow-soft mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're interested in collaborating on a project, discussing AI/ML innovations, 
                  or just want to connect - I'd love to hear from you!
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="group">
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth hover-lift"
                      >
                        <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-smooth">
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 group-hover:text-accent transition-smooth">
                            {contact.label}
                          </h4>
                          <p className="text-sm font-medium text-foreground/90 mb-1">
                            {contact.value}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {contact.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-gradient shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Based in India • Open to remote opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Collaboration Areas */}
          <div>
            <Card className="card-gradient shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6 text-accent" />
                  Collaboration Areas
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm passionate about working on diverse projects that combine technology with creativity. 
                  Here are some areas where I'd love to collaborate:
                </p>
                
                <div className="grid gap-3 mb-8">
                  {collaborationAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-accent">Currently Interested In:</h4>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li>• Reinforcement Learning applications in robotics</li>
                    <li>• Computer Vision for autonomous systems</li>
                    <li>• Full-stack AI/ML product development</li>
                    <li>• Open source contributions to ML libraries</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="card-gradient shadow-soft inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Ready to start a conversation?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  asChild
                  className="hover-lift"
                >
                  <a href="mailto:doondi.dev@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send me an email
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="hover-lift"
                >
                  <a 
                    href="https://www.linkedin.com/in/doondi-subhash-63122b22a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;