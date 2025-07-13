
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
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left side - Main content */}
              <div className="text-center lg:text-left space-y-8">
                {/* Mobile profile image */}
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="lg:hidden mb-8"
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-900 to-blue-900 flex items-center justify-center">
                      <span className="text-4xl font-bold gradient-text">JD</span>
                    </div>
                  </div>
                </motion.div>

                {/* Main heading */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                    Hi, I'm{" "}
                    <span className="gradient-text">John Developer</span>
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 rounded-full"></div>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-semibold">
                    Full Stack Developer & UI/UX Designer
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    I create beautiful, responsive web applications with modern technologies. 
                    Passionate about clean code, user experience, and bringing ideas to life.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                >
                  <Button
                    size="lg"
                    onClick={() => {
                      const projectsSection = document.getElementById('projects');
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-lg"
                  >
                    View My Projects
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 text-lg"
                  >
                    Get In Touch
                  </Button>
                </motion.div>

                {/* Resume Download */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex justify-center lg:justify-start"
                >
                  <Button
                    variant="ghost"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'John_Developer_Resume.pdf';
                      link.click();
                    }}
                    className="text-gray-400 hover:text-white hover:bg-gray-800/50 font-medium px-6 py-2 rounded-lg transition-all duration-300"
                  >
                    📄 Download Resume
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex justify-center lg:justify-start space-x-6 pt-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/johndeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800/30"
                  >
                    <Github size={28} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com/in/johndeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800/30"
                  >
                    <Linkedin size={28} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right side - Professional photo */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative">
                  <div className="w-96 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-blue-800 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
                      <img 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop&crop=face"
                        alt="John Developer - Full Stack Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-80 flex items-center justify-center text-white font-bold text-lg"
                  >
                    ⚡
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-70 flex items-center justify-center text-white font-bold text-xl"
                  >
                    💻
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -left-12 w-8 h-8 bg-blue-400 rounded-full opacity-60"
                  />
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
