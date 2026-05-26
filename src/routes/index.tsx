import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadgeStrip } from "@/components/TrustBadgeStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductGrid";
import { CollectionCard } from "@/components/CollectionCard";
import { BrandCard } from "@/components/BrandCard";
import { BRANDS, COLLECTIONS, PRODUCTS, SKIN_CONCERNS } from "@/lib/placeholder-data";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const bestsellers = PRODUCTS.filter((p) => p.badges?.includes("bestseller")).slice(0, 8);
  const newIn = PRODUCTS.filter((p) => p.badges?.includes("new")).concat(PRODUCTS).slice(0, 8);

  return (
    <>
      <HeroSection />
      <TrustBadgeStrip />

      {/* Shop by concern */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Find what works"
          title="Shop by skin concern"
          description="Targeted formulas, expert-curated for your skin goals."
        />
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {SKIN_CONCERNS.map((c) => (
            <Link
              key={c.handle}
              to="/concerns/$handle"
              params={{ handle: c.handle }}
              className="group flex aspect-square flex-col items-center justify-center rounded-2xl bg-clinical text-clinical-foreground transition-transform hover:-translate-y-1"
            >
              <div className="text-2xl">{c.icon}</div>
              <div className="mt-1 text-xs font-medium md:text-sm">{c.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-16">
        <SectionHeading
          eyebrow="Tried & loved"
          title="UAE bestsellers"
          ctaLabel="Shop all bestsellers"
          ctaTo="/collections/serums"
        />
        <div className="mt-6">
          <ProductGrid products={bestsellers} />
        </div>
      </section>

      {/* Collections */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <SectionHeading
            eyebrow="Curated edits"
            title="Explore collections"
            ctaLabel="View all"
            ctaTo="/brands"
          />
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {COLLECTIONS.slice(0, 8).map((c) => (
              <CollectionCard key={c.id} collection={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Authentic only"
          title="Trusted brands"
          description="Direct from authorized distributors."
          ctaLabel="All brands"
          ctaTo="/brands"
        />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {BRANDS.slice(0, 10).map((b) => (
            <BrandCard key={b.id} brand={b} />
          ))}
        </div>
      </section>

      {/* Editorial */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-blush p-8 md:p-12">
            <div className="max-w-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blush-foreground">
                K-Beauty
              </div>
              <h3 className="mt-2 text-3xl font-semibold">
                Korean skincare you&apos;ll obsess over
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                Anua, SKIN1004, Medicube and more. Innovation meets gentle.
              </p>
              <Link
                to="/collections/$handle"
                params={{ handle: "korean-beauty" }}
                className="mt-5 inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background"
              >
                Shop K-Beauty
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-clinical p-8 md:p-12">
            <div className="max-w-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-clinical-foreground">
                Sun care
              </div>
              <h3 className="mt-2 text-3xl font-semibold">
                UAE-ready SPF, every day
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                High protection sunscreens that feel invisible under makeup.
              </p>
              <Link
                to="/collections/$handle"
                params={{ handle: "sunscreens" }}
                className="mt-5 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
              >
                Shop SPF
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New in */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
        <SectionHeading eyebrow="Just landed" title="New in" />
        <div className="mt-6">
          <ProductGrid products={newIn} />
        </div>
      </section>
    </>
  );
}
