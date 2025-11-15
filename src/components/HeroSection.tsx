import { useState } from "react";
import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import { IdeaTransformation } from "./IdeaTransformation";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
            <h1 className="text-5xl lg:text-7xl tracking-tight leading-tight">
              Intelligence Engineered for{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Real-World Impact
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            We build AI-driven systems, intelligent platforms, and automated workflows
            for startups and enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99, 102, 241, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const event = new CustomEvent("navigate", { detail: "request-demo" });
                window.dispatchEvent(event);
              }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-lg flex items-center gap-2 hover:shadow-2xl transition-shadow"
            >
              <Sparkles className="w-5 h-5" />
              Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-700 rounded-lg text-lg flex items-center gap-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
            >
              <Play className="w-5 h-5" />
              Watch Overview
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 text-sm text-gray-500"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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