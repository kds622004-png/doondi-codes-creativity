import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" id="top">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Experience />
      <BeyondCode />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
