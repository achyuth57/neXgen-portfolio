"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aiTools, aiWorkflowSteps } from "@/data/ai-context";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AIEngineeringSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="ai-engineering"
      label="AI Engineering"
      title="AI-Augmented Engineering"
      description="AI doesn't replace engineering fundamentals. It amplifies them."
      background="glow"
      alt
    >
      <motion.blockquote
        className="mb-12 border-l-2 border-accent pl-6 text-lg italic text-muted-foreground"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        &ldquo;I don&apos;t just use AI to generate code. I use AI throughout
        the software engineering lifecycle.&rdquo;
      </motion.blockquote>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiTools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full transition-colors hover:border-accent/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="card-surface p-6 sm:p-8">
        <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Engineering Lifecycle
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
          {aiWorkflowSteps.map((step, index) => (
            <div key={step} className="flex items-center">
              <motion.span
                className="rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-medium sm:px-4 sm:text-sm"
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {step}
              </motion.span>
              {index < aiWorkflowSteps.length - 1 && (
                <span
                  className="mx-1 text-muted-foreground sm:mx-2"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
