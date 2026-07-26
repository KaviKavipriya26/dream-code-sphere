import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, Target } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import { Button } from "@/components/ui/button";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "johndeveloper",
      stats: {
        solved: "450+",
        ranking: "Top 15%",
        streak: "120 days"
      },
      color: "from-orange-500 to-yellow-500",
      icon: Code,
      link: "https://leetcode.com/johndeveloper"
    },
    {
      platform: "GeeksforGeeks",
      username: "john_dev",
      stats: {
        solved: "280+",
        ranking: "4 ⭐",
        streak: "85 days"
      },
      color: "from-green-500 to-emerald-500",
      icon: Target,
      link: "https://auth.geeksforgeeks.org/user/john_dev"
    },
    {
      platform: "Codeforces",
      username: "johndev123",
      stats: {
        solved: "150+",
        ranking: "Specialist",
        streak: "45 days"
      },
      color: "from-blue-500 to-cyan-500",
      icon: Trophy,
      link: "https://codeforces.com/profile/johndev123"
    },
    {
      platform: "HackerRank",
      username: "john.developer",
      stats: {
        solved: "200+",
        ranking: "5 ⭐",
        streak: "60 days"
      },
      color: "from-green-600 to-green-400",
      icon: Code,
      link: "https://www.hackerrank.com/john_developer"
    }
  ];

  const achievements = [
    {
      title: "Daily Coding Streak",
      description: "Maintained 120+ day streak on LeetCode",
      icon: "🔥"
    },
    {
      title: "Contest Participant",
      description: "Regular participant in weekly coding contests",
      icon: "🏆"
    },
    {
      title: "Problem Solver",
      description: "Solved 1000+ coding problems across platforms",
      icon: "💡"
    },
    {
      title: "Algorithm Expert",
      description: "Strong foundation in data structures and algorithms",
      icon: "⚡"
    }
  ];

  const handleViewProfile = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
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
              Coding <span className="gradient-text">Profiles</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My journey in competitive programming and problem-solving across various platforms.
            </p>
          </motion.div>

          {/* Platform Profiles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <profile.icon size={32} className="text-slate-50" />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleViewProfile(profile.link)}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </div>

                  <h3 className="text-xl font-bold text-slate-50 mb-2">{profile.platform}</h3>
                  <p className="text-blue-400 mb-4">@{profile.username}</p>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Problems Solved</span>
                      <span className="text-slate-50 font-semibold">{profile.stats.solved}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Ranking</span>
                      <span className="text-slate-50 font-semibold">{profile.stats.ranking}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Current Streak</span>
                      <span className="text-slate-50 font-semibold">{profile.stats.streak}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleViewProfile(profile.link)}
                    className={`w-full mt-4 bg-gradient-to-r ${profile.color} hover:opacity-90 text-slate-50 font-semibold`}
                  >
                    View Profile
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-slate-50 text-center mb-12">
              Coding <span className="gradient-text">Achievements</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 text-center"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-50 mb-2">{achievement.title}</h3>
                  <p className="text-slate-300 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold text-slate-50 text-center mb-8">Overall Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-slate-300">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">120</div>
                <div className="text-slate-300">Day Streak</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-slate-300">Contests</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <div className="text-slate-300">Platforms</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CodingProfiles;
