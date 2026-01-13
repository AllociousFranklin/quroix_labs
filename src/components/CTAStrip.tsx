import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/30 via-purple-950/30 to-cyan-950/30" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute left-1/4 top-1/2 w-64 h-64 bg-indigo-600/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 w-64 h-64 bg-cyan-600/30 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Main Card */}
          <div className="relative p-12 rounded-3xl border border-gray-800 backdrop-blur-xl bg-gray-900/60">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-950/50 rounded-full border border-indigo-500/30 mb-6"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                    "0 0 40px rgba(99, 102, 241, 0.5)",
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                  ],
                }}
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300">Limited Availability</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl lg:text-5xl mb-6 leading-tight"
              >
                Start your project today — get a{" "}
                <span className="text-white font-medium">
                  tailored demo in 48 hours
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Join innovative companies that trust Quroix Labs to bring their AI vision to life
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const event = new CustomEvent("navigate", { detail: "request-demo" });
                  window.dispatchEvent(event);
                }}
                className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl text-lg group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl bg-gradient-to-r from-indigo-500 to-cyan-500" />
                <span className="relative z-10">Request a Demo</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 1 }}
                className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500"
              >
                <span className="flex items-center gap-2">
                  <span className="relative w-2 h-2 bg-green-500 rounded-full">
                    <span className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
                  </span>
                  No credit card required
                </span>
                <span>•</span>
                <span>Free consultation</span>
                <span>•</span>
                <span>NDA protected</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}