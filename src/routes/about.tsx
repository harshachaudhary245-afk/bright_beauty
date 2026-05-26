import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About — DermaExcel" }] }),
});

function AboutPage() {
  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold">Clinical skincare, made accessible.</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            DermaExcel is the UAE&apos;s trusted destination for authentic dermacosmetics —
            curated from authorized distributors and dermatologist-recommended brands.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { t: "100% Authentic", d: "Every product is sourced directly from authorized distributors and brand partners." },
            { t: "Dermatologist-Curated", d: "Our edit is built with input from licensed dermatologists and skincare experts." },
            { t: "Built for the UAE", d: "Fast nationwide delivery, AED pricing, and Arabic-friendly support." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-base font-semibold">{v.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
