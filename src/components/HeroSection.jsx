import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import HeroCharacter3D from "./HeroCharacter3D";
import { personalInfo } from "../data";

export default function HeroSection({ isIntroComplete = true }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isIntroComplete) {
      const timer = setTimeout(() => setMounted(true), 60);
      return () => clearTimeout(timer);
    }
  }, [isIntroComplete]);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Coral Accent Line Bridge from Intro */}
        <div
          className={`w-full max-w-5xl mx-auto h-[1.5px] bg-gradient-to-r from-transparent via-[#FF5A36]/60 to-transparent mb-8 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-60"
          }`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (Span 7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-20">
            
            {/* Step 1: Label / Catchphrase Badge */}
            <div
              className={`transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                <span className="text-xs font-semibold text-[#121316]">
                  {personalInfo.catchphrase}
                </span>
              </div>
            </div>

            {/* Step 2: Headline Line-by-Line Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-[#121316] leading-[1.12]">
              <span
                className={`block transition-all duration-700 delay-150 ease-out ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Building Digital Products
              </span>
              <span
                className={`block transition-all duration-700 delay-300 ease-out text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] to-orange-500 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                &amp; AI Systems.
              </span>
            </h1>

            {/* Step 3: Supporting Description */}
            <p
              className={`text-lg sm:text-xl text-[#525866] leading-relaxed max-w-2xl font-normal transition-all duration-700 delay-450 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {personalInfo.tagline}
            </p>

            {/* Step 4: Metadata (Role & Location) */}
            <div
              className={`flex flex-wrap items-center gap-4 text-xs font-medium text-[#858D9D] pt-1 transition-all duration-700 delay-550 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-sm">👨‍💻</span>
                {personalInfo.role}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-sm">📍</span>
                {personalInfo.location}
              </span>
            </div>

            {/* Step 5: CTA Buttons */}
            <div
              className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-700 delay-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <MagneticButton
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#FF5A36] hover:bg-[#E84C28] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 gap-2"
              >
                <span>View My Work</span>
                <span className="text-base leading-none">↘</span>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#121316] border border-[#E5E7EB] hover:border-[#D1D5DB] font-semibold text-sm transition-all duration-200 shadow-2xs gap-2"
              >
                <span>Let's Connect</span>
                <span className="text-[#858D9D] text-base leading-none">↗</span>
              </MagneticButton>
            </div>

          </div>

          {/* Right Column: Stylized 3D Character (Overlaps slightly on desktop, enters last) */}
          <div
            className={`lg:col-span-5 flex justify-center lg:-ml-6 relative z-10 transition-all duration-1000 delay-850 ease-out ${
              mounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            <HeroCharacter3D />
          </div>

        </div>

      </div>
    </section>
  );
}
