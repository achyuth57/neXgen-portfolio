"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

export function TechRotator() {
  const technologies = profile.heroTechnologies;
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [technologies.length, prefersReducedMotion]);

  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-muted-foreground">Currently building with</span>
      <div className="relative h-6 min-w-[120px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={technologies[index]}
            className="absolute inset-0 font-medium text-accent"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {technologies[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
