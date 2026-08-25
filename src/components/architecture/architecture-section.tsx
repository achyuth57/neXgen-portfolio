"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { cn } from "@/lib/utils";

const architectureLayers = [
  { id: "product", label: "Product" },
  { id: "layer-1", labels: ["Frontend", "Backend", "AI"] },
  { id: "layer-2", labels: ["Components", "APIs", "Agents"] },
  { id: "platform", label: "Platform" },
  { id: "infrastructure", label: "Infrastructure" },
];

export function ArchitectureSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="architecture"
      label="Philosophy"
      title={profile.philosophy.title}
      description="Architectural principles that guide how I design and build software systems."
      background="code"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-3 sm:grid-cols-2">
          {profile.philosophy.principles.map((principle, index) => (
            <motion.button
              key={principle.id}
              type="button"
              className={cn(
                "card-surface p-4 text-left transition-all duration-200 hover:border-accent/30",
                activeNode === principle.id && "border-accent/50 bg-accent-muted/20"
              )}
              onClick={() =>
                setActiveNode(activeNode === principle.id ? null : principle.id)
              }
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <h3 className="text-sm font-medium text-foreground">
                {principle.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="card-surface flex flex-col items-center justify-center p-8"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-label="Architecture visualization"
        >
          <div className="flex w-full max-w-sm flex-col items-center gap-3">
            {architectureLayers.map((layer, layerIndex) => (
              <div key={layer.id} className="flex flex-col items-center gap-3">
                {layerIndex > 0 && (
                  <div className="h-4 w-px bg-border" aria-hidden="true" />
                )}
                {"label" in layer && layer.label ? (
                  <span
                    className={cn(
                      "rounded-lg border px-4 py-2 text-xs font-medium",
                      layerIndex === 0
                        ? "border-accent bg-accent-muted text-accent"
                        : "border-border bg-card text-foreground"
                    )}
                  >
                    {layer.label}
                  </span>
                ) : (
                  "labels" in layer &&
                  layer.labels && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {layer.labels.map((label) => (
                        <span
                          key={label}
                          className="rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-medium"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Conceptual system architecture — from product to infrastructure
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
