import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
    AppWindow, Smartphone, Brain, Zap,
    Users, CreditCard, MessageSquare, LayoutDashboard, Database, HardDrive,
    Rocket, TrendingUp, ShieldCheck
} from "lucide-react";

export interface NodeData {
    id: string;
    type: "core" | "module" | "deployment";
    label: string;
    icon: any;
    x: number;
    y: number;
}

interface VisualizerProps {
    selectedCore: string | null;
    selectedModules: string[];
    deploymentScale: string | null;
}

export function NetworkVisualizer({ selectedCore, selectedModules, deploymentScale }: VisualizerProps) {
    const [nodes, setNodes] = useState<NodeData[]>([]);

    // Update nodes based on selection
    useEffect(() => {
        const newNodes: NodeData[] = [];
        const centerX = 50;
        const centerY = 50;

        // 1. Central Core Node
        if (selectedCore) {
            newNodes.push({
                id: "core",
                type: "core",
                label: selectedCore,
                icon: getIconForId(selectedCore),
                x: centerX,
                y: centerY,
            });
        }

        // 2. Module Nodes (Orbiting)
        if (selectedCore && selectedModules.length > 0) {
            selectedModules.forEach((modId, index) => {
                const angle = (index / selectedModules.length) * 2 * Math.PI;
                const radius = 30; // Distance from center
                newNodes.push({
                    id: modId,
                    type: "module",
                    label: getLabelForId(modId),
                    icon: getIconForId(modId),
                    x: centerX + radius * Math.cos(angle),
                    y: centerY + radius * Math.sin(angle),
                });
            });
        }

        // 3. Deployment Halo (Outer Ring effect)
        // Handled visually via the core glow intensity

        setNodes(newNodes);
    }, [selectedCore, selectedModules, deploymentScale]);

    return (
        <div className="relative w-full h-[300px] md:h-[500px] bg-gradient-to-br from-[#050510] to-[#0a0a20] rounded-3xl border border-indigo-900/30 overflow-hidden flex items-center justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

            {/* SVG Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {nodes.filter(n => n.type === "module").map(node => (
                    <motion.line
                        key={`link-${node.id}`}
                        x1="50%"
                        y1="50%"
                        x2={`${node.x}%`}
                        y2={`${node.y}%`}
                        stroke="url(#gradient-line)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                ))}
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Nodes */}
            {nodes.map(node => (
                <motion.div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* Node Circle */}
                    <div className={`
            relative flex items-center justify-center rounded-full
            ${node.type === "core" ? "w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-500 to-orange-600 shadow-[0_0_40px_rgba(245,158,11,0.4)]" : "w-12 h-12 md:w-16 md:h-16 bg-gray-900 border border-indigo-500/50 shadow-lg shadow-indigo-500/20"}
          `}>
                        {/* Pulse Effect for Core */}
                        {node.type === "core" && (
                            <motion.div
                                className="absolute inset-0 rounded-full border border-amber-400/50"
                                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        )}

                        <node.icon className={`
              ${node.type === "core" ? "w-8 h-8 md:w-10 md:h-10 text-white" : "w-5 h-5 md:w-6 md:h-6 text-indigo-400"}
            `} />
                    </div>

                    {/* Label */}
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-full mt-2 text-[10px] md:text-xs font-medium text-gray-400 whitespace-nowrap px-2 py-1 bg-black/60 rounded backdrop-blur-sm"
                    >
                        {node.label}
                    </motion.span>
                </motion.div>
            ))}

            {/* Empty State Hint */}
            {nodes.length === 0 && (
                <p className="text-gray-600 text-sm animate-pulse">Select a Core Platform to start...</p>
            )}
        </div>
    );
}

// Helper to get icons/labels
function getIconForId(id: string) {
    const map: any = {
        web: AppWindow, mobile: Smartphone, ai: Brain, auto: Zap,
        auth: Users, pay: CreditCard, chat: MessageSquare, dash: LayoutDashboard,
        db: Database, store: HardDrive,
        mvp: Rocket, growth: TrendingUp, enterprise: ShieldCheck
    };
    return map[id] || Brain;
}

function getLabelForId(id: string) {
    const map: any = {
        web: "Web App", mobile: "Mobile App", ai: "AI Model", auto: "Automation",
        auth: "Auth", pay: "Payments", chat: "Chatbot", dash: "Dashboard",
        db: "Database", store: "Storage",
        mvp: "MVP", growth: "Scale", enterprise: "Enterprise"
    };
    return map[id] || id;
}
