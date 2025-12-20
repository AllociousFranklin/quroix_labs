import { motion } from "motion/react";
import { MessageSquare, Target, LifeBuoy, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";

const priorities = [
  {
    icon: MessageSquare,
    title: "Clear communication",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Real-world outcomes",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: LifeBuoy,
    title: "Long-term support",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Problem-solving with intention",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Delivering what truly moves the business forward",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: CheckCircle2,
    title: "Quality over speed, always",
    color: "from-blue-500 to-indigo-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-cyan-950/10" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Our Clients Matter Most
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Everything we build starts with one belief — <span className="text-white">your success is our success.</span>
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative group">
            {/* Animated glow border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />
            <div className="absolute -inset-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl" />

            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 rounded-2xl border border-gray-800 group-hover:border-transparent transition-all duration-300 backdrop-blur-sm p-8 lg:p-12">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-indigo-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
              />

              <div className="relative z-10 space-y-6 text-center">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  At Quroix Labs, we work closely with founders, teams, and businesses that trust us with their ideas. Whether it's a website, an intelligent system, or a full-scale product build, we treat every project like it's our own.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Priorities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-center mb-8 text-gray-400">We prioritize:</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {priorities.map((priority, index) => (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Subtle glow on hover */}
                <div className={`absolute -inset-[1px] bg-gradient-to-br ${priority.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />

                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-xl border border-gray-800 group-hover:border-transparent transition-all duration-300 backdrop-blur-sm p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`relative w-10 h-10 bg-gradient-to-br ${priority.color} rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${priority.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md`} />
                      <priority.icon className="w-5 h-5 text-white relative z-10" />
                    </motion.div>

                    <p className="text-gray-300 leading-relaxed flex-1">{priority.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="relative group inline-block">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
            />
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed relative">
              We don't just work <span className="text-white italic">for</span> our clients —<br />
              we work <span className="text-white italic">with them</span>, shaping ideas into meaningful digital products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}