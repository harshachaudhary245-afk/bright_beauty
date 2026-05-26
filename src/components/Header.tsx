import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { AnnouncementBar } from "./AnnouncementBar";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { useCart, openCart } from "@/lib/cart-store";

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <AnnouncementBar />
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 lg:gap-6">
        <button
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-full hover:bg-muted lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">
            D
          </div>
          <div className="text-lg font-semibold tracking-tight">
            Derma<span className="text-primary">Excel</span>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex h-10 items-center gap-1 rounded-full px-4 text-sm font-medium hover:bg-muted">
              Shop
            </button>
            {megaOpen && (
              <div className="absolute left-1/2 top-full w-[820px] -translate-x-1/2 rounded-2xl border border-border bg-background shadow-[var(--shadow-elevated)]">
                <MegaMenu onNavigate={() => setMegaOpen(false)} />
              </div>
            )}
          </div>
          <Link to="/brands" className="flex h-10 items-center rounded-full px-4 text-sm font-medium hover:bg-muted">
            Brands
          </Link>
          <Link to="/offers" className="flex h-10 items-center rounded-full px-4 text-sm font-medium text-sale hover:bg-muted">
            Offers
          </Link>
          <Link to="/routine-builder" className="flex h-10 items-center rounded-full px-4 text-sm font-medium hover:bg-muted">
            Routine Builder
          </Link>
        </nav>

        <div className="ml-auto hidden flex-1 max-w-md md:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products, brands, ingredients..."
              className="h-10 w-full rounded-full border border-border bg-secondary pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <button aria-label="Search" className="grid h-10 w-10 place-items-center rounded-full hover:bg-muted md:hidden">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="hidden h-10 w-10 place-items-center rounded-full hover:bg-muted md:grid">
            <User className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist" className="hidden h-10 w-10 place-items-center rounded-full hover:bg-muted md:grid">
            <Heart className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={openCart}
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-muted"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
