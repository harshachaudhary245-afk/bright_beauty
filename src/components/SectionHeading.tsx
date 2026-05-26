import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function SectionHeading({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaTo,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="mt-2 text-sm md:text-base text-muted-foreground">{description}</p>
        )}
      </div>
      {ctaLabel && ctaTo && (
        <Link
          to={ctaTo}
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {ctaLabel} →
        </Link>
      )}
    </div>
  );
}
