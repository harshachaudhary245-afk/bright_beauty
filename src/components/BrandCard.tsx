import { Link } from "@tanstack/react-router";
import type { Brand } from "@/lib/placeholder-data";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      to="/brands/$handle"
      params={{ handle: brand.handle }}
      className="group flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition-all hover:border-primary hover:shadow-[var(--shadow-card)]"
    >
      <div className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary">
        {brand.name}
      </div>
      <div className="mt-1 text-[11px] text-muted-foreground">{brand.tagline}</div>
    </Link>
  );
}
