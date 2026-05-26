import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">D</div>
              <div className="text-lg font-semibold">Derma<span className="text-primary">Excel</span></div>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              The UAE&apos;s trusted destination for authentic dermacosmetics, K-beauty and clinical
              skincare.
            </p>
            <div className="mt-4 flex gap-2">
              <a aria-label="Instagram" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-background">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="Facebook" href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-background">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol title="Shop">
            <Link to="/collections/$handle" params={{ handle: "serums" }}>Serums</Link>
            <Link to="/collections/$handle" params={{ handle: "sunscreens" }}>Sunscreens</Link>
            <Link to="/collections/$handle" params={{ handle: "korean-beauty" }}>Korean Beauty</Link>
            <Link to="/brands">All brands</Link>
            <Link to="/offers">Offers</Link>
          </FooterCol>

          <FooterCol title="Help">
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About</Link>
            <Link to="/faq">Shipping & Returns</Link>
            <Link to="/faq">Track my order</Link>
          </FooterCol>

          <div>
            <div className="mb-3 text-sm font-semibold">Stay in the loop</div>
            <p className="text-xs text-muted-foreground">
              Skincare tips, new launches & UAE-exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex overflow-hidden rounded-full border border-border bg-background"
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-transparent px-4 text-sm focus:outline-none"
              />
              <button className="bg-primary px-4 text-sm font-medium text-primary-foreground">
                Join
              </button>
            </form>
            <div className="mt-5 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> care@dermaexcel.ae</div>
              <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +971 4 000 0000</div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} DermaExcel. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-sm font-semibold">{title}</div>
      <div className="flex flex-col gap-2 text-sm text-muted-foreground [&_a:hover]:text-foreground">
        {children}
      </div>
    </div>
  );
}
