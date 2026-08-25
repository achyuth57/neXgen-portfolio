"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionWrapper } from "@/components/layout/section-wrapper";

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Professional Experience"
      description="Engineering roles focused on architecture, full-stack development, and technical leadership."
      background="dots"
      alt
    >
      <div className="relative space-y-8">
        <div
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block"
          aria-hidden="true"
        />

        {experience.map((entry, index) => (
          <motion.article
            key={entry.id}
            className="relative sm:pl-10"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div
              className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-background sm:block"
              aria-hidden="true"
            />

            <div className="card-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {entry.role}
                  </h3>
                  <p className="text-accent">{entry.organization}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{entry.duration}</p>
                  {entry.location && <p>{entry.location}</p>}
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-medium text-foreground">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1">
                    {entry.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-medium text-foreground">
                    Key Contributions
                  </h4>
                  <ul className="space-y-1">
                    {entry.contributions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
