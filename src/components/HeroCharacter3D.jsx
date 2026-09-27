import { useState, useRef, useEffect } from "react";

export default function HeroCharacter3D() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isCharacterHovered, setIsCharacterHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 1024);
      setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Preload character images
  useEffect(() => {
    const img1 = new Image();
    img1.src = "./assets/developer-3d.png";
    const img2 = new Image();
    img2.src = "./assets/developer-waving.png";
  }, []);

  // Smooth cursor tracking across screen for 3D perspective
  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    let rafId;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetOffsetX = 0;
    let targetOffsetY = 0;

    const handleWindowMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Subtle normalized coordinates (-1 to +1)
      const normX = Math.max(-1.5, Math.min(1.5, (e.clientX - centerX) / (window.innerWidth / 2)));
      const normY = Math.max(-1.5, Math.min(1.5, (e.clientY - centerY) / (window.innerHeight / 2)));

      targetRotX = normY * 6;
      targetRotY = normX * 7;
      targetOffsetX = normX * 16;
      targetOffsetY = normY * -12;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setTilt({ rotateX: targetRotX, rotateY: targetRotY });
        setMouseOffset({ x: targetOffsetX, y: targetOffsetY });
      });
    };

    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, [isMobile, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[440px] sm:max-w-[480px] lg:max-w-[530px] select-none flex items-center justify-center p-4 sm:p-6"
    >
      {/* Ambient Warm Diffuse Glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,54,0.12)_0%,rgba(250,248,245,0.4)_50%,transparent_75%)] pointer-events-none -z-10" />

      {/* Floating 3D Character Container (Steady, never clipped) */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={
          isMobile || prefersReducedMotion
            ? {
                animation: prefersReducedMotion ? "none" : "gentleFloat 4s ease-in-out infinite"
              }
            : {
                transform: `perspective(1000px) rotateX(${-tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                animation: "gentleFloat 4s ease-in-out infinite",
                willChange: "transform"
              }
        }
      >
        {/* Interactive Character Wrapper */}
        <div
          onMouseEnter={() => setIsCharacterHovered(true)}
          onMouseLeave={() => setIsCharacterHovered(false)}
          onClick={() => setIsCharacterHovered((prev) => !prev)}
          className="relative w-full h-full flex items-center justify-center cursor-pointer group"
          title="Hover over me to say hello!"
        >
          {/* Base Character (Typing) */}
          <img
            src="./assets/developer-3d.png"
            alt="Aatmaj Patro - 3D Developer"
            className={`w-full h-full object-contain drop-shadow-2xl rounded-3xl pointer-events-auto transition-opacity duration-200 ${
              isCharacterHovered ? "opacity-0" : "opacity-100"
            }`}
            style={{
              filter: "drop-shadow(0 20px 30px rgba(18, 19, 22, 0.08))"
            }}
          />

          {/* Waving Character (Full character shaking with hand raised, no cutout artifacts) */}
          <div
            className={`absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none transition-opacity duration-200 z-30 ${
              isCharacterHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="./assets/developer-waving.png"
              alt="Aatmaj Patro - Waving"
              className={`w-full h-full object-contain drop-shadow-2xl rounded-3xl ${
                isCharacterHovered ? "animate-character-wave" : ""
              }`}
              style={{
                filter: "drop-shadow(0 20px 30px rgba(18, 19, 22, 0.08))"
              }}
            />
          </div>

          {/* Hello Speech Bubble (Pops up when cursor hovers on the cartoon) */}
          <div
            className={`absolute -top-14 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-out pointer-events-none ${
              isCharacterHovered
                ? "opacity-100 scale-100 translate-y-0 visible"
                : "opacity-0 scale-90 translate-y-3 invisible"
            }`}
          >
            <div className="relative px-4 py-2.5 rounded-2xl bg-[#121316] text-white shadow-2xl border border-gray-700/80 flex items-center gap-2.5 whitespace-nowrap">
              <span className="text-xl animate-wave">👋</span>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-xs text-white flex items-center gap-1.5">
                  <span>Hello!</span>
                  <span className="text-[#FF5A36]">I'm Aatmaj</span>
                </span>
                <span className="text-[10px] text-gray-300 font-medium">
                  Nice to meet you! Let's build something.
                </span>
              </div>
              {/* Speech Bubble Tail */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-[#121316] rotate-45 border-r border-b border-gray-700/80" />
            </div>
          </div>
        </div>

        {/* Floating Technology Chips with 3D Depth Parallax */}
        {/* 1. Java (Top-Left) */}
        <div
          className="absolute -top-1 left-0 sm:left-2 z-20 transition-transform duration-200 ease-out pointer-events-none"
          style={{
            transform: !isMobile && !prefersReducedMotion
              ? `translate3d(${-mouseOffset.x * 1.1}px, ${-mouseOffset.y * 1.1}px, 20px)`
              : "none"
          }}
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#E5E7EB] shadow-md text-xs font-semibold text-[#121316]">
            <span className="w-2 h-2 rounded-full bg-[#E76F00] animate-pulse" />
            <span>Java</span>
          </div>
        </div>

        {/* 2. Python (Top-Right) */}
        <div
          className="absolute top-2 -right-1 sm:right-2 z-20 transition-transform duration-200 ease-out pointer-events-none"
          style={{
            transform: !isMobile && !prefersReducedMotion
              ? `translate3d(${mouseOffset.x * 1.2}px, ${-mouseOffset.y * 1.0}px, 25px)`
              : "none"
          }}
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#E5E7EB] shadow-md text-xs font-semibold text-[#121316]">
            <span className="w-2 h-2 rounded-full bg-[#FFD43B]" />
            <span>Python</span>
          </div>
        </div>

        {/* 3. AI (Bottom-Left) */}
        <div
          className="absolute bottom-6 -left-2 sm:left-2 z-20 transition-transform duration-200 ease-out pointer-events-none"
          style={{
            transform: !isMobile && !prefersReducedMotion
              ? `translate3d(${-mouseOffset.x * 1.3}px, ${mouseOffset.y * 1.1}px, 30px)`
              : "none"
          }}
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#E5E7EB] shadow-md text-xs font-semibold text-[#121316]">
            <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
            <span>AI</span>
          </div>
        </div>

        {/* 4. RAG (Bottom-Right) */}
        <div
          className="absolute bottom-6 -right-2 sm:right-2 z-20 transition-transform duration-200 ease-out pointer-events-none"
          style={{
            transform: !isMobile && !prefersReducedMotion
              ? `translate3d(${mouseOffset.x * 1.1}px, ${mouseOffset.y * 1.2}px, 25px)`
              : "none"
          }}
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#E5E7EB] shadow-md text-xs font-semibold text-[#121316]">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>RAG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
