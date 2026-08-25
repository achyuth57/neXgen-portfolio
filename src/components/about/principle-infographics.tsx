"use client";

import { motion, useReducedMotion } from "framer-motion";

type InfographicProps = {
  className?: string;
};

/** Layered system → clean structure */
export function ArchitectureInfographic({ className }: InfographicProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Tangled complexity (faded) */}
      <path
        d="M12 58 C22 40, 18 70, 32 48 C42 32, 38 62, 52 45"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-muted-foreground/30"
        strokeDasharray="2 2"
      />
      <path
        d="M14 62 C28 50, 24 72, 40 55"
        stroke="currentColor"
        strokeWidth="1"
        className="text-muted-foreground/20"
      />

      {/* Arrow transform */}
      <path
        d="M56 52 L66 52"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-accent"
        markerEnd="url(#arch-arrow)"
      />
      <polygon points="68,52 64,49 64,55" className="fill-accent" />

      {/* Clean layered architecture */}
      <rect
        x="74"
        y="22"
        width="36"
        height="12"
        rx="2"
        className="fill-accent/20 stroke-accent"
        strokeWidth="1.2"
      />
      <rect
        x="74"
        y="38"
        width="36"
        height="12"
        rx="2"
        className="fill-accent/10 stroke-accent/70"
        strokeWidth="1.2"
      />
      <rect
        x="74"
        y="54"
        width="36"
        height="12"
        rx="2"
        className="fill-secondary stroke-border"
        strokeWidth="1.2"
      />
      <circle cx="80" cy="28" r="1.5" className="fill-accent" />
      <circle cx="80" cy="44" r="1.5" className="fill-accent/70" />
      <circle cx="80" cy="60" r="1.5" className="fill-muted-foreground" />
    </svg>
  );
}

/** Rising performance bars + pulse line */
export function PerformanceInfographic({ className }: InfographicProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line
        x1="16"
        y1="66"
        x2="104"
        y2="66"
        stroke="currentColor"
        className="text-border"
        strokeWidth="1"
      />
      <rect x="22" y="48" width="12" height="18" rx="2" className="fill-secondary stroke-border" strokeWidth="1" />
      <rect x="42" y="38" width="12" height="28" rx="2" className="fill-accent/20 stroke-accent/50" strokeWidth="1" />
      <rect x="62" y="28" width="12" height="38" rx="2" className="fill-accent/30 stroke-accent/70" strokeWidth="1" />
      <rect x="82" y="18" width="12" height="48" rx="2" className="fill-accent/50 stroke-accent" strokeWidth="1.2" />

      {/* Latency curve */}
      <path
        d="M20 58 C40 52, 50 30, 70 24 C85 20, 95 16, 102 14"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="102" cy="14" r="3" className="fill-accent" />
      <text x="88" y="12" className="fill-muted-foreground text-[7px] font-mono">
        p95↓
      </text>
    </svg>
  );
}

/** Developer workflow / velocity loop */
export function DeveloperExperienceInfographic({ className }: InfographicProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Terminal window */}
      <rect
        x="14"
        y="16"
        width="52"
        height="40"
        rx="4"
        className="fill-code stroke-border"
        strokeWidth="1.2"
      />
      <circle cx="22" cy="24" r="1.8" className="fill-muted-foreground/50" />
      <circle cx="28" cy="24" r="1.8" className="fill-muted-foreground/50" />
      <circle cx="34" cy="24" r="1.8" className="fill-muted-foreground/50" />
      <path d="M22 36 h28" stroke="currentColor" className="text-accent/60" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 42 h20" stroke="currentColor" className="text-muted-foreground/40" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 48 h24" stroke="currentColor" className="text-muted-foreground/40" strokeWidth="1.5" strokeLinecap="round" />

      {/* Feedback loop */}
      <circle cx="88" cy="40" r="18" stroke="currentColor" className="text-accent/30" strokeWidth="1.2" strokeDasharray="3 2" />
      <circle cx="88" cy="40" r="10" className="fill-accent/15 stroke-accent" strokeWidth="1.2" />
      <path
        d="M82 40 L86 44 L96 34"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Flow arrow */}
      <path
        d="M68 36 C74 30, 78 30, 82 34"
        stroke="currentColor"
        className="text-muted-foreground"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Human + AI amplification graph */
export function AIMultiplierInfographic({ className }: InfographicProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Base engineering line */}
      <path
        d="M16 58 L50 50"
        stroke="currentColor"
        className="text-muted-foreground/50"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text x="14" y="70" className="fill-muted-foreground text-[6px] font-mono">
        fundamentals
      </text>

      {/* Multiplier lift */}
      <path
        d="M50 50 C62 48, 70 28, 88 18 C96 14, 102 12, 108 10"
        stroke="currentColor"
        className="text-accent"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Amplification bands */}
      <path
        d="M50 50 C62 46, 72 34, 90 26"
        stroke="currentColor"
        className="text-accent/25"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Nodes */}
      <circle cx="50" cy="50" r="3.5" className="fill-secondary stroke-border" strokeWidth="1.2" />
      <circle cx="88" cy="18" r="4" className="fill-accent" />
      <circle cx="88" cy="18" r="7" className="stroke-accent/30" strokeWidth="1" />

      <text x="70" y="72" className="fill-accent text-[6px] font-mono">
        × AI leverage
      </text>
    </svg>
  );
}

export const principleInfographics = {
  architecture: ArchitectureInfographic,
  performance: PerformanceInfographic,
  "developer-experience": DeveloperExperienceInfographic,
  "ai-multiplier": AIMultiplierInfographic,
} as const;

export function PrincipleCard({
  id,
  title,
  description,
  index,
}: {
  id: keyof typeof principleInfographics;
  title: string;
  description: string;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const Infographic = principleInfographics[id];

  return (
    <motion.article
      className="card-surface group flex flex-col overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-md"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="relative border-b border-border bg-secondary/40 px-4 pt-4 pb-2">
        <Infographic className="h-20 w-full text-foreground" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
