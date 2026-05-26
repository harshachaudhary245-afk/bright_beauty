import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { cart, onOpenCart, useCart } from "@/lib/cart-store";
import { PriceBlock } from "./PriceBlock";
import { CTAButton } from "./CTAButton";
import { formatMoney } from "@/lib/format";

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { lines, subtotal, count } = useCart();

  useEffect(() => onOpenCart(() => setOpen(true)), []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const freeShippingThreshold = 150;
  const remaining = Math.max(0, freeShippingThreshold - subtotal);
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/50" onClick={() => setOpen(false)} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl">
        <header className="flex h-14 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <span className="font-semibold">Your bag ({count})</span>
          </div>
          <button aria-label="Close cart" onClick={() => setOpen(false)} className="p-2">
            <X className="h-5 w-5" />
          </button>
        </header>

        {lines.length > 0 ? (
          <>
            <div className="border-b border-border px-4 py-3">
              <div className="text-xs text-muted-foreground">
                {remaining > 0 ? (
                  <>Add <span className="font-semibold text-foreground">{formatMoney({ amount: remaining, currencyCode: "AED" })}</span> for free shipping</>
                ) : (
                  <span className="font-semibold text-success">You unlocked free shipping ✓</span>
                )}
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="divide-y divide-border">
                {lines.map((l) => (
                  <li key={l.product.id} className="flex gap-3 py-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-secondary">
                      <img src={l.product.image} alt={l.product.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="text-[11px] font-semibold uppercase text-muted-foreground">
                        {l.product.brand}
                      </div>
                      <div className="line-clamp-2 text-sm font-medium">{l.product.title}</div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center rounded-full border border-border">
                          <button aria-label="Decrease" onClick={() => cart.update(l.product.id, l.quantity - 1)} className="grid h-8 w-8 place-items-center">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm">{l.quantity}</span>
                          <button aria-label="Increase" onClick={() => cart.update(l.product.id, l.quantity + 1)} className="grid h-8 w-8 place-items-center">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <PriceBlock price={{ amount: l.product.price.amount * l.quantity, currencyCode: "AED" }} size="sm" />
                      </div>
                    </div>
                    <button
                      aria-label="Remove"
                      onClick={() => cart.remove(l.product.id)}
                      className="self-start p-1 text-muted-foreground hover:text-sale"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="space-y-3 border-t border-border p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <PriceBlock price={{ amount: subtotal, currencyCode: "AED" }} size="lg" />
              </div>
              <div className="text-xs text-muted-foreground">
                Tax and shipping calculated at checkout.
              </div>
              <CTAButton
                size="lg"
                className="w-full"
                onClick={() => {
                  // Placeholder: will redirect to Shopify checkout URL once connected.
                  alert("Shopify checkout will be connected via Storefront API.");
                }}
              >
                Checkout
              </CTAButton>
              <button
                onClick={() => setOpen(false)}
                className="w-full text-center text-xs text-muted-foreground hover:text-foreground"
              >
                Continue shopping
              </button>
            </footer>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-clinical text-clinical-foreground">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Your bag is empty</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Explore bestsellers and start your routine.
            </p>
            <Link
              to="/collections/$handle"
              params={{ handle: "serums" }}
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Shop bestsellers
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
