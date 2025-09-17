import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Doondi Subhash
            <span className="block text-gradient">Kaladurgi</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            AI/ML Engineer & Creative Visual Storyteller
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Crafting intelligent solutions through machine learning while telling stories through pixels and code
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 rounded-full transition-spring hover-lift"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-spring hover-lift"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/kdsgit06" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover-lift"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/doondi-subhash-63122b22a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover-lift"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:doondi.dev@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover-lift"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
          aria-label="Scroll to About Section"
        >
          <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default Hero;