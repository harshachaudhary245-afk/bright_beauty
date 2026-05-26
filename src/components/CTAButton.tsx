import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-clinical text-clinical-foreground hover:bg-clinical/80",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  outline: "border border-border bg-background text-foreground hover:bg-muted",
  dark: "bg-foreground text-background hover:bg-foreground/90",
};
const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  to?: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function CTAButton({ variant = "primary", size = "md", to, children, className, ...rest }: Props) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className,
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
