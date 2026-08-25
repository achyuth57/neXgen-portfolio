"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GitHubIcon } from "@/components/ui/social-icons";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="card-surface overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-md"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.category}</Badge>
          {project.featured && (
            <Badge variant="outline">Featured</Badge>
          )}
        </div>

        <h3 className="text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="gap-1"
          >
            {expanded ? "Hide details" : "View case study"}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                expanded && "rotate-180"
              )}
            />
          </Button>
          {project.githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-border bg-secondary/30 p-6 sm:p-8">
              <DetailBlock label="Problem" content={project.problem} />
              <DetailBlock label="Solution" content={project.solution} />
              <DetailBlock label="Architecture" content={project.architecture} />
              <div>
                <h4 className="mb-2 text-sm font-medium text-foreground">
                  Key Challenges
                </h4>
                <ul className="space-y-1">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <DetailBlock label="Outcome" content={project.outcome} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function DetailBlock({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <h4 className="mb-1 text-sm font-medium text-foreground">{label}</h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>
    </div>
  );
}
