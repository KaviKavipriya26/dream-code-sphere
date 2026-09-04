
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A comprehensive e-commerce solution built for scale. Features seamless user experience from product discovery to secure checkout.",
    features: [
      "Secure user authentication & authorization",
      "Real-time inventory management",
      "Stripe payment gateway integration",
      "Responsive, mobile-first design"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/KaviKavipriya26",
    live: "#",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-50",
  },
  {
    title: "3D Portfolio Website",
    category: "Frontend / WebGL",
    description: "An immersive 3D portfolio experience showcasing advanced web graphics and interactive animations.",
    features: [
      "Custom 3D models and environments",
      "Interactive particle systems",
      "Smooth scroll-driven animations",
      "Optimized for high performance"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    tech: ["Three.js", "React", "Framer Motion", "WebGL"],
    github: "https://github.com/KaviKavipriya26",
    live: "#",
    accentColor: "text-indigo-600",
    accentBg: "bg-indigo-50",
  },
  {
    title: "Task Management App",
    category: "Productivity",
    description: "A collaborative workspace tool designed to streamline team communication and project tracking.",
    features: [
      "Real-time updates across all clients",
      "Intuitive drag-and-drop interfaces",
      "Role-based access control",
      "Team collaboration & comments"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    tech: ["React", "Firebase", "Material-UI", "Socket.io"],
    github: "https://github.com/KaviKavipriya26",
    live: "#",
    accentColor: "text-teal-600",
    accentBg: "bg-teal-50",
  },
  {
    title: "AI Chat Interface",
    category: "AI / ML",
    description: "A modern, responsive chat interface integrating advanced AI models for natural conversations.",
    features: [
      "Context-aware AI responses",
      "Real-time voice recognition",
      "Syntax highlighting for code",
      "Adaptive UI with dark/light mode"
    ],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
    tech: ["React", "Python", "OpenAI API", "WebSocket"],
    github: "https://github.com/KaviKavipriya26",
    live: "#",
    accentColor: "text-purple-600",
    accentBg: "bg-purple-50",
  },
  {
    title: "Data Vis Dashboard",
    category: "Data Engineering",
    description: "An enterprise-grade dashboard for visualizing complex datasets with interactive filtering.",
    features: [
      "Real-time data streaming",
      "Interactive charts and graphs",
      "Customizable widget layouts",
      "Automated report generation"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    tech: ["React", "D3.js", "Python", "PostgreSQL"],
    github: "https://github.com/KaviKavipriya26",
    live: "#",
    accentColor: "text-cyan-600",
    accentBg: "bg-cyan-50",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    description: "A secure, feature-rich mobile banking application prioritizing user security and ease of use.",
    features: [
      "Biometric secure login",
      "Instant transaction notifications",
      "Smart budget tracking AI",
      "Peer-to-peer fast transfers"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/KaviKavipriya26",
    live: "#",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-50",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.project-card-wrapper');
        let current = 0;
        
        // A card becomes active when its top reaches this point (e.g. 35% of the viewport height)
        // This triggers the previous card to scale down just as the new card overlaps it.
        const triggerPoint = window.innerHeight * 0.35;
        
        cards.forEach((card, i) => {
          const rect = card.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            current = i;
          }
        });
        
        setActiveIndex(current);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardStyle = (index: number) => {
    const distance = Math.max(0, activeIndex - index);
    if (distance === 0) {
      return {
        transform: 'scale(1) translateY(0)',
        opacity: 1,
        filter: 'brightness(1)',
      };
    }
    
    // Lighten the effect on mobile devices
    const scaleFactor = isMobile ? 0.04 : 0.08; 
    const opacityFactor = isMobile ? 0.15 : 0.3;
    const brightnessFactor = isMobile ? 0.05 : 0.15;
    const translateYFactor = isMobile ? 0.5 : 2;

    const scale = Math.max(1 - distance * scaleFactor, isMobile ? 0.95 : 0.92);
    const opacity = Math.max(1 - distance * opacityFactor, isMobile ? 0.8 : 0.7);
    const brightness = Math.max(1 - distance * brightnessFactor, isMobile ? 0.9 : 0.85);
    const translateY = `${distance * translateYFactor}rem`;
    
    return {
      transform: `scale(${scale}) translateY(${translateY})`,
      opacity: opacity,
      filter: `brightness(${brightness})`,
    };
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Featured projects showcasing my skills in modern web development. 
              Scroll down to explore.
            </p>
          </motion.div>

          {/* Stacked Cards Container */}
          <div className="relative w-full">
            <style>
              {`
                @media (prefers-reduced-motion: reduce) {
                  .project-card-inner {
                    transition: none !important;
                    transform: none !important;
                    opacity: 1 !important;
                    filter: none !important;
                  }
                }
                .project-card-inner {
                  transform-origin: top center;
                }
                /* Hide scrollbar for clean internal scrolling on mobile */
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                .no-scrollbar {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}
            </style>

            {projects.map((project, index) => (
              <div 
                key={index}
                className="project-card-wrapper sticky top-[80px] flex items-center justify-center w-full"
                style={{
                  // The bottom margin creates the scroll distance (simulating 100vh wrappers)
                  marginBottom: index === projects.length - 1 ? '5vh' : (isMobile ? '50vh' : '80vh'),
                  zIndex: index,
                }}
              >
                <div 
                  className="project-card-inner w-full max-w-5xl mx-auto bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-400 ease-out flex flex-col md:flex-row h-[85vh] md:h-[75vh]"
                  style={getCardStyle(index)}
                >
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-12 order-2 md:order-1 h-[65%] md:h-full">
                    <div className="flex-1 overflow-y-auto no-scrollbar pr-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${project.accentBg} ${project.accentColor}`}>
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <ul className="mb-8 space-y-3">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-slate-700 font-medium text-sm md:text-base">
                            <CheckCircle2 className={`w-5 h-5 mr-3 mt-0.5 shrink-0 ${project.accentColor}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, tIdx) => (
                          <span key={tIdx} className="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100 shrink-0">
                      <Button 
                        onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-6 font-semibold shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/40 hover:-translate-y-0.5 w-full sm:w-auto"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                        className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-xl px-6 py-6 font-semibold transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                      >
                        <Github className="mr-2 h-5 w-5" /> Source Code
                      </Button>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-1/2 p-3 md:p-8 md:pl-0 h-[35%] md:h-full flex items-center justify-center order-1 md:order-2 shrink-0 bg-slate-50 md:bg-transparent">
                    <div className="relative w-full h-full rounded-[16px] overflow-hidden shadow-sm md:shadow-2xl group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

