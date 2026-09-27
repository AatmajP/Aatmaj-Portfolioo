import { personalInfo } from "../data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#E5E7EB] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A36]" />
            <span className="font-bold text-sm text-[#121316]">
              {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-[#858D9D] mt-1 font-mono">
            {personalInfo.catchphrase}
          </p>
        </div>

        {/* Social Links (Strictly verified) */}
        <div className="flex items-center gap-4 text-xs font-semibold text-[#525866]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF5A36] transition-colors"
          >
            GitHub ↗
          </a>
          <span>•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF5A36] transition-colors"
          >
            LinkedIn ↗
          </a>
          <span>•</span>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent("Project Inquiry from Portfolio")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF5A36] transition-colors"
          >
            Email ↗
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#858D9D] font-mono text-center sm:text-right">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
