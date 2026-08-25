import Link from "next/link";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { CONTAINER_CLASS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border py-12">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30 dark:opacity-20"
        aria-hidden="true"
      />
      <div className={cn(CONTAINER_CLASS, "relative")}>
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Frontend Architect · Full-Stack Developer · AI Builder
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </a>
          </div>

          <Separator className="max-w-xs" />

          <p className="text-xs text-muted-foreground">
            © {currentYear} {profile.name}
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with Next.js, TypeScript and a little help from AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
