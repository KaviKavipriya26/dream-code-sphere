
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ParticleBackground from "../components/ParticleBackground";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const articles = [
    {
      title: "Building Interactive 3D Experiences with React and Three.js",
      excerpt: "Learn how to create stunning 3D web experiences using React Three Fiber and modern web technologies.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      link: "#"
    },
    {
      title: "The Future of Web Animations: Framer Motion Deep Dive",
      excerpt: "Explore advanced animation techniques and best practices for creating smooth, performant web animations.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
      link: "#"
    },
    {
      title: "TypeScript Best Practices for Large Scale Applications",
      excerpt: "Essential TypeScript patterns and practices for building maintainable and scalable web applications.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500",
      link: "#"
    },
    {
      title: "Creating Responsive Design Systems with Tailwind CSS",
      excerpt: "Build consistent, maintainable design systems using Tailwind CSS and modern component architecture.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      link: "#"
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
              Featured <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sharing knowledge and insights about web development, design, and the latest technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-3 leading-tight">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span className="mr-2">Read More</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8"
            >
              View All Articles
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;
