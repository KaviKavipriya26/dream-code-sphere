
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import TiltCard from "../components/TiltCard";
import { Button } from "@/components/ui/button";

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
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Here are some of my featured projects that showcase my skills and experience in modern web development.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <TiltCard className="h-full">
                  <div className="bg-slate-800/50 backdrop-blur-[18px] rounded-2xl overflow-hidden border border-white/5 h-full flex flex-col relative z-10">
                    <div className="relative overflow-hidden shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleViewCode(project.github)}
                          className="bg-slate-900/80 text-slate-50 p-2 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
                        >
                          <Github size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleViewDemo(project.live)}
                          className="bg-slate-900/80 text-slate-50 p-2 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
                        >
                          <ExternalLink size={20} />
                        </motion.button>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col grow">
                      <h3 className="text-2xl font-semibold text-slate-50 mb-3">{project.title}</h3>
                      <p className="text-slate-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3 mt-auto">
                        <Button
                          variant="outline"
                          onClick={() => handleViewCode(project.github)}
                          className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-slate-50 bg-transparent flex-1"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                        <Button
                          onClick={() => handleViewDemo(project.live)}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex-1"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
