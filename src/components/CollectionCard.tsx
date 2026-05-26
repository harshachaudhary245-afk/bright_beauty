import { Link } from "@tanstack/react-router";
import type { Collection } from "@/lib/placeholder-data";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      to="/collections/$handle"
      params={{ handle: collection.handle }}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-secondary"
    >
      <img
        src={collection.image}
        alt={collection.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-background">
        <div className="text-lg font-semibold">{collection.title}</div>
        <div className="text-xs opacity-90">{collection.productCount} products</div>
      </div>
    </Link>
  );
}
