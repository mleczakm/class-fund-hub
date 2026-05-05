export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[var(--shadow-card)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V10l7-5 7 5v11" />
          <path d="M10 21v-6h4v6" />
          <circle cx="12" cy="3" r="1" fill="currentColor" />
        </svg>
      </div>
      <div className="flex items-baseline gap-1 font-bold tracking-tight">
        <span className="text-primary">CLASSY</span>
        <span className="text-secondary">CASH</span>
      </div>
    </div>
  );
}
