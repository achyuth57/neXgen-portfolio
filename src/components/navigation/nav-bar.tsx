"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn, scrollToSection } from "@/lib/utils";
import { NAV_ITEMS, CONTAINER_CLASS } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

const SUFFIXES = ["dev", "design", "help"];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [suffixIndex, setSuffixIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setSuffixIndex((i) => (i + 1) % SUFFIXES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href.replace("#", ""));
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "border-border/60 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
        initial={false}
        animate={{ height: scrolled ? "var(--nav-height-scrolled)" : "var(--nav-height)" }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
      >
        <nav
          className={cn(CONTAINER_CLASS, "flex h-full items-center justify-between")}
          aria-label="Main navigation"
        >
          <Link
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex flex-col leading-none"
          >
            <span
              className="flex items-baseline overflow-hidden text-xl font-light tracking-widest"
              style={{
                fontFamily: "var(--font-tourney), sans-serif",
                WebkitTextStroke: "1.5px #22d3ee",
                background: "linear-gradient(to top, #22d3ee 50%, transparent 50%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 14px rgba(34,211,238,0.35)",
              }}
            >
              ACHYUTH.
              <span className="relative overflow-hidden" style={{ height: "1.2em", display: "inline-block", textShadow: "none", WebkitTextStroke: "0", color: "#22d3ee" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={SUFFIXES[suffixIndex]}
                    initial={{ y: prefersReducedMotion ? 0 : "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: prefersReducedMotion ? 0 : "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ display: "inline-block", textShadow: "none" }}
                  >
                    {SUFFIXES[suffixIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="text-[9px] tracking-widest uppercase text-cyan-500/70 font-mono">
              Design • Develop • Deploy
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                  activeSection === item.href.replace("#", "")
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={siteConfig.resume.viewPath}
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Resume
            </Link>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              className="absolute right-0 top-[var(--nav-height)] w-full border-b border-border bg-background p-4 shadow-lg sm:w-80"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-left text-sm transition-colors hover:bg-secondary",
                      activeSection === item.href.replace("#", "")
                        ? "bg-secondary font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  href={siteConfig.resume.viewPath}
                  className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Resume
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
