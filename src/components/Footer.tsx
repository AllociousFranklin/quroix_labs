import { motion } from "motion/react";
import { Zap, Mail, Phone } from "lucide-react";

export function Footer() {
  const quickLinksLeft = ["Services", "Products", "Case Studies", "Research"];
  const quickLinksRight = ["Partnership", "Careers", "Contact"];

  return (
    <footer className="relative py-20 border-t border-gray-800 overflow-hidden">
      {/* Background Gradient with animated glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/50" />
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left - Logo & Tagline */}
          <div className="mb-6 space-y-3">
  <motion.img
    src="/assets/Quroix_white_Logo.svg"
    alt="Quroix Labs"
    className="h-7 w-auto opacity-85 hover:opacity-100 transition-opacity"
    whileHover={{ scale: 1.02 }}
    draggable={false}
  />
  <p className="text-gray-400 leading-relaxed max-w-sm">
    Engineering intelligence for the real world.
  </p>
</div>


          {/* Center - Quick Links (2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm tracking-wider uppercase text-gray-500 mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                {quickLinksLeft.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const event = new CustomEvent("navigate", { 
                          detail: link.toLowerCase().replace(/ /g, "-") 
                        });
                        window.dispatchEvent(event);
                      }}
                      className="relative text-gray-400 hover:text-white transition-colors inline-block group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="relative z-10">{link}</span>
                      <span className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10 blur transition-all duration-300 rounded" />
                    </motion.a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksRight.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const event = new CustomEvent("navigate", { 
                          detail: link.toLowerCase().replace(/ /g, "-") 
                        });
                        window.dispatchEvent(event);
                      }}
                      className="relative text-gray-400 hover:text-white transition-colors inline-block group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="relative z-10">{link}</span>
                      <span className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10 blur transition-all duration-300 rounded" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm tracking-wider uppercase text-gray-500 mb-6">Contact</h3>
            <div className="space-y-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "contact" }))}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group cursor-pointer"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-indigo-500 transition-colors" />
                quroixlabs@gmail.com
              </button>
              <a
                href="tel:+916382696238"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-gray-600 group-hover:text-indigo-500 transition-colors" />
                <span>+91 6382696238</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>© 2025 Quroix Labs</p>
          <div className="flex items-center gap-3">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const event = new CustomEvent("navigate", { detail: "privacy" });
                window.dispatchEvent(event);
              }}
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <span>·</span>
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const event = new CustomEvent("navigate", { detail: "terms" });
                window.dispatchEvent(event);
              }}
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}