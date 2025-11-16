import { motion } from "motion/react";
import { Send, ArrowRight } from "lucide-react";

export function CareersCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-fuchsia-950/30 to-indigo-950/40" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute left-1/4 top-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl"
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
              className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-fuchsia-600/10 to-indigo-600/10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl mb-8"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Send className="w-10 h-10 text-white" />
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
                Didn't see your role?{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Send us your resume anyway.
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                We're always looking for exceptional talent. If you're passionate about AI, automation,
                and building products that matter, we want to hear from you—even if there's no perfect
                role listed right now.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(139, 92, 246, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("navigate", { detail: "contact" }));
                }}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl text-xl hover:shadow-2xl transition-shadow group"
              >
                Contact Us
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.span>
              </motion.button>

              {/* Alternative Contact */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-400">
                  Or email us directly at{" "}
                  <span className="text-violet-400">
                    quroixlabs@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}