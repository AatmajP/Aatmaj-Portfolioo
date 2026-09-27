import RevealOnScroll from "./RevealOnScroll";
import { personalInfo } from "../data";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <RevealOnScroll direction="up" threshold={0.15}>
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 text-[#FF5A36] text-xs font-semibold uppercase tracking-wider">
              About &amp; Philosophy
            </div>
          </div>
        </RevealOnScroll>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 border-b border-[#E5E7EB]">
          
          {/* Left Column: Large Editorial Statement */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up" delay={100} threshold={0.15}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121316] leading-[1.3] tracking-tight">
                I build full-stack applications and practical Generative AI systems.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#525866] leading-relaxed">
                Computer Science Engineering undergraduate at{" "}
                <span className="font-semibold text-[#121316]">
                  New Horizon College of Engineering, Bengaluru
                </span>
                . I engineer systems using Java, Spring Boot, React.js, Node.js, Express.js, Python, LangChain, RAG, SQL, and modern backend infrastructure.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Column: Shorter Supporting Text */}
          <div className="lg:col-span-5 space-y-5 text-sm sm:text-base text-[#525866] leading-relaxed pt-2">
            <RevealOnScroll direction="up" delay={200} threshold={0.15}>
              <p>
                My work focuses on building useful software end-to-end — from frontend interfaces and REST APIs to database design, authentication, AI workflows, document retrieval, and context-grounded applications.
              </p>
              <p className="mt-4">
                I'm particularly interested in combining strong software engineering fundamentals with Generative AI to build practical products and intelligent workflows.
              </p>
            </RevealOnScroll>
          </div>

        </div>

        {/* Below: Editorial Animated Stats (Not styled as dashboard cards) */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Stat 1: 5 Featured Projects */}
          <RevealOnScroll direction="up" delay={150} threshold={0.15}>
            <div className="relative pl-6 border-l-2 border-[#FF5A36]">
              <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#121316] block tracking-tight">
                05
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5A36] block mt-2">
                Featured Projects
              </span>
              <p className="text-xs sm:text-sm text-[#525866] mt-1">
                End-to-end full-stack &amp; GenAI architectures built and verified.
              </p>
            </div>
          </RevealOnScroll>

          {/* Stat 2: 2023 - 2027 B.Tech in CSE */}
          <RevealOnScroll direction="up" delay={250} threshold={0.15}>
            <div className="relative pl-6 border-l-2 border-[#121316]">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#121316] block tracking-tight mt-1">
                2023 – 2027
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316] block mt-3">
                B.Tech in CSE
              </span>
              <p className="text-xs sm:text-sm text-[#525866] mt-1">
                New Horizon College of Engineering, Bengaluru.
              </p>
            </div>
          </RevealOnScroll>

          {/* Stat 3: Practical Focus */}
          <RevealOnScroll direction="up" delay={350} threshold={0.15}>
            <div className="relative pl-6 border-l-2 border-[#858D9D]">
              <span className="text-xl sm:text-2xl font-bold text-[#121316] block tracking-tight mt-1">
                Full-Stack + GenAI
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#858D9D] block mt-3">
                Core Engineering
              </span>
              <p className="text-xs sm:text-sm text-[#525866] mt-1">
                Hands-on project experience in web apps, RAG, and microservices.
              </p>
            </div>
          </RevealOnScroll>

        </div>

      </div>
    </section>
  );
}
