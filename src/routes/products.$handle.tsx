import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRODUCTS, getProductByHandle } from "@/lib/placeholder-data";
import { RatingStars } from "@/components/RatingStars";
import { PriceBlock } from "@/components/PriceBlock";
import { OfferBadge } from "@/components/OfferBadge";
import { CTAButton } from "@/components/CTAButton";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { cart, openCart } from "@/lib/cart-store";
import { BadgeCheck, Truck, RotateCcw, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/products/$handle")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = getProductByHandle(params.handle);
    if (!product) throw notFound();
    return { product };
  },
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/brands/$handle" params={{ handle: product.brand.toLowerCase().replace(/[^a-z]+/g, "-") }} className="hover:text-foreground">
          {product.brand}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.title}</span>
      </div>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 md:grid-cols-2 md:gap-12">
        <div>
          <div className="overflow-hidden rounded-3xl bg-secondary">
            <img src={product.image} alt={product.title} className="aspect-square w-full object-cover" />
          </div>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {[product.image, product.image, product.image, product.image].map((src, i) => (
              <button key={i} className="aspect-square overflow-hidden rounded-lg border border-border bg-secondary">
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">{product.brand}</div>
          <h1 className="mt-2 text-2xl md:text-3xl font-semibold">{product.title}</h1>
          <div className="mt-3 flex items-center gap-3">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="md" />
            {product.badges?.map((b: "bestseller" | "new" | "sale" | "premium" | "dermatologist") => <OfferBadge key={b} kind={b} />)}
          </div>

          <div className="mt-5">
            <PriceBlock price={product.price} compareAt={product.compareAtPrice} size="lg" />
            <div className="mt-1 text-xs text-muted-foreground">Inclusive of VAT</div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-foreground/80">{product.description}</p>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Size</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {["30ml", "50ml", "100ml"].map((s, i) => (
                <button key={s} className={`rounded-full border px-4 py-2 text-sm ${i === 1 ? "border-foreground bg-foreground text-background" : "border-border"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton size="lg" className="flex-1 min-w-[180px]" onClick={() => { cart.add(product); openCart(); }}>
              Add to bag
            </CTAButton>
            <CTAButton size="lg" variant="dark" className="flex-1 min-w-[180px]" onClick={() => { cart.add(product); openCart(); }}>
              Buy now
            </CTAButton>
          </div>

          <ul className="mt-6 grid gap-3 rounded-2xl border border-border bg-secondary/50 p-4 text-sm">
            <li className="flex items-center gap-3"><Truck className="h-4 w-4 text-primary" /> Free UAE delivery over AED 150</li>
            <li className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-primary" /> 100% authentic — authorized distributor</li>
            <li className="flex items-center gap-3"><BadgeCheck className="h-4 w-4 text-primary" /> Dermatologist-trusted formulation</li>
            <li className="flex items-center gap-3"><RotateCcw className="h-4 w-4 text-primary" /> 14-day easy returns</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
        <SectionHeading title="Customers also viewed" />
        <div className="mt-6">
          <ProductGrid products={related} />
        </div>
      </section>
    </>
  );
}
