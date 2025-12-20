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
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-heading tracking-tight">
            Our Approach
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
              {/* Multi-layer glow border */}
              <div
                className={`absolute -inset-[1px] bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
              />
              <div
                className={`absolute -inset-[2px] bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`}
              />

              <div className="relative p-8 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-2xl border border-gray-800 group-hover:border-transparent transition-all duration-300 backdrop-blur-sm">
                {/* Animated Glow Effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}
                  animate={{
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 overflow-hidden`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg`}
                    />
                    <feature.icon className="w-7 h-7 text-white relative z-10" />
                  </motion.div>

                  <h3 className="text-2xl font-medium text-white mb-3">
                    {feature.title}
                  </h3>
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