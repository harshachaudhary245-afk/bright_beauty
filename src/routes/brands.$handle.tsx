import { createFileRoute, notFound } from "@tanstack/react-router";
import { BRANDS, PRODUCTS } from "@/lib/placeholder-data";
import { ProductGrid } from "@/components/ProductGrid";

export const Route = createFileRoute("/brands/$handle")({
  component: BrandPage,
  loader: ({ params }) => {
    const brand = BRANDS.find((b) => b.handle === params.handle);
    if (!brand) throw notFound();
    const products = PRODUCTS.filter((p) => p.brand.toLowerCase().replace(/[^a-z]+/g, "-") === brand.handle);
    return { brand, products };
  },
});

function BrandPage() {
  const { brand, products } = Route.useLoaderData();
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="text-xs uppercase tracking-[0.18em] text-primary">Brand</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">{brand.name}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{brand.tagline}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <ProductGrid products={products.length ? products : PRODUCTS.slice(0, 8)} />
      </section>
    </>
  );
}
