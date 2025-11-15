import { motion } from "motion/react";
import { Award, Cpu, DollarSign } from "lucide-react";

const strengths = [
  {
    icon: Award,
    title: "Proven Delivery",
    description: "Track record of launching successful AI products on time and within budget.",
    stats: "100+ Projects Delivered",
  },
  {
    icon: Cpu,
    title: "Strong Engineering Culture",
    description: "World-class team with deep expertise in AI, ML, and modern software architecture.",
    stats: "15+ Years Combined Experience",
  },
  {
    icon: DollarSign,
    title: "Startup-Friendly Pricing",
    description: "Flexible engagement models designed for growing companies and enterprises alike.",
    stats: "Custom Plans Available",
  },
];

export function WhyChoose() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Why Choose Quroix Labs</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for excellence, designed for impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative p-10 bg-gradient-to-br from-gray-900/60 to-gray-950/60 rounded-3xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm text-center">
                {/* Pulsing Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <strength.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl mb-4">{strength.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {strength.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-indigo-950/50 rounded-full border border-indigo-500/30">
                    <span className="text-sm text-indigo-400">{strength.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
