import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          ? "bg-[#030213]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl shadow-black/40"
          : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavClick("home")}
          >
            <img
              src="/assets/Quroix_white_Logo.svg"
              alt="Quroix Labs Logo"
              className="h-7 w-auto object-contain"
              width="105"
              height="28"
              draggable={false}
            />
          </motion.div>

          {/* Desktop Center Menu */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${currentPage === item.page
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
                  }`}
                whileHover={{ y: -1 }}
              >
                {item.name}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="activeNav"
                    className="h-px bg-gradient-to-r from-indigo-500 to-cyan-500 w-full mt-1"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick("request-demo")}
              className="relative px-5 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-[0.6rem] text-xs font-bold tracking-wide transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Request Demo</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick("contact")}
              className="relative px-5 py-2 border border-slate-700 hover:border-slate-500 text-white rounded-[0.6rem] text-xs font-bold tracking-wide transition-all bg-white/5 hover:bg-white/10"
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
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
