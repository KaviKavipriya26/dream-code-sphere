
import { motion } from "framer-motion";
import { Download, FolderGit2, Github, Linkedin, Mail, Code2 } from "lucide-react";
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
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kavipriya@example.com", label: "Email" },
  { icon: Code2, href: "https://leetcode.com/", label: "LeetCode" },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      <div className="relative">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden"
        >
          <ParticleBackground />
          <FloatingElements />

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] lg:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-20">
              {/* LEFT - Text (order 2 on mobile) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 md:order-1 text-center md:text-left space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium backdrop-blur-sm"
                >
                  <span>👋</span> Hello, I'm
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="font-extrabold leading-[1.05] tracking-tight"
                >
                  <span className="block text-[44px] sm:text-5xl md:text-6xl lg:text-[72px] bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Kavipriya Kaliyappan
                  </span>
                  <span className="block mt-3 text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold text-white/90">
                    AI &amp; Data Science Engineer
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-[18px] leading-[1.8] text-gray-300 max-w-xl mx-auto md:mx-0 font-light"
                >
                  Final-year AI &amp; Data Science student passionate about Data
                  Engineering, Full Stack Development, Python, React, SQL, Machine
                  Learning, and building scalable applications.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start"
                >
                  <Button
                    size="lg"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/resume.pdf";
                      link.download = "Kavipriya_Resume.pdf";
                      link.click();
                    }}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-7 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-purple-500/50"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                    Download Resume
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollTo("projects")}
                    className="group border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-purple-400 font-semibold px-7 py-6 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    <FolderGit2 className="mr-2 h-5 w-5" />
                    View Projects
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-3 pt-4 justify-center md:justify-start"
                >
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT - Image (order 1 on mobile) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="order-1 md:order-2 flex justify-center md:justify-end"
              >
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
                  {/* Animated gradient blob */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-8 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 rounded-full blur-3xl opacity-40"
                  />
                  <motion.div
                    animate={{
                      scale: [1.1, 1, 1.1],
                      rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-2xl opacity-30"
                  />

                  {/* Glass card + floating image */}
                  <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full rounded-full p-2 bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/30"
                  >
                    <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-blue-400 via-purple-500 to-cyan-400 animate-glow">
                      <img
                        src={profileImg}
                        alt="Kavipriya Kaliyappan - AI & Data Science Engineer"
                        width={440}
                        height={440}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="articles"><Articles /></div>
        <div id="coding-profiles"><CodingProfiles /></div>
        <div id="contact"><Contact /></div>
      </div>
    </PageTransition>
  );
};

export default Hero;
