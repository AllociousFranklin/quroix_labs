import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ServicesHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-950/50 to-cyan-950/50 rounded-full border border-indigo-500/30 mb-8"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl mb-8 leading-tight"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Quroix Labs delivers intelligent, scalable solutions that transform how businesses operate.
            From AI-driven automation to enterprise-grade platforms, we engineer systems that create
            real-world impact and drive measurable results.
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative rounded-2xl overflow-hidden group max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 z-10 group-hover:opacity-0 transition-opacity duration-500" />
            <ImageWithFallback
              src="/assets/Services.png"
              alt="AI technology services"
              className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}