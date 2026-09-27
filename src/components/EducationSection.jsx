import RevealOnScroll from "./RevealOnScroll";
import { educationData, certificationsData } from "../data";

export default function EducationSection() {
  return (
    <section id="education" className="py-28 border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Education (Compact sequential vertical timeline) */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up" threshold={0.15}>
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 text-[#FF5A36] text-xs font-semibold mb-3 uppercase tracking-wider">
                  Academic Background
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#121316]">
                  Education
                </h2>
              </div>
            </RevealOnScroll>

            {/* Sequential Animated Timeline */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-[#E5E7EB] ml-2 space-y-10">
              {educationData.map((item, idx) => (
                <RevealOnScroll
                  key={idx}
                  direction="up"
                  delay={idx * 150}
                  threshold={0.15}
                >
                  <div className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-3 border-[#858D9D] group-hover:border-[#FF5A36] group-hover:bg-[#FF5A36] transition-all duration-300" />

                    <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-[#121316]">
                          {item.institution}
                        </h3>
                        <span className="text-xs font-mono font-medium text-[#858D9D] px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E5E7EB]">
                          {item.duration}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-[#FF5A36]">
                        {item.degree}
                      </p>

                      <p className="text-xs text-[#525866] mt-1.5 flex items-center gap-1 font-medium">
                        <span>📍</span> {item.location}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="up" delay={100} threshold={0.15}>
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 text-[#FF5A36] text-xs font-semibold mb-3 uppercase tracking-wider">
                  Verified Credentials
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#121316]">
                  Certifications
                </h2>
              </div>
            </RevealOnScroll>

            <div className="space-y-5">
              {certificationsData.map((cert, idx) => (
                <RevealOnScroll
                  key={idx}
                  direction="up"
                  delay={150 + idx * 100}
                  threshold={0.15}
                >
                  <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] transition-all flex items-start gap-4 shadow-2xs hover:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF5A36] text-base shrink-0">
                      📜
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#121316] leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-medium text-[#525866] mt-1 font-mono">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
