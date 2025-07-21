
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
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 max-w-4xl mx-auto">
              
              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-2 text-blue-300 text-sm font-medium"
              >
                Welcome to my portfolio
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Creative Developer
                  </span>
                  <br />
                  <span className="text-white">& Designer</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed max-w-3xl font-light tracking-wide"
              >
                Crafting beautiful, interactive experiences through code and creativity. 
                Passionate about modern web technologies and innovative design solutions.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-lg"
                >
                  View My Work →
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'John_Developer_Resume.pdf';
                    link.click();
                  }}
                  className="border-gray-300 text-gray-300 hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg"
                >
                  ↓ Download Resume
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex space-x-4 pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/johndeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center justify-center"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/johndeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin size={20} />
                </motion.a>
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
