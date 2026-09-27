import { useEffect } from "react";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-6 select-text">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#121316]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog (Full screen on mobile, max-w-3xl rounded card on desktop) */}
      <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-3xl bg-white md:rounded-3xl shadow-2xl border border-[#E5E7EB] flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-[#E5E7EB] flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-[#858D9D] px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E5E7EB]">
              {project.number}
            </span>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF5A36]">
                {project.category}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-[#121316] tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#FAF8F5] hover:bg-[#F3F4F6] text-[#121316] border border-[#E5E7EB] flex items-center justify-center transition-colors text-lg font-medium"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
          
          {/* Subtitle & Main Overview */}
          <div>
            <h3 className="text-base font-semibold text-[#FF5A36] mb-1">Overview</h3>
            <p className="text-lg font-medium text-[#121316] mb-3">
              {project.subtitle}
            </p>
            <p className="text-base text-[#525866] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* System Pipeline Architecture Diagram */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E7EB]">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#858D9D] mb-3">
              System Architecture & Workflow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {project.pipeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs relative flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#FF5A36]">0{idx + 1}</span>
                    <span className="text-[10px] font-mono text-[#858D9D] uppercase">Stage</span>
                  </div>
                  <div className="font-semibold text-xs text-[#121316] mb-1">
                    {item.step}
                  </div>
                  <div className="text-[11px] text-[#525866]">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E7EB]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#858D9D] mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                The Problem
              </h4>
              <p className="text-sm text-[#525866] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E7EB]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#858D9D] mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                The Engineering Solution
              </h4>
              <p className="text-sm text-[#525866] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#121316] mb-3">
              Key Features & Capabilities
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#525866]"
                >
                  <span className="text-[#FF5A36] font-bold text-base leading-none">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Implementation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#121316] mb-2">
              Technical Implementation
            </h4>
            <p className="text-sm text-[#525866] leading-relaxed p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E7EB]">
              {project.technicalImplementation}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#858D9D] mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#FAF8F5] text-[#121316] border border-[#E5E7EB]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between z-20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121316] text-white hover:bg-[#252830] transition-colors text-sm font-semibold shadow-sm"
          >
            <span>View on GitHub</span>
            <span>↗</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#FAF8F5] text-[#525866] hover:text-[#121316] border border-[#E5E7EB] text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
