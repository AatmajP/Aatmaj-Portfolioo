import { useState, useEffect } from "react";
import { personalInfo } from "../data";

export default function Navbar({ isIntroComplete = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault();
    alert("Official resume PDF link will be added upon public hosting. Please feel free to email aatmajpatro@gmail.com for the latest copy!");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ease-out ${
        !isIntroComplete ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100 translate-y-0"
      } ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5E7EB] py-3.5 shadow-2xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-[#121316] group-hover:bg-[#FF5A36] text-white flex items-center justify-center font-bold text-xs tracking-wider transition-colors shadow-2xs">
            AP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#121316] group-hover:text-[#FF5A36] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-[#858D9D] hidden sm:block">
              Full-Stack &amp; Generative AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Active Indicator */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-[#E5E7EB] p-1.5 rounded-full shadow-2xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#FF5A36] text-white shadow-2xs"
                    : "text-[#525866] hover:text-[#121316] hover:bg-[#FAF8F5]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={handleResumeClick}
            className="text-xs font-semibold px-4 py-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#121316] border border-[#E5E7EB] transition-colors cursor-pointer"
          >
            Resume 📄
          </button>
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-[#121316] hover:bg-[#FF5A36] text-white transition-colors shadow-2xs"
          >
            Connect ↗
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#121316] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <span className="text-base font-bold">✕</span>
            ) : (
              <span className="text-lg">☰</span>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-[#E5E7EB] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-orange-50 text-[#FF5A36]"
                      : "text-[#121316] hover:bg-[#FAF8F5]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleResumeClick(e);
                }}
                className="w-full text-center text-sm font-semibold py-3 rounded-xl bg-[#FAF8F5] text-[#121316] border border-[#E5E7EB]"
              >
                Resume 📄
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-semibold py-3 rounded-xl bg-[#FF5A36] text-white shadow-sm"
              >
                Connect ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
