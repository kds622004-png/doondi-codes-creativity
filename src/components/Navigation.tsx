import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Code, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: "👨‍💻" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Publications", href: "#publications", icon: "📚" },
    { name: "Experience", href: "#experience", icon: "💼" },
    { name: "Beyond Code", href: "#beyond-code", icon: "🎨" },
    { name: "Contact", href: "#contact", icon: "📬" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#top")}
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-accent transition-smooth hover:scale-105 group"
          >
            <Code className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform" />
            <span>Subhash</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-all font-medium hover:scale-105 transform duration-200 px-3 py-2 rounded-lg hover:bg-accent/10"
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button size="sm" variant="outline" asChild className="hover-lift group">
              <a href="https://github.com/kdsgit06" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Code
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild className="hover-lift group">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Resume
              </a>
            </Button>
            <Button size="sm" asChild className="hover-lift group bg-gradient-to-r from-primary to-accent">
              <a href="mailto:doondisubhash2003@gmail.com">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Hire Me
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-soft">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full text-left text-foreground/80 hover:text-accent hover:bg-accent/10 transition-colors font-medium py-2 px-4 rounded-lg"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
              
              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-border/20 space-y-2">
                <Button size="sm" variant="outline" asChild className="w-full">
                  <a href="https://github.com/kdsgit06" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" asChild className="w-full">
                  <a href="mailto:doondisubhash2003@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Hire Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;