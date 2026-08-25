export const siteConfig = {
  name: "Achyuth Kumar Vaddi",
  title: "Frontend Architect | Full-Stack Developer | AI Builder",
  description:
    "Software engineer with 12+ years of experience across UI/UX, frontend architecture, and full-stack development. Building scalable products and intelligent experiences.",
  // TODO: Set your production domain when available
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og-image.png",
  author: "Achyuth Kumar Vaddi",
  keywords: [
    "Achyuth Kumar Vaddi",
    "Frontend Architect",
    "Full-Stack Developer",
    "AI Builder",
    "React",
    "Next.js",
    "TypeScript",
    "UI Developer",
    "Hyderabad",
  ],
  links: {
    github: "https://github.com/achyuth57",
    linkedin: "https://linkedin.com/in/achyuthkumar", // TODO: Confirm LinkedIn URL
    email: "mailto:achyuthkumar57@gmail.com",
  },
  resume: {
    // Prefer PDF when available; DOCX from previous portfolio for now
    pdfPath: "/resume/Achyuth_Developer_React.docx",
    viewPath: "/resume",
  },
} as const;
