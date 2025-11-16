import { motion } from "motion/react";
import { Target, Zap, Users } from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: Target,
    title: "Built from real-world challenges",
    description:
      "Every product originates from actual client needs, industry gaps, or recurring pain points.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 2,
    icon: Zap,
    title: "Accelerates development for clients",
    description:
      "Our internal tools help us deliver projects faster, smarter, and more reliably.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    icon: Users,
    title: "Democratizing AI",
    description:
      "We're making advanced technology accessible to individuals, startups, and businesses of all sizes.",
    color: "from-purple-500 to-pink-500",
  },
];

export function WhyTheseProductsMatter() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            WHY THESE PRODUCTS MATTER
          </h2>
          <p className="text-xl text-gray-400">
            Engineering intelligence that actually solves problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm text-center">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${reason.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl mb-4">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Top Accent */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}