import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* Enhanced glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[59] pointer-events-none"
        style={{ scaleX }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 blur-sm opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 blur-md opacity-50" />
      </motion.div>
    </>
  );
}