import { motion } from "motion/react";
import { FileText } from "lucide-react";

export function TermsPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-transparent to-cyan-950/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-950/50 to-cyan-950/50 rounded-full border border-indigo-500/30 mb-8"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-sm">
              Legal Terms
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-6xl mb-6 leading-tight">Terms of Service</h1>
          <p className="text-xl text-gray-400">
            Quroix Labs · Last updated: 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-3xl border border-gray-800 backdrop-blur-sm">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-8">
                By using this website, you agree to the following terms:
              </p>

              <h2 className="text-2xl mb-4 mt-12">1. Use of Website</h2>
              <p className="text-gray-400">
                You may browse our website, view content, and submit forms for business purposes. 
                You agree not to misuse or attempt to disrupt the website.
              </p>

              <h2 className="text-2xl mb-4 mt-12">2. Intellectual Property</h2>
              <p className="text-gray-400 mb-4">
                All content, text, branding, images, and designs on this site belong to Quroix Labs. 
                You may not copy, modify, or distribute any material without permission.
              </p>

              <h2 className="text-2xl mb-4 mt-12">3. Client Engagement</h2>
              <p className="text-gray-400 mb-4">
                Submitting a project request or contacting us does not create a formal business relationship. 
                A contract or written agreement is required for any paid engagement.
              </p>

              <h2 className="text-2xl mb-4 mt-12">4. Accuracy of Information</h2>
              <p className="text-gray-400">
                We aim to provide accurate information but do not guarantee completeness or error-free content.
              </p>

              <h2 className="text-2xl mb-4 mt-12">5. External Links</h2>
              <p className="text-gray-400">
                Our website may contain links to third-party sites. We are not responsible for their 
                content or practices.
              </p>

              <h2 className="text-2xl mb-4 mt-12">6. Limitation of Liability</h2>
              <p className="text-gray-400 mb-4">Quroix Labs is not liable for:</p>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>Website downtime</li>
                <li>Technical issues</li>
                <li>Losses arising from using our website or resources</li>
              </ul>
              <p className="text-gray-400">
                Use the website at your own discretion.
              </p>

              <h2 className="text-2xl mb-4 mt-12">7. Changes to Terms</h2>
              <p className="text-gray-400">
                We may modify these terms at any time. Continued use of the website indicates 
                acceptance of updated terms.
              </p>

              <h2 className="text-2xl mb-4 mt-12">8. Contact</h2>
              <p className="text-gray-400">
                For any questions regarding these terms, email:{" "}
                <span className="text-indigo-400">
                  quroixlabs@gmail.com
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}