import { createFileRoute, notFound } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductGrid";
import { getCollectionByHandle, getProductsByCollection } from "@/lib/placeholder-data";

export const Route = createFileRoute("/collections/$handle")({
  component: CollectionPage,
  loader: ({ params }) => {
    const collection = getCollectionByHandle(params.handle);
    if (!collection) throw notFound();
    return { collection, products: getProductsByCollection(params.handle) };
  },
});

function CollectionPage() {
  const { collection, products } = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="text-xs uppercase tracking-[0.18em] text-primary">Collection</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">{collection.title}</h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-muted-foreground">
            {collection.description}
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            {products.length} of {collection.productCount} products
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {["All", "Bestsellers", "New in", "On sale", "Under AED 100"].map((f, i) => (
            <button
              key={f}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium ${
                i === 0 ? "border-foreground bg-foreground text-background" : "border-border bg-background text-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto text-xs text-muted-foreground">Sort: Featured</div>
        </div>
        <ProductGrid products={products} />
        {products.length > 0 && (
          <div className="mt-10">
            <SectionHeading title="You may also like" />
            <ProductGrid className="mt-6" products={products.slice(0, 4)} />
          </div>
        )}
      </section>
    </>
  );
}
