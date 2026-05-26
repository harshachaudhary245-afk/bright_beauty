import { cn } from "@/lib/utils";
import { formatMoney } from "@/lib/format";
import type { Money } from "@/lib/placeholder-data";

export function PriceBlock({
  price,
  compareAt,
  size = "md",
  className,
}: {
  price: Money;
  compareAt?: Money;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const onSale = compareAt && compareAt.amount > price.amount;
  const discount = onSale
    ? Math.round(((compareAt!.amount - price.amount) / compareAt!.amount) * 100)
    : 0;

  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex flex-wrap items-baseline gap-2", className)}>
      <span className={cn("font-semibold text-foreground", sizes[size])}>
        {formatMoney(price)}
      </span>
      {onSale && (
        <>
          <span className="text-xs text-muted-foreground line-through">
            {formatMoney(compareAt!)}
          </span>
          <span className="rounded-full bg-sale/10 px-1.5 py-0.5 text-[10px] font-semibold text-sale">
            -{discount}%
          </span>
        </>
      )}
    </div>
  );
}
