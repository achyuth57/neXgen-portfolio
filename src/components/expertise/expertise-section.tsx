"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  stackInfographics,
  type StackInfographicId,
} from "@/components/technologies/stack-infographics";
import { cn } from "@/lib/utils";

const categoryToInfographic: Record<string, StackInfographicId> = {
  "ai-engineering": "ai",
  "frontend-architecture": "frontend",
  "full-stack": "backend",
  "ui-ux": "design-tools",
};

export function ExpertiseSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="expertise"
      label="Expertise"
      title="What I Build"
      description="AI engineering first — then frontend architecture, full-stack systems, and UI craft."
      background="mesh"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => {
          const infographicId =
            categoryToInfographic[category.id] ?? "frontend";
          const Infographic = stackInfographics[infographicId];
          const isAi = category.id === "ai-engineering";

          return (
            <motion.div
              key={category.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(isAi && "sm:col-span-2")}
            >
              <Card
                className={cn(
                  "group h-full transition-all duration-300 hover:border-accent/30 hover:shadow-md",
                  isAi && "border-accent/25"
                )}
              >
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    {isAi && (
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                        Lead capability
                      </p>
                    )}
                    <CardTitle className="text-base">{category.title}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <Infographic className="h-16 w-24 shrink-0 text-foreground opacity-90" />
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "rounded-md px-2.5 py-1 text-xs transition-colors",
                          isAi
                            ? "bg-accent-muted text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                            : "bg-secondary text-secondary-foreground group-hover:bg-accent-muted group-hover:text-accent"
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
