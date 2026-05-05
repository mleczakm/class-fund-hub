import { createFileRoute, Link } from "@tanstack/react-router";
import { TopMenu } from "@/components/TopMenu";
import { AppBackground } from "@/components/AppBackground";
import { ArrowUpRight, TrendingUp, Wallet, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "Classy Cash — Pulpit skarbnika klasy" }] }),
});

const stats = [
  { label: "Saldo klasy", value: "4 280,50 zł", icon: Wallet, change: "+12%" },
  { label: "Zebrane w tym miesiącu", value: "1 240,00 zł", icon: TrendingUp, change: "+8%" },
  { label: "Uczniowie", value: "28", icon: Users, change: "100% opłaceni" },
  { label: "Zaległości", value: "2", icon: CheckCircle2, change: "−3 vs. ub. mies." },
];

function Dashboard() {
  return (
    <div className="min-h-screen">
      <AppBackground />
      <TopMenu />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="relative overflow-hidden rounded-3xl p-8 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-12" style={{ background: "var(--gradient-hero)" }}>
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">Klasa 5B · Rok 2025/26</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Nowoczesne zarządzanie finansami klasy</h1>
            <p className="mt-4 text-base text-primary-foreground/80">Upraszczaj. Automatyzuj. Edukuj. Pełna przejrzystość zbiórek, składek i wydatków w jednym miejscu.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/payments" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-background/90">
                Przeglądaj płatności <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">Nowa zbiórka</button>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-secondary/40 blur-3xl" />
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/60 bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary"><s.icon className="h-5 w-5" /></div>
                <span className="text-xs font-medium text-secondary">{s.change}</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Aktywne zbiórki</h2>
              <Link to="/payments" className="text-sm font-medium text-secondary hover:underline">Zobacz wszystkie</Link>
            </div>
            <ul className="divide-y divide-border/60">
              {[
                { name: "Wycieczka do Krakowa", paid: 22, total: 28, amount: "180 zł" },
                { name: "Składka klasowa — listopad", paid: 26, total: 28, amount: "50 zł" },
                { name: "Prezent dla wychowawczyni", paid: 18, total: 28, amount: "25 zł" },
              ].map((c) => {
                const pct = Math.round((c.paid / c.total) * 100);
                return (
                  <li key={c.name} className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{c.name}</p>
                        <p className="text-sm text-muted-foreground">{c.paid}/{c.total} uczniów · {c.amount}</p>
                      </div>
                      <span className="text-sm font-semibold text-secondary">{pct}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${pct}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 text-lg font-semibold">Ostatnia aktywność</h2>
            <ul className="space-y-4 text-sm">
              {[
                { who: "Anna Kowalska", what: "wpłaciła 180 zł", when: "10 min temu" },
                { who: "Piotr Nowak", what: "wpłacił 50 zł", when: "1 godz. temu" },
                { who: "Maria Wiśniewska", what: "wpłaciła 25 zł", when: "3 godz. temu" },
                { who: "Skarbnik", what: "dodał wydatek 320 zł", when: "wczoraj" },
              ].map((a, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  <div>
                    <p><span className="font-medium text-foreground">{a.who}</span> <span className="text-muted-foreground">{a.what}</span></p>
                    <p className="text-xs text-muted-foreground">{a.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
