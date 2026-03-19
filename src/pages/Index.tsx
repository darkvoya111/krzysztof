import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <footer className="py-8 border-t border-border">
        <div className="section-container text-center text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Krzysztof Bednarczuk. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
