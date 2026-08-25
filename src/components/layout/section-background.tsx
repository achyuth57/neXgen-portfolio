"use client";

import { cn } from "@/lib/utils";

type SectionBackgroundProps = {
  variant?: "mesh" | "dots" | "glow" | "code" | "none";
  className?: string;
};

export function SectionBackground({
  variant = "none",
  className,
}: SectionBackgroundProps) {
  if (variant === "none") return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {variant === "mesh" && (
        <>
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/8 blur-3xl dark:bg-accent/12" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sky-400/8 blur-3xl dark:bg-sky-500/10" />
          <div className="absolute inset-0 bg-dot-grid opacity-30 dark:opacity-20" />
        </>
      )}

      {variant === "dots" && (
        <div className="absolute inset-0 bg-dot-grid opacity-40 dark:opacity-25" />
      )}

      {variant === "glow" && (
        <>
          <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl dark:bg-accent/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-accent-muted/40 via-transparent to-transparent dark:from-accent-muted/20" />
        </>
      )}

      {variant === "code" && (
        <>
          <div className="absolute inset-0 bg-code/40 dark:bg-code/20" />
          <div className="absolute inset-0 bg-grid-fade opacity-50 dark:opacity-30" />
          <div className="absolute -right-10 top-1/4 h-56 w-56 rounded-full bg-accent/8 blur-3xl" />
        </>
      )}
    </div>
  );
}
