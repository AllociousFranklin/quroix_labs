import { motion } from "motion/react";
import { Zap, Layers, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Launch intelligent prototypes in 2–4 weeks.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Designed to evolve with your business.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Human-Centric AI",
    description: "Automation that feels natural, not robotic.",
    color: "from-purple-500 to-pink-500",
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}
                  animate={{
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-2xl mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
