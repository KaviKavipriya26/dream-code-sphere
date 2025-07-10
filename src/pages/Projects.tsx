import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/johndeveloper/ecommerce-platform",
      live: "https://ecommerce-demo.johndeveloper.com"
    },
    {
      title: "3D Portfolio Website", 
      description: "An interactive 3D portfolio showcasing Three.js capabilities with animated models, particle systems, and immersive user experience.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      tech: ["Three.js", "React", "Framer Motion", "WebGL"],
      github: "https://github.com/johndeveloper/3d-portfolio",
      live: "https://3d-portfolio.johndeveloper.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "https://github.com/johndeveloper/task-manager",
      live: "https://taskmanager.johndeveloper.com"
    },
    {
      title: "AI Chat Interface",
      description: "A modern chat interface with AI integration, featuring real-time messaging, voice recognition, and adaptive responses.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500",
      tech: ["React", "Python", "OpenAI API", "WebSocket"],
      github: "https://github.com/johndeveloper/ai-chat",
      live: "https://ai-chat.johndeveloper.com"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data visualization with real-time charts, filtering, and export capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      github: "https://github.com/johndeveloper/data-dashboard",
      live: "https://dashboard.johndeveloper.com"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/johndeveloper/banking-app",
      live: "https://banking-demo.johndeveloper.com"
    }
  ];

  const additionalProjects = [
    { title: "Weather App", tech: ["React", "API"], description: "Real-time weather tracking" },
    { title: "Blog Platform", tech: ["Next.js", "MDX"], description: "Content management system" },
    { title: "Game Engine", tech: ["C++", "OpenGL"], description: "2D game development framework" },
    { title: "Social Media Tool", tech: ["Vue.js", "Firebase"], description: "Content scheduling platform" },
    { title: "ML Model Trainer", tech: ["Python", "TensorFlow"], description: "Machine learning pipeline" },
    { title: "IoT Dashboard", tech: ["React", "MQTT"], description: "Device monitoring system" }
  ];

  const skillCategories = [
    { name: "Frontend", skills: ["React", "Vue.js", "Angular", "TypeScript"] },
    { name: "Backend", skills: ["Node.js", "Python", "Java", "Go"] },
    { name: "Database", skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
    { name: "Cloud", skills: ["AWS", "Azure", "GCP", "Docker"] }
  ];

  const handleViewCode = (githubUrl: string) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewDemo = (liveUrl: string) => {
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-20 pb-12">
        <ParticleBackground />
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my work through this interactive portfolio. Scroll both horizontally and vertically to discover different project categories and details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <ScrollArea className="w-full h-96 rounded-md border border-blue-500/20">
              <div className="grid grid-cols-4 gap-8 p-6" style={{ minWidth: '1600px', minHeight: '1200px' }}>
                {/* Main Projects Section */}
                <div className="col-span-2 space-y-6">
                  <h2 className="text-3xl font-bold text-blue-400 mb-6">Featured Projects</h2>
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                        <div className="absolute top-2 right-2 flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleViewCode(project.github)}
                            className="bg-slate-900/80 text-white p-1 rounded-full hover:bg-blue-600 transition-colors"
                          >
                            <Github size={16} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleViewDemo(project.live)}
                            className="bg-slate-900/80 text-white p-1 rounded-full hover:bg-blue-600 transition-colors"
                          >
                            <ExternalLink size={16} />
                          </motion.button>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-3 text-sm leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewCode(project.github)}
                            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-xs"
                          >
                            Code
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleViewDemo(project.live)}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs"
                          >
                            Demo
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Projects Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-blue-400 mb-6">More Projects</h2>
                  {additionalProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/10"
                    >
                      <h4 className="text-white font-medium mb-2">{project.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skills Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-blue-400 mb-6">Tech Stack</h2>
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/10"
                    >
                      <h4 className="text-white font-medium mb-3">{category.name}</h4>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="text-gray-300 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Statistics Section */}
                <div className="col-span-4 mt-8">
                  <h2 className="text-2xl font-bold text-blue-400 mb-6">Project Statistics</h2>
                  <div className="grid grid-cols-6 gap-6">
                    {[
                      { label: "Total Projects", value: "50+" },
                      { label: "Years Experience", value: "5+" },
                      { label: "Technologies", value: "20+" },
                      { label: "GitHub Stars", value: "1.2K" },
                      { label: "Contributions", value: "500+" },
                      { label: "Happy Clients", value: "30+" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/10 text-center"
                      >
                        <div className="text-2xl font-bold text-blue-400 mb-2">{stat.value}</div>
                        <div className="text-gray-300 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Timeline Section */}
                <div className="col-span-4 mt-8">
                  <h2 className="text-2xl font-bold text-blue-400 mb-6">Development Timeline</h2>
                  <div className="flex space-x-8 pb-4">
                    {[
                      { year: "2020", project: "First Web App", tech: "HTML/CSS/JS" },
                      { year: "2021", project: "React Learning", tech: "React/Redux" },
                      { year: "2022", project: "Full Stack", tech: "MERN Stack" },
                      { year: "2023", project: "Advanced Projects", tech: "Next.js/TypeScript" },
                      { year: "2024", project: "AI Integration", tech: "React/AI APIs" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                        className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/10 min-w-48"
                      >
                        <div className="text-blue-400 font-bold text-lg mb-2">{item.year}</div>
                        <div className="text-white font-medium mb-1">{item.project}</div>
                        <div className="text-gray-400 text-sm">{item.tech}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              Use the scrollbars or scroll wheel to explore the full portfolio in both directions
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
