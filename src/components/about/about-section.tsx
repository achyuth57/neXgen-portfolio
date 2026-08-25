"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { PrincipleCard } from "./principle-infographics";

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="about" label="About Me" background="dots" alt>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl leading-relaxed text-foreground">
            {profile.about.intro}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {profile.about.focus}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Based in {profile.location}
          </p>

          <div className="mt-8 space-y-3">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Education
            </h3>
            {profile.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-foreground">
                  {edu.degree}
                </p>
                <p className="text-xs text-muted-foreground">
                  {edu.institution} · {edu.year}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.about.principles.map((principle, index) => (
            <PrincipleCard
              key={principle.id}
              id={principle.id}
              title={principle.title}
              description={principle.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
