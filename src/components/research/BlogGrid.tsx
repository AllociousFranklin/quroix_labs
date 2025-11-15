import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Building Scalable AI Pipelines: Lessons from Production",
    category: "AI",
    thumbnail: "🧠",
    color: "from-indigo-500 to-purple-500",
    summary: "Learn how we built a production AI pipeline that processes 10M+ requests daily with 99.9% uptime.",
    author: "Michael Chen",
    date: "Nov 8, 2025",
    readTime: "8 min",
  },
  {
    id: 2,
    title: "Automation Best Practices: From Manual to Autonomous",
    category: "Automation",
    thumbnail: "⚡",
    color: "from-yellow-500 to-orange-500",
    summary: "A comprehensive guide to transforming manual workflows into intelligent automation systems.",
    author: "Emily Rodriguez",
    date: "Nov 5, 2025",
    readTime: "10 min",
  },
  {
    id: 3,
    title: "Microservices Architecture: When and How to Scale",
    category: "Engineering",
    thumbnail: "🏗️",
    color: "from-cyan-500 to-blue-500",
    summary: "Practical insights on migrating from monoliths to microservices without disrupting your business.",
    author: "David Park",
    date: "Nov 2, 2025",
    readTime: "12 min",
  },
  {
    id: 4,
    title: "Zero-Trust Security in Modern Cloud Infrastructure",
    category: "Security",
    thumbnail: "🔒",
    color: "from-red-500 to-pink-500",
    summary: "Implementing zero-trust architecture to protect your cloud infrastructure from emerging threats.",
    author: "Lisa Thompson",
    date: "Oct 30, 2025",
    readTime: "9 min",
  },
  {
    id: 5,
    title: "Designing AI Interfaces: Making Complexity Feel Simple",
    category: "Design",
    thumbnail: "🎨",
    color: "from-purple-500 to-pink-500",
    summary: "UX principles for building AI-powered interfaces that users actually understand and love.",
    author: "Alex Kim",
    date: "Oct 28, 2025",
    readTime: "7 min",
  },
  {
    id: 6,
    title: "How We Reduced Inventory Costs by 73% with AI",
    category: "Case Studies",
    thumbnail: "📊",
    color: "from-green-500 to-emerald-500",
    summary: "A detailed breakdown of our AI-driven inventory optimization system and the results it delivered.",
    author: "Sarah Chen",
    date: "Oct 25, 2025",
    readTime: "11 min",
  },
];

const categories = ["All", "AI", "Automation", "Engineering", "Security", "Design", "Case Studies"];

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = articles.filter(
    (article) => selectedCategory === "All" || article.category === selectedCategory
  );

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-gray-900/80 border border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${article.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-20`}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                      <motion.div
                        className="relative z-10 text-6xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {article.thumbnail}
                      </motion.div>

                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${article.color} rounded-lg text-xs`}>
                        {article.category}
                      </div>

                      {/* Top Border */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${article.color}`} />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">
                        {article.title}
                      </h3>

                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {article.summary}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-800">
                        <span>{article.author}</span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        className="flex items-center gap-2 text-sm text-emerald-400 group-hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
