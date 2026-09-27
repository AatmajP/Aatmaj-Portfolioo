import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { personalInfo } from "../data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Information */}
          <div className="lg:col-span-6 space-y-6">
            <RevealOnScroll direction="up" threshold={0.15}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 text-[#FF5A36] text-xs font-semibold uppercase tracking-wider">
                Initiate Connection
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121316] mt-3">
                Let's build something.
              </h2>
              
              <p className="text-lg text-[#525866] leading-relaxed max-w-lg mt-4">
                Have an idea, opportunity, or interesting problem to work on? Let's connect.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent("Project Inquiry from Portfolio")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF5A36] hover:bg-[#E84C28] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Send Email</span>
                  <span className="text-base leading-none">↗</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#121316] border border-[#E5E7EB] hover:border-[#D1D5DB] font-semibold text-sm transition-all duration-200 shadow-2xs"
                >
                  <span>GitHub</span>
                  <span className="text-[#858D9D] text-base leading-none">↗</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#121316] border border-[#E5E7EB] hover:border-[#D1D5DB] font-semibold text-sm transition-all duration-200 shadow-2xs"
                >
                  <span>LinkedIn</span>
                  <span className="text-[#858D9D] text-base leading-none">↗</span>
                </a>
              </div>

              {/* Direct Email Address with One-Click Copy */}
              <div className="pt-3 flex items-center gap-3 text-sm text-[#525866]">
                <span className="font-mono text-xs sm:text-sm text-[#121316] bg-white px-3 py-1.5 rounded-lg border border-[#E5E7EB]">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5E7EB] hover:border-[#FF5A36] text-[#121316] transition-colors cursor-pointer"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Developer-Terminal Aesthetic Card */}
          <div className="lg:col-span-6">
            <RevealOnScroll direction="up" delay={150} threshold={0.15}>
              <div className="w-full max-w-xl mx-auto rounded-3xl bg-[#141519] border border-gray-800 shadow-2xl overflow-hidden font-mono select-none">
                
                {/* Terminal Header */}
                <div className="px-5 py-3.5 bg-[#0F1013] border-b border-gray-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  </div>
                  <span className="text-gray-400 font-mono text-[11px]">~/aatmaj</span>
                  <span className="text-gray-600 font-mono text-[11px]">zsh</span>
                </div>

                {/* Terminal Body */}
                <div className="p-7 sm:p-8 space-y-5 text-gray-300 text-xs sm:text-sm">
                  
                  {/* Command 1 */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF5A36] font-bold">➜</span>
                      <span className="text-emerald-400 font-semibold">~/aatmaj</span>
                      <span className="text-gray-400">git:(main)</span>
                      <span className="text-white">$ whoami</span>
                    </div>
                    <p className="mt-1.5 pl-5 text-gray-400 text-xs leading-relaxed border-l-2 border-gray-800">
                      Aatmaj Patro · Full-Stack Developer &amp; Generative AI Builder
                      <br />
                      Bengaluru, India · B.Tech CSE (2023 – 2027)
                    </p>
                  </div>

                  {/* Command 2 */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF5A36] font-bold">➜</span>
                      <span className="text-emerald-400 font-semibold">~/aatmaj</span>
                      <span className="text-gray-400">git:(main)</span>
                      <span className="text-white">$ status</span>
                    </div>
                    <p className="mt-1.5 pl-5 text-gray-400 text-xs leading-relaxed border-l-2 border-gray-800">
                      Open for full-stack engineering, RAG pipelines &amp; AI workflow roles.
                    </p>
                  </div>

                  {/* Command 3 with Blinking Caret */}
                  <div className="pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF5A36] font-bold">➜</span>
                      <span className="text-emerald-400 font-semibold">~/aatmaj</span>
                      <span className="text-white font-semibold">
                        $ let's_build_something
                        <span className="inline-block w-2.5 h-4 bg-[#FF5A36] ml-1 align-middle animate-pulse" />
                      </span>
                    </div>
                  </div>

                  {/* Terminal Direct Action Button */}
                  <div className="pt-3">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent("Project Inquiry from Portfolio")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5A36] hover:bg-[#E84C28] text-white font-semibold text-xs transition-colors shadow-md"
                    >
                      <span>[ Send Email ↗ ]</span>
                    </a>
                  </div>

                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
