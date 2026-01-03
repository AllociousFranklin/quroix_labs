import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, TrendingUp, Building2, Briefcase } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    company: "Theory of Arts",
    industry: "Design",
    logo: "🎨",
    color: "from-purple-500 to-pink-500",
    problem: "Needed a high-performance, aesthetically premium portfolio to showcase professional work, research, and courses, evolving from a simple product display.",
    solution: "Developed a modern React/Vite application with Tailwind & Radix UI, featuring bespoke Framer Motion animations and an immersive gallery experience.",
    result: "Premium high-performance web app",
    link: "https://tanishartist.in",
    metrics: [
      { label: "Performance", value: "100/100" },
      { label: "User Retention", value: "+45%" },
      { label: "Load Time", value: "<0.8s" },
    ],
  },
  {
    id: 2,
    company: "Brim LED Clocks",
    industry: "Retail",
    logo: "⏰",
    color: "from-orange-500 to-red-500",
    problem: "Required a custom interactive e-commerce experience with live product visualization and automated WhatsApp sales integration.",
    solution: "Implemented dynamic product customization (color/size), real-time WhatsApp message generation, and a scroll-triggered interactive UI.",
    result: "Automated lead capture system",
    link: "https://brimclocks.com",
    metrics: [
      { label: "Lead Gen", value: "+300%" },
      { label: "Engagement", value: "+150%" },
      { label: "Conversion", value: "+25%" },
    ],
  },
  {
    id: 3,
    company: "Enterprise AI Analytics",
    industry: "Tech",
    logo: "🤖",
    color: "from-blue-500 to-cyan-500",
    problem: "Processing massive datasets for real-time actionable insights was too slow and resource-intensive for existing infrastructure.",
    solution: "Developing a scalable AI analytics suite capable of processing terabytes of data in real-time for enterprise decision-making.",
    result: "Optimized data workflows",
    link: "#",
    metrics: [
      { label: "Processing", value: "10TB/day" },
      { label: "Latency", value: "-90%" },
      { label: "Efficiency", value: "+500%" },
    ],
  },
];

const industries = ["All", "Design", "Retail", "Tech"];

export function CaseStudiesGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredStudies = caseStudies.filter(
    (study) => selectedIndustry === "All" || study.industry === selectedIndustry
  );

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Industry Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <motion.button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl text-sm transition-all duration-300 ${selectedIndustry === industry
                    ? "bg-gradient-to-r from-orange-600 to-cyan-600 text-white shadow-lg shadow-orange-500/30"
                    : "bg-gray-900/80 border border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                  }`}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col">
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${study.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Logo & Company */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center text-3xl shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {study.logo}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{study.company}</h3>
                        <span className="text-sm text-gray-500">{study.industry}</span>
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Challenge
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                        {study.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6 flex-1">
                      <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Solution
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                        {study.solution}
                      </p>
                    </div>

                    {/* Result Badge */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Key Impact
                      </div>
                      <div
                        className={`inline-block px-4 py-2 bg-gradient-to-r ${study.color} rounded-lg text-xs font-medium text-white shadow-lg`}
                      >
                        {study.result}
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-6 pb-6 border-b border-gray-800">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className={`text-sm font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                            {metric.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${study.color} bg-clip-text text-transparent group-hover:gap-3 transition-all mt-auto`}
                    >
                      {study.link !== '#' ? 'Visit Live Site' : 'Coming Soon'}
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Results Summary */}
        {filteredStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">
              No case studies found for this industry yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
