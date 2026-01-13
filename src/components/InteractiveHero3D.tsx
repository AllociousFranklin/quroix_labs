import { useEffect, useRef, useState } from "react";

/**
 * Premium Neural Starfield Background
 * A high-performance, visually rich background that combines 
 * celestial starfield aesthetics with neural network connections.
 */
export function InteractiveHero3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!mounted || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Node[] = [];
        let shootingStars: ShootingStar[] = [];
        let backgroundStars: { x: number; y: number; size: number; opacity: number }[] = [];

        // Density calculation
        const area = window.innerWidth * window.innerHeight;
        const nodeCount = Math.min(Math.floor(area / 12000), 120);
        const bgStarCount = Math.floor(area / 4000);

        let mouse = { x: -1000, y: -1000, active: false };
        let animationFrameId: number;

        class Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            glowColor: string;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.size = Math.random() * 2 + 1;

                const isIndigo = Math.random() > 0.5;
                this.color = isIndigo ? "#818cf8" : "#22d3ee";
                this.glowColor = isIndigo ? "rgba(99, 102, 241, 0.4)" : "rgba(6, 182, 212, 0.4)";
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Interaction with mouse
                if (mouse.active) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        this.x -= dx * 0.01;
                        this.y -= dy * 0.01;
                    }
                }

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();

                // Glow
                const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
                g.addColorStop(0, this.glowColor);
                g.addColorStop(1, "transparent");
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        class ShootingStar {
            x: number;
            y: number;
            len: number;
            speed: number;
            angle: number;
            opacity: number;
            active: boolean;

            constructor() {
                this.x = 0;
                this.y = 0;
                this.len = 0;
                this.speed = 0;
                this.angle = 0;
                this.opacity = 0;
                this.active = false;
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * (canvas.height / 2);
                this.len = Math.random() * 80 + 40;
                this.speed = Math.random() * 10 + 5;
                this.angle = (Math.PI / 4) + (Math.random() * 0.2);
                this.opacity = 0;
                this.active = false;
            }

            launch() {
                this.active = true;
                this.opacity = 1;
            }

            update() {
                if (!this.active) return;
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.opacity -= 0.01;
                if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                if (!this.active || !ctx) return;
                ctx.beginPath();
                const grad = ctx.createLinearGradient(
                    this.x, this.y,
                    this.x - Math.cos(this.angle) * this.len,
                    this.y - Math.sin(this.angle) * this.len
                );
                grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                grad.addColorStop(1, "rgba(255, 255, 255, 0)");
                ctx.strokeStyle = grad;
                ctx.lineWidth = 2;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x - Math.cos(this.angle) * this.len,
                    this.y - Math.sin(this.angle) * this.len
                );
                ctx.stroke();
            }
        }

        const init = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            particles = [];
            for (let i = 0; i < nodeCount; i++) {
                particles.push(new Node());
            }

            backgroundStars = [];
            for (let i = 0; i < bgStarCount; i++) {
                backgroundStars.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 1,
                    opacity: Math.random() * 0.4
                });
            }

            shootingStars = [new ShootingStar(), new ShootingStar()];
        };

        const animate = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // 1. Draw Background Stars
            backgroundStars.forEach(s => {
                ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity * (0.5 + Math.sin(Date.now() * 0.001 + s.x) * 0.5)})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // 2. Draw Shooting Stars
            if (Math.random() > 0.993) {
                const star = shootingStars.find(s => !s.active);
                if (star) star.launch();
            }
            shootingStars.forEach(s => {
                s.update();
                s.draw();
            });

            // 3. Draw Connections
            particles.forEach((p, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        const alpha = (1 - dist / 180) * 0.15;
                        ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            // 4. Draw Nodes
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);
        init();
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
            {/* Subtle background glow to add depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/10 via-transparent to-cyan-950/10" />
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ opacity: 0.8 }}
            />
        </div>
    );
}
