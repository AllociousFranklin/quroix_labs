import { motion } from "motion/react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-indigo-950/30 to-cyan-950/40" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute left-1/4 top-1/2 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"
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
              className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-indigo-600/10 to-cyan-600/10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl mb-8"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
                Get monthly insights{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  delivered to your inbox
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 5,000+ tech leaders and innovators who receive our curated content on AI,
                automation, and engineering excellence every month.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {[
                  "Latest AI trends & research",
                  "Exclusive case studies",
                  "Technical deep-dives",
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Email Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/50 transition-shadow whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Privacy Note */}
              <p className="mt-6 text-sm text-gray-500">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
