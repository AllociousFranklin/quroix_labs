import { motion } from "motion/react";
import { Target, TrendingUp, Users } from "lucide-react";

const impacts = [
  {
    icon: Target,
    title: "Solving Real Problems",
    description:
      "Each product addresses genuine pain points we've encountered while building solutions for clients. These aren't theoretical — they're battle-tested tools born from real-world challenges.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Accelerating Innovation",
    description:
      "By building our own products, we stay at the forefront of technology. This continuous innovation directly benefits our clients through faster development, better solutions, and cutting-edge expertise.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Democratizing AI",
    description:
      "Complex AI and automation shouldn't require a PhD. Our products make advanced technology accessible to businesses of all sizes, enabling everyone to leverage intelligent systems.",
    color: "from-purple-500 to-pink-500",
  },
];

export function WhyTheseProductsMatter() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Why These Products Matter</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            More than just tools — they're the future of how we work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/60 to-gray-950/60 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm text-center">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${impact.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <impact.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl mb-4">{impact.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {impact.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${impact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="p-8 bg-gradient-to-br from-indigo-950/20 to-cyan-950/20 rounded-2xl border border-indigo-500/20">
            <p className="text-lg text-gray-300 leading-relaxed">
              "We build products that we'd want to use ourselves. Every line of code, every feature,
              and every design decision is driven by the goal of making technology more powerful yet
              more human."
            </p>
            <div className="mt-4 text-sm text-gray-500">
              — Quroix Labs Team
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
