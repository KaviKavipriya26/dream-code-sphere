
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import FloatingElements from "../components/FloatingElements";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Articles from "./Articles";
import CodingProfiles from "./CodingProfiles";
import Contact from "./Contact";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageTransition>
      <div className="relative">
        {/* Hero Section */}
        <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <ParticleBackground />
          <FloatingElements />
          
          <div className="container mx-auto px-6 lg:px-8 z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center justify-center max-w-6xl mx-auto min-h-[80vh]">
              {/* Left side - Text content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-left space-y-6 flex flex-col justify-center"
              >
                {/* Greeting */}
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl text-white font-medium">
                    Hello, It's Me
                  </h3>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    <span className="gradient-text">John Developer</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-white font-medium">
                    And I'm a{" "}
                    <span className="text-blue-400 font-bold">Full Stack Developer</span>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  I'm a web developer with extensive experience for over 3 years. 
                  My expertise is to create web applications, frontend design, backend development, and many more...
                </p>

                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/johndeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com/in/johndeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button
                    size="lg"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'John_Developer_Resume.pdf';
                      link.click();
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-lg"
                  >
                    Download CV
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </div>

        {/* All other sections */}
        <div id="about">
          <About />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="articles">
          <Articles />
        </div>
        
        <div id="coding-profiles">
          <CodingProfiles />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </div>
    </PageTransition>
  );
};

export default Hero;
