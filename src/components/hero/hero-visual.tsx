"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const floatingElements = [
  { label: "React", x: "8%", y: "18%", delay: 0 },
  { label: "TypeScript", x: "82%", y: "14%", delay: 0.4 },
  { label: "architecture()", x: "72%", y: "58%", delay: 0.8 },
  { label: "Next.js", x: "78%", y: "78%", delay: 1.2 },
  { label: "AI Agents", x: "6%", y: "72%", delay: 1.6 },
  { label: "→ scale", x: "18%", y: "42%", delay: 2 },
];

const nodes = [
  { cx: 18, cy: 28 },
  { cx: 42, cy: 18 },
  { cx: 68, cy: 32 },
  { cx: 82, cy: 55 },
  { cx: 55, cy: 72 },
  { cx: 28, cy: 68 },
  { cx: 48, cy: 48 },
];

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Atmospheric photo backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-atmosphere.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40 dark:opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      {/* Soft creative light orbs */}
      <div className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl dark:bg-accent/15" />
      <div className="absolute -right-20 top-1/3 h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl dark:bg-slate-300/5" />

      {/* Architecture constellation */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18] dark:opacity-[0.22]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => {
          const next = nodes[(i + 1) % nodes.length];
          return (
            <line
              key={`line-${i}`}
              x1={node.cx}
              y1={node.cy}
              x2={next.cx}
              y2={next.cy}
              stroke="url(#lineGrad)"
              strokeWidth="0.15"
            />
          );
        })}
        {nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={i === 6 ? 0.7 : 0.4}
            fill="currentColor"
            className="text-accent"
            opacity={0.5}
          />
        ))}
      </svg>

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 dark:opacity-30" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay dark:opacity-[0.2]"
        style={{
          backgroundImage: "url(/images/noise-texture.png)",
          backgroundSize: "280px 280px",
        }}
      />

      {/* Floating tech labels */}
      {floatingElements.map((el) => (
        <motion.span
          key={el.label}
          className="absolute hidden rounded-md border border-border/50 bg-card/40 px-2.5 py-1 font-mono text-[10px] text-muted-foreground shadow-sm backdrop-blur-md sm:block sm:text-xs"
          style={{ left: el.x, top: el.y }}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.55 }
              : { opacity: [0.35, 0.7, 0.35], y: [0, -8, 0] }
          }
          transition={{
            duration: 7,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.label}
        </motion.span>
      ))}
    </div>
  );
}
