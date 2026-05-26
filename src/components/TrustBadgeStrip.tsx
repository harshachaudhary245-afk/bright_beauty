import { ShieldCheck, Truck, BadgeCheck, HeartHandshake } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "100% Authentic", subtitle: "Sourced from authorized distributors" },
  { icon: Truck, title: "Free UAE Delivery", subtitle: "On orders over AED 150" },
  { icon: BadgeCheck, title: "Dermatologist Trusted", subtitle: "Curated by skin experts" },
  { icon: HeartHandshake, title: "Easy Returns", subtitle: "14-day hassle-free returns" },
];

export function TrustBadgeStrip() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-clinical text-clinical-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground">{title}</div>
              <div className="text-xs text-muted-foreground">{subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
