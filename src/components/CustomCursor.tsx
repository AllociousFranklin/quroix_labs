import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Use requestAnimationFrame for smoother performance
            requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });

            // Enhanced detection that works even when cursor is hidden via CSS
            const target = e.target as HTMLElement;

            // Check for interactive tags
            const interactiveTag = target.closest('a, button, input, select, textarea, label');

            // Check for ARIA roles
            const interactiveRole = target.closest('[role="button"], [role="link"], [role="checkbox"], [role="switch"]');

            // Check for explicit "cursor-pointer" class (common in Tailwind)
            // We traverse up because the icon might be inside a div with the class
            const hasPointerClass = target.closest('.cursor-pointer');

            setIsPointer(!!interactiveTag || !!interactiveRole || !!hasPointerClass);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <style>{`
        body {
          cursor: none; /* Hide default cursor */
        }
        a, button, [role="button"] {
          cursor: none !important; /* Force hide on interactive elements */
        }
      `}</style>

            {/* Realistic Sun Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none"
                style={{
                    zIndex: 2147483647, // Max Z-Index to ensure it's always on top
                    mixBlendMode: "normal", // Prevent blending with backgrounds
                    isolation: "isolate"    // Create a new stacking context
                }}
                animate={{
                    x: position.x - 12,
                    y: position.y - 12,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 350,
                    mass: 0.5
                }}
            >
                {/* Solar Flares (Rays) - Only visible on hover */}
                <motion.div
                    className="absolute inset-[-20px] z-[-1]"
                    animate={{
                        scale: isPointer ? 1 : 0.5,
                        opacity: isPointer ? 1 : 0,
                        rotate: 360,
                    }}
                    transition={{
                        scale: { type: "spring", stiffness: 300, damping: 20 },
                        opacity: { duration: 0.2 },
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                    }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400 drop-shadow-[0_0_2px_rgba(245,158,11,0.8)]">
                        {[...Array(12)].map((_, i) => (
                            <motion.path
                                key={i}
                                d="M50 15 L53 5 L50 0 L47 5 Z"
                                transform={`rotate(${i * 30} 50 50)`}
                                fill="currentColor"
                            />
                        ))}
                    </svg>
                </motion.div>

                {/* The Sun Body */}
                <div className="relative w-6 h-6 rounded-full">
                    {/* Core Plasma */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "radial-gradient(circle at center, #ffffff 10%, #fbbf24 40%, #f59e0b 60%, #ea580c 90%)",
                            boxShadow: "0 0 15px 2px rgba(245, 158, 11, 0.6), 0 0 30px 5px rgba(234, 88, 12, 0.4)",
                        }}
                    />

                    {/* Turbulent Surface Animation */}
                    <motion.div
                        className="absolute inset-[-2px] rounded-full opacity-80"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            rotate: { duration: 8, ease: "linear", repeat: Infinity },
                            scale: { duration: 2, ease: "easeInOut", repeat: Infinity }
                        }}
                        style={{
                            background: "conic-gradient(from 0deg, transparent 0%, rgba(251, 191, 36, 0.5) 25%, transparent 50%, rgba(234, 88, 12, 0.5) 75%, transparent 100%)",
                            filter: "blur(2px)",
                        }}
                    />
                </div>
            </motion.div>

            {/* Warm Glow Halo */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[9997]"
                animate={{
                    x: position.x - 64,
                    y: position.y - 64,
                    scale: isPointer ? 1.2 : 0,
                    opacity: isPointer ? 0.4 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                }}
                style={{
                    background: "radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(251,191,36,0) 60%)",
                    filter: "blur(4px)",
                }}
            />
        </>
    );
}
