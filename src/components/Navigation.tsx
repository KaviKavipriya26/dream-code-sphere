
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, scrollToSection } = useScrollNavigation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "articles", label: "Articles" },
    { id: "coding-profiles", label: "Coding" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            <button onClick={() => scrollToSection('home')} className="gradient-text">
              Portfolio
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-400 bg-blue-500/20"
                        : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/10"
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.div key={item.id} whileHover={{ x: 10 }}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-blue-400 bg-blue-500/20"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/10"
                }`}
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
