"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn, scrollToSection } from "@/lib/utils";
import { NAV_ITEMS, CONTAINER_CLASS } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const prefersReducedMotion = useReducedMotion();

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
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            {profile.shortName}
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
