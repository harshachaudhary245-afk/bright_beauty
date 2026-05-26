import { Link } from "@tanstack/react-router";
import { cart } from "@/lib/cart-store";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/placeholder-data";
import { PriceBlock } from "./PriceBlock";
import { RatingStars } from "./RatingStars";
import { OfferBadge } from "./OfferBadge";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  return (
    <div className={cn("group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-elevated)]", className)}>
      <Link
        to="/products/$handle"
        params={{ handle: product.handle }}
        className="relative block aspect-square overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1">
            {product.badges.slice(0, 2).map((b) => (
              <OfferBadge key={b} kind={b} />
            ))}
          </div>
        )}
        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur-sm text-foreground/70 transition-colors hover:text-sale"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Heart className="h-4 w-4" />
        </button>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {product.brand}
        </div>
        <Link
          to="/products/$handle"
          params={{ handle: product.handle }}
          className="line-clamp-2 text-sm font-medium text-foreground hover:text-primary"
        >
          {product.title}
        </Link>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <PriceBlock price={product.price} compareAt={product.compareAtPrice} />
          <button
            aria-label={`Add ${product.title} to cart`}
            onClick={(e) => {
              e.preventDefault();
              cart.add(product, 1);
            }}
            className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
