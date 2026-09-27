import RevealOnScroll from "./RevealOnScroll";
import { experienceData } from "../data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up" threshold={0.15}>
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 text-[#FF5A36] text-xs font-semibold mb-3 uppercase tracking-wider">
              Experience &amp; Simulations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#121316]">
              Engineering Experience
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#525866] leading-relaxed">
              Hands-on software engineering simulations focusing on industry-standard architecture, microservices, and component design.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-[#E5E7EB] ml-2 md:ml-4 space-y-12">
          {experienceData.map((exp, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={150} threshold={0.15}>
              <div className="relative group">
                
                {/* Sequentially Expanding Node Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[#FF5A36] shadow-sm transition-transform duration-500 group-hover:scale-125" />

                {/* Card Container */}
                <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E5E7EB] shadow-2xs hover:shadow-xl transition-all duration-300 max-w-3xl">
                  
                  {/* Meta details: Organization & Provider badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-extrabold text-xl text-[#121316]">
                        {exp.organization}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A36]">
                        {exp.provider}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium text-[#858D9D] px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5E7EB]">
                      {exp.date}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-base font-bold text-[#FF5A36] mb-5">
                    {exp.role}
                  </h3>

                  {/* Sequential Bullet Points */}
                  <ul className="space-y-3.5">
                    {exp.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-3.5 text-sm sm:text-base text-[#525866] leading-relaxed"
                      >
                        <span className="text-[#FF5A36] font-bold text-base mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Transparent Disclosure Tag */}
                  <div className="mt-6 pt-4 border-t border-[#ECEEF2] text-xs font-mono text-[#858D9D] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Job simulation via Forage — Component-based React development &amp; microservice APIs</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
