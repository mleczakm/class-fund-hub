export function AppBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-soft)" }} />
      <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <svg className="absolute bottom-0 left-0 w-full opacity-[0.07]" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d="M0,100 C360,180 720,20 1440,120 L1440,200 L0,200 Z" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  );
}
