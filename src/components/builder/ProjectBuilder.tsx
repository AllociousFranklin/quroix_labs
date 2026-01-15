import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    AppWindow, Smartphone, Brain, Zap,
    Users, CreditCard, MessageSquare, LayoutDashboard, Database, HardDrive,
    Rocket, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, RotateCcw, Mail, User
} from "lucide-react";
import { NetworkVisualizer } from "./NetworkVisualizer";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Option Configuration
const CORE_OPTIONS = [
    { id: "web", label: "Web Platform", icon: AppWindow, desc: "SaaS, Portal, PWA" },
    { id: "mobile", label: "Mobile App", icon: Smartphone, desc: "iOS, Android, React Native" },
    { id: "ai", label: "AI Model", icon: Brain, desc: "LLMs, Computer Vision, predictive models" },
    { id: "auto", label: "Automation", icon: Zap, desc: "Workflows, n8n, Zapier, Python scripts" },
];

const MODULE_OPTIONS = [
    { id: "auth", label: "Auth & Users", icon: Users },
    { id: "desc", label: "Payments", icon: CreditCard },
    { id: "chat", label: "AI Chatbot", icon: MessageSquare },
    { id: "dash", label: "Admin Panel", icon: LayoutDashboard },
    { id: "db", label: "Database", icon: Database },
    { id: "store", label: "File Storage", icon: HardDrive },
];

const SCALE_OPTIONS = [
    { id: "mvp", label: "MVP (Fast)", icon: Rocket, desc: "Weeks | $5k-$15k" },
    { id: "growth", label: "Growth", icon: TrendingUp, desc: "Months | $15k-$50k" },
    { id: "enterprise", label: "Enterprise", icon: ShieldCheck, desc: "Custom | $50k+" },
];

