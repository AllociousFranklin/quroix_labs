import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface Node {
  x: number;
  y: number;
  size: number;
  glow: number;
  delay: number;
  isGrid: boolean;
}

interface Branch {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  delay: number;
}

export function EvolutionIntelligence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Center-left spark position
    const sparkX = width * 0.25;
    const sparkY = height * 0.5;

    // Create organic branches (left side) and grid nodes (right side)
    const branches: Branch[] = [];
    const nodes: Node[] = [];

    // Generate organic branching network (left side)
    const createOrganicBranch = (
      startX: number,
      startY: number,
      angle: number,
      depth: number,
      delay: number
    ) => {
      if (depth > 3) return;

      const length = Math.random() * 80 + 60;
      const endX = startX + Math.cos(angle) * length;
      const endY = startY + Math.sin(angle) * length;

      // Only create branches that stay in left/center area
      if (endX < width * 0.65) {
        branches.push({
          startX,
          startY,
          endX,
          endY,
          progress: 0,
          delay,
        });

        nodes.push({
          x: endX,
          y: endY,
          size: 4,
          glow: 0,
          delay: delay + 0.3,
          isGrid: false,
        });

        // Create 2-3 sub-branches
        const subBranches = depth === 0 ? 4 : Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < subBranches; i++) {
          const newAngle = angle + (Math.random() - 0.5) * Math.PI * 0.6;
          createOrganicBranch(endX, endY, newAngle, depth + 1, delay + 0.2);
        }
      }
    };

    // Create initial branches from spark
    const mainBranches = 6;
    for (let i = 0; i < mainBranches; i++) {
      const angle = (Math.PI * 2 * i) / mainBranches + Math.random() * 0.3;
      createOrganicBranch(sparkX, sparkY, angle, 0, i * 0.15);
    }

    // Generate grid pattern (right side) - structured system
    const gridStartX = width * 0.55;
    const gridSpacingX = 70;
    const gridSpacingY = 70;
    const gridCols = 4;
    const gridRows = 5;

    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const x = gridStartX + col * gridSpacingX;
        const y = height * 0.5 + (row - gridRows / 2) * gridSpacingY;

        if (x < width - 50) {
          nodes.push({
            x,
            y,
            size: 4,
            glow: 0,
            delay: 1.5 + row * 0.1 + col * 0.1,
            isGrid: true,
          });

          // Connect grid nodes horizontally
          if (col > 0) {
            branches.push({
              startX: x - gridSpacingX,
              startY: y,
              endX: x,
              endY: y,
              progress: 0,
              delay: 1.5 + row * 0.1 + col * 0.1,
            });
          }

          // Connect grid nodes vertically
          if (row > 0) {
            branches.push({
              startX: x,
              startY: y - gridSpacingY,
              endX: x,
              endY: y,
              progress: 0,
              delay: 1.5 + row * 0.1,
            });
          }
        }
      }
    }

    // Animation state
    let startTime = Date.now();
    const animationDuration = 4000; // 4 seconds total animation

    let animationFrame: number;
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;

      // Reset animation loop
      if (elapsed > animationDuration / 1000) {
        startTime = currentTime;
      }

      // Clear canvas with dark background
      ctx.fillStyle = "#05070A";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle radial gradient background
      const bgGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bgGradient.addColorStop(0, "rgba(20, 30, 50, 0.3)");
      bgGradient.addColorStop(1, "rgba(5, 7, 10, 0)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw central spark (always visible, pulsing)
      const sparkPulse = Math.sin(elapsed * 3) * 0.3 + 0.7;
      const sparkGradient = ctx.createRadialGradient(
        sparkX,
        sparkY,
        0,
        sparkX,
        sparkY,
        20 * sparkPulse
      );
      sparkGradient.addColorStop(0, "rgba(139, 92, 246, 1)");
      sparkGradient.addColorStop(0.3, "rgba(99, 102, 241, 0.8)");
      sparkGradient.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.fillStyle = sparkGradient;
      ctx.beginPath();
      ctx.arc(sparkX, sparkY, 25 * sparkPulse, 0, Math.PI * 2);
      ctx.fill();

      // Draw core spark
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.beginPath();
      ctx.arc(sparkX, sparkY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw branches
      branches.forEach((branch) => {
        const branchStart = branch.delay;
        const branchDuration = 0.6;

        if (elapsed >= branchStart && elapsed < branchStart + branchDuration) {
          branch.progress = (elapsed - branchStart) / branchDuration;
        } else if (elapsed >= branchStart + branchDuration) {
          branch.progress = 1;
        } else {
          branch.progress = 0;
        }

        if (branch.progress > 0) {
          const currentX = branch.startX + (branch.endX - branch.startX) * branch.progress;
          const currentY = branch.startY + (branch.endY - branch.startY) * branch.progress;

          // Gradient line from cyan to blue
          const lineGradient = ctx.createLinearGradient(
            branch.startX,
            branch.startY,
            branch.endX,
            branch.endY
          );
          lineGradient.addColorStop(0, "rgba(139, 92, 246, 0.6)");
          lineGradient.addColorStop(1, "rgba(6, 182, 212, 0.6)");

          ctx.strokeStyle = lineGradient;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(branch.startX, branch.startY);
          ctx.lineTo(currentX, currentY);
          ctx.stroke();
        }
      });

      // Update and draw nodes
      nodes.forEach((node) => {
        const nodeStart = node.delay;
        const nodeDuration = 0.4;

        if (elapsed >= nodeStart && elapsed < nodeStart + nodeDuration) {
          node.glow = (elapsed - nodeStart) / nodeDuration;
        } else if (elapsed >= nodeStart + nodeDuration) {
          node.glow = 1;
        } else {
          node.glow = 0;
        }

        if (node.glow > 0) {
          const pulse = Math.sin(elapsed * 2 + node.x + node.y) * 0.2 + 0.8;

          // Outer glow
          const glowSize = 25 * node.glow * pulse;
          const outerGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);

          if (node.isGrid) {
            // Grid nodes: more cyan/blue (structured)
            outerGlow.addColorStop(0, `rgba(6, 182, 212, ${0.4 * node.glow})`);
            outerGlow.addColorStop(0.5, `rgba(6, 182, 212, ${0.2 * node.glow})`);
            outerGlow.addColorStop(1, "rgba(6, 182, 212, 0)");
          } else {
            // Organic nodes: more indigo/purple (organic)
            outerGlow.addColorStop(0, `rgba(139, 92, 246, ${0.4 * node.glow})`);
            outerGlow.addColorStop(0.5, `rgba(99, 102, 241, ${0.2 * node.glow})`);
            outerGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
          }

          ctx.fillStyle = outerGlow;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
          ctx.fill();

          // Node core with gradient
          const coreGradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.size * pulse
          );

          if (node.isGrid) {
            coreGradient.addColorStop(0, "rgba(6, 182, 212, 1)");
            coreGradient.addColorStop(1, "rgba(6, 182, 212, 0.6)");
          } else {
            coreGradient.addColorStop(0, "rgba(139, 92, 246, 1)");
            coreGradient.addColorStop(1, "rgba(99, 102, 241, 0.6)");
          }

          ctx.fillStyle = coreGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * pulse * node.glow, 0, Math.PI * 2);
          ctx.fill();

          // Bright center
          ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * node.glow})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <motion.div
      className="relative w-full h-[500px] rounded-3xl overflow-hidden"
      style={{
        background: "#05070A",
        boxShadow: "0 0 60px rgba(6, 182, 212, 0.3), 0 0 100px rgba(99, 102, 241, 0.2)",
        border: "1px solid rgba(6, 182, 212, 0.2)",
      }}
      animate={{
        boxShadow: [
          "0 0 60px rgba(6, 182, 212, 0.3), 0 0 100px rgba(99, 102, 241, 0.2)",
          "0 0 80px rgba(6, 182, 212, 0.4), 0 0 120px rgba(99, 102, 241, 0.3)",
          "0 0 60px rgba(6, 182, 212, 0.3), 0 0 100px rgba(99, 102, 241, 0.2)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
}
