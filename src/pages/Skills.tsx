
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";

const SkillIcon = ({ text, position, color }: { text: string; position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Center position={position}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.3}
          height={0.05}
        >
          {text}
          <meshStandardMaterial color={color} />
        </Text3D>
      </Center>
    </Float>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 88 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "3D & Animation",
      skills: [
        { name: "Three.js", level: 85 },
        { name: "Blender", level: 70 },
        { name: "WebGL", level: 78 },
        { name: "GSAP", level: 82 },
        { name: "Canvas API", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 78 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 80 }
      ]
    }
  ];

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
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I love learning new technologies and constantly improving my skills to create better digital experiences.
            </p>
          </motion.div>

          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-64 mb-16 rounded-2xl overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-blue-500/20"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <SkillIcon text="React" position={[-2, 1, 0]} color="#61dafb" />
              <SkillIcon text="Three.js" position={[2, 1, 0]} color="#ffffff" />
              <SkillIcon text="Node.js" position={[0, -1, 0]} color="#339933" />
              <SkillIcon text="TypeScript" position={[-1.5, -0.5, -1]} color="#3178c6" />
              <SkillIcon text="Python" position={[1.5, 0.5, -1]} color="#3776ab" />
            </Canvas>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-blue-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
