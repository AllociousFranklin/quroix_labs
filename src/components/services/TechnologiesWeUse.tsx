import { motion } from "motion/react";

const technologies = [
  {
    name: "Python",
    category: "Backend & AI",
    icon: "🐍",
    color: "from-yellow-500 to-blue-500",
  },
  {
    name: "Next.js",
    category: "Frontend Framework",
    icon: "▲",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "React",
    category: "UI Library",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: "🟢",
    color: "from-green-500 to-green-700",
  },
  {
    name: "OpenAI",
    category: "AI Platform",
    icon: "🤖",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Firebase",
    category: "Backend Services",
    icon: "🔥",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    icon: "☁️",
    color: "from-orange-400 to-yellow-600",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: "📘",
    color: "from-blue-500 to-blue-700",
  },
];

export function TechnologiesWeUse() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Technologies We Use</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Best-in-class tools and frameworks for building exceptional products
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm text-center">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {tech.icon}
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-xl mb-2">{tech.name}</h3>

                  {/* Category */}
                  <p className="text-sm text-gray-500">{tech.category}</p>

                  {/* Hover Border Bottom */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            And many more cutting-edge technologies tailored to your specific needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
