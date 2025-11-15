import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-transparent to-cyan-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-950/50 to-cyan-950/50 rounded-full border border-orange-500/30 mb-8"
          >
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl mb-8 leading-tight"
          >
            Case Studies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Quroix Labs delivers real, measurable results. From startups to enterprises, we've helped
            businesses transform their operations, scale intelligently, and achieve outcomes that matter.
            Every project is backed by data, driven by innovation, and designed for impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
