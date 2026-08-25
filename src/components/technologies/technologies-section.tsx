"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { technologyGroups } from "@/data/skills";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { cn } from "@/lib/utils";
import {
  stackInfographics,
  type StackInfographicId,
} from "./stack-infographics";

const FILTERS = [
  { id: "all", label: "All" },
  ...technologyGroups.map((g) => ({ id: g.id, label: g.label })),
] as const;

function TechCard({
  group,
  index,
  featured = false,
  hoveredTech,
  setHoveredTech,
}: {
  group: (typeof technologyGroups)[number];
  index: number;
  featured?: boolean;
  hoveredTech: string | null;
  setHoveredTech: (value: string | null) => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const Infographic =
    stackInfographics[group.id as StackInfographicId] ??
    stackInfographics.frontend;

  return (
    <motion.article
      className={cn(
        "card-surface overflow-hidden transition-all duration-300 hover:border-accent/35 hover:shadow-md",
        featured && "border-accent/25"
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <div
        className={cn(
          "relative border-b border-border px-5 pt-5",
          featured
            ? "bg-gradient-to-br from-accent-muted/60 via-secondary/30 to-transparent"
            : "bg-secondary/30"
        )}
      >
        <div
          className={cn(
            "mb-2 flex gap-4",
            featured
              ? "flex-col sm:flex-row sm:items-center sm:justify-between"
              : "items-start justify-between"
          )}
        >
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {featured ? "Primary focus" : `0${index + 1}`}
            </p>
            <h3
              className={cn(
                "mt-1 font-semibold text-foreground",
                featured ? "text-xl sm:text-2xl" : "text-lg"
              )}
            >
              {group.label}
            </h3>
            {group.description && (
              <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {group.description}
              </p>
            )}
          </div>
          <Infographic
            className={cn(
              "shrink-0 text-foreground",
              featured ? "h-24 w-36 sm:h-28 sm:w-40" : "h-20 w-28"
            )}
          />
        </div>
      </div>

      <div className="p-5">
        <ul
          className="flex flex-wrap gap-2"
          aria-label={`${group.label} technologies`}
        >
          {group.technologies.map((tech) => {
            const active = hoveredTech === `${group.id}:${tech}`;
            return (
              <li key={tech}>
                <button
                  type="button"
                  onMouseEnter={() => setHoveredTech(`${group.id}:${tech}`)}
                  onMouseLeave={() => setHoveredTech(null)}
                  onFocus={() => setHoveredTech(`${group.id}:${tech}`)}
                  onBlur={() => setHoveredTech(null)}
                  className={cn(
                    "rounded-md border px-2.5 py-1.5 text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    featured
                      ? "border-accent/20 bg-accent-muted/40 text-foreground hover:border-accent/50 hover:bg-accent-muted"
                      : "border-border bg-secondary text-secondary-foreground hover:border-accent/40 hover:text-accent",
                    active && "scale-[1.03] border-accent/60 shadow-sm"
                  )}
                >
                  {tech}
                </button>
              </li>
            );
          })}
        </ul>

        {featured && (
          <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            AI sits first in the stack — used for architecture exploration,
            coding acceleration, agents, and product intelligence — while
            engineering fundamentals stay in control.
          </p>
        )}
      </div>
    </motion.article>
  );
}

export function TechnologiesSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const featuredGroup = technologyGroups[0];
  const otherGroups = technologyGroups.slice(1);

  const visibleGroups = useMemo(() => {
    if (activeFilter === "all") return technologyGroups;
    return technologyGroups.filter((g) => g.id === activeFilter);
  }, [activeFilter]);

  const totalTechs = technologyGroups.reduce(
    (sum, g) => sum + g.technologies.length,
    0
  );

  return (
    <SectionWrapper
      id="technologies"
      label="Technologies"
      title="Technology Stack"
      description="AI-first tooling and modern engineering systems I use to design, build, and ship intelligent products."
      background="dots"
      alt
    >
      <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="rounded-full border border-accent/30 bg-accent-muted/40 px-3 py-1 font-medium text-accent">
          AI prioritized
        </span>
        <span className="rounded-full border border-border bg-card px-3 py-1">
          {technologyGroups.length} categories
        </span>
        <span className="rounded-full border border-border bg-card px-3 py-1">
          {totalTechs} technologies
        </span>
      </div>

      <div
        role="tablist"
        aria-label="Filter technology categories"
        className="mb-8 flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => {
          const selected = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "rounded-lg border px-3.5 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selected
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {activeFilter === "all" ? (
            <div className="space-y-5">
              <TechCard
                group={featuredGroup}
                index={0}
                featured
                hoveredTech={hoveredTech}
                setHoveredTech={setHoveredTech}
              />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {otherGroups.map((group, index) => (
                  <TechCard
                    key={group.id}
                    group={group}
                    index={index + 1}
                    hoveredTech={hoveredTech}
                    setHoveredTech={setHoveredTech}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl">
              {visibleGroups.map((group, index) => (
                <TechCard
                  key={group.id}
                  group={group}
                  index={index}
                  featured={group.featured}
                  hoveredTech={hoveredTech}
                  setHoveredTech={setHoveredTech}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <p className="mt-6 text-xs text-muted-foreground">
        Use the filters to focus on a category. Hover or focus a technology for
        emphasis.
      </p>
    </SectionWrapper>
  );
}
