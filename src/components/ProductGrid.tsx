import type { Product } from "@/lib/placeholder-data";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

export function ProductGrid({ products, className }: { products: Product[]; className?: string }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
        No products found.
      </div>
    );
  }
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
