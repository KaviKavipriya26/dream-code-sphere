
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
import TypewriterText from "../components/TypewriterText";

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

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] lg:gap-[100px]">
              {/* LEFT - Text */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 lg:order-1 text-left flex flex-col items-start max-w-[520px] w-full mx-auto lg:mx-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-700/50 rounded-full px-4 py-1.5 text-slate-300 text-[14px] font-medium backdrop-blur-sm mb-6"
                >
                  <span>👋</span> Hello, I'm
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="leading-[1.1] tracking-tight flex flex-col items-start mb-6"
                >
                  <span className="block text-[36px] md:text-[44px] lg:text-[52px] font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-3">
                    Kavipriya K
                  </span>
                  <span className="block text-[18px] md:text-[24px] lg:text-[28px] font-medium text-slate-300">
                    <TypewriterText text="AI & Data Science Engineer" delay={0.6} />
                  </span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "60px" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mt-5 rounded-full"
                  />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-400 max-w-[480px] font-light mb-8"
                >
                  Final-year AI &amp; Data Science student passionate about Data
                  Engineering, Full Stack Development, Python, React, SQL, Machine
                  Learning, and building scalable applications.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-[16px] mb-8 justify-start w-full"
                >
                  <Button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/resume.pdf";
                      link.download = "Kavipriya_Resume.pdf";
                      link.click();
                    }}
                    className="group w-full sm:w-[170px] h-[48px] bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 border-0"
                  >
                    <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollTo("projects")}
                    className="group w-full sm:w-[170px] h-[48px] border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-white font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    <FolderGit2 className="mr-2 h-4 w-4" />
                    View Projects
                  </Button>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } },
                  }}
                  className="flex gap-[16px] justify-start w-full"
                >
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ width: 44, height: 44 }}
                      className="rounded-full border border-slate-700 bg-transparent backdrop-blur-sm text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT - Image */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end w-full"
              >
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-8 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30"
                  />
                  <motion.div
                    animate={{ scale: [1.05, 1, 1.05], rotate: [0, -90, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-2xl opacity-20"
                  />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full rounded-full p-1 bg-slate-900/50 backdrop-blur-xl border border-white/5 shadow-2xl shadow-purple-500/20"
                  >
                    <div className="relative w-full h-full rounded-full p-[4px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 animate-glow">
                      <img
                        src={profileImg}
                        alt="Kavipriya K - AI & Data Science Engineer"
                        width={420}
                        height={420}
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
