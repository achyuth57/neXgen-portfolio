import Link from "next/link";
import { Download, ArrowLeft, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { CONTAINER_CLASS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: `Resume | ${profile.name}`,
  description: `View and download ${profile.name}'s resume.`,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background pt-8 pb-16">
      <div className={CONTAINER_CLASS}>
        <div className="mb-8 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <Button size="sm" asChild>
            <a href={siteConfig.resume.pdfPath} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="card-surface mx-auto max-w-3xl p-8 sm:p-12">
          <div className="mb-8 border-b border-border pb-8 text-center">
            <FileText className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
            <h1 className="text-2xl font-semibold text-foreground">
              {profile.name}
            </h1>
            <p className="mt-1 text-muted-foreground">{profile.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {profile.location} · {profile.email}
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Summary
              </h2>
              <p className="text-sm leading-relaxed text-foreground">
                {profile.about.intro} {profile.about.focus}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Experience
              </h2>
              <ul className="space-y-4">
                {experience.map((entry) => (
                  <li key={entry.id}>
                    <p className="text-sm font-medium text-foreground">
                      {entry.role} · {entry.organization}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {entry.duration}
                      {entry.location ? ` · ${entry.location}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Education
              </h2>
              <ul className="space-y-2">
                {profile.education.map((edu) => (
                  <li key={edu.id} className="text-sm text-foreground">
                    {edu.degree} — {edu.institution} ({edu.year})
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild>
              <a href={siteConfig.resume.pdfPath} download>
                <Download className="h-4 w-4" />
                Download Full Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
