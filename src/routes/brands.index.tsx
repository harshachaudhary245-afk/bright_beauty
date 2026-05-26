import { createFileRoute } from "@tanstack/react-router";
import { BRANDS } from "@/lib/placeholder-data";
import { BrandCard } from "@/components/BrandCard";

export const Route = createFileRoute("/brands/")({
  component: BrandsPage,
  head: () => ({ meta: [{ title: "All Brands — DermaExcel" }] }),
});

function BrandsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Authentic only</div>
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Brands we carry</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Sourced directly from authorized distributors across the UAE.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {BRANDS.map((b) => <BrandCard key={b.id} brand={b} />)}
      </div>
    </section>
  );
}
