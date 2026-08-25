"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CONTAINER_CLASS } from "@/lib/constants";
import { SectionBackground } from "./section-background";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
  title?: string;
  description?: string;
  background?: "mesh" | "dots" | "glow" | "code" | "none";
  alt?: boolean;
};

export function SectionWrapper({
  id,
  children,
  className,
  label,
  title,
  description,
  background = "none",
  alt = false,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28",
        alt && "section-alt",
        className
      )}
    >
      <SectionBackground variant={background} />
      <div className={cn(CONTAINER_CLASS, "relative")}>
        {(label || title || description) && (
          <motion.header
            className="mb-12 max-w-2xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {label && <p className="section-label mb-3">{label}</p>}
            {title && <h2 className="section-title mb-4">{title}</h2>}
            {description && (
              <p className="section-description">{description}</p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
