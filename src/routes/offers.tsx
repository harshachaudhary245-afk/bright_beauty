import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/ProductGrid";
import { PRODUCTS } from "@/lib/placeholder-data";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/offers")({
  component: OffersPage,
  head: () => ({ meta: [{ title: "Offers & Deals — DermaExcel" }] }),
});

function OffersPage() {
  const onSale = PRODUCTS.filter((p) => p.compareAtPrice);
  return (
    <>
      <section className="bg-gradient-to-br from-sale/10 via-background to-blush">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sale">Limited time</div>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold">Offers & Deals</h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-muted-foreground">
            UAE-exclusive savings on dermatologist-trusted skincare. Stock up while it lasts.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <SectionHeading title="On sale now" description={`${onSale.length} products with active discounts.`} />
        <div className="mt-6">
          <ProductGrid products={onSale.length ? onSale : PRODUCTS.slice(0, 8)} />
        </div>
      </section>
    </>
  );
}
