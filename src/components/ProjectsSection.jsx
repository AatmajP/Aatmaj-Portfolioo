import ProjectCard from "./ProjectCard";
import RevealOnScroll from "./RevealOnScroll";
import { listProyek } from "../data";

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="py-28 border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll direction="up" threshold={0.15}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 text-[#FF5A36] text-xs font-semibold mb-3 uppercase tracking-wider">
                Featured Work
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#121316]">
                Selected Projects
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-[#525866] leading-relaxed">
                Full-stack applications, multi-agent AI research pipelines, and RAG systems engineered with scalable architecture.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#858D9D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
              <span>Tap or click any project to inspect full architecture</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listProyek.map((project, idx) => (
            <RevealOnScroll
              key={project.id}
              direction="up"
              delay={idx * 100}
              threshold={0.1}
            >
              <ProjectCard
                project={project}
                onSelect={onSelectProject}
              />
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
