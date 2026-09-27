import React, { useState, useRef, memo } from "react";
import { skillsData } from "../data";

// Precompute skill -> projects lookup map once at module level
const SKILL_PROJECT_MAP = new Map();
skillsData.forEach((category) => {
  category.items.forEach((skill) => {
    SKILL_PROJECT_MAP.set(skill.name, skill.relatedProjects || []);
  });
});

// Memoized individual Skill Tag with smart viewport-aware tooltip alignment
const SkillTag = memo(function SkillTag({ name, count }) {
  const [isHovered, setIsHovered] = useState(false);
  const [alignment, setAlignment] = useState("center");
  const tagRef = useRef(null);
  const relatedProjects = SKILL_PROJECT_MAP.get(name) || [];
  const hasProjects = relatedProjects.length > 0;

  const handleMouseEnter = () => {
    if (tagRef.current) {
      const rect = tagRef.current.getBoundingClientRect();
      const pillCenter = rect.left + rect.width / 2;
      // If pill or its center is on the left side (< 300px), align tooltip to left so it expands to the right
      if (rect.left < 260 || pillCenter < 300) {
        setAlignment("left");
      } else if (window.innerWidth - rect.right < 260 || window.innerWidth - pillCenter < 300) {
        setAlignment("right");
      } else {
        setAlignment("center");
      }
    }
    setIsHovered(true);
  };

  return (
    <div
      ref={tagRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        className={`relative z-10 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border text-left cursor-default select-none ${
          isHovered
            ? "bg-[#121316] text-white border-[#121316] shadow-md -translate-y-0.5"
            : "bg-[#FAF8F5] text-[#121316] border-[#E5E7EB] hover:border-[#FF5A36]/60 hover:bg-white"
        }`}
        style={{
          transform: isHovered ? "translate3d(0, -2px, 0)" : "translate3d(0, 0, 0)",
          willChange: "transform, opacity"
        }}
      >
        <span>{name}</span>
        {hasProjects && (
          <span
            className={`ml-2 text-[11px] font-mono px-2 py-0.5 rounded-full transition-colors ${
              isHovered ? "bg-[#FF5A36] text-white" : "bg-[#ECEEF2] text-[#525866]"
            }`}
          >
            {count}
          </span>
        )}
      </button>

      {/* Floating tooltip panel aligned dynamically to prevent side clipping */}
      <div
        className={`absolute bottom-full mb-2.5 z-40 pointer-events-none transition-all duration-200 ease-out max-w-[calc(100vw-32px)] ${
          alignment === "left"
            ? "left-0"
            : alignment === "right"
            ? "right-0"
            : "left-1/2 -translate-x-1/2"
        } ${
          isHovered
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-1.5 invisible"
        }`}
        style={{
          transform: isHovered
            ? alignment === "center"
              ? "translate3d(-50%, 0, 0)"
              : "translate3d(0, 0, 0)"
            : alignment === "center"
            ? "translate3d(-50%, 6px, 0)"
            : "translate3d(0, 6px, 0)",
          willChange: "transform, opacity"
        }}
      >
        <div className="bg-[#121316] text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-gray-700/60 flex items-center gap-2">
          <span className="font-bold text-[#FF5A36]">{name}</span>
          <span className="text-gray-400 font-mono text-[10px] uppercase">
            {hasProjects ? "Used in:" : "Core Competency"}
          </span>
          {hasProjects ? (
            <span className="text-gray-200 font-medium">
              {relatedProjects.join(", ")}
            </span>
          ) : (
            <span className="text-gray-300">DSA &amp; System Fundamentals</span>
          )}
        </div>
        {/* Tooltip triangle arrow aligned under pill anchor */}
        <div
          className={`w-2.5 h-2.5 bg-[#121316] rotate-45 border-r border-b border-gray-700/60 absolute -bottom-1 ${
            alignment === "left"
              ? "left-6"
              : alignment === "right"
              ? "right-6"
              : "left-1/2 -translate-x-1/2"
          }`}
        />
      </div>
    </div>
  );
});

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 text-[#FF5A36] text-xs font-semibold mb-3 uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#121316]">
            Technical Arsenal
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#525866] leading-relaxed">
            Technologies I use to build full-stack and AI-powered systems.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryGroup, catIdx) => (
            <div
              key={catIdx}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-2xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#858D9D] mb-5 pb-3 border-b border-[#ECEEF2]">
                  {categoryGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {categoryGroup.items.map((skill, sIdx) => (
                    <SkillTag
                      key={sIdx}
                      name={skill.name}
                      count={skill.relatedProjects?.length || 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
