import { Link } from "@tanstack/react-router";
import { COLLECTIONS, BRANDS } from "@/lib/placeholder-data";
import { X } from "lucide-react";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const close = () => onClose();
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-foreground/50" onClick={close} />
      <div className="absolute left-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-background shadow-2xl">
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          <div className="text-lg font-semibold">Menu</div>
          <button onClick={close} aria-label="Close menu" className="p-2">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-6 p-4">
          <Section title="Shop">
            {COLLECTIONS.map((c) => (
              <Link
                key={c.handle}
                to="/collections/$handle"
                params={{ handle: c.handle }}
                onClick={close}
                className="block py-2 text-sm text-foreground"
              >
                {c.title}
              </Link>
            ))}
          </Section>
          <Section title="Brands">
            {BRANDS.map((b) => (
              <Link
                key={b.handle}
                to="/brands/$handle"
                params={{ handle: b.handle }}
                onClick={close}
                className="block py-2 text-sm text-foreground"
              >
                {b.name}
              </Link>
            ))}
          </Section>
          <Section title="Discover">
            <Link to="/offers" onClick={close} className="block py-2 text-sm">Offers</Link>
            <Link to="/routine-builder" onClick={close} className="block py-2 text-sm">Routine Builder</Link>
            <Link to="/about" onClick={close} className="block py-2 text-sm">About</Link>
            <Link to="/contact" onClick={close} className="block py-2 text-sm">Contact</Link>
            <Link to="/faq" onClick={close} className="block py-2 text-sm">FAQ</Link>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      <div className="divide-y divide-border">{children}</div>
    </div>
  );
}
