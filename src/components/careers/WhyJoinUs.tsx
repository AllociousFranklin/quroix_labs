import { motion } from "motion/react";
import { Code, Zap, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Code,
    title: "Build Real Stuff, Not Theory",
    description:
      "Work on real projects used by real clients. You'll build websites, intelligent automations, dashboards, and early AI tools.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Learn Faster Than Anywhere Else",
    description:
      "Work directly with the founders. No layers. No slow approvals. You'll gain experience across engineering, design, AI, and product.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Flexible & Friendly Culture",
    description:
      "We care about results, not hours. Work in a way that fits your schedule and strengths.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Grow With the Company",
    description:
      "If you join early, you grow as we grow. You'll be part of our core team.",
    color: "from-green-500 to-emerald-500",
  },
];

export function WhyJoinUs() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Why Join Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${reason.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-5`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <reason.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl mb-3">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}