import { ChevronDown, Github, Linkedin, Mail, Clock, MapPin, Code, Terminal, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState("");
  const fullText = "I build AI systems & capture visual stories...";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const typeText = () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTimeout(() => {
          setTypedText(fullText.slice(0, i));
        }, i * 100);
      }
    };
    
    const timeout = setTimeout(typeText, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      timeZone: 'Asia/Kolkata'
    });
  };

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
      
      {/* Live Status Bar */}
      <div className="absolute top-8 right-8 flex items-center gap-4 text-sm text-white/80 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>Available for work</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{formatTime(currentTime)} IST</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Andhra Pradesh, India</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          {/* Terminal-like greeting */}
          <div className="mb-8 text-left max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-2 text-green-400">
                <Terminal className="w-4 h-4" />
                <span>subhash@portfolio:~$</span>
              </div>
              <div className="text-white">
                Hey there! 👋 I'm <span className="text-yellow-400 font-bold">Doondi Subhash</span>
              </div>
              <div className="text-white/70 mt-1">
                &gt; {typedText}<span className="animate-pulse text-green-400">|</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI Innovator<span className="text-yellow-400">.</span>
            <span className="block text-gradient">Problem Solver<span className="text-yellow-400">.</span></span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Final year CS student • IEEE Published Researcher • Visual Artist
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Building intelligent systems by day, crafting visual stories by night. 
            <span className="text-yellow-400 font-medium"> Currently open for ML Engineer opportunities!</span>
          </p>
          
          {/* Tech Stack Preview */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Python 🐍', 'React ⚛️', 'TensorFlow 🧠', 'FastAPI ⚡', 'Docker 🐳', 'IEEE Published 📚'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 rounded-full transition-spring hover-lift group"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Explore My Code
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-spring hover-lift group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Let's Build Something
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/kdsgit06" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover-lift hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/doondi-subhash-63122b22a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover-lift hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:doondisubhash2003@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover-lift hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float group"
          aria-label="Scroll to About Section"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/60">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-white transition-smooth" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;