import { useState } from "react";
import WelcomeIntro from "./components/WelcomeIntro";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [introComplete, setIntroComplete] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("intro") === "true" || params.get("replay") === "1") {
        return false;
      }
      return sessionStorage.getItem("hasSeenWelcomeIntro") === "true";
    } catch {
      return false;
    }
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121316] relative selection:bg-[#FF5A36]/15 selection:text-[#FF5A36]">
      {/* Cinematic One-Time Welcome Intro Overlay */}
      <WelcomeIntro onComplete={() => setIntroComplete(true)} />

      {/* Desktop Custom Cursor with View Badge & Particle Trail */}
      <CustomCursor />

      {/* Responsive Continuous Navbar */}
      <Navbar isIntroComplete={introComplete} />

      {/* Main Content Sections */}
      <main id="home">
        <HeroSection isIntroComplete={introComplete} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
