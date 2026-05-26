import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export function RatingStars({ rating, reviewCount, size = "sm", className }: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const dim = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={cn(dim, i < Math.round(rating) ? "fill-gold text-gold" : "text-border")}
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-muted-foreground">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}
