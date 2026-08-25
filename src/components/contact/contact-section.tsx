"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { profile } from "@/data/profile";
import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="contact" background="glow" alt>
      <motion.div
        className="card-surface mx-auto max-w-2xl p-8 text-center sm:p-12"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s build something meaningful.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Based in {profile.location}. Open to discussing engineering roles,
          architecture challenges, and interesting product ideas.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          <a
            href={`mailto:${profile.email}`}
            className="text-accent hover:underline"
          >
            {profile.email}
          </a>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              GitHub
            </Link>
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
