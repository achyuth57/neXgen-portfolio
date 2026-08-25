import { NavBar } from "@/components/navigation/nav-bar";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { ExpertiseSection } from "@/components/expertise/expertise-section";
import { TechnologiesSection } from "@/components/technologies/technologies-section";
import { AIEngineeringSection } from "@/components/ai/ai-engineering-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { ArchitectureSection } from "@/components/architecture/architecture-section";
import { AskMyAISection } from "@/components/ai/ask-my-ai-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ArchitectureSection />
        <AIEngineeringSection />
        <AskMyAISection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
