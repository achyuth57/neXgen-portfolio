import { featuredProjects } from "@/data/projects";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Featured Projects"
      description="Selected work demonstrating architecture thinking, engineering depth, and product impact."
      background="mesh"
    >
      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
