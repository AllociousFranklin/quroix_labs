import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";

export function CaseStudiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-purple-950/20" />
        <motion.div
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Coming Soon</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl">Case Studies</h1>
              <p className="text-2xl lg:text-3xl text-gray-400">
                Real Impact, Revealed Soon
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-lg text-gray-400 leading-relaxed"
            >
              <p>
                We're currently documenting select client outcomes and intelligent systems
                engineered by Quroix Labs.
              </p>

              {/* List */}
              <div className="space-y-3 text-left max-w-2xl mx-auto">
                <p className="text-gray-300">Our case studies will showcase:</p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Real problems solved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Intelligent workflows designed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>AI and automation deployed in production</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Measurable results achieved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Engineering strategies behind each solution</span>
                  </li>
                </ul>
              </div>

              <p className="pt-4">
                As we complete ongoing projects, we will begin publishing detailed case
                studies that reflect the quality, precision, and impact of our work.
              </p>

              <p className="text-xl text-cyan-400 pt-4">
                First Case Studies Releasing Soon.
              </p>

              <p className="pt-2">Want to be notified when they're published?</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl hover:shadow-2xl transition-all"
                style={{
                  boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)",
                }}
              >
                <span className="text-lg">Get Updates</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
