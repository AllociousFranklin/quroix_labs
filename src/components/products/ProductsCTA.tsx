import { motion } from "motion/react";
import { Sparkles, ArrowRight, Lightbulb } from "lucide-react";

export function ProductsCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-indigo-950/30 to-cyan-950/40" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute left-1/4 top-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
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
          <div className="relative p-16 rounded-3xl border border-gray-800 backdrop-blur-xl bg-gray-900/40 overflow-hidden">
            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-cyan-600/10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl mb-8"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Lightbulb className="w-10 h-10 text-white" />
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-6xl mb-6 leading-tight">
                Want to build your own{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  product
                </span>{" "}
                with us?
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether it's an internal tool, a SaaS platform, or an innovative AI product,
                we'll help you bring your vision to life with the same excellence we apply to our own products.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(168, 85, 247, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-xl hover:shadow-2xl transition-shadow group"
              >
                Start a Project
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
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  MVP in 2-4 weeks
                </span>
                <span>•</span>
                <span>Full product development</span>
                <span>•</span>
                <span>Launch support included</span>
              </div>

              {/* Secondary Option */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-800"
              >
                <p className="text-gray-400">
                  Interested in partnering on a product?{" "}
                  <motion.a
                    href="#"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Let's talk collaboration →
                  </motion.a>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
