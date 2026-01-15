import { motion } from "motion/react";
import { ProjectBuilder } from "./builder/ProjectBuilder";

export function RequestDemoPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm font-medium"
          >
            Interactive Project Mode
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Build Your Neural Network</h1>
          <p className="text-xl text-gray-400">Visually assemble your project architecture below.</p>
        </div>

        {/* Builder Interface */}
        <ProjectBuilder />

      </div>
    </div>
  );
}