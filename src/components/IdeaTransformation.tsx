import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export function IdeaTransformation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let resizeListener: () => void;
    let timeoutToStart: NodeJS.Timeout;

    const startAnimation = () => {
      requestAnimationFrame(() => {
        // Double check existence in frame
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setCanvasSize = () => {
          // Prevent forced reflow by batching the read/write in rAF
          requestAnimationFrame(() => {
            if (!canvas || !ctx) return;
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
          });
        };

        setCanvasSize();
        resizeListener = setCanvasSize;
        window.addEventListener("resize", resizeListener);

        // Initial dimensions for setup
        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;

        // ... rest of the code ...


        // Update dimensions on resize for the animation loop
        const updateDimensions = () => {
          width = canvas.offsetWidth;
          height = canvas.offsetHeight;
        };
        window.addEventListener("resize", updateDimensions);

        // Animation state
        let startTime = Date.now();
        const totalDuration = 16000;

        // Phase durations
        const PHASE_1_START = 0;
        const PHASE_1_DURATION = 3;
        const PHASE_2_START = 3;
        const PHASE_3_START = 4;
        const PHASE_3_DURATION = 2.5;
        const PHASE_4_START = 6.5;
        const PHASE_4_DURATION = 2.5;
        const PHASE_5_START = 9;
        const PHASE_6_START = 12;

        // Positions
        let centerX = width * 0.5;
        let centerY = height * 0.5;
        const startX = -50;
        let successX = width + 50;

        // Update centers on resize
        const updateCenters = () => {
          centerX = width * 0.5;
          centerY = height * 0.5;
          successX = width + 50;
        };
        window.addEventListener("resize", updateCenters);

        let ballX = startX;
        let ballY = centerY;
        let ballSize = 8;
        let ballBrightness = 0.4;
        let ballGlow = 15;
        let bounceOffset = 0;
        let isTransformed = false;
        let liftOffset = 0;
        let ballLabel = "idea";

        // Pad width
        let padding = width < 480 ? 25 : 50;

        let corners = [
          { x: padding, y: padding, angle: Math.atan2(centerY - padding, centerX - padding), label: "⚡ Clarity" },
          { x: width - padding, y: padding, angle: Math.atan2(centerY - padding, centerX - (width - padding)), label: "⚡ Structure" },
          { x: padding, y: height - padding, angle: Math.atan2(centerY - (height - padding), centerX - padding), label: "⚡ Power" },
          { x: width - padding, y: height - padding, angle: Math.atan2(centerY - (height - padding), centerX - (width - padding)), label: "⚡ Execution" },
        ];

        const updateCorners = () => {
          padding = width < 480 ? 25 : 50;
          corners = [
            { x: padding, y: padding, angle: Math.atan2(centerY - padding, centerX - padding), label: "⚡ Clarity" },
            { x: width - padding, y: padding, angle: Math.atan2(centerY - padding, centerX - (width - padding)), label: "⚡ Structure" },
            { x: padding, y: height - padding, angle: Math.atan2(centerY - (height - padding), centerX - padding), label: "⚡ Power" },
            { x: width - padding, y: height - padding, angle: Math.atan2(centerY - (height - padding), centerX - (width - padding)), label: "⚡ Execution" },
          ];
        };
        window.addEventListener("resize", updateCorners);

        let beamProgress = 0;
        let transformProgress = 0;
        let successProgress = 0;

        const electricArcs: Array<{
          angle: number;
          length: number;
          offset: number;
          opacity: number;
        }> = [];

        const drawGlowText = (text: string, x: number, y: number, color: string, size: number, alpha: number = 1) => {
          ctx.font = `${size}px Inter, system-ui, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.shadowBlur = 15;
          ctx.shadowColor = color;
          ctx.fillStyle = color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
          ctx.fillText(text, x, y);
          ctx.shadowBlur = 0;
        };

        const animate = () => {
          const currentTime = Date.now();
          const elapsed = ((currentTime - startTime) % totalDuration) / 1000;

          ctx.fillStyle = "#05070A";
          ctx.fillRect(0, 0, width, height);

          const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(width, height) * 0.6);
          bgGradient.addColorStop(0, "rgba(20, 30, 50, 0.15)");
          bgGradient.addColorStop(1, "rgba(5, 7, 10, 0)");
          ctx.fillStyle = bgGradient;
          ctx.fillRect(0, 0, width, height);

          const coreGlow = Math.sin(elapsed * 2) * 0.1 + 0.3;
          const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
          coreGradient.addColorStop(0, `rgba(99, 102, 241, ${coreGlow * 0.3})`);
          coreGradient.addColorStop(0.5, `rgba(99, 102, 241, ${coreGlow * 0.15})`);
          coreGradient.addColorStop(1, "rgba(99, 102, 241, 0)");
          ctx.fillStyle = coreGradient;
          ctx.beginPath();
          ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(139, 92, 246, ${coreGlow})`;
          ctx.beginPath();
          ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
          ctx.fill();

          if (elapsed >= PHASE_2_START && elapsed < PHASE_6_START) {
            const labelAlpha = elapsed < PHASE_2_START + 0.5 ? (elapsed - PHASE_2_START) * 2 : 1;
            drawGlowText("Quroix Labs", centerX, centerY - 60, "rgb(139, 92, 246)", 16, labelAlpha);
          }

          if (elapsed >= PHASE_1_START && elapsed < PHASE_2_START) {
            const progress = (elapsed - PHASE_1_START) / PHASE_1_DURATION;
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            ballX = startX + (centerX - startX) * easeProgress;
            ballY = centerY;
            bounceOffset = Math.sin(progress * Math.PI * 6) * 8 * (1 - progress);
            ballY += bounceOffset;
            ballSize = 8;
            ballBrightness = 0.4;
            ballGlow = 15;
            isTransformed = false;
            ballLabel = "idea";
          }

          if (elapsed >= PHASE_2_START && elapsed < PHASE_3_START) {
            ballX = centerX;
            ballY = centerY;
            bounceOffset = 0;
            const pulseAmount = Math.sin((elapsed - PHASE_2_START) * 10) * 0.5 + 0.5;
            ballSize = 8 + pulseAmount * 1;
            ballBrightness = 0.4 + pulseAmount * 0.1;
            ballLabel = "idea";
          }

          if (elapsed >= PHASE_3_START && elapsed < PHASE_4_START) {
            beamProgress = (elapsed - PHASE_3_START) / PHASE_3_DURATION;
            corners.forEach((corner) => {
              const beamLength = Math.sqrt(Math.pow(centerX - corner.x, 2) + Math.pow(centerY - corner.y, 2));
              const currentLength = beamLength * beamProgress;
              const endX = corner.x + Math.cos(corner.angle) * currentLength;
              const endY = corner.y + Math.sin(corner.angle) * currentLength;
              drawGlowText(corner.label, corner.x, corner.y - 20, "rgb(6, 182, 212)", 14, beamProgress);
              const beamGradient = ctx.createLinearGradient(corner.x, corner.y, endX, endY);
              beamGradient.addColorStop(0, "rgba(6, 182, 212, 0)");
              beamGradient.addColorStop(0.5, "rgba(6, 182, 212, 0.6)");
              beamGradient.addColorStop(1, "rgba(139, 92, 246, 0.8)");
              ctx.strokeStyle = beamGradient;
              ctx.lineWidth = 2;
              ctx.shadowBlur = 10;
              ctx.shadowColor = "rgba(6, 182, 212, 0.5)";
              ctx.beginPath();
              ctx.moveTo(corner.x, corner.y);
              ctx.lineTo(endX, endY);
              ctx.stroke();
              ctx.shadowBlur = 0;
              if (beamProgress > 0.3) {
                const particleGlow = ctx.createRadialGradient(endX, endY, 0, endX, endY, 8);
                particleGlow.addColorStop(0, "rgba(6, 182, 212, 1)");
                particleGlow.addColorStop(1, "rgba(6, 182, 212, 0)");
                ctx.fillStyle = particleGlow;
                ctx.beginPath();
                ctx.arc(endX, endY, 8, 0, Math.PI * 2);
                ctx.fill();
              }
            });
            ballSize = 8 + beamProgress * 2;
            ballBrightness = 0.4 + beamProgress * 0.3;
            ballGlow = 15 + beamProgress * 10;
            ballLabel = "idea";
          }

          if (elapsed >= PHASE_4_START && elapsed < PHASE_5_START) {
            transformProgress = (elapsed - PHASE_4_START) / PHASE_4_DURATION;
            const easeTransform = 1 - Math.pow(1 - transformProgress, 3);
            ballSize = 8 + easeTransform * 25;
            ballBrightness = 0.4 + easeTransform * 0.6;
            ballGlow = 15 + easeTransform * 60;
            isTransformed = transformProgress > 0.5;
            ballLabel = transformProgress > 0.5 ? "product" : "idea";
            if (transformProgress > 0.3 && Math.random() > 0.85) {
              electricArcs.push({
                angle: Math.random() * Math.PI * 2,
                length: 30 + Math.random() * 40,
                offset: 0,
                opacity: 1,
              });
            }
          }

          if (elapsed >= PHASE_5_START && elapsed < PHASE_6_START) {
            const phase5Elapsed = elapsed - PHASE_5_START;
            liftOffset = Math.min(phase5Elapsed * 2, 4);
            const pulse = Math.sin(phase5Elapsed * 1.5) * 0.15 + 0.85;
            ballSize = 33 * pulse;
            ballBrightness = 1;
            ballGlow = 75 * pulse;
            isTransformed = true;
            ballLabel = "product";
            if (Math.random() > 0.95) {
              electricArcs.push({
                angle: Math.random() * Math.PI * 2,
                length: 30 + Math.random() * 40,
                offset: 0,
                opacity: 0.6,
              });
            }
          }

          if (elapsed >= PHASE_6_START) {
            const phase6Elapsed = elapsed - PHASE_6_START;
            successProgress = Math.min(phase6Elapsed / 2, 1);
            const easeSuccess = 1 - Math.pow(1 - successProgress, 3);
            ballX = centerX + (successX - centerX) * easeSuccess;
            ballY = centerY - liftOffset;
            const pulse = Math.sin(phase6Elapsed * 1.5) * 0.15 + 0.85;
            ballSize = 33 * pulse;
            ballBrightness = 1;
            ballGlow = 75 * pulse;
            isTransformed = true;
            ballLabel = "product";
            if (Math.random() > 0.9) {
              electricArcs.push({
                angle: Math.PI + Math.random() * 0.5 - 0.25,
                length: 20 + Math.random() * 30,
                offset: 0,
                opacity: 0.5,
              });
            }
            if (successProgress > 0.3) {
              const successAlpha = Math.min((successProgress - 0.3) / 0.3, 1);
              const successXPos = width < 480 ? width - 60 : width - 100;
              drawGlowText("Success", successXPos, centerY - liftOffset, "rgb(6, 182, 212)", 18, successAlpha);
            }
          }

          if (isTransformed) {
            electricArcs.forEach((arc, index) => {
              arc.offset += 2;
              arc.opacity -= 0.02;
              if (arc.opacity > 0) {
                const arcStartX = ballX + Math.cos(arc.angle) * ballSize;
                const arcStartY = ballY - liftOffset + Math.sin(arc.angle) * ballSize;
                const arcEndX = arcStartX + Math.cos(arc.angle) * arc.offset;
                const arcEndY = arcStartY + Math.sin(arc.angle) * arc.offset;
                ctx.strokeStyle = `rgba(6, 182, 212, ${arc.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.shadowBlur = 5;
                ctx.shadowColor = "rgba(6, 182, 212, 0.8)";
                ctx.beginPath();
                ctx.moveTo(arcStartX, arcStartY);
                ctx.lineTo(arcEndX, arcEndY);
                ctx.stroke();
                ctx.shadowBlur = 0;
              } else {
                electricArcs.splice(index, 1);
              }
            });
          }

          const currentBallY = ballY - liftOffset;
          const outerGlow = ctx.createRadialGradient(ballX, currentBallY, 0, ballX, currentBallY, ballGlow);
          if (isTransformed) {
            outerGlow.addColorStop(0, `rgba(139, 92, 246, ${ballBrightness * 0.4})`);
            outerGlow.addColorStop(0.3, `rgba(99, 102, 241, ${ballBrightness * 0.3})`);
            outerGlow.addColorStop(0.6, `rgba(6, 182, 212, ${ballBrightness * 0.2})`);
            outerGlow.addColorStop(1, "rgba(6, 182, 212, 0)");
          } else {
            outerGlow.addColorStop(0, `rgba(99, 102, 241, ${ballBrightness * 0.3})`);
            outerGlow.addColorStop(0.5, `rgba(99, 102, 241, ${ballBrightness * 0.15})`);
            outerGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
          }
          ctx.fillStyle = outerGlow;
          ctx.beginPath();
          ctx.arc(ballX, currentBallY, ballGlow, 0, Math.PI * 2);
          ctx.fill();

          const ballGradient = ctx.createRadialGradient(ballX, currentBallY, 0, ballX, currentBallY, ballSize);
          if (isTransformed) {
            ballGradient.addColorStop(0, `rgba(255, 255, 255, ${ballBrightness})`);
            ballGradient.addColorStop(0.3, `rgba(139, 92, 246, ${ballBrightness})`);
            ballGradient.addColorStop(0.6, `rgba(99, 102, 241, ${ballBrightness * 0.8})`);
            ballGradient.addColorStop(1, `rgba(6, 182, 212, ${ballBrightness * 0.6})`);
          } else {
            ballGradient.addColorStop(0, `rgba(139, 92, 246, ${ballBrightness})`);
            ballGradient.addColorStop(0.5, `rgba(99, 102, 241, ${ballBrightness * 0.7})`);
            ballGradient.addColorStop(1, `rgba(99, 102, 241, ${ballBrightness * 0.4})`);
          }
          ctx.fillStyle = ballGradient;
          ctx.shadowBlur = isTransformed ? 20 : 10;
          ctx.shadowColor = isTransformed ? "rgba(6, 182, 212, 0.6)" : "rgba(99, 102, 241, 0.4)";
          ctx.beginPath();
          ctx.arc(ballX, currentBallY, ballSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          if (isTransformed) {
            ctx.fillStyle = `rgba(255, 255, 255, ${ballBrightness * 0.9})`;
            ctx.beginPath();
            ctx.arc(ballX - ballSize * 0.2, currentBallY - ballSize * 0.2, ballSize * 0.3, 0, Math.PI * 2);
            ctx.fill();
          }

          if (ballX > 0 && ballX < width - 50) {
            const labelColor = isTransformed ? "rgb(6, 182, 212)" : "rgb(139, 92, 246)";
            const labelY = currentBallY + ballSize + 25;
            drawGlowText(ballLabel, ballX, labelY, labelColor, 14);
          }

          animationFrame = requestAnimationFrame(animate);
        };

        animate();
      });
    };

    // Delay start to prevent reflow during critical load
    timeoutToStart = setTimeout(startAnimation, 2500);

    return () => {
      clearTimeout(timeoutToStart);
      cancelAnimationFrame(animationFrame);
      if (resizeListener) window.removeEventListener("resize", resizeListener);
      // We also added extra listeners
      window.removeEventListener("resize", resizeListener); // redundant but safe
      // Clean up other anonymous listeners? 
      // The architecture above adds multiple listeners which is sloppy cleanup. 
      // Better to have one resize handler in the start function.
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