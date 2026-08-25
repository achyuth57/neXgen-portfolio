"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { siteConfig } from "@/config/site";
import { CONTAINER_CLASS } from "@/lib/constants";
import { scrollToSection, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TechRotator } from "./tech-rotator";
import { HeroVisual } from "./hero-visual";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-[var(--nav-height)]"
    >
      <HeroVisual />
      <div className={cn(CONTAINER_CLASS, "relative z-10")}>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-2xl">
            <motion.p
              className="section-label mb-6"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {profile.tagline}
            </motion.p>

            <motion.h1
              className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {profile.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("ask-my-ai")}
              >
                Ask My AI
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href={siteConfig.resume.pdfPath} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <TechRotator />
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto lg:mx-0"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/15 blur-2xl dark:bg-accent/20" />
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-border/60 bg-card/30 backdrop-blur-sm" />
            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm" />

            <div className="photo-frame relative h-64 w-64 overflow-hidden rounded-2xl border border-border/80 bg-secondary shadow-2xl shadow-accent/10 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <Image
                src={profile.photo}
                alt={`${profile.name} - Professional photo`}
                fill
                className="object-cover object-[center_20%]"
                priority
                sizes="(max-width: 768px) 256px, 320px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
