import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const canvasRef = useRef(null);
  const [cursorType, setCursorType] = useState("default"); // 'default', 'hover-btn', 'hover-project'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(true);

  useEffect(() => {
    const checkIsTouchOrReduced = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobileWidth = window.innerWidth < 1024;
      return isTouch || prefersReduced || isMobileWidth;
    };

    const isRestricted = checkIsTouchOrReduced();
    setIsTouchOrReduced(isRestricted);
    if (isRestricted) return;

    let rafId;
    let targetX = -100;
    let targetY = -100;
    let lastSpawnX = -100;
    let lastSpawnY = -100;

    // Particle pool for cursor background design trail
    const particles = [];
    const colors = ["#FF5A36", "#FF7A59", "#FFA07A", "#FFB380", "#F59E0B"];

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation loop for both cursor dot and background particle designs
    const render = () => {
      // 1. Position cursor dot
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      // 2. Draw background particles trail
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;
          p.size *= 0.96;

          if (p.life <= 0 || p.size <= 0.2) {
            particles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = p.life * 0.7;
          ctx.fillStyle = p.color;

          if (p.shape === "diamond") {
            // Draw small aesthetic diamond sparkle
            ctx.beginPath();
            ctx.moveTo(p.x, p.y - p.size);
            ctx.lineTo(p.x + p.size, p.y);
            ctx.lineTo(p.x, p.y + p.size);
            ctx.lineTo(p.x - p.size, p.y);
            ctx.closePath();
            ctx.fill();
          } else if (p.shape === "ring") {
            // Draw soft expanding ring ripple
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            // Draw soft circular sparkle dot
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }

        // Draw soft ambient spotlight glow behind cursor
        if (targetX > 0 && targetY > 0) {
          const radial = ctx.createRadialGradient(
            targetX,
            targetY,
            0,
            targetX,
            targetY,
            75
          );
          radial.addColorStop(0, "rgba(255, 90, 54, 0.09)");
          radial.addColorStop(0.5, "rgba(255, 90, 54, 0.03)");
          radial.addColorStop(1, "rgba(255, 90, 54, 0)");
          ctx.fillStyle = radial;
          ctx.beginPath();
          ctx.arc(targetX, targetY, 75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Check distance from last spawn to spawn decorative particles
      const dist = Math.hypot(targetX - lastSpawnX, targetY - lastSpawnY);
      if (dist > 8 && particles.length < 35) {
        lastSpawnX = targetX;
        lastSpawnY = targetY;

        // Spawn 1-2 particles with gentle velocity
        const count = Math.random() > 0.4 ? 2 : 1;
        for (let k = 0; k < count; k++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.2 + 0.3;
          const shapes = ["circle", "circle", "diamond", "ring"];

          particles.push({
            x: targetX + (Math.random() - 0.5) * 6,
            y: targetY + (Math.random() - 0.5) * 6,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: Math.random() * 3.5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 1.0,
            decay: Math.random() * 0.03 + 0.02,
            shape: shapes[Math.floor(Math.random() * shapes.length)]
          });
        }
      }

      const target = e.target.closest("[data-cursor]");
      if (target) {
        const type = target.getAttribute("data-cursor");
        setCursorType(type || "hover-btn");
      } else if (e.target.closest("button, a, [role='button']")) {
        setCursorType("hover-btn");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleResize = () => {
      setIsTouchOrReduced(checkIsTouchOrReduced());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]);

  if (isTouchOrReduced || !isVisible) return null;

  const isProject = cursorType === "hover-project";
  const isBtn = cursorType === "hover-btn";

  return (
    <>
      {/* Background Interactive Particle Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[99997] select-none"
      />

      {/* Main Interactive Cursor Dot / View Badge */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-[99999] select-none will-change-transform"
        style={{
          left: 0,
          top: 0
        }}
      >
        {isProject ? (
          <div className="bg-[#121316] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-[#FF5A36] flex items-center gap-1">
            <span>VIEW</span>
            <span className="text-[#FF5A36]">↗</span>
          </div>
        ) : isBtn ? (
          <div className="w-9 h-9 rounded-full bg-[#FF5A36]/15 border border-[#FF5A36] flex items-center justify-center transition-transform duration-150 scale-125" />
        ) : (
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5A36] shadow-sm" />
        )}
      </div>
    </>
  );
}
