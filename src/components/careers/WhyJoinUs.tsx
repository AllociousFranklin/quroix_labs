import { motion } from "motion/react";
import { TrendingUp, Rocket, Heart } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "We invest in your development with learning budgets, conference access, and mentorship programs. Your growth is our priority.",
    color: "from-violet-500 to-purple-500",
    features: ["$5K annual learning budget", "Conference tickets", "Internal tech talks"],
  },
  {
    icon: Rocket,
    title: "Real-World Projects",
    description:
      "Work on production systems used by thousands. No toy projects—just meaningful work that impacts real businesses and users.",
    color: "from-fuchsia-500 to-pink-500",
    features: ["Production-ready code", "Client-facing work", "Technical ownership"],
  },
  {
    icon: Heart,
    title: "Flexible Culture",
    description:
      "Remote-first, async communication, and results-driven. Work when and where you're most productive. Life comes first.",
    color: "from-purple-500 to-indigo-500",
    features: ["100% remote", "Flexible hours", "Unlimited PTO"],
  },
];

export function WhyJoinUs() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Why Join Us</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            More than just a job—build your career with purpose
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${reason.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl mb-4">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {reason.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${reason.color}`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
