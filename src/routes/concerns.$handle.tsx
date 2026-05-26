import { createFileRoute, notFound } from "@tanstack/react-router";
import { PRODUCTS, SKIN_CONCERNS } from "@/lib/placeholder-data";
import { ProductGrid } from "@/components/ProductGrid";

export const Route = createFileRoute("/concerns/$handle")({
  component: SkinConcernPage,
  loader: ({ params }) => {
    const concern = SKIN_CONCERNS.find((c) => c.handle === params.handle);
    if (!concern) throw notFound();
    const products = PRODUCTS.filter((p) =>
      p.concerns.some((c) => c.toLowerCase().includes(concern.title.toLowerCase().split(" ")[0])),
    );
    return { concern, products };
  },
});

function SkinConcernPage() {
  const { concern, products } = Route.useLoaderData();
  return (
    <>
      <section className="bg-clinical">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="text-xs uppercase tracking-[0.18em] text-clinical-foreground">Skin concern</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">{concern.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Dermatologist-curated formulas to address {concern.title.toLowerCase()}.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <ProductGrid products={products.length ? products : PRODUCTS.slice(0, 8)} />
      </section>
    </>
  );
}
