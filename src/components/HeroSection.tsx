import { CTAButton } from "./CTAButton";
import { ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-clinical via-background to-blush/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:gap-8 md:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            UAE&apos;s trusted dermacosmetics destination
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Clinical skincare,{" "}
            <span className="text-primary">curated by dermatologists.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base md:text-lg text-muted-foreground">
            Discover authentic products from La Roche-Posay, CeraVe, Bioderma and 50+ trusted
            brands — delivered across the UAE.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton to="/collections/sunscreens" size="lg">
              Shop Bestsellers
            </CTAButton>
            <CTAButton to="/routine-builder" variant="outline" size="lg">
              Build my routine
            </CTAButton>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            100% authentic • Sourced from authorized distributors
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary shadow-[var(--shadow-elevated)]">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80"
              alt="Premium dermacosmetics products"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-48 rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-card)] md:block">
            <div className="text-xs text-muted-foreground">Trusted by</div>
            <div className="mt-1 text-2xl font-semibold text-foreground">50,000+</div>
            <div className="text-xs text-muted-foreground">UAE customers</div>
          </div>
          <div className="absolute -right-3 top-6 hidden rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground shadow-[var(--shadow-card)] md:block">
            ⭐ 4.8 average rating
          </div>
        </div>
      </div>
    </section>
  );
}
