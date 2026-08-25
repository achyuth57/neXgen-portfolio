type InfographicProps = {
  className?: string;
};

export function AIStackInfographic({ className }: InfographicProps) {
  return (
    <svg
      viewBox="0 0 140 90"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="70" cy="45" r="28" className="stroke-accent/25" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="70" cy="45" r="16" className="fill-accent/15 stroke-accent" strokeWidth="1.4" />
      <circle cx="70" cy="45" r="5" className="fill-accent" />
      {/* Orbit nodes */}
      <circle cx="70" cy="17" r="4" className="fill-card stroke-accent" strokeWidth="1.2" />
      <circle cx="98" cy="45" r="4" className="fill-card stroke-accent" strokeWidth="1.2" />
      <circle cx="70" cy="73" r="4" className="fill-card stroke-accent" strokeWidth="1.2" />
      <circle cx="42" cy="45" r="4" className="fill-card stroke-accent" strokeWidth="1.2" />
      <path d="M70 21 L70 29" className="stroke-accent/50" strokeWidth="1" />
      <path d="M94 45 L86 45" className="stroke-accent/50" strokeWidth="1" />
      <path d="M70 69 L70 61" className="stroke-accent/50" strokeWidth="1" />
      <path d="M46 45 L54 45" className="stroke-accent/50" strokeWidth="1" />
      <text x="58" y="88" className="fill-muted-foreground text-[7px] font-mono">
        agents · models · tools
      </text>
    </svg>
  );
}

export function FrontendStackInfographic({ className }: InfographicProps) {
  return (
    <svg
      viewBox="0 0 140 90"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="28" y="14" width="84" height="58" rx="6" className="fill-card stroke-border" strokeWidth="1.3" />
      <rect x="28" y="14" width="84" height="12" rx="6" className="fill-secondary" />
      <circle cx="38" cy="20" r="2" className="fill-muted-foreground/50" />
      <circle cx="46" cy="20" r="2" className="fill-muted-foreground/50" />
      <circle cx="54" cy="20" r="2" className="fill-muted-foreground/50" />
      <rect x="38" y="36" width="28" height="8" rx="2" className="fill-accent/25 stroke-accent/50" strokeWidth="1" />
      <rect x="70" y="36" width="32" height="8" rx="2" className="fill-secondary stroke-border" strokeWidth="1" />
      <rect x="38" y="50" width="64" height="6" rx="1.5" className="fill-muted-foreground/20" />
      <rect x="38" y="60" width="44" height="6" rx="1.5" className="fill-muted-foreground/15" />
    </svg>
  );
}

export function BackendStackInfographic({ className }: InfographicProps) {
  return (
    <svg
      viewBox="0 0 140 90"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="40" y="18" width="60" height="16" rx="3" className="fill-accent/15 stroke-accent" strokeWidth="1.2" />
      <rect x="40" y="40" width="60" height="16" rx="3" className="fill-secondary stroke-border" strokeWidth="1.2" />
      <rect x="40" y="62" width="60" height="16" rx="3" className="fill-secondary stroke-border" strokeWidth="1.2" />
      <path d="M70 34 L70 40" className="stroke-accent/60" strokeWidth="1.2" />
      <path d="M70 56 L70 62" className="stroke-muted-foreground/40" strokeWidth="1.2" />
      <circle cx="50" cy="26" r="2" className="fill-accent" />
      <circle cx="50" cy="48" r="2" className="fill-muted-foreground" />
      <circle cx="50" cy="70" r="2" className="fill-muted-foreground" />
    </svg>
  );
}

export function ToolsStackInfographic({ className }: InfographicProps) {
  return (
    <svg
      viewBox="0 0 140 90"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="24" y="28" width="36" height="36" rx="4" className="fill-secondary stroke-border" strokeWidth="1.2" />
      <path d="M32 40 h20 M32 48 h14 M32 56 h18" className="stroke-muted-foreground/50" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M72 46 L84 46 L90 34 L98 58 L104 42 L112 46 L120 46"
        className="stroke-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="120" cy="46" r="3" className="fill-accent" />
    </svg>
  );
}

export const stackInfographics = {
  ai: AIStackInfographic,
  frontend: FrontendStackInfographic,
  backend: BackendStackInfographic,
  "design-tools": ToolsStackInfographic,
} as const;

export type StackInfographicId = keyof typeof stackInfographics;
