import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Doondi Subhash Kaladurgi</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              AI/ML Engineer & Creative Visual Storyteller crafting intelligent solutions 
              and telling stories through code and pixels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" }, 
                { name: "Publications", href: "#publications" },
                { name: "Beyond Code", href: "#beyond-code" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/kdsgit06"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/doondi-subhash-63122b22a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:doondi.dev@gmail.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Doondi Subhash Kaladurgi. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/80 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;