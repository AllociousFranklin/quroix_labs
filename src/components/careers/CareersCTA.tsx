import { motion } from "motion/react";
import { Rocket, Mail } from "lucide-react";

export function CareersCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-cyan-950/30 to-purple-950/40" />
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
          <div className="relative p-16 rounded-3xl border border-gray-800 backdrop-blur-xl bg-gray-900/40 overflow-hidden">
            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-cyan-600/10 to-purple-600/10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl mb-8"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Rocket className="w-10 h-10 text-white" />
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
                We're Just{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Getting Started
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                We may not be big today — but we're building something serious.
                If you want to be part of that journey and grow with us, we'd love to hear from you.
              </p>

              <div className="mb-10">
                <p className="text-lg text-gray-300 mb-4">
                  Didn't see your role?<br />
                  <span className="text-white">Send us your resume anyway.</span>
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                href="mailto:career.quroixlabs@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(99, 102, 241, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl text-xl hover:shadow-2xl transition-shadow group"
              >
                <Mail className="w-6 h-6" />
                Email: career.quroixlabs@gmail.com
              </motion.a>

              {/* Additional Note */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-400">
                  We review all applications within 3-5 business days
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}