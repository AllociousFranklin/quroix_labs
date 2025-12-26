import { motion } from "motion/react";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import { IdeaTransformation } from "./IdeaTransformation";
import { Suspense, lazy } from 'react';

// Lazy load the heavy 3D component
const InteractiveHero3D = lazy(() => import('./InteractiveHero3D').then(module => ({ default: module.InteractiveHero3D })));

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20" />

      {/* 3D Particle Field */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={<div className="absolute inset-0 bg-black/0" />}>
          <InteractiveHero3D />
        </Suspense>
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 fetchpriority="high" className="hero-h1 text-5xl lg:text-7xl tracking-tight leading-tight">
              Intelligence Engineered for{" "}
              <span className="relative inline-block">
                <span className="text-white font-medium">
                  Real-World Impact
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            We build AI-driven systems, intelligent platforms, and automated
            workflows for startups and enterprises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const event = new CustomEvent("navigate", {
                  detail: "request-demo",
                });
                window.dispatchEvent(event);
              }}
              className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-lg flex items-center gap-2 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl bg-gradient-to-r from-indigo-500 to-cyan-500" />
              <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Request Demo</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const event = new CustomEvent("navigate", {
                  detail: "services",
                });
                window.dispatchEvent(event);
              }}
              className="relative px-8 py-4 border border-gray-700 rounded-lg text-lg flex items-center gap-2 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-indigo-500/20" />
              <span className="relative z-10">Explore Solutions</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 text-sm text-gray-500"
          >
            <span className="flex items-center gap-2">
              <span className="relative w-2 h-2 bg-green-500 rounded-full">
                <span className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
              </span>
              Live demos in 48 hours
            </span>
            <span>•</span>
            <span>NDA available</span>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <IdeaTransformation />
        </motion.div>
      </div>
    </section>
  );
}
