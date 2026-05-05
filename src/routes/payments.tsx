import { createFileRoute } from "@tanstack/react-router";
import { TopMenu } from "@/components/TopMenu";
import { AppBackground } from "@/components/AppBackground";
import { Search, Filter, Plus, ArrowDownLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/payments")({
  component: PaymentsPage,
  head: () => ({ meta: [{ title: "Płatności — Classy Cash" }] }),
});

type Payment = {
  id: string;
  student: string;
  category: string;
  amount: number;
  date: string;
  status: "Opłacone" | "Oczekuje" | "Zaległe";
  type: "in" | "out";
};

const payments: Payment[] = [
  { id: "P-2041", student: "Anna Kowalska", category: "Wycieczka do Krakowa", amount: 180, date: "05 maj 2026", status: "Opłacone", type: "in" },
  { id: "P-2040", student: "Piotr Nowak", category: "Składka listopad", amount: 50, date: "05 maj 2026", status: "Opłacone", type: "in" },
  { id: "P-2039", student: "Klasa 5B", category: "Materiały plastyczne", amount: 320, date: "04 maj 2026", status: "Opłacone", type: "out" },
  { id: "P-2038", student: "Maria Wiśniewska", category: "Prezent dla wychowawczyni", amount: 25, date: "04 maj 2026", status: "Opłacone", type: "in" },
  { id: "P-2037", student: "Jakub Lewandowski", category: "Wycieczka do Krakowa", amount: 180, date: "03 maj 2026", status: "Oczekuje", type: "in" },
  { id: "P-2036", student: "Zofia Szymańska", category: "Składka listopad", amount: 50, date: "01 maj 2026", status: "Zaległe", type: "in" },
  { id: "P-2035", student: "Tomasz Wójcik", category: "Wycieczka do Krakowa", amount: 180, date: "30 kwi 2026", status: "Opłacone", type: "in" },
  { id: "P-2034", student: "Klasa 5B", category: "Bilety do teatru", amount: 540, date: "28 kwi 2026", status: "Opłacone", type: "out" },
];

const statusStyle: Record<Payment["status"], string> = {
  "Opłacone": "bg-secondary/15 text-secondary",
  "Oczekuje": "bg-accent/20 text-amber-700",
  "Zaległe": "bg-destructive/15 text-destructive",
};

function PaymentsPage() {
  return (
    <div className="min-h-screen">
      <AppBackground />
      <TopMenu />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-secondary">Finanse klasy</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">Płatności</h1>
            <p className="mt-1 text-muted-foreground">Wszystkie wpłaty i wydatki w jednym przejrzystym widoku.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:opacity-95">
            <Plus className="h-4 w-4" /> Nowa płatność
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-card p-3 shadow-[var(--shadow-card)]">
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-muted/50 px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Szukaj ucznia, kategorii, numeru…" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          {["Wszystkie", "Wpłaty", "Wydatki", "Zaległe"].map((t, i) => (
            <button key={t} className={`rounded-full px-4 py-2 text-sm font-medium transition ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>{t}</button>
          ))}
          <button className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm text-foreground hover:bg-muted">
            <Filter className="h-4 w-4" /> Filtry
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-6 py-3">Nr</th>
                <th className="px-6 py-3">Uczeń / Pozycja</th>
                <th className="px-6 py-3">Kategoria</th>
                <th className="px-6 py-3">Data</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Kwota</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {payments.map((p) => (
                <tr key={p.id} className="transition hover:bg-muted/30">
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{p.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full ${p.type === "in" ? "bg-secondary/15 text-secondary" : "bg-primary/10 text-primary"}`}>
                        {p.type === "in" ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                      </div>
                      <span className="font-medium text-foreground">{p.student}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{p.category}</td>
                  <td className="px-6 py-4 text-muted-foreground">{p.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle[p.status]}`}>{p.status}</span>
                  </td>
                  <td className={`px-6 py-4 text-right font-semibold ${p.type === "in" ? "text-secondary" : "text-foreground"}`}>
                    {p.type === "in" ? "+" : "−"}{p.amount.toFixed(2)} zł
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
