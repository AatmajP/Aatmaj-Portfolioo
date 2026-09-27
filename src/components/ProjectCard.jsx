import { useState, useRef, useEffect } from "react";

// Mini Product UI Visuals tailored for each project
function ProjectProductUI({ project }) {
  if (project.title === "InsightFlow AI") {
    return (
      <div className="w-full h-44 rounded-xl bg-[#FAF8F5] border border-[#ECEEF2] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5A36]/40 transition-colors">
        {/* Video Player Mini Header */}
        <div className="flex items-center justify-between text-xs text-[#525866]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-[#FF5A36] text-white flex items-center justify-center text-[10px]">▶</span>
            <span className="font-mono text-[11px] font-semibold text-[#121316]">meeting_recording.mp4</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-semibold border border-emerald-200">
            Transcribed
          </span>
        </div>

        {/* Audio waveform / chunks simulation */}
        <div className="flex items-center gap-1 my-1">
          {[40, 70, 45, 90, 60, 30, 80, 50, 75, 35, 65, 85, 40, 95, 55, 30, 70, 85, 50].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gray-300 rounded-full group-hover:bg-[#FF5A36]/70 transition-colors duration-300"
              style={{ height: `${h * 0.28}px` }}
            />
          ))}
        </div>

        {/* Pipeline Flow Pill */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#858D9D] pt-2 border-t border-[#ECEEF2]">
          <span className="font-semibold text-[#FF5A36]">VIDEO</span>
          <span>→</span>
          <span>TRANSCRIPT</span>
          <span>→</span>
          <span>SUMMARY</span>
          <span>→</span>
          <span className="text-[#121316] font-semibold">RAG Q&amp;A</span>
        </div>
      </div>
    );
  }

  if (project.title === "Mindscribe") {
    return (
      <div className="w-full h-44 rounded-xl bg-[#FAF8F5] border border-[#ECEEF2] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5A36]/40 transition-colors">
        {/* Pipeline Top Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#121316]">Research Agent Pipeline</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E5E7EB] text-[#525866]">
            Multi-Agent
          </span>
        </div>

        {/* Sequential Step Nodes with Connecting Lines */}
        <div className="grid grid-cols-5 gap-1.5 text-center my-2">
          {["SEARCH", "READ", "SYNTHESIZE", "CRITIQUE", "REPORT"].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center text-[10px] font-bold text-[#FF5A36] group-hover:border-[#FF5A36] shadow-2xs transition-colors">
                {idx + 1}
              </div>
              <span className="text-[9px] font-mono font-medium text-[#525866] mt-1 tracking-tighter">
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Generated Report Pill */}
        <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-white border border-[#E5E7EB]">
          <span className="text-[#525866] flex items-center gap-1.5 font-mono text-[10px]">
            <span>📄</span> synthesis_report.md
          </span>
          <span className="text-[10px] font-semibold text-[#FF5A36]">Validated ✓</span>
        </div>
      </div>
    );
  }

  if (project.title === "AI Product Advertisement Generator") {
    return (
      <div className="w-full h-44 rounded-xl bg-[#FAF8F5] border border-[#ECEEF2] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5A36]/40 transition-colors">
        {/* Header */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-[#121316] flex items-center gap-1.5">
            <span>✨</span> Creative Studio Canvas
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-50 text-[#FF5A36] border border-orange-200">
            8+ REST APIs
          </span>
        </div>

        {/* Visual Multi-Input to Output Composition */}
        <div className="flex items-center justify-between gap-2 my-2">
          <div className="flex-1 p-2 rounded-lg bg-white border border-[#E5E7EB] text-center">
            <span className="text-[10px] font-mono block text-[#858D9D]">Product</span>
            <span className="text-xs font-semibold text-[#121316]">Asset</span>
          </div>
          <span className="text-xs text-[#858D9D] font-bold">+</span>
          <div className="flex-1 p-2 rounded-lg bg-white border border-[#E5E7EB] text-center">
            <span className="text-[10px] font-mono block text-[#858D9D]">Model</span>
            <span className="text-xs font-semibold text-[#121316]">Ref</span>
          </div>
          <span className="text-xs text-[#858D9D] font-bold">→</span>
          <div className="flex-1 p-2 rounded-lg bg-[#FF5A36] text-white text-center shadow-sm">
            <span className="text-[10px] font-mono block opacity-80">AI Creative</span>
            <span className="text-xs font-bold">Generated</span>
          </div>
        </div>

        {/* Stack info */}
        <div className="text-[10px] font-mono text-[#858D9D] flex items-center justify-between pt-1 border-t border-[#ECEEF2]">
          <span>Prisma + PostgreSQL</span>
          <span>Cloudinary CDN</span>
        </div>
      </div>
    );
  }

  if (project.title === "SkyReserve") {
    return (
      <div className="w-full h-44 rounded-xl bg-[#FAF8F5] border border-[#ECEEF2] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5A36]/40 transition-colors">
        {/* Flight Route Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-[#121316]">BLR</span>
            <span className="text-[#FF5A36] text-xs">✈──────</span>
            <span className="font-bold text-sm text-[#121316]">DEL</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E5E7EB] text-emerald-600 font-semibold">
            Real-time Fare
          </span>
        </div>

        {/* Seat Selection Mini Map Grid */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E5E7EB] my-1">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">12A</div>
            <div className="w-5 h-5 rounded bg-[#FAF8F5] border border-[#E5E7EB] flex items-center justify-center text-[9px] text-[#525866]">12B</div>
            <div className="w-5 h-5 rounded bg-[#FAF8F5] border border-[#E5E7EB] flex items-center justify-center text-[9px] text-[#525866]">12C</div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-[#858D9D] block">Dynamic Fare</span>
            <span className="text-xs font-bold text-[#121316]">Validated ✓</span>
          </div>
        </div>

        {/* Architecture Pipeline Flow */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#858D9D] pt-1 border-t border-[#ECEEF2]">
          <span>SEARCH</span>
          <span>→</span>
          <span>RESULTS</span>
          <span>→</span>
          <span>SEAT MAP</span>
          <span>→</span>
          <span className="text-[#FF5A36] font-semibold">BOOKING</span>
        </div>
      </div>
    );
  }

  // ScholarIQ
  return (
    <div className="w-full h-44 rounded-xl bg-[#FAF8F5] border border-[#ECEEF2] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5A36]/40 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">📚</span>
          <span className="font-bold text-xs text-[#121316]">Document RAG Pipeline</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E5E7EB] text-[#525866]">
          Chroma DB + Mistral
        </span>
      </div>

      {/* RAG stages visual */}
      <div className="flex items-center justify-between gap-1 my-1">
        <div className="p-2 rounded bg-white border border-[#E5E7EB] text-center flex-1">
          <span className="text-[9px] font-mono text-[#858D9D] block">PDF</span>
          <span className="text-[10px] font-bold text-[#121316]">Upload</span>
        </div>
        <span className="text-xs text-[#858D9D]">→</span>
        <div className="p-2 rounded bg-white border border-[#E5E7EB] text-center flex-1">
          <span className="text-[9px] font-mono text-[#858D9D] block">Chunks</span>
          <span className="text-[10px] font-bold text-[#121316]">Vectors</span>
        </div>
        <span className="text-xs text-[#858D9D]">→</span>
        <div className="p-2 rounded bg-[#FF5A36] text-white text-center flex-1">
          <span className="text-[9px] font-mono opacity-80 block">MMR</span>
          <span className="text-[10px] font-bold">Answer</span>
        </div>
      </div>

      {/* Grounded Citation */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#858D9D] pt-1 border-t border-[#ECEEF2]">
        <span>RecursiveSplitter</span>
        <span className="text-emerald-600 font-semibold">Context-Grounded ✓</span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, onSelect }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, translateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsTouchOrReduced(isTouch || prefersReduced);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchOrReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Card lifts 4-8px and tilts up to 4 degrees max
    const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 4;
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 4;

    setTilt({ rotateX: rotX, rotateY: rotY, translateY: -6 });
    // Low opacity coral spotlight without heavy blur
    setSpotlight({ x: xPercent, y: yPercent, opacity: 0.12 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, translateY: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      data-cursor="hover-project"
      onClick={() => onSelect(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] cursor-pointer select-none transition-all duration-300 shadow-2xs hover:shadow-xl flex flex-col justify-between overflow-hidden"
      style={
        isTouchOrReduced
          ? {}
          : {
              transform: `perspective(1000px) translate3d(0, ${tilt.translateY}px, 0) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transition: tilt.rotateX === 0 ? "transform 0.4s ease-out, box-shadow 0.3s ease, border-color 0.3s ease" : "none",
              willChange: "transform, opacity"
            }
      }
    >
      {/* Low-opacity cursor-following coral spotlight (no blur) */}
      {!isTouchOrReduced && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(350px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 90, 54, 0.25), transparent 70%)`
          }}
        />
      )}

      <div className="p-7 sm:p-8 flex flex-col justify-between h-full relative z-10">
        
        {/* Top bar: Number & Arrow */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-sm font-bold text-[#858D9D] group-hover:text-[#FF5A36] transition-colors duration-200">
              {project.number}
            </span>
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E5E7EB] flex items-center justify-center text-[#121316] group-hover:bg-[#FF5A36] group-hover:text-white group-hover:border-[#FF5A36] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <span className="text-base leading-none">↗</span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="mb-4">
            <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF5A36] mb-1.5">
              {project.category}
            </span>
            <h3 className="text-2xl font-extrabold text-[#121316] tracking-tight group-hover:text-[#FF5A36] transition-colors group-hover:translate-x-0.5 duration-200">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[#525866] mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Mini Product UI Visual */}
          <div className="my-3">
            <ProjectProductUI project={project} />
          </div>

          {/* Description reveals cleanly on hover via opacity and translate3d */}
          <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 group-hover:mt-3">
            <p className="text-xs sm:text-sm text-[#525866] leading-relaxed pt-2 border-t border-[#ECEEF2]">
              {project.description}
            </p>
          </div>
        </div>

        {/* Bottom bar: Tech tags (animate slightly up on hover) */}
        <div className="mt-5 pt-4 border-t border-[#ECEEF2] flex flex-wrap gap-1.5 transition-transform duration-200 group-hover:-translate-y-1">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[#525866] font-medium border border-[#E5E7EB] group-hover:border-[#D1D5DB] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
