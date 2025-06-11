
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import FloatingElements from "../components/FloatingElements";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <FloatingElements />
        
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotation: 180 }}
            animate={{ scale: 1, rotation: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-slate-900 to-blue-900 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">JD</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            John <span className="gradient-text">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Creative Developer & Designer
            <br />
            <span className="text-blue-400">Crafting digital experiences with modern technology</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={32} />
            </motion.a>
          </motion.div>

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
      </div>
    </PageTransition>
  );
};

export default Hero;
