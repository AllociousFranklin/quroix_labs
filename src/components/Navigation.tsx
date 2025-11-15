import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", page: "home" },
    { name: "Services", page: "services" },
    { name: "Products", page: "products" },
    { name: "Case Studies", page: "case-studies" },
    { name: "Research", page: "research" },
    { name: "Careers", page: "careers" },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg py-4 shadow-lg shadow-indigo-500/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavClick("home")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl tracking-tight">Quroix Labs</span>
        </motion.div>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.page)}
              className={`text-sm transition-colors relative group ${
                currentPage === item.page ? "text-white" : "text-gray-300 hover:text-white"
              }`}
              whileHover={{ y: -2 }}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ${
                  currentPage === item.page ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("request-demo")}
            className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-sm hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow"
          >
            Request Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("contact")}
            className="px-6 py-2.5 border border-gray-700 rounded-lg text-sm hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
          >
            Contact
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}