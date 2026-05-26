import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({ meta: [{ title: "FAQ — DermaExcel" }] }),
});

const FAQS = [
  { q: "Are your products 100% authentic?", a: "Yes. Every product on DermaExcel is sourced directly from authorized distributors and brand partners. We never sell grey-market or counterfeit goods." },
  { q: "How long does delivery take in the UAE?", a: "Same-day delivery is available in Dubai. Most UAE addresses receive their order within 1–2 business days. Free delivery on orders over AED 150." },
  { q: "Do you ship outside the UAE?", a: "Currently we deliver within the UAE only. International shipping is coming soon — join our newsletter to hear first." },
  { q: "Can I return a product?", a: "Unopened products can be returned within 14 days of delivery. Opened skincare products are non-returnable for hygiene reasons unless faulty." },
  { q: "Are prices inclusive of VAT?", a: "Yes, all displayed prices include UAE VAT." },
  { q: "Do you offer cash on delivery?", a: "Yes — cash on delivery is available across the UAE, in addition to card and digital wallet payments." },
];

function FAQPage() {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Help</div>
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Frequently asked questions</h1>
      <p className="mt-2 text-sm text-muted-foreground">Can&apos;t find your answer? Reach us at care@dermaexcel.ae.</p>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
        {FAQS.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-sm font-medium md:text-base">{f.q}</span>
              <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", open === i && "rotate-180")} />
            </button>
            {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
