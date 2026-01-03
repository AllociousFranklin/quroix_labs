import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Agentic AI: Beyond Simple Automation",
    category: "AI",
    thumbnail: "🚀",
    color: "from-indigo-500 to-cyan-500",
    summary: "Moving beyond scripted automation. How we design systems that adapt, learn, and make decisions in real-time.",
    author: "Quroix Intelligence",
    date: "Jan 01, 2026",
    readTime: "15 min",
  },
];

const categories = ["All", "AI"];

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
                className={`px-6 py-3 rounded-xl text-sm transition-all duration-300 ${selectedCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/30"
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
                <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col">
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${article.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden shrink-0">
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
                      <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${article.color} rounded-lg text-xs font-semibold text-white`}>
                        {article.category}
                      </div>

                      {/* Top Border */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${article.color}`} />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all text-white font-semibold">
                        {article.title}
                      </h3>

                      <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                        {article.summary}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-800 mt-auto">
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
                        className="flex items-center gap-2 text-sm text-indigo-400 group-hover:gap-3 transition-all"
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
