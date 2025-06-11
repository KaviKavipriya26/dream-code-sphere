
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";

const About = () => {
  const timelineItems = [
    {
      year: "2023",
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Corp",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      year: "2022",
      title: "Front-End Developer",
      company: "Creative Solutions Ltd",
      description: "Specialized in creating responsive, animated user interfaces with modern frameworks."
    },
    {
      year: "2021",
      title: "Junior Developer",
      company: "StartUp Hub",
      description: "Gained experience in full-stack development and agile methodologies."
    },
    {
      year: "2020",
      title: "Computer Science Graduate",
      company: "University of Technology",
      description: "Bachelor's degree in Computer Science with focus on web development and algorithms."
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-20 pb-12">
        <ParticleBackground />
        
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who loves creating beautiful, functional, and user-friendly digital experiences. 
              With expertise in modern web technologies, I bring ideas to life through code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I started my journey in web development during college, fascinated by the power of code to create 
                interactive experiences. What began as a curiosity quickly became a passion.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I specialize in creating modern, responsive applications using cutting-edge technologies 
                like React, Three.js, and advanced animation libraries. I believe in writing clean, maintainable 
                code that not only works but inspires.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">What I Do</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Frontend Development with React, TypeScript, and modern frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>3D Web Experiences using Three.js and WebGL</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Animation and Motion Design with Framer Motion</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Backend Development and API Design</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">My Journey</h2>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm">
                      {item.year}
                    </div>
                    <div className="ml-4 h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"></div>
                  </div>
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 ml-8">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-400 mb-3">{item.company}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
