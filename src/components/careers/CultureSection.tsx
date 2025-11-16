import { motion } from "motion/react";
import {
  Zap,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  TestTube,
  Minimize2,
  Clock,
  Users,
} from "lucide-react";

const cultureValues = [
  {
    icon: Zap,
    label: "Fast learning",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: MessageSquare,
    label: "Clear communication",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    label: "Helping each other grow",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle2,
    label: "Ownership over tasks",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TestTube,
    label: "Experimenting and iterating",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Minimize2,
    label: "Keeping things simple",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Clock,
    label: "Respect people and their time",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Users,
    label: "Building together",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export function CultureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            Our Culture
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {cultureValues.map((value, index) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm text-center">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${value.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="text-sm text-gray-300">
                    {value.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}