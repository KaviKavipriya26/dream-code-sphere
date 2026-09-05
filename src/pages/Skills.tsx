import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";

const skillRows = [
  {
    category: "Programming Languages",
    direction: "left",
    speed: "45s",
    items: [
      { name: "Python", icon: "python/3776AB" },
      { name: "JavaScript", icon: "javascript/F7DF1E" },
      { name: "SQL", icon: "mysql/4479A1" },
    ]
  },
  {
    category: "Backend Development",
    direction: "right",
    speed: "55s",
    items: [
      { name: "Flask", icon: "flask/ffffff" },
      { name: "Node.js", icon: "nodedotjs/339933" },
      { name: "Express.js", icon: "express/ffffff" },
      { name: "REST API", icon: "fastapi/009688" },
      { name: "JWT Auth", icon: "jsonwebtokens/ffffff" },
      { name: "RBAC", icon: "auth0/EB5424" },
    ]
  },
  {
    category: "Frontend Development",
    direction: "left",
    speed: "50s",
    items: [
      { name: "React.js", icon: "react/61DAFB" },
      { name: "React Hooks", icon: "react/61DAFB" },
      { name: "Context API", icon: "react/61DAFB" },
      { name: "React Router", icon: "reactrouter/CA4245" },
      { name: "Responsive Design", icon: "css3/1572B6" },
    ]
  },
  {
    category: "Database & Tools",
    direction: "right",
    speed: "65s",
    items: [
      { name: "MongoDB", icon: "mongodb/47A248" },
      { name: "MySQL", icon: "mysql/4479A1" },
      { name: "SQLite", icon: "sqlite/003B57" },
      { name: "Git", icon: "git/F05032" },
      { name: "GitHub", icon: "github/ffffff" },
      { name: "Postman", icon: "postman/FF6C37" },
      { name: "VS Code", icon: "visualstudiocode/007ACC" },
      { name: "npm", icon: "npm/CB3837" },
      { name: "Vercel", icon: "vercel/ffffff" },
      { name: "Linux", icon: "linux/FCC624" },
    ]
  }
];

// Helper to ensure we have enough items to fill ultrawide screens before looping
const getRepeatedItems = (items: { name: string, icon: string }[]) => {
  let repeated = [...items];
  while (repeated.length < 10) {
    repeated = [...repeated, ...items];
  }
  return [...repeated, ...repeated];
};

const Skills = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
        <ParticleBackground />
        
        <style>
          {`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
            }
            .marquee-track:hover {
              animation-play-state: paused !important;
            }
            .fade-edges {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `}
        </style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              I love learning new technologies and constantly improving my skills to create better digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Marquee Section */}
        <div className="w-full flex flex-col gap-6 md:gap-10 mt-10 fade-edges py-4">
          {skillRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: rowIndex * 0.1 }}
              className="flex flex-col"
            >
              {/* Category Label */}
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-3">
                <span className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-widest pl-2">
                  {row.category}
                </span>
              </div>

              {/* Scrolling Track */}
              <div 
                className="marquee-track gap-4 md:gap-6 px-2 md:px-4"
                style={{
                  animation: `marquee-${row.direction} ${row.speed} linear infinite`
                }}
              >
                {getRepeatedItems(row.items).map((item, itemIndex) => (
                  <div 
                    key={`${rowIndex}-${itemIndex}`}
                    className="flex items-center space-x-3 md:space-x-4 bg-slate-800/40 backdrop-blur-sm border border-white/[0.08] px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:bg-slate-800/80 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:-translate-y-1 cursor-default shrink-0"
                  >
                    <img 
                      src={`https://cdn.simpleicons.org/${item.icon}`} 
                      alt={item.name} 
                      className="w-6 h-6 md:w-8 md:h-8"
                      loading="lazy"
                    />
                    <span className="text-slate-100 font-semibold text-base md:text-lg tracking-wide whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </PageTransition>
  );
};

export default Skills;
