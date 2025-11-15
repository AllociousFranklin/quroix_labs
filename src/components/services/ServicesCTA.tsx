import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-cyan-950/40" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-cyan-600/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute left-1/4 top-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-16 rounded-3xl border border-gray-800 backdrop-blur-xl bg-gray-900/40 text-center overflow-hidden">
            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-cyan-600/10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-950/50 rounded-full border border-indigo-500/30 mb-8"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                    "0 0 40px rgba(99, 102, 241, 0.5)",
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300">Custom Solutions Available</span>
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-6xl mb-6 leading-tight">
                Need a{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  custom solution?
                </span>
                <br />
                Let's build it.
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Every business is unique. We'll design a tailored solution that fits your exact
                requirements, timeline, and budget.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(99, 102, 241, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl text-xl hover:shadow-2xl transition-shadow group"
              >
                Request Demo
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.span>
              </motion.button>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  48-hour response time
                </span>
                <span>•</span>
                <span>Free consultation</span>
                <span>•</span>
                <span>Flexible pricing models</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
