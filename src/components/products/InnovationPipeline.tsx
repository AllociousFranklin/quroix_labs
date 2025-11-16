import { motion } from "motion/react";
import { Camera, Film, ShieldAlert, ArrowRight, Rocket } from "lucide-react";

const innovations = [
  {
    id: 1,
    title: "Pospal",
    subtitle: "AI Pose Mentor for Perfect Photography",
    description:
      "A camera-integrated AI assistant that analyzes your frame in real-time and suggests the perfect pose based on body structure, lighting, camera angle, and a large database of professional model poses.",
    icon: Camera,
    color: "from-violet-500 to-purple-500",
    stage: "In Development",
    features: [
      "Real-time AI pose correction",
      "Pose scoring & angle detection",
      "Custom recommendations",
      "Photographer assistant mode",
    ],
    ctaText: "Join Waitlist",
  },
  {
    id: 2,
    title: "MCritic AI",
    subtitle: "AI Film Critic & Script Success Predictor",
    description:
      "MCritic AI analyzes movie plots and scripts, providing insights on storyline strength, audience impact, pacing, and chances of commercial success across regions.",
    icon: Film,
    color: "from-pink-500 to-rose-500",
    stage: "In Development",
    features: [
      "Script sentiment & pacing analysis",
      "Region-wise success prediction",
      "Character arc evaluation",
      "AI storyline improvement suggestions",
    ],
    ctaText: "Join Waitlist",
  },
  {
    id: 3,
    title: "CodeRed AI",
    subtitle: "Autonomous AI Penetration Testing System",
    description:
      "A cybersecurity tool that automatically scans and stress-tests websites for vulnerabilities, producing a complete pentest report powered by AI-driven analysis.",
    icon: ShieldAlert,
    color: "from-red-500 to-orange-500",
    stage: "Prototype Stage",
    features: [
      "Automated vulnerability scanning",
      "AI-generated penetration reports",
      "Exploit detection",
      "Risk scoring",
      "Developer remediation guidelines",
    ],
    ctaText: "Join Beta",
  },
];

export function InnovationPipeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            INNOVATION PIPELINE
          </h2>
          <p className="text-xl text-gray-400">
            The next wave of intelligence we're building.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${innovation.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Stage Badge */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${innovation.color} rounded-2xl flex items-center justify-center mb-4`}
                    >
                      <innovation.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <span
                      className={`inline-block px-4 py-1 bg-gradient-to-r ${innovation.color} rounded-lg text-sm`}
                    >
                      {innovation.stage}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-2">{innovation.title}</h3>
                  <p className="text-lg text-gray-400 mb-4">
                    {innovation.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {innovation.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-sm text-gray-400 mb-3">{innovation.stage}</h4>
                    <ul className="space-y-2">
                      {innovation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <Rocket className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("navigate", { detail: "contact" })
                      );
                    }}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${innovation.color} rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
                  >
                    {innovation.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Top Accent */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${innovation.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}