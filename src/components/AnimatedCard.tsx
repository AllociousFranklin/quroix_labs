import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
  glowOnHover?: boolean;
}

export function AnimatedCard({ 
  children, 
  className = "", 
  hoverScale = true,
  glowOnHover = true 
}: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={hoverScale ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={`relative group ${className}`}
    >
      {/* Animated border glow */}
      {glowOnHover && (
        <>
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl" />
        </>
      )}
      
      {/* Card content */}
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
}
