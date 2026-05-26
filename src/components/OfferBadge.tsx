import { cn } from "@/lib/utils";

const variants = {
  bestseller: "bg-foreground text-background",
  new: "bg-clinical text-clinical-foreground",
  sale: "bg-sale text-sale-foreground",
  premium: "bg-gold text-gold-foreground",
  dermatologist: "bg-blush text-blush-foreground",
} as const;

const labels = {
  bestseller: "Bestseller",
  new: "New",
  sale: "Sale",
  premium: "Premium",
  dermatologist: "Derm. Tested",
} as const;

export type BadgeKind = keyof typeof variants;

export function OfferBadge({ kind, className }: { kind: BadgeKind; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
        variants[kind],
        className,
      )}
    >
      {labels[kind]}
    </span>
  );
}
