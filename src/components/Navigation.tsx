import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Zap from "lucide-react/dist/esm/icons/zap";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", page: "home" },
    { name: "Services", page: "services" },
    { name: "Products", page: "products" },
    { name: "Case Studies", page: "case-studies" },
    { name: "Research", page: "research" },
    { name: "Partnership", page: "partnership" },
    { name: "Careers", page: "careers" },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-black/60 backdrop-blur-lg py-4 shadow-lg shadow-indigo-500/10"
          : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick("home")}
          >
            <img
              src="/assets/Quroix_white_Logo.svg"
              alt="Quroix Labs Logo"
              className="h-8 w-auto object-contain"
              width="120"
              height="32"
              draggable={false}
            />
          </motion.div>

          {/* Desktop Center Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm whitespace-nowrap transition-all duration-300 relative group ${currentPage === item.page
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                  }`}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ${currentPage === item.page
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 blur-sm transition-all duration-300 ${currentPage === item.page
                    ? "w-full opacity-75"
                    : "w-0 group-hover:w-full group-hover:opacity-75"
                    }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("request-demo")}
              className="relative px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-sm transition-all whitespace-nowrap overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-indigo-500 to-cyan-500" />
              <span className="relative z-10">Request Demo</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("contact")}
              className="relative px-5 py-2.5 border border-gray-700 rounded-lg text-sm transition-all whitespace-nowrap group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-indigo-500/20" />
              <span className="relative z-10">Contact</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors group"
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white relative z-10" />
            ) : (
              <Menu className="w-5 h-5 text-white relative z-10" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-br from-gray-900 via-gray-900 to-black border-l border-gray-800 z-50 lg:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl">Quroix Labs</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.page)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative group ${currentPage === item.page
                      ? "bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {currentPage === item.page && (
                      <motion.div
                        layoutId="mobile-active-nav"
                        className="absolute inset-0 border border-indigo-500/50 rounded-lg"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="p-6 space-y-3 border-t border-gray-800">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => handleNavClick("request-demo")}
                  className="w-full relative px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg transition-all overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Request Demo</span>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  onClick={() => handleNavClick("contact")}
                  className="w-full relative px-5 py-3 border border-gray-700 rounded-lg transition-all group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Contact</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