export function ProjectBuilder() {
    const [step, setStep] = useState(1);
    const [selectedCore, setSelectedCore] = useState<string | null>(null);
    const [selectedModules, setSelectedModules] = useState<string[]>([]);
    const [scale, setScale] = useState<string | null>(null);

    // Contact State
    const [contact, setContact] = useState({ name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handlers
    const toggleModule = (id: string) => {
        setSelectedModules(prev =>
            prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
        );
    };

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleReset = () => {
        setStep(1);
        setSelectedCore(null);
        setSelectedModules([]);
        setScale(null);
        setContact({ name: "", email: "" });
        setIsSubmitted(false);
    };

    const handleSubmit = async () => {
        if (!contact.name || !contact.email) return;

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "demo_requests"), {
                fullName: contact.name,
                email: contact.email,
                type: "interactive_builder",
                core: selectedCore,
                modules: selectedModules,
                scale: scale,
                submittedAt: serverTimestamp(),
            });
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error("Error submitting project:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto text-center py-20"
            >
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-12 rounded-3xl border border-green-500/30 backdrop-blur-md">
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-4 text-white">Blueprint Received</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Our engineering team is reviewing your {selectedCore} architecture.
                        <br />
                        We will email a proposal to <span className="text-white font-bold">{contact.email}</span> within 24 hours.
                    </p>
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition mx-auto"
                    >
                        <RotateCcw className="w-4 h-4" /> Build Another Project
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start py-12">
            {/* Visualizer (Top on Mobile, Right on Desktop) */}
            <div className="w-full order-1 lg:order-2 relative lg:sticky lg:top-24">
                <NetworkVisualizer
                    selectedCore={selectedCore}
                    selectedModules={selectedModules}
                    deploymentScale={scale}
                />

                <div className="mt-8 p-6 rounded-2xl bg-[#0a0a0f] border border-gray-800 hidden md:block">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Architecture Summary</h3>
                    <div className="space-y-3 font-mono text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Core:</span>
                            <span className={selectedCore ? "text-amber-400" : "text-gray-700"}>{selectedCore ? CORE_OPTIONS.find(c => c.id === selectedCore)?.label : "Pending..."}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Modules:</span>
                            <span className={selectedModules.length > 0 ? "text-indigo-400" : "text-gray-700"}>{selectedModules.length} Active</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Est. Time:</span>
                            <span className="text-white">
                                {scale ? SCALE_OPTIONS.find(s => s.id === scale)?.desc.split('|')[0] : "--"}
                            </span>
                        </div>
                        {scale && (
                            <div className="flex justify-between border-t border-gray-800 pt-3 mt-3">
                                <span className="text-gray-500">Est. Budget:</span>
                                <span className="text-green-400">
                                    {SCALE_OPTIONS.find(s => s.id === scale)?.desc.split('|')[1]}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Controls (Bottom on Mobile, Left on Desktop) */}
            <div className="w-full order-2 lg:order-1 space-y-8">

                {/* Progress Bar */}
                <div className="flex gap-2 mb-8">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= i ? "bg-amber-500" : "bg-gray-800"}`} />
                    ))}
                </div>

                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">

                        {/* STEP 1: Core */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                            >
                                <h2 className="text-3xl font-bold mb-2">Choose your Foundation</h2>
                                <p className="text-gray-400 mb-6">What is the core of your digital product?</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {CORE_OPTIONS.map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setSelectedCore(opt.id)}
                                            className={`p-4 rounded-xl border text-left transition-all duration-300 hover:shadow-lg ${selectedCore === opt.id
                                                ? "bg-amber-500/10 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                                                : "bg-gray-900/50 border-gray-800 hover:border-gray-600"
                                                }`}
                                        >
                                            <opt.icon className={`w-8 h-8 mb-3 ${selectedCore === opt.id ? "text-amber-400" : "text-gray-400"}`} />
                                            <h3 className="font-bold text-white mb-1">{opt.label}</h3>
                                            <p className="text-xs text-gray-500">{opt.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Modules */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                            >
                                <h2 className="text-3xl font-bold mb-2">Add Power Modules</h2>
                                <p className="text-gray-400 mb-6">Select the features your project needs.</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {MODULE_OPTIONS.map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => toggleModule(opt.id)}
                                            className={`p-3 rounded-xl border text-center transition-all duration-200 ${selectedModules.includes(opt.id)
                                                ? "bg-indigo-600/20 border-indigo-500 text-white"
                                                : "bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-600"
                                                }`}
                                        >
                                            <opt.icon className="w-6 h-6 mx-auto mb-2" />
                                            <span className="text-xs font-medium block">{opt.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Scale */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                            >
                                <h2 className="text-3xl font-bold mb-2">Deployment Scale</h2>
                                <p className="text-gray-400 mb-6">How fast and robust do you need this?</p>
                                <div className="space-y-4">
                                    {SCALE_OPTIONS.map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setScale(opt.id)}
                                            className={`w-full p-4 rounded-xl border flex items-center gap-4 transition-all duration-300 ${scale === opt.id
                                                ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500"
                                                : "bg-gray-900/50 border-gray-800 hover:border-gray-600"
                                                }`}
                                        >
                                            <div className={`p-3 rounded-lg ${scale === opt.id ? "bg-green-500/20" : "bg-gray-800"}`}>
                                                <opt.icon className={`w-6 h-6 ${scale === opt.id ? "text-green-400" : "text-gray-400"}`} />
                                            </div>
                                            <div className="text-left flex-1">
                                                <h3 className="font-bold text-white">{opt.label}</h3>
                                                <p className="text-sm text-gray-500">{opt.desc}</p>
                                            </div>
                                            {scale === opt.id && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: Contact */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                            >
                                <h2 className="text-3xl font-bold mb-2">Finalize Request</h2>
                                <p className="text-gray-400 mb-6">Where should we send the architectural blueprint?</p>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                value={contact.name}
                                                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl focus:border-amber-500 outline-none transition"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                            <input
                                                type="email"
                                                value={contact.email}
                                                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl focus:border-amber-500 outline-none transition"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-gray-800">
                    <button
                        onClick={step === 1 ? () => window.history.back() : handleBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-white transition"
                    >
                        {step === 1 ? "Cancel" : "Back"}
                    </button>

                    {step < 4 ? (
                        <button
                            onClick={handleNext}
                            disabled={(step === 1 && !selectedCore) || (step === 3 && !scale)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${(step === 1 && !selectedCore) || (step === 3 && !scale)
                                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                                : "bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20"
                                }`}
                        >
                            Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={!contact.name || !contact.email || isSubmitting}
                            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all ${!contact.name || !contact.email || isSubmitting
                                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                                : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white shadow-lg shadow-green-500/30"
                                }`}
                        >
                            {isSubmitting ? "Sending..." : "Submit Blueprint"} <Rocket className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
}
