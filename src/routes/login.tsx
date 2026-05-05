import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({ meta: [{ title: "Logowanie — Classy Cash" }] }),
});

function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left: form */}
      <div className="relative flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20" style={{ background: "var(--gradient-soft)" }}>
        <Link to="/" className="mb-12"><Logo /></Link>
        <div className="mx-auto w-full max-w-md">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Witaj z powrotem, skarbniku.</h1>
          <p className="mt-3 text-muted-foreground">Zaloguj się, aby zarządzać finansami swojej klasy.</p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">E-mail</label>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input type="email" placeholder="anna.kowalska@szkola.pl" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-sm font-medium text-foreground">Hasło</label>
                <a href="#" className="text-xs font-medium text-secondary hover:underline">Zapomniałeś?</a>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <input type="password" placeholder="••••••••" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="h-4 w-4 rounded border-border accent-[oklch(0.55_0.11_165)]" />
              Zapamiętaj mnie na tym urządzeniu
            </label>

            <button type="button" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-95" style={{ background: "var(--gradient-hero)" }}>
              Zaloguj się <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>

            <div className="relative py-2 text-center text-xs uppercase tracking-wider text-muted-foreground">
              <span className="relative z-10 bg-[oklch(0.985_0.005_95)] px-3">lub</span>
              <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
            </div>

            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted">
              <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"/></svg>
              Kontynuuj z Google
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Nie masz konta?{" "}<a href="#" className="font-semibold text-secondary hover:underline">Załóż konto klasy</a>
          </p>
        </div>
      </div>

      {/* Right: brand panel */}
      <div className="relative hidden overflow-hidden lg:block" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-96 w-96 rounded-full bg-secondary/40 blur-3xl" />
        <svg className="absolute bottom-0 left-0 w-full text-accent/40" viewBox="0 0 1440 200" preserveAspectRatio="none"><path d="M0,120 C360,200 720,40 1440,140 L1440,200 L0,200 Z" fill="currentColor" /></svg>

        <div className="relative z-10 flex h-full flex-col justify-center px-16 text-primary-foreground">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/70">Classy Cash</p>
          <h2 className="mt-4 text-5xl font-bold leading-tight">Nowoczesne zarządzanie finansami dla szkół.</h2>
          <p className="mt-6 max-w-md text-primary-foreground/80">Upraszczaj. Automatyzuj. Edukuj. Pełna kontrola nad każdą złotówką klasowej kasy.</p>
          <ul className="mt-10 space-y-3">
            {["Efektywne zbieranie funduszy", "Zautomatyzowane płatności", "Przejrzyste raportowanie"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle2 className="h-5 w-5 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
